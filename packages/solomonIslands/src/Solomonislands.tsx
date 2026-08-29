import React, { useEffect, useId, useMemo, useRef, useState } from 'react';
import { drawPath, stateCode, constants } from './constants';
import useMousePosition from './hooks/mouseTrack';

interface CityColorMap {
  [key: string]: string;
}

/**
 * Shared empty map. Defaulting `cityColors` to a fresh `{}` on every render gave the fill effects a
 * dependency that never compared equal, so they re-walked the whole map on each pass.
 */
const EMPTY_CITY_COLORS: CityColorMap = {};

const hintStyleBase = {
  position: 'fixed' as React.CSSProperties['position'],
  backgroundColor: 'white',
  padding: '10px',
  borderRadius: 5,
  border: '1px solid #ccc',
  pointerEvents: 'none' as React.CSSProperties['pointerEvents'],
  zIndex: 1000,
};

type BorderStyle = 'solid' | 'dashed' | 'dotted' | 'dash-dot' | 'dash-double-dot';

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

export interface SolomonislandsProps {
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

const Solomonislands = ({
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
}: SolomonislandsProps) => {
  if (type === 'select-single') {
    return (
      <SolomonislandsSingle
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
      <SolomonislandsMultiple
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

const SolomonislandsSingle = ({
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
}: SolomonislandsProps) => {
  const instanceId = useId().replace(/:/g, '');
  const svgRef = useRef<SVGSVGElement | null>(null);
  const { x, y } = useMousePosition(Boolean(hints));
  const [stateHovered, setStateHovered] = useState<string | null>(null);
  const [selectedState, setSelectedState] = useState<string | null>(null);
  const [viewBox, setViewBox] = useState<string>('0 0 100 100');
  const strokeProps = getStrokeProperties(borderStyle);

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
      top: y + 20,
      left: x + 20,
    }),
    [hintBackgroundColor, hintPadding, hintBorderRadius, hintTextColor, x, y]
  );

  /**
   * Repaints every region in one pass. Selection is folded in here so that changing the palette
   * while something is selected no longer wipes the selected fill.
   */
  useEffect(() => {
    const svg = svgRef.current;
    if (!svg) {
      return;
    }
    svg.querySelectorAll<SVGElement>(REGION_SELECTOR).forEach((region) => {
      const code = region.getAttribute(REGION_ATTRIBUTE) as string;
      region.style.fill =
        code === selectedState ? selectColor || constants.SELECTED_COLOR : cityColors[code] || (mapColor as string);
    });
  }, [cityColors, mapColor, selectColor, selectedState]);

  const handleMouseOver = (event: React.MouseEvent<SVGSVGElement>) => {
    const region = regionFromEvent(event.target);
    if (!region) {
      return;
    }
    if (hints) {
      setStateHovered(region.code);
    }
    if (!disableHover) {
      region.element.style.fill =
        selectedState === region.code ? selectColor || constants.SELECTED_COLOR : hoverColor || constants.HOVERCOLOR;
    }
  };

  const handleMouseOut = (event: React.MouseEvent<SVGSVGElement>) => {
    const region = regionFromEvent(event.target);
    if (!region) {
      return;
    }
    if (hints) {
      setStateHovered(null);
    }
    if (!disableHover) {
      region.element.style.fill =
        selectedState === region.code
          ? selectColor || constants.SELECTED_COLOR
          : cityColors[region.code] || (mapColor as string);
    }
  };

  const handleClick = (event: React.MouseEvent<SVGSVGElement>) => {
    if (disableClick) {
      return;
    }
    const region = regionFromEvent(event.target);
    if (!region) {
      return;
    }

    if (selectedState === region.code) {
      region.element.style.fill = cityColors[region.code] || (mapColor as string);
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
      }
    }
    region.element.style.fill = selectColor || constants.SELECTED_COLOR;
    setSelectedState(region.code);
    if (onSelect) {
      onSelect(region.code);
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
          onClick={handleClick}
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}
        >
          {regions}
        </svg>
      </div>
      {hints && stateHovered && <div style={hintStyle}>{stateHovered}</div>}
    </>
  );
};

const SolomonislandsMultiple = ({
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
}: SolomonislandsProps) => {
  const instanceId = useId().replace(/:/g, '');
  const svgRef = useRef<SVGSVGElement | null>(null);
  const { x, y } = useMousePosition(Boolean(hints));
  const [selectedStates, setSelectedStates] = useState<string[]>([]);
  const [stateHovered, setStateHovered] = useState<string | null>(null);
  const [viewBox, setViewBox] = useState<string>('0 0 100 100');
  const strokeProps = getStrokeProperties(borderStyle);

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
      top: y + 20,
      left: x + 20,
    }),
    [hintBackgroundColor, hintPadding, hintBorderRadius, hintTextColor, x, y]
  );

  /**
   * Repaints every region in one pass. Selection is folded in here so that changing the palette
   * while something is selected no longer wipes the selected fills.
   */
  useEffect(() => {
    const svg = svgRef.current;
    if (!svg) {
      return;
    }
    svg.querySelectorAll<SVGElement>(REGION_SELECTOR).forEach((region) => {
      const code = region.getAttribute(REGION_ATTRIBUTE) as string;
      region.style.fill = selectedStates.includes(code)
        ? selectColor || constants.SELECTED_COLOR
        : cityColors[code] || (mapColor as string);
    });
  }, [cityColors, mapColor, selectColor, selectedStates]);

  const handleMouseOver = (event: React.MouseEvent<SVGSVGElement>) => {
    const region = regionFromEvent(event.target);
    if (!region) {
      return;
    }
    if (hints) {
      setStateHovered(region.code);
    }
    if (!disableHover) {
      region.element.style.fill = selectedStates.includes(region.code)
        ? selectColor || constants.SELECTED_COLOR
        : hoverColor || constants.HOVERCOLOR;
    }
  };

  const handleMouseOut = (event: React.MouseEvent<SVGSVGElement>) => {
    const region = regionFromEvent(event.target);
    if (!region) {
      return;
    }
    if (hints) {
      setStateHovered(null);
    }
    if (!disableHover) {
      region.element.style.fill = selectedStates.includes(region.code)
        ? selectColor || constants.SELECTED_COLOR
        : cityColors[region.code] || (mapColor as string);
    }
  };

  const handleClick = (event: React.MouseEvent<SVGSVGElement>) => {
    if (disableClick) {
      return;
    }
    const region = regionFromEvent(event.target);
    if (!region) {
      return;
    }

    if (selectedStates.includes(region.code)) {
      const updatedSelectedStates = selectedStates.filter((state) => state !== region.code);
      region.element.style.fill = cityColors[region.code] || (mapColor as string);
      setSelectedStates(updatedSelectedStates);
      if (onSelect) {
        onSelect(region.code, updatedSelectedStates);
      }
      return;
    }

    const updatedSelectedStates = [...selectedStates, region.code];
    region.element.style.fill = selectColor || constants.SELECTED_COLOR;
    setSelectedStates(updatedSelectedStates);
    if (onSelect) {
      onSelect(region.code, updatedSelectedStates);
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
          onClick={handleClick}
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}
        >
          {regions}
        </svg>
      </div>
      {hints && stateHovered && <div style={hintStyle}>{stateHovered}</div>}
    </>
  );
};

export default Solomonislands;
