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

// src/Usvirginislands.tsx
var import_react = __toESM(require("react"));

// src/constants.ts
var constants = {
  WIDTH: "500px",
  MAPCOLOR: "#ffffff",
  STROKE_COLOR: "#000000",
  STROKE_WIDTH: "0.5",
  HOVERCOLOR: "#303030"
};
var stateCode = ["St. Thomas", "St. John", "St. Croix"];
var drawPath = {
  "St. Thomas": "M151.98,0L164.88,14.85L191.79,35.72L176.93,40.67L152.02,22.79L91.27,20.57L49.44,31.45L0.33,57.55L27.16,83.28L79.7,67.39L99.56,89.17L125.34,94.1L161.01,87.15L176.86,98.03L183.81,82.19L198.69,111.88L217.53,123.75L270.02,143.52L281.96,125.73L300.74,118.8L315.5,123.71L334.28,120.73L309.57,81.18L249.13,46.53L187.67,10.88L151.98,0z",
  "St. John": "M564.9,76.21L609.44,91.08L632.22,87.13L625.3,69.31L595.61,53.45L570.86,42.55L544.13,37.59L488.69,22.73L473.84,30.65L480.76,43.52L451.06,52.43L423.35,64.34L398.61,101.93L423.34,124.69L506.47,116.77L559.9,145.49L570.82,104.92L553.01,81.16L564.9,76.21z",
  "St. Croix": "M242.94,1227.31L274.11,1216.26L615.42,1167.33L651.45,1156.06L721.28,1123.76L756.9,1112.08L799.67,1107.47L799.67,1095.57L745.97,1078.43L681,1074.88L621.43,1087.85L583.51,1119.37L568.13,1105.35L550.45,1096L515.5,1083.67L451.88,1040.59L447.77,1036.06L408.23,1044.91L371.8,1068.29L336.58,1084.45L273.97,1065.25L260.41,1079.13L255.35,1101.1L257.11,1172.21L255.08,1197.5L242.94,1227.31z"
};

// src/Usvirginislands.tsx
var Usvirginislands = ({
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
  return /* @__PURE__ */ import_react.default.createElement(import_react.default.Fragment, null, /* @__PURE__ */ import_react.default.createElement("div", { className: "map", style: mapStyle }, /* @__PURE__ */ import_react.default.createElement(
    "svg",
    {
      version: "1.1",
      id: "svg2",
      x: "0px",
      y: "0px",
      viewBox: "0 -20 1800 200"
    },
    stateCode?.map((stateCode2, index) => /* @__PURE__ */ import_react.default.createElement(
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
var Usvirginislands_default = Usvirginislands;

// src/index.ts
var src_default = Usvirginislands_default;
