import React, { useEffect, useMemo, useRef, useState } from 'react';
import { drawPath, stateCode, constants } from './constants';
import useMousePosition from './hooks/mouseTrack';

export interface CityColorMap {
  [key: string]: string;
}

/**
 * Shared empty map. Defaulting `cityColors` to a fresh `{}` on every render gave the fill effects a
 * dependency that never compared equal, so they re-walked the whole map on each pass.
 */
const EMPTY_CITY_COLORS: CityColorMap = {};

let fallbackInstanceId = 0;

/**
 * useId only exists from React 18, while the declared peer range starts at 16.8. Prefer the real
 * hook when present and otherwise mint a stable per-instance counter id, so mounts never crash.
 */
const useId = () => {
  const fallbackRef = useRef<string | null>(null);
  const reactId = React.useId ? React.useId() : null;
  if (reactId !== null) {
    return reactId;
  }
  if (fallbackRef.current === null) {
    fallbackRef.current = `react-map-${fallbackInstanceId++}`;
  }
  return fallbackRef.current;
};

const hintStyleBase = {
  position: 'fixed' as React.CSSProperties['position'],
  backgroundColor: 'white',
  padding: '10px',
  borderRadius: 5,
  border: '1px solid #ccc',
  pointerEvents: 'none' as React.CSSProperties['pointerEvents'],
  zIndex: 1000,
};

export type BorderStyle = 'solid' | 'dashed' | 'dotted' | 'dash-dot' | 'dash-double-dot';

/** Hoisted so a given border style always yields the same object reference. */
const strokeProperties: Record<BorderStyle, { strokeDasharray: string }> = {
  solid: { strokeDasharray: 'none' },
  dashed: { strokeDasharray: '8 4' },
  dotted: { strokeDasharray: '2 2' },
  'dash-dot': { strokeDasharray: '8 4 2 4' },
  'dash-double-dot': { strokeDasharray: '8 4 2 4 2 4' },
};

const getStrokeProperties = (borderStyle?: BorderStyle) =>
  (borderStyle && strokeProperties[borderStyle]) || strokeProperties.solid;

const REGION_ATTRIBUTE = 'data-state';
const REGION_SELECTOR = `[${REGION_ATTRIBUTE}]`;

interface Region {
  element: SVGElement;
  code: string;
}

/**
 * Resolves the region an event was raised on. Pointer events are bound once on the <svg> root and
 * resolved here, rather than binding a fresh set of closures to every <path> the map renders.
 */
const regionFromEvent = (target: EventTarget | null): Region | null => {
  if (!(target instanceof Element)) {
    return null;
  }
  const code = target.getAttribute(REGION_ATTRIBUTE);
  return code === null ? null : { element: target as SVGElement, code };
};

interface HintAnchor {
  x: number;
  y: number;
}

/** Where to pin the hint for a region reached by keyboard, since there is no pointer to follow. */
const anchorOf = (element: SVGElement): HintAnchor => {
  const rect = element.getBoundingClientRect();
  return { x: rect.left, y: rect.bottom };
};

const isActivationKey = (key: string) => key === 'Enter' || key === ' ' || key === 'Spacebar';

export interface SurinameProps {
  type: 'select-single' | 'select-multiple';
  size?: number;
  mapColor?: string;
  strokeColor?: string;
  strokeWidth?: number;
  hoverColor?: string;
  selectColor?: string;
  hints?: boolean;
  hintTextColor?: string;
  hintBackgroundColor?: string;
  hintPadding?: string;
  hintBorderRadius?: number;
  onSelect?: (state: string | null, selectedStates?: string[]) => void;
  cityColors?: CityColorMap;
  disableClick?: boolean;
  disableHover?: boolean;
  borderStyle?: BorderStyle;
}

