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

// src/Sierraleone.tsx
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
var stateCode = ["Eastern", "Northern", "Western", "Southern"];
var drawPath = {
  Eastern: "M662.14,282.18L660.11,282.02L658.5,281.56L654.98,279.61L637.58,267.26L637.46,267.19L634.7,265.08L632.84,263.24L627.91,257.08L624.22,253.45L622.51,252.65L620.09,252.01L593.04,248.48L591.07,248.75L589.15,249.34L586.61,250.46L585.08,251.4L583.9,252.41L583.07,253.41L580.22,257.88L579.18,260.48L578.48,263.45L578.13,268.75L577.94,270.08L577.5,271.44L576.9,272.67L575.39,274.83L573.55,276.67L565.76,281.87L563.29,283.1L543.96,289.92L541.6,291.2L540.73,292.19L540.05,293.34L535.17,308.39L532.36,314.76L531.68,315.85L530.04,317.87L527.77,319.8L521.67,323.8L520.41,324.89L519.64,325.91L519.15,327.05L520.29,338.44L520.13,345.12L520.37,346.53L520.85,347.78L522.27,350.08L522.9,351.38L523.23,352.79L523.25,354.36L522.68,357.35L520,365.54L519.4,368.38L519.56,369.79L520.08,371.04L521.61,373.12L522.16,374.34L522.43,375.52L522.43,376.8L522.32,377.63L518.9,388.15L517.37,391.22L515.85,393.28L514.44,394.2L512.97,394.52L511.82,394.02L510.82,393.24L509.92,392.32L508.89,391.6L507.66,391.13L506.32,391.01L504.95,390.68L503.8,390.06L501.85,388.35L500.74,387.68L499.45,387.28L497.96,387.36L484.68,390.71L483.04,390.79L481.63,390.68L480.18,390.36L476.17,388.98L474.4,388.73L472.32,388.77L469.27,389.23L467.49,389.89L466.03,390.64L461.74,393.73L455.97,399.03L458.75,410.27L460.77,413.94L463.1,415.94L466.93,420.45L467.83,422.51L468.19,424.3L467.8,428.77L468.05,432.99L468.72,435.15L469.53,436.79L475.19,442.13L476.33,442.82L480.91,447.24L492.18,461.92L510.22,479.93L511.97,482.54L512.79,484.31L512.71,485.6L512.54,486.58L512.56,487.84L512.79,489.26L513.16,490.72L519.63,508.74L520.65,514.14L520.85,524.28L521.79,531.45L521.89,534.41L521.58,537.35L520.13,543.03L519.03,545.57L518.32,546.67L517.48,547.67L516.51,548.52L514.39,549.92L511.23,553.52L510.31,554.41L493.22,566.81L492.51,567.88L491.96,569.18L489.28,581.47L489.13,588.04L489.41,590.24L489.89,591.63L490.62,591.46L491.38,590.69L495.27,585.53L496.09,584.74L496.88,584.31L497.48,584.87L501.93,596.31L502.24,598.21L501.98,599.8L501.44,600.98L500.96,602.34L499.95,608.54L498.93,611.15L497.54,613.36L496.58,614.25L495.43,614.96L494.12,615.21L492.9,614.92L492.12,613.96L491.07,611.31L490.43,610.15L489.65,609.38L488.68,609.33L487.68,609.82L479.13,615.94L471.78,620.23L471.91,620.84L472.76,621.4L475.46,622.48L476.84,625.94L478.28,632.1L479.4,646.53L480.44,652.33L481.7,655.61L482.99,656.08L484.22,656.69L485.56,657.06L487.03,657.06L488.35,656.61L489.54,655.94L490.59,655.16L496.45,649.82L504.79,639.88L506.89,638.38L509.38,637.15L510.86,636.93L512.39,637.01L513.82,637.36L515.03,637.96L516.11,638.71L517.06,639.61L521.01,644.99L520.55,645.83L514.44,652.27L513.9,654.31L513.62,657.16L514.54,669.12L514.38,670.79L514.39,676.44L515.07,682.71L514.8,688.67L515.31,689.88L516.35,690.64L519.23,691.38L522.43,691.78L525.93,691.89L529.11,692.29L536.03,694.28L545.03,698.03L551.92,702.04L571.23,709.74L571.37,709.79L576.1,703.7L615.39,672.5L626.2,666.4L636.27,664.07L639.79,662.55L642.73,660.23L645.53,656.81L680.85,613.61L690.9,605.03L703.39,598.23L705.32,597.57L711.39,596.63L710.73,532.03L711.12,528.9L712.2,526.4L714.58,524.43L721.28,520.7L724.1,518.02L730.24,506.56L734.14,501.69L740.36,498.6L745.65,497.79L767,497.68L772.43,496.92L777.63,495.29L782.76,492.31L789.27,485.96L790.01,481L787.93,475.68L786,468.14L786.53,462.11L791.2,451.93L799.34,419.13L799.51,405.3L796.48,405.72L794.22,404.97L792.1,403.77L784.87,401.58L783.09,401.44L775.03,402.59L771.05,404.11L767.71,406.27L764.62,409.17L762.05,412.81L755.65,425.91L752.41,430.05L736.78,445.39L727.49,451.53L722.65,453.47L719.84,452.85L712.26,447.94L708.34,446.27L699.59,445.8L692.08,448.26L686.85,453.86L684.92,462.83L679.6,458.1L682.32,449.39L688.41,440.37L693.23,434.67L697.12,428.19L700.94,405.07L703.8,404.7L704.54,402.59L704.51,399.41L705.13,395.86L706.97,392.62L711.05,388.74L715.27,380.94L719.47,375.27L724.56,371L729.92,369.94L736.02,369.45L741,365.97L744.61,360.76L746.68,355.02L735.33,339.74L733.88,337.16L729.88,334.25L719.04,319.78L718.3,319.1L716.4,317.86L715.49,316.75L715.36,315.78L715.64,312.94L715.57,311.75L713.17,304.18L712.73,301.5L712.26,281.99L713.52,272.69L717.59,256.82L717.48,256.13L717.37,256.12L707.19,255.8L702.57,256.84L686.61,267.17L686.51,267.3L686.43,267.59L686.29,268.3L686.62,269.15L687.36,270L688.45,270.75L693.32,273.34L694.05,274.51L694.11,276.02L692.47,278.82L690.87,279.98L689.08,280.69L685.66,280.92L682.38,280.69L676.37,279.48L674.77,279.43L673.06,279.65L665.23,281.87L662.14,282.18z",
  Northern: "M537.37,0L490.65,0.26L481.2,0.31L454.03,0.46L368.65,0.94L367.37,17.34L365.56,19.83L315.79,30.72L307.45,32.55L302.95,32.35L298.58,31.39L293.6,29.54L287.32,25.65L282.5,21.3L277.74,18.16L271.61,17.94L231.84,26.44L219.84,30.83L210.31,36.44L208.73,38.88L208.55,40.55L208.89,42.36L208.91,45.19L205.3,65.12L205.47,65.92L206.46,68.93L206.57,70.26L205.75,70.91L204.39,70.7L203.07,70.71L202.55,72.02L202.6,75.3L202.26,76.32L201.4,76.48L193.18,81.52L190.75,83.99L186.43,91.64L185.64,92.48L185.32,103.85L184.24,106.18L182.12,106.34L179.54,106.02L177.09,106.94L175.85,109.21L173.54,118.01L172.84,119.22L172.27,119.94L171.42,120.39L169.92,120.85L167.89,121.84L167.72,122.95L168.24,124.16L168.18,125.5L159.16,154.61L157.94,156.3L156.11,157.85L155.23,158.85L154.54,160.48L153.51,162.16L152.21,161.88L150.86,160.98L149.73,160.78L145.27,163.31L143.77,164.64L141.64,167.46L141.7,169.59L142.76,172.02L142.6,174.08L138.96,175.1L134.37,177.45L128.05,187.99L123.63,191.7L118.06,192.63L112.97,192.27L107.8,192.63L102.01,195.71L96.85,190.33L91.32,194.26L87.13,202.53L85.91,210.23L87.08,212.93L90.71,217.41L90.99,219.62L90.03,219.93L85.88,220.33L84.37,221.1L81.82,224.75L79.64,228.66L76.14,237.07L72.54,241.56L67.74,244.63L57.53,249.61L49.5,255.51L45.49,256.18L39.46,254.07L29.42,247.73L25.25,246.73L18.34,247.98L6.76,251.59L0.49,256.17L0.49,257.83L4.74,262.72L3.83,275.47L9.52,280.13L10.16,278.57L10.75,277.67L11.23,276.59L12.72,276.3L16.6,280.13L16.66,278.07L16.94,277.64L17.53,277.5L18.56,276.3L20.43,282.69L25.62,286.48L32.28,287.91L38.44,287.27L49.71,283.2L55.69,282.12L60.3,283.6L60.3,285.61L54.3,285.92L47.72,287.12L42.42,289.6L39.8,294.86L38.92,295.33L38.24,296.15L38.44,298.25L39.44,298.56L41.35,298.52L43.19,299.06L44.03,301.07L45.68,303.71L49.52,304.16L53.75,303.35L56.68,302.07L59.86,303.53L64.77,304.49L69.3,304.47L71.3,302.99L73.04,302.2L83.96,305.57L68.78,305.24L61.16,306L55.78,308.38L51.56,309.07L31.22,309.22L29.05,307.53L28.16,305.78L27,304.85L24,305.57L16.6,313.95L17.92,342.32L16.6,342.46L16.12,350.7L16.34,355.1L17.57,358.01L20.05,361.13L22.77,365.71L24.9,370.59L26.58,378.45L28.55,382.68L35.57,394.44L37.19,396.47L39.34,397.29L42.04,396.53L43.32,394.64L43.33,392.25L42.22,390L47.85,385.25L51.73,379.51L51.32,373.53L44.03,368.06L47.65,366.24L43.35,364.77L39.34,362.9L37.15,359.97L38.44,355.42L39.41,358.33L40.89,360.13L42.96,360.44L45.68,358.92L50.49,365.34L54.24,368.56L58.49,369.89L61.49,368.54L63.36,365.34L65.87,357.09L67.52,357.09L68.36,358.89L69.3,359.89L70.75,360.37L73.11,360.75L73.11,362.58L68.44,365.49L65.77,369.35L62.64,372.59L56.68,373.7L59.41,377.36L63.81,378.92L68.55,378.52L75.4,374.38L78.89,374.38L82.86,375.14L87.57,375.38L97,372.55L102.17,367.03L106.42,359.74L113.03,351.61L103.49,372.59L98.4,379.02L98.62,378.86L99.21,381.87L104.18,382.32L109.81,381.63L114.67,382.68L112.21,383.83L106.91,387.55L104.74,388.33L101.8,388.01L96.82,386.64L79.31,385.38L76.72,384.67L75.11,386.97L73.78,389.63L73.01,392.57L73.11,395.65L69.61,394.03L67.5,395.55L65.88,398.46L63.9,401.13L60.51,403.02L52.56,406.1L49.44,408.42L46.94,414.82L50.81,418.9L58.11,421.42L65.87,423.22L65.87,425.04L62.26,425.04L63.28,428.17L65.29,430.31L68.07,431.63L71.3,432.35L71.3,434.18L68.95,434.53L68.94,434.53L69.82,434.98L74.26,435.44L77.07,437.33L78.8,438.9L95.28,442.13L99.23,443.33L101.71,444.66L102.27,445.86L102.45,447.41L102.12,452.32L102.98,456.05L106.52,461.51L110.95,456.34L113.98,453.81L118.42,449.12L121.35,444.74L122.98,442.72L124.38,440.48L125.56,437.98L126.25,436.85L127.09,435.92L128.84,435.22L131.33,434.94L136.26,435.52L138.75,436.21L140.47,437.1L141.36,438.07L142.11,439.2L142.66,440.44L143.33,441.63L144.22,442.57L145.69,442.93L147.58,442.68L153.04,439.95L155.41,439.48L171.22,439.25L172.78,439.5L174.09,440.03L175.16,440.75L175.92,441.83L176.55,443.06L177.95,444.12L180.27,444.73L185.13,444.66L189.79,445.25L192.34,446.33L193.43,447.11L194.28,448.07L194.54,449.57L194.63,452.75L194.93,454.23L195.4,455.59L196.14,456.73L197.04,457.64L198.89,458.15L219.06,459.27L220.24,459.88L221.28,460.68L221.99,461.81L222.56,463.09L223.55,463.94L225.01,464.16L227.57,462.84L228.91,461.55L229.77,460.06L231.43,456.23L232.25,455.23L233.16,454.35L234.31,453.64L242.38,450.15L244.8,448.57L246.38,447.33L248.3,445.42L250.11,444.73L252.65,444.26L260.18,444.07L262.23,444.42L263.47,444.99L264.64,445.67L266.28,445.9L268.52,445.59L276.07,442.3L277.88,441.81L280.17,441.52L284.03,441.56L289.34,442.32L291.2,443L307.38,452.14L320.41,457.28L321.47,458.04L322.25,459.1L323.78,463.2L324.41,464.41L325.99,466.51L326.96,467.38L328.05,468.13L329.41,468.54L330.92,468.71L333.57,469.3L334.58,469.28L335.6,467.78L336.14,464.87L336.17,463.5L335.9,462.13L334.94,459.49L334.26,458.44L333.13,457.92L332.07,457.22L331.27,456.23L328.73,451.34L328.31,450.05L328.24,448.68L328.54,447.31L329.14,446.14L333.87,439.82L334.58,439.07L335.98,439.14L337.73,439.06L340.16,438.09L344.39,437.9L347.74,438.7L349.33,438.67L351.19,438.12L353.92,436.67L355.81,436.17L357.66,436.74L362.38,439.67L372.42,442.3L379.08,442.79L386.12,442.32L390.96,440.94L403.35,435.56L405.11,434.39L411.27,428.6L413.08,426.26L414.21,424.21L415.5,418.24L416.01,411.59L416.27,410.03L416.87,408.81L417.69,407.81L419.22,406.79L424.99,404.13L427.96,403.39L431.09,402.94L446.08,403.75L450.02,403L455.97,399.03L461.74,393.73L466.03,390.64L467.49,389.89L469.27,389.23L472.32,388.77L474.4,388.73L476.17,388.98L480.18,390.36L481.63,390.68L483.04,390.79L484.68,390.71L497.96,387.36L499.45,387.28L500.74,387.68L501.85,388.35L503.8,390.06L504.95,390.68L506.32,391.01L507.66,391.13L508.89,391.6L509.92,392.32L510.82,393.24L511.82,394.02L512.97,394.52L514.44,394.2L515.85,393.28L517.37,391.22L518.9,388.15L522.32,377.63L522.43,376.8L522.43,375.52L522.16,374.34L521.61,373.12L520.08,371.04L519.56,369.79L519.4,368.38L520,365.54L522.68,357.35L523.25,354.36L523.23,352.79L522.9,351.38L522.27,350.08L520.85,347.78L520.37,346.53L520.13,345.12L520.29,338.44L519.15,327.05L519.64,325.91L520.41,324.89L521.67,323.8L527.77,319.8L530.04,317.87L531.68,315.85L532.36,314.76L535.17,308.39L540.05,293.34L540.73,292.19L541.6,291.2L543.96,289.92L563.29,283.1L565.76,281.87L573.55,276.67L575.39,274.83L576.9,272.67L577.5,271.44L577.94,270.08L578.13,268.75L578.48,263.45L579.18,260.48L580.22,257.88L583.07,253.41L583.9,252.41L585.08,251.4L586.61,250.46L589.15,249.34L591.07,248.75L593.04,248.48L620.09,252.01L622.51,252.65L624.22,253.45L627.91,257.08L632.84,263.24L634.7,265.08L637.46,267.19L637.58,267.26L654.98,279.61L658.5,281.56L660.11,282.02L662.14,282.18L665.23,281.87L673.06,279.65L674.77,279.43L676.37,279.48L682.38,280.69L685.66,280.92L689.08,280.69L690.87,279.98L692.47,278.82L694.11,276.02L694.05,274.51L693.32,273.34L688.45,270.75L687.36,270L686.62,269.15L686.29,268.3L686.43,267.59L686.51,267.3L686.61,267.17L702.57,256.84L707.19,255.8L717.37,256.12L717.48,256.13L717.24,254.53L716.97,252.79L713.82,250.2L707.64,248.44L697.12,247.34L686.18,247.73L676.68,244.83L674.79,235.1L677.67,223.52L682.39,215.15L684.98,213.32L687.95,211.99L690.75,210.23L692.86,207.11L693.2,204.63L692.13,200.08L692.1,197.78L693.32,194.42L694.85,191.45L695.87,188.48L695.52,185.13L684.24,175.24L681.48,173.94L677.95,171.56L674.79,168.74L671.61,164L669.15,163.44L666.34,163.46L663.74,163.12L662.03,163.45L657.35,163.24L654.07,162.15L656.61,159.8L659.44,157.82L658.92,156.31L654.78,153.61L650.84,149.24L647.95,145.21L646.83,140.45L648.27,133.78L648.55,129.96L646.54,128.23L643.79,126.93L641.91,124.44L640.55,117.06L639.62,114.85L637.05,112.19L630.27,107.47L628.31,104.84L626.53,97.8L625.38,95.71L623.66,94.33L619.35,92.73L617.88,91.8L616.26,89.24L613.16,80.12L606.86,68.04L597.65,56.12L586.79,45.63L567.12,33.12L565.16,29.97L561.56,12.26L559.64,6.29L556.71,3.72L553.04,3.4L544.08,0.7L537.37,0z",
  Western: "M68.94,434.53L64.2,435.25L57.5,430.5L51.06,424.41L41.96,419.59L36.54,410.56L33.18,406.77L29.1,404.46L24.39,402.96L19.59,402.87L15.11,404.79L13.92,402.5L13.3,401.85L11.49,402.96L9.91,401.99L4.28,401.13L5.35,403.61L8.8,408.65L9.52,411.17L9.1,414.6L7.94,416.74L4.28,421.39L7.61,422.36L9.23,424.88L10.39,427.5L12.31,428.69L19.03,437.62L20.38,440.47L20.93,442.49L22.18,443.01L23.41,443.17L24,444.13L24.52,444.25L33.69,459.04L36.79,461.56L35.5,464.59L35.64,467.88L36.79,473.52L37.37,484.88L36.79,489.12L38.44,489.12L42.4,484.18L48.97,479.09L56.24,474.87L62.26,472.53L73.94,470.7L76.11,470.83L77.37,471.03L78.5,471.09L80.33,470.7L82.28,469.72L83.65,468.54L85.18,467.51L87.57,467.04L86.47,469.01L86.53,468.97L86.96,468.64L99.93,465.53L102.9,464.33L106.52,461.51L102.98,456.05L102.12,452.32L102.45,447.41L102.27,445.86L101.71,444.66L99.23,443.33L95.28,442.13L78.8,438.9L77.07,437.33L74.26,435.44L69.82,434.98L68.94,434.53z",
  Southern: "M187.15,638.37L191.05,633.74L185.87,631.58L180.38,631.17L164.57,632.51L154.58,635.12L150.14,635.75L121.26,635.76L111.07,637.39L107.16,638.9L103.92,642.28L102.86,645.93L92.98,648.33L92.98,650.31L120.08,657.61L142.54,661L151.17,665.46L175.3,671.86L179.15,672.2L184.58,674.17L189.87,679.18L194.51,685.72L198.11,692.4L192.71,692.4L195.11,696.32L199.37,697.93L203.96,697.17L207.32,694.07L207.52,690.74L205.25,681.9L205.52,677.67L207.87,673.34L210.23,670.65L212.04,667.83L212.75,663.08L211.1,655.24L211.36,652.18L214.37,650.31L211.58,646.42L208.45,643.14L204.67,640.75L199.94,639.38L189.74,639.74L187.15,638.37zM483.5,823.36L491.89,819.49L493.94,818.27L493.38,811.51L494.49,806.99L501.74,802.85L504.27,798.46L505.91,793.41L506.5,789.42L505.54,784.05L506.39,782.27L512.16,781.62L514.13,780.91L515.54,779.46L516.07,777.13L515.2,773.78L511.45,767.63L510.75,764.85L511.57,763.84L516.36,759.4L525.58,744.91L530.08,743.98L551.87,734.11L554.15,731.94L571.37,709.79L571.23,709.74L551.92,702.04L545.03,698.03L536.03,694.28L529.11,692.29L525.93,691.89L522.43,691.78L519.23,691.38L516.35,690.64L515.31,689.88L514.8,688.67L515.07,682.71L514.39,676.44L514.38,670.79L514.54,669.12L513.62,657.16L513.9,654.31L514.44,652.27L520.55,645.83L521.01,644.99L517.06,639.61L516.11,638.71L515.03,637.96L513.82,637.36L512.39,637.01L510.86,636.93L509.38,637.15L506.89,638.38L504.79,639.88L496.45,649.82L490.59,655.16L489.54,655.94L488.35,656.61L487.03,657.06L485.56,657.06L484.22,656.69L482.99,656.08L481.7,655.61L480.44,652.33L479.4,646.53L478.28,632.1L476.84,625.94L475.46,622.48L472.76,621.4L471.91,620.84L471.78,620.23L479.13,615.94L487.68,609.82L488.68,609.33L489.65,609.38L490.43,610.15L491.07,611.31L492.12,613.96L492.9,614.92L494.12,615.21L495.43,614.96L496.58,614.25L497.54,613.36L498.93,611.15L499.95,608.54L500.96,602.34L501.44,600.98L501.98,599.8L502.24,598.21L501.93,596.31L497.48,584.87L496.88,584.31L496.09,584.74L495.27,585.53L491.38,590.69L490.62,591.46L489.89,591.63L489.41,590.24L489.13,588.04L489.28,581.47L491.96,569.18L492.51,567.88L493.22,566.81L510.31,554.41L511.23,553.52L514.39,549.92L516.51,548.52L517.48,547.67L518.32,546.67L519.03,545.57L520.13,543.03L521.58,537.35L521.89,534.41L521.79,531.45L520.85,524.28L520.65,514.14L519.63,508.74L513.16,490.72L512.79,489.26L512.56,487.84L512.54,486.58L512.71,485.6L512.79,484.31L511.97,482.54L510.22,479.93L492.18,461.92L480.91,447.24L476.33,442.82L475.19,442.13L469.53,436.79L468.72,435.15L468.05,432.99L467.8,428.77L468.19,424.3L467.83,422.51L466.93,420.45L463.1,415.94L460.77,413.94L458.75,410.27L455.97,399.03L450.02,403L446.08,403.75L431.09,402.94L427.96,403.39L424.99,404.13L419.22,406.79L417.69,407.81L416.87,408.81L416.27,410.03L416.01,411.59L415.5,418.24L414.21,424.21L413.08,426.26L411.27,428.6L405.11,434.39L403.35,435.56L390.96,440.94L386.12,442.32L379.08,442.79L372.42,442.3L362.38,439.67L357.66,436.74L355.81,436.17L353.92,436.67L351.19,438.12L349.33,438.67L347.74,438.7L344.39,437.9L340.16,438.09L337.73,439.06L335.98,439.14L334.58,439.07L333.87,439.82L329.14,446.14L328.54,447.31L328.24,448.68L328.31,450.05L328.73,451.34L331.27,456.23L332.07,457.22L333.13,457.92L334.26,458.44L334.94,459.49L335.9,462.13L336.17,463.5L336.14,464.87L335.6,467.78L334.58,469.28L333.57,469.3L330.92,468.71L329.41,468.54L328.05,468.13L326.96,467.38L325.99,466.51L324.41,464.41L323.78,463.2L322.25,459.1L321.47,458.04L320.41,457.28L307.38,452.14L291.2,443L289.34,442.32L284.03,441.56L280.17,441.52L277.88,441.81L276.07,442.3L268.52,445.59L266.28,445.9L264.64,445.67L263.47,444.99L262.23,444.42L260.18,444.07L252.65,444.26L250.11,444.73L248.3,445.42L246.38,447.33L244.8,448.57L242.38,450.15L234.31,453.64L233.16,454.35L232.25,455.23L231.43,456.23L229.77,460.06L228.91,461.55L227.57,462.84L225.01,464.16L223.55,463.94L222.56,463.09L221.99,461.81L221.28,460.68L220.24,459.88L219.06,459.27L198.89,458.15L197.04,457.64L196.14,456.73L195.4,455.59L194.93,454.23L194.63,452.75L194.54,449.57L194.28,448.07L193.43,447.11L192.34,446.33L189.79,445.25L185.13,444.66L180.27,444.73L177.95,444.12L176.55,443.06L175.92,441.83L175.16,440.75L174.09,440.03L172.78,439.5L171.22,439.25L155.41,439.48L153.04,439.95L147.58,442.68L145.69,442.93L144.22,442.57L143.33,441.63L142.66,440.44L142.11,439.2L141.36,438.07L140.47,437.1L138.75,436.21L136.26,435.52L131.33,434.94L128.84,435.22L127.09,435.92L126.25,436.85L125.56,437.98L124.38,440.48L122.98,442.72L121.35,444.74L118.42,449.12L113.98,453.81L110.95,456.34L106.52,461.51L102.9,464.33L99.93,465.53L86.96,468.64L86.53,468.97L86.47,469.01L85.8,470.21L84.68,473.47L84.12,476.98L83.96,480.82L85.19,485.13L88.19,487.38L91.77,488.88L94.79,490.94L98.86,497.66L100.96,502.85L104.51,506.2L113.03,507.38L110.27,510.23L107.92,513.64L106.26,517.36L105.64,521.15L103.98,524.68L103.53,526.72L104.74,527.62L105.25,528.48L109.71,541.52L115.42,546.81L122.14,551.49L127.48,556.98L118.69,553.2L114.32,551.88L110.17,551.34L105.19,552.51L96.21,557.6L91.01,558.64L96.63,565.28L100.13,568.33L103.01,569.58L107.02,570.8L109.48,573.71L113.03,580.69L125.51,588.81L138.96,583.28L143.75,582.52L139.08,584.77L136.42,587.13L135.62,590.39L136.51,595.28L138.92,600.16L142.18,602.63L146.03,604.39L156.56,611.87L159.25,612.91L160.96,613.17L162.66,613.21L179.65,616.46L181.7,616.34L185.55,619.4L194.13,616.26L207.32,608.05L215.13,595.86L219.89,591.65L225.23,595.28L221.54,596.22L219.99,599.05L220.21,602.74L221.78,606.23L220.13,608.05L218.7,606.72L214.37,604.4L204.21,618.52L200.89,627.47L207.32,633.74L207.32,629.95L209.13,629.95L210.67,631.47L212.42,631.33L214.36,630.09L216.36,628.28L216.62,630.91L216.43,632.96L215.69,634.52L214.37,635.75L214.37,637.39L218.79,641.19L220.18,646.81L222.12,651.92L228.12,654.14L231.02,654.41L236.33,655.61L238.05,655.79L241.28,654.99L246.92,652.65L252.68,651.54L258.12,648.93L260.73,648.33L265.81,648.18L268.93,646.68L273.59,645.41L275.31,644.27L276,641.96L277.03,640.39L279.55,639.97L282.57,639.88L285.19,639.38L285.61,640.45L287.16,642.87L288.93,641.84L290.8,641.55L292.58,641.45L294.23,641.04L296.2,641.04L295.07,646.29L291.45,648.18L286.57,648.86L281.75,650.31L282.25,651.25L282.85,653.22L283.39,654.14L276.34,654.48L271.26,656.88L266.76,659.63L261.54,661.09L260.34,660.59L257.13,658.18L255.2,657.61L253.43,657.86L250.23,658.98L248.87,659.29L242.21,659.24L239.14,659.7L236.24,661.09L231.49,659.5L228,662.37L225.23,666.47L220.25,670.83L216.85,675.85L214.52,680.86L215.36,683.14L217.56,684.16L219.73,686.09L221.98,687.26L226.67,684.73L229.48,684.98L234.43,686.94L236.56,688.57L238.71,691.82L240.76,692.4L243.38,692.76L245.37,693.83L246.64,695.53L247.07,697.88L238.41,693.94L228.5,690.76L218.82,691.13L210.78,697.88L261.52,714.11L325.35,739.57L387.32,762.14L424.75,784L438.77,795.81L442.47,799.68L444.87,805.67L446.53,805.67L448.68,804.17L451.91,803.66L459.33,803.85L458.33,805.53L457.54,806.52L456.3,807.1L453.91,807.49L457.9,811L462.92,814.53L468.22,817.31L479.11,819.81L483.5,823.36z"
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

// src/Sierraleone.tsx
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
var Sierraleone = ({
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
      SierraleoneSingle,
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
      SierraleoneMultiple,
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
var SierraleoneSingle = ({
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
var SierraleoneMultiple = ({
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
var Sierraleone_default = Sierraleone;

// src/index.ts
var src_default = Sierraleone_default;
