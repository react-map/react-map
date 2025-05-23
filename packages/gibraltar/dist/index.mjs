// src/Gibraltar.tsx
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
var stateCode = ["Gibraltar"];
var drawPath = {
  Gibraltar: "M582.72,0L536.85,1.26L531.01,1.42L506.46,2.09L505.49,2.15L502.3,2.21L498.27,2.37L495.45,2.47L453.36,4.14L437.98,4.71L416.73,5.61L400.33,7.96L400.58,8.81L397.57,8.8L391.42,10.21L391.49,10.65L398.3,9.64L400.36,19.76L401.47,21.05L403.12,22.24L403.17,23.94L403.72,25.88L407.04,31.32L412.83,40.83L414.63,43.77L415.13,46.21L404.39,79.88L403.85,82.66L403.45,85.82L390.29,86.56L389.65,73.04L323.77,75.89L324.51,90.89L381.82,88.13L382.56,98.16L415.17,95.07L419.34,94.8L421.4,99.98L421.9,104.8L422.08,107.7L421.63,107.95L421.58,110.2L418.58,112.88L361.69,115.52L359.09,113.54L355.34,107.69L351.97,107.12L349.33,108.19L347.73,109.92L346.85,112.33L346.12,116.09L325.08,117.29L317.06,114.52L307.98,114.69L299.88,118.56L266.79,119.06L266.69,114.9L264.51,115.01L264.72,119.16L259.15,119.55L250.44,119.03L246.39,118.61L244.08,117.35L242.46,114.19L242.55,107.65L245.38,106.01L247.3,104.47L248.82,101.99L249.56,98.95L249.42,96.07L248.22,92.27L244.72,89L240.35,87.47L239.56,63.12L238.48,62.21L237.31,62.3L236.32,63.43L236.48,75.33L236.86,87.64L232.11,90.6L230.78,92.11L229.22,94.89L228.92,98.87L229.66,102.61L230.73,105.23L232.83,107.78L230.61,111.04L226.83,114.54L223.94,116.73L219.96,119.19L215.68,119.76L194.73,120.37L186.73,122.01L182.18,121.97L173.03,121.6L171.58,122.6L170.38,124.86L169.63,129.27L169.87,142.83L170.17,167.52L172.07,170.17L174.55,172L178.28,172.27L180.92,170.74L266.89,167.26L267.1,171.66L268.96,171.6L268.74,167.21L306.52,166.14L310.4,168.32L314.52,169.53L317.92,168.32L322.53,164.92L359.06,163.19L361.25,165.15L364.01,189.41L363.3,189.35L368.6,243.24L366.32,256.12L358.64,250.8L351.8,257.88L349.03,261.84L343.03,270.97L337.37,279.54L331.68,287.55L329.66,290.13L288.3,246.54L261.2,218.14L222.12,208.39L222.3,207.5L215.1,205.75L215.63,203.73L213.86,203.34L211.99,204.35L211.62,205.83L210.08,205.34L210.22,204.45L210.02,203.61L209.56,202.93L208.06,202.11L171.14,203.41L156.53,204.23L151.47,201.88L148.57,200.87L146.09,200.41L139.76,200.35L68.26,202.74L62.81,200.92L49.24,200.7L41.74,200.54L35.27,200.04L28.1,199.53L23.08,200.59L19.45,202.57L17.24,205.06L15.31,208.83L14.48,213.47L14.71,227.37L1.94,227.33L1.08,227.57L0.46,228.14L0.25,228.94L0.26,381.54L0.59,382.82L1.77,384.07L2.93,384.41L9.57,384.41L10.7,383.91L11.44,383.2L12.12,382.13L12.03,241L13.02,240.07L29.88,240.32L31,241.07L30.94,270.78L31.62,271.86L38.1,271.87L38.84,270.55L38.7,241.21L39.62,240.3L56.83,240.16L57.69,241.13L57.85,271.05L58.7,271.82L84.66,271.91L84.44,348.88L88.61,348.74L88.57,272.09L91.37,271.91L92.34,270.84L92.36,240.58L93.36,239.97L110.36,239.82L111.36,241.05L110.99,269.92L112.21,271.92L117.78,272.1L119.23,270.31L119.06,241.33L120.07,239.93L136.99,239.9L138.19,240.7L138.17,277.23L138.66,278.69L141.57,279.9L144.48,279.42L145.69,278.45L148.29,270.04L154.39,271.83L157.78,274.74L162.25,278.63L163.81,281.62L163.04,286.77L161.28,289.8L157.28,294.41L152.06,297.8L147.36,298.81L138.82,298.39L135.38,297.23L132.71,296.67L129.15,296.81L125.87,297.31L122.74,299.83L121.11,302.52L120.57,306.58L119.91,368.64L120,398.28L118.23,407.02L118.38,413.66L119.97,416.47L122.54,418.6L128.59,421.16L139.36,424.98L145.78,428.07L153.35,432.96L168.34,444.39L174.24,450.06L179.22,455.58L183.31,461.23L191.06,474.09L200.57,490.89L205.33,492.67L215.45,489.9L216.76,493.69L217.46,495.71L218.65,499.16L216.76,501.28L208.77,503.61L207.21,505.52L215.88,527.81L217.32,530.18L222.18,535.79L224.53,536.87L227.13,537.43L227.82,538.33L233.88,554.99L224.98,558.56L213.99,562.65L203.32,532.61L199.98,533.58L217.08,584.64L212.65,586.31L234.28,647.3L239.29,645.62L239.42,645.95L239.85,646.5L240.45,646.67L241.24,646.61L242.16,646.27L252.06,642.74L253.21,645.63L253.6,645.95L256.08,645.06L258.46,640.06L257.98,638.42L240.59,590.31L237.11,591.55L235.67,587.69L236.64,587.29L235.78,584.82L234.46,581.32L259.86,571.97L260.8,571.64L282.31,631.68L282.98,631.45L283.61,633.26L291.1,630.7L295.68,644.22L294.77,644.44L294.04,644.73L293.51,645.28L293.22,645.71L293.11,646.36L293.29,647.04L260.32,658.29L263.65,668.69L299.78,656.51L305.86,675.04L306.21,676.08L317.4,708.6L317.67,709.41L322.85,725.3L323.3,726.59L286.58,739.5L264.1,747.72L260.14,736.51L272.41,731.82L249.99,673.74L254.51,668.03L252.52,666.38L252.32,665.35L250.98,664.54L247.14,664.83L245.64,664.48L243.78,658.28L242.73,657.45L241.74,657.4L240.81,658.17L240.64,659.77L240.2,663.68L238.59,665.78L233.04,670.34L231.03,674.88L231.54,681.71L237.27,694.71L242.76,703.58L245.14,713.92L252.06,735.2L253.36,737.3L255.33,737.77L256.35,737.66L257.22,737.45L261.03,747.67L261.71,747.42L262.01,748.26L271.5,775.18L271.94,776.35L272.72,777L273.63,777.1L276.14,776.09L279.46,774.88L281.84,774L282.49,773.75L282.93,773.14L282.99,772.49L277.52,756.98L277.32,756.04L277.54,755.38L278.22,754.96L306.58,744.94L308.79,751.42L309,752.03L310.2,755.23L312.12,754.6L313,757.27L309.2,758.55L308.79,759.58L308.94,760.8L313.43,772.74L314.48,773.19L315.11,773.15L321.6,791.39L322.78,791.97L323.89,791.74L317.76,772.69L321.5,771.37L332.39,767.43L340.81,792.32L323.54,797.93L285.5,811.65L285.06,813.41L321.56,917.45L335.6,957.5L328.4,963.43L328.02,964.61L328.3,965.51L321.06,970.56L319.67,970.41L308.58,978.77L308.46,980.04L309.98,982.07L302.63,987.65L300.84,985.28L299.99,985.16L287.97,994.61L287.58,995.33L289.86,998.38L280.2,1005.47L278.3,1002.98L277.49,1002.62L264.83,1012.16L264.71,1012L57.42,741L56.36,741.64L56.51,739.43L55.23,737.14L53.61,735.87L52.05,735.32L50.09,735.63L47.87,736.4L46.87,737.61L45.84,739.54L45.27,741.84L47.33,746.85L228.93,984.74L233.75,993.28L234.62,997.72L237.89,1001.52L240.57,1004.45L245.69,1007.38L249.82,1011.22L251.86,1011.88L253.9,1014.33L257.16,1018.44L284.38,1053.57L291.3,1059.56L295.13,1064.96L302.15,1073.74L302.29,1078.62L309.79,1085.93L314.58,1090.1L316.35,1095.65L317.88,1100.94L322.34,1105.37L322.25,1107.43L325.92,1113.02L325.35,1119.77L327.05,1123.16L324.86,1125.61L324.69,1127.59L326.54,1133.8L331.19,1137.16L330.95,1139.23L332.42,1141.02L332.18,1143.88L335.57,1147.35L339.55,1144.85L340.81,1143.81L342.78,1143.45L344.46,1145.04L344.5,1147.01L349.2,1144.3L355.75,1139.42L358.93,1135.99L364.7,1135.75L368.6,1136.05L377.01,1142.3L381.05,1142.46L387.51,1167.09L385.09,1167.82L383.63,1169.27L378.3,1183.87L362.2,1187.33L346.15,1174.77L344.89,1172.26L344.25,1171.78L343.18,1171.81L342.38,1172.16L341.82,1173.41L341.04,1174.88L341.4,1176.79L341.71,1177.47L360.37,1191.74L379.65,1206.22L376.15,1210.95L377.65,1217.47L376.65,1221.32L380.92,1226.3L387.28,1227.85L398.12,1234.6L402.6,1232.27L409.99,1238.67L415.39,1249.07L411.43,1251.15L412.68,1253.91L417.59,1251.17L420.01,1256.05L419.68,1261.48L419.05,1264.54L418.38,1267.17L415.94,1269.45L413.59,1266.77L411.08,1267.03L412.88,1272.86L418.86,1289.2L419.21,1290.15L422.82,1300.02L428.89,1303.17L434.71,1317.23L437,1335.76L436.88,1350.23L441.46,1364.26L442.62,1372.07L444.85,1376.91L447.41,1379.58L453.38,1383.43L455.67,1389.01L459.68,1390.7L462.5,1394.74L466.99,1404.59L468.07,1411.95L468.55,1415.28L465.09,1420.68L462.24,1426.67L452.58,1436.01L445.37,1449.63L444.21,1460.96L443.93,1468.23L442.62,1470.96L441.59,1479.36L438.75,1486.41L439.61,1492.83L438.68,1507.15L440.76,1523.77L442.97,1526.99L444.35,1535.26L442.71,1538.82L445.13,1543.53L450.61,1545.8L457.11,1551.81L455.76,1555.41L460.55,1561.88L467.29,1569.44L469.79,1571.05L471.03,1572.49L471.23,1575.27L473.12,1575.31L474.3,1574.43L475.14,1575.33L475.2,1576.75L476.84,1579.46L481.47,1581.8L483.2,1585.66L492.48,1589.3L497.53,1591.91L504.29,1596.84L506.36,1596.69L508.55,1595.62L512.83,1599.98L521.54,1605.69L525.88,1604.72L533.98,1608.28L536.44,1610.07L538.45,1609.72L541.65,1611.29L546.72,1610.64L550.79,1610.37L555.4,1615.19L559.77,1614.06L561.6,1615.52L565.52,1614.8L566.71,1614.01L570.33,1613.88L571.97,1612.79L571.42,1609.59L572.95,1609.04L574.18,1605.29L574.51,1602.48L579.12,1598.92L585.03,1595.84L590.46,1595.1L594.14,1595.16L597.41,1594.11L604.37,1594.68L605.22,1593.83L605.01,1592.36L603.45,1589.07L603.33,1586.76L604.4,1581.72L603.8,1580.01L601.99,1576.95L601.53,1575.1L599.59,1573.18L598.42,1571.14L598.27,1568.84L599.17,1567.27L598.86,1565.84L598.98,1564.01L596.59,1562.39L596.79,1561.86L596.6,1558.94L595.93,1557.26L596.17,1554.37L595.06,1551.11L595.08,1546.96L595.03,1545.15L596.95,1541.16L598.11,1540.56L598.31,1539.46L598.89,1538.82L598.31,1537.57L598.71,1534.06L599.24,1531.97L600.28,1529.74L603.33,1526.63L604.73,1526.05L605.97,1521.3L606.21,1516.45L608.39,1513.3L607.66,1507.72L611.19,1502.79L618.81,1492.3L620.51,1486.48L622.69,1484.06L623.17,1481.39L624.14,1478.48L626.08,1477.03L628.99,1475.57L628.99,1473.63L630.69,1472.66L632.87,1471.69L633.36,1473.39L635.54,1473.39L637.24,1471.2L637.9,1467.57L638.62,1461.44L639.12,1458.61L638.38,1456.9L638.2,1455.24L638.19,1453.11L638.93,1450.6L638.93,1444.29L640.02,1442.14L641.17,1438.58L641.12,1434.35L641.9,1432.62L641.58,1428.66L639.63,1425.46L638.65,1422.84L638.16,1411.29L639.96,1408.67L642.09,1405.44L643.52,1402.02L641.89,1398.64L642.2,1394.17L642.42,1391.45L642.45,1389.05L644.26,1386.37L650.36,1367.95L653.55,1360.02L654.1,1356.4L659.07,1346.13L664.16,1346.61L667.99,1342.54L666.36,1338.19L671.69,1334.93L679.68,1332.23L678.77,1329.05L684.81,1327L687.76,1322.65L689,1318.26L689.42,1311.76L687.76,1305.71L684.63,1300.39L682.01,1302.33L679.65,1299.68L677.07,1296.35L678.57,1293.89L670.45,1286.04L670.34,1281.69L672.04,1277.75L674.36,1277.05L675.68,1273.16L671.19,1264.15L669.38,1258.25L666.69,1248.71L666.24,1244.94L666.32,1242.06L666.8,1240.54L668.06,1239.52L668.62,1238.89L668.92,1237.61L668.75,1235.61L669.1,1233.62L672.79,1226.5L676.8,1219.89L680.98,1217.61L681.01,1213.32L678.9,1213.03L679.63,1209.57L684.44,1200.38L681.66,1197.32L682.32,1190.39L685.66,1184.48L685.47,1178.21L688.48,1174.06L685.61,1170.9L686.37,1164.76L692.43,1156.57L692.66,1152.71L694.93,1147.56L699.1,1145.06L703.09,1140.25L705.86,1133.46L710.49,1125.24L717.17,1109.92L718.09,1105.5L723.34,1098.2L727.86,1089.16L729.4,1081.96L727.14,1074.56L720.99,1068.98L717.8,1059.16L719.1,1053.69L717.2,1049.53L716.79,1048.72L716.61,1047.75L715.7,1043.28L712.6,1038.42L726.27,1030.73L726.26,1027.87L729.21,1021L728.84,1018.66L731.79,1014.86L734,1014L735.05,1009.32L730.31,1002.96L732.4,998.91L729.94,992.53L730.31,989.7L727.75,985.38L717.09,981.01L712.68,978.34L711.9,968.82L695.8,949.46L694.95,913.53L694.97,905.47L698.47,902.47L695.36,899.36L692.86,899.21L693.31,896.56L692.33,894.36L690.81,893.76L694.22,884.74L695.81,875.11L695.51,870.95L697.56,855.64L699.75,848.75L702.02,839.88L702.18,828.89L704.91,806.77L709.07,794.42L713.47,788.28L715.46,767L721.86,752.5L714.34,745.4L712.55,740.9L712.92,735.75L716.05,727.18L722.77,724.62L723.08,719.66L720.9,717.72L721.87,714.09L723.57,713.85L724.29,705.11L720.66,701.72L715.56,697.6L716.53,694.2L714.28,686.79L719.27,671.98L722.02,671.38L724.64,666.69L721.48,664.04L715.27,662.9L712.1,654.29L717.68,645.53L720.7,636.96L720.7,627.8L720.59,612.1L717.1,609.97L717.75,607.55L713.8,604.39L713.7,596.8L715.35,593.37L714.96,592.5L714.26,592.05L713.12,592.11L710.76,594.04L709.56,591.06L710.02,588.02L712.46,583.74L714.34,578.73L714.48,571.51L717.93,554.3L720.23,545.79L723.04,538.01L727.59,533.87L729.94,533.32L732.1,534.7L733.23,536.3L734.74,536.72L736.11,535.94L736.42,534.24L740.02,528.26L741.97,525.21L767.13,529.33L769.78,529.48L772.51,528.88L774.25,527.97L776.22,525.39L777.43,521.45L799.75,351.86L798.78,346.47L795.96,342.85L791.86,340.75L778.39,338.01L772.08,334.93L763.68,329.07L754.41,323.28L745.56,326.75L742.38,317.51L741.92,308.94L742,292.12L743.29,284.12L745.17,276.86L744.27,262.42L744.69,256.61L745.78,251.14L749.94,245.32L759.29,246.48L762.81,248.32L764.17,248.24L764.79,247.51L765.15,246.5L764.48,245.19L760.13,242.45L749.12,240.89L747.6,235.28L747.6,226.11L751.39,212.93L758.7,192.57L754.13,174.78L753.46,168.58L753.3,162.98L756.33,155.59L759.86,151.29L764.84,150.98L775.45,152.5L776.71,149.68L770.2,147.51L762.39,146.77L758.25,136.17L758.11,127.15L760.18,117.34L760.63,112.29L762.29,104.91L766.62,96.03L765.38,91.18L765.96,85.76L767.8,78.76L769.38,77.47L770.15,76.84L770.15,76.84L765.66,76.08L748.62,69.2L720.35,57.65L698.84,48.97L673.23,39.17L642.1,25.45L621.52,16.81L587.22,2.02L585.96,1.47L582.72,0z"
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

// src/Gibraltar.tsx
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
var Gibraltar = ({
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
      GibraltarSingle,
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
      GibraltarMultiple,
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
var GibraltarSingle = ({
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
var GibraltarMultiple = ({
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
var Gibraltar_default = Gibraltar;

// src/index.ts
var src_default = Gibraltar_default;
export {
  src_default as default
};