const Suriname = ({
  type,
  size = constants.WIDTH,
  mapColor = constants.MAPCOLOR,
  strokeColor = constants.STROKE_COLOR,
  strokeWidth = constants.STROKE_WIDTH,
  hoverColor,
  selectColor,
  hints,
  hintTextColor,
  hintBackgroundColor,
  hintPadding,
  hintBorderRadius,
  onSelect,
  cityColors,
  disableClick = false,
  disableHover = false,
  borderStyle,
}: SurinameProps) => {
  if (type === 'select-single') {
    return (
      <SurinameSingle
        type="select-single"
        size={size}
        mapColor={mapColor}
        strokeColor={strokeColor}
        strokeWidth={strokeWidth}
        hoverColor={hoverColor}
        selectColor={selectColor}
        hints={hints}
        hintTextColor={hintTextColor}
        hintBackgroundColor={hintBackgroundColor}
        hintPadding={hintPadding}
        hintBorderRadius={hintBorderRadius}
        onSelect={onSelect}
        cityColors={cityColors}
        disableClick={disableClick}
        disableHover={disableHover}
        borderStyle={borderStyle}
      />
    );
  } else if (type === 'select-multiple') {
    return (
      <SurinameMultiple
        type="select-multiple"
        size={size}
        mapColor={mapColor}
        strokeColor={strokeColor}
        strokeWidth={strokeWidth}
        hoverColor={hoverColor}
        selectColor={selectColor}
        hints={hints}
        hintTextColor={hintTextColor}
        hintBackgroundColor={hintBackgroundColor}
        hintPadding={hintPadding}
        hintBorderRadius={hintBorderRadius}
        onSelect={onSelect}
        cityColors={cityColors}
        disableClick={disableClick}
        disableHover={disableHover}
        borderStyle={borderStyle}
      />
    );
  } else {
    return null;
  }
};

