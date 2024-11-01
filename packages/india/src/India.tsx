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

export interface IndiaProps {
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

const India = ({
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
}: IndiaProps) => {
  if (type === 'select-single') {
    return (
      <IndiaSingle
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
      <IndiaMultiple
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

const IndiaSingle = ({
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
}: IndiaProps) => {
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

  const handleMouseEnter = (hoverStateId: string) => {
    const path = document.getElementById(`${hoverStateId}-${instanceId}`);
    setStateHovered(hoverStateId);
    if (path && !disableHover) {
      path.style.fill = selectedState === hoverStateId ? selectColor || constants.SELECTED_COLOR : hoverColor || constants.HOVERCOLOR;
    }
  };

  const handleMouseLeave = (hoverStateId: string) => {
    const path = document.getElementById(`${hoverStateId}-${instanceId}`);
    setStateHovered(null);
    if (path && !disableHover) {
      path.style.fill = selectedState === hoverStateId ? selectColor || constants.SELECTED_COLOR : cityColors![hoverStateId] || (mapColor as string);
    }
  };

  const handleClick = (stateCode: string) => {
    if (disableClick) return;

    if (selectedState === stateCode) {
      const path = document.getElementById(`${stateCode}-${instanceId}`);
      if (path) {
        path.style.fill = cityColors![stateCode] || (mapColor as string);
      }
      setSelectedState(null);
      if (onSelect) {
        onSelect(null);
      }
    } else {
      if (selectedState) {
        const previousPath = document.getElementById(`${selectedState}-${instanceId}`);
        if (previousPath) {
          previousPath.style.fill = cityColors![selectedState] || (mapColor as string);
        }
      }
      setSelectedState(stateCode);
      if (onSelect) {
        onSelect(stateCode);
      }
    }
  };

  return (
    <>
      <div className="map" style={mapStyle}>
        <svg version="1.1" id={`svg2-${instanceId}`} x="0px" y="0px" viewBox={viewBox}>
          {stateCode?.map((code, index) => (
            <path
              key={index}
              onClick={() => handleClick(code)}
              onMouseEnter={() => handleMouseEnter(code)}
              onMouseLeave={() => handleMouseLeave(code)}
              id={`${code}-${instanceId}`}
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

const IndiaMultiple = ({
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
}: IndiaProps) => {
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

  const handleMouseEnter = (hoverStateId: string) => {
    const path = document.getElementById(`${hoverStateId}-${instanceId}`);
    setStateHovered(hoverStateId);
    if (path && !disableHover) {
      path.style.fill = selectedStates.includes(hoverStateId) ? selectColor || constants.SELECTED_COLOR : hoverColor || constants.HOVERCOLOR;
    }
  };

  const handleMouseLeave = (hoverStateId: string) => {
    const path = document.getElementById(`${hoverStateId}-${instanceId}`);
    setStateHovered(null);
    if (path && !disableHover) {
      path.style.fill = selectedStates.includes(hoverStateId)
        ? selectColor || constants.SELECTED_COLOR
        : cityColors![hoverStateId] || (mapColor as string);
    }
  };

  const handleClick = (stateCode: string) => {
    if (disableClick) return;

    if (selectedStates.includes(stateCode)) {
      const updatedSelectedStates = selectedStates.filter((state) => state !== stateCode);
      const path = document.getElementById(`${stateCode}-${instanceId}`);
      if (path) {
        path.style.fill = cityColors![stateCode] || (mapColor as string);
      }
      setSelectedStates(updatedSelectedStates);
      if (onSelect) {
        onSelect(stateCode, updatedSelectedStates);
      }
    } else {
      setSelectedStates((prevStates) => {
        const updatedStates = [...prevStates, stateCode];
        const path = document.getElementById(`${stateCode}-${instanceId}`);
        if (path) {
          path.style.fill = selectColor || constants.SELECTED_COLOR;
        }
        if (onSelect) {
          onSelect(stateCode, updatedStates);
        }
        return updatedStates;
      });
    }
  };

  return (
    <>
      <div className="map" style={mapStyle}>
        <svg version="1.1" id={`svg2-${instanceId}`} x="0px" y="0px" viewBox={viewBox}>
          {stateCode?.map((code, index) => (
            <path
              key={index}
              onClick={() => handleClick(code)}
              onMouseEnter={() => handleMouseEnter(code)}
              onMouseLeave={() => handleMouseLeave(code)}
              id={`${code}-${instanceId}`}
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

export default India;
