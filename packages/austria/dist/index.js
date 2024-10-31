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

// src/Austria.tsx
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
var viewBox = "-20 -20 800 500";
var stateCode = ["Burgenland", "Carinthia", "Lower Austria", "Upper Austria", "Styria", "Salzburg", "Tyrol", "Vorarlberg", "Vienna"];
var drawPath = {
  Burgenland: "M604.79,109.01L606.55,111.66L605.05,112.76L606.03,114.9L604.65,116.16L606.1,117.31L604.71,118.94L606.46,120.21L608.13,119.01L612,121.87L606.72,126.22L608.45,127.44L606.52,130.43L608.26,131.53L606,137.55L600.57,138.38L599.97,139.53L603.29,141.98L602.92,143.17L605.03,145.48L603.27,147.33L604.74,155.1L606.35,157.35L589.78,159.71L588.86,159.53L588.38,155.86L585.3,160.37L579.02,160.52L576.67,154.45L571.66,153.46L569.81,151.37L567.67,151.11L562.94,152.28L562.38,157.01L558.89,158.07L557.06,160.59L554.89,158.72L554.56,161.48L552.97,162.43L557.63,164.24L558.19,165.45L561.41,165.16L565.44,167.94L569.3,166.82L571.21,167.45L572.77,169.6L573.11,172.7L572.16,173.97L576.26,177.29L574.16,180.77L571.21,181.99L572.6,185.05L571.96,187.17L566.14,191.06L565.23,192.92L560,192.69L558.9,194.99L557.98,192.98L554.85,192.85L556.07,195.88L555.31,198.84L553.81,199.33L556.2,201.38L558.24,207.82L556.47,211.06L553.6,211.16L554.18,215.21L552.34,216.63L553.33,219.03L555.37,218.67L556.14,220.99L555.43,224.02L560.39,223.35L561.43,225.87L559.21,226.23L559.09,227.85L556.07,229.7L556.91,232.08L560.71,233.96L554.46,236.26L554.2,237.2L554.92,238.01L556.41,237.1L560.11,240.42L557.82,241.35L555,240.06L554.84,241.31L553.53,241.52L552.05,240.08L548.88,240.87L547.04,239.53L546.38,241.19L543.23,240.85L542.46,239.06L541.04,245.03L539.36,245.04L536.86,248.07L534.88,247.67L533.45,251.44L529.73,255.14L526.41,256.6L523.88,259.57L518.99,259.93L518.99,259.93L520.34,254.24L524.08,250.86L524.85,248.4L526.61,248.09L528.82,242.03L531.66,241.55L529.45,239.31L528.21,236.92L528.86,235.58L526.28,231.51L528.41,223.5L525.36,214.21L526.15,213.34L525.31,210.43L525.31,210.43L525.59,210.03L525.59,210.03L521.83,200.26L521.83,200.26L521.83,199.06L521.83,199.06L521.68,196.11L524.37,195.54L525.82,192.91L526.73,193.06L525.71,194.28L526.59,195.08L527.87,192.15L532.67,191.09L532.67,191.09L536.99,190.55L541.57,187.24L546.25,180.17L543.91,176.63L544.23,174.25L545.54,170.36L548.8,167.45L548.95,165L547.25,161.78L547.7,160.77L543.71,159.87L542.31,155.09L543.37,148.4L540.57,147.41L541.97,145.26L544.18,145.83L543.65,147.72L545.1,147.9L550.13,141.48L547.12,138.74L550.11,136.72L552.09,136.92L552.65,134.81L552.65,134.81L552.99,134.13L552.99,134.13L552.5,133.41L554.95,130.58L560.61,129.54L565.45,136.23L569.61,131.18L569.5,129.22L574.99,126.82L575.67,121.25L579.51,121.28L582.8,119.28L585.39,119.47L586.64,116.34L590.33,113.86L592.47,114.64L592.59,116.72L596.8,117.84L596.53,119.58L597.48,119.94L600.27,113.9L596.6,111.27L597.04,110.26L597.99,109.44L599.5,110.9L600.81,110.32L599.4,111.87L601.88,112.51L604.45,108.6L604.45,108.6z",
  Carinthia: "M251.29,228.77L252.69,226.36L257.91,225.28L258.33,228.57L262.55,229.7L265.02,229.18L267.02,231.11L272.88,231.14L274.25,231.67L276.56,236.08L280.29,235.52L281.24,237.32L283.96,238.56L299.2,235.05L299.14,231.17L301.36,229.6L304.21,230.66L308.4,229.25L311.23,232.55L313.57,231.22L316.2,231.4L325.51,234.58L329.99,234.12L331.15,236.05L334.76,236.03L334.92,239.97L337.89,241.92L339.71,241.65L342,247.17L342,247.17L344.66,250.21L347.27,251.15L348.57,249.94L353.81,249.84L352.66,247.81L355.39,247.41L355.39,245.5L359.96,243.84L360.55,240.13L364.53,239.7L369.22,235.69L369.81,233.47L372.36,234.56L375.56,231.98L378,237.54L379.38,236.52L380.43,237.71L388.61,237.88L389.85,238.94L389.92,242.88L391.3,243.05L393.66,240.7L395.77,241.33L395.79,239.42L397.04,239.76L397.4,237.99L399.48,237.6L400.42,239.5L406.14,239.22L408.39,241.02L409.42,238.94L426.68,234.89L427.25,237.13L431.65,240.72L435.89,241.91L438.58,247.93L441.34,251.15L439.66,255.18L440.29,259.99L438.29,261.23L437.22,265.53L441.49,267.53L442.75,273.96L440.96,278.72L443.24,279.16L444.47,281.18L444.47,281.18L440.42,282.47L437.4,286.87L435.54,283.88L433.74,285.38L432.99,284.76L432.72,287.22L430.34,285.92L428.53,286.87L425.93,291.3L424.58,297.77L419.14,299.11L418.5,298.22L417.47,300.08L416.34,298.6L415.21,302.96L413.92,302.55L412.18,305.22L406.13,306.99L406.2,311.05L404.28,313.5L401.01,307.54L398.7,308.86L394.93,307.83L393.66,305.01L384.25,306.87L382.11,305.35L378.33,306.61L376.78,305.38L371.92,306.4L368.68,301.47L363.42,299.67L359.96,300.96L352.25,296.32L345.9,296.51L342.89,298.12L337.04,296.14L333.74,296.42L328.77,294.16L325.04,294.61L324.11,293.01L320.67,293.53L319.47,291.29L313.39,292.38L311.88,291.89L312.04,290.65L309.17,289.84L309,291.26L306.93,291.03L305.08,293.03L301.11,291.91L298.46,293.01L292.76,288.72L286.26,287.13L283.24,287.97L273.66,286.12L267.1,286.55L266.1,283.74L260.39,281.69L257.85,283.13L254.67,280.54L254.67,280.54L254.74,275.98L255.28,275.11L257.11,275.44L256.01,274.02L256.63,271.15L263.86,268.83L266.82,269.81L271.31,266.86L273.85,268.24L276.68,264.8L267.08,257.06L266.34,250.63L263.19,249.55L259.1,245.21L257.32,241.15L261.18,235.86L256.71,235.41L255.37,231.9z",
  "Lower Austria": "M441.98,0.73l2.44,-0.07l0.3,1.92l2.73,0.66l2.42,-0.84l1.89,0.94l-0.5,1.51l1.53,2.32l-0.69,2.3l2.31,-0.08l2.8,-2.06l2.96,0.8l1.38,-5.01l1.48,1.77l5.55,-0.17l4.67,3.68l2.45,0.75l1.01,-0.79l2.59,1.87l1.08,2.8l5.07,2.06l2.76,-0.19l6.22,5.11l1.49,-0.62l3.41,1.11l2.14,-2.81l4.83,-0.33l1.01,1.2l-0.76,0.96l1.82,0.86l0.8,-0.92l0.84,2.2l0.97,-0.79l0.58,1.15l-0.99,-0.48l0.06,0.98l2.03,-0.51l1.13,2.36l0.75,-1l1.2,0.54l-0.54,2.18l3.43,3.2l8.04,3.89l14.62,0.62l4.37,1.2l0.79,-1.84l1.47,2.31l1.56,-0.17l4.43,-4.45l1.14,-4.1l1.59,-0.79l4.01,0.91l1.69,-1.81l4.26,3.85l5.56,0.11l1.35,2.65l0.14,3.77l3.43,-1.18l1.77,0.66l0.84,1.97l3.41,1.23l2.66,-1.34l2.68,0.64l0.99,-1.4l1.79,0.66l2.01,9.07l-0.7,2.4l1.79,0.75l-0.37,5.47l1.33,3l-0.75,2.85l-2.41,1.11l0.38,1.95l-1.83,0.05l0.14,1.31l-3.62,4.25l0.62,5.76l-0.63,2.16l-1.36,0.38l0.81,3.41l2.33,0.38l-0.04,1.27l2.88,1.44l-1.02,2l2.23,4.38l2.68,1.05l-0.78,3.3l2.18,7.78l4.21,3.68l2.24,-0.25l0.9,3l0,0l-2.57,3.91l-2.48,-0.64l1.41,-1.55l-1.32,0.58l-1.5,-1.47l-0.96,0.82l-0.43,1.01l3.67,2.62l-2.8,6.04l-0.94,-0.36l0.27,-1.74l-4.22,-1.12l-0.11,-2.09l-2.14,-0.77l-3.69,2.48l-1.25,3.13l-2.59,-0.19l-3.28,2l-3.84,-0.04l-0.68,5.57l-5.49,2.4l0.1,1.96l-4.16,5.05l-4.84,-6.69l-5.66,1.03l-2.44,2.83l0.49,0.72l0,0l-0.34,0.68l0,0l-0.56,2.11l-1.98,-0.2l-3,2.02l3.01,2.74l-5.03,6.42l-1.45,-0.18l0.53,-1.89l-2.21,-0.57l-1.4,2.15l2.8,0.98l-1.06,6.69l1.41,4.78l3.99,0.9l-0.46,1.01l1.7,3.23l-0.15,2.45l-3.26,2.91l-1.3,3.9l-0.32,2.37l2.33,3.54l-4.68,7.07l-4.58,3.31l-4.31,0.54l0,0l-1.93,-1.51l-1.85,-4.1l0.02,-4.89l-0.74,0.51l-0.17,-1.6l-1.02,-0.29l-3.39,4.28l-2.36,-3.02l-5.76,-0.58l-2.92,-1.72l-2.23,-4.73l-3.31,0.54l0.9,-6.22l-1.49,0.19l-1.48,-2.12l-3.33,-0.61l-2.92,1.26l-1.48,-2l-0.46,-7.17l-1.84,-0.34l-1.53,1.6l-1.89,-2.17l-1.34,0.25l-1.98,-4.22l-7.93,0.5l0.26,-2.12l-5.24,-0.76l-0.98,-2.48l-2.15,0.87l-0.5,-3.51l-4.77,-1.53l-3.64,0.97l-0.9,3.47l-5.7,-0.55l-1.14,2.94l0,0h0.54l0,0l-0.83,1.94l-4.71,-0.95l-0.77,1.66l-3.43,0.79l-2.21,0.05l-2.05,-1.59l-3.02,1.41l-1.89,-0.37l-3.56,3.88l-1.63,0.12l-2.54,-0.75l-1.27,-3.08l-1.79,0.99l-1.38,-1.41l-4.27,2.32l-2.22,-2.58l0,0l0.59,-0.86l-2.65,-4.1l1.59,-1.17l-1.82,-2.34l1.31,-2.54l-1.3,-1.16l4.35,-2.67l0.62,-1.26l-0.98,-2.17l-2.56,-3.89l-1.96,1.11l-5.93,-1.96l-5.82,-4.73l-4.37,-1.34l-3.62,-5.62l-0.04,-4.73l1.17,-0.62l-0.97,-0.48l2.92,-2.55l-2.05,-1.31l1.54,-11.51l2.78,-2.32l4.19,1.36l6.58,7.29l2.71,0.97l2.06,-2.59l1.89,0.62l7.35,-2.09l1.77,-4.06l2.17,-0.98l4.35,0.2l1.76,3.3l1.38,0.35l-1.69,-2.94l2.67,-3.9l-0.43,-7.36l-3.42,-0.54l1.75,-7.91l-3.79,0.11l2.22,-2.09l-0.32,-1.92l-4.95,-4.17l-0.94,-2.97l4.45,-2.92l-1.73,-2.09l-4.54,-0.89l0.49,-0.81l-3.26,-2.32l-2.77,0.28l-1.13,-1.3l-1.84,1.6l-3.61,-4.02l0,0l0.76,0.36l1.57,-2.28l-0.7,-5.95l1.17,-4.42l6.49,-5.64l0.1,-5.46l5.68,-0.17l0.59,1.23l5.4,1.45l1.93,-1.66l-2.13,-2.22l1.22,-5.56l1.29,-0.75l-1.05,-3.74l1.02,-0.18l0.62,-3.4l-1.08,-9.35l1.54,-1.42l-0.15,-2.82L441.98,0.73zM546.93,88.21l-1.22,0.73l0,0l-3.48,1.53l-2.64,3.51l-1.41,0.08l0,0l-1.98,-2.2l0,0l-0.66,-0.37l-0.73,3.9l-1.09,0.67l1.25,0.2l0.3,2.49l-1.51,3.64l1.25,1.89l1.57,0.14l-0.71,0.7l0.93,1.54l1.29,-0.07l-1.24,1.41l3.91,-1.13l3.34,1.66l1.26,-2.1l8.61,2.1l-0.25,-2.06l6.46,-2.61l4.46,2.63l0,0l0.67,-0.7l0,0l-0.28,-2.09l-1.77,-0.24l-0.23,-1.91l-1.05,-0.39l0.83,-9.61l-1.97,-0.17l-1.12,-1.21l0.39,-1.54l-1.33,-0.69l-1.2,-0.08l-0.44,2.06l-2.59,-1.96l-0.14,-1.46l0,0l-0.13,-0.46l0,0l-1.15,-1.55l0,0l-1.89,0.28l0,0l-0.06,0.19l0,0l-0.61,-0.22l0,0l-1.61,0.55l0,0l0.43,1.41l0,0l-0.23,1.76l-1.75,0.51L546.93,88.21z",
  "Upper Austria": "M347.18,30.34L349.28,30.66L355.86,37.17L359.61,37.78L362.08,41.61L364.11,41.91L363.58,44.48L361.33,44.47L360.18,46.13L361.71,47.66L363.12,47.43L362.68,49.29L364.83,50.05L364.69,51.44L367.05,50.88L367,51.79L368.61,52.15L369.87,51.13L374.65,51.71L378.68,53.59L381.06,53.12L386.11,56.63L387.92,53.92L390.43,54.21L390.27,51.68L393.72,52.25L395.73,47.88L394.81,45.7L396.9,45.07L399.5,48.82L402.88,49.08L404.19,50.35L408.18,47.41L409.2,50.08L411.13,49.69L412.44,53.06L414.61,52.64L414.61,52.64L418.22,56.66L420.06,55.06L421.2,56.36L423.97,56.08L427.23,58.4L426.74,59.21L431.28,60.1L433.01,62.19L428.56,65.11L429.5,68.08L434.45,72.25L434.77,74.17L432.55,76.25L436.34,76.15L434.59,84.06L438.01,84.6L438.45,91.96L435.78,95.86L437.47,98.8L436.09,98.45L434.33,95.15L429.98,94.95L427.81,95.93L426.04,99.99L418.69,102.08L416.79,101.46L414.73,104.05L412.02,103.09L405.44,95.8L401.25,94.43L398.47,96.75L396.92,108.27L398.97,109.58L396.04,112.13L397.01,112.61L395.85,113.23L395.89,117.96L399.5,123.58L403.88,124.93L409.69,129.66L415.62,131.62L417.58,130.52L420.13,134.4L421.11,136.58L420.49,137.84L416.14,140.51L417.44,141.67L416.13,144.21L417.95,146.55L416.36,147.72L419.01,151.82L418.42,152.69L418.42,152.69L414.81,150.75L413.28,153.53L411.03,154.79L408.38,154.65L405.9,156.55L401.46,157.18L400.9,160.69L398.27,160.76L394.2,164.01L391.39,163.88L390.98,165.87L384.35,169.41L379.82,168.73L377.37,165.48L377.93,164.21L363.41,168.14L363.74,162.13L360.08,158.2L352.85,157.71L349.48,155.2L348.17,155.11L347.41,156.63L341.64,156.34L338.18,160.16L338.27,161.41L336.51,162.08L334.97,166.8L334.84,172.12L338.19,172.92L339.79,175.76L339.02,177.44L340.17,179.65L336.75,185.21L337.22,186.46L326.23,185.16L326.23,185.16L320.9,182.49L318.43,180.34L317.55,177.76L317.62,173.95L319.83,172.31L321.19,168.08L320.67,166.62L318.92,166.66L318.1,165.3L322.96,156.7L314.44,153.94L315.12,149.79L316.54,148.13L320.76,149.77L322.46,148.6L321.59,146.7L318.56,147.67L316.71,146.11L310.65,147.15L302.31,142.94L303.04,139.85L301.03,135.78L301.87,135.04L301.74,128.71L304.09,127.15L307.96,129.98L308.89,125.59L305.83,124.31L303.22,121.47L302.01,123.11L291.2,126.35L291.44,123.57L289.15,124.11L285.34,122.12L283.29,117.51L277.65,119.96L274.11,118.49L271.09,123.18L268.29,123.02L268.29,123.02L266.81,119.95L260.12,113.46L259.44,109.74L260.22,107.56L262.33,108.06L263.44,105.28L267.29,102.75L269.1,98.63L276.08,97.7L281.14,91.96L293.99,87.51L299.84,87.77L306.14,83.81L312.25,77.97L314.5,71.25L313.49,68.1L315.99,61.48L314.5,55.9L315.44,55.19L317.48,56.15L319.9,53.83L320.09,52.11L325.27,55.68L327.89,54.9L331.7,57.1L332.63,58.8L337.88,61.16L339.2,59.03L338.98,56.46L339.96,55.16L340.85,56.37L343.39,53.95L343.35,51.36L345.19,49.17L344.34,39.88L346.33,39.03L344.3,38.65L342.91,36.99z",
  Styria: "M418.42,152.69L420.64,155.27L424.91,152.95L426.29,154.35L428.08,153.36L429.35,156.44L431.89,157.18L433.52,157.07L437.09,153.18L438.98,153.55L442,152.14L444.05,153.73L446.26,153.68L449.69,152.89L450.46,151.23L455.17,152.18L456.01,150.23L456.01,150.23L455.47,150.23L455.47,150.23L456.61,147.29L462.32,147.84L463.21,144.36L466.86,143.39L471.63,144.92L472.13,148.43L474.28,147.57L475.26,150.04L480.5,150.8L480.25,152.92L488.17,152.42L490.15,156.64L491.5,156.39L493.39,158.56L494.92,156.96L496.76,157.3L497.22,164.47L498.7,166.47L501.62,165.21L504.95,165.82L506.43,167.94L507.91,167.75L507.01,173.97L510.32,173.43L512.55,178.16L515.47,179.88L521.23,180.46L523.59,183.48L526.98,179.2L528,179.49L528.17,181.1L528.91,180.59L528.89,185.48L530.75,189.58L532.67,191.09L532.67,191.09L527.87,192.15L526.59,195.08L525.71,194.28L526.73,193.06L525.82,192.91L524.37,195.54L521.68,196.11L521.83,199.06L521.83,199.06L521.83,200.26L521.83,200.26L525.59,210.03L525.59,210.03L525.31,210.43L525.31,210.43L526.15,213.34L525.36,214.21L528.41,223.5L526.28,231.51L528.86,235.58L528.21,236.92L529.45,239.31L531.66,241.55L528.82,242.03L526.61,248.09L524.85,248.4L524.08,250.86L520.34,254.24L518.99,259.93L518.99,259.93L518.03,260.87L519.09,262.89L518.07,270.95L519.39,273.48L521.62,274.25L521.89,280.77L518.56,277.64L514.64,276.56L509.3,273.2L506.46,272.96L499.8,275.69L491.72,274.79L491.38,276.47L489.22,277.88L487.93,277.47L487.6,278.65L486.58,277.96L487.76,277.01L486.89,276.76L482.87,279.11L483.17,282.65L479.41,285.52L476.33,285.41L475.66,282.63L472.34,280.77L462.62,281.13L457.95,282.62L450.87,280.24L449.61,281.29L447.67,280.29L445.68,281.83L444.47,281.18L444.47,281.18L443.24,279.16L440.96,278.72L442.75,273.96L441.49,267.53L437.22,265.53L438.29,261.23L440.29,259.99L439.66,255.18L441.34,251.15L438.58,247.93L435.89,241.91L431.65,240.72L427.25,237.13L426.68,234.89L409.42,238.94L408.39,241.02L406.14,239.22L400.42,239.5L399.48,237.6L397.4,237.99L397.04,239.76L395.79,239.42L395.77,241.33L393.66,240.7L391.3,243.05L389.92,242.88L389.85,238.94L388.61,237.88L380.43,237.71L379.38,236.52L378,237.54L375.56,231.98L372.36,234.56L369.81,233.47L369.22,235.69L364.53,239.7L360.55,240.13L359.96,243.84L355.39,245.5L355.39,247.41L352.66,247.81L353.81,249.84L348.57,249.94L347.27,251.15L344.66,250.21L342,247.17L342,247.17L344.52,246.2L346.96,241.98L348.58,241.13L348.6,238.09L351.94,232.95L349.52,229.38L349.72,227.99L354.45,224.77L356.04,226.19L358.26,225.99L358.86,224.23L351.18,219.24L351.62,217.95L347.49,213.78L348.77,212.52L348.43,211.07L345.38,209.45L345.22,206.24L344.27,205.94L340.59,209.24L337.19,208.17L336.28,210.32L333.42,208.57L327.95,207.44L326.96,203.65L327.71,202.23L324.48,191.3L326.71,186.71L326.23,185.16L326.23,185.16L337.22,186.46L336.75,185.21L340.17,179.65L339.02,177.44L339.79,175.76L338.19,172.92L334.84,172.12L334.97,166.8L336.51,162.08L338.27,161.41L338.18,160.16L341.64,156.34L347.41,156.63L348.17,155.11L349.48,155.2L352.85,157.71L360.08,158.2L363.74,162.13L363.41,168.14L377.93,164.21L377.37,165.48L379.82,168.73L384.35,169.41L390.98,165.87L391.39,163.88L394.2,164.01L398.27,160.76L400.9,160.69L401.46,157.18L405.9,156.55L408.38,154.65L411.03,154.79L413.28,153.53L414.81,150.75z",
  Salzburg: "M268.29,123.02L271.09,123.18L274.11,118.49L277.65,119.96L283.29,117.51L285.34,122.12L289.15,124.11L291.44,123.57L291.2,126.35L302.01,123.11L303.22,121.47L305.83,124.31L308.89,125.59L307.96,129.98L304.09,127.15L301.74,128.71L301.87,135.04L301.03,135.78L303.04,139.85L302.31,142.94L310.65,147.15L316.71,146.11L318.56,147.67L321.59,146.7L322.46,148.6L320.76,149.77L316.54,148.13L315.12,149.79L314.44,153.94L322.96,156.7L318.1,165.3L318.92,166.66L320.67,166.62L321.19,168.08L319.83,172.31L317.62,173.95L317.55,177.76L318.43,180.34L320.9,182.49L326.23,185.16L326.23,185.16L326.71,186.71L324.48,191.3L327.71,202.23L326.96,203.65L327.95,207.44L333.42,208.57L336.28,210.32L337.19,208.17L340.59,209.24L344.27,205.94L345.22,206.24L345.38,209.45L348.43,211.07L348.77,212.52L347.49,213.78L351.62,217.95L351.18,219.24L358.86,224.23L358.26,225.99L356.04,226.19L354.45,224.77L349.72,227.99L349.52,229.38L351.94,232.95L348.6,238.09L348.58,241.13L346.96,241.98L344.52,246.2L342,247.17L342,247.17L339.71,241.65L337.89,241.92L334.92,239.97L334.76,236.03L331.15,236.05L329.99,234.12L325.51,234.58L316.2,231.4L313.57,231.22L311.23,232.55L308.4,229.25L304.21,230.66L301.36,229.6L299.14,231.17L299.2,235.05L283.96,238.56L281.24,237.32L280.29,235.52L276.56,236.08L274.25,231.67L272.88,231.14L267.02,231.11L265.02,229.18L262.55,229.7L258.33,228.57L257.91,225.28L252.69,226.36L251.29,228.77L251.29,228.77L249.49,226.7L245.24,225.03L243.57,225.67L238.98,222.35L232.8,224.03L231.41,222.86L228.73,224.23L227.82,227.85L224.87,228.34L224.16,229.8L222.66,229.61L220.4,232.2L218.45,232.62L218.45,232.62L217.44,230.96L214.27,229.78L210.32,231.19L210.32,231.19L206,217.85L208.23,212.08L205.57,208.64L208.27,205.08L211.09,206.62L213.01,205.06L216.05,205.35L217.32,204.11L218.45,205.42L219.77,204.62L220.69,205.29L223.15,201.8L229.4,204.22L232.25,203.98L234.91,202.24L237.06,202.74L239.28,200.36L237.77,197.24L239.91,194.55L244.43,193.79L245.65,194.69L249.28,191.78L250.49,189.23L250.15,185.95L252.64,186.12L255.36,184.62L249.93,176.44L252.75,172.94L251.52,171.59L245.48,169.92L245.48,166.34L245.48,166.34L247.91,161.56L251.44,161.85L253.94,160.37L258.01,160.63L260.2,162.58L262.14,161.47L260.24,164.11L265.47,168.68L263.34,169.51L261.97,172.34L263.26,175.38L267.29,176.45L267.75,178.37L270.08,179.38L272.19,182.29L276.9,184.97L277.37,183.7L278.98,184.44L279.69,186.25L283.23,182.84L283.26,179.26L282.04,177.81L284.12,174.63L282.89,172.96L285.16,171.62L284.46,169.93L287.34,166.03L285.61,161.89L285.9,159.88L280.82,155.56L277.28,157.42L273.73,157.07L272.11,155.56L274.89,150.74L273.7,149.79L279.75,140.64L274.52,129.51L273.24,129.95L272.58,127.95L269.44,127.15z",
  Tyrol: "M218.45,232.62l1.95,-0.42l2.26,-2.58l1.5,0.19l0.71,-1.46l2.95,-0.49l0.91,-3.62l2.68,-1.37l1.39,1.17l6.18,-1.69l4.59,3.33l1.66,-0.64l4.25,1.67l1.81,2.07l0,0l4.07,3.12l1.34,3.52l4.47,0.44l-3.86,5.29l1.78,4.06l4.09,4.34l3.15,1.07l0.74,6.43l9.6,7.74l-2.84,3.44l-2.53,-1.38l-4.49,2.95l-2.96,-0.98l-7.23,2.31l-0.62,2.87l1.09,1.43l-1.83,-0.34l-0.54,0.87l-0.06,4.56l0,0l-3.98,0.46l-1.3,-1.07l-4.81,1.19l-3.56,-3.04l-2.92,0.15l-5.41,-2.69l-2.8,-2.22l-2.03,-6.52l-5.69,-1.05l0.09,-3.62l1.77,-2.88l-2.44,-4.99l-2.76,-0.68l-2.14,1.67l-2.25,-3.61l-3.53,-0.68l2.03,-2.99l-2.51,-2.42l-1.29,-5.94l2.04,-1.92l4.59,-0.44l0.88,-3.42L218.45,232.62zM219.22,157.07l-0.46,2l1.48,1.89l6.1,-2.21l2.52,1.5l5.78,-1.29l-0.07,2.31l4.76,5.95l3.17,-1.3l2.98,0.43l0,0l-0.01,3.58l6.05,1.67l1.22,1.36l-2.81,3.49l5.42,8.18l-2.72,1.5l-2.49,-0.17l0.34,3.27l-1.21,2.55l-3.63,2.91l-1.22,-0.89l-4.52,0.75l-2.13,2.69l1.5,3.12l-2.21,2.39l-2.15,-0.51l-2.66,1.74l-2.85,0.25l-6.25,-2.42l-2.46,3.49l-0.93,-0.67l-1.32,0.8l-1.13,-1.32l-1.27,1.25l-3.04,-0.29l-1.92,1.56l-2.82,-1.54l-2.7,3.56l2.66,3.44l-2.23,5.77l4.32,13.35l0,0l-3.23,0.22l-1.75,2.23l-2.85,-0.3l-1.42,1.68l-3.57,-0.27l-2.27,1.8l-2.46,0.11l-6.32,4.85l-4.29,0.17l-2.82,2.6l-1.61,-0.46l-1.36,-2.21l-3.73,-0.1l-3.56,-2.36l-6.55,3.48l-4.56,-3.3l-3.12,4.25l-2.9,1.23l-3.73,-3.04l-1.66,0.74l-1.33,-0.91l-9,3.48l-1.43,-0.96l-1.95,0.58l-0.21,3.03l-1.85,1.38l-2.04,-0.28l-1.41,2.03l0.22,2.8l-2.23,4.09l0.97,3.79l-3.56,1.87l-1.47,4.45l-8.17,-0.87l-2.59,1.36l-3.87,-2.27l-1.84,0.77l-2.17,-2.36l-2.54,1.28l-2.09,-0.36l2.73,-4.12l-0.7,-1.26l-4.95,-2.01l0.02,-1.57l-2.12,-1.2l-9.5,4.43l0.58,-1.37l-4.36,0.3l-2.25,-1.15l-0.44,-3.52l1.93,-6.26l-4.99,-2.29v-2.1l-3.08,-2.84l-3.88,2.14l-1,3.31l-1.54,0.73l0.65,2.6l-1.5,0.64l-4.45,-1.26l-1.23,3.99l0.42,3.57l-2.96,-0.02l-2,1.88l-1.93,-0.05l0,0l-3.99,-8.65l2.13,-1.66l1.73,-5.05l1.17,0.02l-0.03,-1.77l-2.39,-2.79l2.12,-3.18l-0.37,-1.34l-1.37,-0.32l-0.07,-2.14l1.93,-3.81l2.32,-0.5l-0.3,-0.98l2.31,-2.53l-1.21,-5.27l1.09,-3.82l-0.97,-0.97l1.85,-2.17l-2.1,-0.53l-1.13,-1.61l0,0l1.72,-0.73l2.58,0.73l7.75,-4.09l5.3,-8.32l3.15,-0.62l0.04,-3.47l3.13,-2.59l-0.55,-5.12l-2.03,-0.94l-0.96,-2.18l1.7,-5.99l-1.78,-2.71l0.63,-0.85l3.41,-0.09l-2.04,3.49l5.43,2.42l3.88,0.15l2.09,-4.13l7.33,1.13l0.36,1.71l5.08,1.23l1.51,2.36l8.72,-2.69l2.39,2.82l-3.57,1.33l-0.3,2.3l5.29,0.18l-0.5,1.14l4.37,4.81l-1.12,1.8l0.56,1.95l11.11,0.21l0.97,-1.86l6.22,-2.54l3.8,0.68l-2.33,3.87l3.56,-0.24l1.69,-1.24l0.11,-2.31l3.73,-2.6l6.73,0.54l-1.11,-2.73l-1.89,-0.54l3.94,-4.82l5.86,0.97l5.31,-1.17l1.24,-1.23l1.28,-6.28l2.41,-0.2l0.19,-1.67l2.12,1.24l9.54,-0.85l4.95,1.11l0.9,-2.37l4.61,-1.41l4.98,0.05l2.6,-1.37l0.96,1.81l3.28,-1.06l6.1,1.6l3.12,-1.02l-0.24,1.57l2.25,-0.64l-0.23,-3.75l-2.94,-7.33l4.08,-1.41l3.33,-3.67l0.67,1.2L219.22,157.07z",
  Vorarlberg: "M24,170.85L25.87,172.6L25.05,176.35L29.72,178.61L30.22,176.25L33.39,178.43L36.78,177.83L37.37,176.47L36.95,179.39L39.36,181.58L38.7,182.19L39.79,183.94L43.21,183.4L45.32,187.12L46.95,186.8L48.15,190.37L45.42,192.77L47.64,198.97L49.21,196.68L52.92,197.42L54.4,194.54L56.81,196.09L57.94,195.11L58.73,195.79L55.73,202.21L56.57,204.86L53.72,206.75L54.14,208.91L54.14,208.91L55.26,210.52L57.36,211.04L55.51,213.21L56.49,214.19L55.4,218.01L56.61,223.28L54.3,225.81L54.6,226.79L52.28,227.3L50.35,231.11L50.42,233.25L51.8,233.57L52.16,234.91L50.05,238.09L52.43,240.88L52.47,242.66L51.3,242.63L49.57,247.69L47.45,249.34L51.44,257.99L51.44,257.99L48.23,259.11L46.82,256.8L44.25,256.72L41.33,252.11L39.08,252.01L38.02,250.42L34.95,250.73L30.06,248.21L29.56,244.82L31.26,241.82L29.6,239.41L30.2,238.16L26.81,239.06L22.51,236.09L17.37,235.46L14.3,233.24L10.55,234.55L8.52,233.45L8.67,231.54L10.42,230.54L10.39,225.33L9.69,223.24L5.37,220.3L6.38,216.76L4.64,214.26L5.47,212.36L2.36,208.86L6.59,203.83L8.29,199.25L9.81,197.54L13,196.81L13.74,194.76L12.08,193.04L11.46,189.69L12.54,187.31L8.71,185.34L7.54,186.05L0,174.81L18.42,178.01L21.03,171.54z",
  Vienna: "M550.84,84.85L551.18,84.93L551.18,84.93L551.24,84.74L551.24,84.74L553.13,84.46L553.13,84.46L554.28,86.01L554.28,86.01L554.41,86.46L554.41,86.46L554.55,87.92L557.14,89.89L557.58,87.83L558.77,87.91L560.11,88.61L559.72,90.15L560.84,91.36L562.81,91.53L561.98,101.14L563.03,101.53L563.26,103.45L565.04,103.68L565.32,105.77L565.32,105.77L564.65,106.48L564.65,106.48L560.19,103.85L553.72,106.47L553.97,108.53L545.36,106.43L544.1,108.53L540.76,106.87L536.85,108.01L538.09,106.6L536.79,106.67L535.86,105.13L536.57,104.42L535,104.28L533.75,102.39L535.26,98.75L534.96,96.26L533.71,96.06L534.81,95.39L535.53,91.49L536.19,91.86L536.19,91.86L538.17,94.06L538.17,94.06L539.58,93.98L542.22,90.47L545.7,88.94L545.7,88.94L546.89,88.2L547.42,88.95L547.42,88.95L549.17,88.44L549.4,86.68L549.4,86.68L548.97,85.27L548.97,85.27L550.58,84.72L550.58,84.72z"
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

// src/Austria.tsx
var import_react3 = require("react");
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
var Austria = ({
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
    return /* @__PURE__ */ import_react2.default.createElement(
      AustriaSingle,
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
    return /* @__PURE__ */ import_react2.default.createElement(
      AustriaMultiple,
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
var AustriaSingle = ({
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
  const instanceId = (0, import_react3.useId)().replace(/:/g, "");
  const { x, y } = mouseTrack_default();
  const [stateHovered, setStateHovered] = (0, import_react3.useState)(null);
  const [selectedState, setSelectedState] = (0, import_react3.useState)(null);
  const strokeProps = getStrokeProperties(borderStyle);
  const mapStyle = {
    width: size || constants.WIDTH,
    stroke: strokeColor || constants.STROKE_COLOR,
    strokeWidth: strokeWidth || constants.STROKE_WIDTH,
    ...strokeProps
  };
  (0, import_react2.useEffect)(() => {
    stateCode.forEach((state) => {
      const path = document.getElementById(`${state}-${instanceId}`);
      if (path) {
        path.style.fill = cityColors[state] || mapColor || constants.MAPCOLOR;
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
  return /* @__PURE__ */ import_react2.default.createElement(import_react2.default.Fragment, null, /* @__PURE__ */ import_react2.default.createElement("div", { className: "map", style: mapStyle }, /* @__PURE__ */ import_react2.default.createElement("svg", { version: "1.1", id: `svg2-${instanceId}`, x: "0px", y: "0px", viewBox }, stateCode?.map((stateCode2, index) => /* @__PURE__ */ import_react2.default.createElement(
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
var AustriaMultiple = ({
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
  const instanceId = (0, import_react3.useId)().replace(/:/g, "");
  const [selectedStates, setSelectedStates] = (0, import_react3.useState)([]);
  const { x, y } = mouseTrack_default();
  const [stateHovered, setStateHovered] = (0, import_react3.useState)(null);
  const strokeProps = getStrokeProperties(borderStyle);
  const mapStyle = {
    width: size || constants.WIDTH,
    stroke: strokeColor || constants.STROKE_COLOR,
    strokeWidth: strokeWidth || constants.STROKE_WIDTH,
    ...strokeProps
  };
  (0, import_react2.useEffect)(() => {
    stateCode.forEach((state) => {
      const path = document.getElementById(`${state}-${instanceId}`);
      if (path) {
        path.style.fill = cityColors[state] || mapColor || constants.MAPCOLOR;
      }
    });
  }, [cityColors, mapColor, instanceId]);
  (0, import_react2.useEffect)(() => {
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
  return /* @__PURE__ */ import_react2.default.createElement(import_react2.default.Fragment, null, /* @__PURE__ */ import_react2.default.createElement("div", { className: "map", style: mapStyle }, /* @__PURE__ */ import_react2.default.createElement("svg", { version: "1.1", id: `svg2-${instanceId}`, x: "0px", y: "0px", viewBox }, stateCode?.map((stateCode2, index) => /* @__PURE__ */ import_react2.default.createElement(
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
var Austria_default = Austria;

// src/index.ts
var src_default = Austria_default;
