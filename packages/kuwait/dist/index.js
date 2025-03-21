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

// src/Kuwait.tsx
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
var stateCode = ["Hawalli", "Al Jahrah", "Mubarak Al-Kabeer", "Al Ahmadi", "Al Farwaniyah", "Al Asimah"];
var drawPath = {
  Hawalli: "M656.97,381.32L659.68,362.25L644.12,365.43L632.41,361.36L628.13,359.87L621.94,354.26L621.05,352.98L621.05,352.98L621.04,352.99L608.98,361.61L614.06,371.7L621.19,388.57L638.53,388.57L656.97,381.32z",
  "Al Jahrah": "M696.87,55.69L691.43,51.64L685.68,49.8L679.73,50.16L673.67,52.71L668.33,56.74L666.59,60.29L668.09,61.57L669.12,62.42L676.54,62.33L676.54,62.36L676.13,65.74L676.13,65.76L676.54,70.89L677.57,75.99L679.42,79.19L683.42,81.12L688.96,78.54L693.75,79.19L693.79,79.21L700.53,83.92L698.95,88.25L692.73,92.1L685.13,95.47L687.53,103.05L684.24,106.3L678.43,106.74L673.67,105.99L663.44,99.32L657.49,98.78L653.31,105.99L653.38,105.97L657.42,105.77L660.94,106.34L667.61,109.02L665.15,125.75L663.58,128.55L658.92,129.81L649.82,136.18L644.93,138.79L636.89,144.46L636.89,144.48L640.11,149.53L648.52,154.54L650.85,157.33L653.31,160.29L670.8,191.99L685.47,227.13L695.64,239.59L711,241.24L713.8,241.54L729.47,233.78L744.94,219.63L757.87,203.16L765.81,188.39L768.68,166.75L762.35,149.25L696.87,55.69zM630.6,61.77L642.06,55.69L643.9,53.79L647.98,48.32L650.68,45.73L662.14,39.14L663.44,34.12L656.97,33.49L656.94,33.49L640.52,35.82L635.86,38.46L627.24,50.04L621.43,54.07L622.04,57.19L624.37,60.47L627.48,62.33L630.6,61.77zM371.91,0L347.71,2.96L279.97,31.08L257.94,46.08L243.55,66.68L207.79,158.19L192.41,186.99L190.24,193.95L188.63,208.58L187.59,213.45L179.38,231.61L147.96,283.78L135.49,316.6L129.23,326.05L102.29,355.7L75.96,400.13L12.74,471.03L0.53,484.71L47.5,490.54L94.43,496.36L141.33,502.19L188.37,508.05L230.21,513.57L272.1,519.11L313.99,524.65L355.83,530.18L379.3,533.3L379.34,533.3L379.56,533.34L379.6,533.36L384.74,542.17L396.5,535.02L417.03,520.65L511.06,507.21L520.8,503.93L522.43,497.51L526.75,432.76L550.95,402.61L552.73,382.7L560.71,381.53L558.47,376.76L558.03,375.15L557.78,375.24L550.64,375.28L540.35,368.23L542.98,361.54L542.94,355.75L554.94,347.66L549.12,344.14L539.32,347.76L529.97,351.38L518.36,353.69L502.75,356.48L493.38,355.65L497.37,348.49L499.13,340.91L518.25,331.86L527.11,320.22L536.4,305.46L554.15,288.87L579.94,274.47L590.6,263.72L603.03,252.96L627.55,248.84L635.15,250.16L645.42,252.35L653.66,253.58L656.43,258.02L665.25,263.43L682.48,270.94L691.83,269.57L693.58,259.76L685.34,240.71L667.61,215.13L657.9,193.53L650.68,171.84L639.56,172.31L626.66,154.52L615.68,131.27L610.24,115.3L608.9,103.82L609.01,85.82L607.12,75.57L603.02,66.12L598.64,58.73L595.66,50.59L504.61,4.7L480.54,0L371.91,0z",
  "Mubarak Al-Kabeer": "M662.14,428.01L657.62,406.71L656.23,392.49L656.64,383.6L656.97,381.32L638.53,388.57L621.19,388.57L627.51,403.54L632.05,430.32L658.47,428.5L662.14,428.01z",
  "Al Ahmadi": "M478,754.49L500.57,754.27L575.31,753.48L650.06,752.69L724.82,751.92L799.47,751.15L799.34,751.04L794.48,745.84L787.91,737.08L784.49,730.65L782.98,724.75L781.27,701.71L780.11,696.8L775.05,702.7L769.3,705.63L765.43,703.25L765.81,693.23L768.68,693.23L770.46,694.81L772.1,695.49L774.09,694.32L777.24,690.25L773.27,688.2L771.38,686.39L770.97,683.95L771.49,680.17L773.75,682.23L780.11,686.68L777.58,678.55L777.13,669.79L778.88,661.33L782.98,653.95L765.64,650.2L755.75,646.01L751.37,639.35L748.91,633.54L737.41,617.26L733.92,607.81L734.47,598.16L736.25,588.7L735.02,581.47L718.83,576.08L712.5,570.02L691.53,538.55L684.14,522.45L673.77,456.86L671.52,447.09L665.73,437.77L662.14,428.01L658.47,428.5L632.05,430.32L565.9,441.73L565.42,421.26L559.21,410.87L550.95,402.61L526.75,432.76L522.43,497.51L520.8,503.93L511.06,507.21L417.03,520.65L396.5,535.02L384.74,542.17L405,576.87L428.31,640.91L430.26,653L431.87,678.84L435.91,693.45L441.65,707.58L448.01,718.44L456.99,726.74L466.63,733.55L474.5,741.79L478,754.49z",
  "Al Farwaniyah": "M621.19,388.57L614.06,371.7L579.3,376.3L560.71,381.53L552.73,382.7L550.95,402.61L559.21,410.87L565.42,421.26L565.9,441.73L632.05,430.32L627.51,403.54L621.19,388.57z",
  "Al Asimah": "M621.04,352.99L621.05,352.98L614.58,343.93L611.53,341.12L604.86,344.26L600.44,351.41L592.01,357.68L583.97,355.05L577.74,357.76L575.14,369.34L565.79,372.51L558.03,375.15L558.47,376.76L560.71,381.53L579.3,376.3L614.06,371.7L608.98,361.61L621.04,352.99zM777.75,321.7L774.43,317.32L769.57,313.2L766.29,310.39L759.72,307.79L743.02,302.8L735.7,303.79L731.05,311.09L731.05,311.13L730.72,323.78L739.61,323.31L750.74,325.07L758.75,328.17L770.34,338.38L774.34,341.04L778.35,341.92L784.58,344.14L785.46,339.25L781.07,326.1L777.75,321.7z"
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

// src/Kuwait.tsx
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
var Kuwait = ({
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
      KuwaitSingle,
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
      KuwaitMultiple,
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
var KuwaitSingle = ({
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
var KuwaitMultiple = ({
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
var Kuwait_default = Kuwait;

// src/index.ts
var src_default = Kuwait_default;
