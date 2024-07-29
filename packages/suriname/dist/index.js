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

// src/Suriname.tsx
var import_react2 = __toESM(require("react"));

// src/constants.ts
var constants = {
  WIDTH: "500px",
  MAPCOLOR: "#ffffff",
  STROKE_COLOR: "#000000",
  STROKE_WIDTH: "0.5",
  HOVERCOLOR: "#303030",
  SELECTED_COLOR: "#ff0000"
};
var viewBox = "-20 -20 1600 850";
var stateCode = ["Wanica", "Saramacca", "Paramaribo", "Coronie", "Commewijne", "Sipaliwini", "Para", "Marowijne", "Brokopondo", "Nickerie"];
var drawPath = {
  Wanica: "M556.09,21.49L556.08,21.49L555.47,21.32L553.51,20.12L551.5,18.46L551.49,18.46L551.37,18.82L538.76,45.49L533.25,51.43L531.6,52.6L531.1,54.88L530.91,59.57L532.12,66.69L551.08,68.89L557.67,68.71L578.59,64.65L583.55,64.89L593.39,67.84L594.45,67.32L595.71,65.87L594.02,63.22L590.16,61.51L582.35,59.03L578.79,56.43L575.86,53.21L573.5,49.55L572.91,48.3L564.53,45.56L561.14,43.37L559.74,41.81L558.58,39.93L557.72,37.91L556.26,32.44L555.78,25.23L555.94,22.32L556.09,21.49z",
  Saramacca: "M551.49,18.46L549.42,16.76L548.05,16.06L543.89,14.73L540.79,13.43L535.29,9.62L523.74,7.42L476.29,5.05L468.22,5.18L458.33,5.98L440.51,6.75L435.76,7.01L431.13,8.22L427.6,9.57L424.74,11.74L422.83,13.77L420.25,16.48L418.91,18.5L415.73,22.65L414.85,25.6L415.5,29.54L418.22,31.84L420.51,31.73L422.91,31.62L424.88,33.38L421.86,37.36L423.98,42.2L427.36,49.62L428,53.07L428.14,59.73L427.81,62.8L426.78,65.9L425.41,65.9L425.41,65.9L424.99,66.82L422.29,69.67L419.33,70.39L413.98,71L412.35,71.59L411.21,72.39L410.69,73.4L410.31,74.82L410.42,76.07L410.83,77.39L411.53,78.85L413.04,81.23L418.25,86.88L419,87.48L420.45,89.1L421.57,92.82L424.12,95.82L424.9,98.26L426.91,100.35L426.76,102.33L425.6,104.35L423.68,106.29L422.23,109.55L422.19,112.25L423.01,114.69L423.44,117.86L424.87,118.92L426.56,119.29L435.38,116.99L437.8,117.13L445.51,119.18L505,114.51L507.38,113.88L508.58,113.07L510.15,112.46L511.35,113.09L512.46,114.12L513.82,115.14L514.87,114.75L515.5,113.69L515.9,112.53L516.97,111.42L518.65,111.43L521.57,110.12L523.04,109.21L523.61,108.15L523.89,105.69L524.37,104.49L525.3,103.27L526.19,101.87L526.56,100.46L526.42,99.19L525.52,97.96L522.6,95.65L521.74,94.3L521.67,93.01L522.99,90.4L523.52,87.61L524.09,86.2L525.73,84.74L526.87,83.43L527.47,81.99L527.25,80.58L526.53,79.3L525.48,78.25L524.79,77.09L525.26,75.78L527.51,74.2L530.81,73.4L532.73,72.49L533.63,71.37L533.68,70.03L533.21,68.71L532.12,66.69L530.91,59.57L531.1,54.88L531.6,52.6L533.25,51.43L538.76,45.49L551.37,18.82L551.49,18.46z",
  Paramaribo: "M575.89,37.44L575.89,37.44L575.64,37.56L578.53,34.34L580.88,28.57L579.37,25.67L575.47,22.78L572.12,20.35L568.95,20.65L566.43,21.71L564.19,22.47L561.43,22.21L559.39,21.92L557.72,21.92L556.09,21.49L555.94,22.32L555.78,25.23L556.26,32.44L557.72,37.91L558.58,39.93L559.74,41.81L561.14,43.37L564.53,45.56L572.91,48.3L571.65,45.61L570.31,41.36L572.72,40.23L575.89,37.44z",
  Coronie: "M425.41,65.9L425.32,65.9L425.32,48.92L424.17,46.3L421.37,44.65L417.82,40.72L405.45,39.53L397.85,36.89L393.82,36.18L389.03,34.88L380.96,32.19L367.77,29.32L361.67,27.72L355.02,25.82L345.81,23.44L335.79,23.01L323.39,19.73L302.14,14.77L292.93,13.94L289.18,12.96L287.1,12.06L287.13,13.96L287.5,46.81L288.06,51.77L291.07,58.48L293.23,61.83L294.02,63.6L294.4,68.08L294.87,70.17L299.8,80.17L306.97,88.86L307.43,90.2L307.81,92.2L307.36,94.65L306.78,95.57L305.77,95.73L303.45,94.32L302.16,93.9L300.93,94.16L299.79,95.12L298.78,96.18L297.64,97.04L296.41,97.19L295.1,96.95L294.02,97.11L293.72,98.31L294.45,100.3L300.93,106.97L301.9,108.55L302.44,110.45L302.25,113.21L301.36,115.09L300.28,116.48L299.32,117.48L298.48,118.7L298.32,120.87L297.57,122.09L297.14,123.29L297.36,124.14L298.74,124.69L301.86,125.4L303.6,126.1L304.8,125.67L305.29,124.69L305.89,121.76L306.6,120.47L307.48,119.8L308.6,119.68L309.87,120.38L311.45,122.45L312.58,124.59L313.93,127.92L314.93,129.84L314.98,131.67L314.08,133.47L312.66,134.39L310.56,136.69L328.95,135.99L332.16,134.45L334.7,132.72L338.77,129.3L342.21,125.67L345.18,123.91L349.16,122.72L360.47,121.83L379.76,122.86L391.75,122.01L393.54,121.32L396.98,114.61L400.56,113.55L401.44,112.94L403.08,109.95L404.35,108.57L409.08,105.81L411.68,105.01L412.34,104.25L412.56,102.21L410.71,98.84L410.65,97.86L411.02,97.01L413.55,95.36L421.57,92.82L420.45,89.1L419,87.48L418.25,86.88L413.04,81.23L411.53,78.85L410.83,77.39L410.42,76.07L410.31,74.82L410.69,73.4L411.21,72.39L412.35,71.59L413.98,71L419.33,70.39L422.29,69.67L424.99,66.82L425.41,65.9z",
  Commewijne: "M658.84,7.24L657.34,6.97L648.96,6.03L645.39,5.18L598.34,3.58L592.3,3.64L584.37,4.12L578.19,5.18L572.78,7.35L571.05,8.46L569.75,10.52L570.89,11.85L571.63,13.92L573.08,16.03L576.47,18.29L580.45,20.21L591.81,23.48L594.85,25.02L597.82,27.48L600.77,27.62L603.88,25.82L606.63,26.44L609.64,28.34L614.12,27.93L616.37,26.56L618.18,25.11L619.96,24.83L622.55,25.35L624.13,26.22L625.67,27.56L627,29.11L627.88,30.71L624.42,28.19L622.45,27.21L620.59,26.8L618.3,27.3L616.98,28.44L615.92,29.75L614.39,30.71L612.46,31.39L610.8,31.75L609.13,31.45L604.75,28.76L603.24,29.11L601.64,30.14L599.08,30.71L595.12,29.88L588.65,25.33L584.32,25.35L583.3,26.86L583.11,31.25L581.29,35.64L575.89,37.44L572.72,40.23L570.31,41.36L571.65,45.61L572.91,48.3L573.5,49.55L575.86,53.21L578.79,56.43L582.35,59.03L590.16,61.51L594.02,63.22L595.71,65.87L594.45,67.32L593.39,67.84L586.36,71.25L584.1,75.52L583.68,75.95L583.59,77.84L583.66,78.02L584.4,77.67L586.36,77.96L586.92,77.71L587.94,77.08L589.17,76.56L590.37,76.62L590.61,77.23L590.36,78.13L590.28,78.93L591.04,79.3L591.66,80.15L591.82,82.16L591.44,93.18L595.1,94.35L599.02,94.48L673.89,89L669.04,81.9L665,73.73L658.95,64.74L657.42,61.41L655.74,55.53L654.21,52.42L652.58,48.17L652.28,46.68L651.69,41.6L651.92,39.16L652.72,36.96L656.54,32.38L657.89,29.58L656.47,13.88L657.85,9.64L658.84,7.24z",
  Sipaliwini: "M401.44,820.07L414.33,816.2L420.55,809.74L421.59,802.69L420.49,794.87L420.25,786.16L420.88,783.66L421.59,781.87L421.91,780.08L421.29,777.58L419.82,775.37L413.13,769.63L406.12,760.54L404.43,759.05L399.16,755.43L396.51,751.27L394.72,743.56L391.01,740.14L387.39,739.28L378.81,738.76L376.56,737.26L377.12,733.63L379.45,727.83L382.42,722.2L384.97,719.07L387.39,718.51L389.18,719.33L390.92,720.37L393.12,720.54L395.45,719.46L396.96,717.88L402.68,709.32L403.69,705.89L403.82,697.2L405.9,688.85L407.4,685.41L408.62,684.3L410.96,683.55L415.63,683.97L419.97,686.42L430.61,695.19L433.92,696.81L447.75,700.23L449.62,701.24L451.08,702.96L453.33,707.24L455.39,708.88L459.27,709.69L474.72,705.82L481.97,702.43L486.08,702.45L489.83,702.96L500.96,701.96L508.21,702.07L515.8,703.04L522.84,703.17L528.42,700.75L530.05,697.73L530.57,694.15L531.66,690.49L534.94,687.28L538.32,685.9L541.79,685.63L544.88,686.77L547.18,689.62L551.75,689.9L567.4,677.86L574.09,677.31L575.01,679.13L574.32,682.87L575.84,684.46L577.4,684.63L579.05,684.04L586.13,680.63L593.68,674.22L597.59,671.74L605.59,668.54L609.07,668.13L610.14,670.08L608.85,672.7L605.07,676.54L604.43,679.23L605.26,681.05L624.5,699.81L632.01,702.52L641.69,699.65L645.02,697.85L648.09,696.19L651.37,696.05L655.65,697.72L658.3,699.22L659.17,700.1L659.3,704.04L659.58,705.19L660.42,707.3L660.66,708.4L660.34,709.61L659.4,709.92L658.37,709.89L657.85,710.11L656.73,713.8L658.48,718.26L658.73,720.34L658.52,722.24L658.99,723.82L661.27,724.96L665.11,725.55L668.93,725.45L672.7,724.74L676.38,723.53L679.53,719.71L682.36,719.21L688.94,721.21L692.77,720.81L694.98,719.1L700.25,705.74L702.22,704.61L704.32,703.46L708.64,703.41L711.59,702.99L713.94,702.05L723.31,692.67L726.47,687.92L734.11,668.59L740.98,654.61L755.23,635.32L756.76,632.31L759.86,623.19L761.17,621.57L763.52,620.29L760.94,618.18L759.72,616.85L759.38,615.53L759.51,613.48L760.22,611.23L762.92,607.27L763.52,606.11L764.94,600.12L764.85,597.42L763.8,597.1L761.65,594.68L760.6,591.92L762.85,590.6L763.72,589.39L763.39,586.62L762.18,581.9L761.76,581.37L759.93,580.06L759.51,579.89L759.94,578.82L760.82,578.16L761.71,577.71L762.18,577.22L762.64,573.08L762.17,568.64L760.04,565.81L755.5,566.51L759.55,556.57L762.28,552.16L769.43,543.45L774.47,535.53L781.02,530.84L781.13,530.76L783.24,527.36L784.56,523.51L785.03,520.07L785.94,517.43L793.05,510.04L796.25,502.19L795.61,487.36L797.18,479.12L798.75,474.67L799.03,471.67L797.86,469.2L795.12,466.39L793.35,465.7L791.28,466.02L789.13,466.68L787.03,467.05L786.92,465.87L782.35,458.9L778.35,444.98L776.33,442.82L772.27,436.8L770.2,435.43L763.52,433.45L761.28,432.43L760.16,431.71L758.18,429.31L756.31,425.47L754.84,423.17L754.16,423.28L753.33,421.6L749.65,419.61L744.8,410.55L743.49,409.18L740.76,406.98L739.45,405.19L737.35,398.4L736.11,396.48L729.43,390.45L727.56,387.16L727.31,382.29L728.12,379.24L730.75,372.45L731.32,369.49L730.56,365.45L728.54,363.84L721.96,362.06L719.53,360.43L717.25,357.75L716.47,354.41L718.61,350.74L719.87,347.38L719.68,342.38L717.95,333.92L711.98,321.46L708.59,300.29L709.14,295.31L713.02,288.12L713.94,284.74L713.94,276.69L713.58,274.4L711.14,267.98L710.98,263.15L711.65,259.4L711.59,256.06L709.26,252.43L707.37,251.36L705.36,250.8L703.77,249.71L703.13,247.06L703.13,222.8L701.9,220.04L701.55,218.03L702.45,216.1L707.66,212.44L708.59,211.4L708.97,208.5L707.26,200.66L707.81,197.29L709.01,194.19L712.61,188.47L723.31,176.38L723.95,175.17L724.43,172.94L725.3,171.69L728.31,169.56L729.58,168.23L731.84,160.4L734.07,157.2L733.98,157.11L729.38,152.37L727.61,151.31L724.84,150.01L717.82,147.59L706.92,140.13L704.24,138.71L668.62,125.32L665.81,124.4L663.92,127.27L652.37,149.46L649.97,155.8L648.78,157.55L641.83,163.68L640.42,165.55L639.6,167L635.43,182.05L633.47,193.39L630.18,202.71L643.35,207.83L648.65,212.62L650.96,216.78L651.57,218.37L651.95,220.51L651.75,222.51L650.98,224.56L648.4,228.66L647.41,230.73L646.94,232.98L646.66,237.84L646.14,240.2L645.23,242.51L642.96,246.82L642.11,248.94L641.66,251.04L641.1,255.51L640.46,257.66L637.42,263.65L636.79,265.72L636.6,267.91L636.95,285.24L636.18,289.77L635.29,291.96L633.98,294.11L630.31,298.32L623.72,304.32L622.15,306.46L621.14,308.89L620.84,311.1L620.85,313.55L621.11,315.85L622.03,320.17L625.5,330.56L625.81,332.59L625.86,336.85L625.53,338.56L621.17,350.33L616.02,359.01L615.03,361.26L613.68,365.58L612.79,367.6L611.36,369.24L609.47,370.05L607.6,368.91L604.27,363.72L601.95,361.81L600.59,361.31L598.86,361.56L597.37,362.86L596.12,364.56L593.73,368.63L592.15,370.55L590.31,371.95L588.38,372.58L581.98,373.35L579.74,373.92L577.55,374.82L575.36,376.16L566.97,384.15L564.99,385.71L552.27,392.29L550.24,392.84L548.19,393.02L546.13,392.56L544.25,391.65L542.59,390.09L541.56,388.16L540.17,381.63L536.27,312.48L535.64,309.74L534.45,306.63L531.9,302.16L529.59,299.31L529.4,299.23L529.29,299.07L529.18,297.73L530.63,259.91L527.36,227.72L525.02,220.34L522.44,214.38L502.59,183.15L501.1,184.08L498.93,184.48L497.86,185.16L496.32,187.49L495.38,188.64L494.49,189.51L494.06,190.59L493.47,193.04L492.64,194.12L491.51,194.85L489.34,195.52L488.6,196.05L486.49,196.96L483.01,198.95L477.06,201.47L468.61,203.27L466.39,202.55L464.38,200.82L462.92,196.45L462.39,193.54L462.2,191.01L461.67,188.9L460.5,186.79L458.03,184.43L455.85,182.9L453.6,181.81L441.14,177.74L437.2,177.22L433.02,177.48L428.52,178.35L418.98,181.17L416.8,181.31L414.78,181.14L405.53,178.74L405.18,175.27L405.34,168.64L411.25,124.1L421.57,92.82L413.55,95.36L411.02,97.01L410.65,97.86L410.71,98.84L412.56,102.21L412.34,104.25L411.68,105.01L409.08,105.81L404.35,108.57L403.08,109.95L401.44,112.94L400.56,113.55L396.98,114.61L393.54,121.32L391.75,122.01L379.76,122.86L360.47,121.83L349.16,122.72L345.18,123.91L342.21,125.67L338.77,129.3L334.7,132.72L332.16,134.45L328.95,135.99L310.56,136.69L263.57,133.45L185.03,145.66L173.6,146.29L163.99,147.74L165.32,151.08L171.85,159.03L173.32,162.96L172.35,165.7L169.97,167.98L166.88,169.77L163.84,171.03L162.77,167.12L161.1,165.08L158.63,164.31L155.15,164.19L152.94,165.35L151.66,168.06L150.35,173.71L147.44,180.34L146.83,182.57L146.59,185.17L147.47,187.37L154.61,193.83L152.65,194.97L151.04,194.81L149.51,194.16L147.8,193.83L145.02,194.23L143.33,194.88L141.87,195.7L139.78,196.52L134.85,197.83L119.36,199.43L116.06,200.44L113.53,200.66L112.24,200.01L109.23,197.16L108.18,196.52L103.15,196.78L98.66,197.57L90.07,200.66L82.38,197.31L75.03,197.73L68.46,200.97L63.21,206.03L60.27,211.63L57.99,213.42L53.2,214.08L50.75,213.59L48.87,212.66L46.97,212.12L44.52,212.74L43.04,214.13L39.05,220.79L36.41,224.06L32.84,227.9L29.69,232.41L28.35,239.02L29.83,241.72L33.09,243.38L36.34,245.56L38.96,253.64L44.21,260.36L45.84,263.83L45.57,267.55L44,270.96L40.5,276.03L37.4,286.03L34.09,291.59L30.48,300.32L29.04,306.82L27.19,309.39L24.94,311.89L23.01,314.91L22.23,318.51L22.85,321.59L23.91,324.58L24.45,327.83L24.04,332.78L22.77,336.65L20.6,339.98L3.55,357.44L0.83,361.62L0.49,365.68L2.96,374.13L5.52,390.82L7.45,397.76L12.19,403.73L25.07,413.9L28.26,417.64L38.18,432.2L42.35,441.13L43.18,444.9L43.71,453.8L44.87,457.94L47.07,461.58L50.32,463.66L59.89,467.63L67.36,472.42L68.07,473.84L69.05,477.27L70.61,480.17L70.78,480.87L71.03,481.54L71.91,482.52L72.86,482.93L74.97,483.21L75.38,483.8L76.14,484.17L80.22,486.54L83.43,490.18L83.14,493.64L80.17,499.42L80.2,500.7L80.62,503.13L80.51,504.45L79.52,507.99L79.4,509.62L79.8,511.67L80.65,513.99L81.31,514.99L82.27,515.81L83.93,516.5L89.46,517.64L92.75,519.48L92.8,519.51L98.87,522.9L101.01,523.5L102.81,523.23L104.72,519.38L107.24,519.87L109.74,521.36L110.86,522.21L112.44,522.28L113.98,522.56L115.14,523.15L115.6,524.16L116.28,525.03L117.74,524.2L119.13,522.87L119.61,522.21L125.15,520.78L126.51,519.06L126.3,515.51L132.48,518.19L137.71,519.8L142.94,518.91L149.14,514.06L154,524.08L154.61,526.83L154.15,533.64L153.87,534.87L152.25,537.32L152.69,538.95L153.91,540.56L154.61,542.9L154.36,545.23L153.3,549.27L153.14,551.67L153.59,553.82L155.69,558.35L155.15,560.73L153.88,562.29L153.52,563.57L155.69,565.16L157.65,565.49L159.6,564.86L161.31,563.72L162.63,562.5L163,563.09L163.04,563.26L163.17,563.36L163.84,563.71L160.85,569.46L162.63,573.04L166.01,576.15L167.84,580.5L168.05,582.01L168.99,584.49L169.19,585.97L168.55,586.77L165.81,586.63L165.18,587.32L165.53,589.69L166.09,591.4L166.21,592.94L165.18,594.75L163.58,597.3L166.08,598.74L172.59,599.43L173.53,602.33L171.39,605.09L168.34,607.52L166.52,609.47L169.12,619.61L169.92,621.63L171.48,622.46L172.11,624.31L172.98,626.14L175.33,626.98L177.16,626.57L181.09,624.73L183.4,624.31L184.77,625.59L181.39,632.65L182.68,636.35L183.33,635.9L190.03,634.89L191.92,635.81L191.48,637.94L190.13,640.42L189.36,642.37L190.38,644.93L195.44,650.28L197.38,653.87L198.56,661.59L200.12,662.74L204.18,660.44L205.51,662.95L204.98,665.26L204.05,667.82L204.18,671.15L205.13,672.92L210.08,678.68L210.43,680.11L209.4,686.72L210.67,688.54L213.43,687.59L217.43,684.65L219.05,686.46L218.79,688.6L217.83,690.77L217.43,692.67L218.06,695.36L218.98,697.08L222.23,700.09L223.17,702L222.82,704.03L221.56,706.85L223.06,710.4L230.06,716.52L232.25,720.89L232.14,727.95L232.98,729.7L234.8,730.61L239.31,731.45L241.06,732.38L243.54,736.19L245.47,744.83L246.96,749.1L248.38,754.94L267.23,781.65L272.59,783.85L291.79,784.16L299.17,788.01L300.26,789.68L301.65,791.02L303.3,792.01L307.41,793.33L309.13,794.72L310.32,796.62L310.96,798.89L321.15,802.6L324.01,803.18L327.66,802.8L333.41,801.39L337.17,801.83L340.95,803.43L347.99,807.93L351.69,809.49L354.79,809.85L364.22,809.29L376.85,812.57L389.11,817.51L401.44,820.07z",
  Para: "M593.39,67.84L583.55,64.89L578.59,64.65L557.67,68.71L551.08,68.89L532.12,66.69L533.21,68.71L533.68,70.03L533.63,71.37L532.73,72.49L530.81,73.4L527.51,74.2L525.26,75.78L524.79,77.09L525.48,78.25L526.53,79.3L527.25,80.58L527.47,81.99L526.87,83.43L525.73,84.74L524.09,86.2L523.52,87.61L522.99,90.4L521.67,93.01L521.74,94.3L522.6,95.65L525.52,97.96L526.42,99.19L526.56,100.46L526.19,101.87L525.3,103.27L524.37,104.49L523.89,105.69L523.61,108.15L523.04,109.21L521.57,110.12L518.65,111.43L516.97,111.42L515.9,112.53L515.5,113.69L514.87,114.75L513.82,115.14L512.46,114.12L511.35,113.09L510.15,112.46L508.58,113.07L507.38,113.88L505,114.51L445.51,119.18L437.8,117.13L435.38,116.99L426.56,119.29L424.87,118.92L423.44,117.86L423.01,114.69L422.19,112.25L422.23,109.55L423.68,106.29L425.6,104.35L426.76,102.33L426.91,100.35L424.9,98.26L424.12,95.82L421.57,92.82L411.25,124.1L405.34,168.64L405.18,175.27L405.53,178.74L414.78,181.14L416.8,181.31L418.98,181.17L428.52,178.35L433.02,177.48L437.2,177.22L441.14,177.74L453.6,181.81L455.85,182.9L458.03,184.43L460.5,186.79L461.67,188.9L462.2,191.01L462.39,193.54L462.92,196.45L464.38,200.82L466.39,202.55L468.61,203.27L477.06,201.47L483.01,198.95L486.49,196.96L488.6,196.05L489.34,195.52L491.51,194.85L492.64,194.12L493.47,193.04L494.06,190.59L494.49,189.51L495.38,188.64L496.32,187.49L497.86,185.16L498.93,184.48L501.1,184.08L502.59,183.15L509.32,175.43L518.82,168.4L525.32,161.78L532.28,150.28L532.98,148.49L533.11,147.19L532.83,145.95L532.02,144.77L531.02,143.55L530.12,141.82L530.54,139.88L532.48,137.08L537.57,136.05L596.01,135.54L599.99,136.17L601.34,137.66L602.22,139.52L602.86,151.41L603.37,153.55L604.58,155.54L606.37,157.19L616.72,164.3L618.57,166.02L620.1,167.99L621.21,169.98L621.89,172.07L622.11,174.15L621.2,178.25L621.24,180.08L622.28,181.87L623.76,183.26L625.3,185.02L625.93,186.92L626.23,188.92L626.26,196.78L625.61,199.89L625.46,201.41L626,202.87L627.32,203.85L628.58,203.83L630.18,202.71L633.47,193.39L635.43,182.05L639.6,167L640.42,165.55L641.83,163.68L648.78,157.55L649.97,155.8L652.37,149.46L663.92,127.27L665.81,124.4L668.62,125.32L675.07,116.21L676.11,114.12L676.92,112.03L677.45,109.63L677.76,106.96L677.84,102.79L676.82,96.01L673.89,89L599.02,94.48L595.1,94.35L591.44,93.18L591.82,82.16L591.66,80.15L591.04,79.3L590.28,78.93L590.36,78.13L590.61,77.23L590.37,76.62L589.17,76.56L587.94,77.08L586.92,77.71L586.36,77.96L584.4,77.67L583.66,78.02L583.59,77.84L583.68,75.95L584.1,75.52L586.36,71.25L593.39,67.84z",
  Marowijne: "M763.37,130.48L763.37,130.48L771.68,117.52L772.85,113.76L773.65,111.92L775.48,109.94L778.87,106.97L782.43,102.66L784.88,98.13L786.98,90.42L789.71,75.19L790.74,67.36L792.97,63.49L797.64,54.53L799.51,52.33L798.39,48.82L793.65,39.73L793.97,37.68L792.84,35.69L790.78,34.91L789.65,33.31L784.7,33.66L782.27,32.81L777.77,32.33L763.69,28.28L747.37,22.98L728.59,19.25L704.48,13.9L664.98,8.34L658.84,7.24L657.85,9.64L656.47,13.88L657.89,29.58L656.54,32.38L652.72,36.96L651.92,39.16L651.69,41.6L652.28,46.68L652.58,48.17L654.21,52.42L655.74,55.53L657.42,61.41L658.95,64.74L665,73.73L669.04,81.9L673.89,89L676.82,96.01L677.84,102.79L677.76,106.96L677.45,109.63L676.92,112.03L676.11,114.12L675.07,116.21L668.62,125.32L704.24,138.71L706.92,140.13L717.82,147.59L724.84,150.01L727.61,151.31L729.38,152.37L733.98,157.11L734.07,157.2L735.89,154.58L744.15,146.07L759.55,134.93L763.37,130.48z",
  Brokopondo: "M627.32,203.85L626,202.87L625.46,201.41L625.61,199.89L626.26,196.78L626.23,188.92L625.93,186.92L625.3,185.02L623.76,183.26L622.28,181.87L621.24,180.08L621.2,178.25L622.11,174.15L621.89,172.07L621.21,169.98L620.1,167.99L618.57,166.02L616.72,164.3L606.37,157.19L604.58,155.54L603.37,153.55L602.86,151.41L602.22,139.52L601.34,137.66L599.99,136.17L596.01,135.54L537.57,136.05L532.48,137.08L530.54,139.88L530.12,141.82L531.02,143.55L532.02,144.77L532.83,145.95L533.11,147.19L532.98,148.49L532.28,150.28L525.32,161.78L518.82,168.4L509.32,175.43L502.59,183.15L522.44,214.38L525.02,220.34L527.36,227.72L530.63,259.91L529.18,297.73L529.29,299.07L529.4,299.23L529.59,299.31L531.9,302.16L534.45,306.63L535.64,309.74L536.27,312.48L540.17,381.63L541.56,388.16L542.59,390.09L544.25,391.65L546.13,392.56L548.19,393.02L550.24,392.84L552.27,392.29L564.99,385.71L566.97,384.15L575.36,376.16L577.55,374.82L579.74,373.92L581.98,373.35L588.38,372.58L590.31,371.95L592.15,370.55L593.73,368.63L596.12,364.56L597.37,362.86L598.86,361.56L600.59,361.31L601.95,361.81L604.27,363.72L607.6,368.91L609.47,370.05L611.36,369.24L612.79,367.6L613.68,365.58L615.03,361.26L616.02,359.01L621.17,350.33L625.53,338.56L625.86,336.85L625.81,332.59L625.5,330.56L622.03,320.17L621.11,315.85L620.85,313.55L620.84,311.1L621.14,308.89L622.15,306.46L623.72,304.32L630.31,298.32L633.98,294.11L635.29,291.96L636.18,289.77L636.95,285.24L636.6,267.91L636.79,265.72L637.42,263.65L640.46,257.66L641.1,255.51L641.66,251.04L642.11,248.94L642.96,246.82L645.23,242.51L646.14,240.2L646.66,237.84L646.94,232.98L647.41,230.73L648.4,228.66L650.98,224.56L651.75,222.51L651.95,220.51L651.57,218.37L650.96,216.78L648.65,212.62L643.35,207.83L630.18,202.71L628.58,203.83L627.32,203.85z",
  Nickerie: "M180.72,61.61L179.82,59.37L179.83,57.13L178.93,53.4L179.68,50.71L180.58,48.17L181.18,44.58L181.19,41.15L180.89,39.8L179.39,42.79L178.64,45.03L178.19,46.82L176.4,50.11L175.5,52.8L176.99,56.38L178.33,59.37L179.37,61.91L180.27,62.51L180.72,61.61zM218.02,0L216.59,0.48L214.49,2.65L212.51,3.01L210.59,3.72L209.49,4.64L207.01,7.42L206.1,8L205.07,8.39L204.05,9.28L202.7,10.17L198.22,10.96L196.59,12.1L195.49,13.85L194.68,16.06L189.49,24.64L187.23,30.06L184.89,38.07L184.46,42.99L183.11,49.53L182.18,68.18L177.47,89.44L176.2,92.24L174.37,94.65L171.73,96.78L165.45,99.18L163.7,100.86L161.03,103.63L159.21,107.72L158.6,110.85L158.37,115.07L157.59,119.67L155.58,122.81L146.06,132.4L144.46,134.51L143.79,136.67L144.57,138.49L146.31,138.49L149.14,137.34L151.11,137.82L152.34,137.76L152.97,138.31L153.27,152.04L153.63,153.59L154.61,154.67L156.33,155.16L158.02,154.93L159.31,154.09L159.83,152.78L157.83,150.4L156.81,148.5L157.16,146.62L158.81,145.65L161.03,145.54L163,146.14L163.84,147.35L163.99,147.74L173.6,146.29L185.03,145.66L263.57,133.45L310.56,136.69L312.66,134.39L314.08,133.47L314.98,131.67L314.93,129.84L313.93,127.92L312.58,124.59L311.45,122.45L309.87,120.38L308.6,119.68L307.48,119.8L306.6,120.47L305.89,121.76L305.29,124.69L304.8,125.67L303.6,126.1L301.86,125.4L298.74,124.69L297.36,124.14L297.14,123.29L297.57,122.09L298.32,120.87L298.48,118.7L299.32,117.48L300.28,116.48L301.36,115.09L302.25,113.21L302.44,110.45L301.9,108.55L300.93,106.97L294.45,100.3L293.72,98.31L294.02,97.11L295.1,96.95L296.41,97.19L297.64,97.04L298.78,96.18L299.79,95.12L300.93,94.16L302.16,93.9L303.45,94.32L305.77,95.73L306.78,95.57L307.36,94.65L307.81,92.2L307.43,90.2L306.97,88.86L299.8,80.17L294.87,70.17L294.4,68.08L294.02,63.6L293.23,61.83L291.07,58.48L288.06,51.77L287.5,46.81L287.13,13.96L287.1,12.06L285.59,11.4L279.52,7.55L276.17,6.27L267.73,5.78L252.44,5.13L242.73,5.12L235.56,4.32L223.45,1.44L218.02,0z"
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

// src/Suriname.tsx
var import_react3 = require("react");
var Suriname = ({
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
    return /* @__PURE__ */ import_react2.default.createElement(
      SurinameSingle,
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
    return /* @__PURE__ */ import_react2.default.createElement(
      SurinameMultiple,
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
var SurinameSingle = ({
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
  const [stateHovered, setStateHovered] = (0, import_react3.useState)(null);
  const [selectedState, setSelectedState] = (0, import_react3.useState)(null);
  (0, import_react2.useEffect)(() => {
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
  return /* @__PURE__ */ import_react2.default.createElement(import_react2.default.Fragment, null, /* @__PURE__ */ import_react2.default.createElement("div", { className: "map", style: mapStyle }, /* @__PURE__ */ import_react2.default.createElement("svg", { version: "1.1", id: "svg2", x: "0px", y: "0px", viewBox }, stateCode?.map((stateCode2, index) => /* @__PURE__ */ import_react2.default.createElement(
    "path",
    {
      key: index,
      onClick: () => handleClick(stateCode2),
      onMouseEnter: () => handleMouseEnter(stateCode2),
      onMouseLeave: () => handleMouseLeave(stateCode2),
      id: stateCode2,
      d: drawPath[stateCode2]
    }
  )))), hints && /* @__PURE__ */ import_react2.default.createElement("div", null, stateHovered && /* @__PURE__ */ import_react2.default.createElement(
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
var SurinameMultiple = ({
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
  const [selectedStates, setSelectedStates] = (0, import_react3.useState)([]);
  const { x, y } = mouseTrack_default();
  const [stateHovered, setStateHovered] = (0, import_react3.useState)(null);
  (0, import_react2.useEffect)(() => {
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
  return /* @__PURE__ */ import_react2.default.createElement(import_react2.default.Fragment, null, /* @__PURE__ */ import_react2.default.createElement("div", { className: "map", style: mapStyle }, /* @__PURE__ */ import_react2.default.createElement("svg", { version: "1.1", id: "svg2", x: "0px", y: "0px", viewBox }, stateCode?.map((stateCode2, index) => /* @__PURE__ */ import_react2.default.createElement(
    "path",
    {
      key: index,
      onClick: () => handleClick(stateCode2),
      onMouseEnter: () => handleMouseEnter(stateCode2),
      onMouseLeave: () => handleMouseLeave(stateCode2),
      id: stateCode2,
      d: drawPath[stateCode2]
    }
  )))), hints && /* @__PURE__ */ import_react2.default.createElement("div", null, stateHovered && /* @__PURE__ */ import_react2.default.createElement(
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
var Suriname_default = Suriname;

// src/index.ts
var src_default = Suriname_default;
