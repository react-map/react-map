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

// src/Eritrea.tsx
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
var stateCode = ["Debubawi Keyih Bahri", "Debub", "Anseba", "Semenawi Keyih Bahri", "Maekel", "Gash Barka"];
var drawPath = {
  "Debubawi Keyih Bahri": "M743.03,694.63L744.6,692.34L745.16,692.18L748.91,691.13L750.53,688.79L751.54,687.69L755.08,687.02L756.57,686.22L757.25,682.95L756.15,679.14L755.73,675.52L760.91,670.6L763.67,664.02L765.66,662.27L766.71,662.4L768.18,663.58L769.4,663.46L795.2,652.32L795.93,651.42L792.76,645.68L792.45,643.85L792.3,640.17L791.49,638.57L790.27,637.61L788.78,636.69L787.55,635.65L787.02,634.38L786.35,633.12L784.72,631.51L781.34,628.9L780.73,629.76L780.45,630.82L780.62,631.99L781.34,633.21L780.21,633.86L779.98,634.53L780.03,635.35L779.72,636.46L778.62,638.2L777.23,639.78L776.86,639.84L774.65,641.3L774.77,641.44L773.6,642.1L772.68,642.36L771.55,642.27L772.61,640.4L773.17,639.78L768.91,639.51L765.66,638.51L763.34,636.51L761.73,633.21L760.04,633.89L758.49,634.75L756.94,635.23L755.26,634.8L754.39,633.55L753.95,631.6L753.64,628.15L753.17,625.87L751.22,621.42L750.08,614.6L749.15,612.72L747.78,611.4L746.16,610.18L744.22,609.28L741.85,608.94L740.33,607.94L736.17,601L730.19,595.92L729.26,594.34L728.98,593.08L728.34,592.43L727.54,591.98L726.83,591.38L726.4,590.22L726.36,589.18L725.9,588.41L724.33,588.05L723.58,589.94L722.76,591.53L721.39,592.64L719.12,593.05L713.72,592.58L711.21,591.83L707.56,589.62L707.25,589.27L707.36,588.72L706.72,582.79L705.03,579.89L703.18,565.78L702.31,562.68L701.15,561.33L699.89,560.54L698.83,558.69L697.5,554.66L697.51,549.68L696.76,546.67L694.61,545.33L692.89,544.55L688.52,538.66L684.46,535.33L682.9,535.37L681.79,535.96L681.5,536.66L682.43,537L684.98,537.13L687.01,538.21L688.6,539.6L688.52,542.84L688.11,542.88L686.46,542.79L686.08,542.84L686.11,543.73L686.43,544.16L686.81,544.37L687.04,544.58L687.45,545.31L689.15,547.53L689.76,547.98L689.85,548.46L689.1,549.2L688.16,549.21L687.71,547.53L687.21,547.41L684.46,545.33L683.99,544.29L683.31,541.46L682.84,540.33L682.05,539.62L680.01,538.18L679.59,537.42L679.08,537.32L677.86,538.01L676.4,538.59L675.18,538.25L674.35,536.93L673.63,534.23L673.11,532.83L672.82,532.64L671.76,532.16L671.49,532L670.68,530.32L667.95,526.59L667.43,526.57L666.67,524.97L661.77,521.14L661.21,519.29L660.86,516.75L660.26,514.52L658.93,513.55L657.39,512.96L653.21,510.2L651.16,509.38L650.23,509.5L647.6,510.19L646.29,510.22L644.59,509.82L643.71,509.32L641.8,507.3L639.49,503.28L638.55,502.7L637.08,502.9L633.25,504.38L631.67,504.28L624.12,501.99L623.09,500.16L621.83,495.11L617.52,486.89L615.75,484.67L613.69,482.91L609.75,480.49L608.12,479.24L607.14,477.92L606.61,476.46L605.7,472.48L604.89,470.3L603.86,468.55L600.75,464.95L595.29,460.14L592.81,457.15L591.26,452.23L589.05,449.52L588.52,448.6L587.62,447.57L585.65,446.66L583.69,445.45L582.79,443.54L582.1,439.01L580.24,434.8L577.4,431.29L573.87,428.82L568.59,425.09L567.04,423L565.13,418.51L563.7,416.64L562.34,416.07L548.59,412.9L540.57,412.63L537.25,411.69L533.6,409.01L530.1,407.12L523.76,407.41L521.04,406.2L521.04,408.56L519.7,408.08L518.49,408.17L517.35,408.69L516.09,409.48L516.08,407.12L515.09,405.71L512.05,403.54L511.04,401.9L511.07,400.53L512.05,397.74L512.21,394.4L512.05,393.48L511.45,392.44L510.89,392.22L510.49,392.44L510.43,392.72L504.75,386.77L505.48,385.93L507.34,386.57L507.9,385.9L507.55,384.81L506.74,384.25L503.5,384.04L502.51,384.7L503.05,386.77L499.62,385.33L499.21,384.34L498.78,379.53L498.28,378.37L497.13,377.85L494.95,377.55L493.88,377.67L493.22,378.03L493.05,378.06L493.05,378.06L492.92,378.88L493.16,382.73L495.5,394.54L495.79,399.58L495.28,404.15L493.45,408.72L482.88,423.87L476.91,437.05L468.36,451.35L467.09,453.63L467.09,453.63L475.16,461.17L482.07,464.76L494.66,470.85L498,471.94L508.73,473.48L516.79,476.52L524.01,481.71L536.43,495.91L548.99,510.27L558.22,526.69L566.61,541.63L570.19,545.21L586.2,555.5L606.81,568.75L619.26,579.05L628.31,586.54L632.93,591.37L636.97,596.7L640.75,603.01L649.98,623.1L656.18,631.84L665.45,637.83L672.22,640.64L678.82,644.36L684.48,649.26L692.22,662.53L701.9,675.73L707.56,681.76L713.67,675.14L715.76,674.77L718.99,675.62L724.43,678.07L743.03,694.63z",
  Debub: "M392.23,433.23L392.21,433.2L385.66,421.84L351.36,362.34L348.89,356.58L345.13,350.42L343.84,352L342.89,352.62L341.4,353.16L340.16,352.92L281.26,352.93L273.34,352.02L269.54,352.62L264.69,354.69L254.44,357.2L243.84,358L242.11,358.36L240.35,359.1L238.19,360.46L233.66,365.54L231.04,370.02L229.27,372.31L227.67,373.72L223.23,375.5L220.6,377.06L218.46,379L217.34,380.62L215.64,385.51L213.38,390.02L212.97,392.22L213.19,395.08L213.99,398.6L217.72,406.89L218.29,411.34L216.88,414.74L217.12,415.32L217.69,418.7L218.28,419.9L219.41,420.96L220.8,421.73L222.04,422.68L222.8,424.26L223.92,428.91L224.89,431.07L226.28,432.88L228.13,434.34L234.5,437.82L235.46,438.73L236.25,441.38L236.89,442.48L238.36,443.59L239.36,443.7L240.36,443.41L246.22,443.46L255.28,442.41L259.7,441.23L267.05,437.4L269.37,437.47L271.53,438.2L273.69,438.42L275.88,438.22L278.14,437.68L285.22,434.73L290.51,434.22L292.7,432.67L296.62,429.06L301.56,426.74L303.99,425.21L305.67,423L306.03,420.74L305.84,418.45L306.03,416.4L307.56,414.89L307.73,415.32L311.98,415.81L315.36,416.59L316.55,417.07L319.14,418.71L321.53,420.91L323.58,423.44L325.21,426.06L328.66,436.24L331.12,440.77L334.08,440.74L336.67,436.58L338.28,435.1L341.24,434.63L347.67,435.67L349.92,435.54L359.65,432.81L364.5,430.44L366.61,427.58L367.54,425.12L369.59,425.15L371.95,426.49L373.75,428.01L376.17,430.95L376.89,431.65L377.56,432.01L383.67,433.86L386.85,434.15L392.23,433.23z",
  Anseba: "M301.5,301.22L297.46,286.14L287,268.48L285.25,266.2L283.72,265.09L267.7,263.06L262.08,261.39L256.53,259.05L250.73,255.09L248.16,251.71L246.87,247.64L246.59,237.6L246.96,234.55L247.75,232.33L248.8,230.39L249.39,228.63L249.72,226.2L249.63,223.38L248.89,219.71L247.44,215.52L244.03,209.32L240.99,205.7L238.21,203.26L235.54,200.24L234.34,197.1L232.59,190.43L231.11,187.73L228.76,184.26L227.71,181.78L226.96,179.23L226.23,177.42L224.92,176.33L197.88,171.45L194.94,169.97L192.25,167.07L191.53,164.26L191.9,160.56L193.63,152.52L193.5,148.54L192.86,146L191.33,143.82L189.47,141.77L186.87,138.34L186.03,135.8L186.25,132.85L187.09,130.28L188.44,124.16L190.46,73.2L189.6,59.28L189.41,58.02L181.39,63.45L177.67,68.27L175.34,70.07L172.51,70.73L169.8,69.89L166.24,66.44L163.82,65.77L159.67,68.01L154.51,77.37L149.66,79.91L144.87,80.59L129.15,85.5L127.87,86.29L127.58,87.71L128.9,93.4L129.01,95.66L128.46,100.84L127.71,103.39L125.11,108.06L124.55,110.83L123.57,113.31L116.88,121.36L105.77,118.2L102.34,118.5L96.7,122.01L93.1,122.24L91.34,121.98L84.9,123.03L83.72,122.83L79.13,120L77.9,119.54L74.85,119.02L72.73,118.14L70.94,116.9L69.05,116.06L66.63,116.38L65.84,117.31L65.83,117.36L65.59,118.35L65.86,119.46L68.21,122.76L68.64,125.13L68.09,127.53L65.21,131.7L65.61,133.04L66.85,134.26L67.88,135.79L68.17,137.36L67.95,142.35L68.11,142.82L68.81,143.94L68.96,144.66L68.74,145.17L67.88,146.17L67.66,146.72L67.21,154.14L64.29,161.58L63.01,163.29L59.1,166.13L57.29,167.77L56.21,170.1L56.02,172.3L56.24,176.34L55.88,178.73L54.42,183.67L54.34,185.37L55.15,188.24L56.69,190.43L58.56,192.42L60.24,194.69L60.36,195.05L63.66,195.61L66,199.06L66.98,201.73L67.73,204.98L68.52,211.85L69.3,214.93L70.07,216.84L70.92,218.09L71.8,218.95L72.85,219.77L73.85,220.82L74.82,222.22L76.48,226.06L77.29,227.27L78.93,228.26L81.64,229.28L92.76,231.94L98.84,234.03L106.21,238.52L110.74,243.12L114.34,248.68L116.56,253.91L118.53,256.83L120.87,258.57L124.98,259.81L128.57,261.36L130.78,262.8L131.68,264.06L131.87,265.18L131.79,266.36L132.62,267.25L134.41,267.87L143.05,267.82L151.43,266.72L154.75,266.76L158.06,267.59L162.26,269.69L165.61,272.1L168.1,273.41L170.79,273.96L174.94,274.07L178.08,274.5L181.95,275.69L188.79,278.76L200.38,286.6L202.53,287.34L205.53,287.09L208.07,286.15L214.67,282.88L217.56,281.92L220.77,282.01L224.7,283.2L230.3,286.88L234.27,290.79L237.43,295.12L240.7,301.53L243.2,303.36L247.14,304.37L268.88,305.02L281.04,303.55L282.43,302.45L283.41,302.34L285.01,302.61L285.93,303.11L287.3,304.22L288.22,304.3L289.56,304.03L294,302.46L301.5,301.22z",
  "Semenawi Keyih Bahri": "M428.22,263.37L423.62,262.33L419.29,261.97L419.29,261.98L420.73,264.05L422.07,264.71L426.21,264.43L426.22,264.44L427.41,265.16L428.76,266.86L429.55,268.82L429.55,268.82L429.08,270.33L428.93,270.32L427.63,270.22L424.51,270.52L422.17,271.67L422.17,271.67L422.31,272.09L422.97,274.15L424.39,276.29L423.92,277.27L422.35,277.14L421.61,276.67L418.79,274.81L417.25,275.01L416.2,276.39L416.04,278.83L416.85,281.02L418.24,281.41L422.15,280.59L426.15,281.39L429.69,283.56L432.59,286.78L434.76,290.69L429.78,292.3L428.28,292.37L428.27,292.38L426.94,291.82L425.28,290.88L423.72,290.25L422.6,290.69L421.73,290.69L421.72,290.69L421.43,289.55L421.23,289.13L420.97,288.62L420.24,287.88L419.29,287.32L419.99,286.47L419.97,286.4L419.85,285.93L419.02,285.67L417.67,285.64L420.82,294.98L421.59,296.05L422.6,297.42L422.62,297.42L425.28,296.83L426.91,297.17L427.53,297.29L432.33,299.18L435.23,299.75L437.24,299.57L438.62,298.52L439.69,296.5L439.7,296.51L440.19,296.95L440.47,297.2L440.94,297.82L441.65,298.74L442.12,299.18L442.77,299.3L443.95,299.51L449.83,298.26L452.55,298.66L456.68,300.69L459.22,301.55L461.68,301.36L467.44,299.93L468.54,300.18L469.37,300.37L471.83,301.61L471.87,301.63L473.55,300.69L474.28,298.43L473.33,293.52L472.73,293.2L470.98,293.14L469.45,292.76L466.98,291.07L465.3,290.69L464.27,290.3L463.92,289.37L463.74,288.26L463.28,287.32L462.51,286.71L462.08,286.48L461.63,286.24L460.55,285.89L459.22,285.64L456.8,285.46L454.13,285.64L452,286.33L451.12,287.7L451.13,287.71L452.15,289.1L454.55,289.83L456.16,290.43L455.16,290.69L454.48,291.44L452.66,294.89L445.72,292.85L444.56,292.76L444.12,291.76L442.02,288.18L441.88,287.86L441.24,286.41L440.9,284.52L441.6,274.52L441.58,274.39L441.31,272.8L440.06,272.09L440.06,272.09L438.81,272.45L438.91,273.25L439.48,274.08L439.69,274.53L438.71,275.07L437.59,275.51L436.47,275.46L435.57,274.53L435.81,273.18L437.05,271.82L437.64,270.03L437.65,270.02L437.1,269.17L435.98,267.41L435.18,266.86L432.55,265.07L428.22,263.37zM438.7,250.62L438.12,249.48L436.91,248.62L436.06,247.79L435.04,247.23L434.3,246.53L434.67,244.66L436.43,243.03L438.4,242.35L439.21,241.22L438.29,239.74L436.14,238.78L434.96,238.51L434.09,238L431.1,235.63L430.24,236.14L430.02,237.5L430.07,238.8L430.31,240L430.71,241.04L429.66,241.72L426.99,241.94L424.9,242.75L423.95,244.65L423.92,246.69L425.11,247.92L430.21,248.46L433.11,250.05L436.59,251.22L438.7,250.62zM259.11,0L242.22,14.24L238.93,19.07L231.78,38.16L228.5,43.51L226.1,45.38L220.21,48.26L218.16,50.16L217.56,52.61L217.7,55.25L217.4,57.72L215.4,59.72L212.59,60.15L210.49,58.85L208.69,57L206.76,55.79L202.58,57.13L201.88,57.25L201.34,58.36L201.49,59.15L201.79,60.01L201.76,61.31L200.52,63.69L198.55,65.41L196.77,65.43L196.1,62.74L196.27,60.25L196.15,58.18L195.03,56.94L192.31,56.92L189.52,57.95L189.41,58.02L189.6,59.28L190.46,73.2L188.44,124.16L187.09,130.28L186.25,132.85L186.03,135.8L186.87,138.34L189.47,141.77L191.33,143.82L192.86,146L193.5,148.54L193.63,152.52L191.9,160.56L191.53,164.26L192.25,167.07L194.94,169.97L197.88,171.45L224.92,176.33L226.23,177.42L226.96,179.23L227.71,181.78L228.76,184.26L231.11,187.73L232.59,190.43L234.34,197.1L235.54,200.24L238.21,203.26L240.99,205.7L244.03,209.32L247.44,215.52L248.89,219.71L249.63,223.38L249.72,226.2L249.39,228.63L248.8,230.39L247.75,232.33L246.96,234.55L246.59,237.6L246.87,247.64L248.16,251.71L250.73,255.09L256.53,259.05L262.08,261.39L267.7,263.06L283.72,265.09L285.25,266.2L287,268.48L297.46,286.14L301.5,301.22L303.56,306.65L306.46,312.25L317.26,328.99L324.21,336.65L329.9,341.7L340.18,347.19L345.13,350.42L348.89,356.58L351.36,362.34L385.66,421.84L392.21,433.2L392.23,433.23L393.66,432.99L397.44,432.86L401,434.04L404.27,436.12L410.52,441.58L412.32,442.44L414.57,442.83L416.88,442.17L420.54,439.05L422.71,438.5L425.09,438.93L427.87,439.43L429.56,439.38L435.42,437.64L437.52,437.61L448.18,440.23L453.32,442.34L458,445.14L467.09,453.63L467.09,453.63L468.36,451.35L476.91,437.05L482.88,423.87L493.45,408.72L495.28,404.15L495.79,399.58L495.5,394.54L493.16,382.73L492.92,378.88L493.05,378.06L493.05,378.06L492.62,378.15L491.71,377.55L491.1,376.48L491.09,375.39L491.19,374.32L490.9,373.27L487.67,372.43L487.21,371.86L486.64,370.53L485.97,369.92L486,372.22L486.26,373.2L486.86,374.19L486.4,374.94L485.83,375.69L485.13,376.33L484.35,376.71L483.22,376.67L482.75,376.04L482.4,375.31L481.54,374.95L480.09,374.56L479.85,373.72L480.1,372.85L480.29,372.43L479.05,371.52L478.7,371.59L477.42,371.67L475.29,372.19L475.05,373.39L475.32,374.79L474.7,375.87L472.75,376.23L471.65,375.31L471.23,373.62L471.38,371.67L469.71,373.7L468.2,376.48L466.32,378.94L463.64,379.99L460.93,382.28L459.15,382.7L458.34,380.44L457.47,379.74L455.57,378.79L446.79,375.65L444.03,374.25L442.87,372.06L443.02,371.2L443.69,369.36L443.75,368.24L443.43,367.48L442.88,367.36L442.35,367.13L442.12,366.1L441.6,364.85L440.3,363.92L438.67,363.58L437.2,364.12L436.68,362.74L436.8,361.15L437.13,359.54L437.2,358.17L436.64,356.59L435.1,353.4L434.76,351.84L434.12,350.78L431.34,348.69L430.71,347.67L430.6,347.35L430.04,346.86L429.82,346.33L430.01,345.94L431.23,345.48L431.51,345.11L431.28,343.84L430.6,343.07L429.59,342.78L428.27,342.9L430.07,338.27L430.71,337.09L431.78,335.98L433.9,334.28L434.76,332.81L434.98,331.45L434.6,330.16L433.71,328.93L432.33,327.77L431.14,327.03L430.19,326.69L427.46,326.09L425.72,325.2L414.43,315.79L412.05,313.23L410.3,310.04L409.2,311.41L407.63,314.05L406.31,315.09L406.36,313.88L406.31,313.48L405.6,313.48L404.82,315.86L404.71,316.84L403.9,316.84L402.22,315.61L401.42,316.84L400.63,321.05L399.94,321.79L399.14,322.03L398.49,322.52L398.22,324.03L398.35,325.4L398.95,327.73L399.1,329.11L398.81,335.47L399.1,337.86L400.15,340.4L400.94,339.35L401.9,337.45L403.47,337.48L404.45,339.24L405.73,344.18L408.11,348.34L407.86,350.74L405.6,354.81L404.16,355.8L403.7,356.6L404.3,357.74L404.48,358.76L404.19,360.31L403.53,361.74L402.71,362.36L400.11,362.77L398.24,363.33L396.88,362.98L395.7,360.68L394.02,361.54L392.48,361.47L391.35,360.5L390.93,358.63L390.66,358.17L389.55,357.37L389.29,356.87L389.9,346.32L391.67,339.61L390.41,338.39L389.38,336.64L388.67,334.6L388.4,332.44L387.9,332.02L385.67,331.17L385.17,330.72L378.97,310.55L376.1,306.68L374.31,305.81L371.9,305.33L369.79,305.64L368.89,307.09L367.76,308.07L365.15,308.39L362.4,308.15L360.71,307.51L360.44,306.62L359.9,302.47L357.74,299.01L357.47,297.84L358.74,297.83L361.41,297.5L363.71,296.38L363.96,294.05L362.78,292.97L361.49,293.5L360.41,294.76L359.9,295.81L359.18,293.88L359.67,292.08L361.08,290.88L363.13,290.69L359.92,287.07L359.27,285.09L359.09,281.81L358.71,280.85L357.03,279.01L356.66,277.56L357.02,276.26L357.76,275.02L358.34,273.68L358.28,272.09L357.09,271.05L352.74,269.08L351.81,268.26L350.71,266.35L343.62,261.97L341.32,257.67L337.14,241.59L334.37,235.45L333.97,233.58L333.47,228.12L329.84,211.98L329.82,210.22L330.55,207.16L330.72,205.64L330.52,204.11L329.44,202.14L329.03,201L328.86,199.45L329.03,194.55L328.84,193.02L328.37,191.94L327.85,190.99L327.42,189.86L327.24,188.71L327.42,184.4L326.78,183.98L325.47,183.94L324.31,183.41L324.17,181.48L324.98,182.33L325.51,179.16L323.6,173.51L325.79,171.18L325.56,167.59L324.91,164.86L322.55,159.33L324.17,160.18L321.59,150.52L317.68,141.48L317.09,139.44L316.43,134.39L314.58,130.79L313.96,128.26L313.56,123.23L313.04,120.83L309.51,113.51L308.49,109.34L307.88,104.54L306.23,100.74L302.98,97.33L300.78,93.58L302.21,88.76L300.86,86.28L297.98,75.72L289.74,61.27L281.44,41.89L270.29,24.73L269.71,22.6L269.35,21.88L267.2,18.82L266.93,17.52L266.79,14.96L266.39,13.71L261.34,6.52L260.47,2.67L259.36,1.31L259.11,0z",
  Maekel: "M345.13,350.42L340.18,347.19L329.9,341.7L324.21,336.65L317.26,328.99L306.46,312.25L303.56,306.65L301.5,301.22L294,302.46L289.56,304.03L288.22,304.3L287.3,304.22L285.93,303.11L285.01,302.61L283.41,302.34L282.43,302.45L281.04,303.55L281.26,352.93L340.16,352.92L341.4,353.16L342.89,352.62L343.84,352L345.13,350.42z",
  "Gash Barka": "M134.41,267.87L132.62,267.25L131.79,266.36L131.87,265.18L131.68,264.06L130.78,262.8L128.57,261.36L124.98,259.81L120.87,258.57L118.53,256.83L116.56,253.91L114.34,248.68L110.74,243.12L106.21,238.52L98.84,234.03L92.76,231.94L81.64,229.28L78.93,228.26L77.29,227.27L76.48,226.06L74.82,222.22L73.85,220.82L72.85,219.77L71.8,218.95L70.92,218.09L70.07,216.84L69.3,214.93L68.52,211.85L67.73,204.98L66.98,201.73L66,199.06L63.66,195.61L60.36,195.05L61.12,197.2L61.06,199.38L60.64,201.6L60.47,204.24L61.08,206.84L63.24,211.85L63.56,214.49L62.35,217.63L57.38,222.81L55.45,226.04L51.5,237.31L46.14,252.67L40.45,268.94L37.26,274.21L31.39,280.32L29.93,283.04L23.49,306.66L23.19,311.87L24.82,317.24L20.93,319.87L18.61,323.67L12.6,341.58L10.44,344.97L1.7,353.52L0.75,355.66L0.58,358.36L1.94,370.02L4.35,390.61L5.15,397.4L6.55,409.3L8.35,424.71L10.14,439.9L12.77,462.42L15.06,462.46L15.94,460.06L17.43,458.82L19.43,458.35L21.96,458.28L23.6,457.9L27.27,456.17L29.65,455.77L35,455.77L36.01,455.49L37.93,454.3L39.09,454.02L47.2,454.02L51.01,454.55L58.75,456.85L62.69,457.37L63.39,457.83L65.54,460.79L66.48,461.49L67.41,462.01L68.44,462.35L69.66,462.46L70.36,462.23L72.09,460.79L73.06,460.71L75.22,460.97L76.14,460.79L77.62,459.75L78.9,458.23L79.79,456.21L80.12,453.64L80.2,450.7L80.6,448.21L81.56,445.79L83.36,443.15L86.76,440.56L90.86,439.62L99.64,439.8L102.23,438.9L103.86,438.66L106.76,441.15L109,442.47L113.5,449L115.31,450.83L115.76,451.82L115.94,453.64L115.88,456.43L116.21,457.74L117.92,458.74L122.72,462.78L123.24,463.51L124.11,465.81L124.71,468.88L125.42,470.25L126.94,470.82L128.17,471.05L129.38,471.65L130.3,472.58L130.66,473.75L130.79,476.88L131.35,478.91L132.59,480.38L134.72,481.77L136.06,480.4L140.34,470.09L147.16,453.64L154.61,435.68L162.25,417.23L169.97,398.61L174.81,386.87L176.87,388.68L178.31,390.8L180.58,395.3L181.1,395.73L182.25,395.86L182.67,396.28L182.73,396.78L182.69,398.08L182.76,398.46L183.22,399.35L183.48,400.17L183.99,400.76L185.33,400.98L186.49,401.87L186.75,402.83L186.84,403.91L187.51,405.11L188.49,405.91L201.37,411.24L203.52,411.64L210.28,410.46L213.09,410.64L214.92,411.4L216.13,412.89L216.88,414.74L218.29,411.34L217.72,406.89L213.99,398.6L213.19,395.08L212.97,392.22L213.38,390.02L215.64,385.51L217.34,380.62L218.46,379L220.6,377.06L223.23,375.5L227.67,373.72L229.27,372.31L231.04,370.02L233.66,365.54L238.19,360.46L240.35,359.1L242.11,358.36L243.84,358L254.44,357.2L264.69,354.69L269.54,352.62L273.34,352.02L281.26,352.93L281.04,303.55L268.88,305.02L247.14,304.37L243.2,303.36L240.7,301.53L237.43,295.12L234.27,290.79L230.3,286.88L224.7,283.2L220.77,282.01L217.56,281.92L214.67,282.88L208.07,286.15L205.53,287.09L202.53,287.34L200.38,286.6L188.79,278.76L181.95,275.69L178.08,274.5L174.94,274.07L170.79,273.96L168.1,273.41L165.61,272.1L162.26,269.69L158.06,267.59L154.75,266.76L151.43,266.72L143.05,267.82L134.41,267.87z"
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

// src/Eritrea.tsx
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
var Eritrea = ({
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
      EritreaSingle,
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
      EritreaMultiple,
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
var EritreaSingle = ({
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
var EritreaMultiple = ({
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
var Eritrea_default = Eritrea;

// src/index.ts
var src_default = Eritrea_default;
