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

// src/Tibet.tsx
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
var stateCode = ["Chamdo", "Lhasa", "Nagqu", "Ngari", "Nyingchi", "Shannan", "Shigatse"];
var drawPath = {
  Chamdo: "M779.93,363.16L781.97,356.67L782.5,349.04L783.37,344.63L787.29,343.93L791.26,351.61L793.44,348.53L792.75,344.25L796.27,340.65L795.55,334.97L799.04,330.51L798.26,325.8L797.63,319.67L795.81,313.03L796.43,307.38L797.78,302.7L797.45,298.24L796.47,293.53L794.99,288.34L794.82,283.65L793.72,276.79L793.05,271.87L793.65,265.73L790.48,261.74L787.61,255.48L784.68,249.66L781.71,245.72L780.85,241.33L784.22,239.8L787.54,241.36L790.11,236.27L787.35,232.75L784.25,230.08L781.38,227.21L778.3,222.76L774.52,217.26L773.52,210.1L769.55,203.26L766.21,197.84L764.85,192.85L761.26,190.55L757.29,188.03L751.47,186.04L748,184.84L743.28,186.38L738.74,186.04L734.3,185.38L732.3,188.51L733.34,194.81L730.27,195.3L729.36,201.91L727.01,205.37L723.65,206.91L717.72,206.83L712.23,208.81L708.9,209.86L710.08,214.88L711.56,220.02L709.5,223.47L705.85,221.71L702.3,221.32L698.94,219.62L695.47,216.28L691.38,211.44L686.81,215.56L688.56,220.37L688.34,227.4L685.06,223.44L679.93,221.94L673.71,221.74L669.91,219.68L662.93,219.64L659.17,217.73L656.63,211.22L658.03,206.88L656.22,200.9L653.34,197.9L643.6,196.43L637.75,192.71L635.06,197.16L631.12,199.83L630.53,204.44L628.91,209.63L628.57,215.24L632.04,218.91L631.21,224.82L633.81,228.75L637.44,231.5L636.84,235.53L640.05,238.51L640.38,246.4L635.34,249.26L631.06,248.27L630.6,243.91L630.25,239.2L626.27,238.98L624.91,235.44L621.86,237.1L617.98,239.39L614.41,241.17L613.05,245.04L611.76,249.75L613.68,253.93L615.01,259.21L610.75,260.12L606.29,260.14L602.15,260.41L598.48,259.59L595.27,258.51L591.98,257.7L588.49,259.23L591.3,264.28L595.76,269.31L600.37,271.53L603.86,274.46L607.79,277.45L611.84,275.03L616.07,273.15L621.62,274.1L626.03,273.2L629.78,271.46L633.62,272L636.99,272.24L640.79,273.13L645.18,270.82L650.69,270.31L654.91,272.61L658.47,272.16L662,272.33L665.53,273.45L668.83,276.36L671.1,279.93L675.23,284.87L679.02,287.98L682.74,287.88L686.49,289.01L690.34,285.41L693.93,282.71L698,284.74L701.87,288.24L704.09,292.83L704.48,297.11L702.22,301.06L700.47,304.67L698.92,308.45L700.84,311.65L703.43,313.97L707.64,313.63L710.69,315.16L715.69,314.16L721.11,313.67L722.68,319.31L726.28,322.93L730.13,323.67L732.77,321.63L733.59,328.23L734.86,333.98L735.22,337.95L738.94,338.34L740.23,332.22L745.72,332.11L749.43,335.97L752.5,338.53L757.13,338.16L762.86,338.34L762.43,341.97L760.57,343.24L763.04,348.17L766.58,347.76L769.78,351.41L773.87,353.65L776.01,358.64L779.93,363.16z",
  Lhasa: "M549.47,287.6L544.52,287.92L539.56,287.16L534.93,285.99L531.41,289.31L527.81,289.58L524.44,289.98L521.37,286.19L518.97,280.08L520.7,275.52L518.57,271.17L515.23,268.25L511.12,268.5L506.97,268.97L503.24,264.37L501.53,258.83L500.65,254.39L496.9,252.49L492.52,254.26L489.28,258.06L484.31,255.18L478.86,253.66L476.1,257.29L475.37,262.8L474.02,267.46L471.91,272.75L472.87,277.46L470.18,280.27L466.56,281.9L462.52,285.15L457.36,287.96L454.8,293.66L451.4,299.37L446.84,300.79L443.31,298.85L442.03,303.42L443.27,309.22L441.44,313.16L439.8,316.74L440.25,322.9L443.58,326.75L447.1,328.25L450.94,327.98L456.14,328.21L460.12,329.57L463.01,330.52L466.54,332.23L470.94,331.34L474.43,329.1L478.36,328.45L483.78,327.23L488.9,324.56L493.18,321.42L500.5,320.86L504.34,320.05L508.06,318.22L512.8,319.16L518.19,318.23L522.42,317.84L526.52,318.7L531.6,318.17L535.85,318L539.57,314.92L539.94,310.58L539.41,307.49L535.68,305.91L532.82,302.79L536.43,300.68L539.82,299.17L542.35,296.57L546.33,293.8L549.47,287.6z",
  Nagqu: "M384.88,0L379.38,0.55L376.15,1.98L369.65,2.33L366.2,4.56L361.95,4.5L354.38,6.02L350.3,3.82L345.48,3.88L338.94,7.02L333.72,7.87L327.83,8.93L322.9,8.88L318.47,11.54L313.94,12.24L308.98,13.42L302.62,15.63L300.47,21.63L297.28,24.03L296.88,29.26L293,31.73L287.01,33.2L281.2,35.21L278.2,39.26L274.68,36.88L269.75,34.83L262.67,34.03L255.28,35.52L250.77,38.07L244.54,40.8L234.42,45.54L228.53,50.56L222.62,52.47L217.7,50.36L212.99,52.64L212.67,60.46L213.79,67.87L218.54,72.24L222.56,74.08L226.97,75.88L227.66,81.55L231.81,84.63L236.44,87.76L235.35,94.21L233.64,101.42L231.52,106.96L232.17,112.09L235.79,114.25L239.78,118.09L244.45,118.82L249.61,118.9L254.43,121.16L259,122.62L263.7,122.1L266.39,126.89L271.07,130.58L274.66,132.9L279.28,134.64L283.75,137.66L285.11,141.52L287.41,145.01L292.18,146.99L294.77,151.49L294.93,157.92L295.54,164.59L296.89,171.03L293.06,173.55L289.94,176.38L283.56,177.8L278.66,179.67L273.19,181.98L268.67,184.4L265.34,186.5L264.05,190.52L262.53,195.7L259.89,200.54L258.1,205.69L260.78,210.04L260.97,217.36L261.44,223.68L265.37,224.82L268.85,227.86L273.2,229.82L276.92,233.43L279.43,237.75L284.76,240.18L289.51,242.47L292.78,243.75L297.37,244.62L300.3,247L301.27,252.18L305.19,256.41L307.47,263.11L309.76,269.54L310.83,275.87L315.6,279.38L320.6,278.49L320.99,275.2L325.57,274.02L329.62,275.14L328.54,270.82L324.69,268.57L323.42,263.82L324.12,259.37L328.94,258.2L331.62,261.43L335.5,257.73L336.94,262.13L338.55,268.08L340.21,273.7L347.39,274.82L352.05,276.21L353.46,280.77L357.11,282.42L360.63,283.4L364.85,281.98L370.66,282.27L374.28,282.41L376.06,285.86L380.24,288.47L385.57,287.95L389.33,291.89L391.3,294.88L395.92,290.01L400.64,289.16L404.88,289.35L409.01,288.63L413.75,286.97L418.43,286.34L423.07,287.87L427.63,287.72L431.82,288.7L435.7,289.42L438.73,291.4L441.48,294.54L443.31,298.85L446.84,300.79L451.4,299.37L454.8,293.66L457.36,287.96L462.52,285.15L466.56,281.9L470.18,280.27L472.87,277.46L471.91,272.75L474.02,267.46L475.37,262.8L476.1,257.29L478.86,253.66L484.31,255.18L489.28,258.06L492.52,254.26L496.9,252.49L500.65,254.39L501.53,258.83L503.24,264.37L506.97,268.97L511.12,268.5L515.23,268.25L518.57,271.17L520.7,275.52L518.97,280.08L521.37,286.19L524.44,289.98L527.81,289.58L531.41,289.31L534.93,285.99L539.56,287.16L544.52,287.92L549.47,287.6L553.63,283.7L555.83,277.01L559.64,273.41L564.31,273.2L566.6,276.95L569.79,280.03L573.43,277.79L578.16,278.33L580.93,282.93L585.61,285.68L589.07,285.72L593.45,285.82L597.52,284.65L602.01,285.05L605.58,281.74L607.79,277.45L603.86,274.46L600.37,271.53L595.76,269.31L591.3,264.28L588.49,259.23L591.98,257.7L595.27,258.51L598.48,259.59L602.15,260.41L606.29,260.14L610.75,260.12L615.01,259.21L613.68,253.93L611.76,249.75L613.05,245.04L614.41,241.17L617.98,239.39L621.86,237.1L624.91,235.44L626.27,238.98L630.25,239.2L630.6,243.91L631.06,248.27L635.34,249.26L640.38,246.4L640.05,238.51L636.84,235.53L637.44,231.5L633.81,228.75L631.21,224.82L632.04,218.91L628.57,215.24L628.91,209.63L630.53,204.44L631.12,199.83L635.06,197.16L637.75,192.71L636.5,187.56L632.96,184.78L629.91,181.23L625.87,179.05L622.07,181.3L617.79,183.15L612.82,185.53L609.43,186.91L603.55,187.42L598.83,187.21L596.26,184.68L590.74,182.47L587.78,185.02L582.64,184.8L578.81,184.02L574.67,180.01L570.35,178.92L566.61,180.05L563.79,175.39L558.84,176.23L553.71,174.54L548.2,175.24L542.81,174.31L538.62,174.38L534.03,173.38L530.68,169.13L525.14,170.52L521.52,168.16L518.61,165.45L508.34,159.7L505.02,156.74L501.79,150.74L495.21,148.83L492.4,151.84L487.66,152.69L482.02,156.51L476.09,156.63L469.78,152.43L466.46,150.85L463.17,150.7L457.94,144.86L455.87,138.49L452.42,135.97L448.83,134.57L447.6,129.98L444.97,127.2L439.92,121.87L436.59,118.11L435.71,112.4L440.34,108.8L442.38,102.06L441.11,96.87L441.14,91.27L439.69,87.46L438.99,82.43L442.45,79.08L441.23,75.06L437.69,74.04L433.46,74.75L432.09,69.24L431.13,64.04L427.21,59.02L429.41,54.95L432.26,51.79L435.28,50.08L437.95,44.78L438.06,38.89L439.29,33.32L440.3,29.33L435.89,29.68L430.59,28.55L426.2,25.59L427.11,21.48L433.6,17.93L428.49,15.19L424.06,11.51L419.41,9.11L415.32,9.93L411.06,7.34L407.46,6.06L403.97,5.61L401.14,7.81L397.61,4.8L394.17,1.67L389.67,0.19L384.88,0L384.88,0z",
  Ngari: "M164.17,37.61L159.9,36.63L156.2,36.33L153.2,39.52L151.39,43.46L147.21,45.84L141.97,48.44L140.21,53.95L136.08,55.87L131.86,56.89L128.03,58.27L122.77,58.66L119.23,54.84L114.69,53.86L109.14,53.43L105.31,51.6L102.25,53.11L98.08,54.73L94.85,53.59L91.6,54.11L88.23,52.47L83.44,49.57L78.83,49.38L73.43,54.78L73.81,59.84L70.79,62.99L67.06,65.77L63.85,68.93L61.82,75.21L57.84,78.55L57.97,85.53L56.43,91.75L53.53,94.46L50.07,95.03L45.41,95.23L38.82,96.14L32.51,96.77L25.91,98.93L22.72,104.08L19.83,109.21L14.98,111.6L12.11,115.06L13.99,121.09L14.63,127.27L12.59,133.48L17.13,142.13L21.66,146.17L24.92,149.46L27.58,153.18L29.71,156.47L30.12,162.84L32.53,166.79L33.44,172.97L34.73,178.06L34.78,182.18L32.46,185.15L28.5,188.63L23.27,192.43L18.73,190.49L15.4,186.33L13.83,179.65L8.88,180.77L4.66,181.59L0.96,183.98L2.6,187.67L3.58,192.75L6.4,198.57L8.84,202.06L11.98,205.36L14.32,211.2L13.04,219.84L16.14,225.21L13.94,231.21L15.09,236.41L19.32,239.93L23.99,236.98L26.95,234.09L30.23,236.62L32.97,240.91L35.86,246.4L39.07,249.39L42.26,253.16L45.8,256.05L49.12,255.61L52.48,254.67L56.01,255.51L59.73,258.84L63.29,260.83L67.58,263.37L70.84,267.16L70.59,271.22L74.25,274.34L79.23,276.36L84.31,278.24L88.56,279.83L92.32,282.92L97.48,286.12L101.77,288.53L104.34,294.25L108.71,298.21L111.9,294.45L115.59,289.92L116.67,285.65L117.16,281.33L121.55,281.61L124.69,279.78L128.08,280.36L131.88,281.84L135.31,282.79L138.83,283.75L143.34,284.7L145.81,288.92L149.39,285.81L151.62,280.71L156.31,281.35L163.07,281.81L163.49,276.27L164.76,271.54L165.36,265.95L170.02,265.18L174.58,269.77L176,274.05L179.71,275.39L183.22,271.81L184.64,267.2L183.11,263.17L179.22,261.88L176.55,258.51L172.96,257.47L169.04,254.4L166.56,248.53L170.51,247.17L174.91,245.18L176.17,241.5L175.82,236.71L176.65,231.97L180.13,227.29L184.77,223.59L188.88,224.81L193.6,226.39L197.47,227.39L203.08,227.21L208.31,228.03L213.29,227.58L217.3,226.04L220.92,225.38L224.24,223.85L229.86,224.15L231.66,218.13L234.93,221.9L238.23,222.95L240.95,225.31L238.84,231.14L232.75,233.56L231.16,238.38L236.19,240.29L238.43,244.55L241.13,246.3L242.79,252.31L245.08,258.11L241.87,261.32L239.73,264.31L237.19,267.91L236.34,272.3L238.76,276.38L239.53,280.97L241.01,284.6L243.69,287.99L244.98,291.84L245.67,297.3L251.01,301.85L254.73,306.15L258.13,308.9L262.48,311.64L266.99,312.51L270.21,309.96L272.26,306.08L276.71,307.09L278.68,303.53L282.09,301.49L285.12,298.2L286.13,293.93L286.66,288.09L289.44,283.52L289.58,277.69L288.17,272.62L284.1,270.55L286.64,268.54L287.56,264.84L289.69,259.63L291.33,264.33L295.42,262.38L296.6,257.38L298.61,253.84L298.61,253.84L301.27,252.18L300.3,247L297.37,244.62L292.78,243.75L289.51,242.47L284.76,240.18L279.43,237.75L276.92,233.43L273.2,229.82L268.85,227.86L265.37,224.82L261.44,223.68L260.97,217.36L260.78,210.04L258.1,205.69L259.89,200.54L262.53,195.7L264.05,190.52L265.34,186.5L268.67,184.4L273.19,181.98L278.66,179.67L283.56,177.8L289.94,176.38L293.06,173.55L296.89,171.03L295.54,164.59L294.93,157.92L294.77,151.49L292.18,146.99L287.41,145.01L285.11,141.52L283.75,137.66L279.28,134.64L274.66,132.9L271.07,130.58L266.39,126.89L263.7,122.1L259,122.62L254.43,121.16L249.61,118.9L244.45,118.82L239.78,118.09L235.79,114.25L232.17,112.09L231.52,106.96L233.64,101.42L235.35,94.21L236.44,87.76L231.81,84.63L227.66,81.55L226.97,75.88L222.56,74.08L218.54,72.24L213.79,67.87L212.67,60.46L212.99,52.64L208.72,52.86L202.94,53.19L197.5,52.34L192.4,51.5L188.67,50.53L184.2,51.25L181.06,48.94L178.01,47.01L177.2,43.05L175.14,38.37L168.74,38.82L164.17,37.61zM286.55,256.5L285.68,252.86L289.84,250.78L289.84,250.78L285.69,252.86L286.55,256.49L289.52,259.45L286.55,256.5z",
  Nyingchi: "M650.69,270.31L645.18,270.82L640.79,273.13L636.99,272.24L633.62,272L629.78,271.46L626.03,273.2L621.62,274.1L616.07,273.15L611.84,275.03L607.79,277.45L605.58,281.74L602.01,285.05L597.52,284.65L593.45,285.82L589.07,285.72L585.61,285.68L580.93,282.93L578.16,278.33L573.43,277.79L569.79,280.03L566.6,276.95L564.31,273.2L559.64,273.41L555.83,277.01L553.63,283.7L549.47,287.6L546.33,293.8L542.35,296.57L539.82,299.17L536.43,300.68L532.82,302.79L535.68,305.91L539.41,307.49L544.7,309.91L545.23,315.59L548.97,313.75L553.13,313.62L557.04,313.08L560.81,312.26L563.96,315.59L566.29,318.94L567.47,323.73L567.45,328.76L565.06,332.54L562.03,335.83L558.97,338.26L556.38,340.67L555.33,344.83L551.63,347.74L545.99,349.52L542.41,351.99L545.68,353.81L550,353.34L554.41,354.36L559.07,355.78L562.97,354.79L566.36,355.15L570.56,355.1L576.65,354.66L582.99,357.46L589.32,357.98L593.34,357.42L596.81,356.35L600.81,356.16L602.88,351.41L605.35,347.97L609.17,343.65L611.4,339.46L614.18,336.98L617.21,335.49L620.17,333.42L624.16,332.39L626.9,328.79L630.41,330.16L633.89,334.59L637.9,335.81L643.04,336.81L648.61,338.44L652.02,340.12L658.43,341.11L661.68,336.91L663.45,333.22L667.76,330.83L672.49,327.84L675.78,326.08L679.39,325.42L682.72,323.16L686.07,326.42L687.8,330.53L691.54,334.21L689.07,337.04L685.91,339.75L686.49,344.82L689.27,345.75L692.82,342.58L698.88,342.87L701.08,348.32L702.82,354.03L698.98,357.69L696.04,361.58L693.59,364.3L691.43,368.81L695.62,370.92L699.08,368.67L704.91,367.04L709.5,369.73L714.6,370.97L717.63,372.9L721.71,371.71L727.26,374.51L732.51,376.47L736.64,373.8L737.52,370.1L740.03,365.3L744.32,365.61L747.65,369.41L751.59,371.71L755.59,373.27L757.66,376.66L761.76,379.57L765.8,376.51L766.98,371.47L771.03,374.93L772.23,380.2L775.61,381.01L779.98,379.48L784.08,376.59L785.14,370.56L781.73,366.93L779.93,363.16L776.01,358.64L773.87,353.65L769.78,351.41L766.58,347.76L763.04,348.17L760.57,343.24L762.43,341.97L762.86,338.34L757.13,338.16L752.5,338.53L749.43,335.97L745.72,332.11L740.23,332.22L738.94,338.34L735.22,337.95L734.86,333.98L733.59,328.23L732.77,321.63L730.13,323.67L726.28,322.93L722.68,319.31L721.11,313.67L715.69,314.16L710.69,315.16L707.64,313.63L703.43,313.97L700.84,311.65L698.92,308.45L700.47,304.67L702.22,301.06L704.48,297.11L704.09,292.83L701.87,288.24L698,284.74L693.93,282.71L690.34,285.41L686.49,289.01L682.74,287.88L679.02,287.98L675.23,284.87L671.1,279.93L668.83,276.36L665.53,273.45L662,272.33L658.47,272.16L654.91,272.61L650.69,270.31z",
  Shannan: "M545.23,315.59L544.7,309.91L539.41,307.49L539.94,310.58L539.57,314.92L535.85,318L531.6,318.17L526.52,318.7L522.42,317.84L518.19,318.23L512.8,319.16L508.06,318.22L504.34,320.05L500.5,320.86L493.18,321.42L488.9,324.56L483.78,327.23L478.36,328.45L474.43,329.1L470.94,331.34L466.54,332.23L463.01,330.52L460.12,329.57L458.96,334.89L457.52,339.39L456.22,342.9L454.54,348.67L454.7,354.43L452.11,359.08L452.29,365.92L453.83,371.51L456.56,375.28L453.12,379.78L458.69,380.6L462.59,383.46L466.44,384.69L471.1,385.47L476.23,384.6L482.58,385.46L486.83,386.59L490.61,387.33L495.54,386.29L500.11,384.88L504.64,387.73L509.07,392.18L511.29,396.13L515.57,397.66L521.53,398.69L527.19,396.6L533.1,393.6L538.16,394.96L544.01,394.42L548.34,391.79L552.17,389.28L552.33,384.07L554.27,379.95L558.45,379.04L561.69,377.06L564.21,374.64L568.36,372.18L571.16,366.77L575.03,362.08L578.94,359.45L582.99,357.46L576.65,354.66L570.56,355.1L566.36,355.15L562.97,354.79L559.07,355.78L554.41,354.36L550,353.34L545.68,353.81L542.41,351.99L545.99,349.52L551.63,347.74L555.33,344.83L556.38,340.67L558.97,338.26L562.03,335.83L565.06,332.54L567.45,328.76L567.47,323.73L566.29,318.94L563.96,315.59L560.81,312.26L557.04,313.08L553.13,313.62L548.97,313.75L545.23,315.59z",
  Shigatse: "M407.8,416.48L408.45,411.45L409.55,407.08L413.45,403.89L416.82,400.81L418.53,397.55L421.45,394L425.4,390.76L428.41,385.2L432.16,381.22L435.37,379.6L439.39,378.3L443.85,378.23L447.61,379.49L453.12,379.78L456.56,375.28L453.83,371.51L452.29,365.92L452.11,359.08L454.7,354.43L454.54,348.67L456.22,342.9L457.52,339.39L458.96,334.89L460.12,329.57L456.14,328.21L450.94,327.98L447.1,328.25L443.58,326.75L440.25,322.9L439.8,316.74L441.44,313.16L443.27,309.22L442.03,303.42L443.31,298.85L441.48,294.54L438.73,291.4L435.7,289.42L431.82,288.7L427.63,287.72L423.07,287.87L418.43,286.34L413.75,286.97L409.01,288.63L404.88,289.35L400.64,289.16L395.92,290.01L391.3,294.88L389.33,291.89L385.57,287.95L380.24,288.47L376.06,285.86L374.28,282.41L370.66,282.27L364.85,281.98L360.63,283.4L357.11,282.42L353.46,280.77L352.05,276.21L347.39,274.82L340.21,273.7L338.55,268.08L336.94,262.13L335.5,257.73L331.62,261.43L328.94,258.2L324.12,259.37L323.42,263.82L324.69,268.57L328.54,270.82L329.62,275.14L325.57,274.02L320.99,275.2L320.6,278.49L315.6,279.38L310.83,275.87L309.76,269.54L307.47,263.11L305.19,256.41L301.27,252.18L298.61,253.84L296.61,257.38L295.42,262.38L291.33,264.33L289.69,259.63L287.56,264.84L286.64,268.54L284.1,270.55L288.17,272.62L289.58,277.69L289.44,283.52L286.66,288.09L286.13,293.93L285.12,298.2L282.09,301.49L278.68,303.53L276.71,307.09L272.26,306.08L270.21,309.96L266.99,312.51L262.48,311.64L258.13,308.9L254.73,306.15L251.01,301.85L245.67,297.3L244.98,291.84L243.69,287.99L241.01,284.6L239.53,280.97L238.76,276.38L236.34,272.3L237.19,267.91L239.73,264.31L241.87,261.32L245.08,258.11L242.79,252.31L241.13,246.3L238.43,244.55L236.19,240.29L231.16,238.38L232.75,233.56L238.84,231.14L240.95,225.31L238.23,222.95L234.93,221.9L231.66,218.13L229.86,224.15L224.24,223.85L220.92,225.38L217.3,226.04L213.29,227.58L208.31,228.03L203.08,227.21L197.47,227.39L193.6,226.39L188.88,224.81L184.77,223.59L180.13,227.29L176.65,231.97L175.82,236.71L176.17,241.5L174.91,245.18L170.51,247.17L166.56,248.53L169.04,254.4L172.96,257.47L176.55,258.51L179.22,261.88L183.11,263.17L184.64,267.2L183.22,271.81L179.71,275.39L176,274.05L174.58,269.77L170.02,265.18L165.36,265.95L164.76,271.54L163.49,276.27L163.07,281.81L156.31,281.35L151.62,280.71L149.39,285.81L145.81,288.92L146.61,293.96L150.54,296.51L154.61,298.31L158.62,300.47L162.05,302.54L164.36,305.64L167.43,307.89L171.56,312.26L175.53,312.92L178.83,314.11L181.86,315.88L185.39,316.67L188.71,319.59L192.53,323.59L194.83,328.2L197.16,331.67L199.48,334.39L202.92,335.32L206.98,332.39L211.17,329.7L215.66,329.5L220.68,331.24L223.76,333.8L224.05,338.62L226.06,343.15L226.64,347.83L231.33,349.97L234.76,353.91L239.41,354.94L243.92,358.54L251.24,361.5L254.72,360.65L258.34,357.68L262.15,359.84L262.13,363.94L260.03,367.01L260.46,371.88L264.29,373.33L269.6,374.05L274.29,372.66L277.58,374.06L281.89,372.28L284.35,376.01L287.49,379.32L290.09,383.78L292.14,387.56L294.79,391.07L297.87,388.3L298.01,383.28L300.88,380.84L302.58,386.18L306.11,388.94L309.27,390.55L312.69,389.52L315.35,384.72L320.34,382.87L323.25,384.6L326.32,386.47L330.02,388.48L333.3,389.58L337.19,393.27L341.77,394.4L345.2,394.41L350.12,394.05L355.55,394.28L359.52,395.17L363.92,391.53L370.07,391.34L375.26,391.34L378.95,389.2L382.5,388.76L387.19,387.34L391.96,384.76L395.24,382.7L400.06,384.43L403.52,388.42L405.05,392.72L404.14,398.56L402.98,402.76L401.41,407.01L401.55,410.92L403.78,414.1L407.8,416.48L407.8,416.48z"
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

// src/Tibet.tsx
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
var Tibet = ({
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
      TibetSingle,
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
      TibetMultiple,
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
var TibetSingle = ({
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
var TibetMultiple = ({
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
var Tibet_default = Tibet;

// src/index.ts
var src_default = Tibet_default;
