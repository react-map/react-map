// src/Monaco.tsx
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
var stateCode = ["Monaco"];
var drawPath = {
  Monaco: "M722.87,0L722.23,0.5L719.7,11.24L719.77,12.18L722.67,14.77L722.74,15.56L722.87,16.05L725.68,18.06L728.19,20.2L729.98,20.2L733.49,23.43L737.11,24.66L740.63,26.01L698.74,69.54L687.81,70.63L679.62,71.85L670.25,73.7L667.84,74.07L663.71,75.92L654.84,80.22L645.6,84.63L644.52,85.13L639.42,87.5L634.64,88.71L633.19,89.06L629.85,89.91L624.47,91.38L608.11,95.72L606.29,95.99L604.18,97.85L602.23,100.25L598.37,105.98L597.8,106.21L596.4,107.69L595.3,108.98L593.29,109.9L590.73,110.28L588.55,110.49L587.72,110.39L586.11,109.97L581.33,107.12L580.68,106.81L578.95,106.75L577.7,107.35L574.24,107.84L572.33,108.01L568.54,107.79L565,107.43L563.84,106.82L563.55,106.43L562.73,105.44L562.18,104.36L560.44,104.28L560.1,105.82L560.02,107.55L559.93,113.08L557.88,116.05L556.93,117.67L556.42,119.44L555.25,128.65L555.29,132.11L555.2,132.92L553.89,133.3L538.88,138.8L538.57,139.45L525.38,181.84L524.66,183.27L515.45,189.73L512.45,192.29L512.39,192.53L511.77,195.44L511.24,197.95L508.65,206.86L507.64,211.63L507.78,216.46L506.91,221.82L507.14,226.14L507.91,228.51L509.53,231.35L509.57,232.75L507.95,238.23L508.19,242.04L506.6,244.58L505.68,248.24L502.06,251.55L499.42,257.27L495.62,263.91L494.82,266.51L494.81,281.23L493.52,286.45L490.19,291.62L488.76,292.59L483.14,299.35L476.96,304.95L469.32,309.73L466.6,312.21L464.81,314.77L460.7,322.47L460.18,324.28L459.45,326.06L458.8,330.77L457.72,332.98L447.94,344.28L443.97,347.99L442.3,350.16L439.93,356.74L437.02,360.68L433.49,364.95L428.49,367.1L426.06,369.29L423.76,374.93L423.01,375.78L421.72,376.55L419.13,374.36L414.49,370.72L401.36,397.06L396.09,393.19L379.94,380.72L373.15,375.59L370.28,373.58L362.98,368.02L361.7,366.71L345.72,379.05L342.29,377.22L338.42,381.71L334.96,387.64L332.9,387.81L329.81,395.25L328.13,399.18L326.15,402.73L329.2,405.55L327.11,408.11L304.39,435.43L301.09,438.84L299.54,437.28L291.04,443.95L284.14,449L283.44,449.63L278.81,453.78L271.13,460.15L262.64,467.85L255.01,474.77L223.2,503.61L222.84,503.94L203.55,521.21L180.37,539.8L174.04,545.22L164.54,552.78L163.18,554L161.86,555.11L154.9,560.81L152.52,562.75L141.73,574.38L131.55,585.35L124.5,591.98L100.9,613.26L95.58,618.19L94.52,619.01L94.61,620.88L94.42,622.22L94.01,623.1L92.39,625.21L89.89,627.04L86.55,629.37L84.92,630.82L88.62,635L92.08,638.66L93.34,639.65L94.75,640.81L96.88,642.34L98.54,644.37L98.59,644.7L96.39,649.09L96.12,651.33L95.93,653.17L95.67,655.61L94.87,662.63L96.17,666.52L99.61,671.6L103.44,676.23L104.74,678.67L105.35,680.4L106.06,685.3L105.7,686.85L104.51,692.73L104.03,694.39L103.87,695.41L103.77,697.31L103.41,700.06L103.06,705.13L102.96,707.42L102.08,720.38L101.62,722.15L100.89,725.94L99.84,726.89L98.42,726.55L97.91,726.82L96.03,727.4L94.8,727.94L94.95,728.77L94.5,729.04L91.01,730.23L89.26,730.63L87.33,730.15L85.7,729.77L83.85,729.35L81.98,728.92L80.08,728.51L78.35,728.35L76.52,728.24L74.75,728.31L72.12,728.55L70.29,729.2L67.04,730.27L63.57,731.59L60.89,732.96L57.84,736.42L54.7,737.93L50.02,740.76L48.96,741.71L47.48,742.84L45.92,743.87L44.43,744.88L42.29,746.08L39.72,746.91L38.51,748.81L38.48,748.88L37.39,750.19L36.73,751.1L35.95,751.93L34.17,752.76L31,754.57L28.51,757.44L26.08,760.35L18.55,772.99L17.68,776.35L15.49,779.64L13.35,782.39L10.75,784.92L9.47,785.33L8.04,787.14L6.43,790.76L5.22,792.33L4.91,793.69L3.6,797.72L0.99,800.54L0.41,801.69L10.53,808.26L11.37,808.81L17.19,812.61L25.44,817.96L30.36,821.31L31.8,822.31L34.39,824.07L36.09,825.1L37.14,825.84L38.38,826.66L42.53,829.37L56.29,839.09L59.04,841.05L63.89,844.4L67.67,847.08L75.89,852.9L78.5,854.86L86.12,860.36L89.35,862.9L111.1,879.02L124.93,888.79L170.99,920.53L205.19,944.81L225.66,959.55L233.95,965.38L239.73,969.38L246.45,974.46L246.47,974.5L246.55,974.41L264.42,956.26L266.35,958.21L268.55,958.64L269.26,958.4L271.31,956.38L271.57,955.61L271.33,953.51L269.32,951.39L296.89,923.73L298.48,925.32L300.65,925.73L301.35,925.53L303.39,923.45L303.64,922.59L303.2,920.38L301.61,918.86L310.59,909.93L351.13,883.35L351.31,883.51L381.84,863.5L387.84,859.57L384,853.69L379.89,856.38L377.62,857.19L375.11,858.53L370.13,861.56L369.74,861.17L367.91,862.6L366.28,863.64L365.23,864.35L364.41,864.9L362.69,865.92L359.08,868.28L360.06,869.63L359.26,870.09L358.93,869.59L357.28,870.68L355.43,868.52L352.85,870.47L354.07,872.73L349.35,875.79L346.67,874.8L343.37,872.56L338.58,868.46L334.81,865.33L329.51,858.74L327.34,854.67L325.36,850.22L321.74,839.99L322.71,835.93L325.31,835.97L324.63,827.9L323.75,827.77L322.35,827.89L322.38,829.66L321.92,829.65L321.99,830.88L305,832.06L266.87,834.67L265.64,818.83L249.8,819.75L247.42,786.13L261.86,784.1L261.49,781.39L225.55,786.33L224.23,783.35L222.81,784.19L222.9,782.21L223.52,781.92L222.39,779.53L220.59,775.63L238.39,759.56L241.58,756.68L244.68,754.31L245.52,753.48L252.65,760.87L253.26,760.26L247.21,753.86L248.05,753.15L249.12,754.14L250.62,752.73L254.25,754.43L256.39,753.92L258.67,754.72L259.17,756.17L262.79,757.48L264.05,756.71L266.13,757.45L266.98,758.53L268.87,759.7L270.77,758.98L272.86,761.3L276.44,766.49L279.46,767.52L281.76,771.24L284.02,777.39L285.53,777.18L286.8,778.94L287.21,783.1L290.63,786.44L293.66,790.7L297.69,791.44L302.34,789.87L304.76,790.33L306.7,786.48L308.61,786.91L309.8,783.97L311.97,783.34L313.46,783.57L315.15,781.92L314.85,780.79L316.94,778.71L324.27,779.35L327.78,780.6L329.9,784.2L330.56,786.72L331.85,792.04L336.23,802.41L342.21,806.67L345.03,803.6L348.03,803.19L351.62,805.45L351.42,812.32L350.33,841.21L358.01,841.61L358.15,836.75L356.34,836.5L357.39,807.67L359.15,808L359.34,808.43L362.69,808.16L362.92,808.46L364.52,808.56L365.05,808.4L365.36,808.14L366.66,808.19L367.14,807.96L367.96,807.85L367.48,808.43L367.68,808.63L368.36,808.1L368.85,807.94L369.86,808.13L370.28,807.92L370.75,807.87L371.67,808.28L372.07,808.09L372.45,808.14L372.54,808.94L372.87,809.38L373.56,809.44L374.38,809.17L375.07,808.59L375.58,808.62L376.23,808.51L377.26,807.96L378.12,807.72L378.67,807.88L378.99,807.79L379.57,807.86L379.93,807.67L380.35,807.73L384.21,807.66L384.94,807.85L385.87,807.82L387.05,808.91L388.25,809.2L388.6,809.24L388.84,808.95L389.26,808.15L390.08,807.82L391.92,807.44L393.2,807.6L394.53,807.37L396.12,805.89L396.85,804.71L397.28,803.38L399.24,801.17L400.86,798.6L402.9,796.33L404.35,794.5L407,794.79L409.01,793.54L411.2,793.51L413.2,793.44L414.27,792.08L414.29,789.58L414.74,785.1L418.84,782.43L421.03,779.27L425.05,775.86L428.05,774.58L431.04,771.84L437.28,769.93L438.24,768.39L441.36,765.2L444,762.4L445.01,763.48L448.11,765.05L452.6,766.29L456.62,767.48L459.92,767.69L462.06,766.42L472.82,754.99L478.92,746.91L483.37,742.14L482.85,738.81L484.91,728.95L485.42,726.65L486.04,726.78L487.9,725.32L487.8,724.38L487.45,723.64L487.54,721.86L491.81,717.2L493.46,714.36L493.68,713.58L494.49,712.78L496.76,711.86L498.16,711.81L499.17,712.07L500.03,711.7L499.9,711.19L498.68,710.9L497.95,710.31L497.55,709.18L498.15,708.12L497.75,707.25L496.45,706.84L496.21,705.51L496.59,704.84L498.16,703.07L497.95,702.68L496.45,701.51L496.62,699.01L497.7,697.43L498.75,685.67L502,681.72L509.16,672.67L520.29,659.36L529.69,648.09L526.44,645.55L526.69,644.96L543.14,624.38L560.94,602.89L597.86,556.6L590.93,551.4L518.73,639.02L515.04,635.96L501.89,638.16L491.53,629.63L487.67,626.57L485.91,618.12L484.44,610.19L481.18,607.18L473.77,608.54L472.26,612.16L471.68,612.59L472.14,615.25L473.19,620.72L473.56,620.76L474.83,620.41L476.77,620.03L477.03,620.5L480.77,640.18L481.44,643.31L481.97,645.33L478.42,645.88L478.71,647.47L482.21,646.8L482.48,649.27L484,656.61L474.37,659.19L463.29,662.43L452.51,665.69L438.06,669.66L436.94,669.33L433.35,670.57L433.41,671.01L427.31,672.7L422.03,674.58L403.87,679.88L396.72,656.64L401.86,654.88L403.04,653.85L402.57,652.33L400.71,651.32L389.01,654.68L387.84,656.38L388.16,657.92L389.92,658.61L394.44,657.15L401.58,680.5L396.26,682.03L391.28,683.45L382.03,686.08L376.88,667.58L375.17,667.96L379.55,683.75L374.89,685.11L374.51,685.12L374.2,684.42L371.84,676.04L369.08,674.8L366.97,673.38L365.25,672.24L363.18,670.48L361.36,668.64L358.33,664.45L356.46,660.86L354.87,656.7L353.06,647.2L351.76,640.56L352.46,636.02L351.64,631.9L349.98,623.37L350.71,623.34L354.53,622.55L358.16,640.97L359.92,640.67L356.28,622.4L356.36,622.19L368.84,619.77L373,639.44L374.55,638.96L376.22,638.87L367.24,591.91L365.52,592.13L363.78,592.53L367.27,610.99L366.58,611.14L366.82,612.4L354.78,614.84L351.33,596.31L349.6,596.67L353.2,615.08L347.85,616.15L342.98,591.5L340.73,588.6L337.51,587.26L333.73,587.6L333.39,580.71L333.66,574.36L334.05,570.97L334.66,567.65L336.31,561.4L337.57,557.49L339.47,553.5L340.8,550.8L343.79,545.63L412.56,535.53L417.03,538.7L430.81,536.88L430.89,537.7L430.26,537.79L430.17,537.87L432.92,558.53L435.06,558.25L432.2,537.51L431.71,537.58L431.7,536.73L432.14,536.65L431.6,532.87L459.28,529.2L467.21,569.11L463.31,569.82L464.84,577.39L468.3,580.88L475.95,579.43L477.57,575.35L476.5,569.22L472.44,548.7L468.97,531.13L493.07,524.49L504.8,521.11L514.38,518.29L520.61,516.51L525,527.18L529.55,538.51L533.96,549.29L538.06,559.59L538.43,559.78L544.51,557.34L545.75,555.86L528.3,513.2L530.41,512.39L532.48,509.75L531.23,508.79L533.3,506.43L534.38,506.56L534.43,505.73L535.64,505.92L547.18,489.77L542,478L553.19,463.56L550.52,457.99L558.22,448.5L555.28,443.03L561,435.66L558.26,430.16L561.64,425.38L556.46,415.32L554.54,415.13L554.26,414.76L557,394.38L557.11,393.59L558.7,392.76L560.27,392.51L561.39,391.5L561.39,390.26L560.71,388.72L560.91,385.88L562.28,383.66L564.72,377.38L578.76,350.27L586.32,336.24L595.43,323.32L603.28,313.79L607.2,308.68L608.62,306.82L610.14,303.29L612.21,297.73L612.64,291.46L613.1,284.26L612.17,278.07L611.47,276.56L611.2,275.19L611.55,274.01L613.01,272.27L613.93,270.64L615.19,269.01L616.85,267.75L618.65,266.67L621.64,265.44L625.22,264.53L627.24,263.39L628.33,262.55L629.24,261.44L631.59,257.49L634.39,253.47L633.72,251.91L632.93,251.18L631.09,249.96L630.22,249.77L629.63,250.27L629.11,250.98L629.16,251.47L628.81,251.79L629.21,252.46L629.45,252.4L630.35,253.12L625.1,259.32L619.96,259.77L616.91,254.76L614.68,248.37L614.96,241.14L616.35,233.35L619.46,225.82L622.02,222.13L625.18,219.27L628.25,216.95L631.22,215.33L637.76,213.14L646.05,210.22L655.09,221.72L656.34,220.55L646.19,207.88L647.63,207.17L648.51,205.96L649.74,201.78L652.63,196.26L654.4,193.47L656.77,190.74L658.94,188.68L661.48,186.85L663.74,185L666.75,183.54L670.41,182.32L677.04,181.04L682.39,180.92L687.21,181.56L692.49,183.09L697.27,186.25L700.02,187.83L696.66,194.58L690.21,198.93L688.95,197.24L688.07,196.94L687.23,197.37L686.51,198.4L686.41,199.44L687.73,201.7L688.96,202.46L691.41,202.14L694.08,201.01L697.7,198.82L699.51,196.97L701.34,193.72L702.55,190.63L703.19,188.84L704.44,186.44L708.1,183.02L710.89,180.5L711.07,179.74L710.69,178.37L710.18,177.42L708.83,177.22L707.58,177.21L706.49,178.17L707.68,179.68L702.8,183.54L695.86,174.89L698.12,167.04L699.84,162.99L701.97,159.13L704.86,156.33L709.03,154.24L713.57,153.27L715.34,153.18L717.2,153.66L729.2,176.41L733.83,183.72L739.03,192.44L743.16,197.87L748.34,201.98L753.88,203.96L758.76,205.09L765.17,205.62L769.5,205.22L774.96,204.13L782.96,201.64L788.17,199.66L793.14,196.34L798.19,191.96L799.59,187.27L798.1,180.8L796.06,170.68L794.39,166.83L793.05,162.68L786.9,132.63L791.06,131.74L789.25,123.34L787.35,123.67L784.77,111.74L786.76,111.33L785.14,102.95L780.34,103.81L778.6,98.42L760.98,90.32L760.09,86.49L759.84,85.6L760.54,83.26L762.28,80.37L764.27,77.19L765.56,75.75L766.67,73.58L766.84,72.14L766.57,70.86L765.4,65.35L765.76,62.01L765.43,61.2L764.07,59.65L762.61,56.48L762.03,53.09L762.16,51.33L762.8,48.94L767.23,40.29L768.12,36.42L768.58,26.12L768.28,24.45L767.59,22.92L765.86,21.09L747.8,7.09L742.8,4.43L741.27,4.11L735.67,4.52L733.73,4.13L728.7,1.57L724.79,0.21L722.87,0z"
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

// src/Monaco.tsx
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
var Monaco = ({
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
      MonacoSingle,
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
      MonacoMultiple,
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
var MonacoSingle = ({
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
var MonacoMultiple = ({
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
var Monaco_default = Monaco;

// src/index.ts
var src_default = Monaco_default;
export {
  src_default as default
};
