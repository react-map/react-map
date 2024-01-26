// src/Niue.tsx
import React from "react";

// src/constants.ts
var constants = {
  WIDTH: "500px",
  MAPCOLOR: "#ffffff",
  STROKE_COLOR: "#000000",
  STROKE_WIDTH: "0.5",
  HOVERCOLOR: "#303030"
};
var stateCode = ["Niue"];
var drawPath = {
  Niue: "M246.17,901.9L331.77,832.87L369.82,816.85L405.92,835.75L604.29,697.7L689.5,595L732.98,554.33L799.56,529.28L745.4,419.21L610.11,43.1L597.3,19.7L474.05,5.34L414.07,0L260.93,5.34L164.65,197.05L136.9,216.76L115.16,218.82L96.72,223.74L80.22,250.02L76.92,286.98L90.31,315.31L107.59,342L115.74,370.75L13.45,531.74L0.44,622.11L115.74,660.31L126.22,682.91L148.35,766.72L122.73,783.57L107.59,801.23L95.36,819.31L80.22,835.75L140.39,827.53L193.38,830.41L231.23,852.59L246.17,901.9z"
};

// src/Niue.tsx
var Niue = ({
  size,
  mapColor,
  strokeColor,
  strokeWidth,
  hoverColor,
  onSelect
}) => {
  const mapStyle = {
    width: size || constants.WIDTH,
    fill: mapColor || constants.MAPCOLOR,
    stroke: strokeColor || constants.STROKE_COLOR,
    strokeWidth: strokeWidth || constants.STROKE_WIDTH
  };
  const handleMouseEnter = (hoverStateId) => {
    const path = document.getElementById(hoverStateId);
    if (path) {
      path.style.fill = hoverColor || constants.HOVERCOLOR;
    }
  };
  const handleMouseLeave = (hoverStateId) => {
    const path = document.getElementById(hoverStateId);
    if (path) {
      path.style.fill = mapColor || constants.MAPCOLOR;
    }
  };
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("div", { className: "map", style: mapStyle }, /* @__PURE__ */ React.createElement(
    "svg",
    {
      version: "1.1",
      id: "svg2",
      x: "0px",
      y: "0px",
      viewBox: "-50 -40 2000 1000"
    },
    stateCode?.map((stateCode2, index) => /* @__PURE__ */ React.createElement(
      "path",
      {
        key: index,
        onClick: () => onSelect(stateCode2),
        onMouseEnter: () => handleMouseEnter(stateCode2),
        onMouseLeave: () => handleMouseLeave(stateCode2),
        id: stateCode2,
        d: drawPath[stateCode2]
      }
    ))
  )));
};
var Niue_default = Niue;

// src/index.ts
var src_default = Niue_default;
export {
  src_default as default
};
