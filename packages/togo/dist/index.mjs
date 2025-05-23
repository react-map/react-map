// src/Togo.tsx
import React, { useEffect as useEffect2, useState as useState2, useMemo } from "react";

// src/constants.ts
var constants = {
  WIDTH: 500,
  MAPCOLOR: "#ffffff",
  STROKE_COLOR: "#000000",
  STROKE_WIDTH: 0.5,
  HOVERCOLOR: "#303030",
  SELECTED_COLOR: "#ff0000"
};
var stateCode = ["Savanes", "Centre", "Kara", "Maritime", "Plateaux"];
var drawPath = {
  Savanes: "M0.19,0L3.25,6.92L10.05,13.24L18.4,17.9L25.95,19.84L33.47,19.06L47.4,15.36L55.12,15.23L68.82,20.49L75.01,30.28L76.33,43.22L75.16,58.03L74.18,63.27L71.31,66.14L67.71,68.44L64.43,71.91L62.43,75.84L53.55,117.83L53.87,121.88L55.97,130.09L55.2,134.53L51.66,137.93L43.28,143.64L37.49,151.03L34.38,158.32L32.19,175.78L30.78,181.69L28.27,192.24L28,200.94L32.19,209.58L35.8,212.6L40.3,214.77L45.19,216.04L54.67,217.27L57.6,219.23L60.17,221.75L63.88,224.28L76.71,228.55L80.44,230.85L83.68,234.75L88.48,244.03L91.86,248.14L113.58,261.86L120.08,268.8L140.99,308L142.17,309.46L145.31,309.14L147.05,306.68L148.15,303.95L149.24,302.75L160.13,307.05L164.07,307.61L168.72,306.39L172.57,304.49L176.3,303.31L180.49,304.28L184.55,308.36L184.73,312.97L183.36,317.39L182.79,320.96L187.39,328.52L194.37,334.87L198.69,341.52L195.09,349.96L200.81,349.9L218.81,346.88L222.74,348.77L231.12,355.75L221.04,363.29L219.09,369.68L217.91,376.52L214.95,382.12L215.62,396.15L213.47,425.68L217.49,436.45L222.7,439.82L227.21,440.92L230.52,443.67L231.75,452.1L230.29,459L232.66,461.06L235.66,464.95L240,471.79L241.02,474.02L241.53,476.42L241.47,478.75L240.83,483.5L240.96,485.92L241.53,488.09L242.67,489.74L244.39,490.84L251.52,492.04L253.43,492.94L256.48,495.62L258.83,496.56L262.04,497.01L267,496.88L273.55,498.17L277.37,497.98L279.72,498.17L281.63,498.86L282.71,500.18L282.46,501.8L280.55,505.19L280.17,507.13L280.55,509.16L281.31,511.11L282.52,512.76L283.92,514.24L287.7,516.25L289.35,517.44L290.82,518.89L294.25,524.04L295.84,525.26L298.2,525.91L301.44,525.72L306.28,524.07L312.53,522.54L317.81,522.61L330.75,521.28L333.1,522.03L336.79,524.26L339.15,524.81L343.28,523.72L347.04,524.52L347.54,524.23L348.05,521.28L347.54,516.25L342.65,502.38L342.26,500.22L342.45,497.75L343.15,495.17L344.36,492.33L345.57,486.93L346.65,483.95L348.88,480.53L350.09,477.88L350.73,475.54L350.79,473.86L350.47,469.86L350.73,457.12L351.87,451.94L353.48,447.22L357.43,439.13L369.51,422.16L371.42,417.99L372.44,412.87L371.36,407.12L370.66,404.91L370.79,403.01L372.7,401.29L377.17,399.48L389.7,400.29L392.31,401.2L394.35,402.36L395.43,404.07L396.32,406.05L397.34,407.86L398.95,408.8L401.18,408.64L407.73,404.14L415.36,399.9L418.23,398.87L427.41,399.68L429.57,400.48L432.75,402.97L434.66,403.59L436.83,403.1L441.66,398.35L444.21,396.8L448.36,396.48L451.61,396.64L462.55,398.38L465.03,398.35L468.04,396.54L470.21,394.89L477.54,383.57L477.56,383.55L453.92,367.72L414.9,341.59L383.85,320.76L380.54,314.48L380.2,304.88L385.93,261.9L391.95,238.65L392.25,222.33L388.98,184.71L394.88,170.74L417.19,149.35L422.49,141.66L423.76,137.37L424.4,127.82L425.2,123.35L431.61,111.04L431.02,106.51L427.58,98.02L426.6,93.52L427.79,85.22L438.31,59.48L385,60.47L345.51,61.24L319.76,66.24L268.48,84.35L273.45,66.61L266.83,64.93L268.27,63.27L268.87,61.56L269.16,59.82L269.71,57.97L269.5,56.65L268.95,55.7L268.06,55.1L222.16,45.65L186.37,38.28L92.81,19.06L42.46,8.71L21.14,4.32L0.19,0z",
  Centre: "M727.93,1060.75L727.24,1005.18L726.73,966.67L726.13,921.33L725.46,869.34L723.25,858L719.98,847.99L711.54,833.1L686.05,806.19L653.27,771.66L651.17,768.41L651.1,768.46L635.01,781.45L627.35,785.45L620.1,785.19L563.43,801.19L555.52,801.57L550.56,801.31L530.12,796.87L523.82,796.87L493,801.12L479.05,804.39L478.1,805.16L476.95,806.42L475.93,808.12L474.21,812.48L473.2,817.42L473.01,822.25L473.77,829.96L473.71,845.24L474.66,849.51L479.24,859.24L478.86,861.53L477.33,864.18L470.33,870.26L464.84,876.04L458.92,880.84L455.36,882.87L452.12,884.07L444.72,884.84L429.38,888L426.84,888.1L424.29,887.94L421.66,887.48L414.98,885.04L412.44,884.62L407.16,884.29L404.49,883.88L391.49,879L390.4,877.3L389.58,875.17L389.13,872.79L387.67,871.04L385.25,869.97L379.97,870.52L376.39,870.39L373.4,869.91L370.53,869.14L368.43,869.72L366.72,870.81L365.51,872.58L364.49,874.49L363.73,876.55L362.26,878.75L360.23,881L351.55,887.07L350.22,888.23L349.26,889.67L349.2,889.9L348.37,891.09L344.24,895.47L341.37,896.64L333.99,897.99L331.7,899.28L330.03,900.89L328.75,905.24L328.31,907.67L327.74,910.05L326.91,912.14L325.7,913.79L309.29,924.58L307,926.9L306.34,928.93L306.53,931.07L307.7,932.48L309.22,933.77L310.18,935.51L310.18,937.92L308.4,941.11L306.28,942.64L303.54,943.44L297.18,943.54L294.95,944.44L286.74,951.97L278.13,955.3L266.83,958.47L266.79,958.54L264.71,963.72L264.11,970.19L262.67,975.68L258.16,977.85L252.83,977L248.69,975.72L244.88,975.18L240.55,976.63L242.76,978.26L240.02,985.2L235.72,990L231.33,980.67L226.47,978.78L221.3,979.74L218.51,983.68L219.42,988.99L222.02,1004.24L234.04,1030.26L250.37,1053.18L266.79,1064.42L273.79,1072.56L283.71,1081.75L294.4,1089.51L321.29,1102.19L328.46,1117.44L333.76,1133.14L349.5,1146.25L350.39,1150.55L350.26,1155.31L351.28,1161.39L350.94,1165.55L351.19,1167.51L352.8,1168.93L357.72,1169.72L359.25,1171.14L360.86,1181.34L357.77,1187.65L351.19,1191.75L333.08,1199.81L326.21,1204.35L312.55,1216.68L309.12,1218.33L305.98,1218.72L303.86,1220.33L303.39,1225.69L305.09,1230.05L308.27,1233.13L311.11,1236.69L311.83,1242.42L309.58,1247.78L306.36,1250.28L304.32,1253.21L306.49,1263.39L308.01,1282.88L311.79,1298.34L312,1306.29L311.66,1321.73L315.69,1349.15L324.05,1347.67L344.62,1345.77L350.98,1343.08L353.27,1340.83L356.47,1338.29L362.9,1334.17L366.65,1332.69L399.46,1328.32L403.72,1327.14L405.38,1326.14L406.84,1324.91L411.04,1318.77L413.07,1318.16L415.05,1318.61L417.08,1319.51L422.96,1319.58L462.36,1314.49L468.3,1314.53L472.88,1316.17L490.25,1319.71L493.58,1320.83L497.78,1322.73L503.82,1324.2L510.44,1324.84L517.97,1324.43L552.53,1317.36L564.9,1313.63L577.37,1304.89L577.75,1304.47L578.07,1303.86L578.38,1302.61L576.16,1300.03L575.14,1298.45L574.95,1296.46L575.59,1294.56L581.18,1283.05L581.82,1280.87L582.14,1278.42L581.88,1268.32L583.81,1259.06L584.13,1251.05L584.96,1246.2L586.93,1239.5L587.31,1237L587.31,1228.92L586.99,1226.41L586.36,1224.26L585.34,1222.49L582.33,1219.72L580.93,1218.21L579.91,1216.5L579.21,1214.51L578.83,1212.36L579.66,1205.4L579.34,1203.15L578.07,1198.85L577.62,1196.46L577.24,1191.28L576.73,1189L573.99,1183.27L573.42,1181.05L573.17,1178.54L573.42,1160.64L573.87,1158.62L575.65,1154.98L575.9,1153.18L575.78,1150.63L726.59,1152.51L725.41,1150.78L727.45,1140.67L727.45,1133.46L728.09,1129.95L741.57,1107.56L743.1,1100.23L741.36,1096.18L730.76,1082.68L728.68,1078.04L728.09,1073.15L727.93,1060.75z",
  Kara: "M619.89,492.67L619.84,489.47L614.59,475.29L571.28,446.29L512.49,406.95L477.56,383.55L477.54,383.57L470.21,394.89L468.04,396.54L465.03,398.35L462.55,398.38L451.61,396.64L448.36,396.48L444.21,396.8L441.66,398.35L436.83,403.1L434.66,403.59L432.75,402.97L429.57,400.48L427.41,399.68L418.23,398.87L415.36,399.9L407.73,404.14L401.18,408.64L398.95,408.8L397.34,407.86L396.32,406.05L395.43,404.07L394.35,402.36L392.31,401.2L389.7,400.29L377.17,399.48L372.7,401.29L370.79,403.01L370.66,404.91L371.36,407.12L372.44,412.87L371.42,417.99L369.51,422.16L357.43,439.13L353.48,447.22L351.87,451.94L350.73,457.12L350.47,469.86L350.79,473.86L350.73,475.54L350.09,477.88L348.88,480.53L346.65,483.95L345.57,486.93L344.36,492.33L343.15,495.17L342.45,497.75L342.26,500.22L342.65,502.38L347.54,516.25L348.05,521.28L347.54,524.23L347.04,524.52L343.28,523.72L339.15,524.81L336.79,524.26L333.1,522.03L330.75,521.28L317.81,522.61L312.53,522.54L306.28,524.07L301.44,525.72L298.2,525.91L295.84,525.26L294.25,524.04L290.82,518.89L289.35,517.44L287.7,516.25L283.92,514.24L282.52,512.76L281.31,511.11L280.55,509.16L280.17,507.13L280.55,505.19L282.46,501.8L282.71,500.18L281.63,498.86L279.72,498.17L277.37,497.98L273.55,498.17L267,496.88L262.04,497.01L258.83,496.56L256.48,495.62L253.43,492.94L251.52,492.04L244.39,490.84L242.67,489.74L241.53,488.09L240.96,485.92L240.83,483.5L241.47,478.75L241.53,476.42L241.02,474.02L240,471.79L235.66,464.95L232.66,461.06L230.29,459L230.01,460.28L225.43,461.49L219.09,460.43L211.9,461.81L214.34,465.91L214.1,468.56L212.71,471.15L211.9,475L212.58,477.8L217.49,487.66L220.28,495.9L220.03,499.31L217.16,501.87L211.9,507.59L208.59,513.91L207.76,519.72L209.61,536.41L209.49,541.15L200.68,573.52L201.28,581.26L203.43,585.75L206.37,589L209.1,593.14L211.01,599.26L211.95,606.84L210.8,614.12L206.52,619.25L199.16,620.17L192.26,616.33L181.33,604.78L175.46,616.61L175.76,628.78L182.3,637.5L195.09,638.88L211.73,634.62L219.86,636.19L223.38,644.81L220.53,650.54L213.89,652.44L206.31,651.15L200.68,647.43L193.35,652.24L183.49,652.82L162.83,650.5L161.82,653.17L159.9,664.89L160.04,667.54L161.07,668.74L164.07,671.37L168.13,674.24L172.39,676.09L182.86,674.11L188.66,674.42L192.26,678.92L190.7,683.23L185.45,686.86L179.05,689.37L161.95,692.85L161.91,698.78L164.79,705.42L161.44,710.17L163.31,715.74L170.91,716.58L178.54,715.04L197.31,708.45L200.43,705.81L202.04,702.27L203.29,693.85L205.34,690.56L211.56,687.83L220.79,686.18L237.3,685.25L245.01,686.52L266.79,694.5L269.42,698.2L270.14,702.29L269.2,706.56L266.49,711.21L266.41,711.62L266.49,712.03L266.79,712.46L279,716.64L286.42,723.17L288.97,732.92L285.15,754.01L284.47,766.19L282.78,771.43L278.62,775.73L274,778.44L270.65,782.43L270.26,790.63L275.35,805.5L275.48,812.13L270.52,820.62L261.23,828.94L258.63,832.95L258.68,839.44L256.51,852.84L249.57,865.74L245.35,878.46L250.85,891.35L250.93,891.35L250.93,891.39L270.73,925.14L275.86,945.45L266.83,958.47L278.13,955.3L286.74,951.97L294.95,944.44L297.18,943.54L303.54,943.44L306.28,942.64L308.4,941.11L310.18,937.92L310.18,935.51L309.22,933.77L307.7,932.48L306.53,931.07L306.34,928.93L307,926.9L309.29,924.58L325.7,913.79L326.91,912.14L327.74,910.05L328.31,907.67L328.75,905.24L330.03,900.89L331.7,899.28L333.99,897.99L341.37,896.64L344.24,895.47L348.37,891.09L349.2,889.9L349.26,889.67L350.22,888.23L351.55,887.07L360.23,881L362.26,878.75L363.73,876.55L364.49,874.49L365.51,872.58L366.72,870.81L368.43,869.72L370.53,869.14L373.4,869.91L376.39,870.39L379.97,870.52L385.25,869.97L387.67,871.04L389.13,872.79L389.58,875.17L390.4,877.3L391.49,879L404.49,883.88L407.16,884.29L412.44,884.62L414.98,885.04L421.66,887.48L424.29,887.94L426.84,888.1L429.38,888L444.72,884.84L452.12,884.07L455.36,882.87L458.92,880.84L464.84,876.04L470.33,870.26L477.33,864.18L478.86,861.53L479.24,859.24L474.66,849.51L473.71,845.24L473.77,829.96L473.01,822.25L473.2,817.42L474.21,812.48L475.93,808.12L476.95,806.42L478.1,805.16L479.05,804.39L493,801.12L523.82,796.87L530.12,796.87L550.56,801.31L555.52,801.57L563.43,801.19L620.1,785.19L627.35,785.45L635.01,781.45L651.1,768.46L651.17,768.41L643.38,756.37L637.45,739.79L634.65,697.64L629.94,685.83L622.9,689.28L616.83,683.06L612.68,672.89L611.36,664.42L613.06,659.01L620.35,647.74L622.9,642.46L623.41,638.21L623.28,629.85L624.26,625.71L624.85,620.65L621.63,601.21L621.12,568.87L620.35,523.36L619.89,492.67z",
  Maritime: "M554.83,2090.37L557.37,2089.8L560.64,2089.53L589.96,2076.65L655.02,2056.75L732.9,2043.6L733.03,2043.56L733.04,2043.56L730.08,2034.95L738.56,2030.44L791.28,2017.91L799.81,2017.4L792.09,1987.1L784.12,1956.1L773.55,1939.05L770.03,1936.41L761.21,1931.85L758.5,1929.62L757.61,1926.01L758.62,1917.15L758.12,1913L755.53,1909.48L748.7,1903.84L747.64,1900.96L747.09,1896.24L744.12,1895.19L740.09,1895.57L736.23,1895.13L733.01,1893.2L729.57,1890.44L726.35,1887.17L723.89,1883.78L722.57,1879.55L722.83,1875.74L723.55,1872.28L723.46,1869.07L718.97,1860.8L713.67,1856.47L711.04,1851.83L714.43,1842.56L720.54,1834.34L723.76,1830.01L725.41,1823.61L723,1813.64L719.86,1805.18L718.08,1798.06L717.82,1791L720.92,1773.64L720.07,1767.9L716.38,1763.43L710.29,1758.86L710.25,1758.88L708.36,1759.78L704.8,1762.89L696.38,1776.42L693.9,1779.63L691.29,1781.94L683.85,1785.85L676.85,1788.35L674.41,1788.7L669.45,1788.51L664.36,1787.55L655.2,1784.57L651.3,1784.31L646.4,1784.76L637.17,1786.81L629.13,1789.79L600.67,1810.92L577.62,1833.82L574.06,1832.22L561.02,1827.73L559.34,1826.61L557.94,1825.16L553.11,1816.8L552.53,1816.06L551.58,1815.29L549.03,1814.01L546.93,1813.33L544.9,1812.43L543.18,1811.28L541.84,1809.74L540.83,1808.01L539.55,1806.57L537.65,1805.67L530.5,1804.71L528.78,1803.81L528.14,1802.4L529.04,1799.48L528.21,1798.32L526.3,1797.81L459.31,1794L451.48,1795.79L447.41,1797.43L443.57,1799.51L441.66,1801.43L440.07,1804.2L438.54,1809.13L437.84,1814.07L438.67,1833.75L437.02,1849.73L434.35,1858.9L432.56,1862.96L430.53,1865.88L427.67,1869.27L415.62,1880.4L411.74,1885.18L407.54,1892.06L404.93,1895.37L403.4,1896.75L389.07,1905.71L382.26,1908.29L365.82,1910.69L360.99,1911.41L360.44,1919.9L362.98,1930.04L367.9,1939.84L374.39,1949.83L383.04,1958.73L403.32,1968.76L413.63,1975.3L426.99,1991.44L432.29,1995.47L440.69,1997.73L471.99,1997.86L482.72,2030.95L489.08,2040.08L492.35,2042.47L495.4,2043.74L498.5,2045.42L501.64,2049.04L507.02,2057.41L511.43,2062.54L517.07,2065.43L551.05,2069.31L555.88,2075.86L554.83,2090.37z",
  Plateaux: "M726.59,1152.51L575.78,1150.63L575.9,1153.18L575.65,1154.98L573.87,1158.62L573.42,1160.64L573.17,1178.54L573.42,1181.05L573.99,1183.27L576.73,1189L577.24,1191.28L577.62,1196.46L578.07,1198.85L579.34,1203.15L579.66,1205.4L578.83,1212.36L579.21,1214.51L579.91,1216.5L580.93,1218.21L582.33,1219.72L585.34,1222.49L586.36,1224.26L586.99,1226.41L587.31,1228.92L587.31,1237L586.93,1239.5L584.96,1246.2L584.13,1251.05L583.81,1259.06L581.88,1268.32L582.14,1278.42L581.82,1280.87L581.18,1283.05L575.59,1294.56L574.95,1296.46L575.14,1298.45L576.16,1300.03L578.38,1302.61L578.07,1303.86L577.75,1304.47L577.37,1304.89L564.9,1313.63L552.53,1317.36L517.97,1324.43L510.44,1324.84L503.82,1324.2L497.78,1322.73L493.58,1320.83L490.25,1319.71L472.88,1316.17L468.3,1314.53L462.36,1314.49L422.96,1319.58L417.08,1319.51L415.05,1318.61L413.07,1318.16L411.04,1318.77L406.84,1324.91L405.38,1326.14L403.72,1327.14L399.46,1328.32L366.65,1332.69L362.9,1334.17L356.47,1338.29L353.27,1340.83L350.98,1343.08L344.62,1345.77L324.05,1347.67L315.69,1349.15L315.99,1351.15L315.65,1375.96L319.38,1399.63L318.49,1421.29L319.64,1429.38L307.76,1427.37L302.5,1435.8L301.23,1448.64L301.35,1459.9L299.02,1465.46L293.47,1468.33L286.89,1470.12L281.5,1472.54L277.35,1476.61L274.8,1481.04L273.32,1486.13L271.75,1510.17L273.79,1530.56L280.4,1548.78L293.34,1560.26L300.8,1561.29L308.95,1559.81L324.05,1554.21L326.76,1557.82L333.34,1584.96L332.83,1593.92L327.35,1609.1L323.54,1628.29L313.65,1653.09L312.26,1669.29L314.08,1687.9L313.78,1705.9L305.94,1720.13L300.63,1723.08L283.33,1727.61L277.31,1728.05L271.33,1729.91L276.03,1736.24L287.7,1745.3L292.53,1754.03L291.56,1761L282.9,1775.5L280.15,1784.19L281.46,1788.15L285.41,1790.51L290.41,1794.37L302.29,1816.55L305,1820.18L312.04,1821.68L319.21,1825.64L325.19,1831.33L328.67,1838L329.09,1844.71L325.53,1865.57L327.82,1874.2L333.21,1879.15L338.98,1883.41L342.58,1889.97L346.44,1890.35L357.89,1889.99L361.63,1890.76L366.88,1895.92L366.63,1899.77L363.75,1903.64L361.16,1908.9L360.99,1911.41L365.82,1910.69L382.26,1908.29L389.07,1905.71L403.4,1896.75L404.93,1895.37L407.54,1892.06L411.74,1885.18L415.62,1880.4L427.67,1869.27L430.53,1865.88L432.56,1862.96L434.35,1858.9L437.02,1849.73L438.67,1833.75L437.84,1814.07L438.54,1809.13L440.07,1804.2L441.66,1801.43L443.57,1799.51L447.41,1797.43L451.48,1795.79L459.31,1794L526.3,1797.81L528.21,1798.32L529.04,1799.48L528.14,1802.4L528.78,1803.81L530.5,1804.71L537.65,1805.67L539.55,1806.57L540.83,1808.01L541.84,1809.74L543.18,1811.28L544.9,1812.43L546.93,1813.33L549.03,1814.01L551.58,1815.29L552.53,1816.06L553.11,1816.8L557.94,1825.16L559.34,1826.61L561.02,1827.73L574.06,1832.22L577.62,1833.82L600.67,1810.92L629.13,1789.79L637.17,1786.81L646.4,1784.76L651.3,1784.31L655.2,1784.57L664.36,1787.55L669.45,1788.51L674.41,1788.7L676.85,1788.35L683.85,1785.85L691.29,1781.94L693.9,1779.63L696.38,1776.42L704.8,1762.89L708.36,1759.78L710.25,1758.88L710.29,1758.86L709.64,1758.37L705.01,1751.51L697.04,1722.14L728.04,1722.35L735.51,1720.13L735.21,1659.39L734.96,1599.35L734.7,1537.57L734.52,1496.89L734.35,1461.25L734.32,1453.97L733.98,1371.87L733.73,1306.29L734.75,1240.25L735.47,1192.74L731.1,1157.16L729.02,1153.33L726.6,1152.52L726.59,1152.51z"
};

