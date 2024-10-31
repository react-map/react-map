import React, { useEffect } from 'react';
import { drawPath, stateCode, constants, viewBox } from './constants';
import useMousePosition from './hooks/mouseTrack';
import { useState, useId } from 'react';

interface CityColorMap {
  [key: string]: string;
}

type BorderStyle = 'solid' | 'dashed' | 'dotted' | 'dash-dot' | 'dash-double-dot';

const getStrokeProperties = (borderStyle?: BorderStyle) => {
  switch (borderStyle) {
    case 'dashed':
      return {
        strokeDasharray: '8 4',
      };
    case 'dotted':
      return {
        strokeDasharray: '2 2',
      };
    case 'dash-dot':
      return {
        strokeDasharray: '8 4 2 4',
      };
    case 'dash-double-dot':
      return {
        strokeDasharray: '8 4 2 4 2 4',
      };
    default:
      return {
        strokeDasharray: 'none',
      };
  }
};

export interface KosovoProps {
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

const Kosovo = ({
  type,
  size,
  mapColor,
  strokeColor,
  strokeWidth,
  hoverColor,
  onSelect,
  hints,
  selectColor,
  hintTextColor,
  hintBackgroundColor,
  hintPadding,
  hintBorderRadius,
  cityColors,
  disableClick,
  disableHover,
  borderStyle,
}: KosovoProps) => {
  if (type === 'select-single') {
    return (
      <KosovoSingle
        type="select-single"
        size={size}
        selectColor={selectColor}
        mapColor={mapColor}
        strokeColor={strokeColor}
        strokeWidth={strokeWidth}
        hoverColor={hoverColor}
        hints={hints}
        onSelect={onSelect}
        hintTextColor={hintTextColor}
        hintBackgroundColor={hintBackgroundColor}
        hintPadding={hintPadding}
        hintBorderRadius={hintBorderRadius}
        cityColors={cityColors}
        disableClick={disableClick}
        disableHover={disableHover}
        borderStyle={borderStyle}
      />
    );
  } else if (type === 'select-multiple') {
    return (
      <KosovoMultiple
        type="select-multiple"
        size={size}
        selectColor={selectColor}
        mapColor={mapColor}
        strokeColor={strokeColor}
        strokeWidth={strokeWidth}
        onSelect={onSelect}
        hoverColor={hoverColor}
        hints={hints}
        hintTextColor={hintTextColor}
        hintBackgroundColor={hintBackgroundColor}
        hintPadding={hintPadding}
        hintBorderRadius={hintBorderRadius}
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

const KosovoSingle = ({
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
  cityColors = {},
  disableClick = false,
  disableHover = false,
  borderStyle,
}: KosovoProps) => {
  const instanceId = useId().replace(/:/g, '');
  const { x, y } = useMousePosition();
  const [stateHovered, setStateHovered] = useState<string | null>(null);
  const [selectedState, setSelectedState] = useState<string | null>(null);

  const strokeProps = getStrokeProperties(borderStyle);

  const mapStyle = {
    width: size || constants.WIDTH,
    stroke: strokeColor || constants.STROKE_COLOR,
    strokeWidth: strokeWidth || constants.STROKE_WIDTH,
    ...strokeProps,
  };

  useEffect(() => {
    stateCode.forEach((state) => {
      const path = document.getElementById(`${state}-${instanceId}`);
      if (path) {
        path.style.fill = cityColors[state] || mapColor || constants.MAPCOLOR;
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
      if (selectedState === hoverStateId) {
        path.style.fill = selectColor || constants.SELECTED_COLOR;
      } else {
        path.style.fill = hoverColor || constants.HOVERCOLOR;
      }
    }
  };

  const handleMouseLeave = (hoverStateId: string) => {
    const path = document.getElementById(`${hoverStateId}-${instanceId}`);
    setStateHovered(null);
    if (path && !disableHover) {
      if (selectedState === hoverStateId) {
        path.style.fill = selectColor || constants.SELECTED_COLOR;
      } else {
        path.style.fill = cityColors[hoverStateId] || mapColor || constants.MAPCOLOR;
      }
    }
  };

  const handleClick = (stateCode: string) => {
    if (disableClick) return;

    if (selectedState === stateCode) {
      const path = document.getElementById(`${stateCode}-${instanceId}`);
      if (path) {
        path.style.fill = cityColors[stateCode] || mapColor || constants.MAPCOLOR;
      }
      setSelectedState(null);
      if (onSelect) {
        onSelect(null);
      }
    } else {
      if (selectedState) {
        const previousPath = document.getElementById(`${selectedState}-${instanceId}`);
        if (previousPath) {
          previousPath.style.fill = cityColors[selectedState] || mapColor || constants.MAPCOLOR;
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
          {stateCode?.map((stateCode: string, index: number) => (
            <path
              key={index}
              onClick={() => handleClick(stateCode)}
              onMouseEnter={() => handleMouseEnter(stateCode)}
              onMouseLeave={() => handleMouseLeave(stateCode)}
              id={`${stateCode}-${instanceId}`}
              d={drawPath[stateCode as keyof typeof drawPath]}
              style={{
                fill: cityColors[stateCode] || mapColor || constants.MAPCOLOR,
                cursor: disableClick ? 'default' : 'pointer',
                ...strokeProps,
              }}
            />
          ))}
        </svg>
      </div>
      {hints && (
        <div>
          {stateHovered && (
            <div
              style={{
                position: 'absolute',
                top: y + 20,
                left: x + 20,
                backgroundColor: hintBackgroundColor || 'white',
                padding: hintPadding || '10px',
                borderRadius: hintBorderRadius || '5px',
                border: '1px solid #ccc',
                color: hintTextColor || 'black',
              }}
            >
              {stateHovered}
            </div>
          )}
        </div>
      )}
    </>
  );
};

const KosovoMultiple = ({
  size,
  selectColor,
  mapColor,
  strokeColor,
  strokeWidth,
  hoverColor,
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
}: KosovoProps) => {
  const instanceId = useId().replace(/:/g, '');
  const [selectedStates, setSelectedStates] = useState<string[]>([]);
  const { x, y } = useMousePosition();
  const [stateHovered, setStateHovered] = useState<string | null>(null);

  const strokeProps = getStrokeProperties(borderStyle);

  const mapStyle = {
    width: size || constants.WIDTH,
    stroke: strokeColor || constants.STROKE_COLOR,
    strokeWidth: strokeWidth || constants.STROKE_WIDTH,
    ...strokeProps,
  };

  useEffect(() => {
    stateCode.forEach((state) => {
      const path = document.getElementById(`${state}-${instanceId}`);
      if (path) {
        path.style.fill = cityColors[state] || mapColor || constants.MAPCOLOR;
      }
    });
  }, [cityColors, mapColor, instanceId]);

  useEffect(() => {
    selectedStates.forEach((stateCode) => {
      const path = document.getElementById(`${stateCode}-${instanceId}`);
      if (path) {
        path.style.fill = selectColor || constants.SELECTED_COLOR;
      }
    });
  }, [selectedStates, selectColor, instanceId]);

  const handleClick = (stateCode: string) => {
    if (disableClick) return;

    if (selectedStates.includes(stateCode)) {
      const remove_state_code = selectedStates.filter((state) => state !== stateCode);
      setSelectedStates(remove_state_code);
      const path = document.getElementById(`${stateCode}-${instanceId}`);
      if (path) {
        path.style.fill = cityColors[stateCode] || mapColor || constants.MAPCOLOR;
      }
    } else {
      setSelectedStates([...selectedStates, stateCode]);
    }
    if (onSelect) {
      onSelect(stateCode, selectedStates);
    }
  };

  const handleMouseEnter = (hoverStateId: string) => {
    const path = document.getElementById(`${hoverStateId}-${instanceId}`);
    setStateHovered(hoverStateId);
    if (path && !disableHover) {
      if (selectedStates.includes(hoverStateId)) {
        path.style.fill = selectColor || constants.SELECTED_COLOR;
      } else {
        path.style.fill = hoverColor || constants.HOVERCOLOR;
      }
    }
  };

  const handleMouseLeave = (hoverStateId: string) => {
    const path = document.getElementById(`${hoverStateId}-${instanceId}`);
    setStateHovered(null);
    if (path && !disableHover) {
      if (selectedStates.includes(hoverStateId)) {
        path.style.fill = selectColor || constants.SELECTED_COLOR;
      } else {
        path.style.fill = cityColors[hoverStateId] || mapColor || constants.MAPCOLOR;
      }
    }
  };

  return (
    <>
      <div className="map" style={mapStyle}>
        <svg version="1.1" id={`svg2-${instanceId}`} x="0px" y="0px" viewBox={viewBox}>
          {stateCode?.map((stateCode: string, index: number) => (
            <path
              key={index}
              onClick={() => handleClick(stateCode)}
              onMouseEnter={() => handleMouseEnter(stateCode)}
              onMouseLeave={() => handleMouseLeave(stateCode)}
              id={`${stateCode}-${instanceId}`}
              d={drawPath[stateCode as keyof typeof drawPath]}
              style={{
                fill: cityColors[stateCode] || mapColor || constants.MAPCOLOR,
                cursor: disableClick ? 'default' : 'pointer',
                ...strokeProps,
              }}
            />
          ))}
        </svg>
      </div>
      {hints && (
        <div>
          {stateHovered && (
            <div
              style={{
                position: 'absolute',
                top: y + 20,
                left: x + 20,
                backgroundColor: hintBackgroundColor || 'white',
                padding: hintPadding || '10px',
                borderRadius: hintBorderRadius || '5px',
                border: '1px solid #ccc',
                color: hintTextColor || 'black',
              }}
            >
              {stateHovered}
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default Kosovo;
