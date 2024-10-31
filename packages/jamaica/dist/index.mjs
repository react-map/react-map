// src/Jamaica.tsx
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
var viewBox = "-50 -40 1500 400";
var stateCode = [
  "Saint Thomas",
  "Saint Andrew",
  "Saint Mary",
  "Saint Catherine",
  "Saint Ann",
  "Portland",
  "Kingston",
  "Westmoreland",
  "Trelawny",
  "Saint James",
  "Saint Elizabeth",
  "Manchester",
  "Hanover",
  "Clarendon"
];
var drawPath = {
  "Saint Thomas": "M675.75,193.31L674.37,193.16L671.81,191.67L654.53,186.19L651.79,184.88L649.37,183.23L648.62,182.58L647.95,181.89L645.18,178.12L638.34,173.42L634.98,176.52L634.36,178.95L633.89,182.06L633.74,187.83L634.23,190.2L635.08,192.37L636.08,194.07L638.09,201.26L638.73,202.53L641.37,206.28L642.55,208.45L642.55,209.77L641.97,210.51L640.96,210.7L637.34,210.38L635.87,210.7L634.45,211.37L632.84,213.81L632.47,216.03L632.68,219.6L632.5,221.28L632.12,222.49L629.82,225.14L627.63,228.61L627.63,228.61L628.5,228.82L630.75,230.83L632.44,233.39L634.4,235.54L637.34,236.45L640.19,238.07L641.29,241.87L642.03,246.3L643.68,249.76L647.46,252.4L650.45,252.79L653.19,252.26L656.13,252.13L676.35,255.22L705.02,252.73L715.98,248.61L722.67,250.34L729.24,253.38L734.9,255L741.25,253.07L747.09,244.34L753.68,241.92L752.26,246.61L751.23,247.92L748.7,249.76L755.2,251.45L762.81,249.23L776.09,241.92L794.94,237.15L798.74,234.06L788.79,226.59L781.94,219.32L776.57,210.15L773.64,203.07L773.64,203.06L773.42,203.13L763.26,206.3L759.42,206.74L746.13,204.93L741.19,203.69L739.77,202.47L738.75,201.4L736.36,197.94L735.75,197.2L735.07,196.66L733.12,195.83L722.33,192.62L710.4,190.76L702.39,186.09L700.58,185.63L699.1,185.56L697.25,186.34L694.81,187.69L693.5,188.05L691.67,188.29L686.53,188.32L685.05,188.5L684.19,188.94L683.45,189.53L681.82,191.12L680.41,192.04L677.45,193.14L675.75,193.31z",
  "Saint Andrew": "M593.25,148.48L572.99,138.82L566.89,137.62L564.8,138.06L560.14,138.09L557.92,138.48L556.51,139.11L556.02,140.03L555.64,141.03L554.75,142.05L553.92,142.72L548.98,144.77L548.12,154.82L548.3,156.31L548.87,158.73L551.29,163.75L551.63,165.65L551.58,167.1L550.34,169.87L549.87,170.7L549.26,171.43L548.57,172.07L547.85,172.62L546.73,174.65L545.46,177.85L543.3,185.6L542.8,188.94L542.84,191.11L545.48,193.49L545.8,193.89L546.18,194.5L546.86,196.24L547.35,197.05L548.02,197.65L548.87,197.98L549.88,197.98L550.8,197.77L552.67,196.93L553.64,196.73L556.13,200.18L557.31,204.62L562.1,206.89L568.59,211.14L570.99,212.57L572.2,208.99L572.83,207.59L575.65,205.73L579.28,204.24L582.38,203.42L591.79,202.96L597.2,204.22L600.81,206.13L603.86,213.25L604.19,218.24L602.17,219.37L603.83,220.98L563.77,223.35L563.77,225.97L582.79,226.65L588.43,225.97L601.64,222.83L609.21,222.38L614.82,224.66L617.55,226.18L627.63,228.61L627.63,228.61L629.82,225.14L632.12,222.49L632.5,221.28L632.68,219.6L632.47,216.03L632.84,213.81L634.45,211.37L635.87,210.7L637.34,210.38L640.96,210.7L641.97,210.51L642.55,209.77L642.55,208.45L641.37,206.28L638.73,202.53L638.09,201.26L636.08,194.07L635.08,192.37L634.23,190.2L633.74,187.83L633.89,182.06L634.36,178.95L634.98,176.52L638.34,173.42L621.86,166.58L617.13,165.85L616.44,166.45L615.89,167.28L615.08,169.18L614.34,170.31L612.58,171.05L608.92,171.71L604.2,170.73L601.83,170.01L600.47,169.17L599.36,167.69L598.91,166.87L595.65,157.24L595.52,156.27L593.25,148.48z",
  "Saint Mary": "M611.48,99.28L607.31,98.35L588.43,96.88L581.8,95.04L578.31,92.9L576.14,89.57L572.75,79.49L570.88,75.76L559.41,69.06L546.44,60.87L542.37,57.15L542.38,51.96L543.5,47.88L540.92,44.54L536.47,43.79L531.65,43.41L525.71,44.14L521.51,46.37L499.93,47.29L495.61,46.51L488,42.91L483.64,41.82L476.94,42.96L476.94,42.96L477.24,44.69L480.39,58.76L480.61,60.75L481.33,63.51L482.08,64.87L484,66.72L484.99,68.12L485.65,69.56L484.87,78.17L485,79.33L485.77,80.75L490.29,86.13L491.84,88.58L492.96,92.11L493.47,95.37L494.05,97.48L494.49,98.49L496.91,101.75L503.91,108.81L509.5,107.11L510.55,106.9L511.68,106.84L518.67,107.61L519.87,108.48L520.96,109.87L523.16,115.14L524.39,116.83L527.28,118.94L528.83,120.63L530.23,123.62L531.01,126.72L531.46,129.99L532.25,131.62L536.51,137.5L540.37,141.27L548.98,144.77L553.92,142.72L554.75,142.05L555.64,141.03L556.02,140.03L556.51,139.11L557.92,138.48L560.14,138.09L564.8,138.06L566.89,137.62L572.99,138.82L593.25,148.48L610.39,100.52L611.47,99.28L611.48,99.28z",
  "Saint Catherine": "M548.98,144.77L540.37,141.27L536.51,137.5L532.25,131.62L531.46,129.99L531.01,126.72L530.23,123.62L528.83,120.63L527.28,118.94L524.39,116.83L523.16,115.14L520.96,109.87L519.87,108.48L518.67,107.61L511.68,106.84L510.55,106.9L509.5,107.11L503.91,108.81L482.02,121.17L474.6,124.04L425.7,130.26L436.05,156.56L437.49,163.4L436.14,166.12L435.09,169.71L434.24,175.26L434.36,177.14L434.67,178.52L436.14,180.85L436.73,181.55L438.79,184.65L440.82,188.42L441.7,190.96L442.18,192.89L442.28,206.28L442.57,209.21L443,211.44L443.43,212.5L443.9,213.39L450.97,222.8L451.6,224.51L451.93,226.12L451.8,227.37L453.51,245.7L459.16,242.37L468.68,239.04L479.18,240.19L483.64,241.92L487.46,244.91L492.39,251.56L496.32,255L488.62,257.62L488.62,260.46L508.77,260.46L512.78,262.05L515.72,264.05L518.89,265.49L523.7,265.45L529.55,261.71L534.39,254.83L540.91,231.68L542.33,222.93L543.75,220.11L548.55,220.69L549.94,217.74L554.47,212.62L556.18,208.57L557.31,204.62L556.13,200.18L553.64,196.73L552.67,196.93L550.8,197.77L549.88,197.98L548.87,197.98L548.02,197.65L547.35,197.05L546.86,196.24L546.18,194.5L545.8,193.89L545.48,193.49L542.84,191.11L542.8,188.94L543.3,185.6L545.46,177.85L546.73,174.65L547.85,172.62L548.57,172.07L549.26,171.43L549.87,170.7L550.34,169.87L551.58,167.1L551.63,165.65L551.29,163.75L548.87,158.73L548.3,156.31L548.12,154.82L548.98,144.77z",
  "Saint Ann": "M476.94,42.96L464.4,45.07L452.5,44.67L450.6,43.45L444.46,38.02L442.44,36.8L426.15,33.94L426.43,34.66L425.27,35.88L423.3,36.82L421.16,36.8L419.4,35.16L418.04,30.4L416.41,28.68L403.18,25.27L383.96,23.1L365.28,23.05L353.7,26.05L346.19,21.48L336.67,19.14L332.91,18.86L332.77,19.65L331.98,27.29L332.28,30.44L336.46,41.33L336.75,44.1L336.46,46.33L335.48,48.75L335.49,50.13L336,51.21L337.94,53.63L338.06,55.39L337.95,57.28L323.47,126.42L332.05,129.25L341.32,130.85L342.9,130.78L344.63,130.46L347.23,129.39L348.6,128.62L351.14,126.61L352.03,126.18L364.39,123.36L365.9,123.39L367.77,123.7L374.79,126.52L392.69,129.81L425.7,130.26L474.6,124.04L482.02,121.17L503.91,108.81L496.91,101.75L494.49,98.49L494.05,97.48L493.47,95.37L492.96,92.11L491.84,88.58L490.29,86.13L485.77,80.75L485,79.33L484.87,78.17L485.65,69.56L484.99,68.12L484,66.72L482.08,64.87L481.33,63.51L480.61,60.75L480.39,58.76L477.24,44.69L476.94,42.96z",
  Portland: "M771.1,196.92L759.41,171.29L751.37,159.74L741.01,149.79L739.23,141.81L725.28,136.75L698.44,131.69L697.12,130L694.25,124.51L692.34,123.35L664.96,123.35L661.95,122.63L659.7,121.04L657.88,119.29L655.85,118.77L649.51,114.27L637.4,115.04L631.21,113.1L625.87,109.63L618.93,102.6L613.57,99.74L611.48,99.28L611.47,99.28L610.39,100.52L593.25,148.48L595.52,156.27L595.65,157.24L598.91,166.87L599.36,167.69L600.47,169.17L601.83,170.01L604.2,170.73L608.92,171.71L612.58,171.05L614.34,170.31L615.08,169.18L615.89,167.28L616.44,166.45L617.13,165.85L621.86,166.58L638.34,173.42L645.18,178.12L647.95,181.89L648.62,182.58L649.37,183.23L651.79,184.88L654.53,186.19L671.81,191.67L674.37,193.16L675.75,193.31L677.45,193.14L680.41,192.04L681.82,191.12L683.45,189.53L684.19,188.94L685.05,188.5L686.53,188.32L691.67,188.29L693.5,188.05L694.81,187.69L697.25,186.34L699.1,185.56L700.58,185.63L702.39,186.09L710.4,190.76L722.33,192.62L733.12,195.83L735.07,196.66L735.75,197.2L736.36,197.94L738.75,201.4L739.77,202.47L741.19,203.69L746.13,204.93L759.42,206.74L763.26,206.3L773.42,203.13L773.64,203.06L771.1,196.92z",
  Kingston: "M602.17,219.37L604.19,218.24L603.86,213.25L600.81,206.13L597.2,204.22L591.79,202.96L582.38,203.42L579.28,204.24L575.65,205.73L572.83,207.59L572.2,208.99L570.99,212.57L576.2,215.68L583.68,215.52L594.69,215.67L599.47,216.76L601.31,218.54L602.17,219.37z",
  Westmoreland: "M166.56,88.01L135.99,86.19L128,84.73L107.93,73.06L104.75,72.16L101.36,71.69L56.09,71.9L54.01,72.46L40.33,88.64L38.53,90.06L36.66,90.44L34.69,90.42L15,87.56L11.7,87.31L11.7,87.31L11.24,89.51L8.68,92.73L3.28,96.55L1.26,99.74L2.87,106.45L7.44,112.35L13.64,116.52L20.05,118.12L26.34,118.91L37.56,122.52L42.67,123.35L43.57,123.91L52.55,127.54L55.01,128.05L57.82,126.51L61.25,123.35L67.24,123.41L83.64,126.19L110.48,125.52L119.56,130.63L126.42,144.55L128.65,153.63L130.4,158.27L132.65,160.28L135.56,161.05L139.2,162.91L142.33,165.08L145.21,169.26L150.8,182.26L150.81,182.26L153.35,177.3L160.53,156.54L161.36,150.85L161.02,149.94L160.51,147.92L160.43,146.85L160.55,145.7L161.16,143.32L163.48,138.45L167.49,132.04L169.12,130.4L170.36,129.37L175.87,126.63L179.34,116.48L179.51,112.83L176.59,103.55L175.51,101.64L174.97,100.9L174.31,100.19L173.55,99.62L172.65,99.15L170.56,96.62L166.56,88.01z",
  Trelawny: "M332.91,18.86L311.39,17.26L295.72,13.43L260.24,12.75L234.35,7.07L234.22,7.75L217.63,111.7L269.08,116.91L273.78,115.73L276.01,114.9L280.05,112.43L282.72,111.18L284.76,110.62L286.86,110.68L300.8,112.79L301.96,112.75L307.18,115.05L323.47,126.42L337.95,57.28L338.06,55.39L337.94,53.63L336,51.21L335.49,50.13L335.48,48.75L336.46,46.33L336.75,44.1L336.46,41.33L332.28,30.44L331.98,27.29L332.77,19.65L332.91,18.86z",
  "Saint James": "M188.27,0L173.52,2.43L167.08,5.35L163.33,8.87L155.06,19.48L152.8,23.46L152.91,26.4L152.55,28.92L148.86,31.54L144.7,32.2L140.67,31.18L137.85,30.15L137.84,30.15L137.79,33.81L137.6,34.97L135.18,43.59L135.84,44.95L137.09,46.48L143.02,51.41L143.64,52.45L144.53,54.33L145.1,57.1L146.11,59.5L150.24,67.11L152.05,71.26L152.8,72.07L154.12,73.02L159.21,75.7L161.02,77.43L161.93,78.65L166.56,88.01L170.56,96.62L172.65,99.15L173.55,99.62L174.31,100.19L174.97,100.9L175.51,101.64L176.59,103.55L179.51,112.83L179.34,116.48L175.87,126.63L217.63,111.7L234.22,7.75L234.35,7.07L234.35,7.07L204.98,0.64L188.27,0z",
  "Saint Elizabeth": "M269.08,116.91L217.63,111.7L175.87,126.63L170.36,129.37L169.12,130.4L167.49,132.04L163.48,138.45L161.16,143.32L160.55,145.7L160.43,146.85L160.51,147.92L161.02,149.94L161.36,150.85L160.53,156.54L153.35,177.3L150.81,182.26L150.8,182.26L153.84,189.32L159.66,191.49L184.95,191.71L194.22,195.12L196.49,203.25L195.84,212.93L196.37,220.98L198.42,222.63L204.95,224.97L206.33,227.4L207.09,230.51L210.87,240.33L212.46,243.23L215.68,245.76L228.52,252.13L236.11,257.31L238.61,257.78L288.02,254.94L296.71,256.43L296.7,256.42L295.81,254.7L270.92,151.33L269.08,116.91z",
  Manchester: "M300.8,112.79L286.86,110.68L284.76,110.62L282.72,111.18L280.05,112.43L276.01,114.9L273.78,115.73L269.08,116.91L270.92,151.33L295.81,254.7L296.7,256.42L296.71,256.43L303.66,257.62L319.59,262.24L327.32,261.55L335.03,256.31L341.76,253.54L350.26,254.66L358.32,257.64L358.69,257.86L358.7,257.86L359.73,256.88L360.47,256.39L361.53,256.06L364.78,256.46L365.91,256.4L366.87,256.19L367.62,255.66L368.22,254.94L368.63,253.95L369.36,249.27L371.53,242.13L371.68,240.92L371.32,239.65L370.51,238.3L366.35,234.69L364.65,232.44L364.03,230.78L363.39,228.47L362.58,223.27L362.4,220.68L362.51,218.82L363.53,215.8L364.04,213.63L324.34,132.13L323.47,126.42L307.18,115.05L301.96,112.75L300.8,112.79z",
  Hanover: "M137.84,30.15L133.9,28.68L126.03,28.63L102.44,31.54L94.14,29.9L87.38,27.4L81.59,27.52L76.17,33.94L66.8,26.77L53.8,31.09L42.61,41.41L38.84,52.3L32.72,50.27L28.97,53.33L26.08,57.83L22.51,60.16L16.85,60.63L15.57,62.15L15.26,65.04L12.48,69.59L11.79,72.87L12.3,84.46L11.7,87.31L11.7,87.31L15,87.56L34.69,90.42L36.66,90.44L38.53,90.06L40.33,88.64L54.01,72.46L56.09,71.9L101.36,71.69L104.75,72.16L107.93,73.06L128,84.73L135.99,86.19L166.56,88.01L161.93,78.65L161.02,77.43L159.21,75.7L154.12,73.02L152.8,72.07L152.05,71.26L150.24,67.11L146.11,59.5L145.1,57.1L144.53,54.33L143.64,52.45L143.02,51.41L137.09,46.48L135.84,44.95L135.18,43.59L137.6,34.97L137.79,33.81L137.84,30.15z",
  Clarendon: "M444.93,315.38L453.85,312.6L454.97,306L451.27,291.6L443.92,293.84L436.83,294.44L430.06,292.94L423.65,288.98L427.19,286.02L430.98,284.67L434.9,284.85L438.81,286.63L437.91,284.2L437.28,280.32L436.33,278.31L439,277.19L443.63,274.36L446.28,273.3L443.52,262.69L444.95,259.2L450.94,247.22L453.51,245.7L451.8,227.37L451.93,226.12L451.6,224.51L450.97,222.8L443.9,213.39L443.43,212.5L443,211.44L442.57,209.21L442.28,206.28L442.18,192.89L441.7,190.96L440.82,188.42L438.79,184.65L436.73,181.55L436.14,180.85L434.67,178.52L434.36,177.14L434.24,175.26L435.09,169.71L436.14,166.12L437.49,163.4L436.05,156.56L425.7,130.26L392.69,129.81L374.79,126.52L367.77,123.7L365.9,123.39L364.39,123.36L352.03,126.18L351.14,126.61L348.6,128.62L347.23,129.39L344.63,130.46L342.9,130.78L341.32,130.85L332.05,129.25L323.47,126.42L324.34,132.13L364.04,213.63L363.53,215.8L362.51,218.82L362.4,220.68L362.58,223.27L363.39,228.47L364.03,230.78L364.65,232.44L366.35,234.69L370.51,238.3L371.32,239.65L371.68,240.92L371.53,242.13L369.36,249.27L368.63,253.95L368.22,254.94L367.62,255.66L366.87,256.19L365.91,256.4L364.78,256.46L361.53,256.06L360.47,256.39L359.73,256.88L358.7,257.86L358.69,257.86L385.58,273.54L392.14,281.81L423.8,310.2L430.54,313.46L437.34,315L444.93,315.38z"
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

// src/Jamaica.tsx
import { useState as useState2, useId } from "react";
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
var Jamaica = ({
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
    return /* @__PURE__ */ React.createElement(
      JamaicaSingle,
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
    return /* @__PURE__ */ React.createElement(
      JamaicaMultiple,
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
var JamaicaSingle = ({
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
  const instanceId = useId().replace(/:/g, "");
  const { x, y } = mouseTrack_default();
  const [stateHovered, setStateHovered] = useState2(null);
  const [selectedState, setSelectedState] = useState2(null);
  const strokeProps = getStrokeProperties(borderStyle);
  const mapStyle = {
    width: size || constants.WIDTH,
    stroke: strokeColor || constants.STROKE_COLOR,
    strokeWidth: strokeWidth || constants.STROKE_WIDTH,
    ...strokeProps
  };
  useEffect2(() => {
    stateCode.forEach((state) => {
      const path = document.getElementById(`${state}-${instanceId}`);
      if (path) {
        path.style.fill = cityColors[state] || mapColor || constants.MAPCOLOR;
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
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("div", { className: "map", style: mapStyle }, /* @__PURE__ */ React.createElement("svg", { version: "1.1", id: `svg2-${instanceId}`, x: "0px", y: "0px", viewBox }, stateCode?.map((stateCode2, index) => /* @__PURE__ */ React.createElement(
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
var JamaicaMultiple = ({
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
  const instanceId = useId().replace(/:/g, "");
  const [selectedStates, setSelectedStates] = useState2([]);
  const { x, y } = mouseTrack_default();
  const [stateHovered, setStateHovered] = useState2(null);
  const strokeProps = getStrokeProperties(borderStyle);
  const mapStyle = {
    width: size || constants.WIDTH,
    stroke: strokeColor || constants.STROKE_COLOR,
    strokeWidth: strokeWidth || constants.STROKE_WIDTH,
    ...strokeProps
  };
  useEffect2(() => {
    stateCode.forEach((state) => {
      const path = document.getElementById(`${state}-${instanceId}`);
      if (path) {
        path.style.fill = cityColors[state] || mapColor || constants.MAPCOLOR;
      }
    });
  }, [cityColors, mapColor, instanceId]);
  useEffect2(() => {
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
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("div", { className: "map", style: mapStyle }, /* @__PURE__ */ React.createElement("svg", { version: "1.1", id: `svg2-${instanceId}`, x: "0px", y: "0px", viewBox }, stateCode?.map((stateCode2, index) => /* @__PURE__ */ React.createElement(
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
var Jamaica_default = Jamaica;

// src/index.ts
var src_default = Jamaica_default;
export {
  src_default as default
};