const SurinameSingle = ({
  size,
  mapColor,
  strokeColor,
  selectColor,
  strokeWidth,
  hoverColor,
  hints,
  onSelect,
  hintTextColor,
  hintBackgroundColor,
  hintPadding,
  hintBorderRadius,
  cityColors = EMPTY_CITY_COLORS,
  disableClick,
  disableHover,
  borderStyle,
}: SurinameProps) => {
  const instanceId = useId().replace(/:/g, '');
  const svgRef = useRef<SVGSVGElement | null>(null);
  const { x, y } = useMousePosition(Boolean(hints));
  const [stateHovered, setStateHovered] = useState<string | null>(null);
  const [hintAnchor, setHintAnchor] = useState<HintAnchor | null>(null);
  const [selectedState, setSelectedState] = useState<string | null>(null);
  const [viewBox, setViewBox] = useState<string>('0 0 100 100');
  const strokeProps = getStrokeProperties(borderStyle);
  const selectedFill = selectColor || constants.SELECTED_COLOR;

  useEffect(() => {
    const svg = svgRef.current;
    if (svg) {
      const bbox = svg.getBBox();
      setViewBox(`${bbox.x} ${bbox.y} ${bbox.width} ${bbox.height}`);
    }
  }, []);

  const mapStyle = useMemo(
    () => ({
      width: size,
      stroke: strokeColor,
      strokeWidth,
      ...strokeProps,
    }),
    [size, strokeColor, strokeWidth, strokeProps]
  );

  const hintStyle = useMemo(
    () => ({
      ...hintStyleBase,
      backgroundColor: hintBackgroundColor || hintStyleBase.backgroundColor,
      padding: hintPadding || hintStyleBase.padding,
      borderRadius: hintBorderRadius || hintStyleBase.borderRadius,
      color: hintTextColor || 'black',
      top: (hintAnchor ? hintAnchor.y : y) + 20,
      left: (hintAnchor ? hintAnchor.x : x) + 20,
    }),
    [hintBackgroundColor, hintPadding, hintBorderRadius, hintTextColor, hintAnchor, x, y]
  );

  /**
   * Repaints every region in one pass and keeps the pressed state in sync for assistive tech.
   * Selection is folded in here so that changing the palette while something is selected no longer
   * wipes the selected fill.
   */
  useEffect(() => {
    const svg = svgRef.current;
    if (!svg) {
      return;
    }
    svg.querySelectorAll<SVGElement>(REGION_SELECTOR).forEach((region) => {
      const code = region.getAttribute(REGION_ATTRIBUTE) as string;
      const isSelected = code === selectedState;
      region.style.fill = isSelected ? selectedFill : cityColors[code] || (mapColor as string);
      if (!disableClick) {
        region.setAttribute('aria-pressed', String(isSelected));
      }
    });
  }, [cityColors, mapColor, selectedFill, selectedState, disableClick]);

  const enterRegion = (region: Region, anchor: HintAnchor | null) => {
    if (hints) {
      setStateHovered(region.code);
      setHintAnchor(anchor);
    }
    if (!disableHover) {
      region.element.style.fill = selectedState === region.code ? selectedFill : hoverColor || constants.HOVERCOLOR;
    }
  };

  const leaveRegion = (region: Region) => {
    if (hints) {
      setStateHovered(null);
      setHintAnchor(null);
    }
    if (!disableHover) {
      region.element.style.fill = selectedState === region.code ? selectedFill : cityColors[region.code] || (mapColor as string);
    }
  };

  const toggleRegion = (region: Region) => {
    if (selectedState === region.code) {
      region.element.style.fill = cityColors[region.code] || (mapColor as string);
      region.element.setAttribute('aria-pressed', 'false');
      setSelectedState(null);
      if (onSelect) {
        onSelect(null);
      }
      return;
    }

    if (selectedState) {
      const previousPath = document.getElementById(`${selectedState}-${instanceId}`);
      if (previousPath) {
        previousPath.style.fill = cityColors[selectedState] || (mapColor as string);
        previousPath.setAttribute('aria-pressed', 'false');
      }
    }
    region.element.style.fill = selectedFill;
    region.element.setAttribute('aria-pressed', 'true');
    setSelectedState(region.code);
    if (onSelect) {
      onSelect(region.code);
    }
  };

  const handleMouseOver = (event: React.MouseEvent<SVGSVGElement>) => {
    const region = regionFromEvent(event.target);
    if (region) {
      enterRegion(region, null);
    }
  };

  const handleMouseOut = (event: React.MouseEvent<SVGSVGElement>) => {
    const region = regionFromEvent(event.target);
    if (region) {
      leaveRegion(region);
    }
  };

  /** Keyboard focus highlights a region exactly like hover, with the hint pinned to its box. */
  const handleFocus = (event: React.FocusEvent<SVGSVGElement>) => {
    const region = regionFromEvent(event.target);
    if (region) {
      enterRegion(region, anchorOf(region.element));
    }
  };

  const handleBlur = (event: React.FocusEvent<SVGSVGElement>) => {
    const region = regionFromEvent(event.target);
    if (region) {
      leaveRegion(region);
    }
  };

  const handleClick = (event: React.MouseEvent<SVGSVGElement>) => {
    if (disableClick) {
      return;
    }
    const region = regionFromEvent(event.target);
    if (region) {
      toggleRegion(region);
    }
  };

  const handleKeyDown = (event: React.KeyboardEvent<SVGSVGElement>) => {
    if (disableClick || !isActivationKey(event.key)) {
      return;
    }
    const region = regionFromEvent(event.target);
    if (region) {
      event.preventDefault();
      toggleRegion(region);
    }
  };

  /**
   * The regions only depend on props, never on hover or pointer position, so the element array is
   * built once and reused. Hovering or moving the pointer re-renders the hint, not the map.
   */
  const regions = useMemo(
    () =>
      stateCode.map((code) => (
        <path
          key={code}
          id={`${code}-${instanceId}`}
          data-state={code}
          d={drawPath[code as keyof typeof drawPath]}
          role={disableClick ? 'img' : 'button'}
          aria-label={code}
          tabIndex={disableClick ? -1 : 0}
          style={{
            fill: cityColors[code] || mapColor,
            cursor: disableClick ? 'default' : 'pointer',
          }}
        />
      )),
    [cityColors, mapColor, disableClick, instanceId]
  );

  return (
    <>
      <div className="map" style={mapStyle}>
        <svg
          version="1.1"
          ref={svgRef}
          id={`svg2-${instanceId}`}
          x="0px"
          y="0px"
          viewBox={viewBox}
          role="group"
          onClick={handleClick}
          onKeyDown={handleKeyDown}
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}
          onFocus={handleFocus}
          onBlur={handleBlur}
        >
          {regions}
        </svg>
      </div>
      {hints && stateHovered && <div style={hintStyle}>{stateHovered}</div>}
    </>
  );
};

