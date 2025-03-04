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

// src/Vanuatu.tsx
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
var stateCode = ["Shefa", "Penama", "Malampa", "Tafea", "Sanma", "Torba"];
var drawPath = {
  Shefa: "M428.87,1100.65L428.02,1098.06L426.81,1096.53L419.64,1097.78L413.46,1102.95L404.04,1117.01L401.6,1119.76L395.49,1124.17L392.72,1127.2L386.85,1139.53L386.13,1142.6L389.46,1144.75L390.16,1147.27L391.74,1148.26L394.34,1147.7L395.94,1146.18L399.13,1140.9L400.81,1139.08L403.91,1137.33L406.8,1136.54L409.94,1136.98L413.75,1139.08L415.6,1139.77L417.16,1139.97L418.2,1140.78L418.95,1146.04L419.99,1147.21L421.61,1147.09L423.57,1145.84L422.48,1151.01L418.26,1153.32L413,1154.94L408.9,1158.05L408.9,1159.59L417.35,1157.61L421.15,1155.95L423.57,1152.79L425.06,1152.79L423.57,1161.45L424.73,1159.91L426.25,1159.1L428.1,1159.02L430.05,1159.59L430.49,1158.82L430.49,1158.54L430.62,1158.42L431.66,1158.05L431.91,1160.12L432.91,1162.62L433.11,1164.69L435.65,1161.37L436.69,1162.1L437.21,1164.52L438.13,1166.39L442.28,1168.81L444.09,1168.77L460.88,1164.69L461.07,1165.23L462.23,1166.39L463.73,1167.54L464.94,1168.09L466.7,1167.56L467.81,1166.43L468.47,1165.25L468.97,1164.69L475.06,1163.41L478.21,1162.1L479.97,1159.1L481.87,1152.79L488.92,1138.4L488.52,1134.15L487.25,1135.14L485.22,1135.99L482.84,1136.38L480.43,1135.85L478.91,1134.35L477.02,1129.66L475.58,1127.2L471.16,1125.38L468.97,1121.44L467.66,1116.57L465.73,1111.96L463.38,1108.32L462,1107.25L459.99,1106.87L459.03,1105.94L458.22,1101.46L457.66,1099.92L454.31,1097.62L450.5,1096.93L434.19,1099.68L430.05,1102.22L428.87,1100.65zM400.87,1105.82L403.33,1103.68L408.84,1099.92L412,1099.07L417.28,1096.04L420.28,1094.99L415.6,1090.75L406.91,1093.86L399.56,1100.93L398.98,1108.57L400.87,1105.82zM438.42,1083.24L436.46,1074.52L433.69,1069.81L430.49,1067.21L427.85,1068.42L426.75,1075.36L429.45,1080.98L434.69,1084.49L438.42,1083.24zM431.61,987.65L439.46,985.65L440.73,984.32L441.66,982.67L442.93,981.14L449,977.68L450.98,976.06L445.51,974.65L442.28,974.71L433.05,979.29L430.72,980.9L427.95,983.84L426.75,986.66L429.18,987.89L431.61,987.65zM485.34,949.08L491.66,938.59L487.25,934.06L481.18,934.6L476.73,938.41L476.98,943.66L475.75,947.06L476.44,949.16L478.87,950.25L482.72,950.57L485.34,949.08zM394.16,859.55L391.85,858.97L389.72,859.49L388.27,860.33L386.83,860.5L384.5,858.97L385.67,862.69L386.02,864.35L386.13,866.73L385.65,869.82L384.4,871.49L382.9,872.69L381.4,874.48L380.36,878.38L379.91,887.53L378.91,890.49L378.85,892.6L380.76,894.87L384.5,898.09L385.04,900.62L384.5,907.44L385.84,909.75L392.82,916.61L395.82,918.49L405.49,920.72L412.38,918.04L419.39,913.9L429.24,911.77L432.8,912.33L437.38,913.78L441.27,915.67L445.13,919.77L457.66,926.94L460.03,925.81L462.52,926.94L463,923.76L461.59,919.87L461.01,916.51L464.14,915.11L460.21,909.61L454.77,907.74L442.24,908.19L438,906.9L435.77,904L434.76,901.11L433.99,899.78L429.7,898.53L427.6,895.51L426.06,891.69L423.57,887.95L422.48,886.99L420.92,885.9L419.05,885L416.99,884.62L414.66,885.18L410.75,887.71L408.9,887.95L406.91,885.7L405.87,881.62L405.32,877.76L404.85,876.01L402.48,873.9L398.36,864.62L396.71,862.51L395.96,861.96L395.32,860.76L394.16,859.55z",
  Penama: "M404.04,715.45L410.69,711.72L413.73,705.17L414.35,696.58L413.75,686.86L412.85,682.52L410.03,676.89L408.9,673.27L407.05,660.64L401.5,644.81L400.81,641.39L400.81,633.89L397.57,626.11L397.21,621.99L399.06,606.92L398.59,603.2L397.44,602L395.94,601.36L394.34,599.12L393.64,596.7L392.14,585.31L386.94,585.73L385.61,605.36L379.84,624.55L378.68,634.73L379.3,644.39L381.4,653.12L387.06,666.91L389.66,685.78L393.88,700.66L394.74,710.58L395.9,714.12L398.71,715.83L404.04,715.45zM317.61,589.03L333.3,575.98L335.27,572.7L336.04,568.19L337.02,563.11L339.47,557.62L342.63,552.59L345.71,548.85L351.14,543.58L350.95,541.19L344.9,540.19L324.71,543.66L313.23,548.17L309.23,548.85L304.09,550.55L275.2,578.18L272.94,582.41L274.33,585.17L282.42,589.25L287.45,590.88L312.16,591L317.61,589.03zM394.13,561.71L394.34,554.56L395.94,547.61L396.36,542.98L395.09,539.41L395.82,522.66L395.05,520.51L391.74,516.55L390.99,514.44L390.99,505.9L390.54,503.11L387.75,495.11L387.52,492.59L387.85,487.45L387.75,484.93L384.88,471.27L384.5,465.61L383.82,462.32L381.99,457.48L379.45,453.17L376.56,451.46L374.44,452.69L372.63,455.28L371.78,458.25L372.44,460.59L374.13,462.8L374.23,464.14L373.59,465.37L373.19,467.29L378.91,505.16L381.16,510.73L381.26,536.99L379.66,545.5L382.42,557.14L382.76,563.27L381.4,568.99L387.12,567.81L389.66,567.81L392.72,568.99L394.13,561.71z",
  Malampa: "M433.3,850.63L435.88,848.2L435.84,844.46L433.05,840.44L430.18,838.94L427.16,839.04L420.28,840.44L423.17,847.01L425.13,849.79L428.37,850.73L433.3,850.63zM408.07,839.6L409.73,835.91L409.94,827.31L412.13,823.61L405.78,824.24L403.06,826.29L400.81,835.54L398.44,839.8L400.1,842.09L403.91,842.13L408.07,839.6zM426.64,796.11L428.43,793.14L428.14,789.49L426.41,787.38L409.46,778.34L404.97,773.78L404.04,766.2L399.42,750.8L395.67,742.62L390.99,737.45L385.84,738.79L383.73,739.79L380.07,749.48L378.91,750.92L375.67,752.91L366.82,761.97L361.88,764.52L351.37,764.52L349.06,765.06L345.55,767.5L338.62,769.15L332.8,771.84L329.74,775.11L332.96,778L331.65,781.47L334.19,783.59L338.29,785.28L341.7,787.32L345.44,790.41L353.3,795.23L355.57,798.16L359.03,796.56L362.21,797.14L368.47,801.57L371.46,800.61L374.63,801.45L377.79,803.4L380.53,805.75L383.49,806.87L386.83,805.87L390.27,804.24L393.53,803.4L418.59,802.46L426.64,796.11zM214.16,745.17L211.97,743.2L209.91,740.92L207.81,739.13L209.39,736.01L208.46,733.62L206,731.92L202.95,730.72L207.11,722.12L192.94,703.93L193.25,695.28L167.25,685.04L159.98,690.23L157.56,690.79L156.73,692.15L156.34,694.03L155.13,696.04L154.92,699.2L155.94,715.45L148.83,729.09L147.83,734.92L148.6,738.11L150.39,740.1L152.49,741.84L154.32,744.33L155.07,746.97L155.38,749.48L155.96,751.9L157.56,754.41L160.08,753.07L163.24,754.35L168.86,759.46L179.75,752.18L183.56,747.55L185,749.38L186.24,748.29L190.01,746.01L198.47,759.34L199.72,763.67L200.22,764.46L201.34,764.64L202.41,765.22L202.95,767.1L202.8,771.5L202.95,772.94L205.46,784.86L204.24,788.01L203.99,803.14L204.71,808.44L205.42,808.8L206.9,809.24L208.46,810.08L209.56,811.65L209.73,813.01L209.56,817.55L209.91,821.21L210.93,823.88L216.82,831.77L218.86,836.47L220.25,841.41L220.86,845.35L218.69,844.62L216.82,843.5L215.34,842.07L214.39,840.44L212.8,840.44L213.35,845.93L216.2,849.42L219.38,852.06L222.27,857.72L228.76,859.97L230.71,862.51L232.19,862.51L232.73,859.31L234,859.33L235.62,860.54L237,860.82L242.01,855.79L248.21,854.97L251.03,853.82L253.34,850.73L251.22,850.33L250.37,849.77L249.75,848.82L248.16,847.36L250.93,844.84L255.65,841.47L260.89,839.52L265.37,841.35L267.51,841.53L271.09,840.89L274.48,840.93L275.95,843.14L277.22,843.66L283.46,844.72L285.65,845.35L287.27,847.56L288.2,850.37L289.87,852.42L293.71,852.38L296.4,850.93L296.52,849.08L296.32,846.99L297.83,844.66L300.29,841.89L301.49,839.48L302.93,837.73L305.99,837.07L307.84,836.27L313.43,830.5L311.83,827.95L310.27,824.02L308.42,820.96L305.99,821.09L303.39,823.45L301.72,825.8L300.75,828.94L300.48,833.7L296.86,830.96L297.33,826.43L301.78,818.23L299.75,806.05L296.52,800.49L290.47,801.57L280.22,793.14L275.99,788.41L277.57,784.86L277.57,783.03L276.7,782.69L274.48,781.49L268.17,784.13L264.8,782.35L261.73,778.02L256.42,772.94L253.3,771.38L247.81,769.79L245.09,768.03L243.3,765.94L241.92,763.37L240.9,760.61L240.24,757.78L239.28,758.6L238.47,759.1L237.76,759.8L237,761.15L235.56,761.15L234.29,760.31L228.95,757.78L228.65,755.83L230.48,753.11L230.71,750.92L227.34,745.57L225.1,743L224.1,743.4L225.37,747.73L225.74,749.96L224.93,750.92L222.48,750.14L218.86,746.77L214.16,745.17z",
  Tafea: "M783.48,1777.1L785.39,1775.97L790.68,1774.91L793.3,1773.65L795.67,1771.17L797.29,1768.11L799.78,1761.77L797.39,1757.13L794.38,1754.67L790.68,1752.5L785.91,1748.78L781.36,1747.33L774.93,1747.57L768.88,1748.64L765.84,1749.54L762.97,1753.77L761.29,1760.13L761.68,1765.96L764.95,1768.5L772.16,1771.95L778.22,1773.53L781.21,1774.91L783.48,1777.1L783.48,1777.1zM692.5,1624.76L694.31,1619.26L695.93,1608.22L704.32,1597.57L705.77,1594.49L700.78,1592.63L697.12,1589.93L689.46,1585.78L684.6,1583.6L678.73,1582.04L673.76,1579.96L671.68,1576.34L668.44,1557.5L669.37,1551.98L670.75,1547.82L670.54,1544.43L666.69,1541.06L662.78,1543.02L653.65,1543.15L648.91,1544.49L646.31,1546.19L644.64,1547.92L643.54,1550.11L642.58,1553.07L643.58,1558.88L643.58,1562.11L641.73,1563.48L639.09,1566.19L637.8,1572.3L637.49,1578.73L637.76,1582.49L638.74,1585.11L646.7,1596.76L647.3,1598.72L648.05,1599.58L649.72,1600.88L651.4,1602.89L652.13,1605.71L652.9,1607.24L654.75,1607.98L659.49,1608.22L661.91,1610.12L671.68,1621.78L675.59,1623.68L685.68,1626.62L690.26,1627.09L692.5,1624.76zM631.23,1395.95L627.77,1393.83L626.44,1389.28L626.44,1380.23L625.47,1375.29L623.09,1371.31L615.05,1367.08L605.44,1366.8L596.12,1369.52L588.96,1374.72L585.82,1379.64L584.37,1384.87L582.83,1402.86L583.26,1404.69L585.22,1407.18L586.68,1409.76L587.55,1412.63L587.49,1415.97L583.6,1427.12L584.03,1431.35L597.09,1435.75L601.05,1437.7L606.79,1441.88L609.26,1444.22L611.36,1445.28L618.77,1447.43L620.7,1447.56L623.59,1446.27L626.44,1447.03L647.35,1458.43L652.13,1462.06L654.94,1457.82L659.89,1455.44L664.61,1452.32L666.69,1445.93L665.69,1438.43L662.72,1432.71L657.7,1428.26L650.53,1424.51L648.1,1422.7L640.77,1418.92L639.21,1418.45L638.49,1416.05L632.75,1408.97L647.76,1404.88L650.53,1404.69L650.05,1402.95L648.93,1400.91L647.64,1399.26L645.58,1398.06L645.74,1395.83L644.77,1395.34L643.5,1395.58L641.86,1396.11L640.73,1396.7L640.82,1397.05L631.23,1395.95z",
  Sanma: "M169.02,654.06L168.63,648.55L166.94,641.43L169.75,633.89L168.98,629.51L160.5,626.67L143.75,624.59L136.18,626.57L131.62,631.49L130.81,638.03L134.79,644.75L137.7,646.63L144.33,648.39L147.83,649.8L154.42,654.76L157.69,656.36L162.39,656.48L169.02,654.06zM163.28,618.41L163.01,614.15L157.56,611.19L158.93,609.59L159.29,607.97L158.37,606.66L155.94,606L155.94,604.32L159.31,603.44L158.71,602.52L155.46,602.48L150.95,604.32L139.63,616.23L145.02,619.85L147.5,620.75L150.95,621.27L152.76,620.91L153.53,620.55L154.32,619.55L159.81,621.15L163.28,618.41zM148.87,463.66L150.95,461.36L146.79,460.65L140.71,455.88L136.53,454.67L137.62,457.3L142.86,463.18L144.71,464.47L146.75,464.65L148.87,463.66zM69.48,511.41L66.79,509.41L63.55,479.07L62.74,477.33L61.18,476.08L59.97,474.46L60.28,471.53L59.24,459.33L56.91,447.97L52.63,436.01L51.53,430.33L53.84,427.9L44.21,420.59L39.44,418.2L37.97,415.39L35.89,409.38L30.39,402.31L29.46,401.85L29.27,399.26L28.58,396.2L27.32,393.61L25.36,392.51L24.65,391.14L22.34,384.65L21.37,382.66L18.66,380.35L17.56,381.17L16.11,383.08L8.66,385.41L7.81,388.27L8.28,394.33L1.84,407.71L3.35,411.27L3.58,417.07L2.73,422.98L1.03,426.99L0.73,430.97L5.08,449.64L7.04,453.73L12.13,461.36L13.17,465.61L13.51,470.2L14.79,474.88L17.29,478.53L21.37,479.91L19.12,483.96L18.95,487.31L21.37,496.66L22.34,506.86L23.72,511.68L29.4,519.95L30.67,525.61L30.89,536.99L29.96,542.1L26.8,552.11L25.57,559.3L23.38,564.31L22.84,566.51L23.63,568.87L27.09,573.42L27.84,576.5L28.83,578.71L35.09,584.95L36.57,586.89L39.17,594.28L44.41,602.8L47.84,606.36L56,610.07L58.51,615.35L58.43,621.47L55.46,626.11L59.62,630.41L64.75,633.15L70.06,633.63L74.84,631.31L76.53,629.07L77.36,626.91L78.54,624.87L81.46,622.95L86.51,623.95L88.43,623.67L86.12,621.27L91.92,615.95L100.99,613.59L111.12,613.31L120.12,614.39L122.31,615.17L126.3,617.31L129.13,617.75L131.79,617.55L133.98,616.97L135.97,615.95L138.01,614.39L146.98,603.48L150.95,600.36L154.34,599.12L163.2,599.12L165.86,599.6L167.55,600.4L168.94,600.54L170.64,599.12L171.6,597.08L172.21,594.3L171.77,591.8L169.75,590.76L164.09,585.79L158.54,574.4L154.34,561.93L152.7,553.73L154.32,553.73L156.04,557.08L157.5,555.7L158.54,551.69L159.08,547.02L156.81,541.54L155.94,540.19L154.32,538.99L150.53,537.59L149.47,536.99L147.02,533.32L147.83,532.48L149.82,531.6L150.95,527.69L146.7,507.97L147.83,503.48L143.46,501.83L140.51,502.53L134.79,506.7L133.98,501.99L129.94,489.96L129,481.6L127.4,478.69L123.47,478.23L126.22,475.1L127.15,472.59L126.49,462.38L126.99,459.27L129.02,457.2L133.31,456.48L133.31,454.67L115.51,452.99L112.26,454.17L108,456.72L105.31,460.17L106.58,464.02L107.06,467.17L105.69,494.21L105,497.62L103.26,499.77L101.15,501.47L99.22,503.48L96.22,508.39L94.71,510.31L92.21,510.55L86.12,510.33L75.57,511.53L69.48,511.41z",
  Torba: "M237.97,262.6L235.56,261.93L233.19,262.68L229.55,265.92L227.47,266.93L223.48,267.13L221.4,266.69L219.71,267.01L214.07,271.7L211.74,273.07L210.14,275.2L209.56,279.61L211,293L208.62,297.81L207.61,300.75L208.65,302.1L210.37,302.74L212.78,304.13L215.68,305.36L219.09,305.6L222.33,304.37L238.22,305.72L240.82,305.48L243.4,304.05L246.71,300.59L252.8,290.24L254.15,288.75L254.86,286.64L256.42,273.77L254.61,271.4L252.49,269.71L237.97,262.6zM249.95,190.17L247.69,188.75L245.48,188.15L243.53,186.86L242.01,183.39L243.76,182.3L246.71,178.39L243.78,176.31L237,163.4L232.77,158.62L229.42,156.5L225.83,156.56L215.59,161.02L211.27,164.13L208.04,168.16L206.19,173.39L205.8,179.92L207.19,184.96L212.8,193.51L217.42,197.02L219.82,199.6L220.71,202.73L220.86,207.79L223.48,213.96L228.45,213.53L231.69,209.22L228.95,203.5L230.48,202.02L230.53,201.26L229.76,200.87L228.95,200.17L234.98,199.72L240.01,198.49L244.28,196.38L248.16,193.51L249.48,193.27L251.22,193.57L252.66,193.62L253.34,192.67L253.03,190.67L252.32,190.47L251.22,190.75L249.95,190.17zM276.41,149.15L280.38,147.82L282.42,146.77L283.31,143.87L283.27,139.95L282.15,136.46L279.99,134.98L275.56,136.17L272.25,139.04L263.62,150.67L263.99,152.93L266.01,152.75L267.7,150.1L271.71,150.14L276.41,149.15zM193.4,111.54L191.63,108.37L196.87,107.26L196.85,104.09L192.94,101.81L186.79,103.42L183.91,106.9L184,110.82L185.93,114.75L188.39,118.35L193.71,118.95L198.12,118.81L200.95,116.37L201.47,110.03L198.58,112.03L195.81,112.63L193.4,111.54zM40.03,87.18L36.51,83.34L32.87,85.24L36.24,94.86L40.03,87.18zM26.26,47.83L29.17,44.44L29.46,40.15L26.5,36.91L21.78,36.55L16.83,38.37L13.17,41.65L14.01,43.85L14.96,45.61L16.23,47.06L18.02,48.46L22.12,49.43L26.26,47.83zM0.22,0L0.49,2.89L1.61,4.45L2.88,5.65L3.46,7.47L3.23,10.08L1.84,16.77L1.67,21.99L2.38,25.51L4.46,27.96L8.28,30.02L9.59,29.35L10.47,28.6L11.09,27.73L11.55,26.74L11.61,24.86L11.49,23.43L11.78,22.43L13.17,21.75L11.86,19.54L11.55,17.84L12.01,16.33L13.17,14.95L13.17,13.45L12.13,11.39L11.15,5.89L9.89,3.36L8.26,2.21L0.22,0L0.22,0z"
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

// src/Vanuatu.tsx
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
var Vanuatu = ({
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
      VanuatuSingle,
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
      VanuatuMultiple,
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
var VanuatuSingle = ({
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
var VanuatuMultiple = ({
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
var Vanuatu_default = Vanuatu;

// src/index.ts
var src_default = Vanuatu_default;
