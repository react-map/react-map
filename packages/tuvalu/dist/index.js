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

// src/Tuvalu.tsx
var import_react = __toESM(require("react"));

// src/constants.ts
var constants = {
  WIDTH: "500px",
  MAPCOLOR: "#ffffff",
  STROKE_COLOR: "#000000",
  STROKE_WIDTH: "0.5",
  HOVERCOLOR: "#303030"
};
var stateCode = ["Tuvalu"];
var drawPath = {
  Tuvalu: "M799.5,797.79L799.63,793.66L798.46,791.22L797.91,790.98L799.07,793.9L799.32,798.23L799.5,797.79zM793.65,785.4L792.56,782.42L791.41,781.63L791.32,781.88L792.24,783.13L793.34,785.87L793.65,785.4zM652.31,607.63L653.96,605.63L653.53,603.65L651.78,600.9L651.6,595.68L650.12,592.81L649.73,597.28L649.85,600.76L650.74,603.3L651.12,605.28L650.26,607.54L648.4,610.22L652.31,607.63zM479.18,500.11L477.6,502.82L475.98,506.41L475.52,509.17L477.05,509.38L479.18,500.11zM543.32,386.47L543.17,384.37L542.69,382.53L542.1,382.32L537.22,377.99L537.8,380.03L540.93,385.97L542.76,387.49L543.32,386.47zM217.66,323.67L217.6,322.79L216.98,321.33L217.04,321.8L217.46,322.8L217.51,323.29L217.51,323.91L217.66,323.67zM42.04,131.25L42.15,129.92L41.36,130.01L40.32,132.79L42.04,131.25zM260.56,93.76L260.63,92.86L258.98,92.01L256.52,91.51L256.73,92.12L257.09,92.86L257.98,94.24L260.56,93.76zM1.35,0L0.37,0.35L2.48,3.25L5.27,6.21L3.57,2.06L1.35,0z"
};

// src/Tuvalu.tsx
var Tuvalu = ({
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
  return /* @__PURE__ */ import_react.default.createElement(import_react.default.Fragment, null, /* @__PURE__ */ import_react.default.createElement("div", { className: "map", style: mapStyle }, /* @__PURE__ */ import_react.default.createElement("svg", { version: "1.1", id: "svg2", x: "0px", y: "0px", viewBox: "-20 -10 400 150" }, stateCode?.map((stateCode2, index) => /* @__PURE__ */ import_react.default.createElement(
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
var Tuvalu_default = Tuvalu;

// src/index.ts
var src_default = Tuvalu_default;
