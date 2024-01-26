import React from "react";
import { drawPath, stateCode, constants } from "./constants";

const Senegal = ({
  size,
  mapColor,
  strokeColor,
  strokeWidth,
  hoverColor,
  onSelect,
}: SenegalProps) => {
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
        <svg version="1.1" id="svg2" x="0px" y="0px" viewBox="-20 300 1500 550">
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

export interface SenegalProps {
  size?: number;
  mapColor?: string;
  strokeColor?: string;
  strokeWidth?: number;
  hoverColor?: string;
  onSelect: (state: string) => void;
}

export default Senegal;
