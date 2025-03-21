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

// src/Malta.tsx
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
var stateCode = ["Northern", "Central", "Southern", "South Eastern", "Gozo"];
var drawPath = {
  Northern: "M678.28,328.74v3.98l-11.64,1.6l-4.53,5.57l-5.17,0.8l-1.29,-1.59l0.65,-3.98l2.59,-2.39h5.17l6.47,-3.98H678.28zM583.88,238.85l3.23,5.57l3.23,1.58l1.29,4.78l3.24,2.39v7.96l4.52,0.8l4.53,4.76l0.65,6.37l-9.7,6.37h-12.29l-3.24,3.98h-2.58l-1.29,2.38l1.29,3.18l-9.05,6.37l-3.88,5.57l-18.75,10.33l-1.94,3.19l0.65,6.36l3.88,8.75l3.24,2.39l31.68,-3.99l10.99,-3.18l1.94,-2.38l10.35,-3.19l4.53,-3.18l2.58,2.39l-0.65,3.18l3.24,4.77h4.52l0.65,-2.39l5.82,-3.18l4.52,5.57l6.47,-0.8l4.53,3.18h2.59l1.94,-3.18l1.29,1.6h5.82v3.18l-4.53,3.98l5.17,5.57l-5.17,7.95l2.58,1.6l0.65,4.76l-1.94,2.39h-5.82l-3.88,-3.18l-3.88,0.79v3.19l3.88,1.58l-1.29,5.57l-3.88,4.77l-2.59,7.95l-5.17,1.6l-1.29,3.98l-4.53,2.38l-0.64,6.37l5.17,0.8l5.82,-3.19h3.88l1.29,-3.18l3.88,-0.8l1.94,-2.38l10.35,-2.39l1.94,-3.98l4.53,1.6l-0.65,2.38h7.76l0.65,-2.38l3.88,2.38l1.29,-3.18l5.18,1.6l1.29,-0.8v-6.37l3.88,-1.58h8.41l1.29,-2.39l4.52,-0.79l1.3,-7.16l7.12,-5.57l5.82,-1.58l5.17,-3.98h12.28l0.65,3.98l-9.05,-0.8v7.15l-4.52,7.96l1.29,8.75l-5.82,8.75l-2.59,10.33h1.94l1.29,-5.57l3.88,-5.56l1.94,-1.59h5.17l5.17,-6.36l2.59,-0.8l3.88,-9.54l3.24,-0.8l1.94,2.39l5.18,-0.8l9.06,7.15h8.4l2.59,4.77l3.87,2.38l-1.94,4.77l5.18,3.19l2.59,7.95l5.82,-1.59l-1.94,-1.58l0.65,-7.16l5.17,-0.8l3.88,7.96v12.72l2.59,0.79l1.29,-3.97l2.59,-0.79l1.3,7.15l3.88,4.77l23.28,4.77l0.64,-2.39l10.35,-4.77l5.81,3.98l9.7,2.39l1.3,1.58l-0.65,5.57l6.47,2.39l1.29,3.18h5.17l3.23,2.38l0,0l-1.78,7.31l-7.08,4.35l-3.19,6.09l5.31,1.74l1.77,17.85l-2.83,3.92h-14.87l-7.79,10.01l-11.68,0.44l-6.37,-4.79l-6.37,-2.18l-5.31,0.44l-1.77,6.09h-1.77l-9.91,-10.88l-12.74,-1.31l-7.43,4.79l1.06,15.67l-1.42,10.88l-2.12,4.35l-10.97,1.31l-10.27,-3.92l-2.12,0.87l-8.14,10.44l-0.35,10.44l-2.48,0.44l-14.16,-12.18l-26.2,2.17l-3.54,2.18l-13.1,23.06l-0.35,6.09l2.48,2.61l1.42,6.53l7.44,9.14l0,0l-2.12,20.01l3.9,8.27l0.35,13.48l4.6,6.09v3.05l-14.16,12.61l-5.66,3.04l-4.6,0.87l-5.66,-3.91l-10.27,0.44l-2.83,10l-4.6,6.52l-2.48,10.44l-10.62,11.74l-0.35,6.96l-2.25,2.81l0,0l-7.75,-0.8l-3.23,-3.17l-7.76,0.8l-9.7,-7.95l-3.24,-6.35l-9.7,-2.39l-7.12,-8.74l-14.22,-9.52l-4.53,-10.33l-3.88,-3.17l-1.29,-4.77l-2.58,-2.39l-6.47,-0.78l-4.53,-3.19l1.29,-1.58h-1.94v-1.59l4.53,-4.77l-15.52,-0.8l-12.93,-8.74l-1.94,-6.35l-5.82,-4.77l-6.47,-8.74l2.58,-15.89l-6.47,-19.87l-7.11,-4.77l-5.82,-8.74v-5.56l3.88,-3.97l0.65,-4.77l-5.17,-7.94v-5.56l13.58,3.18l15.52,-0.8l-0.65,-3.18l-3.88,-0.8l-1.94,-4.77l1.29,-1.59l-0.65,-3.18l-5.82,-3.18l-0.65,-3.97l-5.17,-0.8l-1.94,-10.34l1.94,-14.3l2.59,-3.19h6.46l4.52,0.8l5.82,7.95h2.59l0.65,-2.38l1.94,0.8l-1.29,-5.57l1.29,-8.74l-9.7,0.8l-1.94,-7.16l0.65,-2.38l13.58,0.8l1.29,-2.39h-4.52l-1.29,-3.18v-4.77l4.53,-2.38l-1.29,-3.19l-10.35,1.59l-4.53,-4.77l1.29,-1.59l-1.29,-1.58l-5.82,-2.39l-12.29,-1.58l-3.88,-8.75l1.29,-7.95l6.46,-3.97h9.7v-8.75l4.52,-3.19v-6.36l7.76,-4.77v-2.39h-4.52l-2.58,-2.38l1.29,-6.37l-3.23,-5.56h3.88l0.65,-2.39l-8.4,-3.98l-1.29,-3.98l1.29,-2.38h3.88l1.29,-3.99l-2.59,-3.98l-1.29,-7.95l-16.81,-0.8l-5.82,3.98h-7.12l-7.75,-3.98l-3.24,-6.36l3.88,-3.98l1.29,-7.17l3.24,-6.36l4.52,-3.98h7.12l6.46,-11.94h3.24l0.64,1.6l2.59,-0.8l1.29,-5.56l-14.22,-4.77l1.94,-10.35l3.88,-0.8l-0.65,3.98l-1.94,1.6l2.58,3.18l11.64,-1.58l7.76,3.98h3.88l1.94,-2.39l4.53,-0.8l9.05,3.98l-1.94,-3.98l1.29,-2.38h7.76l4.52,3.98l1.94,-13.53h7.12l1.94,0.8l1.29,4.78h5.81l2.59,-7.17l10.35,0.8l0.65,-1.58l-6.46,-3.19l-0.65,-7.95l3.24,-3.18l8.4,3.18l-0.65,-5.57L583.88,238.85z",
  Central: "M867.09,432.92L871.62,433.72L875.5,439.28L870.33,444.06L870.98,446.44L874.21,445.64L876.79,447.23L880.02,444.85L882.61,447.23L878.73,450.41L878.73,455.98L881.32,455.98L880.67,467.9L874.85,468.7L874.85,471.09L877.44,471.87L877.44,475.06L881.32,478.24L884.55,478.24L887.14,476.64L887.14,469.49L889.08,468.7L899.43,472.67L905.89,478.24L910.42,479.83L909.77,487.78L915.59,490.16L918.18,497.32L927.23,500.49L927.88,503.67L923.35,506.85L918.82,506.85L909.13,502.09L908.48,499.7L903.95,497.32L897.49,497.32L887.14,502.87L885.85,507.64L899.43,506.06L907.83,509.24L907.18,516.39L902.01,519.57L896.19,518.78L894.9,516.39L889.72,514.01L883.26,514.01L887.79,520.36L891.02,520.36L892.96,522.75L892.96,529.9L887.14,533.07L887.14,538.64L887.14,538.64L885.14,548.58L885.14,548.58L875.22,554.23L869.21,551.19L867.44,546.84L857.88,545.1L852.57,555.54L849.74,555.98L842.3,565.98L840.18,566.42L832.39,560.33L815.75,555.98L807.25,555.98L793.8,549.01L790.97,551.19L788.49,562.07L785.31,563.8L774.68,562.07L765.48,563.8L759.82,562.5L746.01,563.37L726.54,575.12L721.58,574.68L708.48,569.46L701.76,570.77L690.43,566.85L690.43,566.85L682.99,557.72L681.58,551.19L679.1,548.58L679.45,542.49L692.55,519.43L696.09,517.25L722.29,515.08L736.45,527.26L738.93,526.83L739.28,516.38L747.43,505.94L749.55,505.07L759.82,508.99L770.79,507.68L772.91,503.33L774.33,492.45L773.27,476.78L780.7,472L793.45,473.3L803.36,484.18L805.13,484.18L806.9,478.09L812.21,477.65L818.58,479.83L824.95,484.62L836.64,484.18L844.43,474.17L859.29,474.17L862.13,470.26L860.36,452.41L855.05,450.67L858.23,444.58L865.31,440.22z",
  Southern: "M990.6,724.52L990.99,716.01L986.03,710.36L983.55,702.1L971.52,689.49L958.06,684.71L956.29,678.19L954.17,677.32L953.11,670.8L940.72,653.4L930.45,632.96L916.64,627.75L908.15,621.22L901.42,622.09L890.8,627.31L888.32,630.79L883.37,631.23L880.53,620.35L872.39,618.61L868.14,612.96L859.65,609.91L854.34,605.13L854.34,602.52L859.29,600.35L849.38,591.21L850.8,586.43L860,572.94L868.14,567.72L876.29,566.85L881.6,560.76L885.49,560.76L887.26,559.02L889.74,552.06L885.14,548.58L885.14,548.58L887.14,538.64L887.14,538.64L891.66,537.84L895.54,532.29L898.77,532.29L900.72,529.1L903.31,529.1L905.89,524.33L908.48,524.33L910.42,521.15L916.23,520.36L920.76,515.59L927.88,517.18L934.34,512.41L938.22,512.41L935.64,529.1L933.05,531.49L927.23,531.49L925.29,533.07L920.76,538.64L920.76,541.81L916.23,544.2L911.71,555.32L907.83,558.51L902.01,560.09L898.13,566.46L892.31,568.04L894.25,572.81L898.13,572.81L902.01,568.83L903.95,568.83L905.89,564.06L915.59,562.48L920.76,559.3L924.65,561.69L926.58,567.25L928.52,567.25L930.47,574.4L931.11,569.63L923.35,549.77L931.76,552.15L937.57,560.89L940.16,560.89L937.57,550.56L934.34,547.38L935.64,545L941.45,552.15L953.74,555.32L953.74,553.74L950.51,553.74L945.33,545.8L948.57,541.03L953.09,540.23L946.62,533.87L947.28,530.69L945.33,525.13L947.28,523.54L953.09,526.72L955.03,531.49L956.98,529.1L962.15,529.1L966.68,532.29L969.91,532.29L973.79,536.26L980.25,535.46L983.48,537.84L987.36,537.84L1000.94,552.95L1010.64,555.32L1016.47,564.86L1019.7,564.86L1022.93,568.04L1023.58,574.4L1031.34,575.2L1039.09,579.96L1053.32,598.23L1057.2,599.82L1061.08,609.36L1068.19,614.92L1067.55,617.3L1060.43,617.3L1057.85,619.69L1050.08,618.1L1046.21,622.86L1038.45,622.86L1035.86,625.24L1035.86,627.63L1038.45,627.63L1039.09,626.04L1048.15,625.24L1048.79,622.86L1053.96,622.07L1061.73,626.83L1064.96,631.6L1070.13,632.4L1070.13,633.98L1062.37,639.54L1058.49,645.9L1053.32,646.69L1047.5,650.66L1048.15,652.25L1043.62,652.25L1040.39,655.42L1039.74,660.19L1042.98,663.38L1045.56,664.96L1057.2,665.75L1055.91,671.32L1053.96,671.32L1053.32,673.69L1050.73,673.69L1049.44,680.05L1051.38,680.05L1053.32,684.02L1058.49,686.4L1061.73,691.17L1061.73,694.34L1053.96,698.32L1048.15,689.58L1039.74,687.99L1035.86,691.96L1038.45,698.32L1032.63,698.32L1030.69,701.49L1031.98,707.06L1040.39,709.43L1041.03,711.02L1036.51,718.17L1037.15,722.93L1041.03,727.7L1040.39,734.04L1038.45,734.84L1037.8,741.2L1032.63,740.4L1037.8,744.37L1037.8,747.54L1033.27,747.54L1034.57,755.48L1029.4,755.48L1027.45,752.31L1026.81,745.16L1022.28,739.6L1023.58,729.28L1020.34,726.9L1011.29,702.29L1007.41,698.32L995.13,695.14L994.48,697.52L997.06,705.46L999.65,705.46L998.36,709.43L1000.94,715.79L997.06,722.93z",
  "South Eastern": "M885.14,548.58L889.74,552.06L887.26,559.02L885.49,560.76L881.6,560.76L876.29,566.85L868.14,567.72L860,572.94L850.8,586.43L849.38,591.21L859.29,600.35L854.34,602.52L854.34,605.13L859.65,609.91L868.14,612.96L872.39,618.61L880.53,620.35L883.37,631.23L888.32,630.79L890.8,627.31L901.42,622.09L908.15,621.22L916.64,627.75L930.45,632.96L940.72,653.4L953.11,670.8L954.17,677.32L956.29,678.19L958.06,684.71L971.52,689.49L983.55,702.1L986.03,710.36L990.99,716.01L990.6,724.52L990.6,724.52L988.01,723.73L980.9,714.2L971.2,716.57L963.44,716.57L965.38,718.96L962.79,722.93L967.96,722.93L969.91,732.46L967.96,734.84L957.62,735.64L960.85,745.16L962.79,745.96L962.79,750.73L965.38,750.73L966.68,747.54L972.49,745.16L984.77,758.66L990.6,759.45L988.66,754.69L984.77,751.51L982.84,745.96L992.54,745.96L1000.3,753.1L1000.94,759.45L1006.76,756.27L1008.06,756.27L1008.06,758.66L1005.47,759.46L998.36,768.19L993.83,762.63L991.89,775.33L983.48,780.89L983.48,783.27L978.31,784.86L975.08,788.03L969.91,788.03L965.38,792L944.04,790.41L941.45,788.83L929.17,791.2L918.18,788.83L914.94,785.66L909.13,784.86L898.13,777.71L895.54,777.71L894.9,775.33L890.37,775.33L888.43,772.94L881.97,772.16L878.09,769.77L865.16,768.98L863.86,770.57L858.04,770.57L852.87,768.19L850.93,765.01L847.05,765.8L846.4,768.19L840.58,766.6L839.94,768.98L832.82,768.98L832.82,766.6L830.24,766.6L829.59,765.01L825.06,765.8L825.06,764.21L820.54,764.21L812.13,755.48L799.84,754.69L792.73,752.31L792.09,750.73L791.44,752.31L788.85,751.51L788.85,753.9L786.91,755.48L779.8,755.48L753.94,742.78L750.7,742.78L748.12,745.16L737.77,734.84L720.31,733.26L713.2,730.87L704.14,730.87L696.38,726.9L692.51,718.17L692.51,712.61L678.93,710.23L667.94,705.46L665.35,708.64L662.12,703.87L658.89,702.29L659.53,700.7L651.77,701.49L647.89,699.1L644.66,687.99L638.83,687.2L633.66,679.26L633.66,679.26L635.91,676.45L636.27,669.49L646.89,657.75L649.36,647.31L653.97,640.79L656.8,630.79L667.06,630.35L672.73,634.27L677.33,633.4L682.99,630.35L697.16,617.74L697.16,614.7L692.55,608.61L692.2,595.13L688.31,586.86L690.43,566.85L690.43,566.85L701.76,570.77L708.48,569.46L721.58,574.68L726.54,575.12L746.01,563.37L759.82,562.5L765.48,563.8L774.68,562.07L785.31,563.8L788.49,562.07L790.97,551.19L793.8,549.01L807.25,555.98L815.75,555.98L832.39,560.33L840.18,566.42L842.3,565.98L849.74,555.98L852.57,555.54L857.88,545.1L867.44,546.84L869.21,551.19L875.22,554.23z",
  Gozo: "M475.24,192.68l3.88,3.99v3.18l1.94,0.8v4.78l-4.52,-4.78l-6.47,1.58l-4.53,-4.78v-3.18L475.24,192.68zM518.57,177.57l3.23,3.98l-1.29,3.98l4.53,5.57h7.11l12.28,13.53l1.94,4.78l-3.88,5.56l-0.64,3.98l-7.76,-0.79l-10.99,2.38l-0.65,1.6l-4.53,-0.8l-1.29,1.6l-9.05,-1.6l-2.59,1.6l1.94,0.79l-0.65,1.6l-14.87,-0.8l-5.18,2.39h-5.17l6.47,-8.75l5.82,-3.98l0.65,-3.19l-0.65,-3.18l-3.88,1.6l-1.94,-1.6l-0.65,-3.98l-3.88,-1.6l-3.23,-7.96l1.94,-3.18l-4.52,-3.98l1.94,-5.57l8.41,1.6l2.58,-3.98h4.53l1.94,5.56l1.94,-5.56h3.88l4.53,3.18l4.52,0.8l1.94,3.98v-8.76L518.57,177.57zM280.61,0l3.88,3.18h6.47l5.82,2.38l11.64,-0.8l1.29,1.6h6.47V9.55l-2.59,0.8v2.4l3.24,2.38l12.93,1.6l1.29,5.57l-1.93,3.99l0.64,3.18h3.89l1.94,-6.38l1.29,0.8l0.65,-1.6h7.12l3.23,3.19h3.88l10.35,11.15l0.65,6.38l3.24,3.98l8.4,2.38l1.29,4.78l7.75,2.4l1.94,3.98l6.46,-0.8l7.12,-12.74l6.47,-0.8l1.94,3.98h2.58l2.59,7.96l2.59,2.4l5.81,0.79l7.12,9.56l5.17,-0.8l7.76,-4.77l12.29,1.59l1.94,3.98l1.3,15.14l4.53,1.59l0.65,6.38h3.88l3.23,-3.18l9.06,3.18l5.17,9.56l24.57,24.68l3.88,7.17l1.29,8.76l-5.17,4.77l-10.34,1.6l-4.52,5.58l-11,0.8l-5.82,7.16h-10.99l-3.23,-3.18l-5.17,-0.8h-5.82v1.6l-5.17,0.79h-4.53l-3.88,-3.18h-2.58l-2.59,3.18l-5.17,-1.58l-1.3,4.78l5.17,0.79l-20.04,15.13h-5.82l-1.94,-1.6l-3.23,1.6l-0.65,3.98l-4.53,1.6l-13.57,-0.8l-1.94,4.78l-16.17,-3.18l-5.82,5.56l-13.57,4.78l-5.17,4.78v2.39h-1.94l-6.47,-7.97h-8.4l-5.82,-11.14h-14.22l-3.24,-2.39h-15.51l-2.58,-2.38h-8.41l-2.58,-3.18l-3.88,0.8l-3.88,-1.6v-1.6l-8.4,1.6v1.6h-3.88l-1.29,2.38l-6.47,-3.18l0.65,-2.39l-5.17,1.6l-3.88,-6.37h-2.59l-1.29,-3.98l-8.4,-8.76v-7.16l-7.76,-7.16l-7.76,0.79l1.94,-1.58l-5.82,-3.19h-10.99l-2.59,3.19l-3.23,-0.8l-5.82,1.6v-1.6l-1.94,0.8l-8.4,-5.58l-3.23,0.8l-4.53,-5.58v-4.78l7.12,-7.96l-1.29,-3.98l1.29,-7.16l-3.24,-9.56l0.65,-2.39l3.88,-0.8l0.65,-3.18l-1.94,-2.38h-2.58l-1.29,-8.76l8.4,-8.76l0.65,-3.98l-2.59,-11.95l-8.4,-3.98h-5.17l-0.65,-1.59l-1.94,-22.3l2.59,-8.76l7.12,1.59h12.93l1.94,-1.59l10.99,0.8l5.17,-3.98l3.88,-7.18h7.76l8.4,-3.98h9.05l11,-2.38l3.23,3.18h4.52l3.24,-6.38h3.88l6.47,3.98h5.82l1.94,-4.77h6.47l1.94,1.59L280.61,0z"
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

// src/Malta.tsx
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
var Malta = ({
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
      MaltaSingle,
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
      MaltaMultiple,
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
var MaltaSingle = ({
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
var MaltaMultiple = ({
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
var Malta_default = Malta;

// src/index.ts
var src_default = Malta_default;
