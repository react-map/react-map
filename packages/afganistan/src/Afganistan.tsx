import React from "react";
import { drawPath, stateCode, constants } from "./constants";

const Afganistan = ({
  size,
  mapColor,
  strokeColor,
  strokeWidth,
  hoverColor,
  selectedState,
}: any) => {
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
        <svg
          version="1.1"
          id="svg2"
          x="0px"
          y="0px"
          viewBox="-114 -50.4 611.9 695.7"
        >
          {stateCode?.map((stateCode: string, index: number) => (
            <path
              key={index}
              onClick={() => selectedState(stateCode)}
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

export interface AfganistanProps {
  size?: number;
  mapColor?: string;
  strokeColor?: string;
  strokeWidth?: number;
  hoverColor?: string;
  onSelect: (state: string) => void;
}

export default Afganistan;