// src/hooks/mouseTrack.ts
import { useState, useEffect } from "react";
var useMousePosition = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const updateMousePosition = (event) => {
    setPosition({ x: event.clientX, y: event.clientY });
  };
  useEffect(() => {
    window.addEventListener("mousemove", updateMousePosition);
    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
    };
  }, []);
  return position;
};
var mouseTrack_default = useMousePosition;

// src/Togo.tsx
import { useId } from "react";
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
var Togo = ({
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
    return /* @__PURE__ */ React.createElement(
      TogoSingle,
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
    return /* @__PURE__ */ React.createElement(
      TogoMultiple,
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
var TogoSingle = ({
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
  const instanceId = useId().replace(/:/g, "");
  const { x, y } = mouseTrack_default();
  const [stateHovered, setStateHovered] = useState2(null);
  const [selectedState, setSelectedState] = useState2(null);
  const [viewBox, setViewBox] = useState2("0 0 100 100");
  const strokeProps = useMemo(() => getStrokeProperties(borderStyle), [borderStyle]);
  useEffect2(() => {
    const svg = document.getElementById(`svg2-${instanceId}`);
    if (svg) {
      const bbox = svg.getBBox();
      setViewBox(`${bbox.x} ${bbox.y} ${bbox.width} ${bbox.height}`);
    }
  }, [instanceId]);
  const mapStyle = useMemo(
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
  useEffect2(() => {
    stateCode.forEach((state) => {
      const path = document.getElementById(`${state}-${instanceId}`);
      if (path) {
        path.style.fill = cityColors[state] || mapColor;
      }
    });
  }, [cityColors, mapColor, instanceId]);
  useEffect2(() => {
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
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("div", { className: "map", style: mapStyle }, /* @__PURE__ */ React.createElement("svg", { version: "1.1", id: `svg2-${instanceId}`, x: "0px", y: "0px", viewBox }, stateCode?.map((code, index) => /* @__PURE__ */ React.createElement(
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
  )))), hints && stateHovered && /* @__PURE__ */ React.createElement("div", { style: hintStyle }, stateHovered));
};
var TogoMultiple = ({
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
  const instanceId = useId().replace(/:/g, "");
  const { x, y } = mouseTrack_default();
  const [selectedStates, setSelectedStates] = useState2([]);
  const [stateHovered, setStateHovered] = useState2(null);
  const [viewBox, setViewBox] = useState2("0 0 100 100");
  const strokeProps = useMemo(() => getStrokeProperties(borderStyle), [borderStyle]);
  useEffect2(() => {
    const svg = document.getElementById(`svg2-${instanceId}`);
    if (svg) {
      const bbox = svg.getBBox();
      setViewBox(`${bbox.x} ${bbox.y} ${bbox.width} ${bbox.height}`);
    }
  }, [instanceId]);
  const mapStyle = useMemo(
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
  useEffect2(() => {
    stateCode.forEach((state) => {
      const path = document.getElementById(`${state}-${instanceId}`);
      if (path) {
        path.style.fill = cityColors[state] || mapColor;
      }
    });
  }, [cityColors, mapColor, instanceId]);
  useEffect2(() => {
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
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("div", { className: "map", style: mapStyle }, /* @__PURE__ */ React.createElement("svg", { version: "1.1", id: `svg2-${instanceId}`, x: "0px", y: "0px", viewBox }, stateCode?.map((code, index) => /* @__PURE__ */ React.createElement(
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
  )))), hints && stateHovered && /* @__PURE__ */ React.createElement("div", { style: hintStyle }, stateHovered));
};
var Togo_default = Togo;

// src/index.ts
var src_default = Togo_default;
export {
  src_default as default
};
