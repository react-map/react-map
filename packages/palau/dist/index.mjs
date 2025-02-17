// src/Palau.tsx
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
  "Sonsorol",
  "Peleliu",
  "Ngiwal",
  "Ngeremlengui",
  "Ngchesar",
  "Ngatpang",
  "Ngardmau",
  "Ngarchelong",
  "Ngaraard",
  "Melekeok",
  "Koror",
  "Kayangel",
  "Hatobohei",
  "Angaur",
  "Airai",
  "Aimeliik"
];
var drawPath = {
  Sonsorol: "M242.45,627.65L243.86,624.95L242.42,623.63L241,624.33L242.45,627.65z",
  Peleliu: "M698.33,229.18L690.38,243.97L689.22,248.29L690.09,249.38L692.08,247.48L695.3,242.94L697.21,242.19L699.35,242.08L700.22,241.28L698.33,238.35L700.43,234.76L701.34,233.64L701.21,231.84L700.94,230.47L700.07,229.58L698.33,229.18z",
  Ngiwal: "M784.29,113.43L776.6,111.4L775.77,117.47L773.07,124.38L777.07,127.01L781.43,120.97L784.29,113.43z",
  Ngeremlengui: "M775.77,117.47L773.91,117.26L771,113.7L768.09,116.84L759.6,115.82L759.62,118.89L759.44,120.13L759.07,119.98L756.4,121.81L753.41,126.03L751.69,127.64L755.42,130.23L758.96,128.57L767.05,139.67L770.17,131.08L773.07,124.38L775.77,117.47z",
  Ngchesar: "M773.49,136.53L772.45,134.22L770.17,131.08L767.05,139.67L763.73,149.09L770.07,151.52L771.26,146.72L776.44,139.94L777.62,136.31L775.57,135.69L773.49,136.53z",
  Ngatpang: "M767.05,139.67L758.96,128.57L755.42,130.23L757.16,132.06L757.75,133.91L756.65,136.98L754.55,138.59L752.56,138.21L751.69,135.31L749.41,136.46L747.64,138.3L746.36,140.59L754.18,140.5L758.54,142.6L760.2,146.99L763.73,149.09L767.05,139.67z",
  Ngardmau: "M776.6,111.4L776.45,105.62L773.83,106.37L768.26,106.82L764.48,108.35L761.79,111.17L759.44,115.55L759.6,115.82L768.09,116.84L771,113.7L773.91,117.26L775.77,117.47L776.6,111.4z",
  Ngarchelong: "M782.06,84.64L780.98,83.06L778.97,81.78L776.98,81.35L776.11,82.34L776.62,84.97L778.68,89.4L779.16,92.57L784.72,92.13L782.06,84.64z",
  Ngaraard: "M784.29,113.43L785.43,102.77L784.72,92.13L779.16,92.57L780.45,101.11L779.13,104.84L776.45,105.62L776.6,111.4L784.29,113.43z",
  Melekeok: "M777.07,127.01L773.07,124.38L770.17,131.08L772.45,134.22L773.49,136.53L775.57,135.69L777.62,136.31L778.32,134.14L779.35,133.14L779.35,131.72L776.87,128.48L777.07,127.01z",
  Koror: "M730.57,190.33L732.67,189.13L737.15,189.02L739.86,188.36L741.09,186.83L740.01,184.97L738.22,182.78L737.84,180.9L741.09,179.96L740.71,178.19L740.01,176.95L739.09,176.07L737.89,175.36L736.03,174.92L736.1,176.37L736.81,178.84L736.64,181.49L735.09,183.62L727.28,190.66L724.45,192.36L723.02,192.57L715.97,185.13L715.32,185.88L715.16,189.89L715.59,192.61L716.95,194.8L719.1,196.26L721.99,196.79L725.32,195.58L730.57,190.33zM751.77,168.07L746.59,165.7L742.76,164.67L739.54,164.62L737.91,166.25L737.51,168.99L737.89,172.32L742.02,168.85L744.19,168.17L747.17,169.11L748.37,171.09L749.85,174.34L751.77,176.75L754.06,176.13L755.2,171.6L751.77,168.07z",
  Kayangel: "M795.73,0L791.98,4.73L791.91,8.04L793.85,10.41L797.6,8.52L799.65,3.08L798.52,0.03L795.73,0z",
  Hatobohei: "M147.94,1149.84L151.9,1147.3L150.44,1144.23L147.13,1143.46L145.68,1144.27L143.55,1146.5L144.31,1149L147.94,1149.84zM6.88,1133.43L11.31,1131.09L13.9,1127.63L12.01,1125.08L6.97,1125.42L2.79,1127.97L0.35,1131.94L1.98,1134.28L6.88,1133.43z",
  Angaur: "M673.48,271.74L676.52,269.66L677.5,266.21L676.48,262.69L673.52,260.42L669.03,260.59L668.38,263.99L670.28,268.45L673.48,271.74z",
  Airai: "M770.07,151.52L763.73,149.09L760.83,153.48L755.84,156.83L751.46,155.32L752.11,158.1L754.08,163.65L754.41,164.99L755.35,165.77L757.75,166.19L758.95,165.55L761.28,162.41L762.31,161.6L763.7,161.79L765.78,163.08L768.39,163.3L769.49,163.68L770.5,163L771.59,159.93L770.07,151.52z",
  Aimeliik: "M763.73,149.09L760.2,146.99L758.54,142.6L754.18,140.5L746.36,140.59L745.65,143.1L745.33,146L745.91,146.36L747.17,146.27L748.96,147.69L750.43,150.88L751.46,155.32L755.84,156.83L760.83,153.48L763.73,149.09z"
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

// src/Palau.tsx
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
var Palau = ({
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
      PalauSingle,
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
      PalauMultiple,
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
var PalauSingle = ({
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
var PalauMultiple = ({
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
var Palau_default = Palau;

// src/index.ts
var src_default = Palau_default;
export {
  src_default as default
};
