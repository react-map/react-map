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

// src/Seychelles.tsx
var import_react2 = __toESM(require("react"));

// src/constants.ts
var constants = {
  WIDTH: 500,
  MAPCOLOR: "#ffffff",
  STROKE_COLOR: "#000000",
  STROKE_WIDTH: 0.5,
  HOVERCOLOR: "#303030",
  SELECTED_COLOR: "#ff0000"
};
var stateCode = [
  "Roche Caiman",
  "Les Mamelles",
  "Takamaka",
  "Saint Louis",
  "Port Glaud",
  "Pointe La Rue",
  "Plaisance",
  "Mont Fleuri",
  "Mont Buxton",
  "English River",
  "La Digue and Inner Islands",
  "Grand'Anse Praslin",
  "Grand'Anse",
  "Glacis",
  "Cascade",
  "Bel Ombre",
  "Bel Air",
  "Beau Vallon",
  "Baie Sainte Anne",
  "Baie Lazare",
  "Anse Royale",
  "Au Cap",
  "Anse Etoile",
  "Anse Boileau",
  "Anse aux Pins",
  "Outer Islands"
];
var drawPath = {
  "Roche Caiman": "M736.21,68.33L734.91,67.42L734.86,68.02L736.01,68.89L736.21,68.33z",
  "Les Mamelles": "M736.01,68.89L734.86,68.02L734.93,68.44L734.79,68.61L735.06,69.42L735.47,69.19L736.01,68.89z",
  Takamaka: "M736.3,78.27L737.17,79.81L738.4,80.44L739.84,80.44L739.58,79.32L738.99,78.85L738.88,77.76L737.6,77.86L737.64,78.35L736.3,78.27z",
  "Saint Louis": "M732.67,65.89L731.97,65.44L731.41,66.14L731.69,66.66L732.67,65.89z",
  "Port Glaud": "M729.34,70.59L729.39,70.45L729.46,70.2L729.3,69.94L729.01,69.77L728.84,69.7L728.69,69.68L728.64,69.78L728.74,69.91L728.72,70.07L728.92,70.26L729.24,70.62L729.34,70.59zM726.84,69.52L726.58,69.32L726.24,69.06L725.96,68.96L725.79,69.12L725.91,69.31L726.14,69.48L726.53,69.54L726.77,69.64L726.84,69.52zM732.18,67.11L731.69,66.66L731.41,66.14L730.34,66.56L730.48,67.15L729.61,67.53L727.37,66.4L726.92,66.84L727.15,67.25L726.93,67.42L726.32,67.36L726.19,67.64L726.64,67.97L727.31,68.17L728.09,68L728.72,68.2L728.92,68.45L728.51,68.52L728.48,68.84L729.05,69.05L729.65,69.07L730.35,69.5L731.72,70.32L732.8,70.43L732.88,70.11L732.6,70.01L732.63,69.52L733.29,69.42L733.61,68.82L732.49,68.27L732.18,67.11z",
  "Pointe La Rue": "M739.1,70.62L738.14,69.65L737.92,69.5L737.34,70.39L739.1,70.62z",
  Plaisance: "M734.91,67.42L734.6,67.02L734.23,67.57L734.02,67.99L733.61,68.82L735.24,69.97L735.06,69.42L734.79,68.61L734.93,68.44L734.86,68.02L734.91,67.42z",
  "Mont Fleuri": "M736.62,66.48L736.34,66.47L736.18,66.62L736.2,66.96L736.49,67.08L736.72,67.3L737.05,67.42L737.3,67.39L737.38,67.17L737.16,66.61L736.96,66.54L736.81,66.62L736.62,66.48zM734.23,67.57L734.6,67.02L734.02,66.26L733.71,66.28L733.71,66.63L733.29,66.8L734.02,67.99L734.23,67.57zM737.85,66.41L737.75,66.21L737.48,66.14L737.29,65.97L737.17,65.94L737.1,66.12L737.24,66.33L737.51,66.5L737.72,66.59L737.85,66.41zM737.14,64.11L736.79,64.22L736.68,64.31L736.58,64.48L736.63,64.76L736.55,65.18L736.58,65.41L736.73,65.39L737.06,65.17L737.58,64.96L737.83,64.61L737.98,64.29L737.83,64.19L737.51,64.19L737.14,64.11z",
  "Mont Buxton": "M732.67,65.89L732.77,65.26L732.15,64.6L731.76,64.92L731.97,65.44L732.67,65.89z",
  "English River": "M733.67,64.13L733.22,64.04L732.15,64.6L732.77,65.26L732.67,65.89L733.58,65.68L733.67,64.76L733.67,64.13z",
  "La Digue and Inner Islands": "M772.49,63.53L772.43,63.17L772.04,62.65L771.7,62.55L771.36,62.65L771.1,62.85L771.14,63.15L771.62,63.63L772.08,63.67L772.49,63.53zM717.85,56.3L718.56,54.72L717.82,53.36L716.41,52.35L715.09,51.92L714.78,53.4L715.3,55.3L716.4,56.62L717.85,56.3zM764.09,46.31L764.59,45.84L765.12,45.57L764.62,44.8L764.09,43.8L763.12,43.38L762.86,44.18L762.44,45.16L762.62,46.13L763.33,46.84L763.89,46.99L764.09,46.31zM770.4,43.83L770.49,43.35L770.1,43.12L769.93,43.62L770.01,44.21L770.31,44.36L770.4,43.83zM767.3,43.32L767.19,42.7L766.42,41.88L766.04,41.79L765.89,42.26L766.42,43L766.83,43.44L767.3,43.32zM766.45,40.11L766.21,39.6L766.13,39.1L765.86,39.07L765.86,39.51L766.16,40.13L766.45,40.11zM749.49,0L748.87,0.8L749.4,1.63L749.98,1.64L749.49,0z",
  "Grand'Anse Praslin": "M748.81,44.65L748.63,44.27L748.48,44.12L748.22,44.33L748.57,44.65L748.81,44.65zM749.96,43.12L750.02,42.73L749.75,42.65L749.51,42.82L749.54,43.18L749.96,43.12zM758.07,44.4L756.45,43.5L755.93,42.72L751.32,39.96L750.87,40.12L751.39,41.33L751.46,41.91L752.05,42.5L753.01,42.62L754.08,42.8L754.53,43.79L755.28,44.56L756.38,45.02L757.36,45.05L758.07,44.4zM750.72,33.43L750.34,33.31L750.04,33.25L749.54,33.28L749.46,33.49L749.87,33.58L750.46,33.64L750.72,33.43z",
  "Grand'Anse": "M735.24,69.97L733.61,68.82L733.29,69.42L732.63,69.52L732.6,70.01L732.88,70.11L732.8,70.43L733.54,71.47L734.32,72.62L735.1,72.7L735.31,71.96L736.18,71.27L736.46,70.43L735.47,69.19L735.06,69.42L735.24,69.97z",
  Glacis: "M733.98,61.97L733.27,61.24L732.68,61.15L732.13,61.11L731.59,61.27L731.64,62.62L731.51,63.2L732.15,63.21L732.63,62.19L733.61,62.37L733.98,61.97z",
  Cascade: "M737.92,69.5L736.65,68.64L736.21,68.33L736.01,68.89L735.47,69.19L736.46,70.43L736.85,70.57L737.15,70.67L737.34,70.39L737.92,69.5z",
  "Bel Ombre": "M730.27,65.51L730.06,65.26L729.46,65.52L728.49,65.6L728,65.8L727.37,66.4L729.61,67.53L730.48,67.15L730.34,66.56L731.41,66.14L730.96,65.26L730.27,65.51z",
  "Bel Air": "M733.71,66.28L733.41,66.29L733.45,66.15L733.81,66.03L733.58,65.68L732.67,65.89L731.69,66.66L732.18,67.11L732.49,68.27L733.61,68.82L734.02,67.99L733.29,66.8L733.71,66.63L733.71,66.28z",
  "Beau Vallon": "M732.15,63.21L731.51,63.2L731.43,63.57L730.99,63.88L730.68,64.52L730.31,65.15L730.06,65.26L730.27,65.51L730.96,65.26L731.41,66.14L731.97,65.44L731.76,64.92L732.15,64.6L732.04,63.9L732.15,63.21z",
  "Baie Sainte Anne": "M756.38,41.32L755.23,41.11L754.16,40.67L753.03,39.63L752.44,39.66L751.9,39.76L751.32,39.96L755.93,42.72L756.45,43.5L758.07,44.4L758.09,43.56L758.3,42.9L759.57,42.84L758.79,41.88L757.79,41.73L757,42.08L756.38,41.32zM755.32,39.54L755.23,39.07L755.96,39.07L756.08,38.69L755.73,38.66L754.43,38.57L753.87,38.57L753.64,38.85L754.32,39.48L755.29,39.81L755.32,39.54z",
  "Baie Lazare": "M737.24,75.3L736.17,75.08L735.63,75.5L734.32,75.49L733.95,76.94L734.54,77.24L735.1,76.87L735.8,77.13L736.13,77.98L736.3,78.27L737.64,78.35L737.6,77.86L737.29,77.06L737.19,75.63L737.24,75.3z",
  "Anse Royale": "M739.06,75.12L737.6,74.2L737.47,73.77L737.24,75.3L737.19,75.63L737.29,77.06L737.6,77.86L738.88,77.76L738.17,76.2L738.4,75.3L739.06,75.12z",
  "Au Cap": "M737.15,70.67L736.85,70.57L737.12,72.66L737.47,73.77L737.6,74.2L739.06,75.12L738.84,73.29L738.54,72.81L738.92,71.33L737.15,70.67z",
  "Anse Etoile": "M733.67,64.13L733.92,63.28L734.24,62.93L733.98,61.97L733.61,62.37L732.63,62.19L732.15,63.21L732.04,63.9L732.15,64.6L733.22,64.04L733.67,64.13z",
  "Anse Boileau": "M736.85,70.57L736.46,70.43L736.18,71.27L735.31,71.96L735.1,72.7L735.39,73.22L735.28,73.89L735.65,74.37L736.17,75.08L737.24,75.3L737.47,73.77L737.12,72.66L736.85,70.57z",
  "Anse aux Pins": "M739.1,70.62L737.34,70.39L737.15,70.67L738.92,71.33L739.1,70.62z",
  "Outer Islands": "M395.27,505.77L396,503.92L395.64,503.75L395.51,505.07L395.27,505.77zM394.97,502.82L394.8,502.97L395.44,503.47L394.97,502.82zM394.71,503.04L394.42,502.67L394.14,503.31L394.39,503.36L394.71,503.04zM24.02,475.25L24.57,474.07L24.74,473.11L23.92,473.34L22.94,473.93L22.27,474.76L22.36,475.61L23.21,475.97L24.02,475.25zM104.43,471.52L104.2,471.06L103.76,471.36L103.76,472.56L104.43,471.52zM25.55,446.25L25.96,445.91L25.23,445.14L23.61,444.01L19.83,442.41L19.97,443.47L20.23,444.39L20.7,445.14L21.49,445.65L21.49,446.25L20.62,446.05L19.83,445.65L19.28,446.25L18.79,445.65L17.76,446.36L15.73,447.28L13.59,447.96L12.21,447.89L9.75,449.32L6.07,449.53L2.62,448.51L0.79,446.25L2.93,451.61L8.11,451.37L14.52,449.38L20.37,449.53L21.82,448.73L24.53,446.67L25.55,446.25zM18.19,442.41L15.5,442.26L12.38,441.7L9.33,441.51L6.62,442.5L6.38,442.47L6.24,442.54L6.26,442.91L6.68,442.96L6.75,443.06L6.71,443.24L6.85,443.5L7.78,443.2L9.58,443.47L10.59,442.91L11.93,443.61L14.42,443.96L16.89,443.66L18.19,442.41zM798.02,267.59L798.86,265.86L799.21,264.12L797.78,264.9L796.94,266.53L796.01,270.71L798.02,267.59zM518.37,254.88L518.4,255.21L518.4,255.47L518.5,255.66L518.8,255.74L518.37,254.88zM727.48,164.9L727.56,163.98L727.33,164.86L727.34,165.19L727.48,164.9zM566.07,130.62L565.88,130.23L565.27,129.46L565.58,130.34L565.79,130.73L566.13,131.12L566.07,130.62z"
};

