// src/Equatorialguinea.tsx
import React, { useEffect as useEffect2, useState as useState2, useMemo } from "react";

// src/constants.ts
var constants = {
  WIDTH: 500,
  MAPCOLOR: "#ffffff",
  STROKE_COLOR: "#000000",
  STROKE_WIDTH: 0.5,
  HOVERCOLOR: "#303030",
  SELECTED_COLOR: "#ff0000"
};
var stateCode = ["Bioko Sur", "Bioko Norte", "Wele-Nz\xE1s", "Litoral", "Ki\xE9-Ntem", "Centro Sur", "Annob\xF3n"];
var drawPath = {
  "Bioko Sur": "M438.65,27.05L436.99,26.73L435.08,25.97L428.97,21.66L427.14,20.61L423.36,19.37L421.32,19.48L421.3,19.48L420.51,30.28L419.69,32.07L417.76,33.94L415.57,35.51L413.83,36.45L415.09,38.41L415.49,40.99L414.71,43.22L412.36,44.17L407.39,43.26L405.04,43.15L403.27,44.17L399.96,43.26L397.36,45.57L395.53,49.09L394.59,51.81L393.73,57.72L393.18,59.01L392.73,60.56L393.63,62.39L394.91,64.22L395.54,65.73L396.66,69.84L399.34,71.93L402.65,72.71L405.65,72.81L407.47,73.21L410.42,75.1L411.92,75.76L413.33,75.78L416.53,75.07L417.54,74.72L421.42,76.88L423.44,77.61L424.32,77.23L425.05,78.14L428.25,79.5L429.59,80.41L430.89,78.84L435.67,70.98L441.94,63.74L442.81,61.46L442.88,55.02L443.37,52.76L447.38,50.37L447.7,49.91L448.08,49.16L448.74,45.87L451.15,43.96L453.94,36.45L454.34,35.98L454.34,35.98L452.13,30.52L451.76,29.91L451.35,29.38L450.05,28.51L448.22,27.83L444.44,27.07L440.9,26.89L439.84,27.02L438.65,27.05z",
  "Bioko Norte": "M437.58,0L431.85,1.6L426.94,6.45L423.28,12.43L421.46,17.35L421.3,19.48L421.32,19.48L423.36,19.37L427.14,20.61L428.97,21.66L435.08,25.97L436.99,26.73L438.65,27.05L439.84,27.02L440.9,26.89L444.44,27.07L448.22,27.83L450.05,28.51L451.35,29.38L451.76,29.91L452.13,30.52L454.34,35.98L458.98,30.48L460.41,26.61L465.45,22.13L466.57,20.28L467.46,18.1L468.03,15.66L468.24,12.97L467.69,10.01L466.3,7.62L462.6,3.03L461.46,2.83L461.03,2.6L460.61,1.99L456.73,3.51L451.99,3.64L447.47,2.95L444.32,1.99L442.95,3L441.04,2.9L436.7,1.99L437.27,0.53L437.58,0z",
  "Wele-Nz\xE1s": "M732.99,257.44L729.43,256.78L726.99,256.01L710.98,249.19L707.15,248.4L705.78,248.31L700.74,250.28L685.16,259.56L688.76,263.91L698.14,271.39L698.89,273.69L698.66,276.93L697.88,280.26L696.96,282.81L693.38,288.16L692.8,290.17L693.08,292.01L694.81,294.69L695.35,296.23L694.6,300.16L693,303.03L693.18,305.32L697.79,307.55L702.11,308.68L705.94,309.11L709.64,308.76L713.64,307.49L718.25,305.19L719.88,304.83L721.2,304.95L723.62,305.73L725,305.93L726.36,305.31L727.48,304.26L728.43,303.98L730.28,307.32L731.37,306.89L733.07,304.95L734.11,304.51L735.12,303.85L736.1,303.49L737.03,303.95L737.32,304.59L737.55,306.07L738,306.52L740.22,307.18L747.3,308.36L748,308.27L748.54,307.94L749.86,307.31L749.86,308.13L748.99,309.64L747.61,310.36L742.65,312.27L741.07,313.4L734.76,320.23L733.68,321.88L731.62,325.8L725.86,333.56L723.22,337.93L721.42,342.32L721.18,343.85L721.48,345.76L722.54,347.96L731.6,358.01L733.31,359.2L739.11,361.84L740.72,363.79L742.13,366.63L744.42,375.77L745.67,378.18L746.78,378.95L747.93,379.53L748.91,380.3L749.71,381.29L749.81,382.79L749.68,384.03L747.74,386.85L747.48,387.21L747.47,387.24L757.65,387.27L799.45,387.42L799.24,350.84L799.02,314.27L798.85,285.02L798.8,285.02L784.29,283.08L778.23,283.99L776.64,284.74L774.96,285L766.06,284.05L762.98,284.2L760.18,284.79L757.44,285.11L755.12,284.98L752.78,283.79L751.61,282.56L750.9,280.86L746.8,254.74L746.19,252.86L745.24,251.74L744.03,251.25L742.13,252L740.74,253.07L738.53,255.43L737.16,256.53L735.26,257.22L732.99,257.44z",
  Litoral: "M520.05,403.27L520.39,401.91L521.18,401.34L519.26,399.69L519.71,398.17L519.15,396.97L518.02,396.18L516.2,396.18L515.48,400.84L517.22,401.91L518.36,403.84L520.05,403.27zM608.87,224.1L600.04,219.69L597.62,219.12L595.11,218.19L591.57,215.77L588.34,212.91L586.55,210.69L586.25,207.81L586.7,204.93L586.58,202.31L584.98,199.96L582.22,201.9L580.42,204.32L581.54,207.45L582.73,209.89L583.14,213.04L581.98,230.37L581.67,231.12L581.03,231.82L580.38,232.76L580.07,234.23L580.22,235.76L580.65,236.95L581.98,239.57L585.85,250.98L586.4,256.77L584.91,261.5L579.97,266.38L579.2,267.7L578.9,268.43L578.24,269.11L577.61,270.04L577.08,273.42L576.63,274.35L575.99,274.94L575.4,275.79L574.21,278.56L573.61,279.55L572.52,280.66L569.66,282.56L568.96,283.35L568.15,284.91L567.77,285.43L559.57,293.56L558.14,297.34L560.24,301.2L566.29,306.95L568.77,307.54L574.47,303.68L577.29,303.53L574.18,305.07L571.75,306.65L569.11,307.89L565.39,308.38L562.75,307.45L561,305.81L559.18,305.21L556.32,307.43L554.07,311.54L552.44,315.54L552.13,317.03L551.48,317.96L550.84,318.64L550.53,319.39L550.09,319.62L547.67,322.76L542.17,327.75L538.33,329.43L537.79,331.72L538.15,337.07L537.45,339.6L535.95,342.76L533.99,345.46L531.86,346.6L530.27,347.68L529.04,350.21L526.77,357.36L525.59,359.4L523.95,361.04L521.77,361.94L523.58,364.29L523.93,365.39L523.66,366.79L525.45,368.08L528.72,371.74L529.95,372.51L532.06,372.06L536.19,370.09L540.63,369.25L542.26,368.51L544.08,368.09L546.62,368.69L548.86,369.84L550.37,371.19L551.51,372.95L553.69,379.66L554.94,381.3L558.4,379.84L563,378.7L563.96,377.7L565.09,375.69L567.79,372.59L570.97,369.79L573.56,368.69L572.7,369.25L571.61,370.47L571,371.97L571.56,373.37L573.05,373.74L578.78,372.51L580.47,372.94L583.96,374.92L585.39,375.36L587.1,375.5L589.12,375.87L590.83,376.45L591.67,377.19L589.88,377.31L587.81,377.68L585.99,378.31L584.91,379.18L584.6,380.84L585.67,384.41L585.86,386.8L585.65,387.53L585.65,387.53L589.8,388.01L591.96,388.8L594.27,390.43L597.89,394.57L600.2,396.36L602.66,397.41L605.15,397.79L607.37,397.3L609.01,395.7L609.52,393.87L609.53,389.73L610.27,387.69L613,387.34L613,387.3L612.96,387.03L613.88,384.14L615.2,381.4L615.98,380.28L616.76,379.42L617.49,378.81L620.74,377.03L624.12,375.72L624.77,375.36L626.46,374.71L627.76,374.53L629.03,374.66L631.9,375.47L633.6,375.8L635.75,375.9L638.42,375.68L643.63,374.62L645.82,373.86L647.96,372.78L649.8,371.35L651.04,369.56L651.51,367.81L651.38,366.02L650.84,364.38L650.08,363.09L648.87,362.39L648.03,362.52L647.16,363.28L646.19,364.33L645,364.85L643.54,364.69L642.03,363.87L641.29,362.83L640.58,359.31L640.1,358.19L639.32,357.25L638.89,356.09L638.78,354.18L638.83,352.57L638.57,351.25L637.79,350.41L636.22,350.37L634.95,349.95L633.8,348.93L633,346.19L632.61,344.01L632.22,334.87L631.68,333.34L628.9,331.85L627.67,330.71L626.65,328.51L626.41,326.63L626.65,324.97L628.1,321.81L629.1,320.05L628.97,319.4L628.49,318.68L626.02,316.59L621.89,314.67L612.96,312.06L603.16,309.41L602.16,308.81L601.62,307.95L601.49,306.74L602.25,305.19L603.5,304.1L605.85,303.29L608.55,302.71L610.39,301.5L612.96,297.84L621.57,282.61L626.57,275.97L627.76,273.19L628.51,258.11L629.03,255.59L629.86,253.39L631.48,250.7L632.76,249.23L638.09,244.54L639.11,243.16L639.82,241.4L640.38,238.96L640.54,232.28L639.47,224.56L630.47,224.56L611.69,224.56L608.87,224.1z",
  "Ki\xE9-Ntem": "M798.85,285.02L798.81,277.7L798.59,241.1L798.53,229.89L797.46,224.54L755.72,224.54L713.96,224.55L672.22,224.55L670.13,224.55L670.34,231.5L671.53,236.02L673.67,241.98L673.97,243.98L673.75,245.69L672.61,248.47L672.07,250.55L671.72,253.8L671.98,255.58L672.61,256.82L672.87,256.96L674.43,258.36L675.95,258.56L681.88,258.06L684.4,258.65L685.16,259.56L700.74,250.28L705.78,248.31L707.15,248.4L710.98,249.19L726.99,256.01L729.43,256.78L732.99,257.44L735.26,257.22L737.16,256.53L738.53,255.43L740.74,253.07L742.13,252L744.03,251.25L745.24,251.74L746.19,252.86L746.8,254.74L750.9,280.86L751.61,282.56L752.78,283.79L755.12,284.98L757.44,285.11L760.18,284.79L762.98,284.2L766.06,284.05L774.96,285L776.64,284.74L778.23,283.99L784.29,283.08L798.8,285.02L798.85,285.02z",
  "Centro Sur": "M675.95,258.56L674.43,258.36L672.87,256.96L672.61,256.82L671.98,255.58L671.72,253.8L672.07,250.55L672.61,248.47L673.75,245.69L673.97,243.98L673.67,241.98L671.53,236.02L670.34,231.5L670.13,224.55L639.47,224.56L640.54,232.28L640.38,238.96L639.82,241.4L639.11,243.16L638.09,244.54L632.76,249.23L631.48,250.7L629.86,253.39L629.03,255.59L628.51,258.11L627.76,273.19L626.57,275.97L621.57,282.61L612.96,297.84L610.39,301.5L608.55,302.71L605.85,303.29L603.5,304.1L602.25,305.19L601.49,306.74L601.62,307.95L602.16,308.81L603.16,309.41L612.96,312.06L621.89,314.67L626.02,316.59L628.49,318.68L628.97,319.4L629.1,320.05L628.1,321.81L626.65,324.97L626.41,326.63L626.65,328.51L627.67,330.71L628.9,331.85L631.68,333.34L632.22,334.87L632.61,344.01L633,346.19L633.8,348.93L634.95,349.95L636.22,350.37L637.79,350.41L638.57,351.25L638.83,352.57L638.78,354.18L638.89,356.09L639.32,357.25L640.1,358.19L640.58,359.31L641.29,362.83L642.03,363.87L643.54,364.69L645,364.85L646.19,364.33L647.16,363.28L648.03,362.52L648.87,362.39L650.08,363.09L650.84,364.38L651.38,366.02L651.51,367.81L651.04,369.56L649.8,371.35L647.96,372.78L645.82,373.86L643.63,374.62L638.42,375.68L635.75,375.9L633.6,375.8L631.9,375.47L629.03,374.66L627.76,374.53L626.46,374.71L624.77,375.36L624.12,375.72L620.74,377.03L617.49,378.81L616.76,379.42L615.98,380.28L615.2,381.4L613.88,384.14L612.96,387.03L613,387.3L613,387.34L617.06,386.81L632.29,386.87L670.88,386.99L674.09,387L715.87,387.14L747.47,387.24L747.48,387.21L747.74,386.85L749.68,384.03L749.81,382.79L749.71,381.29L748.91,380.3L747.93,379.53L746.78,378.95L745.67,378.18L744.42,375.77L742.13,366.63L740.72,363.79L739.11,361.84L733.31,359.2L731.6,358.01L722.54,347.96L721.48,345.76L721.18,343.85L721.42,342.32L723.22,337.93L725.86,333.56L731.62,325.8L733.68,321.88L734.76,320.23L741.07,313.4L742.65,312.27L747.61,310.36L748.99,309.64L749.86,308.13L749.86,307.31L748.54,307.94L748,308.27L747.3,308.36L740.22,307.18L738,306.52L737.55,306.07L737.32,304.59L737.03,303.95L736.1,303.49L735.12,303.85L734.11,304.51L733.07,304.95L731.37,306.89L730.28,307.32L728.43,303.98L727.48,304.26L726.36,305.31L725,305.93L723.62,305.73L721.2,304.95L719.88,304.83L718.25,305.19L713.64,307.49L709.64,308.76L705.94,309.11L702.11,308.68L697.79,307.55L693.18,305.32L693,303.03L694.6,300.16L695.35,296.23L694.81,294.69L693.08,292.01L692.8,290.17L693.38,288.16L696.96,282.81L697.88,280.26L698.66,276.93L698.89,273.69L698.14,271.39L688.76,263.91L685.16,259.56L684.4,258.65L681.88,258.06L675.95,258.56z",
  Annob\u00F3n: "M2.91,732.84L4.84,731.05L5.33,727.64L3.49,724.48L2.06,725.48L1.48,726.89L1.66,728.5L2.53,730.13L1.85,730.41L1.25,730.95L0.55,731.16L2.91,732.84z"
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

// src/Equatorialguinea.tsx
import { useId } from "react";
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
var Equatorialguinea = ({
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
    return /* @__PURE__ */ React.createElement(
      EquatorialguineaSingle,
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
    return /* @__PURE__ */ React.createElement(
      EquatorialguineaMultiple,
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
var EquatorialguineaSingle = ({
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
  const instanceId = useId().replace(/:/g, "");
  const { x, y } = mouseTrack_default();
  const [stateHovered, setStateHovered] = useState2(null);
  const [selectedState, setSelectedState] = useState2(null);
  const [viewBox, setViewBox] = useState2("0 0 100 100");
  const strokeProps = useMemo(() => getStrokeProperties(borderStyle), [borderStyle]);
  useEffect2(() => {
    const svg = document.getElementById(`svg2-${instanceId}`);
    if (svg) {
      const bbox = svg.getBBox();
      setViewBox(`${bbox.x} ${bbox.y} ${bbox.width} ${bbox.height}`);
    }
  }, [instanceId]);
  const mapStyle = useMemo(
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
  useEffect2(() => {
    stateCode.forEach((state) => {
      const path = document.getElementById(`${state}-${instanceId}`);
      if (path) {
        path.style.fill = cityColors[state] || mapColor;
      }
    });
  }, [cityColors, mapColor, instanceId]);
  useEffect2(() => {
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
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("div", { className: "map", style: mapStyle }, /* @__PURE__ */ React.createElement("svg", { version: "1.1", id: `svg2-${instanceId}`, x: "0px", y: "0px", viewBox }, stateCode?.map((code, index) => /* @__PURE__ */ React.createElement(
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
  )))), hints && stateHovered && /* @__PURE__ */ React.createElement("div", { style: hintStyle }, stateHovered));
};
var EquatorialguineaMultiple = ({
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
  const instanceId = useId().replace(/:/g, "");
  const { x, y } = mouseTrack_default();
  const [selectedStates, setSelectedStates] = useState2([]);
  const [stateHovered, setStateHovered] = useState2(null);
  const [viewBox, setViewBox] = useState2("0 0 100 100");
  const strokeProps = useMemo(() => getStrokeProperties(borderStyle), [borderStyle]);
  useEffect2(() => {
    const svg = document.getElementById(`svg2-${instanceId}`);
    if (svg) {
      const bbox = svg.getBBox();
      setViewBox(`${bbox.x} ${bbox.y} ${bbox.width} ${bbox.height}`);
    }
  }, [instanceId]);
  const mapStyle = useMemo(
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
  useEffect2(() => {
    stateCode.forEach((state) => {
      const path = document.getElementById(`${state}-${instanceId}`);
      if (path) {
        path.style.fill = cityColors[state] || mapColor;
      }
    });
  }, [cityColors, mapColor, instanceId]);
  useEffect2(() => {
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
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("div", { className: "map", style: mapStyle }, /* @__PURE__ */ React.createElement("svg", { version: "1.1", id: `svg2-${instanceId}`, x: "0px", y: "0px", viewBox }, stateCode?.map((code, index) => /* @__PURE__ */ React.createElement(
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
  )))), hints && stateHovered && /* @__PURE__ */ React.createElement("div", { style: hintStyle }, stateHovered));
};
var Equatorialguinea_default = Equatorialguinea;

// src/index.ts
var src_default = Equatorialguinea_default;
export {
  src_default as default
};
