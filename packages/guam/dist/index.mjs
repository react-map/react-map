// src/Guam.tsx
import React from "react";

// src/constants.ts
var constants = {
  WIDTH: "500px",
  MAPCOLOR: "#ffffff",
  STROKE_COLOR: "#000000",
  STROKE_WIDTH: "0.5",
  HOVERCOLOR: "#303030"
};
var stateCode = ["Guam"];
var drawPath = {
  Guam: "M179.07,1035.05L229.05,1033.01L271.89,1014.68L331.58,923.39L354.19,689.21L388.5,585.65L448.98,522.23L603.87,423.53L689.55,344.6L764.31,234.65L799.61,168.65L799.02,139.27L756.38,136.11L707.4,122.13L664.36,90.61L639.37,34.9L625.29,0L591.38,2.76L551.71,26.02L522.96,53.57L507.29,83.87L456.12,251.99L436.69,288.31L414.48,318.49L388.5,344.6L255.23,422.51L221.31,452.9L74.16,538.85L40.45,542.22L30.33,528.96L11.29,539.77L0.39,558.73L26.17,578L40.05,599.92L52.35,625.71L57.11,646.4L54.73,690.84L46.4,722.85L30.53,748.63L5.54,773.8L23.39,781.96L37.67,793.58L49.37,808.25L57.11,825.06L71.98,919.93L79.71,932.36L113.03,975.45L138.02,1020.69L179.07,1035.05z"
};

// src/Guam.tsx
var Guam = ({
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
      viewBox: "-50 -20 2200 1200"
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
var Guam_default = Guam;

// src/index.ts
var src_default = Guam_default;
export {
  src_default as default
};