// src/hooks/mouseTrack.ts
var import_react = require("react");
var useMousePosition = () => {
  const [position, setPosition] = (0, import_react.useState)({ x: 0, y: 0 });
  const updateMousePosition = (event) => {
    setPosition({ x: event.clientX, y: event.clientY });
  };
  (0, import_react.useEffect)(() => {
    window.addEventListener("mousemove", updateMousePosition);
    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
    };
  }, []);
  return position;
};
var mouseTrack_default = useMousePosition;

// src/Seychelles.tsx
var import_react3 = require("react");
var hintStyleBase = {
  position: "fixed",
  backgroundColor: "white",
  padding: "10px",
  borderRadius: 5,
  border: "1px solid #ccc",
  pointerEvents: "none",
  zIndex: 1e3
};
var getStrokeProperties = (borderStyle) => {
  switch (borderStyle) {
    case "dashed":
      return { strokeDasharray: "8 4" };
    case "dotted":
      return { strokeDasharray: "2 2" };
    case "dash-dot":
      return { strokeDasharray: "8 4 2 4" };
    case "dash-double-dot":
      return { strokeDasharray: "8 4 2 4 2 4" };
    default:
      return { strokeDasharray: "none" };
  }
};
var Seychelles = ({
  type,
  size = constants.WIDTH,
  mapColor = constants.MAPCOLOR,
  strokeColor = constants.STROKE_COLOR,
  strokeWidth = constants.STROKE_WIDTH,
  hoverColor,
  selectColor,
  hints,
  hintTextColor,
  hintBackgroundColor,
  hintPadding,
  hintBorderRadius,
  onSelect,
  cityColors = {},
  disableClick = false,
  disableHover = false,
  borderStyle
}) => {
  if (type === "select-single") {
    return /* @__PURE__ */ import_react2.default.createElement(
      SeychellesSingle,
      {
        type: "select-single",
        size,
        mapColor,
        strokeColor,
        strokeWidth,
        hoverColor,
        selectColor,
        hints,
        hintTextColor,
        hintBackgroundColor,
        hintPadding,
        hintBorderRadius,
        onSelect,
        cityColors,
        disableClick,
        disableHover,
        borderStyle
      }
    );
  } else if (type === "select-multiple") {
    return /* @__PURE__ */ import_react2.default.createElement(
      SeychellesMultiple,
      {
        type: "select-multiple",
        size,
        mapColor,
        strokeColor,
        strokeWidth,
        hoverColor,
        selectColor,
        hints,
        hintTextColor,
        hintBackgroundColor,
        hintPadding,
        hintBorderRadius,
        onSelect,
        cityColors,
        disableClick,
        disableHover,
        borderStyle
      }
    );
  } else {
    return null;
  }
};
var SeychellesSingle = ({
  size,
  mapColor,
  strokeColor,
  selectColor,
  strokeWidth,
  hoverColor,
  hints,
  onSelect,
  hintTextColor,
  hintBackgroundColor,
  hintPadding,
  hintBorderRadius,
  cityColors,
  disableClick,
  disableHover,
  borderStyle
}) => {
  const instanceId = (0, import_react3.useId)().replace(/:/g, "");
  const { x, y } = mouseTrack_default();
  const [stateHovered, setStateHovered] = (0, import_react2.useState)(null);
  const [selectedState, setSelectedState] = (0, import_react2.useState)(null);
  const [viewBox, setViewBox] = (0, import_react2.useState)("0 0 100 100");
  const strokeProps = (0, import_react2.useMemo)(() => getStrokeProperties(borderStyle), [borderStyle]);
  (0, import_react2.useEffect)(() => {
    const svg = document.getElementById(`svg2-${instanceId}`);
    if (svg) {
      const bbox = svg.getBBox();
      setViewBox(`${bbox.x} ${bbox.y} ${bbox.width} ${bbox.height}`);
    }
  }, [instanceId]);
  const mapStyle = (0, import_react2.useMemo)(
    () => ({
      width: size,
      stroke: strokeColor,
      strokeWidth,
      ...strokeProps
    }),
    [size, strokeColor, strokeWidth, strokeProps]
  );
  const hintStyle = {
    ...hintStyleBase,
    backgroundColor: hintBackgroundColor || hintStyleBase.backgroundColor,
    padding: hintPadding || hintStyleBase.padding,
    borderRadius: hintBorderRadius || hintStyleBase.borderRadius,
    color: hintTextColor || "black",
    top: y + 20,
    left: x + 20
  };
  (0, import_react2.useEffect)(() => {
    stateCode.forEach((state) => {
      const path = document.getElementById(`${state}-${instanceId}`);
      if (path) {
        path.style.fill = cityColors[state] || mapColor;
      }
    });
  }, [cityColors, mapColor, instanceId]);
  (0, import_react2.useEffect)(() => {
    if (selectedState) {
      const path = document.getElementById(`${selectedState}-${instanceId}`);
      if (path) {
        path.style.fill = selectColor || constants.SELECTED_COLOR;
      }
    }
  }, [selectedState, selectColor, instanceId]);
  const handleMouseEnter = (hoverStateId) => {
    const path = document.getElementById(`${hoverStateId}-${instanceId}`);
    setStateHovered(hoverStateId);
    if (path && !disableHover) {
      path.style.fill = selectedState === hoverStateId ? selectColor || constants.SELECTED_COLOR : hoverColor || constants.HOVERCOLOR;
    }
  };
  const handleMouseLeave = (hoverStateId) => {
    const path = document.getElementById(`${hoverStateId}-${instanceId}`);
    setStateHovered(null);
    if (path && !disableHover) {
      path.style.fill = selectedState === hoverStateId ? selectColor || constants.SELECTED_COLOR : cityColors[hoverStateId] || mapColor;
    }
  };
  const handleClick = (stateCode2) => {
    if (disableClick) return;
    if (selectedState === stateCode2) {
      const path = document.getElementById(`${stateCode2}-${instanceId}`);
      if (path) {
        path.style.fill = cityColors[stateCode2] || mapColor;
      }
      setSelectedState(null);
      if (onSelect) {
        onSelect(null);
      }
    } else {
      if (selectedState) {
        const previousPath = document.getElementById(`${selectedState}-${instanceId}`);
        if (previousPath) {
          previousPath.style.fill = cityColors[selectedState] || mapColor;
        }
      }
      setSelectedState(stateCode2);
      if (onSelect) {
        onSelect(stateCode2);
      }
    }
  };
  return /* @__PURE__ */ import_react2.default.createElement(import_react2.default.Fragment, null, /* @__PURE__ */ import_react2.default.createElement("div", { className: "map", style: mapStyle }, /* @__PURE__ */ import_react2.default.createElement("svg", { version: "1.1", id: `svg2-${instanceId}`, x: "0px", y: "0px", viewBox }, stateCode?.map((code, index) => /* @__PURE__ */ import_react2.default.createElement(
    "path",
    {
      key: index,
      onClick: () => handleClick(code),
      onMouseEnter: () => handleMouseEnter(code),
      onMouseLeave: () => handleMouseLeave(code),
      id: `${code}-${instanceId}`,
      d: drawPath[code],
      style: {
        fill: cityColors[code] || mapColor,
        cursor: disableClick ? "default" : "pointer",
        ...strokeProps
      }
    }
  )))), hints && stateHovered && /* @__PURE__ */ import_react2.default.createElement("div", { style: hintStyle }, stateHovered));
};
var SeychellesMultiple = ({
  size,
  mapColor,
  strokeColor,
  selectColor,
  strokeWidth,
  hoverColor,
  hints,
  hintTextColor,
  hintBackgroundColor,
  hintPadding,
  hintBorderRadius,
  onSelect,
  cityColors,
  disableClick,
  disableHover,
  borderStyle
}) => {
  const instanceId = (0, import_react3.useId)().replace(/:/g, "");
  const { x, y } = mouseTrack_default();
  const [selectedStates, setSelectedStates] = (0, import_react2.useState)([]);
  const [stateHovered, setStateHovered] = (0, import_react2.useState)(null);
  const [viewBox, setViewBox] = (0, import_react2.useState)("0 0 100 100");
  const strokeProps = (0, import_react2.useMemo)(() => getStrokeProperties(borderStyle), [borderStyle]);
  (0, import_react2.useEffect)(() => {
    const svg = document.getElementById(`svg2-${instanceId}`);
    if (svg) {
      const bbox = svg.getBBox();
      setViewBox(`${bbox.x} ${bbox.y} ${bbox.width} ${bbox.height}`);
    }
  }, [instanceId]);
  const mapStyle = (0, import_react2.useMemo)(
    () => ({
      width: size,
      stroke: strokeColor,
      strokeWidth,
      ...strokeProps
    }),
    [size, strokeColor, strokeWidth, strokeProps]
  );
  const hintStyle = {
    ...hintStyleBase,
    backgroundColor: hintBackgroundColor || hintStyleBase.backgroundColor,
    padding: hintPadding || hintStyleBase.padding,
    borderRadius: hintBorderRadius || hintStyleBase.borderRadius,
    color: hintTextColor || "black",
    top: y + 20,
    left: x + 20
  };
  (0, import_react2.useEffect)(() => {
    stateCode.forEach((state) => {
      const path = document.getElementById(`${state}-${instanceId}`);
      if (path) {
        path.style.fill = cityColors[state] || mapColor;
      }
    });
  }, [cityColors, mapColor, instanceId]);
  (0, import_react2.useEffect)(() => {
    selectedStates.forEach((selectedState) => {
      const path = document.getElementById(`${selectedState}-${instanceId}`);
      if (path) {
        path.style.fill = selectColor || constants.SELECTED_COLOR;
      }
    });
  }, [selectedStates, selectColor, instanceId]);
  const handleMouseEnter = (hoverStateId) => {
    const path = document.getElementById(`${hoverStateId}-${instanceId}`);
    setStateHovered(hoverStateId);
    if (path && !disableHover) {
      path.style.fill = selectedStates.includes(hoverStateId) ? selectColor || constants.SELECTED_COLOR : hoverColor || constants.HOVERCOLOR;
    }
  };
  const handleMouseLeave = (hoverStateId) => {
    const path = document.getElementById(`${hoverStateId}-${instanceId}`);
    setStateHovered(null);
    if (path && !disableHover) {
      path.style.fill = selectedStates.includes(hoverStateId) ? selectColor || constants.SELECTED_COLOR : cityColors[hoverStateId] || mapColor;
    }
  };
  const handleClick = (stateCode2) => {
    if (disableClick) return;
    if (selectedStates.includes(stateCode2)) {
      const updatedSelectedStates = selectedStates.filter((state) => state !== stateCode2);
      const path = document.getElementById(`${stateCode2}-${instanceId}`);
      if (path) {
        path.style.fill = cityColors[stateCode2] || mapColor;
      }
      setSelectedStates(updatedSelectedStates);
      if (onSelect) {
        onSelect(stateCode2, updatedSelectedStates);
      }
    } else {
      setSelectedStates((prevStates) => {
        const updatedStates = [...prevStates, stateCode2];
        const path = document.getElementById(`${stateCode2}-${instanceId}`);
        if (path) {
          path.style.fill = selectColor || constants.SELECTED_COLOR;
        }
        if (onSelect) {
          onSelect(stateCode2, updatedStates);
        }
        return updatedStates;
      });
    }
  };
  return /* @__PURE__ */ import_react2.default.createElement(import_react2.default.Fragment, null, /* @__PURE__ */ import_react2.default.createElement("div", { className: "map", style: mapStyle }, /* @__PURE__ */ import_react2.default.createElement("svg", { version: "1.1", id: `svg2-${instanceId}`, x: "0px", y: "0px", viewBox }, stateCode?.map((code, index) => /* @__PURE__ */ import_react2.default.createElement(
    "path",
    {
      key: index,
      onClick: () => handleClick(code),
      onMouseEnter: () => handleMouseEnter(code),
      onMouseLeave: () => handleMouseLeave(code),
      id: `${code}-${instanceId}`,
      d: drawPath[code],
      style: {
        fill: cityColors[code] || mapColor,
        cursor: disableClick ? "default" : "pointer",
        ...strokeProps
      }
    }
  )))), hints && stateHovered && /* @__PURE__ */ import_react2.default.createElement("div", { style: hintStyle }, stateHovered));
};
var Seychelles_default = Seychelles;

// src/index.ts
var src_default = Seychelles_default;
