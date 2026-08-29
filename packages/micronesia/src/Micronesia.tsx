import React,{ useEffect, useState, useMemo } from 'react';
import { drawPath, stateCode, constants } from './constants';
import useMousePosition from './hooks/mouseTrack';
import { useId } from 'react';

interface CityColorMap {
  [key: string]: string;
}

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

const getStrokeProperties = (borderStyle?: BorderStyle) => {
  switch (borderStyle) {
    case 'dashed':
      return { strokeDasharray: '8 4' };
    case 'dotted':
      return { strokeDasharray: '2 2' };
    case 'dash-dot':
      return { strokeDasharray: '8 4 2 4' };
    case 'dash-double-dot':
      return { strokeDasharray: '8 4 2 4 2 4' };
    default:
      return { strokeDasharray: 'none' };
  }
};

const REGION_ATTRIBUTE = 'data-state';

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

export interface MicronesiaProps {
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

const Micronesia = ({
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
  cityColors = {},
  disableClick = false,
  disableHover = false,
  borderStyle,
}: MicronesiaProps) => {
  if (type === 'select-single') {
    return (
      <MicronesiaSingle
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
      <MicronesiaMultiple
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

const MicronesiaSingle = ({
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
  cityColors,
  disableClick,
  disableHover,
  borderStyle,
}: MicronesiaProps) => {
  const instanceId = useId().replace(/:/g, '');
  const { x, y } = useMousePosition();
  const [stateHovered, setStateHovered] = useState<string | null>(null);
  const [selectedState, setSelectedState] = useState<string | null>(null);
  const [viewBox, setViewBox] = useState<string>('0 0 100 100');
  const strokeProps = useMemo(() => getStrokeProperties(borderStyle), [borderStyle]);

  useEffect(() => {
    const svg = document.getElementById(`svg2-${instanceId}`) as SVGGraphicsElement | null;
    if (svg) {
      const bbox = svg.getBBox();
      setViewBox(`${bbox.x} ${bbox.y} ${bbox.width} ${bbox.height}`);
    }
  }, [instanceId]);

  const mapStyle = useMemo(
    () => ({
      width: size,
      stroke: strokeColor,
      strokeWidth,
      ...strokeProps,
    }),
    [size, strokeColor, strokeWidth, strokeProps]
  );

  const hintStyle = {
    ...hintStyleBase,
    backgroundColor: hintBackgroundColor || hintStyleBase.backgroundColor,
    padding: hintPadding || hintStyleBase.padding,
    borderRadius: hintBorderRadius || hintStyleBase.borderRadius,
    color: hintTextColor || 'black',
    top: y + 20,
    left: x + 20,
  };

  useEffect(() => {
    stateCode.forEach((state) => {
      const path = document.getElementById(`${state}-${instanceId}`);
      if (path) {
        path.style.fill = cityColors![state] || (mapColor as string);
      }
    });
  }, [cityColors, mapColor, instanceId]);

  useEffect(() => {
    if (selectedState) {
      const path = document.getElementById(`${selectedState}-${instanceId}`);
      if (path) {
        path.style.fill = selectColor || constants.SELECTED_COLOR;
      }
    }
  }, [selectedState, selectColor, instanceId]);

  const handleMouseOver = (event: React.MouseEvent<SVGSVGElement>) => {
    const region = regionFromEvent(event.target);
    if (!region) {
      return;
    }
    setStateHovered(region.code);
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
    setStateHovered(null);
    if (!disableHover) {
      region.element.style.fill =
        selectedState === region.code
          ? selectColor || constants.SELECTED_COLOR
          : cityColors![region.code] || (mapColor as string);
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
      region.element.style.fill = cityColors![region.code] || (mapColor as string);
      setSelectedState(null);
      if (onSelect) {
        onSelect(null);
      }
      return;
    }

    if (selectedState) {
      const previousPath = document.getElementById(`${selectedState}-${instanceId}`);
      if (previousPath) {
        previousPath.style.fill = cityColors![selectedState] || (mapColor as string);
      }
    }
    setSelectedState(region.code);
    if (onSelect) {
      onSelect(region.code);
    }
  };

  return (
    <>
      <div className="map" style={mapStyle}>
        <svg
          version="1.1"
          id={`svg2-${instanceId}`}
          x="0px"
          y="0px"
          viewBox={viewBox}
          onClick={handleClick}
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}
        >
          {stateCode?.map((code, index) => (
            <path
              key={index}
              id={`${code}-${instanceId}`}
              data-state={code}
              d={drawPath[code as keyof typeof drawPath]}
              style={{
                fill: cityColors![code] || mapColor,
                cursor: disableClick ? 'default' : 'pointer',
                ...strokeProps,
              }}
            />
          ))}
        </svg>
      </div>
      {hints && stateHovered && <div style={hintStyle}>{stateHovered}</div>}
    </>
  );
};

const MicronesiaMultiple = ({
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
  cityColors,
  disableClick,
  disableHover,
  borderStyle,
}: MicronesiaProps) => {
  const instanceId = useId().replace(/:/g, '');
  const { x, y } = useMousePosition();
  const [selectedStates, setSelectedStates] = useState<string[]>([]);
  const [stateHovered, setStateHovered] = useState<string | null>(null);
  const [viewBox, setViewBox] = useState<string>('0 0 100 100');
  const strokeProps = useMemo(() => getStrokeProperties(borderStyle), [borderStyle]);

  useEffect(() => {
    const svg = document.getElementById(`svg2-${instanceId}`) as SVGGraphicsElement | null;
    if (svg) {
      const bbox = svg.getBBox();
      setViewBox(`${bbox.x} ${bbox.y} ${bbox.width} ${bbox.height}`);
    }
  }, [instanceId]);

  const mapStyle = useMemo(
    () => ({
      width: size,
      stroke: strokeColor,
      strokeWidth,
      ...strokeProps,
    }),
    [size, strokeColor, strokeWidth, strokeProps]
  );

  const hintStyle = {
    ...hintStyleBase,
    backgroundColor: hintBackgroundColor || hintStyleBase.backgroundColor,
    padding: hintPadding || hintStyleBase.padding,
    borderRadius: hintBorderRadius || hintStyleBase.borderRadius,
    color: hintTextColor || 'black',
    top: y + 20,
    left: x + 20,
  };

  useEffect(() => {
    stateCode.forEach((state) => {
      const path = document.getElementById(`${state}-${instanceId}`);
      if (path) {
        path.style.fill = cityColors![state] || (mapColor as string);
      }
    });
  }, [cityColors, mapColor, instanceId]);

  useEffect(() => {
    selectedStates.forEach((selectedState) => {
      const path = document.getElementById(`${selectedState}-${instanceId}`);
      if (path) {
        path.style.fill = selectColor || constants.SELECTED_COLOR;
      }
    });
  }, [selectedStates, selectColor, instanceId]);

  const handleMouseOver = (event: React.MouseEvent<SVGSVGElement>) => {
    const region = regionFromEvent(event.target);
    if (!region) {
      return;
    }
    setStateHovered(region.code);
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
    setStateHovered(null);
    if (!disableHover) {
      region.element.style.fill = selectedStates.includes(region.code)
        ? selectColor || constants.SELECTED_COLOR
        : cityColors![region.code] || (mapColor as string);
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
      region.element.style.fill = cityColors![region.code] || (mapColor as string);
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

  return (
    <>
      <div className="map" style={mapStyle}>
        <svg
          version="1.1"
          id={`svg2-${instanceId}`}
          x="0px"
          y="0px"
          viewBox={viewBox}
          onClick={handleClick}
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}
        >
          {stateCode?.map((code, index) => (
            <path
              key={index}
              id={`${code}-${instanceId}`}
              data-state={code}
              d={drawPath[code as keyof typeof drawPath]}
              style={{
                fill: cityColors![code] || mapColor,
                cursor: disableClick ? 'default' : 'pointer',
                ...strokeProps,
              }}
            />
          ))}
        </svg>
      </div>
      {hints && stateHovered && <div style={hintStyle}>{stateHovered}</div>}
    </>
  );
};

export default Micronesia;
