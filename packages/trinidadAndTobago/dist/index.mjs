// src/Trinidadandtobago.tsx
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
var stateCode = [
  "Tobago",
  "Port of Spain",
  "Chaguanas",
  "San Fernando",
  "Tunapuna/Piarco",
  "Point Fortin",
  "Penal-Debe",
  "Couva-Tabaquite-Talparo",
  "Princes Town",
  "San Juan-Laventille",
  "Rio Claro-Mayaro",
  "Sangre Grande",
  "Arima",
  "Siparia",
  "Diego Martin"
];
var drawPath = {
  Tobago: "M794.69,0L788.54,4.43L777.72,17.3L773.54,17.82L764.5,12.47L757.59,13.77L750.91,17.58L734.88,20.98L724.14,24.96L716.25,27.88L709.04,31.63L703.17,36.02L692.9,46.2L644.83,77.87L639.19,85.36L635.98,92.9L628.63,95.87L620.75,97.14L615.94,99.56L614.63,108.35L619.27,114.05L627.18,115.4L635.7,111.08L639.72,120.34L649.32,116.46L664.62,103.17L674.69,100.77L709.04,83.38L714.4,83.59L721.26,85L728.45,85.08L734.74,81.26L738.87,77.91L752.05,69.74L754.06,69.29L762.56,57.88L763.67,55.34L769.27,55.2L774.93,57.13L779.92,56.16L783.41,47.47L786.92,47.47L793.26,48.98L797.51,36.44L799.47,18.67L798.92,4.29L794.69,0z",
  "Port of Spain": "M237.55,390.72L229.2,389.47L224.5,389.82L218.44,394.75L216.15,395.79L216.16,395.79L227.67,401.08L246.46,413.95L246.47,413.93L248.79,401.83L247.86,399.32L245.63,395.02L237.55,390.72z",
  Chaguanas: "M318.45,454.48L295.28,454.03L277.52,454.78L266.4,470.3L265.49,470.3L265.48,470.3L265.44,479.26L265.46,479.26L265.49,479.26L273.41,480.09L277.14,481.05L281.35,483.74L286.75,484.78L291.05,488.36L297.95,490.51L312.47,489.47L316.43,485.86L317.12,480.09L320.99,466.75L318.45,454.48z",
  "San Fernando": "M277.26,631.45L285.01,602.03L269.94,603.02L266.96,602.22L267.67,606.55L265.53,618.09L261.16,625.56L254.29,633.4L249.75,637.08L250.34,637.83L277.26,631.45z",
  "Tunapuna/Piarco": "M430.56,316.66L425.73,320.35L359.82,320.07L329.73,316.4L327.74,316.57L327.74,316.57L329.56,320.25L333.83,334.71L338.46,344.27L337.83,350.72L334.23,355.05L330.8,356.13L320.95,353.77L316.81,353.53L312.63,354.69L308.99,355.05L293.83,352.87L288.97,354.34L285.8,360.1L284.61,370.14L288.66,395.53L288.47,409.92L295.28,454.03L318.45,454.48L320.93,449.94L323.71,449.94L329.24,451.1L336.37,450.72L343.4,447.52L351.4,445.7L375.92,444.65L392.19,439.49L406.82,432.5L409.19,428.86L412.76,424.35L413.69,420.14L413.67,416.02L412.48,412.46L408.23,406.88L406.07,402.76L404.22,393.23L406.64,384.48L406.86,374.26L406.3,369.42L403.3,366.79L400.86,365.6L397.29,365.36L394.37,364.4L391.97,363.33L393.05,361.06L409.14,359.44L414.3,357.83L417.53,355.41L426.81,344.93L430.52,342.33L435.38,339.91L438.74,336.74L438.87,331.6L438.3,326.46L432.82,318.45L430.56,316.66zM372.09,430.29L367.09,430.17L361.87,428.47L360.47,427.54L360.15,426.53L360.34,425.42L361,424.38L363.14,422.35L364.05,421.09L364.68,417.84L364.59,416.79L364.45,415.72L364.51,414.64L364.71,413.72L365.17,412.85L365.68,412.25L366,411.57L365.83,410.85L365.34,409.92L365.26,408.52L365.9,403.35L373.94,411.06L374.75,415.06L377.23,423.18L377.38,426.68L376.5,428.92L374.78,429.63L372.09,430.29z",
  "Point Fortin": "M134.96,698.79L140.38,698.31L146.83,696.11L158.93,685.91L162.38,681.08L164.67,677.17L169.77,670.01L170.43,666.94L168.91,664.14L165.9,661.04L164.9,659.72L164.9,659.73L148,674.76L126.23,685.23L128.08,687.76L134.96,698.79z",
  "Penal-Debe": "M312.7,738.92L312.7,738.89L316.25,655.49L311.81,649.52L305.57,643.8L277.26,631.45L250.34,637.83L249.75,637.08L246.71,639.55L240.29,642.07L233.91,642.3L232.22,642.37L234.68,646.18L250.17,659.84L257.27,664.32L260.18,669.65L261.75,673.77L261.5,683.7L259.19,694.26L256.54,699.83L249.43,708.21L246.54,713.1L244.49,719.39L241.67,740.82L241.67,740.82L242.28,740.94L290.9,736.99L312.7,738.92z",
  "Couva-Tabaquite-Talparo": "M416.05,517.53L405.01,514.39L404.18,511.86L403.84,506.87L408.52,493.89L408.64,484.72L404.23,480.06L402.46,475.38L400.8,451.01L398.47,444.83L392.19,439.49L375.92,444.65L351.4,445.7L343.4,447.52L336.37,450.72L329.24,451.1L323.71,449.94L320.93,449.94L318.45,454.48L320.99,466.75L317.12,480.09L316.43,485.86L312.47,489.47L297.95,490.51L291.05,488.36L286.75,484.78L281.35,483.74L277.14,481.05L273.41,480.09L265.49,479.26L265.46,479.26L265.44,479.26L265.43,481.42L261.64,503.38L254.11,521.29L250.87,532.68L252.12,541L254.25,544.95L257.55,556.25L258.11,560.74L257.14,562.43L255.19,562.83L253.65,563.68L253.88,566.83L255.63,569.36L260.6,573.55L261.64,576.67L263.17,587.5L266.03,596.85L266.96,602.21L266.96,602.22L269.94,603.02L285.01,602.03L296.38,600.84L315.8,592.67L334.83,589.03L351.09,588.73L361,590.4L368.25,592.31L373.11,594.58L377.7,595.98L384.63,598.93L389.68,603.71L397.82,591.83L402.41,576.08L405.82,543.01L408.45,531.55L416.05,517.53z",
  "Princes Town": "M389.68,603.71L384.63,598.93L377.7,595.98L373.11,594.58L368.25,592.31L361,590.4L351.09,588.73L334.83,589.03L315.8,592.67L296.38,600.84L285.01,602.03L277.26,631.45L305.57,643.8L311.81,649.52L316.25,655.49L312.7,738.89L312.7,738.92L335.65,740.94L371.82,733.78L384.32,732.68L419.17,738.36L427.11,737.56L418.98,648.15L409.61,631.69L404.31,625.12L399.52,624.11L397.42,619.22L393.77,616.65L389.68,603.71z",
  "San Juan-Laventille": "M330.8,356.13L334.23,355.05L337.83,350.72L338.46,344.27L333.83,334.71L329.56,320.25L327.74,316.57L319.81,317.22L316.21,320.38L305.46,333.03L300.79,337.29L299.73,336.94L288.78,337.29L287.39,338.63L285.17,341.39L281.84,344.07L277.13,345.2L281.38,340.89L279.81,338.68L278.47,337.43L277.52,335.9L277.13,332.99L273.64,332.99L273.8,338.96L273.64,340.89L269.41,340.89L266.5,333.76L263.58,336.14L259.24,341.93L252.12,345.2L249.65,345.17L249.87,347.55L250.84,359.62L247.61,373.01L237.55,390.72L245.63,395.02L247.86,399.32L248.79,401.83L246.47,413.93L246.46,413.95L250.34,416.6L246.16,420.15L259.77,437.51L265.53,458.71L265.48,470.3L265.49,470.3L266.4,470.3L277.52,454.78L295.28,454.03L288.47,409.92L288.66,395.53L284.61,370.14L285.8,360.1L288.97,354.34L293.83,352.87L308.99,355.05L312.63,354.69L316.81,353.53L320.95,353.77L330.8,356.13z",
  "Rio Claro-Mayaro": "M506.19,513.32L473.89,509.92L416.05,517.53L408.45,531.55L405.82,543.01L402.41,576.08L397.82,591.83L389.68,603.71L393.77,616.65L397.42,619.22L399.52,624.11L404.31,625.12L409.61,631.69L418.98,648.15L427.11,737.56L427.12,737.56L432.97,736.99L458.51,730.84L471.4,726.01L481.43,719.27L491.49,710.66L504.41,702.67L518.09,698.49L530.29,701.17L526.13,671.82L526.43,638.1L533.57,608.24L550.01,590.48L528.9,575.52L518.74,560.39L514.95,553.06L512.03,545.16L506.19,513.32z",
  "Sangre Grande": "M526.73,377.12L556.55,340.05L580.67,297.46L557.08,292.75L483.42,301.04L473.18,305.39L440.06,309.41L430.57,316.66L430.56,316.66L432.82,318.45L438.3,326.46L438.87,331.6L438.74,336.74L435.38,339.91L430.52,342.33L426.81,344.93L417.53,355.41L414.3,357.83L409.14,359.44L393.05,361.06L391.97,363.33L394.37,364.4L397.29,365.36L400.86,365.6L403.3,366.79L406.3,369.42L406.86,374.26L406.64,384.48L404.22,393.23L406.07,402.76L408.23,406.88L412.48,412.46L413.67,416.02L413.69,420.14L412.76,424.35L409.19,428.86L406.82,432.5L392.19,439.49L398.47,444.83L400.8,451.01L402.46,475.38L404.23,480.06L408.64,484.72L408.52,493.89L403.84,506.87L404.18,511.86L405.01,514.39L416.05,517.53L473.89,509.92L506.19,513.32L504.24,502.79L503.9,486.57L520.33,472.4L518.04,455.28L507.02,420.15L506.39,403.55L509.44,386.27L516.17,375.19L526.73,377.12z",
  Arima: "M372.09,430.29L374.78,429.63L376.5,428.92L377.38,426.68L377.23,423.18L374.75,415.06L373.94,411.06L365.9,403.35L365.26,408.52L365.34,409.92L365.83,410.85L366,411.57L365.68,412.25L365.17,412.85L364.71,413.72L364.51,414.64L364.45,415.72L364.59,416.79L364.68,417.84L364.05,421.09L363.14,422.35L361,424.38L360.34,425.42L360.15,426.53L360.47,427.54L361.87,428.47L367.09,430.17L372.09,430.29z",
  Siparia: "M12.73,756.66L22.65,756.52L34.27,752.06L45.32,745.47L53.64,738.97L63.95,733.99L77.42,732.39L126.62,732.49L138.27,733.85L148.83,736.99L155.38,740.75L160.55,744.6L166.19,747.58L174.21,748.83L179.97,748.17L191.13,745.49L197.48,744.83L213.66,738.31L218.98,736.99L241.67,740.82L244.49,719.39L246.54,713.1L249.43,708.21L256.54,699.83L259.19,694.26L261.5,683.7L261.75,673.77L260.18,669.65L257.27,664.32L250.17,659.84L234.68,646.18L232.22,642.37L232.22,642.37L209.87,643.19L180.52,638.12L171.92,638.26L164.71,642.07L165.2,659.47L164.9,659.72L165.9,661.04L168.91,664.14L170.43,666.94L169.77,670.01L164.67,677.17L162.38,681.08L158.93,685.91L146.83,696.11L140.38,698.31L134.96,698.79L128.08,687.76L126.23,685.23L126.23,685.23L123.57,686.52L79.78,699.62L70.28,704.27L61.4,711.03L55.49,719.69L51.74,723.33L33.32,726.81L27.08,728.73L24.38,730.89L6.07,740.54L0.53,748.36L12.73,756.66z",
  "Diego Martin": "M103.31,380.86L97.94,380.25L95.22,382.67L94.45,384.71L93.23,391.98L93.34,394.36L96.53,393.82L101.18,393.96L102.43,392.15L99.05,389.89L98.22,387.94L99.61,386.22L101.34,385.56L102.82,385.84L106.61,388.17L107.81,386.27L103.31,380.86zM136.1,389.25L136.79,387.4L141,385.23L140.88,381.4L141.6,378.67L140.61,376.41L136.52,376.34L132.13,378.13L127.85,388.01L129.26,389.16L134.74,390.15L136.1,389.25zM249.87,347.55L249.65,345.17L249.65,345.17L235.43,344.99L209.29,351.13L186.02,349.15L178.35,352.37L148.83,372.84L152.42,379.56L155.21,382.67L158.82,383.8L187.78,385.77L199.93,388.36L216.15,395.79L218.44,394.75L224.5,389.82L229.2,389.47L237.55,390.72L247.61,373.01L250.84,359.62L249.87,347.55z"
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

// src/Trinidadandtobago.tsx
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
var Trinidadandtobago = ({
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
      TrinidadandtobagoSingle,
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
      TrinidadandtobagoMultiple,
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
var TrinidadandtobagoSingle = ({
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
var TrinidadandtobagoMultiple = ({
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
var Trinidadandtobago_default = Trinidadandtobago;

// src/index.ts
var src_default = Trinidadandtobago_default;
export {
  src_default as default
};
