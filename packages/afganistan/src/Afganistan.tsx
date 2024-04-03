import React from "react";
import { drawPath, stateCode, constants } from "./constants";
import useMousePosition from "./hooks/mouseTrack";
import { useState } from "react";

const Afganistan = ({
  size,
  mapColor,
  strokeColor,
  strokeWidth,
  hoverColor,
  onSelect,
}: AfganistanProps) => {
  const { x, y } = useMousePosition();
  const [stateHovered, setStateHovered] = useState<String | null>(null);

  const mapStyle = {
    width: size || constants.WIDTH,
    fill: mapColor || constants.MAPCOLOR,
    stroke: strokeColor || constants.STROKE_COLOR,
    strokeWidth: strokeWidth || constants.STROKE_WIDTH,
  };

  const handleMouseEnter = (hoverStateId: string) => {
    const path = document.getElementById(hoverStateId);
    setStateHovered(hoverStateId);
    if (path) {
      path.style.fill = hoverColor || constants.HOVERCOLOR;
    }
  };

  const handleMouseLeave = (hoverStateId: string) => {
    const path = document.getElementById(hoverStateId);
    setStateHovered(null);
    if (path) {
      path.style.fill = mapColor || constants.MAPCOLOR;
    }
  };

  return (
    <>
      <div className="map" style={mapStyle}>
        <svg version="1.1" id="svg2" x="0px" y="0px" viewBox="0 0 800 800">
          {stateCode?.map((stateCode: string, index: number) => (
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
      <div>
        {stateHovered && (
          <div
            style={{
              position: "absolute",
              top: y + 20,
              left: x + 20,
              backgroundColor: "white",
              padding: "10px",
              borderRadius: "5px",
              border: "1px solid #ccc",
            }}
          >
            {stateHovered}
          </div>
        )}
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
