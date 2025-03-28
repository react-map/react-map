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

// src/Rwanda.tsx
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
var stateCode = ["Kigali City", "Northern", "Eastern", "Western", "Southern"];
var drawPath = {
  "Kigali City": "M538.03,306.18L525.75,297.45L512.78,288.83L506.27,285L503.2,283.62L501.21,288.76L498.48,295.46L496.33,298.22L492.59,297.65L482.95,299.36L474.98,302.94L472.79,305.83L468.52,310.75L463.35,313.8L458.51,310.55L453.27,307.13L449.49,308.43L446.5,313.19L443.27,318.56L441.52,322.55L443.67,328.53L445.22,333.25L443.75,334.39L442.72,334.8L442.51,335.3L443.31,336.63L444.49,339.98L445.54,342.97L446.36,344.28L447.5,345.82L448.67,348.26L449.85,351.23L450.99,354.08L450.32,355.81L450.2,356.54L450.14,358.05L449.85,360.55L449.1,363.03L447.76,365.06L451.48,370.92L454.04,376.99L452.25,380L450.87,381.5L447.68,382.78L444.79,385.71L444.04,389.52L446.44,394.3L449.81,396.39L451.52,396.64L453.76,397.37L456.24,398.14L457.17,398.85L458.96,397.33L462.74,395.66L465.18,394.32L467.24,392.16L470.06,391.39L471.48,393.08L473.31,395.5L476.69,395.86L479.11,395.56L480.21,395.21L481.53,394.89L483.87,394.44L486.45,393.87L488.72,393.16L492.26,392.41L495.43,392.12L496.57,392.08L497.91,391.84L498.87,390.37L501.23,388.36L503.97,386.34L506.23,385.16L510.44,383.33L515.22,381.64L520.03,383.01L524.18,388.46L526.84,392.55L529.83,396.29L532.39,399.85L535.06,396.07L538.17,388.95L540.77,374.75L541.95,360.55L542.19,355.99L544.33,353.55L550,351.15L555.37,348.59L557.22,345.27L557.36,337.54L556.55,331.09L554.23,328.75L551.79,325.76L552.05,320.33L550.55,314.66L547.87,310.83L547.36,308.74L544.47,308.31L538.03,306.18z",
  Northern: "M381.31,104.35L377.82,103.83L374.4,104.84L370.77,107.12L367.21,111.35L364.85,119.12L361.6,121.03L358.87,120.06L350.5,114.97L345.82,113.91L336.27,115.62L329.68,119.04L323.6,123.43L315.49,127.99L308.17,129.98L299.91,130.59L284.1,129.74L268.65,135.23L252.95,146.53L239.41,160.65L231.83,172.59L231.83,172.59L233.54,175.03L240.58,184.61L250.07,195.76L258.55,198.68L265.99,201.04L269.2,200.96L271.8,199.92L273.37,200.88L275.46,201.53L281.85,204.52L289.14,208.14L297.09,207.69L304.82,208.24L306.44,220.16L306.99,236.29L306.83,247.7L306.34,256.28L311.24,262.18L315.47,265.39L317.81,264.68L322.3,264.05L326.69,264.87L333.16,269.16L340.54,271.86L345.46,270.95L348.49,271.44L349.89,275.08L353.94,281.38L359.18,289.19L363.82,296.35L369.31,301.56L371.28,307.21L378.74,311.97L389.49,315.63L397.08,315.55L404.88,314.13L411.75,314.29L416.51,315.72L419.22,317.67L422.35,319.3L425.25,321.27L427.73,323.61L430.95,326.82L434.73,330.89L438.55,333.49L441.68,334.1L442.72,334.8L443.75,334.39L445.22,333.25L443.67,328.53L441.52,322.55L443.27,318.56L446.5,313.19L449.49,308.43L453.27,307.13L458.51,310.55L463.35,313.8L468.52,310.75L472.79,305.83L474.98,302.94L482.95,299.36L492.59,297.65L496.33,298.22L498.48,295.46L501.21,288.76L503.2,283.62L506.27,285L512.78,288.83L525.75,297.45L538.03,306.18L544.47,308.31L547.36,308.74L548.92,307.6L551.71,304.65L555.08,302.33L557.32,300.99L557.2,294.99L554.15,282.91L550.08,269.4L548.68,261.14L550.18,256.77L551.5,252.26L549.19,246.97L543.58,240.89L535.93,231.39L528.8,222.11L523.67,216.7L519.79,209.71L516.76,201.69L515.11,192.89L517.19,186.28L520.32,183.47L520.48,181.66L518.33,180.5L514.48,180.5L509.79,182.15L506.23,183.23L505.94,179.61L504.95,173.55L503.28,169.85L499.89,162.44L496.45,156.04L492.06,149.41L487.1,141.11L484.54,139.06L482.36,136.09L481.12,132.08L478.91,130.33L477.77,130.03L476.12,129.17L476.11,129.17L474.06,130.26L468.94,135.55L465.36,144.13L461.3,144.99L434.58,159.79L425.94,163.01L417.67,163.9L409.98,161.7L403.23,155.4L399.41,147.06L398.48,130.87L396.73,122.62L385.67,106.55L381.36,104.36L381.31,104.35z",
  Eastern: "M625.46,0L620.11,0.73L614.95,3.05L608.77,4.6L602.14,3.74L595.43,1.79L588.93,0.81L582.91,2.97L579.6,8.58L577.06,24.85L575.02,30.83L572.62,32.82L566.04,35.79L564.61,36.96L563.27,38.07L562.13,40.42L561.26,46.08L560.51,48.68L556.28,55.8L551.13,62.39L533.63,79.02L527.55,82.64L524.64,83.49L521.51,83.74L518.38,84.27L515.29,86.1L512.49,91.46L510.09,106.72L508.05,112.69L503.79,116.68L487.72,122.94L476.11,129.17L476.12,129.17L477.77,130.03L478.91,130.33L481.12,132.08L482.36,136.09L484.54,139.06L487.1,141.11L492.06,149.41L496.45,156.04L499.89,162.44L503.28,169.85L504.95,173.55L505.94,179.61L506.23,183.23L509.79,182.15L514.48,180.5L518.33,180.5L520.48,181.66L520.32,183.47L517.19,186.28L515.11,192.89L516.76,201.69L519.79,209.71L523.67,216.7L528.8,222.11L535.93,231.39L543.58,240.89L549.19,246.97L551.5,252.26L550.18,256.77L548.68,261.14L550.08,269.4L554.15,282.91L557.2,294.99L557.32,300.99L555.08,302.33L551.71,304.65L548.92,307.6L547.36,308.74L547.87,310.83L550.55,314.66L552.05,320.33L551.79,325.76L554.23,328.75L556.55,331.09L557.36,337.54L557.22,345.27L555.37,348.59L550,351.15L544.33,353.55L542.19,355.99L541.95,360.55L540.77,374.75L538.17,388.95L535.06,396.07L532.39,399.85L529.83,396.29L526.84,392.55L524.18,388.46L520.03,383.01L515.22,381.64L510.44,383.33L506.23,385.16L503.97,386.34L501.23,388.36L498.87,390.37L497.91,391.84L496.57,392.08L495.43,392.12L492.26,392.41L488.72,393.16L486.45,393.87L483.87,394.44L481.53,394.89L480.21,395.21L479.11,395.56L476.69,395.86L473.31,395.5L471.48,393.08L470.06,391.39L467.24,392.16L465.18,394.32L462.74,395.66L458.96,397.33L457.17,398.85L456.7,402.66L456.68,409.8L456.64,414.34L454.04,419.12L448.19,425.53L443.96,433.7L444.61,446.77L442.43,466.09L437.74,479.76L437.53,480.38L437.39,481.11L435.99,488.49L435.05,496.04L434.6,497.01L434.08,498.14L433.15,499.21L433.83,499.8L440.76,505.76L443.81,506.21L447.13,505.88L450.91,506.01L455.4,507.59L460.2,511.3L472.4,525.74L478.86,531.4L487.07,536.85L496.1,540.35L504.88,540.07L511.59,535.43L529.36,513.13L530.17,510.36L530.38,506.66L531.78,504.01L536.35,504.46L548.63,510.44L553.51,511.54L559.86,511.26L567.38,509.71L574.78,507.31L580.43,504.42L585.49,499.74L587.3,497.36L588.93,495.22L592.77,491.64L599.09,489.77L601,490.75L613.45,493.72L614.79,493.23L616.66,495.39L618.69,500.92L620.95,504.01L642.31,521.55L655.41,527.7L668.34,528.19L675.94,523.71L684.32,524.77L692.86,527.21L701.09,526.76L705.5,523.06L711.11,512.48L715.63,508.94L720.71,508.25L724.94,509.59L745.47,519.72L748.68,520.49L752.26,519.52L755.11,517.89L760.6,516.55L766.67,513.05L773.28,510.12L778.4,506.41L782.47,499.05L784.14,491.03L782.47,464.09L785.89,446.76L799.43,402.94L796.13,391.5L791.92,385.81L785.93,379.79L778.83,376.25L771.47,377.83L776.66,354.93L775.48,344.51L763.69,342.64L765.64,339.47L768.04,336.91L774.42,331.9L771.41,324.86L773.63,318.8L777.63,312.9L779.79,306.23L776.66,290.45L775.27,286.3L779.79,275.48L778.81,271.86L775.31,266.49L774.42,264.45L774.54,260.22L779.62,229.19L779.95,219.06L777.08,210.72L767.73,214.3L761.57,209.46L757.79,200.59L753.97,186.43L752.22,183.42L747.34,178.22L740.83,169.51L738.5,164.39L740.59,162.11L741.81,157.47L742.54,147.23L740.31,136.94L732.66,132.3L724.94,131.2L698.95,121.56L695.34,119.36L689.44,113.75L685.29,110.82L673.7,106.02L668.62,102.2L666.51,95.9L666.91,92.97L667.85,90.65L668.74,88.94L669.13,87.72L668.34,84.51L664.68,79.75L662.36,71.74L655.2,59.86L652.81,54.13L651.26,43.96L649.59,41.52L644.75,38.02L643.13,38.47L640.57,39.85L637.44,40.34L633.98,38.02L633.33,35.67L634.39,33.31L635.87,31.07L636.7,28.75L635.4,23.38L629.67,19.44L628.37,15.21L629.61,10.78L632.64,6.47L635.76,3.2L631.45,1.86L625.46,0z",
  Western: "M240.58,184.61L233.54,175.03L231.83,172.59L231.83,172.59L230.51,174.68L229.69,175.53L228.82,176.1L227.84,176.35L197.78,177.57L191.6,180.17L187.04,186.03L176.27,208.24L172.28,213.4L153.29,229.14L148.54,236.1L140.24,251.84L130.17,267.97L115.48,291.46L108.08,308.79L106.13,322.87L106.98,337.27L117.43,399.07L118.24,413.23L115.97,429.67L109.79,448.31L99.95,463.65L86.41,474.35L68.9,478.99L57.58,478.62L54.25,479.8L50.2,483.58L49.73,487L48.39,491.23L45.42,497.09L40.87,504.22L35.28,509.91L28.47,513.94L20.25,516.34L9.68,520.01L4.15,524.77L1.2,535.1L2,543.53L3.46,551.34L7.45,558.46L8.83,563.27L2,569.37L0.57,574.54L2.04,579.59L5.53,581.99L9.95,584.1L13.99,588.22L16.63,597.37L13.99,627.45L17.04,630.59L31.72,640.19L36.96,642.27L48.72,643.53L56.79,647.52L62.78,654.24L69.55,614.83L78.48,606.08L101.37,604.58L107.77,605.51L131.66,615.93L140.45,618.62L157.05,620.7L165.37,622.69L172.57,626.8L177.36,630.38L177.65,632.22L177.14,636.86L178.49,642.19L185.93,638.27L187.9,637.68L191.5,635.78L197.05,625.87L198.35,611.67L193.75,604.91L191.78,601.96L191.25,599.19L191.72,595.55L192.47,591.7L190.85,589.24L188.9,585.37L185.93,581.45L183.57,576.54L182.72,570.56L179.46,566.18L174.18,563.76L166.86,561.46L162.1,558.88L161.73,556.23L163.52,551.06L166.94,546.06L175.23,541.62L183.31,537.19L184.91,533.6L183.73,529.17L182.57,525.47L185.89,520.15L189.83,513.91L190.16,510.29L187.47,504.79L184.87,498.32L185.93,492.99L189.91,488.23L195.87,485.18L201.7,484.28L206.14,485.63L211.14,483.37L218.46,477.85L226.41,476.55L233.22,476.39L237.87,476.18L240.27,476.53L246,470.57L255.78,462.92L261.03,459.99L265.32,456.21L270.34,453.07L272.62,450.67L274.24,448.35L276.36,449.1L278.84,450.06L281.72,448.92L284.94,447.99L287.64,446.46L291.85,443.92L295.06,442.21L294.92,436.82L293.45,431.38L292.3,428.94L292.72,424.94L296.32,418.32L298.56,412.87L298.58,409.94L300.02,407.46L301,405.55L302.93,402.78L305.65,398.59L306.28,394.93L306.61,391.51L307.05,388.21L305.9,385.57L304.51,381.16L304.9,372.84L303.5,364.17L301.73,360.2L305.73,360.2L311.65,360.47L316.2,359.02L319.8,355.79L320.72,351.66L318.97,348.45L317.46,344.05L317.36,339.68L318.89,336.63L320.92,331.58L319.82,321.13L317.95,311.44L318.07,306.68L319.37,302.13L320.45,291.17L319.13,277.94L317.63,270.8L316.49,266.82L315.47,265.39L311.24,262.18L306.34,256.28L306.83,247.7L306.99,236.29L306.44,220.16L304.82,208.24L297.09,207.69L289.14,208.14L281.85,204.52L275.46,201.53L273.37,200.88L271.8,199.92L269.2,200.96L265.99,201.04L258.55,198.68L250.07,195.76L240.58,184.61z",
  Southern: "M255.07,696.04L262.55,693.52L269.91,688.84L278.53,687.7L282.59,687.86L285.72,686.64L288.65,684.85L300.36,680.61L303.17,680.78L307.38,682.17L323.74,687.58L331.16,688.72L339.97,687.62L343.79,685.3L345.49,681.63L346.8,673.37L349.72,669.71L354.24,669.66L363.02,672.31L372.8,672.6L380.75,671.09L388.15,666.73L396.2,658.55L401.44,651.43L406.24,643.29L409.98,634.7L412.1,626.03L412.28,621.64L413.93,581.26L422.44,551.5L419.62,521.23L422.18,501.08L422.14,497.42L423.28,495.22L427.3,495.1L430.45,496.89L433.15,499.21L434.08,498.14L434.6,497.01L435.05,496.04L435.99,488.49L437.39,481.11L437.53,480.38L437.74,479.76L442.43,466.09L444.61,446.77L443.96,433.7L448.19,425.53L454.04,419.12L456.64,414.34L456.68,409.8L456.7,402.66L457.17,398.85L456.24,398.14L453.76,397.37L451.52,396.64L449.81,396.39L446.44,394.3L444.04,389.52L444.79,385.71L447.68,382.78L450.87,381.5L452.25,380L454.04,376.99L451.48,370.92L447.76,365.06L449.1,363.03L449.85,360.55L450.14,358.05L450.2,356.54L450.32,355.81L450.99,354.08L449.85,351.23L448.67,348.26L447.5,345.82L446.36,344.28L445.54,342.97L444.49,339.98L443.31,336.63L442.51,335.3L442.72,334.8L441.68,334.1L438.55,333.49L434.73,330.89L430.95,326.82L427.73,323.61L425.25,321.27L422.35,319.3L419.22,317.67L416.51,315.72L411.75,314.29L404.88,314.13L397.08,315.55L389.49,315.63L378.74,311.97L371.28,307.21L369.31,301.56L363.82,296.35L359.18,289.19L353.94,281.38L349.89,275.08L348.49,271.44L345.46,270.95L340.54,271.86L333.16,269.16L326.69,264.87L322.3,264.05L317.81,264.68L315.47,265.39L316.49,266.82L317.63,270.8L319.13,277.94L320.45,291.17L319.37,302.13L318.07,306.68L317.95,311.44L319.82,321.13L320.92,331.58L318.89,336.63L317.36,339.68L317.46,344.05L318.97,348.45L320.72,351.66L319.8,355.79L316.2,359.02L311.65,360.47L305.73,360.2L301.73,360.2L303.5,364.17L304.9,372.84L304.51,381.16L305.9,385.57L307.05,388.21L306.61,391.51L306.28,394.93L305.65,398.59L302.93,402.78L301,405.55L300.02,407.46L298.58,409.94L298.56,412.87L296.32,418.32L292.72,424.94L292.3,428.94L293.45,431.38L294.92,436.82L295.06,442.21L291.85,443.92L287.64,446.46L284.94,447.99L281.72,448.92L278.84,450.06L276.36,449.1L274.24,448.35L272.62,450.67L270.34,453.07L265.32,456.21L261.03,459.99L255.78,462.92L246,470.57L240.27,476.53L237.87,476.18L233.22,476.39L226.41,476.55L218.46,477.85L211.14,483.37L206.14,485.63L201.7,484.28L195.87,485.18L189.91,488.23L185.93,492.99L184.87,498.32L187.47,504.79L190.16,510.29L189.83,513.91L185.89,520.15L182.57,525.47L183.73,529.17L184.91,533.6L183.31,537.19L175.23,541.62L166.94,546.06L163.52,551.06L161.73,556.23L162.1,558.88L166.86,561.46L174.18,563.76L179.46,566.18L182.72,570.56L183.57,576.54L185.93,581.45L188.9,585.37L190.85,589.24L192.47,591.7L191.72,595.55L191.25,599.19L191.78,601.96L193.75,604.91L198.35,611.67L197.05,625.87L191.5,635.78L187.9,637.68L185.93,638.27L178.49,642.19L178.58,642.55L187.12,650.57L189.52,655.46L188.67,659.94L183.22,666.61L181.88,670.72L182.77,675.28L186.43,683.46L186.9,688.39L190.38,695.88L200.05,694.99L217.03,687.62L224.08,686.8L231.68,688.22L245.92,690.87L255.07,696.04z"
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

// src/Rwanda.tsx
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
var Rwanda = ({
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
      RwandaSingle,
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
      RwandaMultiple,
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
var RwandaSingle = ({
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
var RwandaMultiple = ({
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
var Rwanda_default = Rwanda;

// src/index.ts
var src_default = Rwanda_default;
