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

// src/Antiguabarbuda.tsx
var import_react2 = __toESM(require("react"));

// src/constants.ts
var constants = {
  WIDTH: "500px",
  MAPCOLOR: "#ffffff",
  STROKE_COLOR: "#000000",
  STROKE_WIDTH: "0.5",
  HOVERCOLOR: "#303030",
  SELECTED_COLOR: "#ff0000"
};
var viewBox = "-40 -30 2000 1100";
var stateCode = ["Saint John", "Saint Mary", "Saint Paul", "Saint Philip", "Saint Peter", "Saint George", "Redonda", "Barbuda"];
var drawPath = {
  "Saint John": "M651.92,692.59L614.46,687.89L597.55,698.84L586.85,711.59L584.89,726.14L594.4,742.39L567.36,750.49L546.53,759.48L533.58,771.73L557.99,785.23L566.4,788.52L580.96,778.65L591.74,788.68L612.11,793.69L613.31,797.45L607.32,811.24L602.52,842.57L620.5,822.52L626.49,836.3L636.07,826.28L662.43,818.76L674.41,821.26L674.41,807.48L666.02,803.72L649.25,792.44L651.65,778.65L648.05,752.32L638.47,743.55L637.27,718.47L654.04,717.22L651.92,692.59z",
  "Saint Mary": "M602.52,842.57L607.32,811.24L613.31,797.45L612.11,793.69L591.74,788.68L580.96,778.65L566.4,788.52L547.34,798.42L546.91,808.97L551.11,820.96L545.95,835L538.02,851.74L545.91,862.93L583.41,885.82L598.7,889.26L623.16,889.11L639.35,886.22L631.28,866.38L634.87,852.59L626.49,836.3L620.5,822.52L602.52,842.57z",
  "Saint Paul": "M730.75,847.94L722.34,816.25L704.36,821.26L674.41,821.26L662.43,818.76L636.07,826.28L626.49,836.3L634.87,852.59L631.28,866.38L639.35,886.22L663.39,874.43L671.32,872.43L679.63,881.72L698.69,899.11L717.94,908.4L726.74,893.76L721.19,863.53L721.62,852.39L730.75,847.94z",
  "Saint Philip": "M730.75,847.94L749.86,853.24L765.05,861.03L778.33,860.14L791.57,838.85L794.19,824.51L788.46,817.91L778.38,811.36L767.49,797.67L775.47,798.27L791.61,797.07L799.59,797.67L794.29,783.88L790.28,777.78L784.26,771.73L775.51,771.73L759.6,780.43L744.13,780.88L728.33,792.44L722.34,816.25L730.75,847.94z",
  "Saint Peter": "M744.13,780.88L732.09,772.58L726.74,754.98L737.44,752.58L742.41,749.29L745.7,744.69L751.43,738.19L737.96,739.99L726.5,737.99L717.37,731.89L710.68,721.39L699.6,736.89L696.45,744.09L695.3,754.98L688.79,762.35L694.78,772.38L695.98,784.92L682.8,789.93L674.41,807.48L674.41,821.26L704.36,821.26L722.34,816.25L728.33,792.44L744.13,780.88z",
  "Saint George": "M695.3,754.98L675.81,739.79L666.83,714.44L651.92,692.59L654.04,717.22L637.27,718.47L638.47,743.55L648.05,752.32L651.65,778.65L649.25,792.44L666.02,803.72L674.41,807.48L682.8,789.93L695.98,784.92L694.78,772.38L688.79,762.35L695.3,754.98z",
  Redonda: "M1.81,978.7L4.87,978.01L6.52,974.91L6.68,970.85L6.52,967.74L4.7,968.35L3.54,969.9L1.56,972.06L0.41,976.63L1.81,978.7z",
  Barbuda: "M598.41,165.56L650.3,186.75L671.17,202.39L678.58,224.39L698.64,217.07L710.73,218.17L718.8,213.97L726.74,190.81L728.93,171.57L727.79,151.22L719.38,114.33L710.73,94.07L697.83,72.61L681.49,53.06L662.57,38.62L647.33,35.61L622.73,44.18L607.2,38.62L615.28,34.91L623.16,30.19L599.75,0L583.46,9.13L577.87,32.8L586.37,46.29L607.49,58.17L614.75,85.95L613.03,117.34L607.2,140.29L593.44,132.47L593.44,120.89L598.08,106.31L598.41,89.06L592.2,76.07L573.57,53.56L566.4,38.62L564.49,29.09L562.68,25.08L558.38,21.01L557.42,45.04L562.25,64.34L569.08,83.24L574.43,105.86L576.87,156.13L583.31,173.87L598.41,165.56z"
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

// src/Antiguabarbuda.tsx
var import_react3 = require("react");
var Antiguabarbuda = ({
  type,
  size,
  mapColor,
  strokeColor,
  strokeWidth,
  hoverColor,
  onSelect,
  hints,
  selectColor,
  hintTextColor,
  hintBackgroundColor,
  hintPadding,
  hintBorderRadius
}) => {
  if (type === "select-single") {
    return /* @__PURE__ */ import_react2.default.createElement(
      AntiguabarbudaSingle,
      {
        type: "select-single",
        size,
        selectColor,
        mapColor,
        strokeColor,
        strokeWidth,
        hoverColor,
        hints,
        onSelect,
        hintTextColor,
        hintBackgroundColor,
        hintPadding,
        hintBorderRadius
      }
    );
  } else if (type === "select-multiple") {
    return /* @__PURE__ */ import_react2.default.createElement(
      AntiguabarbudaMultiple,
      {
        type: "select-multiple",
        size,
        selectColor,
        mapColor,
        strokeColor,
        strokeWidth,
        onSelect,
        hoverColor,
        hints,
        hintTextColor,
        hintBackgroundColor,
        hintPadding,
        hintBorderRadius
      }
    );
  } else {
    return null;
  }
};
var AntiguabarbudaSingle = ({
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
  hintBorderRadius
}) => {
  const { x, y } = mouseTrack_default();
  const [stateHovered, setStateHovered] = (0, import_react3.useState)(null);
  const [selectedState, setSelectedState] = (0, import_react3.useState)(null);
  (0, import_react2.useEffect)(() => {
    if (selectedState) {
      const path = document.getElementById(selectedState);
      if (path) {
        path.style.fill = selectColor || constants.SELECTED_COLOR;
      }
    }
  }, [selectedState, selectColor]);
  const mapStyle = {
    width: size || constants.WIDTH,
    fill: mapColor || constants.MAPCOLOR,
    stroke: strokeColor || constants.STROKE_COLOR,
    strokeWidth: strokeWidth || constants.STROKE_WIDTH
  };
  const handleMouseEnter = (hoverStateId) => {
    const path = document.getElementById(hoverStateId);
    setStateHovered(hoverStateId);
    if (path) {
      if (selectedState === hoverStateId) {
        path.style.fill = selectColor || constants.SELECTED_COLOR;
      } else {
        path.style.fill = hoverColor || constants.HOVERCOLOR;
      }
    }
  };
  const handleMouseLeave = (hoverStateId) => {
    const path = document.getElementById(hoverStateId);
    setStateHovered(null);
    if (path) {
      if (selectedState === hoverStateId) {
        path.style.fill = selectColor || constants.SELECTED_COLOR;
      } else {
        path.style.fill = mapColor || constants.MAPCOLOR;
      }
    }
  };
  const handleClick = (stateCode2) => {
    if (selectedState) {
      const path = document.getElementById(selectedState);
      if (path) {
        path.style.fill = mapColor || constants.MAPCOLOR;
      }
    }
    setSelectedState(stateCode2);
    if (onSelect) {
      onSelect(stateCode2);
    }
  };
  return /* @__PURE__ */ import_react2.default.createElement(import_react2.default.Fragment, null, /* @__PURE__ */ import_react2.default.createElement("div", { className: "map", style: mapStyle }, /* @__PURE__ */ import_react2.default.createElement("svg", { version: "1.1", id: "svg2", x: "0px", y: "0px", viewBox }, stateCode?.map((stateCode2, index) => /* @__PURE__ */ import_react2.default.createElement(
    "path",
    {
      key: index,
      onClick: () => handleClick(stateCode2),
      onMouseEnter: () => handleMouseEnter(stateCode2),
      onMouseLeave: () => handleMouseLeave(stateCode2),
      id: stateCode2,
      d: drawPath[stateCode2]
    }
  )))), hints && /* @__PURE__ */ import_react2.default.createElement("div", null, stateHovered && /* @__PURE__ */ import_react2.default.createElement(
    "div",
    {
      style: {
        position: "absolute",
        top: y + 20,
        left: x + 20,
        backgroundColor: hintBackgroundColor || "white",
        padding: hintPadding || "10px",
        borderRadius: hintBorderRadius || "5px",
        border: "1px solid #ccc",
        color: hintTextColor || "black"
      }
    },
    stateHovered
  )));
};
var AntiguabarbudaMultiple = ({
  size,
  selectColor,
  mapColor,
  strokeColor,
  strokeWidth,
  hoverColor,
  hints,
  hintTextColor,
  hintBackgroundColor,
  hintPadding,
  hintBorderRadius,
  onSelect
}) => {
  const [selectedStates, setSelectedStates] = (0, import_react3.useState)([]);
  const { x, y } = mouseTrack_default();
  const [stateHovered, setStateHovered] = (0, import_react3.useState)(null);
  (0, import_react2.useEffect)(() => {
    selectedStates.forEach((stateCode2) => {
      const path = document.getElementById(stateCode2);
      if (path) {
        path.style.fill = selectColor || constants.SELECTED_COLOR;
      }
    });
  }, [selectedStates, selectColor]);
  const mapStyle = {
    width: size || constants.WIDTH,
    fill: mapColor || constants.MAPCOLOR,
    stroke: strokeColor || constants.STROKE_COLOR,
    strokeWidth: strokeWidth || constants.STROKE_WIDTH
  };
  const handleClick = (stateCode2) => {
    if (selectedStates.includes(stateCode2)) {
      const remove_state_code = selectedStates.filter(
        (state) => state !== stateCode2
      );
      setSelectedStates(remove_state_code);
      const path = document.getElementById(stateCode2);
      if (path) {
        path.style.fill = mapColor || constants.MAPCOLOR;
      }
    } else {
      setSelectedStates([...selectedStates, stateCode2]);
    }
    if (onSelect) {
      onSelect(stateCode2, selectedStates);
    }
  };
  const handleMouseEnter = (hoverStateId) => {
    const path = document.getElementById(hoverStateId);
    if (path) {
      if (selectedStates.includes(hoverStateId)) {
        path.style.fill = selectColor || constants.SELECTED_COLOR;
      } else {
        path.style.fill = hoverColor || constants.HOVERCOLOR;
      }
    }
    setStateHovered(hoverStateId);
  };
  const handleMouseLeave = (hoverStateId) => {
    const path = document.getElementById(hoverStateId);
    if (path) {
      if (selectedStates.includes(hoverStateId)) {
        path.style.fill = selectColor || constants.SELECTED_COLOR;
      } else {
        path.style.fill = mapColor || constants.MAPCOLOR;
      }
    }
    setStateHovered(null);
  };
  return /* @__PURE__ */ import_react2.default.createElement(import_react2.default.Fragment, null, /* @__PURE__ */ import_react2.default.createElement("div", { className: "map", style: mapStyle }, /* @__PURE__ */ import_react2.default.createElement("svg", { version: "1.1", id: "svg2", x: "0px", y: "0px", viewBox }, stateCode?.map((stateCode2, index) => /* @__PURE__ */ import_react2.default.createElement(
    "path",
    {
      key: index,
      onClick: () => handleClick(stateCode2),
      onMouseEnter: () => handleMouseEnter(stateCode2),
      onMouseLeave: () => handleMouseLeave(stateCode2),
      id: stateCode2,
      d: drawPath[stateCode2]
    }
  )))), hints && /* @__PURE__ */ import_react2.default.createElement("div", null, stateHovered && /* @__PURE__ */ import_react2.default.createElement(
    "div",
    {
      style: {
        position: "absolute",
        top: y + 20,
        left: x + 20,
        backgroundColor: hintBackgroundColor || "white",
        padding: hintPadding || "10px",
        borderRadius: hintBorderRadius || "5px",
        border: "1px solid #ccc",
        color: hintTextColor || "black"
      }
    },
    stateHovered
  )));
};
var Antiguabarbuda_default = Antiguabarbuda;

// src/index.ts
var src_default = Antiguabarbuda_default;
