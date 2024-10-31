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

// src/Christmasisland.tsx
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
var stateCode = ["Christmas Island"];
var drawPath = {
  "Christmas Island": "M583.24,826.57L678.66,819.6L710.46,749.42L698.72,600.11L749.12,510.03L749.12,387.61L779.94,238.83L787.28,122.89L799.52,38.81L735.91,0L622.39,58.21L526.49,155.23L437.92,238.83L273.03,232.86L153.15,168.67L75.35,141.8L75.35,219.42L107.64,304.01L63.6,413.49L0.48,452.3L19.57,522.97L139.93,484.15L279.39,477.69L406.12,503.07L495.17,535.91L514.25,626.49L551.93,723.04L583.24,826.57z"
};
var viewBox = "-30 -10 2000 900";

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

// src/Christmasisland.tsx
var import_react3 = require("react");
var getStrokeProperties = (borderStyle) => {
  switch (borderStyle) {
    case "dashed":
      return {
        strokeDasharray: "8 4"
      };
    case "dotted":
      return {
        strokeDasharray: "2 2"
      };
    case "dash-dot":
      return {
        strokeDasharray: "8 4 2 4"
      };
    case "dash-double-dot":
      return {
        strokeDasharray: "8 4 2 4 2 4"
      };
    default:
      return {
        strokeDasharray: "none"
      };
  }
};
var Christmasisland = ({
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
  hintBorderRadius,
  cityColors,
  disableClick,
  disableHover,
  borderStyle
}) => {
  if (type === "select-single") {
    return /* @__PURE__ */ import_react2.default.createElement(
      ChristmasislandSingle,
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
        hintBorderRadius,
        cityColors,
        disableClick,
        disableHover,
        borderStyle
      }
    );
  } else if (type === "select-multiple") {
    return /* @__PURE__ */ import_react2.default.createElement(
      ChristmasislandMultiple,
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
        hintBorderRadius,
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
var ChristmasislandSingle = ({
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
  cityColors = {},
  disableClick = false,
  disableHover = false,
  borderStyle
}) => {
  const instanceId = (0, import_react3.useId)().replace(/:/g, "");
  const { x, y } = mouseTrack_default();
  const [stateHovered, setStateHovered] = (0, import_react3.useState)(null);
  const [selectedState, setSelectedState] = (0, import_react3.useState)(null);
  const strokeProps = getStrokeProperties(borderStyle);
  const mapStyle = {
    width: size || constants.WIDTH,
    stroke: strokeColor || constants.STROKE_COLOR,
    strokeWidth: strokeWidth || constants.STROKE_WIDTH,
    ...strokeProps
  };
  (0, import_react2.useEffect)(() => {
    stateCode.forEach((state) => {
      const path = document.getElementById(`${state}-${instanceId}`);
      if (path) {
        path.style.fill = cityColors[state] || mapColor || constants.MAPCOLOR;
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
      if (selectedState === hoverStateId) {
        path.style.fill = selectColor || constants.SELECTED_COLOR;
      } else {
        path.style.fill = hoverColor || constants.HOVERCOLOR;
      }
    }
  };
  const handleMouseLeave = (hoverStateId) => {
    const path = document.getElementById(`${hoverStateId}-${instanceId}`);
    setStateHovered(null);
    if (path && !disableHover) {
      if (selectedState === hoverStateId) {
        path.style.fill = selectColor || constants.SELECTED_COLOR;
      } else {
        path.style.fill = cityColors[hoverStateId] || mapColor || constants.MAPCOLOR;
      }
    }
  };
  const handleClick = (stateCode2) => {
    if (disableClick) return;
    if (selectedState === stateCode2) {
      const path = document.getElementById(`${stateCode2}-${instanceId}`);
      if (path) {
        path.style.fill = cityColors[stateCode2] || mapColor || constants.MAPCOLOR;
      }
      setSelectedState(null);
      if (onSelect) {
        onSelect(null);
      }
    } else {
      if (selectedState) {
        const previousPath = document.getElementById(`${selectedState}-${instanceId}`);
        if (previousPath) {
          previousPath.style.fill = cityColors[selectedState] || mapColor || constants.MAPCOLOR;
        }
      }
      setSelectedState(stateCode2);
      if (onSelect) {
        onSelect(stateCode2);
      }
    }
  };
  return /* @__PURE__ */ import_react2.default.createElement(import_react2.default.Fragment, null, /* @__PURE__ */ import_react2.default.createElement("div", { className: "map", style: mapStyle }, /* @__PURE__ */ import_react2.default.createElement("svg", { version: "1.1", id: `svg2-${instanceId}`, x: "0px", y: "0px", viewBox }, stateCode?.map((stateCode2, index) => /* @__PURE__ */ import_react2.default.createElement(
    "path",
    {
      key: index,
      onClick: () => handleClick(stateCode2),
      onMouseEnter: () => handleMouseEnter(stateCode2),
      onMouseLeave: () => handleMouseLeave(stateCode2),
      id: `${stateCode2}-${instanceId}`,
      d: drawPath[stateCode2],
      style: {
        fill: cityColors[stateCode2] || mapColor || constants.MAPCOLOR,
        cursor: disableClick ? "default" : "pointer",
        ...strokeProps
      }
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
var ChristmasislandMultiple = ({
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
  onSelect,
  cityColors = {},
  disableClick = false,
  disableHover = false,
  borderStyle
}) => {
  const instanceId = (0, import_react3.useId)().replace(/:/g, "");
  const [selectedStates, setSelectedStates] = (0, import_react3.useState)([]);
  const { x, y } = mouseTrack_default();
  const [stateHovered, setStateHovered] = (0, import_react3.useState)(null);
  const strokeProps = getStrokeProperties(borderStyle);
  const mapStyle = {
    width: size || constants.WIDTH,
    stroke: strokeColor || constants.STROKE_COLOR,
    strokeWidth: strokeWidth || constants.STROKE_WIDTH,
    ...strokeProps
  };
  (0, import_react2.useEffect)(() => {
    stateCode.forEach((state) => {
      const path = document.getElementById(`${state}-${instanceId}`);
      if (path) {
        path.style.fill = cityColors[state] || mapColor || constants.MAPCOLOR;
      }
    });
  }, [cityColors, mapColor, instanceId]);
  (0, import_react2.useEffect)(() => {
    selectedStates.forEach((stateCode2) => {
      const path = document.getElementById(`${stateCode2}-${instanceId}`);
      if (path) {
        path.style.fill = selectColor || constants.SELECTED_COLOR;
      }
    });
  }, [selectedStates, selectColor, instanceId]);
  const handleClick = (stateCode2) => {
    if (disableClick) return;
    if (selectedStates.includes(stateCode2)) {
      const remove_state_code = selectedStates.filter((state) => state !== stateCode2);
      setSelectedStates(remove_state_code);
      const path = document.getElementById(`${stateCode2}-${instanceId}`);
      if (path) {
        path.style.fill = cityColors[stateCode2] || mapColor || constants.MAPCOLOR;
      }
    } else {
      setSelectedStates([...selectedStates, stateCode2]);
    }
    if (onSelect) {
      onSelect(stateCode2, selectedStates);
    }
  };
  const handleMouseEnter = (hoverStateId) => {
    const path = document.getElementById(`${hoverStateId}-${instanceId}`);
    setStateHovered(hoverStateId);
    if (path && !disableHover) {
      if (selectedStates.includes(hoverStateId)) {
        path.style.fill = selectColor || constants.SELECTED_COLOR;
      } else {
        path.style.fill = hoverColor || constants.HOVERCOLOR;
      }
    }
  };
  const handleMouseLeave = (hoverStateId) => {
    const path = document.getElementById(`${hoverStateId}-${instanceId}`);
    setStateHovered(null);
    if (path && !disableHover) {
      if (selectedStates.includes(hoverStateId)) {
        path.style.fill = selectColor || constants.SELECTED_COLOR;
      } else {
        path.style.fill = cityColors[hoverStateId] || mapColor || constants.MAPCOLOR;
      }
    }
  };
  return /* @__PURE__ */ import_react2.default.createElement(import_react2.default.Fragment, null, /* @__PURE__ */ import_react2.default.createElement("div", { className: "map", style: mapStyle }, /* @__PURE__ */ import_react2.default.createElement("svg", { version: "1.1", id: `svg2-${instanceId}`, x: "0px", y: "0px", viewBox }, stateCode?.map((stateCode2, index) => /* @__PURE__ */ import_react2.default.createElement(
    "path",
    {
      key: index,
      onClick: () => handleClick(stateCode2),
      onMouseEnter: () => handleMouseEnter(stateCode2),
      onMouseLeave: () => handleMouseLeave(stateCode2),
      id: `${stateCode2}-${instanceId}`,
      d: drawPath[stateCode2],
      style: {
        fill: cityColors[stateCode2] || mapColor || constants.MAPCOLOR,
        cursor: disableClick ? "default" : "pointer",
        ...strokeProps
      }
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
var Christmasisland_default = Christmasisland;

// src/index.ts
var src_default = Christmasisland_default;
