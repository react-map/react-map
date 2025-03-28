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

// src/Gambia.tsx
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
var stateCode = ["North Bank", "West Coast", "Lower River", "Banjul", "Upper River", "Central River"];
var drawPath = {
  "North Bank": "M374.27,50.68L369.65,50.55L357.73,48.74L354.04,48.57L353.4,52.26L352.86,63.06L348.71,64.47L335.77,64.43L319.36,64.36L302.92,64.3L286.51,64.23L270.07,64.17L253.65,64.1L237.24,64.05L220.8,63.98L204.38,63.92L198.74,63.91L187.97,63.88L171.55,63.81L155.14,63.75L138.7,63.68L122.28,63.62L105.87,63.55L89.44,63.5L72.88,63.43L72.88,63.43L74.63,66.11L76.12,69.7L76.42,73.99L74.16,85.41L74.16,90.99L74.72,92.01L77.35,93.62L79.01,96.63L83.89,100.3L84.96,102.21L85.57,104.26L88.18,109.65L88.76,113.42L88.18,116.28L84.94,122.99L83.34,125.39L91.89,125.91L112.39,130.96L118.06,131.41L127.2,131.12L136.21,129.79L141.44,127.09L140.15,126.6L138.92,125.78L137.66,125.39L137.66,123.53L138.79,123.24L141.44,121.86L139.85,118.78L140.4,116.52L144.87,112.4L145.99,115.52L145.5,118.71L144.72,121.53L144.87,123.53L147.13,125.19L149.13,124.41L151.09,122.76L153.11,121.86L155.63,119.97L166.71,108.69L174.13,103.11L178.91,100.5L183.88,99.42L189.09,100.23L197.46,103.25L282.16,96.56L291.6,93.67L303.24,87.35L308.01,86.25L312.63,86.81L319.74,90.19L324.26,89.97L326.89,88.29L330.78,82.98L333.47,80.84L338.68,79.37L342.14,80.12L345.13,81.69L348.79,82.54L349.93,83.11L351.52,84.39L353.55,85.68L355.94,86.25L358.06,85.7L360.36,84.75L362.71,84.31L365.03,85.41L371.44,91.21L375.79,94.35L379.57,95.7L383.67,96.28L392.74,98.83L397.71,99.42L400.62,98.42L403.39,95.81L405.33,92.19L405.83,88.11L405.9,88.11L390.32,76.74L387.21,69.1L387.66,56.53L388.46,52.7L385.43,51L376.28,50.49L374.27,50.68z",
  "West Coast": "M22.05,205.24L22.45,198.99L23.41,195.96L25.09,193.74L29.27,189.6L30.1,186.99L34.01,180.35L43.23,178.28L54.74,178.4L98.31,178.8L138.48,179.16L196.98,179.69L231.43,180L248.43,180.16L255.48,180.23L265.39,180.31L267.16,179L267.66,159.65L267.76,155.42L267.62,155.39L229.03,147.02L226.93,146.92L219.79,148.7L214.39,149.31L212.46,149.82L210.6,150.05L209,149.9L206.51,148.99L204.53,148.8L201.8,150.02L199.97,153.07L199.13,154.05L197.49,154.1L195.54,153.27L192.85,150.76L191.93,148.8L191.61,147.04L191.16,145.67L190.06,144.47L185.01,143.95L181.32,145.81L181.32,147.83L172.28,152.76L165.87,154.7L161.14,153.38L160.45,148.59L161.59,142.36L160.47,136.98L153.11,134.66L147.83,136.14L138.08,142.64L133.16,144.12L128.86,146.27L125.27,150.04L122.23,151.25L119.62,145.81L116.4,147.43L112.78,147.99L105,147.83L105,149.69L108.68,149.38L111.52,150.39L113.37,152.64L114.03,156.09L115.05,156.82L119.88,161.76L121.43,164.51L117.97,161.86L115.62,161.99L110.42,166.37L111.99,162.6L111.87,157.74L110.35,153.5L107.79,151.7L102.41,151.19L99.7,149.89L97.64,147.99L94.18,145.81L90.39,144.71L77.01,144.12L74.87,142.57L65.13,130.96L65.75,126.41L63.86,118.31L57.56,123.46L45.9,132.02L35.07,131.16L26.74,122.6L19.59,112.9L16.58,115.29L13.14,117.2L9.91,117.98L7.16,119.73L4.32,128.09L1.94,130.96L4.42,137.13L5.39,138.55L3.33,142.9L4.49,146.51L9.01,151.7L10.49,155.3L11.11,158.84L10.46,171.55L10.65,174.78L15.79,188.19L16.27,192.29L14.41,196.2L13.3,198.44L13.94,200.36L18.02,201.76L22.05,205.24z",
  "Lower River": "M437.78,70.79L437.66,70.7L437.11,70.28L435.57,70.02L433.53,70.51L430.32,72.89L423.74,75.95L407.04,85.77L406.42,88.11L407.79,88.11L405.13,99.22L395.67,103.16L384.08,102.43L374.97,99.42L372.18,96.65L369.68,92.89L366.45,89.54L361.44,88.11L358.98,88.71L356.25,89.81L353.41,90.28L350.68,89.04L348.33,87.16L345.32,85.48L342.03,84.44L338.87,84.56L336.32,86.39L332.12,93L329.83,95.7L326.84,97.83L324.32,98.91L321.57,99.35L317.85,99.42L315.26,98.51L311.5,94.57L308.92,93.67L306.44,94.4L301.49,97.98L299,99.42L283.59,104.22L278.16,104.81L261.11,102.78L255.34,103.14L254.53,103.69L253.47,104.79L252.05,105.99L250.08,106.85L247.59,107.32L246.27,107.25L244.77,107L241.88,106.85L236.83,107.34L222.68,110.71L185.59,108.69L181.28,106.93L178.69,106.45L177.55,107.78L176.71,110.64L174.73,112.78L164.15,121.66L161.97,125.05L161.14,130.03L161.26,132.28L161.76,134.41L162.61,136.06L163.93,136.71L165.59,137.82L166.16,140.47L166.3,143.5L167.5,150.95L168.62,152.54L171.13,150.68L173.26,148.56L175.7,147.06L178.41,146.13L181.32,145.81L185.01,143.95L190.06,144.47L191.16,145.67L191.61,147.04L191.93,148.8L192.85,150.76L195.54,153.27L197.49,154.1L199.13,154.05L199.97,153.07L201.8,150.02L204.53,148.8L206.51,148.99L209,149.9L210.6,150.05L212.46,149.82L214.39,149.31L219.79,148.7L226.93,146.92L229.03,147.02L267.62,155.39L267.76,155.42L268.2,136.15L269.26,132.32L272.32,130.62L290.75,128.84L302.62,125.03L305.96,124.95L323.79,126.7L328.1,126.26L336.06,123.58L342.16,120.24L348.35,117.9L356.61,118.26L385.45,124.44L395.19,124.43L403.8,122.83L412.46,119.61L420.06,114.53L425.5,107.41L427.1,99.9L428.09,83.08L431.8,77.03L437.78,70.79z",
  Banjul: "M63.86,118.31L60.37,110.52L56.26,106.85L59.29,103.61L63.65,103.31L66.56,102.47L65.13,97.57L62.31,94.62L58.22,93L53.52,93.22L48.86,95.7L46.15,94.37L43.87,92.87L42.38,90.9L41.83,88.11L35.05,93.75L19.59,112.9L26.74,122.6L35.07,131.16L45.9,132.02L57.56,123.46L63.86,118.31z",
  "Upper River": "M781.19,86.04L780.64,85.56L779.27,83.27L777.58,78.12L776.21,75.75L771.79,72.11L765.44,68.87L758.72,66.51L753.17,65.54L749.62,66.12L744.24,69.3L741.13,70.7L738.37,71.13L733.77,70.74L730.93,70.84L725.57,72.18L713.34,78.49L698.08,81.96L693.07,84.14L678.42,93.33L662.89,98.91L658.3,100.02L653.47,99.35L647.12,96.35L627.94,82.54L627.91,82.56L623.86,85.16L622.82,86.29L621.56,87.97L621.02,89.99L619.71,93.63L618.65,95.39L617.58,96.57L612.95,99.73L619.38,113.61L620.93,114.62L617.14,116.82L616.08,116.18L614.87,115.71L612.99,116.91L611.16,118.55L605.31,131.67L604.15,135.15L606.59,137.44L610.11,139.45L613.93,140.57L622.25,140.91L625.77,141.9L628.73,144.98L630.75,147.71L633.25,149.97L636.05,151.91L645.69,156.92L652.61,158.9L659.76,159.46L674.8,158.12L689.15,160.83L696.8,160.57L702.58,157.7L715.28,148.07L719.24,146.28L723.82,146.33L735.17,142.2L745.82,142.07L756.44,139.2L776.42,137.47L789.51,131.72L797.04,120.18L798.06,106.27L791.72,93.42L789.05,91.2L783.05,87.64L781.19,86.04z",
  "Central River": "M459.89,0L440.61,7.13L420.69,19.94L415.06,21.29L412.82,19.58L407.69,12.74L405.22,10.38L393.77,8.53L381.53,13.2L370.35,21.45L362.11,30.41L359.17,35.04L356.44,40.74L354.37,46.72L354.04,48.57L357.73,48.74L369.65,50.55L374.27,50.68L376.28,50.49L385.43,51L388.46,52.7L387.66,56.53L387.21,69.1L390.32,76.74L405.9,88.11L406.41,88.11L406.42,88.11L407.04,85.77L423.74,75.95L430.32,72.89L433.53,70.51L435.57,70.02L437.11,70.28L437.66,70.7L437.78,70.79L443.29,65.04L449.33,62.6L456.6,67.36L468.47,78.57L481.6,88.14L481.64,88.16L481.7,88.2L481.74,88.23L499.02,97.11L507.96,99.46L518.08,100.29L522.06,101.46L530.9,106.91L535.75,108.5L541.16,109.54L543.99,111.3L549.32,118.77L556.69,125.4L565.53,129.15L575.19,130.31L584.99,129.15L593.56,126.99L596.58,128.07L604.15,135.15L605.31,131.67L611.16,118.55L612.99,116.91L614.87,115.71L616.08,116.18L617.14,116.82L620.93,114.62L619.38,113.61L612.95,99.73L617.58,96.57L618.65,95.39L619.71,93.63L621.02,89.99L621.56,87.97L622.82,86.29L623.86,85.16L627.91,82.56L627.94,82.54L625.78,80.99L623.11,78.06L621.4,74.41L617.87,62.6L615.35,57.4L611.78,52.89L606.66,48.76L595.31,43.42L584.43,42.59L573.72,45.48L557.49,54.61L554.22,55.67L550.52,54.33L539.66,47.71L537.83,45.64L532.69,27.98L530.32,22.97L526.98,18.32L522.66,14.81L517.64,10.73L507.98,7.5L481.29,6.29L465.55,0.28L459.89,0z"
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

// src/Gambia.tsx
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
var Gambia = ({
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
      GambiaSingle,
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
      GambiaMultiple,
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
var GambiaSingle = ({
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
var GambiaMultiple = ({
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
var Gambia_default = Gambia;

// src/index.ts
var src_default = Gambia_default;
