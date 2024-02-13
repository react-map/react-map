"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var src_exports = {};
__export(src_exports, {
  default: () => src_default
});
module.exports = __toCommonJS(src_exports);

// src/Comoros.tsx
var import_react = __toESM(require("react"));

// src/constants.ts
var constants = {
  WIDTH: "500px",
  MAPCOLOR: "#ffffff",
  STROKE_COLOR: "#000000",
  STROKE_WIDTH: "0.5",
  HOVERCOLOR: "#303030"
};
var stateCode = ["Anjouan", "Grande Comore", "Moheli"];
var drawPath = {
  Anjouan: "M788.7,632.1L795.66,627.45L799.02,616.22L799.37,540.49L797.74,531.79L772.1,449.02L770.03,447.1L765.23,438.47L761.73,435.89L757.53,435.74L754.61,437.25L751.99,439.22L748.98,440.54L742.46,442.35L734.11,447.25L728.18,449.02L730.31,469.99L721.07,493.08L704.97,507.89L686.74,504.1L683.63,506.83L677.55,510.01L674.34,512.59L667.18,509.71L647.56,506.83L636.99,504.1L621.38,497.33L613.28,495.3L603.5,495.61L611.7,504.55L636.05,519.11L641.14,523.2L678.88,542.61L702.89,547.61L712.08,552.21L715.78,561.72L720.77,569.76L765.53,600.7L768.84,605.1L770.03,612.84L772.1,618.25L777.14,624.62L783.36,629.88L788.7,632.1z",
  "Grande Comore": "M87.13,0L72.01,2.32L46.23,11.09L39.06,11.34L32.74,23.18L26.96,38.4L21.03,49.13L24.34,55.79L25.63,63.04L17.23,172.56L17.82,179.82L19.55,186.48L19.4,193.09L6.26,212.26L2.31,219.77L0.63,225.83L3.4,241.01L10.07,250.95L25.53,266.09L28.3,272.15L29.09,277.55L30.77,283.05L35.71,289.36L47.41,298.75L54.38,302.58L60.75,304.2L86.78,305.71L95.77,309.45L129.76,341.05L133.66,348.82L136.87,353.47L144.09,354.28L152.34,353.06L158.12,351.2L162.56,348.02L164.14,344.53L164.83,340.04L166.81,333.78L173.68,322.72L173.97,317.52L159.75,298.54L155.94,291.53L154.41,285.32L152.78,279.06L149.08,274.57L145.08,270.63L142.31,266.09L141.67,259.79L142.61,246.67L142.31,240.31L132.53,214.93L105.56,176.14L100.12,151.02L113.66,35.37L110.89,24.09L105.51,14.11L98.24,4.53L87.13,0z",
  Moheli: "M349.98,587.2L344.25,580.73L312.64,559.6L301.18,556.06L275.69,551.2L267.04,546.55L257.11,543.02L253.56,552.21L254.25,574.61L256.03,582.85L260.37,586.19L265.91,588.56L271.19,593.57L272.92,599.44L272.33,610.16L275,614.81L284.83,618.3L327.36,619.46L368.56,627.86L382.88,627.86L392.12,626.54L394.2,621.59L387.23,610.86L355.02,589.42L349.98,587.2z"
};

// src/Comoros.tsx
var Comoros = ({
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
  return /* @__PURE__ */ import_react.default.createElement(import_react.default.Fragment, null, /* @__PURE__ */ import_react.default.createElement("div", { className: "map", style: mapStyle }, /* @__PURE__ */ import_react.default.createElement("svg", { version: "1.1", id: "svg2", x: "0px", y: "0px", viewBox: "-50 -50 1500 800" }, stateCode?.map((stateCode2, index) => /* @__PURE__ */ import_react.default.createElement(
    "path",
    {
      key: index,
      onClick: () => onSelect(stateCode2),
      onMouseEnter: () => handleMouseEnter(stateCode2),
      onMouseLeave: () => handleMouseLeave(stateCode2),
      id: stateCode2,
      d: drawPath[stateCode2]
    }
  )))));
};
var Comoros_default = Comoros;

// src/index.ts
var src_default = Comoros_default;