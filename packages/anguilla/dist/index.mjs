// src/Anguilla.tsx
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
var viewBox = "200 400 700 600";
var stateCode = [
  "Sombrero Island, Dog Island and other Islands",
  "West End",
  "The Valley",
  "The Quarter",
  "The Farrington",
  "Stoney Ground",
  "South Hill",
  "Sandy Hill",
  "Sandy Ground",
  "North Side",
  "North Hill",
  "Island Harbour",
  "George Hill",
  "East End",
  "Blowing Point"
];
var drawPath = {
  "Sombrero Island, Dog Island and other Islands": "M414.19,568.02L412.97,562.22L409.6,561.9L407.76,563.51L404.7,563.51L405.01,567.7L409.29,568.66L414.19,568.02zM396.44,560.29L388.49,557.71L385.43,557.06L379.61,555.77L376.24,556.42L380.22,558.67L384.51,562.22L390.02,562.54L396.44,560.29zM306.66,532.72L291.47,532.35L278.82,526.27L264.43,534.33L266.27,544L281.27,549.48L306.66,532.72zM0.55,0L1.91,14.11L8.89,2.05L0.55,0z",
  "West End": "M442.47,723.12L464.18,715.91L486.78,698.9L486.47,657.97L468.12,664.63L455.85,674.56L414.95,722.71L442.47,723.12z",
  "The Valley": "M605.05,612.22L584.33,594.93L573.82,610.49L565.98,619.06L606.86,626.8L611.41,617.53L605.05,612.22z",
  "The Quarter": "M627.1,624.81L634.93,612.68L613.56,613.14L611.41,617.53L606.86,626.8L627.1,624.81z",
  "The Farrington": "M633.12,646.34L631.52,630.13L627.1,624.81L606.86,626.8L584.1,639.45L584.06,650.6L583.97,673.39L621.63,649.81L633.12,646.34z",
  "Stoney Ground": "M659.97,569.55L660.01,551.15L645.04,553.86L646.06,566.89L640.37,582.87L619.51,583.53L605.05,612.22L611.41,617.53L613.56,613.14L634.93,612.68L644.8,586.19L663.77,587.53L689.06,577.54L676.41,569.55L659.97,569.55z",
  "South Hill": "M584.1,639.45L571.45,638.79L561.04,644.27L556.28,646.78L527.05,650.62L486.47,657.97L486.78,698.9L500.69,688.44L500.64,676.73L518.34,676.73L519.61,669.41L542.37,668.74L552.48,660.09L566.12,651.19L584.1,639.45z",
  "Sandy Hill": "M678.31,598.18L687.16,584.2L689.06,577.54L663.77,587.53L644.8,586.19L634.93,612.68L627.1,624.81L631.52,630.13L633.12,646.34L663.11,637.29L680.56,625.73L689.69,613.75L690.32,598.18L678.31,598.18z",
  "Sandy Ground": "M561.04,644.27L561.53,637.18L557.75,628.06L545.14,641.85L527.05,650.62L556.28,646.78L561.04,644.27z",
  "North Side": "M605.05,612.22L619.51,583.53L640.37,582.87L646.06,566.89L645.04,553.86L620.79,558.24L593.98,580.63L584.33,594.93L605.05,612.22z",
  "North Hill": "M606.86,626.8L565.98,619.06L557.75,628.06L561.53,637.18L561.04,644.27L571.45,638.79L584.1,639.45L606.86,626.8z",
  "Island Harbour": "M669.46,558.9L681.47,558.9L690.14,546.25L669.7,549.4L669.46,558.9z",
  "George Hill": "M584.06,650.6L584.1,639.45L566.12,651.19L566.93,666.85L577.52,661.74L584.06,650.6z",
  "East End": "M724.49,555.66L724.88,544.63L706.85,543.68L690.14,546.25L681.47,558.9L669.46,558.9L669.7,549.4L660.01,551.15L659.97,569.55L676.41,569.55L689.06,577.54L687.16,584.2L678.31,598.18L690.32,598.18L689.69,613.75L692.7,609.81L724.49,555.66zM765.02,537.07L768.85,531.53L789.41,525.49L799.45,521.46L786.54,513.4L764.54,508.87L759.76,517.43L747.81,521.97L751.16,533.55L744.94,541.6L750.2,547.14L765.02,537.07z",
  "Blowing Point": "M583.97,673.39L584.06,650.6L577.52,661.74L566.93,666.85L566.12,651.19L552.48,660.09L542.37,668.74L519.61,669.41L518.34,676.73L500.64,676.73L500.69,688.44L508.18,696.46L518.91,704.21L523.43,711.29L583.97,673.39z"
};

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

// src/Anguilla.tsx
import { useState as useState2 } from "react";
var Anguilla = ({
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
      AnguillaSingle,
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
      AnguillaMultiple,
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
var AnguillaSingle = ({
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
var AnguillaMultiple = ({
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
var Anguilla_default = Anguilla;

// src/index.ts
var src_default = Anguilla_default;
export {
  src_default as default
};
