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

// src/Falklandislands.tsx
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
var stateCode = ["Falkland Islands"];
var drawPath = {
  "Falkland Islands": "M471.77,695.67L472.3,695.31L472.87,694.8L473.14,694.11L473.07,692.12L473.07,691.1L473.15,690.41L473.78,688.39L473.63,684.69L472.19,683.49L470.86,684.93L470.3,691.73L471.77,695.67zM493.48,514.61L497.31,513.13L497.93,512.38L506.26,509.94L506.66,509.2L501.27,506.64L487.91,509.82L485.5,511.31L484.73,513.63L488.22,515.74L491.81,516.16L493.48,514.61zM351.8,483.53L354.4,478.59L358.53,474.38L358.49,469.46L363.78,467.9L362.98,463.74L355.41,463.81L349.75,465.75L346.02,472.22L346.81,476.38L341.14,477.94L334.37,483.67L339.32,487.42L342.01,491.95L347.69,491.15L351.14,494.91L356.1,498.28L362.2,501.26L364.05,495.94L368.55,491.34L374.2,487.12L371.5,482.6L365.46,485.69L356.75,486.9L351.8,483.53zM343.03,403.73L340.73,400.74L339.68,407.63L340.98,413.87L344.1,416.71L347.68,419.04L350.48,423.72L351.24,430.17L350.23,436.09L348.18,440.83L345.77,443.56L346.21,444.09L346.48,444.62L346.67,445.16L346.78,445.75L346.95,450.14L348.78,452.77L350.86,452.92L352.66,447.41L354.59,445.39L356.87,444.06L358.76,443.56L362.77,441.42L365.91,436.63L366.42,431.65L362.51,428.93L363,425.67L363.75,422.74L364.65,420.26L365.69,418.51L362.34,413.72L357.58,412.54L346.59,413.78L343.03,403.73zM641.23,355.21L640.29,353.62L639.01,351.88L636.4,350.79L633.08,350.61L632.29,351.62L633.88,353.27L633.28,353.74L631.22,354.18L629,355.68L625.78,356.57L622.66,358.27L619.92,360.28L618.33,362.67L620.19,365.82L623.04,368.51L624.12,371.42L624.2,374.61L624.74,376.47L629.87,379.13L633.08,381.57L636.6,383.46L639,382.64L640.26,382.67L640.12,385.15L638.52,387.12L640.27,389.04L644.89,389.9L645.96,388.34L644.5,385.59L644.34,383.35L645,381.81L645.2,379.69L643.3,375.5L642.92,372.13L643.42,368.65L644.46,365.35L644.06,364.58L642.16,366.77L639.72,367.89L637.38,366.29L637.65,365.32L640.12,365.64L641.18,364.11L639.83,360.54L639.83,359.04L641.84,358.98L646.03,360.81L648.63,360.72L649.29,357.8L649.59,355.24L650.59,354.68L650.54,354.18L647.56,351.26L646.4,350.64L645.44,351L645.73,353.44L644.46,355.09L642.45,355.42L641.23,355.21zM367.07,342.69L365.74,340.95L364.31,339.95L363.13,337.25L363.87,334.3L363.78,331.92L361.52,331.12L358.75,333.83L357.94,337.6L358.37,340.37L357.05,344.78L357.96,346.23L359.29,345.96L360.43,346.05L361.25,347.08L361.8,348.26L362.19,349.32L363.46,349.76L365.66,348.96L367.58,346.37L367.07,342.69zM19.12,292.45L25.81,288.11L28.26,287.31L26.99,284.23L25.54,281.86L23.9,280.42L21.95,279.92L19.58,280.83L18.62,283.09L18.19,285.55L17.46,287.31L16.65,291.86L15.63,293.33L11.91,289.69L7.14,288.28L5.15,287.31L2.77,288.11L1.66,288.87L0.57,289.98L7.12,297.88L15.27,303.52L23.01,303.55L28.26,294.68L25.82,295.8L23.45,296.27L21.2,295.91L19.12,294.68L19.12,292.45zM384.43,283.38L391.79,283.23L393.81,281.65L394,273.26L395.47,268.57L394.55,268.92L388.58,274.67L387.49,275.64L380.15,276.49L377.91,278.31L377.44,280.95L378.66,284.41L380.91,285.17L384.43,283.38zM98.4,302.29L98.89,298.32L99.36,289.46L100.61,286.17L101.74,284.06L103.03,280.77L104.06,277.1L104.48,273.91L103.81,269.16L102.07,267.08L99.58,267.43L96.73,270.07L94.25,274.26L95.28,275.79L97.43,276.93L98.4,279.92L96.34,288.11L92.71,291.86L88.32,294.33L81.54,300.55L65.38,306.13L64.23,305.28L64.77,302.29L68.78,296.15L79.72,289.78L83.93,286.17L84.91,282.38L83,279.74L78.48,277.46L77.98,276.58L77.78,275.35L77.16,273.97L75.44,272.74L74.42,272.53L72.02,272.53L70.99,272.74L67.78,274.38L65.17,277.02L60.97,283.7L58.24,289.78L56.95,290.1L47.88,289.92L44.33,290.48L41.26,292.6L37.38,297.35L41.55,298.59L45.05,301.55L46.58,306.69L44.85,314.63L45.95,314.63L46.58,315.3L47.09,316.21L47.9,317.1L50.11,318.15L54.82,318.65L57.02,319.56L58,321.65L58.66,324.59L60.05,326.89L63.26,326.98L62.68,328.3L61.73,331.92L72.23,336.3L76.75,336.54L83.17,334.36L93.61,331.92L96.73,329.65L98.11,327.01L99.67,320.42L101.43,317.1L92.16,317.1L96.99,306.54L98.4,302.29zM28.26,242.83L24.03,241.86L16.03,238L11.23,238.12L6.45,240.2L3.66,243.33L1.95,248.13L0.57,255.3L1.86,259.52L4.16,262.3L6.96,264.06L9.71,265.14L9.68,254.39L10.35,250.21L12.06,246.61L15.67,244.56L24.43,245.11L28.26,242.83zM144.72,235.63L146.81,233.35L147.65,231.36L147.79,229.78L145.53,227.3L144.63,225.6L143.53,219.35L143.57,217.51L143.26,215.73L140.62,211.69L139.33,211.05L138.91,212.86L139.58,215.05L140.49,216.34L141.39,218.47L141.27,230.37L140.32,232.85L140.63,234.29L141.26,235.57L142.29,236.63L144.72,235.63zM131.26,203.87L129.14,201.47L126.5,199.96L114.28,198.12L112.54,199.61L113.97,202.15L129.91,205.15L131.26,203.87zM435.97,121.52L434.49,118.21L431.02,116.23L426.96,115.36L423.79,115.42L424.21,117.07L424.77,121.11L425.19,122.74L423.32,122.47L419.45,122.97L417.58,122.74L418.2,127.21L418.34,137.73L419.78,139.77L422.48,140.64L425.55,142.91L428.22,145.99L429.74,149.34L407.78,157.72L397.09,157.54L386.99,151.78L392.75,148.81L408.43,137.38L408.43,134.94L403.87,136.08L396.36,143.02L392.39,144.65L350.45,154.43L338.57,154.43L332.2,147.16L340.14,147.16L343.9,146.4L347.43,144.65L340.85,141.4L319.9,137.38L320.6,136.05L321.05,134.77L321.68,133.63L322.94,132.5L322.94,130.06L316.36,127.91L309.01,131.1L295.54,142.44L293.94,133.46L293.12,131.28L290.5,128.75L289.04,130.23L287.8,134.94L282.56,139.74L277.89,145.93L275.76,154.05L291.57,155.45L296.93,161.77L260.26,168.9L240.25,165.84L222.08,156.67L199.28,137.3L191.51,132.5L166.75,122.68L159.41,117.62L157.4,119.42L155.25,120.35L152.93,120.56L150.41,120.3L153.75,127.97L154.9,132.27L154.08,136.16L153.81,138.9L155.49,141.69L157.97,143.84L160.18,144.65L163.21,145.29L170.2,149.34L173.19,149.77L179.36,149.25L187.85,150.39L194.07,152.45L200,155.71L204.58,160.54L207.74,167.82L205.41,169.51L194.69,166.66L181.62,166.66L179.54,168.55L180.04,172.84L182.38,180.24L185.09,182.86L217.81,198.03L223.6,198.67L229.7,208.28L232.07,210.23L236.58,211.99L238.95,213.39L252.09,228.35L256.52,230.54L262.33,230.89L268.53,232.47L273.9,236.16L277.15,242.83L264.72,241.51L259.41,238.97L250.08,229.49L245.45,228.7L229.77,235.02L212.19,233.21L207.02,234.96L196.77,243.09L191.51,245.49L185.15,245.29L162.89,238.29L158.68,234.9L155.09,234.23L151.95,240.37L151.71,247.78L154.2,255.04L158.39,260.54L163.28,262.68L167.26,265.76L169.37,272.15L171.66,277.49L176.15,277.46L177.81,275.08L179,271.83L180.68,268.87L183.82,267.61L193.86,267.61L196.86,266.58L206.87,260.02L209.32,260.4L211.19,261.89L212.83,261.89L214.6,257.76L213.26,250.24L218.96,248.45L232.04,250.41L237.41,249.15L242.72,246.84L248.22,245.64L254.18,247.75L253.75,253.02L254,260.54L253.37,267.17L246.54,273.41L244.35,274.85L243.38,273.91L242.62,270.24L240.85,270.63L238.82,272.35L237.3,272.74L235.93,270.1L234.34,264.35L232.87,262.68L230.57,262.42L228.03,263.3L225.97,265.47L225.12,268.84L224.71,280.54L225.52,284.67L228.17,289.98L224,289.6L220.99,291.98L219.23,296.44L218.89,302.29L212.37,296.38L209.76,294.68L214,284.53L214.6,281.15L213.46,278.25L210.65,278.25L203.82,279.92L207.84,275.73L209.71,273.09L211.43,270.07L206.82,268.66L200.71,270.51L195.32,274.99L193.04,281.15L193.27,286.08L194.41,293.92L194.69,297.35L194,300.26L192.84,302.61L192.61,305.43L194.69,309.69L192.94,311.48L190.88,314.27L189.18,317.54L188.46,320.8L187.58,322.74L183.25,324.65L181.62,325.83L177.11,328.18L159.41,326.98L168.61,332.12L179.67,332.36L190.35,328.24L198.42,320.8L201.53,318.77L204.01,320.42L205.26,323.24L204.58,324.71L203.36,326.36L197.59,337.04L192.75,340.78L186.73,343.37L180.43,344.61L174.76,344.46L174.76,346.93L177.81,349.2L175.8,353.38L173.89,353.29L170.2,349.2L166.5,346.14L164.21,344.96L158,343.9L155.63,343.02L153.48,343.19L151.17,345.69L148.97,347.55L147.22,346.23L146.08,343.04L145.71,339.31L142.93,342.6L142.01,344.28L141.14,346.93L139.61,346.93L135.48,339.42L125.35,336.86L106,337.04L110.65,346.14L115.85,348.96L121.87,350.08L128.97,354.15L128.97,356.62L114.85,362.22L99.77,364.26L102.95,376.62L98.62,377.03L97.6,374.17L97.71,370.07L96.73,366.53L94.41,364.97L84.7,364.26L72.68,359.16L67.09,357.92L64.77,361.58L63.26,370.27L66.68,374.26L76.94,376.62L80.95,379.86L88.23,390.14L92.16,393.98L95.17,394.8L98.19,394.68L101.08,395.16L103.72,397.7L113.8,411.59L114.95,414.07L116.79,415.82L120.46,416.5L133.4,416.5L131.18,410.67L126.9,404.08L121.86,398.64L117.35,396.46L114.49,396.22L111.59,395.45L110.26,393.92L112.1,391.26L114.98,390.28L137.42,391.26L140.91,392.97L139.71,396.75L136.75,400.3L135.06,401.42L137.37,407.13L142.26,414.19L147.76,420.46L151.95,423.72L149.61,425.08L147.61,424.84L145.43,424.01L142.53,423.72L150.24,438.02L162.27,439.35L174.79,432.18L183.89,421.23L182.46,414.84L180.01,408.4L176.62,403.4L170.62,400.36L169.94,397.99L170.34,395.51L171.72,393.98L174.68,394.01L179.03,397.9L181.62,398.94L182.92,400.48L187.09,407.27L190.8,409.93L192.33,412L193.86,413.48L195.38,412.54L195.76,411.03L195.9,408.75L195.6,406.86L194.69,406.33L199.58,405.91L206.51,411L211.43,411.29L214.06,409.11L231.91,387.66L234.63,383.17L235.77,377.74L234.39,369.66L231.84,363.58L230.53,358.04L232.87,351.44L236.47,348.14L251.14,341.98L249.79,344.96L245.79,349.26L245.04,351.44L246.38,354.71L249.01,354.38L254.18,351.44L273.42,352.94L277.89,350.32L278.51,346.9L275.86,339.48L276.37,335.71L277.77,333.86L280.09,331.92L282.28,331.77L283.23,335.71L284.52,337.36L287.51,338.45L293.12,339.31L293.84,340.84L295.54,351.44L309.76,340.75L319.58,338.13L322.99,334.95L325.39,330.33L327.5,324.71L331.99,315.42L355.55,280.89L370.29,267.34L376.34,260.02L386.23,241.6L393.91,231.51L394.83,227.59L388.65,228.09L400.83,215.81L403.93,217.54L407.73,214.41L414.67,206.03L413.76,209.82L413.85,213.71L415.07,216.84L417.58,218.27L420.74,216.89L426.24,209.88L429,208.28L430.57,206L431.3,196.05L432.1,193.77L439.15,183.77L439.15,181.52L434.51,182.8L432.92,183.77L434.86,177.99L435.13,175.9L434.31,174L434.31,171.55L436.92,169.51L439.63,168.76L441.96,170.04L443.44,174L448.6,169.81L458.94,157.98L464.88,154.43L461.6,153.67L457.93,154.93L455.07,154.72L454.25,149.34L456.11,143.75L460.03,141.92L469.59,142.44L466.24,137.3L460.24,133.11L437.65,123.84L435.97,121.52zM357.52,118.7L354.46,115.67L351.41,112.26L346.84,111.9L344.97,118.38L338.5,119.16L332.42,119.94L333.96,123.74L340.82,127.9L349.56,126.35L354.9,127.84L350.35,131.67L349.61,137L356.1,141.16L362.57,140.37L369.41,136.52L377.77,132.28L384.24,130.72L383.45,126.54L375.06,125.45L370.1,122.43L368.93,116.73L363.98,116L363.63,123.23L357.52,118.7zM312.67,115.82L315.24,112.34L312.16,108.16L312.16,105.49L313.61,105.32L316.85,103.23L315.38,103.14L306.67,98.18L303.24,97.22L299.81,97.25L289.31,100.56L291.61,106.01L294.8,110.89L298.66,114.89L303.02,117.62L307.55,117.8L312.67,115.82zM248.52,102.97L242.73,100.96L238.13,97.05L236.63,93.83L235.34,90.29L233.34,88L229.7,88.44L227.33,90.61L227.57,93.02L231.2,98.18L234.24,101.31L244.7,109.03L253.26,111.76L265.49,118.79L269.53,122.74L266.88,125.06L264.22,126.57L261.34,127.36L258.05,127.62L255.74,126.05L251.23,119.19L248.78,117.62L238.06,119.42L232.55,122.39L229.42,127.5L230.05,132.33L233.23,135.64L237.31,137.47L240.62,138.02L256.52,134.94L259.1,135.87L265.56,139.56L267.87,139.77L268.95,138.31L272.44,130.06L280.88,120.3L283.44,118.5L282.92,114.6L281.19,110.8L280.2,109.32L277.84,101.92L272.29,100.35L260.26,103.23L254.66,103.63L248.52,102.97zM178.24,107.29L179.25,103.63L178.45,99.34L175.49,96L173.75,94.76L170.63,90.99L164.47,85.89L161.4,88.87L163.71,96.44L168.22,100.15L172.58,101.22L175.28,102.27L176,103.84L176.22,105.84L176.93,107.84L178.24,107.29zM576.7,112.02L558.2,100.73L547.68,96.67L542.79,95.97L539.39,94L532.28,85.48L527.56,83.57L530.28,94.41L531.37,95.97L533.01,96.96L535.37,99.4L537.45,102.18L539.8,108.36L546.17,117.86L547.48,122.74L545.47,127.53L541.04,130.49L535.78,132.06L520.71,132.5L520.02,134.01L519.29,137.47L518.15,140.93L516.21,142.44L508.89,144.71L506.12,144.65L504.26,143.72L499.87,140.41L498.51,139.77L495.22,142.09L492.29,146.81L490.17,152.57L489.36,157.98L493.81,161.13L514.12,170.45L519.95,176.42L511.48,173.01L508.13,177.27L509.59,185.43L515.52,193.77L510.81,203.46L503.71,195.87L492.41,174L490.18,186.36L483.85,193.74L479.89,199.78L484.81,208.28L494.85,217.04L510.59,223.09L515.26,225.9L517.49,225.6L519.26,225.95L519.95,229.32L519.02,232.44L516.86,233.26L514.33,233.61L512.35,235.46L510.99,242.92L513.52,247.07L516.43,250.06L515.61,259.55L517.74,266.02L520.42,272.27L521.47,277.46L519.5,282.47L515.79,284.67L511.51,285.73L507.78,287.31L508.48,284.85L509.1,281.83L509.25,278.78L507.96,273.5L508.81,270.51L510.04,267.28L510.69,263.91L510.14,260.6L508.84,257.97L507.31,255.56L506.12,252.87L505.78,249.65L506.05,246.34L506.01,243.15L504.73,240.37L501.07,239.64L484.05,242.83L480.51,245.49L477.7,250.35L474.83,252.67L471.12,247.75L449.68,262.68L450.47,266.46L454.25,274.99L446.25,277.02L442.66,276.31L439.15,272.74L436.22,289.22L433.47,293.04L429,288.63L412.3,294.89L408.43,297.35L411.27,298.59L412.78,301.08L412.87,304.25L411.48,307.22L408.44,308.43L405.01,307.72L402.13,307.95L400.83,311.95L403.92,316.3L409.8,320.77L413.11,325.24L408.43,329.65L402.66,328.39L395.1,324.06L387.73,321.33L382.42,324.71L382.5,331.89L388.33,335.77L400.83,339.31L400.83,341.98L397.12,343.75L389.18,345.08L385.47,346.93L387.91,349.44L389.72,352.03L393.22,359.1L387.13,359.63L383.89,359.34L381.74,357.86L379.49,354.86L377.73,354.36L376.61,355.86L376.34,359.1L378.04,364.23L381.72,368.59L386.18,371.96L390.18,373.9L388.09,379.27L384,382.11L374.81,384.05L377.77,389.25L377.25,393.5L374.37,396.16L370.26,396.46L368.63,395.42L363.95,390.02L362.39,388.72L360.41,387.6L358.47,387.27L356.95,388.51L356.46,392.41L358.05,396.46L360.52,399.94L362.64,402.19L370.89,408.51L377.86,416.5L378.22,418.21L378.07,422.92L378.61,424.96L381.77,426.8L389.44,424.19L393.22,426.2L387.87,432.24L387.97,436.77L391.85,439.76L402.1,442.37L406.56,444.92L409.31,449.42L408.43,456.48L413.27,460.81L424.61,463.12L429.74,466.21L437.29,475.41L441.75,477.61L443.44,471.19L442.23,470.75L437.22,465.14L436.73,463.72L433.96,462.06L435.18,458.5L437.79,455.09L439.15,453.75L440.19,446.7L438.8,441.31L435.25,437.16L429.74,433.9L424.46,433.37L421.77,432.51L420.62,430.05L421.28,426.74L422.8,423.42L424.35,421.17L425.19,421.23L417.8,411.41L415.65,404.97L420.62,401.42L424.5,407.48L427.06,409.96L428.22,407.63L429.32,400.53L430.31,396.22L431.26,393.98L435.53,395.16L444.43,405.62L448.3,403.84L450.84,407.69L453.5,409.11L456.21,409.76L458.8,411.29L461.01,414.55L461.87,417.56L462.36,420.58L463.51,423.72L467.89,428.6L472.43,429.1L477.47,428.22L483.29,428.93L492.88,435.09L498.42,437.45L503.21,436.39L506.38,430.53L503.33,425.73L498.28,421.29L495.46,416.5L506.93,409.4L509.3,406.33L508.63,402.66L504.27,402.9L491.49,407.39L486.34,407.86L483.1,405.71L484.81,398.94L487.75,396.16L496.43,392.59L500.18,389.01L496.87,386.48L492.9,385.77L484.81,386.3L492.41,376.62L488.24,374.14L485.28,374.43L482.27,375.79L477.88,376.62L476.18,374.26L476.27,369.07L475.83,363.91L472.57,361.58L460.89,358.6L454.31,362.87L450.98,360.37L449.69,356.27L452.02,354.15L453.94,353.32L457.2,349.97L458.8,349.2L461.38,349.73L463.08,351.03L464.57,352.73L466.55,354.15L469.79,355.5L472.66,356.15L475.52,355.77L478.72,354.15L480.42,352.09L481.11,349.94L482.13,348.08L484.81,346.93L486.47,347.37L487.72,348.73L489.36,351.44L495.86,357.8L499.16,358.81L503.21,356.62L504.84,362.93L508.68,363.02L513.62,361.78L518.42,364.26L520.2,369.54L521.78,376.09L524.3,379.13L528.95,373.9L531.5,386.03L533.84,390.25L537.52,387.63L540.56,384.26L547.5,379.92L550.52,376.62L550.47,373.99L549.3,370.6L549.15,367.77L552.05,366.53L553.73,366.88L557,368.59L558.96,369.01L561.41,368.24L562.34,366.59L562.93,364.97L564.29,364.26L565.71,364.97L568.4,368.24L570.39,369.01L574.48,369.74L577.61,371.9L580.21,375.05L582.77,378.86L589.71,392.23L591.76,393.98L595.55,393.8L597.27,392.5L597.37,388.84L595.47,376.44L594.45,372.31L592.83,369.04L590.22,366.53L593.87,362.11L605.46,354.15L599.36,349.2L599.25,341.81L592.92,337.13L584.51,334.77L578.06,334.36L565.41,337.89L559.56,336.01L562.7,329.65L558.42,322.77L550.25,316.36L541.24,311.6L530.87,308.37L527.11,304.96L524.18,300.55L523,296.03L523.65,292.6L525.38,287.11L527.82,282.03L530.61,279.92L532.81,281.36L534.01,284.47L534.82,288.16L535.94,291.22L538.2,293.83L543,296.5L547.97,300.85L558.28,304.75L565.87,311.95L571.28,314.1L606.69,314.63L614.73,311.95L626.25,311.1L646.79,314.42L657.47,309.69L674.43,298.94L683.97,296.15L690.05,293.12L695.65,289.1L698.71,285.05L683.77,285.17L669.91,291.98L665.32,292.33L660.51,289.98L666.5,289.75L681.95,279.92L688.45,278.54L701.59,279.39L707.84,277.46L707.84,274.99L696.15,274.08L692.47,272.74L684.69,268.16L681.95,267.61L681.95,265.14L690.71,264.79L708.01,267.58L741.89,263.53L744.85,262.24L747.68,259.67L747.87,256.88L750.83,255.8L765.96,255.48L770.55,254.6L793.17,243.36L799.43,242.83L799.43,240.37L794.38,239.06L790.03,239.64L781.16,242.83L776.15,243.03L762.76,238.12L762.76,235.46L778.59,232.44L787.85,228.99L791.95,224.4L789.01,216.19L782.03,211.34L773.7,208.89L752.88,206.73L746.65,202.85L733.83,206.03L727.56,204.51L719.28,200.74L711.78,195.29L707.84,188.67L721.93,181.4L733.83,186.48L731.08,177.79L733.04,174.93L737.67,175.98L756.42,187.29L784.2,191.12L789.69,188.81L791.65,184.73L789.88,181.46L784.2,181.52L785.86,177.79L790.13,175.11L791.95,171.55L785.86,169.69L782.76,167.88L780.4,165.44L773.54,153.67L771.19,151.78L769.71,149.6L765.94,134.94L763.55,131.28L761.06,129.27L755.15,127.62L748.47,127.56L736.21,131.45L689.5,134.94L686.51,136.08L680.53,141.31L678.02,142.44L675.28,145.67L665.07,166.66L661.15,171.87L660.1,175.05L662.67,176.42L665.18,176.33L667.93,175.55L670.13,173.65L671.03,170.21L671.66,166.89L673.1,167.33L674.68,169.57L675.74,171.55L676.6,175.22L676.37,178.2L676.57,180.94L678.79,183.77L682.11,184.29L688.92,181.11L691.79,182.69L692.89,187.18L690.84,190.07L687.89,192.31L686.38,194.94L689.03,199.14L694.73,201.36L700.09,204.95L701.74,213.39L692.18,207.55L687.39,206.55L685,210.93L690.81,220.4L692.64,225.78L688.74,228.09L685.51,225.9L681.72,220.58L678.57,214.44L677.26,209.59L676.88,202.64L675.47,197.59L672.67,193.92L667.99,191.12L666.27,194.65L663.16,196.72L659.63,196.92L656.64,194.94L655.85,192.89L654.45,187.59L653.53,186.48L652.15,187.24L650.59,190.56L649.72,191.12L646.31,191.09L645.54,188.87L645.29,182.69L645.78,178.43L646.65,173.71L647.03,169.16L646.06,165.44L640.9,164.88L626.76,172.75L623.85,170.21L626.66,154.37L625.3,149.54L617.78,149.34L624.12,139.91L627.69,135.93L631.45,134.94L634.66,138.2L638.4,150.36L640.59,154.43L644.72,155.71L650.39,155.27L656.16,153.73L660.51,151.78L665.79,147.45L666.84,143.43L665.89,138.52L665.07,131.28L663.61,126.34L653.53,114.2L649.57,110.42L640.48,107.35L636.79,104.36L632.89,102.27L611.69,104.33L606.47,107.14L603.08,111L603.92,115.42L603.92,117.62L600.56,117.42L598.08,115.94L595.84,114.11L593.29,112.98L581.93,112.98L576.7,112.02zM357.93,86.58L352.08,82.99L346.39,80.96L341.34,83.57L338.12,84L337.03,86.23L337.5,89.31L338.99,92.32L341.09,93.6L350.48,95.97L375.57,98.18L381.31,100.88L388.74,112.72L393.99,115.42L406.97,114.78L412.16,111.88L417.58,110.54L416.62,102.47L414.2,95.39L410.42,90.35L405.4,88.44L403.2,88.73L401.58,89.48L399.3,91.31L398.65,92.7L398,94.99L397.03,97.22L395.49,98.18L392.21,97.57L390.86,95.97L390.12,93.74L388.65,91.31L388.06,89.54L388.35,87.83L388.2,86.52L386.23,86L363.33,88.44L357.93,86.58zM90.2,71.39L97.94,70.04L103.69,67.81L107.14,65.56L104,64.67L95.11,67.15L87.06,70.21L84.75,71.9L90.2,71.39zM103.13,36.1L100.18,35.23L95.55,32.22L88.87,23.69L87.54,29.17L90.9,32.16L95.08,36.86L98.86,39.86L102.67,40.33L103.13,36.1zM60.64,23.8L60.43,22.04L59.11,20.48L56.43,18.9L55.92,17.8L55.03,15.43L54,13.38L50.9,8.91L47.95,5.94L44.93,5.16L44.8,8.22L46.32,11.65L46.49,13.35L45.19,14.91L43.34,16.59L43.46,18.43L45.46,19.3L48.52,19.99L55.85,23.4L58.89,24.29L60.64,23.8zM16.57,0L15.41,1.15L15.65,3.84L16.23,6L17.63,6.69L19.04,6.83L20.55,8.48L25.04,10.5L27.61,13.7L31.09,16.01L34.2,16.38L34.93,15.12L34.26,13.18L32.22,11.28L25.46,7.38L24.17,5.57L19.11,1.15L16.57,0z"
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

// src/Falklandislands.tsx
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
var Falklandislands = ({
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
      FalklandislandsSingle,
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
      FalklandislandsMultiple,
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
var FalklandislandsSingle = ({
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
var FalklandislandsMultiple = ({
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
var Falklandislands_default = Falklandislands;

// src/index.ts
var src_default = Falklandislands_default;
