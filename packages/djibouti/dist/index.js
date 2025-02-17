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

// src/Djibouti.tsx
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
var stateCode = ["Arta", "Ali Sabieh", "Dikhil", "Djibouti", "Obock", "Tadjourah"];
var drawPath = {
  Arta: "M231.8,466.29L238.32,473.65L252.33,483.45L260.54,488.35L265.86,489.57L273.59,494.23L277.7,492.76L278.42,491.04L278.41,488.04L278.41,488.04L279.12,487.52L281.6,486.78L282.63,487.09L282.73,487.62L282.32,489.09L280.88,489.5L283.12,491.39L282.83,492.85L284.6,494.2L285.52,495.26L285.31,496.3L280.77,496.2L282.42,497.45L280.98,500.07L278.81,500.9L279.02,502.16L280.05,504.15L281.39,505.92L283.56,507.28L288.2,509.98L292.01,513.45L292.43,514.91L293.97,516.17L296.24,516.06L296.86,517.63L297.79,518.16L299.03,517.95L301.4,520.04L302.02,521.29L302.95,521.81L305.01,523.38L308.1,526L309.54,526.83L312.54,526.94L313.36,526.21L317.38,527.25L318.62,526.34L320.58,525.37L322.33,523.38L322.02,521.29L322.95,519.94L326.56,521.5L330.58,521.6L334.71,522.65L337.28,522.76L340.27,523.28L341.1,522.97L340.69,520.98L343.26,519.72L343.15,519.1L341,519.52L340.79,518.99L341,515.75L342.13,514.39L341.82,513.24L341.2,512.51L339.76,511.57L337.49,511.15L336.46,510L334.4,510.1L332.54,508.54L332.02,507.07L330.48,504.88L331.1,502.79L332.13,502.26L333.67,502.58L336.46,502.05L336.46,500.48L338.11,500.28L338.11,499.23L339.97,495.78L340.49,495.66L341.93,498.08L343.99,498.6L346.57,497.56L347.18,496.41L349.56,495.78L351.82,495.67L353.27,493.9L360.38,492.12L362.76,492.22L365.23,488.56L370.18,490.34L372.65,490.03L374.31,488.88L376.37,488.98L378.02,487.83L379.67,486.16L379.87,484.17L380.7,483.75L381.94,484.27L382.86,481.77L383.9,481.14L386.99,482.08L389.23,481.56L389.98,482.6L392.04,482.71L393.69,481.14L396.06,481.45L398.13,481.45L400.19,481.45L401.73,481.03L402.35,479.57L402.35,478.84L401.31,477.67L401.74,476.43L404.93,481.14L408.44,480L409.06,481.77L410.4,481.66L411.02,481.03L413.9,482.18L415.45,481.97L419.16,481.03L420.71,480.2L424.01,479.36L428.34,479.78L431.54,478.85L433.24,479.04L433.24,479.04L433.24,502.26L507.66,501.53L508.02,502.99L509.1,504.26L511.26,504.81L514.32,504.44L516.47,503.17L518.63,502.62L522.23,502.8L525.9,502.13L525.9,502.13L527.02,505.41L528.78,507.7L528.57,508.22L529.5,508.64L529.3,509.79L529.92,510.1L530.43,509.48L531.67,510.31L532.29,510L535.48,511.26L536.2,510.52L534.66,509.16L534.25,510L532.92,509.58L532.08,509.16L530.02,509.16L530.33,508.33L533.52,508.43L534.35,507.39L537.03,508.85L538.47,510.52L539.92,511.26L541.36,512.3L541.98,513.55L545.28,516.8L545.69,522.23L548.58,525.16L548.58,526.21L550.31,528.01L552.97,528.88L539.59,550.16L539.59,550.16L483.35,523.42L468.85,525.71L425.16,534.15L404.11,573.37L404.11,573.37L336.1,613.54L336.1,613.54L331.34,614.03L271.17,615.03L216.34,562.55L210.3,490.06L225.76,471.2z",
  "Ali Sabieh": "M468.51,665.01L459.7,679.84L457.45,682.83L451.72,693.94L442.72,708.02L439.22,707.81L427.23,709.96L422.43,712.04L416.9,713.37L414.37,713.44L412.45,712.13L411.55,712.27L410.01,713.55L408.09,713.74L406.44,712.74L404.42,709.3L402.51,709.83L399.76,708.69L396.67,708.83L392.69,707.94L380.78,707.17L379.08,706.48L378,702.59L376.34,699.81L376.33,698.24L377.58,694.56L376.51,692.47L376.2,689.56L372.89,685.04L371.93,681.21L370.4,679.88L368.7,679.26L367.9,674.66L365.14,672.3L362.93,672.61L362.08,676.23L360.28,677.41L357.94,675.97L356.6,676.16L354.79,677.05L353.22,677.06L350.08,679.07L341.4,681.02L340.1,678.81L338.22,677.02L331.47,672.54L328.9,672.91L326.13,669.03L320.85,666.11L318.11,666.72L313.71,670.25L311.85,671.14L311.85,671.14L311.76,628.73L331.55,616.22L331.55,616.22L404.11,573.37L404.11,573.37L425.16,534.15L468.85,525.71L483.35,523.42L539.59,550.16L539.59,550.16L518.57,584.64L515.74,588.4L514.94,590.62L509.58,598.42L503.48,609.21L489.76,630.61L487.41,635.24L483.31,641.04z",
  Dikhil: "M231.8,466.29L225.76,471.2L210.3,490.06L216.34,562.55L271.17,615.03L331.34,614.03L336.1,613.54L336.1,613.54L331.55,616.22L331.55,616.22L311.76,628.73L311.85,671.14L311.85,671.14L311.21,672.31L311.12,674.94L310.42,675.47L302.79,677.52L294.53,680.56L290.04,681.36L273.92,687.1L243.69,708.52L242.29,709.05L220.88,702.9L218.51,703.49L218.2,705.95L215.17,707.49L204.51,706.02L202.75,705.04L197.16,706.55L193.02,707.05L190.98,708.06L190.23,708.94L190.07,710.34L188.39,711.75L185.36,712.94L162.61,714.9L159.41,715.62L158.41,714.7L158.69,713.53L157.57,712.38L156.29,711.98L146.76,711.31L145.37,712.14L143.04,712.04L141,713.05L140.01,713L139.18,711.67L140.63,709.91L139.51,709.28L136.72,710.24L134.34,712.41L126.53,713.12L124.66,717.94L117.96,717.93L114.16,724.23L113.25,726.69L106.88,727L102.78,725.92L92.61,731.15L90.03,731.3L78.79,729.76L72.42,734.68L70.29,735.14L68.01,734.99L64.37,729.3L62.55,727.61L57.39,725.46L47.97,724.23L43.88,722.85L34.77,721.31L31.88,720.24L20.5,719.32L18.98,715.94L17.61,715.02L9.72,714.25L8.81,712.71L7.59,708.1L7.74,705.64L8.96,703.65L12.45,700.88L14.88,679.8L15.94,651.08L17,644.01L17.76,606.65L16.24,582.8L14.27,569.73L11.95,563.07L1.8,521.33L0.89,516.97L1.24,515.46L0,512.6L0.76,509.06L5.99,499.38L6.68,496.84L10.75,491.05L10.32,485.05L11.54,480.74L12.6,477.97L16.4,472.42L14.88,467.34L15.49,462.41L19.74,450.86L20.95,443.93L23.68,436.84L26.63,425.95L43.46,417.51L48.33,414.13L50.12,406.85L52.34,405.2L69.93,397.05L71.9,395.32L72.67,392.22L73.63,390.6L85.53,373.13L85.53,373.13L140.29,383.69L154.62,389.4L220.05,455.52L225.21,458.93z",
  Djibouti: "M527.03,493.27l0.72,0.73l0.1,1.26l-1.55,0.42l-0.72,-0.52v-1.36L527.03,493.27zM513,467.64l-0.21,4.09l2.07,1.14l1.05,2.32l-0.42,0.61l-1.97,0.42l-0.31,1.15l0.52,2.2l1.13,2.61l0.84,0.72l0.81,2.83l2.99,3.45l0.62,1.67l-0.1,2.93l0.93,0.21l1.75,2.2h1.24l0.72,3.03l1.14,1.67v0.63l0.11,0.6l0,0l-3.67,0.68l-3.6,-0.18l-2.16,0.55l-2.16,1.27l-3.06,0.37l-2.16,-0.55l-1.08,-1.28l-0.36,-1.46l-74.42,0.73l0,-23.22l0,0l2.1,-0.66l3.52,0.14l2.48,-0.1l4.33,1.46l2.36,-0.63l2.69,0.73l4.95,-0.62l3.2,0.63l0.72,-0.42l-0.41,-0.53l0.41,-0.1l3.4,0.31l1.65,-0.73l2.68,-0.21l6.7,1.05l2.48,1.67l3.09,-0.1l1.13,0.73l-0.92,-1.47l-0.83,-0.21l0.1,-1.57l4.23,-0.42l2.27,0.42l1.44,1.15h1.44l2.37,1.88l1.14,2.32l3.09,1.03l2.89,-2.2l1.75,-0.63l2.58,0.1l1.55,-0.31l2.06,-0.73l1.13,-1.67l2.48,0.43l0.51,-2.31l1.24,-0.94l0.1,-1.67l-2.99,0.1l-0.21,1.36l-1.55,-0.1l0.93,-0.52l-0.1,-0.94l1.03,-1.15l-0.62,-0.21l-0.62,0.52l-0.42,-0.94l-0.63,0.62l0.01,0.85l-0.62,0.21l-0.31,-1.05l2.27,-1.87l3.59,-0.09l0.64,-1.91l-0.21,-1.26L513,467.64z",
  Obock: "M505.08,56.86L508.55,57.74L509.36,58.56L511.73,69.82L514.05,74.83L515.21,78.95L517.23,82.19L518.68,87.2L524.75,92.8L535.74,108.99L543.26,117.24L549.34,124.89L558.01,139.91L562.2,143.24L563.51,146.33L565.7,147.26L565.49,150.51L566.42,151.35L569.1,153.45L570.44,153.45L572.63,152L572.92,150.93L574.98,148.73L575,148.1L573.74,147.68L572.93,144.04L574.66,143.91L578.07,146.42L577.15,147.89L576.32,153.34L578.07,164.57L579.41,169.08L580.86,172.34L582.2,173.58L583.33,175.9L585.08,175.8L586.32,176.53L589.42,182.41L590.76,190.69L591.89,193.32L593.34,200.13L594.26,208.42L595.4,211.98L594.88,215.86L596.22,223.73L599.42,225.93L600.86,229.92L602.72,231.7L603.93,233.9L604.88,238.72L606.32,239.48L608.49,242.92L608.08,246.27L609.11,255.18L607.67,258.01L609.42,261.16L610.62,264.2L609.94,267.02L610.97,270.59L611.9,277.93L611.9,283.69L610.96,293.64L608.49,303.7L603.42,313.65L600.97,320.34L598.8,324.45L597.56,325.49L595.81,329.26L595.29,331.78L593.85,333.45L591.58,334.4L585.29,334.92L583.33,334.4L578.9,333.98L575.91,333.98L570.44,333.56L569.72,333.77L568.07,337.12L566.21,339.63L564.77,341.2L558.69,341.1L557.14,341.52L554.66,340.58L547.66,340.45L542.08,341.41L540.85,343.3L538.27,342.36L535.79,341.62L532.18,342.04L530.02,343.4L525.38,343.72L522.9,345.29L519.91,349.9L516.1,353.98L510.94,358.07L509.6,359.85L508.88,362.88L505.48,363.51L503.51,366.64L501.76,367.59L501.14,370.32L499.29,371.36L498.26,374.5L495.58,376.6L493.93,379.23L492.07,379.84L490.42,382.04L489.6,384.97L489.6,384.97L481.75,380.25L479.34,377.31L475.23,374.12L468.71,361.12L467.74,355.72L462.67,345.67L450.35,333.4L416.69,296.07L390.39,267.86L388.7,265.41L388.46,262.46L383.39,258.04L380,257.06L376.86,254.85L372.27,253.38L368.41,252.89L358.99,247.73L353.67,242.08L347.88,237.66L343.29,232.01L337.97,220.71L335.07,212.6L332.66,210.39L331.21,206.71L331.93,204.25L333.62,202.29L335.31,199.09L338.21,196.64L343.29,194.42L344.2,189.83L344.2,189.83L345.91,191.05L346.78,190.92L347.01,189.87L345.39,187.84L345.58,186.66L347.14,184.54L350.56,182.05L351.6,180.46L353.99,180.14L356.8,181.46L358.5,181.68L362.92,180.3L364.49,179.05L364.89,178.05L364.69,175.3L366.9,174.29L368.46,172.17L369.2,169.88L378.29,168.15L383.77,168.4L387.32,166.02L391.36,161.3L391.34,158.02L389.5,154.29L389.36,151.42L386.47,147.76L383.84,147.55L381.67,145.93L380.72,144L380.59,142.36L381.97,139.72L382.62,134.26L385.16,130.2L387.41,127.07L390.35,123.47L393.18,119.76L395.34,119.56L397.86,120.3L400.52,117.4L404.14,117.61L404.99,115.37L403.29,113.75L403.17,112.81L405.66,110.5L404.18,108.7L404.35,107.29L407.02,105.92L407.1,101.76L408.79,100.81L412.34,100.25L414.1,94.31L415.95,92.13L420.33,91.56L423.2,93.53L425.66,93.86L429.65,89.89L430.81,89.41L434.73,89.67L437.93,88.12L442.84,82.39L444.05,81.6z",
  Tadjourah: "M272.48,134.61L277.03,134.98L287.35,139.4L304.14,151.72L325.23,175.31L344.2,189.83L344.2,189.83L343.29,194.42L338.21,196.64L335.31,199.09L333.62,202.29L331.93,204.25L331.21,206.71L332.66,210.39L335.07,212.6L337.97,220.71L343.29,232.01L347.88,237.66L353.67,242.08L358.99,247.73L368.41,252.89L372.27,253.38L376.86,254.85L380,257.06L383.39,258.04L388.46,262.46L388.7,265.41L390.39,267.86L416.69,296.07L450.35,333.4L462.67,345.67L467.74,355.72L468.71,361.12L475.23,374.12L479.34,377.31L481.75,380.25L489.6,384.97L489.6,384.97L488.05,386.96L484.23,387.8L483.4,389.36L481.55,391.05L481.55,393.04L479.28,393.77L477.94,396.8L477.12,397.33L474.85,397.95L473.2,397.44L470.33,397.73L469.28,398.48L467.11,398.9L464.23,398.37L463.4,399.31L461.24,399.94L459.48,399.63L457.5,397.34L456.6,397.33L454.53,399L453.41,399.31L448.24,399.21L446.7,400.89L444.94,401.72L443.71,403.29L442.79,406.65L441.54,408.63L438.89,409.99L435.87,412.4L434.73,411.98L434.12,411.04L434.01,408.53L433.29,409.57L432.4,409.89L433.19,411.36L431.95,411.88L429.99,411.25L429.48,409.47L428.55,408.63L425.08,408.21L423.39,408.94L421.43,408.84L419.58,407.58L417.51,408.63L415.97,408.73L414.32,407.79L411.22,406.12L409.15,406.53L406.78,409.46L403.69,411.46L396.79,411.88L393.9,416.17L389.98,419.31L387.61,420.04L385.75,420.25L381.63,419.93L380.28,420.45L376.47,420.35L375.23,421.11L372.76,423.91L368.63,432.91L366.98,434.48L366.16,436.15L364.61,437.3L364.21,444.01L363.48,446.09L362.24,447.77L360.18,449.23L353.27,452.58L351.82,455.3L350.28,456.35L348.22,458.96L345.23,463.25L343.16,468.9L342.96,473.08L342.77,478.42L342.23,481.45L340.77,482.91L339.55,484.07L338.83,486.68L337.08,487.1L337.28,488.67L339.14,492.33L338.93,493.16L335.43,492.33L333.47,490.65L330.48,489.71L330.79,492.22L330.17,492.43L329.03,490.55L327.07,489.19L326.25,488.88L325.5,488.96L323.88,488.88L320.99,487.1L320.58,488.04L324.68,490.45L324.19,491.07L326.56,492.75L322.23,492.85L320.48,492.22L316.76,489.71L316.25,488.88L312.12,487.31L310.78,486.05L310.16,486.16L309.75,487.1L308.1,487.31L305.52,488.56L304.39,489.71L302.12,490.45L298.51,486.78L298.1,487.94L297.58,487.83L295.21,484.27L292.94,482.29L291.92,481.65L289.13,481.77L284.9,479.57L283.76,479.88L281.08,479.67L280.57,481.77L279.23,482.5L278.3,484.27L277.58,483.33L276.45,483.44L276.55,484.07L278.19,484.8L277.27,485.64L277.07,486.79L277.14,487.41L278.41,488.04L278.41,488.04L278.42,491.04L277.7,492.76L273.59,494.23L265.86,489.57L260.54,488.35L252.33,483.45L238.32,473.65L231.8,466.29L231.8,466.29L231.8,466.29L231.8,466.29L225.21,458.93L220.05,455.52L154.62,389.4L140.29,383.69L85.53,373.13L85.53,373.13L99.83,352.17L113.57,334.73L116.67,326.8L118.46,324.89L124.97,313.28L127.21,306.44L131.69,297.33L134.87,294.29L141.4,292.51L144.96,292.39L149.05,276.89L154.01,270.67L161.2,257.5L170.94,246.42L180.25,232.29L196.24,217.1L203.41,209.37L212,181.95L232.1,154.69L241.13,143.83L254.94,129.98L259.18,129.9L262.36,131.07L265.83,133.13L269.59,133.43z"
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

// src/Djibouti.tsx
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
var Djibouti = ({
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
      DjiboutiSingle,
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
      DjiboutiMultiple,
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
var DjiboutiSingle = ({
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
var DjiboutiMultiple = ({
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
var Djibouti_default = Djibouti;

// src/index.ts
var src_default = Djibouti_default;
