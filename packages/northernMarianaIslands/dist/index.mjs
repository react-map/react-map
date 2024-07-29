// src/Northernmarianaislands.tsx
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
var stateCode = ["Northern Islands", "Saipan", "Tinian", "Rota"];
var drawPath = {
  "Northern Islands": "M657.73,3675.92L669.45,3673.18L674.77,3666.58L668.03,3653.74L658.47,3648.38L633.02,3645.18L622.25,3641.95L608.65,3643.01L601.78,3648.41L600.77,3656.69L605.42,3666.06L613.7,3673.46L623.8,3677.21L634.64,3678.16L657.73,3675.92zM746.67,3372.79L731.25,3366.71L717.32,3371.31L734.01,3387.97L746.67,3372.79zM799.32,2846.2L785.32,2839.57L772.66,2843.24L788.42,2860.02L799.32,2846.2zM798.31,2609.22L799.93,2599.05L795.01,2588.81L784.78,2581.57L771.25,2582.52L765.19,2593.44L769.56,2607.1L787.81,2616.28L798.31,2609.22zM708.3,2186.74L744.58,2149.31L754.75,2141.62L764.78,2136.13L772.39,2128.3L775.29,2113.71L772.05,2102.51L763.57,2094.01L752.6,2088.62L719.03,2087.48L707.09,2099.2L702.19,2141.01L692.88,2160.82L671,2172.57L676.31,2192.83L696.31,2193.61L708.3,2186.74zM654.9,1605.59L664.4,1597.38L668.03,1587.5L668.17,1571.43L666.82,1560.19L661.77,1549.74L650.53,1536.01L619.13,1534.66L604.39,1553.88L606.84,1588.56L628.44,1608.61L642.18,1610.07L654.9,1605.59zM423.36,786.76L424.71,776.25L420.2,767.38L409.7,763.49L397.17,767.67L397.17,777.64L405.18,788.4L416.63,795.23L423.36,786.76zM284.06,458.35L282.45,449.75L278.61,445.45L270.73,453.8L268.64,463.65L272.28,472.07L279.62,478.2L288.5,481.31L295.04,478.73L300.96,474.4L305.07,468.6L306.75,461.36L303.92,457.99L297.39,459.39L289.92,462.18L284.47,463.08L284.06,458.35zM14.61,0L3.91,3.45L0.07,13.59L2.56,25.45L11.32,33.79L19.66,26.57L25.18,15.82L24.65,5.46L14.61,0z",
  Saipan: "M732.87,4599.82L721.76,4608.3L700.22,4615.21L690.05,4620.31L688.37,4623.87L687.83,4633.77L685,4637.89L669.38,4644.21L665,4646.93L658.74,4654.78L657.26,4662.94L657.66,4672.46L656.72,4684.71L646.82,4716.41L645.41,4729.07L648.24,4741.1L655.31,4742.8L673.69,4738.41L677.59,4741.2L692.07,4746.29L703.72,4746.64L699,4735.24L692.81,4723.77L692.27,4711.8L697.39,4700.5L707.49,4691.09L714.89,4696.08L721.09,4696.42L726.2,4692.52L730.11,4684.71L723.51,4673.93L722.97,4666.5L736.91,4629.87L743.31,4620.45L752.73,4614.44L762.56,4604.01L756.64,4597.35L743.84,4595.64L732.87,4599.82z",
  Tinian: "M616.59,4767.14L604.81,4758.56L586.63,4771.67L569.26,4794.26L559.63,4813.92L558.56,4823.89L560.78,4830.09L570.95,4843.68L575.73,4855.74L578.96,4879.33L582.8,4890.45L598.82,4901.45L615.32,4889.05L628.24,4865.74L633.56,4843.68L631.27,4834.9L619.96,4821.41L616.59,4813.92L617.13,4800.68L619.83,4789L620.97,4778.12L616.59,4767.14z",
  Rota: "M254.77,5589.07L270.53,5581.16L276.99,5573.35L281.97,5563.73L287.76,5555.47L296.52,5552L307.42,5550.54L314.43,5546.1L318.8,5538.81L321.43,5528.74L312.68,5510.47L289.92,5512.52L251.27,5528.74L235.25,5532.97L211.14,5543.77L189.2,5558.14L179.77,5572.93L185.49,5578.35L198.76,5578.8L223.06,5575.85L237.94,5579.6L246.09,5586.3L254.77,5589.07z"
};
var viewBox = "0 0 1500 800";

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

// src/Northernmarianaislands.tsx
import { useState as useState2 } from "react";
var Northernmarianaislands = ({
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
      NorthernmarianaislandsSingle,
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
      NorthernmarianaislandsMultiple,
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
var NorthernmarianaislandsSingle = ({
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
var NorthernmarianaislandsMultiple = ({
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
var Northernmarianaislands_default = Northernmarianaislands;

// src/index.ts
var src_default = Northernmarianaislands_default;
export {
  src_default as default
};
