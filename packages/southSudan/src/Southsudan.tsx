import React from "react";
import { drawPath, stateCode, constants } from "./constants";

const Southsudan = ({
  size,
  mapColor,
  strokeColor,
  strokeWidth,
  hoverColor,
  onSelect,
}: SouthsudanProps) => {
  const mapStyle = {
    width: size || constants.WIDTH,
    fill: mapColor || constants.MAPCOLOR,
    stroke: strokeColor || constants.STROKE_COLOR,
    strokeWidth: strokeWidth || constants.STROKE_WIDTH,
  };

  const handleMouseEnter = (hoverStateId: string) => {
    const path = document.getElementById(hoverStateId);
    if (path) {
      path.style.fill = hoverColor || constants.HOVERCOLOR;
    }
  };

  const handleMouseLeave = (hoverStateId: string) => {
    const path = document.getElementById(hoverStateId);
    if (path) {
      path.style.fill = mapColor || constants.MAPCOLOR;
    }
  };

  return (
    <>
      <div className="map" style={mapStyle}>
        <svg version="1.1" id="svg2" x="0px" y="0px" viewBox="-50 -50 1400 750">
          {stateCode?.map((stateCode, index) => (
            <path
              key={index}
              onClick={() => onSelect(stateCode)}
              onMouseEnter={() => handleMouseEnter(stateCode)}
              onMouseLeave={() => handleMouseLeave(stateCode)}
              id={stateCode}
              d={drawPath[stateCode as keyof typeof drawPath]}
            />
          ))}
        </svg>
      </div>
    </>
  );
};

export interface SouthsudanProps {
  size?: number;
  mapColor?: string;
  strokeColor?: string;
  strokeWidth?: number;
  hoverColor?: string;
  onSelect: (state: string) => void;
}

export default Southsudan;
