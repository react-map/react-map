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

// src/Caymanislands.tsx
var import_react = __toESM(require("react"));

// src/constants.ts
var constants = {
  WIDTH: "500px",
  MAPCOLOR: "#ffffff",
  STROKE_COLOR: "#000000",
  STROKE_WIDTH: "0.5",
  HOVERCOLOR: "#303030"
};
var stateCode = ["Cayman Islands"];
var drawPath = {
  "Cayman Islands": "M15.31,246.99L20.86,242.78L29.27,241.88L37.1,242.4L67.71,246.5L72.37,245.89L80.69,239.38L87.94,234.32L96.87,232.6L106.92,230.88L118.09,229.16L134.31,233.57L147.71,231.28L157.18,223.98L155.81,211.26L151.09,205.3L142.59,202.57L133.84,201.52L123.61,201.44L98.14,204.93L88.83,203.18L71.58,195.82L63.03,194.72L65.64,200.83L66.98,203.02L69.15,204.93L66.94,206.93L67.08,208.27L68.25,209.67L69.15,211.76L66.21,208.06L68.4,211.32L69.09,212.9L69.15,215.16L62.18,213.27L59.48,211.76L55.97,218.64L54.91,224.42L45.98,227.82L33.12,227.88L26.36,218.98L27.99,208.9L24.03,199.42L19.51,191.06L20.86,184.47L12.18,181.59L5.48,183.86L2.7,187.79L1.61,193.95L6.67,197.28L13.97,202.83L16.25,209.53L16.28,216.79L14.65,225.19L13,230.79L11.33,234.15L10.38,241.85L15.31,246.99zM686.35,26.41L678.45,21.7L665.38,26.89L651.66,26.85L640.23,28.53L631.05,35.91L623.03,40.46L616.15,49.57L632.74,51.89L667.65,33.74L679.9,30.14L684.51,27.27L686.35,26.41zM789.31,0L778.46,2.8L762.46,12.43L729.9,26.55L719.6,39.05L737.87,33.42L776.11,22.17L798.39,10.3L796.09,2.77L789.31,0z"
};

// src/Caymanislands.tsx
var Caymanislands = ({
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
  return /* @__PURE__ */ import_react.default.createElement(import_react.default.Fragment, null, /* @__PURE__ */ import_react.default.createElement("div", { className: "map", style: mapStyle }, /* @__PURE__ */ import_react.default.createElement("svg", { version: "1.1", id: "svg2", x: "0px", y: "0px", viewBox: "0 -20 1800 300" }, stateCode?.map((stateCode2, index) => /* @__PURE__ */ import_react.default.createElement(
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
var Caymanislands_default = Caymanislands;

// src/index.ts
var src_default = Caymanislands_default;
