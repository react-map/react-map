// src/Nauru.tsx
import React, { useEffect as useEffect2 } from "react";

// src/constants.ts
var constants = {
  WIDTH: "500px",
  MAPCOLOR: "#ffffff",
  STROKE_COLOR: "#000000",
  STROKE_WIDTH: "0.5",
  HOVERCOLOR: "#303030",
  SELECTED_COLOR: "#ff0000"
};
var stateCode = ["Nauru"];
var drawPath = {
  Nauru: "M445.3,0L413.13,2.4L397.13,13.75L372.85,26.69L362.82,43.45L338.63,68.63L278.93,133.26L238.89,171.69L200.96,208.91L172.06,233.3L145.83,254.53L139.65,257.88L104.53,287.38L67.21,323.01L48.24,352.41L38.31,375.89L33.49,390.94L30.49,404.96L28.13,410.04L24.12,409.47L21.71,410.69L19.53,413.17L12.43,411.34L12.12,411.72L19.72,414.09L22.09,411.23L23.62,411.95L29.31,413.29L26.48,424.48L20.22,423.33L18.73,421.23L19.61,417.68L24.96,419.13L25.11,418.44L19,416.53L18.16,421.35L19.88,423.91L25.36,425.76L18.54,471.11L21.45,506.94L22.15,531.62L27.23,549.01L26.83,551.61L26.23,554.01L25.61,555.27L22.7,554.4L20.66,554.46L17.94,554.01L16.98,553.44L15,553.7L12.22,555.39L12.28,556.48L11.11,555.49L0.49,556.62L0.73,559.68L11.09,558.56L12.33,557.33L12.45,559.59L16.47,560.63L17.78,560.49L18.96,559.5L20.6,558.88L23.65,557.28L24.91,557.44L25.76,557.39L27.97,561.8L29.22,565.71L30.18,572.4L31.37,578.06L33.24,582.93L35.6,589.33L38.22,594.23L40.19,598.05L42.36,602.93L43.62,606.71L44.86,611.76L45.59,615.76L46.33,618.63L46.93,621.3L48.58,625.89L51.81,633.21L54.64,638.19L58.38,643.89L66.72,656.92L71.82,663.49L76.07,668.19L85.95,677.29L89.75,681.23L95.76,688.28L96.32,689.48L101.48,695.43L104.02,698.25L110.93,704.14L113.42,706.45L116.77,708.72L118.58,709.69L119.6,710.37L120.17,710.99L121.24,712.86L122.43,714.22L131.92,721.28L155.21,736.41L177.54,750.33L204,764.13L219.88,773.98L241.75,792.15L263.83,811.52L267.94,811.62L279.38,816.8L285.93,815.77L293.19,808.32L297.04,802.92L307.24,804.28L327.31,807.26L344.55,809.61L362.05,811.96L374.69,812.26L388.3,816.2L413.22,810.33L435.27,803.98L456.66,796.44L475.28,787.45L492.42,778.16L521.75,757.55L535.7,746.92L546.44,740.08L581.72,720.48L584.39,719.83L587.64,722.4L591.69,722.53L601.86,715.19L642.98,688.96L652.51,679.32L661.81,666.7L663.57,662.38L666.56,655.04L669.57,647.72L670.38,646.4L670.79,644.18L670.86,640.47L670.04,635L669.32,632.77L669.74,631.28L669.31,628.09L667.58,621.9L665.95,611.59L662.24,592.93L661.84,568.35L663.34,554.56L670.37,553.8L671.25,549.12L672.28,540.45L671.96,540.27L669.82,550.83L663.13,551.16L662.85,540.46L666.04,539.87L666.58,534.74L668.85,533.06L673.78,535.93L674.2,535.6L669.17,532.62L671.33,528.63L670.47,525.1L668.19,523.94L664.75,522.19L684.02,456.06L694.05,424.65L709.3,393.05L727.36,367.06L730.64,365.2L744.73,357.25L756.06,340.77L768.51,325.21L776.63,316.48L787.37,303.74L793.19,292.8L798.71,277.25L799.51,265.71L798.71,252.26L790.98,212.23L783.76,184.63L771.32,153.83L764.99,139.28L753.25,131.35L738.9,110.18L722.75,92.28L710,78.17L696.36,66.03L670.37,47.46L642.57,30.1L614.58,19.07L591.1,12.04L575.24,7.73L562.1,7.22L545.74,9.63L512.03,9.13L482.22,3.41L464.87,0.7L445.3,0z"
};
var viewBox = "-50 -40 1800 900";

// src/hooks/mouseTrack.ts
import { useState, useEffect } from "react";
var useMousePosition = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const updateMousePosition = (event) => {
    setPosition({ x: event.clientX, y: event.clientY });
  };
  useEffect(() => {
    window.addEventListener("mousemove", updateMousePosition);
    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
    };
  }, []);
  return position;
};
var mouseTrack_default = useMousePosition;

// src/Nauru.tsx
import { useState as useState2 } from "react";
var Nauru = ({
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
    return /* @__PURE__ */ React.createElement(
      NauruSingle,
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
    return /* @__PURE__ */ React.createElement(
      NauruMultiple,
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
var NauruSingle = ({
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
  const [stateHovered, setStateHovered] = useState2(null);
  const [selectedState, setSelectedState] = useState2(null);
  useEffect2(() => {
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
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("div", { className: "map", style: mapStyle }, /* @__PURE__ */ React.createElement("svg", { version: "1.1", id: "svg2", x: "0px", y: "0px", viewBox }, stateCode?.map((stateCode2, index) => /* @__PURE__ */ React.createElement(
    "path",
    {
      key: index,
      onClick: () => handleClick(stateCode2),
      onMouseEnter: () => handleMouseEnter(stateCode2),
      onMouseLeave: () => handleMouseLeave(stateCode2),
      id: stateCode2,
      d: drawPath[stateCode2]
    }
  )))), hints && /* @__PURE__ */ React.createElement("div", null, stateHovered && /* @__PURE__ */ React.createElement(
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
var NauruMultiple = ({
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
  const [selectedStates, setSelectedStates] = useState2([]);
  const { x, y } = mouseTrack_default();
  const [stateHovered, setStateHovered] = useState2(null);
  useEffect2(() => {
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
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("div", { className: "map", style: mapStyle }, /* @__PURE__ */ React.createElement("svg", { version: "1.1", id: "svg2", x: "0px", y: "0px", viewBox }, stateCode?.map((stateCode2, index) => /* @__PURE__ */ React.createElement(
    "path",
    {
      key: index,
      onClick: () => handleClick(stateCode2),
      onMouseEnter: () => handleMouseEnter(stateCode2),
      onMouseLeave: () => handleMouseLeave(stateCode2),
      id: stateCode2,
      d: drawPath[stateCode2]
    }
  )))), hints && /* @__PURE__ */ React.createElement("div", null, stateHovered && /* @__PURE__ */ React.createElement(
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
var Nauru_default = Nauru;

// src/index.ts
var src_default = Nauru_default;
export {
  src_default as default
};
