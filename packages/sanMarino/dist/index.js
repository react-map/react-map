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

// src/Sanmarino.tsx
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
var stateCode = [
  "Acquaviva",
  "Chiesanuova",
  "Domagnano",
  "Faetano",
  "Fiorentino",
  "Borgo Maggiore",
  "San Marino",
  "Montegiardino",
  "Serravalle"
];
var drawPath = {
  Acquaviva: "M291.04,490.18L305.25,493.88L307.02,495.41L314.28,507.52L315.24,513.43L319.86,527.53L321.56,542.18L315.8,551.05L315.04,559.74L317.81,568.01L322.33,574.39L319.69,576.38L313.54,577.03L306.52,580.31L300.36,581.79L278.44,591.77L272.27,592.41L255.43,588.99L242.18,589.55L233.34,587.89L217.43,587.79L221.92,592.46L226.38,594.59L236.22,603.88L237.1,603.78L241.61,609.28L242.57,615.2L241.71,616.17L240.95,626.52L240.09,627.44L241.07,633.36L241.07,633.36L243.82,640.8L243.86,643.34L248.45,654.01L251.32,670L255.01,679.89L228,705.81L221.9,709.88L214.94,716.62L203.55,722.91L193.97,732.47L186.07,735.84L176.46,742.87L172.07,744.16L155.53,761.3L144.97,764.07L133.62,772.99L116.89,776.41L103,792.44L103,792.44L96.84,793.92L92.34,787.54L87.77,776.87L87.59,764.86L82.24,761.16L76.92,759.96L77.64,749.61L76.74,747.16L72.25,742.45L66.86,737.05L52.62,729.05L40.11,720.09L25.9,714.68L22.34,712.46L13.4,704.84L7.97,696.85L6.14,691.86L6.02,683.31L4.18,679.24L4.12,674.11L3.23,673.33L4.08,671.53L4.64,650.04L5.5,649.11L5.12,623.42L3.29,618.48L3.18,611.64L1.33,605.49L0,604.34L0.02,576.79L3.43,568.75L3.31,561.04L5,555.72L6.74,552.99L15.48,546.94L34.11,553.59L53.6,556.74L66.94,563.9L73.1,563.25L76.33,561.22L81.94,562.38L87.23,561.82L89.84,558.96L90.59,552.02L91.48,551.1L95.02,551.56L102.93,548.19L104.71,548.88L112.63,548.05L113.5,547.12L122.9,529.98L133.35,515.93L147.15,493.93L148.89,492.03L153.29,491.57L154.17,490.6L166.54,491.06L178.99,496.61L220.44,493.19L221.34,493.97L229.28,493.14L230.17,493.93L252.26,493.33L253.14,494.11L260.18,493.37L261.08,494.16L290.18,491.16z",
  Chiesanuova: "M250.94,1000.73L251.04,1008.44L250.18,1009.41L251.14,1014.44L254.73,1018.32L261.82,1020.17L267.16,1023.08L273.46,1030.98L278.05,1042.48L282.53,1046.31L285.17,1046.91L294.13,1054.53L297.74,1059.29L303.2,1070.74L304.25,1081.78L305.14,1082.52L305.28,1091.94L304.4,1092.86L304.45,1095.45L290.62,1115.72L284.52,1121.49L285.55,1131.65L285.55,1131.65L280.29,1133.91L275.1,1141.3L273.33,1141.49L268.97,1145.37L262.81,1146.84L261.08,1148.74L254.91,1149.38L254.01,1148.6L248.73,1149.15L247.83,1148.37L239.87,1148.37L229.06,1133.17L222.06,1136.5L219.41,1136.78L214.08,1134.74L205.32,1140.79L191.28,1146.52L183.54,1161.02L175.68,1166.1L170.47,1172.61L153.77,1178.66L137.91,1181.11L137.05,1182.08L123.83,1183.46L122.95,1184.38L104.42,1185.45L102.63,1183.92L88.42,1178.52L80.47,1177.64L62.63,1166.61L45.79,1162.36L59.57,1138.67L60.32,1128.33L67.15,1113.92L73.41,1103.3L83.67,1095.95L84.48,1089.86L86.17,1086.26L67.82,1038.5L66.84,1032.59L65,1028.48L64.97,1025.06L61.26,1014.3L61.19,1010.89L57.53,1000.12L57.47,996.71L52.84,982.62L52.8,979.2L49.11,968.49L49.05,965.02L45.35,954.31L45.32,950.89L43.48,946.78L44.36,945.81L44.99,930.33L48.41,921.42L50.9,910.89L62.09,892.59L72.49,877.81L98.54,848.57L101.97,840.49L101.74,826.81L100.85,826.07L98.92,815.12L105.08,812.77L105.08,812.77L117.41,810.64L118.29,809.67L126.23,808.89L127.09,807.92L135.02,807.09L135.9,806.16L150.02,806.39L155.37,809.3L164.31,816.93L171.38,817.06L183.78,819.19L185.57,820.76L192.68,823.44L195.51,836.84L208.93,848.29L210.71,848.16L224.67,837.25L224.71,839.84L223.84,840.76L224.09,857.02L224.97,857.81L225.97,865.39L242.63,857.67L247.94,857.99L246.63,888.99L238.72,891.49L230.77,892.32L221.92,890.65L216.63,891.21L215.77,892.18L212.25,892.5L202.64,901.23L208.04,906.68L214.44,921.42L214.54,929.13L205.18,952.37L205.28,960.08L211.61,967.98L216.04,969.23L226.78,980.13L234.79,983.59L247.25,990.84L249.96,994.86z",
  Domagnano: "M919.23,329.32L919.37,338.75L931.08,354.66L932.02,357.99L919.26,390.21L913.34,407.96L911.59,410.68L957.68,480.52L957.68,480.52L947.21,488.47L931.6,508.07L915.87,519.12L902.82,533.31L901.14,538.62L895.14,550.41L890.06,566.35L884.01,573.84L880.42,570.79L877.76,570.18L856.6,572.36L853.92,570.92L853.91,568.38L857.35,563.72L855.58,562.19L844.98,564.13L842.34,563.58L840.56,562.88L836.09,558.22L833.36,553.36L830.68,551.05L821.83,549.39L815.58,546.62L811.18,547.08L804.2,552.07L799.78,552.53L794.41,546.25L794.36,544.54L791.69,542.23L789.06,543.33L783.02,553.41L778.62,553.87L771.48,549.43L767.07,549.9L758.35,557.66L751.31,558.4L746.06,562.38L733.72,563.62L724.12,571.48L717.97,574.67L707.4,575.78L703.87,575.27L703.93,579.57L702.25,585.76L696.25,597.5L695.41,601.01L694.64,607.94L696.45,612.89L689.52,621.34L675.59,633.91L667.71,638.99L661.56,640.52L661.02,663.72L660.14,664.64L661.13,670.56L647.14,680.54L641.91,685.39L641.91,685.39L632.2,686.4L631.32,685.62L615.42,686.4L601.26,683.59L598.61,683.86L587.05,679.06L580.77,673.7L571.04,670.42L567.46,668.2L556.87,667.6L557.62,659.79L560.19,653.55L559.29,652.77L555.41,629.2L542.29,637.38L540.51,637.56L545.46,613.07L541.89,610.85L522.37,604.29L511.77,604.57L510.89,605.49L504.73,606.14L503.85,607.06L499.47,607.53L495.95,609.6L492.42,609.98L484.36,602.26L484.06,581.69L494.37,563.48L502.2,554.1L502.17,552.39L505.59,545.18L507.27,539.04L507.21,534.74L508.06,533.81L506.88,512.51L507.74,511.54L507.7,508.12L513.63,492.91L517.12,488.29L519.53,473.45L522.96,466.24L525.58,463.42L531.67,458.48L537.82,455.29L537.82,455.29L544.85,453.72L545.72,452.75L566.89,450.57L567.77,449.65L573.05,449.09L575.67,447.11L588.61,426.03L594.69,420.25L603.46,415.07L612.26,412.44L638.58,401.16L640.23,394.13L642.85,391.31L646.36,390.95L651.71,392.93L666.14,412.9L671.45,414.94L677.65,415.12L680.31,416.55L683.02,421.45L684.9,428.11L694.68,432.22L696.44,432.04L702.76,440.82L705.51,448.26L707.29,448.96L712.55,446.69L724.73,433.43L733.49,429.08L742.13,416.18L747.34,410.5L756.1,406.15L762.98,393.44L767.33,387.89L773.47,386.37L782.21,380.31L789.15,371.9L789.99,369.22L797.99,371.85L815.63,369.17L819.16,370.51L828.87,369.5L838.51,365.1L853.39,355.81L856.04,355.58L859.53,353.5L871.03,353.18L890.21,337.46L905.17,334.18z",
  Faetano: "M982.14,646.3L972.52,646.99L961.99,650.64L955.88,657.25L951.58,663.72L948.18,673.05L942.16,683.54L936.09,691.02L928.89,695.6L924.42,700.91L923.02,703.5L923.16,713.76L914.52,726.65L912.85,732.84L905.06,743.05L901.64,751.14L899.15,760.79L899.21,765.09L892.36,780.34L892.63,798.31L888.4,810.74L884.11,818.91L872.8,831.2L863.12,833.93L856.12,838.08L853.48,838.36L852.59,837.58L840.24,839.7L828.86,845.15L821.9,852.73L813.27,865.62L811.56,870.1L811.59,873.52L805.51,879.29L799.49,890.19L798.66,893.7L792.63,902.9L793.71,916.48L794.6,917.26L794.72,925.81L795.65,928.26L799.19,928.76L799.24,932.18L800.14,932.97L799.27,933.89L799.27,933.89L779.87,935.88L778.98,935.14L773.67,935.69L772.8,934.91L767.49,935.46L766.61,934.68L761.3,935.23L760.43,934.49L755.13,935L754.22,934.26L748.93,934.81L748.04,934.03L742.76,934.58L741.85,933.8L733.92,933.8L732.38,949.36L717.36,949.18L715.58,948.53L715.4,936.57L714.51,935.78L714.47,932.37L687.86,925.67L685.16,921.7L685.14,919.99L682.43,915.97L678.76,906.91L664.61,905.81L663.7,904.19L663.62,899.06L662.74,898.28L662.52,883.77L660.66,877.95L645.79,887.19L645.79,887.19L636.8,878.69L620.85,872.64L617.26,868.71L617.21,867L617.21,867L638.27,857.12L640.87,854.3L640.81,850L645.16,845.29L650.43,843.03L652.15,840.26L652.1,836.84L648.56,835.5L648.5,832.08L651.11,829.26L655.52,828.8L656.4,827.83L656.31,822.7L654.5,818.59L655.29,814.25L659.65,809.49L664.06,809.07L664.93,808.1L664.83,801.27L662.06,793.83L659.37,789.85L658.39,784.77L660.1,781.17L676.6,762.36L677.42,757.14L685.96,738.25L696.31,721.75L695.91,694.4L690.63,694.91L680.95,699.34L668.74,708.31L643.72,688.62L641.91,685.39L641.91,685.39L647.14,680.54L661.13,670.56L660.14,664.64L661.02,663.72L661.56,640.52L667.71,638.99L675.59,633.91L689.52,621.34L696.45,612.89L694.64,607.94L695.41,601.01L696.25,597.5L702.25,585.76L703.93,579.57L703.87,575.27L707.4,575.78L717.97,574.67L724.12,571.48L733.72,563.62L746.06,562.38L751.31,558.4L758.35,557.66L767.07,549.9L771.48,549.43L778.62,553.87L783.02,553.41L789.06,543.33L791.69,542.23L794.36,544.54L794.41,546.25L799.78,552.53L804.2,552.07L811.18,547.08L815.58,546.62L821.83,549.39L830.68,551.05L833.36,553.36L836.09,558.22L840.56,562.88L842.34,563.58L844.98,564.13L855.58,562.19L857.35,563.72L853.91,568.38L853.92,570.92L856.6,572.36L877.76,570.18L880.42,570.79L884.01,573.84L890.06,566.35L895.14,550.41L901.14,538.62L902.82,533.31L915.87,519.12L931.6,508.07L947.21,488.47L957.68,480.52L957.68,480.52L972.12,501.32L973.95,505.39L975.86,514.63L979.56,525.4L979.6,528.82L985.16,546.25L986.12,552.16L987.03,552.9L987.06,556.32L990.77,567.09L990.82,570.51L991.71,571.29L993.06,603.69L989.71,616.07L988.12,627.35z",
  Fiorentino: "M617.21,867L617.26,868.71L620.85,872.64L636.8,878.69L645.79,887.19L645.79,887.19L642.56,908.21L646.52,928.39L647.51,954.54L639.88,959.57L630.6,971.53L622.98,975.65L618.35,977.03L611.05,982.53L611.37,1001.79L627.63,1004.51L635.59,988.95L656.14,999.94L656.14,1016.01L646.2,1022.89L641.55,1027.47L639.88,1040.77L634.59,1047.65L626.63,1050.37L623.64,1054.53L648.52,1099.46L641.21,1115.49L628.62,1115.49L621.66,1125.14L594.49,1154.92L594.13,1175.19L594.13,1175.19L582.09,1177.27L574.2,1182.35L572.46,1182.54L567.09,1178.8L552.26,1191.49L543.51,1196.67L533.85,1200.22L532.14,1202.99L528.83,1217.86L511.05,1211.16L506.64,1211.58L502.27,1213.75L492.56,1214.77L489.94,1215.87L484.72,1220.72L477.7,1224L470.6,1222.15L453.8,1220.49L452.88,1218.88L447.53,1215.14L440.44,1213.29L435.06,1208.72L419.96,1202.58L413.71,1198.05L411.01,1194.08L410.05,1189.88L413.44,1179.26L413.38,1175.84L409.85,1175.33L403.64,1172.56L399.16,1168.73L399.09,1164.48L398.18,1163.7L402.52,1157.28L400.72,1154.88L398.93,1154.19L404.9,1139.87L402.17,1135.02L389.66,1124.31L386.99,1123.75L367.41,1112.9L364.75,1112.35L362.07,1110.04L361.12,1105.88L354.78,1094.52L353,1093.88L352.14,1094.8L327.48,1100.76L307.46,1119.97L313.74,1127.86L308.55,1134.42L305.16,1131.51L300.67,1131.7L294.47,1137.56L293.54,1133.41L291.74,1131L289.09,1130.4L285.55,1131.65L285.55,1131.65L284.52,1121.49L290.62,1115.72L304.45,1095.45L304.4,1092.86L305.28,1091.94L305.14,1082.52L304.25,1081.78L303.2,1070.74L297.74,1059.29L294.13,1054.53L285.17,1046.91L282.53,1046.31L278.05,1042.48L273.46,1030.98L267.16,1023.08L261.82,1020.17L254.73,1018.32L251.14,1014.44L250.18,1009.41L251.04,1008.44L250.94,1000.73L250.94,1000.73L257.08,998.42L261.48,997.95L262.36,996.98L267.66,996.48L279.05,990.98L294.94,989.36L295.82,990.1L304.64,990.06L305.54,990.84L328.49,989.32L345.36,995.27L388.28,971.16L398.9,973.47L417.43,971.58L418.31,972.32L423.6,971.81L430.72,975.32L432.47,974.31L435.91,967.98L440.15,956.38L444.44,948.21L444.42,946.5L448.71,938.37L448.71,938.37L466.35,936.57L467.22,935.6L472.51,935.05L489.23,929.92L495.35,926.68L507.68,924.56L516.48,921.1L524.39,920.26L525.28,919.34L533.2,917.68L547.22,910.19L558.58,901.32L567.34,897.86L574.38,896.29L577.88,892.5L586.68,890.7L596.21,879.48L607.61,873.15L613.71,868.2z",
  "Borgo Maggiore": "M537.82,455.29L531.67,458.48L525.58,463.42L522.96,466.24L519.53,473.45L517.12,488.29L513.63,492.91L507.7,508.12L507.74,511.54L506.88,512.51L508.06,533.81L507.21,534.74L507.27,539.04L505.59,545.18L502.17,552.39L502.2,554.1L494.37,563.48L484.06,581.69L484.36,602.26L492.42,609.98L495.95,609.6L499.47,607.53L503.85,607.06L504.73,606.14L510.89,605.49L511.77,604.57L522.37,604.29L541.89,610.85L545.46,613.07L540.51,637.56L542.29,637.38L555.41,629.2L559.29,652.77L560.19,653.55L557.62,659.79L556.87,667.6L567.46,668.2L571.04,670.42L580.77,673.7L587.05,679.06L598.61,683.86L601.26,683.59L615.42,686.4L631.32,685.62L632.2,686.4L641.91,685.39L641.91,685.39L643.72,688.62L668.74,708.31L680.95,699.34L690.63,694.91L695.91,694.4L696.31,721.75L685.96,738.25L677.42,757.14L676.6,762.36L660.1,781.17L658.39,784.77L659.37,789.85L662.06,793.83L664.83,801.27L664.93,808.1L664.06,809.07L659.65,809.49L655.29,814.25L654.5,818.59L656.31,822.7L656.4,827.83L655.52,828.8L651.11,829.26L648.5,832.08L648.56,835.5L652.1,836.84L652.15,840.26L650.43,843.03L645.16,845.29L640.81,850L640.87,854.3L638.27,857.12L617.21,867L617.21,867L613.71,868.2L607.61,873.15L596.21,879.48L586.68,890.7L577.88,892.5L574.38,896.29L567.34,897.86L558.58,901.32L547.22,910.19L533.2,917.68L525.28,919.34L524.39,920.26L516.48,921.1L507.68,924.56L495.35,926.68L489.23,929.92L472.51,935.05L467.22,935.6L466.35,936.57L448.71,938.37L448.71,938.37L448.69,936.66L453,928.49L452.88,921.65L453.76,920.73L454.55,914.63L466.64,896.24L475.35,888.48L475.3,884.23L474.41,883.45L474.33,879.2L472.49,873.38L472.39,867.37L471.49,866.63L470.3,845.34L469.4,844.55L466.53,828.57L464.68,823.62L464.11,785.14L463.19,783.52L452.56,780.34L450.53,762.55L445.95,750.17L413.62,715.79L405.59,709.78L398.46,706.23L386.97,704.01L372.74,698.6L359.47,695.69L356.79,694.26L340,693.43L339.1,692.64L322.33,693.52L316.12,691.58L299.85,667.55L284.63,652.86L281.93,648.84L280.98,645.51L276.56,644.26L266.76,639.27L260.58,638.21L249.03,634.24L241.07,633.36L241.07,633.36L240.09,627.44L240.95,626.52L241.71,616.17L242.57,615.2L241.61,609.28L237.1,603.78L236.22,603.88L226.38,594.59L221.92,592.46L217.43,587.79L233.34,587.89L242.18,589.55L255.43,588.99L272.27,592.41L278.44,591.77L300.36,581.79L306.52,580.31L313.54,577.03L319.69,576.38L322.33,574.39L317.81,568.01L315.04,559.74L315.8,551.05L321.56,542.18L319.86,527.53L315.24,513.43L314.28,507.52L307.02,495.41L305.25,493.88L291.04,490.18L291.04,490.18L304.03,471.7L311.91,467.49L314.52,464.63L376.78,375.04L384.64,369.96L396.97,366.95L403.11,363.76L403.11,363.76L420.81,367.09L434.08,367.42L434.97,368.2L447.32,367.79L448.19,366.81L458.77,364.87L465.77,361.59L468.42,361.31L476.3,356.18L480.69,354.89L490.33,349.62L492.93,347.63L503.35,334.55L506,334.27L515.62,328.12L517.37,327.94L527.21,335.52L532.56,338.38L532.57,340.1L531.71,341.07L530.22,360.07L507.68,388.13L522.06,406.34L509.12,425.66L510.01,427.28L529.64,440.68L536.88,451.96z",
  "San Marino": "M241.07,633.36L249.03,634.24L260.58,638.21L266.76,639.27L276.56,644.26L280.98,645.51L281.93,648.84L284.63,652.86L299.85,667.55L316.12,691.58L322.33,693.52L339.1,692.64L340,693.43L356.79,694.26L359.47,695.69L372.74,698.6L386.97,704.01L398.46,706.23L405.59,709.78L413.62,715.79L445.95,750.17L450.53,762.55L452.56,780.34L463.19,783.52L464.11,785.14L464.68,823.62L466.53,828.57L469.4,844.55L470.3,845.34L471.49,866.63L472.39,867.37L472.49,873.38L473.37,874.16L474.41,883.45L475.3,884.23L475.35,888.48L466.64,896.24L454.55,914.63L453.76,920.73L452.88,921.65L453,928.49L448.69,936.66L448.71,938.37L448.71,938.37L444.42,946.5L444.44,948.21L440.15,956.38L435.91,967.98L432.47,974.31L430.72,975.32L423.6,971.81L418.31,972.32L417.43,971.58L398.9,973.47L388.28,971.16L345.36,995.27L328.49,989.32L305.54,990.84L304.64,990.06L295.82,990.1L294.94,989.36L279.05,990.98L267.66,996.48L262.36,996.98L261.48,997.95L257.08,998.42L250.94,1000.73L250.94,1000.73L249.96,994.86L247.25,990.84L234.79,983.59L226.78,980.13L216.04,969.23L211.61,967.98L205.28,960.08L205.18,952.37L214.54,929.13L214.44,921.42L208.04,906.68L202.64,901.23L212.25,892.5L215.77,892.18L216.63,891.21L221.92,890.65L230.77,892.32L238.72,891.49L246.63,888.99L247.94,857.99L242.63,857.67L225.97,865.39L224.97,857.81L224.09,857.02L223.84,840.76L224.71,839.84L224.67,837.25L210.71,848.16L208.93,848.29L195.51,836.84L192.68,823.44L185.57,820.76L183.78,819.19L171.38,817.06L164.31,816.93L155.37,809.3L150.02,806.39L135.9,806.16L135.02,807.09L127.09,807.92L126.23,808.89L118.29,809.67L117.41,810.64L105.08,812.77L105.08,812.77L103.91,794.06L103,792.44L103,792.44L116.89,776.41L133.62,772.99L144.97,764.07L155.53,761.3L172.07,744.16L176.46,742.87L186.07,735.84L193.97,732.47L203.55,722.91L214.94,716.62L221.9,709.88L228,705.81L255.01,679.89L251.32,670L248.45,654.01L243.86,643.34L243.82,640.8z",
  Montegiardino: "M645.79,887.19L660.66,877.95L662.52,883.77L662.74,898.28L663.62,899.06L663.7,904.19L664.61,905.81L678.76,906.91L682.43,915.97L685.14,919.99L685.16,921.7L687.86,925.67L714.47,932.37L714.51,935.78L715.4,936.57L715.58,948.53L717.36,949.18L732.38,949.36L733.92,933.8L741.85,933.8L742.76,934.58L748.04,934.03L748.93,934.81L754.22,934.26L755.13,935L760.43,934.49L761.3,935.23L766.61,934.68L767.49,935.46L772.8,934.91L773.67,935.69L778.98,935.14L779.87,935.88L799.27,933.89L799.27,933.89L796.71,941L796.79,946.13L798.63,950.24L798.66,953.66L799.57,953.57L798.71,956.2L798.95,972.46L797.3,979.48L800.88,983.4L801.76,983.31L801.89,991.86L808.96,992L812.51,993.34L815.18,995.64L816.13,998.09L815.35,1005.9L794.48,1028.62L792.8,1034.76L792.88,1038.18L791.99,1039.15L792.04,1042.57L784.37,1060.49L784.38,1062.2L775.91,1077.53L769.58,1086.76L767.05,1092.95L764.72,1094.38L762.84,1097.8L757,1121.54L755.29,1125.14L749.63,1160.83L748.77,1161.8L747.88,1161.02L731.12,1162.77L730.23,1161.99L679.93,1165.45L679.06,1164.71L663.17,1166.33L662.28,1165.59L644.64,1167.39L643.74,1166.65L634.06,1167.62L633.18,1168.59L627.89,1169.1L621.75,1171.45L611.18,1173.39L610.32,1174.36L597.97,1175.66L597.06,1174.87L594.13,1175.19L594.13,1175.19L594.49,1154.92L621.66,1125.14L628.62,1115.49L641.21,1115.49L648.52,1099.46L623.64,1054.53L626.63,1050.37L634.59,1047.65L639.88,1040.77L641.55,1027.47L646.2,1022.89L656.14,1016.01L656.14,999.94L635.59,988.95L627.63,1004.51L611.37,1001.79L611.05,982.53L618.35,977.03L622.98,975.65L630.6,971.53L639.88,959.57L647.51,954.54L646.52,928.39L642.56,908.21z",
  Serravalle: "M978.57,42.41L979.48,44.4L979.65,54.67L980.52,55.45L980.67,65.72L983.45,74L984.51,85.88L982.75,86.95L973.94,87.87L961.68,95.13L955.62,102.62L953.95,109.65L947.04,119.78L940.06,125.65L936.65,133.75L941.23,145.26L941.3,149.56L942.2,150.3L942.29,157.14L944.15,162.97L945.16,172.31L946.07,173.05L947.29,195.25L956.44,217.44L956.58,226.87L948.75,235.38L942.59,237.74L930.42,250.13L915.44,252.53L914.56,253.5L905.75,254.38L913.25,283.65L913.34,288.78L914.23,289.52L916.24,305.61L917.14,306.39L917.22,312.36L918.12,313.14L918.2,319.15L919.1,319.89L919.23,329.32L919.23,329.32L905.17,334.18L890.21,337.46L871.03,353.18L859.53,353.5L856.04,355.58L853.39,355.81L838.51,365.1L828.87,369.5L819.16,370.51L815.63,369.17L797.99,371.85L789.99,369.22L789.15,371.9L782.21,380.31L773.47,386.37L767.33,387.89L762.98,393.44L756.1,406.15L747.34,410.5L742.13,416.18L733.49,429.08L724.73,433.43L712.55,446.69L707.29,448.96L705.51,448.26L702.76,440.82L696.44,432.04L694.68,432.22L684.9,428.11L683.02,421.45L680.31,416.55L677.65,415.12L671.45,414.94L666.14,412.9L651.71,392.93L646.36,390.95L642.85,391.31L640.23,394.13L638.58,401.16L612.26,412.44L603.46,415.07L594.69,420.25L588.61,426.03L575.67,447.11L573.05,449.09L567.77,449.65L566.89,450.57L545.72,452.75L544.85,453.72L537.82,455.29L537.82,455.29L536.88,451.96L529.64,440.68L510.01,427.28L509.12,425.66L522.06,406.34L507.68,388.13L530.22,360.07L531.71,341.07L532.57,340.1L532.56,338.38L527.21,335.52L517.37,327.94L515.62,328.12L506,334.27L503.35,334.55L492.93,347.63L490.33,349.62L480.69,354.89L476.3,356.18L468.42,361.31L465.77,361.59L458.77,364.87L448.19,366.81L447.32,367.79L434.97,368.2L434.08,367.42L420.81,367.09L403.11,363.76L403.11,363.76L403.08,362.05L430.84,329.19L532.1,248.42L562.64,222.94L567.01,220.77L582.71,206.3L590.59,202.92L598.47,196.96L603.71,194.69L609.03,194.14L612.51,192.1L621.19,182.62L630.86,178.18L636.97,174.11L657.23,170.32L663.34,165.37L670.38,163.8L679.12,156.91L683.49,154.74L693.2,153.72L698.51,154.88L712.63,153.44L713.48,152.47L717.9,152.06L724.04,149.7L732.77,142.76L750.19,126.39L756.32,122.32L766.9,121.26L771.32,122.51L773.97,122.23L776.64,123.66L781.93,122.28L788,114.79L798.49,107.71L806.21,92.31L814.02,83.8L815.78,82.74L832.54,81.86L842.14,73.17L854.48,71.87L862.37,67.66L871.89,53.79L871.84,51.24L868.26,48.15L869.06,43.8L873.45,40.75L877.86,40.33L878.71,39.36L881.29,33.12L882.07,27.89L887.32,23.91L897.05,23.73L899.65,20.91L899.62,19.19L903.93,12.77L906.58,12.49L911.04,14.57L913.66,14.29L920.59,3.28L923.22,3.05L925.96,8.74L926,11.33L930.51,16.88L934.03,17.34L938.36,11.75L944.56,11.1L948.1,12.49L952.57,17.16L958.78,18.22L961.4,17.11L963.12,14.34L963.09,10.92L963.98,10.82L963.85,2.27L969.1,0L974.44,2.04L974.64,15.73L975.53,16.51L976.59,27.52L977.48,28.31z"
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

// src/Sanmarino.tsx
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
var Sanmarino = ({
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
      SanmarinoSingle,
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
      SanmarinoMultiple,
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
var SanmarinoSingle = ({
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
var SanmarinoMultiple = ({
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
var Sanmarino_default = Sanmarino;

// src/index.ts
var src_default = Sanmarino_default;