const SurinameMultiple = ({
  size,
  mapColor,
  strokeColor,
  selectColor,
  strokeWidth,
  hoverColor,
  hints,
  hintTextColor,
  hintBackgroundColor,
  hintPadding,
  hintBorderRadius,
  onSelect,
  cityColors = EMPTY_CITY_COLORS,
  disableClick,
  disableHover,
  borderStyle,
}: SurinameProps) => {
  const instanceId = useId().replace(/:/g, '');
  const svgRef = useRef<SVGSVGElement | null>(null);
  const { x, y } = useMousePosition(Boolean(hints));
  const [stateHovered, setStateHovered] = useState<string | null>(null);
  const [hintAnchor, setHintAnchor] = useState<HintAnchor | null>(null);
  const [selectedStates, setSelectedStates] = useState<string[]>([]);
  const [viewBox, setViewBox] = useState<string>('0 0 100 100');
  const strokeProps = getStrokeProperties(borderStyle);
  const selectedFill = selectColor || constants.SELECTED_COLOR;

  useEffect(() => {
    const svg = svgRef.current;
    if (svg) {
      const bbox = svg.getBBox();
      setViewBox(`${bbox.x} ${bbox.y} ${bbox.width} ${bbox.height}`);
    }
  }, []);

  const mapStyle = useMemo(
    () => ({
      width: size,
      stroke: strokeColor,
      strokeWidth,
      ...strokeProps,
    }),
    [size, strokeColor, strokeWidth, strokeProps]
  );

  const hintStyle = useMemo(
    () => ({
      ...hintStyleBase,
      backgroundColor: hintBackgroundColor || hintStyleBase.backgroundColor,
      padding: hintPadding || hintStyleBase.padding,
      borderRadius: hintBorderRadius || hintStyleBase.borderRadius,
      color: hintTextColor || 'black',
      top: (hintAnchor ? hintAnchor.y : y) + 20,
      left: (hintAnchor ? hintAnchor.x : x) + 20,
    }),
    [hintBackgroundColor, hintPadding, hintBorderRadius, hintTextColor, hintAnchor, x, y]
  );

  /**
   * Repaints every region in one pass and keeps the pressed state in sync for assistive tech.
   * Selection is folded in here so that changing the palette while something is selected no longer
   * wipes the selected fills.
   */
  useEffect(() => {
    const svg = svgRef.current;
    if (!svg) {
      return;
    }
    svg.querySelectorAll<SVGElement>(REGION_SELECTOR).forEach((region) => {
      const code = region.getAttribute(REGION_ATTRIBUTE) as string;
      const isSelected = selectedStates.includes(code);
      region.style.fill = isSelected ? selectedFill : cityColors[code] || (mapColor as string);
      if (!disableClick) {
        region.setAttribute('aria-pressed', String(isSelected));
      }
    });
  }, [cityColors, mapColor, selectedFill, selectedStates, disableClick]);

  const enterRegion = (region: Region, anchor: HintAnchor | null) => {
    if (hints) {
      setStateHovered(region.code);
      setHintAnchor(anchor);
    }
    if (!disableHover) {
      region.element.style.fill = selectedStates.includes(region.code) ? selectedFill : hoverColor || constants.HOVERCOLOR;
    }
  };

  const leaveRegion = (region: Region) => {
    if (hints) {
      setStateHovered(null);
      setHintAnchor(null);
    }
    if (!disableHover) {
      region.element.style.fill = selectedStates.includes(region.code) ? selectedFill : cityColors[region.code] || (mapColor as string);
    }
  };

  const toggleRegion = (region: Region) => {
    if (selectedStates.includes(region.code)) {
      const updatedSelectedStates = selectedStates.filter((state) => state !== region.code);
      region.element.style.fill = cityColors[region.code] || (mapColor as string);
      region.element.setAttribute('aria-pressed', 'false');
      setSelectedStates(updatedSelectedStates);
      if (onSelect) {
        onSelect(region.code, updatedSelectedStates);
      }
      return;
    }

    const updatedSelectedStates = [...selectedStates, region.code];
    region.element.style.fill = selectedFill;
    region.element.setAttribute('aria-pressed', 'true');
    setSelectedStates(updatedSelectedStates);
    if (onSelect) {
      onSelect(region.code, updatedSelectedStates);
    }
  };

  const handleMouseOver = (event: React.MouseEvent<SVGSVGElement>) => {
    const region = regionFromEvent(event.target);
    if (region) {
      enterRegion(region, null);
    }
  };

  const handleMouseOut = (event: React.MouseEvent<SVGSVGElement>) => {
    const region = regionFromEvent(event.target);
    if (region) {
      leaveRegion(region);
    }
  };

  /** Keyboard focus highlights a region exactly like hover, with the hint pinned to its box. */
  const handleFocus = (event: React.FocusEvent<SVGSVGElement>) => {
    const region = regionFromEvent(event.target);
    if (region) {
      enterRegion(region, anchorOf(region.element));
    }
  };

  const handleBlur = (event: React.FocusEvent<SVGSVGElement>) => {
    const region = regionFromEvent(event.target);
    if (region) {
      leaveRegion(region);
    }
  };

  const handleClick = (event: React.MouseEvent<SVGSVGElement>) => {
    if (disableClick) {
      return;
    }
    const region = regionFromEvent(event.target);
    if (region) {
      toggleRegion(region);
    }
  };

  const handleKeyDown = (event: React.KeyboardEvent<SVGSVGElement>) => {
    if (disableClick || !isActivationKey(event.key)) {
      return;
    }
    const region = regionFromEvent(event.target);
    if (region) {
      event.preventDefault();
      toggleRegion(region);
    }
  };

  /**
   * The regions only depend on props, never on hover or pointer position, so the element array is
   * built once and reused. Hovering or moving the pointer re-renders the hint, not the map.
   */
  const regions = useMemo(
    () =>
      stateCode.map((code) => (
        <path
          key={code}
          id={`${code}-${instanceId}`}
          data-state={code}
          d={drawPath[code as keyof typeof drawPath]}
          role={disableClick ? 'img' : 'button'}
          aria-label={code}
          tabIndex={disableClick ? -1 : 0}
          style={{
            fill: cityColors[code] || mapColor,
            cursor: disableClick ? 'default' : 'pointer',
          }}
        />
      )),
    [cityColors, mapColor, disableClick, instanceId]
  );

  return (
    <>
      <div className="map" style={mapStyle}>
        <svg
          version="1.1"
          ref={svgRef}
          id={`svg2-${instanceId}`}
          x="0px"
          y="0px"
          viewBox={viewBox}
          role="group"
          onClick={handleClick}
          onKeyDown={handleKeyDown}
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}
          onFocus={handleFocus}
          onBlur={handleBlur}
        >
          {regions}
        </svg>
      </div>
      {hints && stateHovered && <div style={hintStyle}>{stateHovered}</div>}
    </>
  );
};

export default Suriname;
