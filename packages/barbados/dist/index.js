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

// src/Barbados.tsx
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
  "Saint Thomas",
  "Saint Philip",
  "Saint Peter",
  "Saint Michael",
  "Saint Lucy",
  "Saint Andrew",
  "Saint John",
  "Saint James",
  "Saint George",
  "Saint Andrew",
  "Christ Church"
];
var drawPath = {
  "Saint Thomas": "M257.85,486.69L241.77,465.42L229.23,460.75L187.35,463.18L168.36,488.75L163.18,493.79L162.63,493.41L161.91,493.23L161.54,493.41L160.82,494.16L159.91,494.91L159.36,495.09L158.27,494.91L157.73,494.91L156.82,494.72L155.55,494.72L154.73,494.91L153.91,495.47L151.55,496.96L151,497.33L149.82,497.89L149.28,498.08L148.73,498.08L144.92,501.44L143.64,502.19L142.83,502.56L142.19,502.56L141.65,502.93L140.28,502.93L139.56,502.93L138.92,503.12L137.28,504.24L130.74,506.67L128.65,513.01L119.39,553.7L114.48,565.64L110.85,572.74L107.21,573.86L105.94,574.79L105.03,576.1L103.76,579.46L103.03,581.32L102.03,582.07L103.76,583.93L108.3,586.55L131.56,613.05L152,701.88L208.33,690.31L213.33,688.07L236.32,661.94L319.27,629.1L326.36,624.81L351.7,594.2L321.81,533.73L312.36,522.34L307.46,517.86L257.85,486.69z",
  "Saint Philip": "M799.62,665.3L758.42,612.99L693.46,583.01L656.26,570.86L656.25,570.87L650.89,579.46L612.37,626.48L607.83,630.96L584.11,645.89L558.95,655.97L511.97,718.11L496.53,777.08L529.42,787.34L534.6,792.56L540.59,802.26L546.32,841.63L547.32,844.43L567.94,879.88L572.39,889.95L572.3,891.45L575.66,894.06L581.57,895.92L601.65,903.76L610.64,908.24L627.79,932.09L698.32,883.18L788.61,789.75L799.62,665.3z",
  "Saint Peter": "M300.11,198.3L275.66,145.13L275.66,145.11L272.48,147.11L83.77,208.73L18.72,252.42L5,255.4L4.89,255.43L12.33,381.95L12.45,381.98L34.53,387.76L93.49,359.95L169.72,370.22L171.81,248.31L176.44,238.97L179.8,223.29L181.89,222.54L183.08,221.8L184.07,221.42L184.98,221.8L186.07,222.17L187.16,223.29L189.34,224.41L191.8,225.35L194.71,226.28L196.43,226.28L198.25,225.72L199.7,225.35L201.34,225.16L204.06,225.53L205.06,225.53L206.24,225.35L207.15,225.16L208.42,225.53L210.42,227.03L215.69,226.47L224.05,223.1L239.04,208.54L247.04,203.87L252.13,202.38L253.85,203.31L255.67,203.87L256.94,204.06L258.12,204.99L259.76,205.18L261.85,204.99L267.66,199.77L268.39,199.77L268.75,200.14L273.66,201.26L294.1,200.51L300.11,198.3z",
  "Saint Michael": "M294.83,853.76L236.32,661.94L213.33,688.07L208.33,690.31L152,701.88L114.66,730.99L111.57,734.35L105.21,739.2L87.86,746.85L80.68,751.14L80.5,751.89L76.14,749.27L58.15,732.29L48.43,733.04L48.19,733.06L74.49,825.89L115.13,905.07L162.34,938.71L190.1,940.62L190.13,940.62L299.01,882.68L300.55,882.49L300.1,877.64L294.83,853.76z",
  "Saint Lucy": "M145.75,0L82.22,23.82L32.28,75.29L7.39,122.63L0.38,178.65L4.89,255.43L5,255.4L18.72,252.42L83.77,208.73L272.48,147.11L275.66,145.11L258.78,108.52L210.42,35.29L145.75,0z",
  "Saint Andrew": "M381.53,364.03L367.52,344.62L300.13,198.35L300.11,198.3L294.1,200.51L273.66,201.26L268.75,200.14L268.39,199.77L267.66,199.77L261.85,204.99L259.76,205.18L258.12,204.99L256.94,204.06L255.67,203.87L253.85,203.31L252.13,202.38L247.04,203.87L239.04,208.54L224.05,223.1L215.69,226.47L210.42,227.03L208.42,225.53L207.15,225.16L206.24,225.35L205.06,225.53L204.06,225.53L201.34,225.16L199.7,225.35L198.25,225.72L196.43,226.28L194.71,226.28L191.8,225.35L189.34,224.41L187.16,223.29L186.07,222.17L184.98,221.8L184.07,221.42L183.08,221.8L181.89,222.54L179.8,223.29L176.44,238.97L171.81,248.31L169.72,370.22L187.35,463.18L229.23,460.75L241.77,465.42L257.85,486.69L294.1,401.95L305.09,384.22L307.09,383.66L308.55,383.47L309.82,383.66L310.73,384.22L311.64,384.96L312.82,386.83L313.82,387.76L318.18,389.82L328.81,387.02L373.24,365.92L381.41,364.06L381.53,364.03z",
  "Saint John": "M656.26,570.86L624.64,560.52L571.41,529.66L479.13,458.98L470.82,462.62L413.12,516.56L411.58,516.93L410.12,517.12L407.04,517.12L405.31,523.84L404.49,528.88L401.22,585.43L475,653.73L481.99,661.57L511.97,718.11L558.95,655.97L584.11,645.89L607.83,630.96L612.37,626.48L650.89,579.46L656.25,570.87L656.26,570.86z",
  "Saint James": "M169.72,370.22L93.49,359.95L34.53,387.76L12.45,381.98L12.33,381.95L28.99,665.3L48.19,733.06L48.43,733.04L58.15,732.29L76.14,749.27L80.5,751.89L80.68,751.14L87.86,746.85L105.21,739.2L111.57,734.35L114.66,730.99L152,701.88L131.56,613.05L108.3,586.55L103.76,583.93L102.03,582.07L103.03,581.32L103.76,579.46L105.03,576.1L105.94,574.79L107.21,573.86L110.85,572.74L114.48,565.64L119.39,553.7L128.65,513.01L130.74,506.67L137.28,504.24L138.92,503.12L139.56,502.93L140.28,502.93L141.65,502.93L142.19,502.56L142.83,502.56L143.64,502.19L144.92,501.44L148.73,498.08L149.28,498.08L149.82,497.89L151,497.33L151.55,496.96L153.91,495.47L154.73,494.91L155.55,494.72L156.82,494.72L157.73,494.91L158.27,494.91L159.36,495.09L159.91,494.91L160.82,494.16L161.54,493.41L161.91,493.23L162.63,493.41L163.18,493.79L168.36,488.75L187.35,463.18L169.72,370.22z",
  "Saint George": "M511.97,718.11L481.99,661.57L475,653.73L401.22,585.43L398.86,585.61L351.7,594.2L326.36,624.81L319.27,629.1L236.32,661.94L294.83,853.76L496.53,777.08L511.97,718.11z",
  "Christ Church": "M415.6,1059.6L439.63,1044.32L461.38,1040.5L483.84,1040.8L511.46,1037.42L586.43,960.74L627.78,932.1L627.79,932.09L610.64,908.24L601.65,903.76L581.57,895.92L575.66,894.06L572.3,891.45L572.39,889.95L567.94,879.88L547.32,844.43L546.32,841.63L540.59,802.26L534.6,792.56L529.42,787.34L496.53,777.08L294.83,853.76L300.1,877.64L300.55,882.49L299.01,882.68L190.13,940.62L237.03,944L316.01,962.65L380.97,999.96L415.6,1059.6z"
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

// src/Barbados.tsx
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
var Barbados = ({
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
      BarbadosSingle,
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
      BarbadosMultiple,
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
var BarbadosSingle = ({
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
var BarbadosMultiple = ({
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
var Barbados_default = Barbados;

// src/index.ts
var src_default = Barbados_default;
