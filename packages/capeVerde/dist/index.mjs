// src/Capeverde.tsx
import React, { useEffect as useEffect2 } from "react";

// src/constants.ts
var constants = {
  WIDTH: "500px",
  MAPCOLOR: "#ffffff",
  STROKE_COLOR: "#000000",
  STROKE_WIDTH: "0.5",
  HOVERCOLOR: "#303030",
  SELECTED_COLOR: "#ff0000"
};
var viewBox = "0 0 1800 900";
var stateCode = [
  "Brava",
  "Boa Vista",
  "Santa Catarina",
  "Santa Catarina do Fogo",
  "Santa Cruz",
  "Maio",
  "Mosteiros",
  "Paul",
  "Porto Novo",
  "Praia",
  "Ribeira Brava",
  "Ribeira Grande",
  "Ribeira Grande de Santiago",
  "S\xE3o Domingos",
  "S\xE3o Filipe",
  "Sal",
  "S\xE3o Miguel",
  "S\xE3o Louren\xE7o dos \xD3rg\xE3os",
  "S\xE3o Salvador do Mundo",
  "S\xE3o Vicente",
  "Tarrafal",
  "Tarrafal de S\xE3o Nicolau"
];
var drawPath = {
  Brava: "M397.42,759.51l0.71,1l-1.06,0.82l0.27,0.46l1.06,-0.46l0.44,0.73l1.42,0.18l0.44,0.55l-0.97,0.46l-0.27,0.82l-0.97,-0.18l-0.18,0.73l0.89,0.27l-0.35,0.64l0.18,2.73l0.89,0.09l0.18,1.18l0.71,0.91l-0.09,0.82l1.33,1l0.44,1.27l-0.09,1.37l-0.88,1.64l0.62,0.73l0.35,0.36l0.8,0.64l-0.35,0.82h-1.06l-0.27,1l0.53,1v0.55l-0.44,0.82l-1.42,0.46l0.44,1l-0.71,2l0.27,0.46l-1.24,0.18l-0.62,1l-0.62,-0.27l-1.24,0.82l-0.44,0.55l-0.44,0.36h-0.53l-0.44,0.82l-0.88,-0.18l-0.71,0.73l-0.35,0.55l-0.97,0.09v0.73l-0.62,0.27l-1.24,-1l0.62,-0.64l-0.18,-1.27l-2.04,0.36l-0.27,0.64l-0.53,-0.55l-0.62,0.64l-0.09,-0.91l-1.24,0.09l-0.09,-0.73l-0.62,-0.09l-1.24,-0.46l-0.09,-1.18l-1.42,-1.18l-0.44,-1.64l-0.71,-0.46l-0.97,-1.82l-0.8,0.18l-0.62,1.37l-2.04,-1.73v-2.28l0.71,0.18l0.35,-2.82l-1.33,-1l0.18,-0.82l0.88,-0.27l-1.24,-1.18l0.53,-0.73l-0.27,-1.27l0.44,-0.18l-0.44,-0.82l0.8,0.27l0.71,-0.73l0.44,0.82l0.97,-0.55l1.06,0.55l1.24,-0.82l0.18,-1.55l-0.97,-0.09l-0.35,-0.73l0.35,-1l-0.27,-1.09l0.8,0.36l0.27,-0.91l1.33,-1.09l-0.09,-1.55l0.44,0.09l-0.09,0.64l0.53,0.09v0.36l0.88,-0.18l0.27,0.55l0.8,-1l0.71,0.64l-0.09,0.55l1.06,0.36l0.53,-0.55l-0.18,-0.36l1.24,-1l1.68,-0.27l0.44,-0.45l2.66,-0.09l0.62,-0.46l-0.09,-1.46l1.86,-0.09l0.62,1L397.42,759.51zM405.39,736.02l0.53,1.55l-1.06,-0.27l-0.71,0.64l-0.53,-0.27l0.18,-1.09l1.37,0.3l-0.22,-0.48L405.39,736.02zM408.22,735.93l0.53,0.46v0.91l-0.97,-0.27v-1.09H408.22zM397.25,734.11l1.15,0.82l0.09,1l-0.53,1h-0.71l0.27,0.73l-0.71,0.73l0.44,0.36l-1.42,1.28l-2.04,0.36l-1.33,-1.37l0.09,-1.18l0.8,0.55l-0.09,-1.09l0.89,-0.73l-0.35,-0.64l0.88,-0.09l-0.09,-0.55l1.15,-1.09l0.53,0.18v0.91h0.35l0.18,-1L397.25,734.11zM412.65,732.01l1.15,1.91l0.71,0.09l-0.18,1.64l-1.15,-0.37l0.44,0.82l-0.89,0.46l-0.27,0.73l-0.35,-0.27l-0.35,0.45l-0.3,-0.18l-0.14,1.1l-0.62,0.73l-1.06,-0.73v-0.46l-0.97,0.55l0.89,-1.55l0.88,0.09l0.18,-0.64l1.5,-0.73l0.09,-1.09l0.35,-0.09l-0.35,-0.27l0.35,-1.37l-0.44,-0.64L412.65,732.01z",
  "Boa Vista": "M953.61,340.03l2.13,0.73l0.62,0.83h0.71l0.88,1.28l0.09,1.28l-0.62,0.37l-0.8,-0.73l-1.15,-0.18l-0.18,-1.19l-1.59,-1.01L953.61,340.03zM1001.05,322.99v1.1l0.53,-0.18l0.53,-1.19l0.44,0.37l-0.35,0.92l0.53,-0.18l0.02,-0.41l0.59,0.23l-0.71,1.19l0.8,0.92l2.83,-0.18l0.35,-0.37l0.53,0.64l2.57,0.64l4.25,2.38l2.48,0.27l0.8,-0.37l0.71,0.82l2.21,-0.18l0.62,1.37l1.06,0.37l1.42,-0.73l1.5,0.46l0.53,-0.37l0.27,0.37l-0.62,0.55l0.53,0.27l0.44,-0.37v0.83h0.71l0.27,-0.73l1.15,0.37v0.83h-0.62l-1.24,1.1l0.44,1.1l1.06,0.18l-0.62,2.11l-0.44,0.27l1.06,2.75l6.02,6.05l2.74,3.39l0.62,0.18l0.18,0.64l0.8,-0.27l-0.53,1.1l0.8,2.47l-0.27,1.1l1.5,1.65l-1.95,-0.64l-0.97,1.28l-0.27,1.74l0.97,2.02l0.09,1.65l1.24,1.01l-0.27,2.29l0.71,0.46v1.74l0.8,1.47l-0.18,0.46l0.71,0.09v0.64l-0.97,-0.18l-0.27,0.37v1.46l-1.15,0.82l-0.35,1.92l-1.33,1.28l-0.18,1.19l-0.62,0.27l-0.53,4.3l-2.13,2.75h-0.88l-0.89,0.64l-0.35,-0.73l-0.62,-0.18l-1.95,2.11l-2.74,0.73l-1.5,1.74l0.27,0.55l-0.71,0.82l-0.8,-0.18l-1.24,1.01l-1.24,-0.46l-0.71,0.82l-1.95,0.55l-5.4,3.39h-0.71l-0.53,-0.64l-0.71,0.92l0.35,0.55l-0.53,0.18l-0.88,2.01l-2.83,0.92l-2.39,0.18l-0.71,0.55v0.64l-3.01,1.92l-2.12,2.56l-0.09,0.92h-1.42l-0.97,0.55l-1.59,-1.1l-0.97,0.37l-2.3,-0.46l-10.8,0.09l-7.53,1.37l-1.24,-1.28l-0.8,-0.18l-0.35,-1.65l-1.33,-1.19l-0.18,-1.92l-2.3,-1.83l-2.66,-1.1l-0.44,0.82h-0.44l-5.13,-1.28l-7.79,-3.57l-2.13,-2.75l0.44,-2.56l-1.15,-1.1l-0.97,1.1l0.09,-1.65l-1.59,-2.29l1.59,-2.75v-1.46l0.53,-0.92l-0.44,-2.11l0.27,-1.28l1.33,-1.1l0.27,-0.82l-1.33,-3.3l3.72,-4.21l1.5,-0.92l1.24,0.37l1.5,-0.37l7.26,-6.32l0.27,-1.1l1.24,-0.92l0.09,-1.92l-0.8,-1.83l0.8,-1.37l0.27,-1.65l1.77,-0.92L965.2,349l0.27,-0.82l-1.59,0.64V348l-0.53,-0.18l-0.18,-1.56l-0.62,-0.46l-0.44,-1.74l-1.06,-0.55l-0.44,-2.38l-1.77,-0.64l-0.09,-0.92l0.71,-0.27l-0.27,-0.82l0.71,-1.19v-0.37l-0.44,0.18l-0.44,-0.46l0.71,-0.64l0.89,0.46l-0.44,-2.56l0.62,-1.01l1.33,-0.73v-1.19l-2.92,-1.46l0.8,-2.02l-0.18,-1.56l-0.88,-0.37l0.35,-2.11l1.95,-1.19h1.77l-0.53,2.11l1.59,0.46l2.39,1.83l1.15,-0.27l0.44,0.46l-0.27,0.92l2.21,1.83l5.4,1.74l5.49,0.37l2.39,-0.46l3.54,0.27l8.32,-1.74l2.04,-1.1l2.04,-2.2l1.06,0.18l0.53,-0.46l-0.18,-0.64l-1.24,0.27l-0.71,-1.28l0.35,-0.37l0.97,0.18l-0.44,-0.55l0.18,-1.19l1.5,-0.46L1001.05,322.99z",
  "Santa Catarina": "M733.13,688.98L729.67,692.01L725.2,693.6L725.03,695.9L726.06,697.32L726.06,698.74L724.51,701.04L725.2,704.05L725.07,707.35L725.07,707.35L724.48,707.35L724.48,707.35L722.57,708.66L721.51,714.55L715.99,714.55L714.72,715.21L713.45,716.96L713.66,719.14L711.96,722.19L711.75,723.5L711.75,724.59L713.45,726.77L712.81,727.65L710.91,728.08L706.72,733.65L706.72,733.65L706.1,733.29L704.15,733.47L703.35,732.1L702.03,731.74L701.58,730.37L702.2,729.37L702.56,729.74L704.06,729.46L703.8,727.92L704.68,728.1L704.59,727.64L705.66,727L705.83,725.91L705.04,725.64L704.77,724.82L705.92,724.18L705.83,722.82L705.3,722.91L704.77,722.09L704.24,722.09L704.33,721.45L702.82,719.99L702.2,719.9L701.5,718.53L699.72,718.26L698.75,717.44L697.87,715.62L697.16,715.16L696.27,715.53L695.83,716.8L694.59,716.9L693.35,714.62L693.26,712.89L692.2,712.16L691.49,710.43L690.25,710.15L689.81,709.24L690.08,707.97L688.22,707.24L687.24,706.05L686.62,706.05L686.36,706.69L685.21,706.51L685.56,705.23L684.5,703.69L684.85,702.87L686,703.14L686.98,702.68L686.8,701.04L685.56,698.95L685.92,697.95L685.56,697.04L688.13,695.67L687.77,694.67L688.22,694.12L687.86,691.02L688.39,689.2L688.93,689.2L688.57,687.83L689.28,686.92L689.19,686.47L688.04,686.37L688.22,685.28L689.81,684.83L691.4,682.46L691.32,681.64L690.08,680.91L690.08,679.9L690.61,679.72L691.14,677.9L689.28,677.35L689.37,674.53L688.93,673.8L690.08,672.34L687.95,668.78L689.19,668.88L690.52,667.96L689.99,666.23L690.25,664.23L692.11,661.89L692.11,661.89L696.06,661.95L698.39,660.86L700.09,661.73L701.58,663.26L702.85,663.48L703.48,663.26L704.54,659.11L706.45,659.77L707.09,661.29L708.36,662.6L712.6,662.6L712.6,662.6L713.24,668.28L714.3,669.15L718.54,669.15L720.02,669.59L723.84,673.08L725.33,675.71L724.9,677.67L722.57,681.38L722.36,682.47L722.78,683.35L724.69,683.35L728.08,682.47L732.87,676.36L732.87,676.36L735.08,676.8L735.5,678.54L734.44,681.82L734.44,683.13L735.71,683.56L735.71,684.87L735.29,685.75L733.59,685.97L732.75,686.62L732.75,688.58L732.75,688.58z",
  "Santa Catarina do Fogo": "M524.36,749.96L522.27,752.08L518.14,758.84L514.66,761.36L508.72,762.69L504.72,762.96L500.72,762.03L495.95,757.78L494.79,753.67L494.92,749.82L496.85,747.44L502.14,743.19L504.74,740.5L504.74,740.5L506.44,742.12L506.44,742.12L509.28,742.61L514.72,741.63L522.59,741.5L522.59,741.5L523.3,744.85L523.92,745.13z",
  "Santa Cruz": "M755.65,704.95L755.3,701.39L754.1,696.79L752.72,695.9L750.83,695.9L749.97,696.08L747.56,697.85L746.87,697.85L744.81,697.14L744.46,695.73L743.26,695.2L742.57,693.42L741.86,693L741.86,693L742.71,692.51L742.71,692.51L745.04,692.3L745.04,690.55L743.35,689.24L733.38,689.24L733.38,689.24L732.75,688.58L732.75,688.58L732.75,686.62L733.59,685.97L735.29,685.75L735.71,684.87L735.71,683.56L734.44,683.13L734.44,681.82L735.5,678.54L735.08,676.8L732.87,676.36L732.87,676.36L733.17,675.92L736.35,675.92L737.84,675.49L746.66,667.78L746.66,667.78L747.53,668.24L748.15,668.06L748.85,669.33L749.56,668.33L750.45,668.6L750.63,668.88L749.74,669.33L749.83,671.06L751.24,670.88L751.86,671.34L751.51,672.98L750.8,672.98L750.89,673.52L750.45,673.8L751.07,674.44L752.4,674.62L753.1,675.62L754.08,675.99L755.67,675.89L755.58,675.26L756.2,675.35L756.02,677.35L758.06,676.81L759.04,675.71L760.01,675.71L761.34,676.17L762.22,677.08L761.51,678.54L762.31,677.9L763.46,678.17L764.17,677.44L764.52,679.17L765.85,679.36L765.76,680.18L766.2,680.63L765.94,681.73L765.32,681.82L765.05,682.55L765.76,683.28L765.85,684.55L767,684.46L767.53,685.01L769.39,684.73L770.45,685.74L771.96,686.1L773.55,685.92L773.91,686.37L773.73,689.2L775.06,692.12L774.44,693.03L775.32,692.66L776.03,693.57L776.12,694.39L776.83,694.67L776.38,695.85L777,696.49L777,696.49L775.79,698.19L773.46,704.3L771.34,708.01L767.31,711.28L764.77,712.16L762.22,711.94L760.95,709.1L757.34,707.35L756.5,705.83L756.5,705.83z",
  Maio: "M876.33,615.53l0.71,0.64l-0.18,1.19l0.71,0.46l-0.53,1.09l0.89,2.55l1.68,0.46l1.77,-0.18l0.62,-1.55l-0.35,-1.1l1.06,-1.46l0.35,1.46l-0.27,3.01l1.42,1.28h0.53l0.27,0.73l2.57,0.36l3.28,1.46l2.21,-1l1.06,-1.64l0.71,0.91l0.88,-0.91l1.33,0.55l0.18,1.37l0.89,0.09l-0.27,0.55l1.06,0.55l0.88,2.74l0.53,0.27l-0.35,0.46l0.35,1.28l-0.18,0.82l0.71,2.28l0.97,1.18v0.73l-0.27,1.28l-1.15,0.18l-0.27,1.28l-0.97,1l1.24,0.18l0.27,1.73l0.62,0.18l0.27,1.55l0.8,0.73l0.27,3.1l0.8,1.64l-0.18,0.91l0.71,1.55l-0.62,1.19l0.53,0.64l-0.35,1.19l0.88,1.91l-0.62,0.37l0.97,4.56l0.53,0.09l-0.18,1l0.35,0.18l-0.18,0.64l-1.06,0.73v0.91l1.59,3.46l-1.06,0.73l0.97,3.1l-2.21,0.82l-0.18,0.27l-1.15,2.46l-0.71,0.91l-0.35,0.55l-1.33,1.19h-0.71v1.09l-0.8,0.82l-1.06,-0.09l-1.24,1.55l-0.62,0.09l-0.44,-0.46l-0.88,0.91l-1.5,0.09l-0.62,1.09l-1.24,0.64v0.73l-1.06,0.55l-0.97,-0.27l-0.62,0.46h-0.27l-0.44,0l-0.97,2.55l-2.75,0.82l-2.57,-0.27l-2.39,-1l-2.39,-0.09l-1.77,0.46l-1.77,-1.09l-0.97,-0.09v-0.46l-1.5,-0.09l-1.33,-0.73l-0.97,0.18l-0.53,-1.55l-1.77,-1.73v-1l-1.42,-1.19l-0.97,0.09l0.09,-0.82l1.59,0.09l-0.09,-1.46l-1.95,-2.37l-0.44,0.09l-1.77,-2.1l-0.8,-0.27l0.44,2.46l-0.88,-2.37l0.44,-5.01l-0.62,-1.73l0.18,-1.19l0.8,-0.55l0.35,-1.09v-3.74l0.71,-2.73l-0.27,-2.28l0.53,-0.64l1.15,0.09l2.04,-0.82l-0.27,-5.2l0.27,-1l0.18,-1.91l-1.5,-3.19l-3.36,-0.27v-2.83l0.18,-0.37l1.06,0.18l1.06,-1.82l-0.27,-0.55l-1.06,-0.27l0.44,-1.09l2.3,0.64l1.42,-0.82l4.43,-4.29l0.53,-2.74l0.35,-0.64l0.8,-1.09l-1.95,-2.46l1.68,-0.37l0.71,0.73l0.71,-0.18l0.44,0.73h1.06l1.42,-1.09l0.09,-0.73l-1.86,-2.83l0.09,-0.64l1.24,-0.09l0.8,-1.19h0.53l-0.88,-1.1l0.35,-0.46l0.44,0.37L876.33,615.53z",
  Mosteiros: "M487.14,717.08L489.04,716.26L488.51,714.71L489.31,715.07L490.19,714.25L491.52,713.89L493.56,711.98L494.44,711.88L494.88,711.06L496.12,710.79L497.19,709.88L497.9,710.7L499.22,711.16L503.03,710.88L505.51,711.61L505.68,712.07L507.99,712.16L509.84,713.25L510.02,714.89L510.55,715.35L511.88,715.35L512.32,715.8L513.65,715.62L514.89,716.17L515.95,717.81L516.57,719.99L518.52,720.81L519.23,721.72L520.2,725.91L519.58,727.55L521.09,728.1L521.71,729.01L522.33,734.02L523.57,735.29L523.74,736.11L523.12,738.57L523.39,739.94L522.59,740.48L522.59,741.5L522.59,741.5L514.72,741.63L509.28,742.61L506.44,742.12L506.44,742.12L503.13,738.96L503.13,738.96L500.29,735.06L500.05,730.68L496.03,728.74z",
  Paul: "M289.87,10.87L291.37,11.79L291.02,12.62L291.55,13.91L291.37,15.19L292.08,15.75L290.84,17.22L292.17,18.42L292.17,20.07L292.7,20.9L294.74,22.38L294.91,24.03L295.89,24.77L296.6,26.24L297.57,27.07L298.81,27.07L298.99,27.53L298.54,27.99L299.34,28.45L301.11,27.35L301.11,28.91L301.73,28.91L302.35,29.47L303.85,29.47L304.74,30.57L305.71,29.47L307.04,30.29L306.95,31.49L307.57,33.33L307.22,36.09L308.28,36.46L307.57,37.2L308.1,38.85L306.25,40.79L306.16,41.8L304.65,42.63L304.39,43.83L303.94,43.83L303.41,44.83L303.41,44.83L289.73,33.74L286.65,32.79L281.75,32.79L278.67,33.36L277.04,32.61L276.68,31.29L275.07,30.12L275.07,30.12L276.13,29.59L279.03,24.87L284.29,18.65L288.1,16.38L289.19,11.85z",
  "Porto Novo": "M188.51,39.32L188.33,37.38L189.93,37.11L190.72,35.54L192.49,35.54L194.18,34.44L196.04,34.34L197.89,33.06L198.96,32.78L199.75,32.87L201.17,31.31L202.06,31.77L202.59,31.12L205.15,32.23L207.81,31.58L207.9,31.12L210.02,29.74L210.46,28.73L211.35,28.91L213.03,28.36L213.47,27.16L216.04,27.81L217.72,27.72L220.02,26.61L220.82,25.32L221.79,25.32L223.03,24.31L223.03,24.31L231.15,33.17L233.51,34.68L238.59,36L239.31,37.32L239.13,40.53L239.86,41.47L241.31,41.47L248.93,37.13L251.1,36.75L260.53,37.32L264.16,36.57L275.07,30.12L275.07,30.12L276.68,31.29L277.04,32.61L278.67,33.36L281.75,32.79L286.65,32.79L289.73,33.74L303.41,44.83L303.41,44.83L303.32,45.39L302.17,45.76L301.55,47.05L300.76,47.6L300.76,49.9L297.13,51.37L295.8,53.12L292.7,54.59L291.9,55.7L288.27,57.9L286.5,58.27L285.44,59.1L284.65,59.47L283.85,59.38L282.52,61.49L280.13,62.32L277.92,62.32L277.21,62.41L275,62.05L272.69,62.41L271.01,63.52L269.42,63.52L268.27,65.08L267.12,65.72L266.5,67.01L265.44,67.57L265.17,68.39L262.34,69.87L261.54,71.15L261.19,71.89L258.35,74.46L256.67,77.04L255.96,76.95L255.26,78.24L253.84,79.06L253.66,79.8L254.37,80.08L253.93,80.9L248.53,82.38L247.55,84.31L246.76,84.95L246.4,86.61L245.43,87.07L243.57,90.47L240.92,92.68L240.56,93.87L238.88,94.06L239.06,94.79L238.7,95.16L238.08,94.61L235.87,94.88L235.25,95.62L232.68,96.17L232.15,97.73L230.03,98.56L229.94,97.73L228.97,98.01L227.73,96.72L225.69,96.54L223.03,97.18L221.71,96.35L221,96.54L220.64,95.8L219.94,95.9L219.32,94.7L218.43,94.88L217.81,94.42L216.75,94.42L216.4,95.25L215.07,95.16L214.71,96.08L213.92,96.17L214.09,94.33L213.03,93.69L212.68,94.15L211.44,93.96L209.67,94.42L209.14,95.8L205.59,96.45L204.36,97.83L201.17,99.21L198.6,97.27L197.54,95.9L197.45,94.42L197.01,93.87L195.24,93.04L195.86,91.67L194.71,90.75L194.35,89.83L194.71,87.34L195.68,85.96L196.48,85.32L197.19,84.86L197.63,83.48L196.83,82.1L196.83,80.54L195.15,78.51L194.35,77.41L193.82,75.94L194.44,74.46L194.88,71.06L193.82,65.27L192.49,62.87L190.81,61.58L190.19,62.05L188.25,61.31L188.42,60.85L188.07,60.66L184.97,60.11L183.55,58.27L183.11,56.62L181.78,55.51L181.25,53.67L181.34,52.11L181.96,51.74L180.99,50.45L181.07,49.71L182.4,48.89L181.87,47.78L183.11,46.68L183.73,44.47L186.65,42.63L186.21,40.42L188.25,39.96z",
  Praia: "M771.96,756.69l0.44,0.73l-0.18,0.64h-0.35l-0.27,-0.91L771.96,756.69zM786.12,735.84l1.15,2.55l0.53,0.36l1.06,-0.27l0.09,0.91l-0.62,0.18l0.18,0.73l-0.88,1l-2.21,1.37h-0.53l-0.35,-0.91l-0.71,-0.09l0.89,1.37h1.33l0.18,1l-1.06,1.37l0.09,0.55l-0.88,0.55l-0.44,-0.18l-0.44,0.64l-0.35,0.73l0.44,1l-0.27,1.28l-2.3,2.55v2.28l0.44,0.64l-1.06,2.55l-1.06,-0.09l-0.18,-1.64l-2.04,0.27l-0.53,0.64l-0.8,-0.82l-1.42,1l0.18,-0.73l-0.8,-0.55l-0.8,-1.82l-1.68,0.73v0.64l-0.62,0.27l0.44,1.91l-0.53,1.37l0.44,0.82l-0.97,-0.64l-0.09,-0.55l-1.06,-0.27l-0.53,0.55l-0.88,-0.55l-1.15,0.55l-1.68,-0.36l-1.15,0.46l-1.33,-0.55l-0.71,0.18l-1.42,-0.82l-1.16,0.82l0,0l-1.32,-2.78l-1.38,-1.24l-3.44,-5.66l-3.27,-3.89l-0.86,-3.01l-1.38,-2.12l-0.17,-3.01l-0.81,-2.22l0,0h1.14l0,0l1.91,-1.31l5.94,-2.18l6.36,-0.44l3.6,-1.31l4.03,-0.22l7.85,3.05l6.15,1.09l3.09,2.19l0,0L786.12,735.84z",
  "Ribeira Brava": "M502.23,176.49v0.12l0,0l0,0l0,0V176.49zM505.77,173.28l0.53,0.46l2.13,0.18l-0.09,1.38l0.53,0.83l1.42,-0.28l1.77,0.37l1.24,0.46l1.06,0.64l1.68,1.65l0.35,1.19l0.8,0.46l-0.09,0.92h1.42l0.89,1.47l0.44,1.93l1.33,0.64l1.24,-0.46l1.15,0.64l0.35,2.75l2.39,1.65l1.5,-0.55l2.3,-1.74l1.33,-0.73l3.72,1.29l0.18,-0.46l4.34,-0.37l1.42,-1.65l1.06,-0.28l-0.44,-1.01l2.48,0.92l2.13,-0.46l0.53,0.37l-0.09,0.55l3.19,2.02l1.42,0.09l0.35,-0.83l2.74,1.19l0.35,0.73l1.42,0.83l0.71,-0.18l1.06,0.46l0.53,-0.37l2.21,3.3l3.72,2.3l1.95,-0.09l1.95,1.01l2.57,-0.09l1.33,-2.02l1.5,-1.19l1.95,0.18l0.27,0.83l0.8,-0.09l2.21,1.28h3.81l0.97,-0.37l0.97,0.46l3.1,0.09l0.8,0.73l1.15,-0.27l1.77,0.55l0.8,-0.18l1.24,0.73l1.59,-0.18l0.62,0.83l1.06,0.55l0.97,0.09l1.33,0.92l1.15,-0.09l1.24,1.38l0.18,2.02l1.06,0.09l0.97,2.94l1.59,-0.55l1.24,0.46l1.06,-0.55l0.53,1.74l1.42,-0.37l0.71,0.64l0.62,1.28l0.8,0.09l0.18,0.73l0.8,0.55l-0.35,1.93l-2.12,2.75l0,1.38l-2.39,1.65l-1.86,-0.92l-1.51,-0.09l-1.24,0.64l-0.35,-1.56l-1.15,-0.82l-2.57,0.64l-1.15,-1.01h-0.71l-0.35,1.01l-1.15,0.64l-2.57,0.83l-3.36,0.09l-0.8,-0.28l-0.44,-1.01l-0.71,-0.37l-0.71,-0.18h-1.42l-0.71,1.38l-0.44,-0.46l-1.15,0.09l-0.71,-0.73l-0.89,0.18l-0.44,0.83l-1.33,-0.09l-0.27,-0.64h-1.33l-1.15,-0.64l0.62,-0.73l-1.77,-1.01l-1.33,-2.75l-0.88,-0.83l-1.24,0.64l-0.71,-0.18l-0.35,-0.73l-1.77,-0.92h-1.5l-2.3,-0.92l-0.35,-0.64l-1.06,-0.18l-0.62,-0.92l-2.39,-1.56l-0.62,-0.92l-2.57,0.18l-0.88,-0.09l-1.42,-0.27l-1.95,0.74l-0.35,-0.64l-0.8,-0.18l-1.77,0.73l-2.92,-1.47l-2.48,0.46l-1.86,-0.37l-2.12,0.55l-0.71,-0.64l-1.42,1.47l-1.59,0.73l-1.68,2.3l-3.72,0.28l-0.8,-0.37l-1.77,1.56l0.09,0.73l-2.04,2.85l-2.21,0.73l-0.71,1.1l0.09,1.1l-0.89,0.73l-0.18,2.3l0.35,1.38l-1.86,0.18l-0.62,0.83l-0.53,1.29l0.44,1.38l-0.71,0.55l-0.8,2.2l0.18,1.74l-1.24,1.93l-1.15,0.18l-0.53,0.92l0.35,1.84l-0.89,0.46l-0.8,2.75l0.18,0.83l0.97,0.46l-0.62,1.56l0.8,0.09l-0.97,0.46l-1.15,-0.37l-0.44,0.46h-1.15l0.26,1.47l-0.71,-0.27l-0.44,-1.24l0,0l0.73,-0.88l1.55,-7.13l0.86,-2.14v-3.21l2.58,-6.42l0.17,-10.52l-1.03,-2.85l-2.24,-1.96l-0.34,-4.46l-0.69,-1.78l-1.55,-1.78l-1.89,-1.78h-6.02l-2.41,-1.07l-1.03,-2.32v-1.61l0.52,-1.25l1.72,-1.61l0.34,-2.68l-2.41,-5.53v-1.12l0,0l0.96,-0.37l0.18,-0.92L505.77,173.28z",
  "Ribeira Grande": "M264.73,3.04L265.79,2.12L266.59,0L267.83,0.09L268.36,0.46L269.07,2.95L270.39,3.22L274.73,6.35L279.69,8.38L282.26,8.93L285.27,8.93L285.8,7.92L286.77,8.93L289.07,9.3L289.87,10.87L289.87,10.87L289.19,11.85L288.1,16.38L284.29,18.65L279.03,24.87L276.13,29.59L275.07,30.12L275.07,30.12L264.16,36.57L260.53,37.32L251.1,36.75L248.93,37.13L241.31,41.47L239.86,41.47L239.13,40.53L239.31,37.32L238.59,36L233.51,34.68L231.15,33.17L223.03,24.31L223.03,24.31L223.92,23.57L223.83,20.54L227.02,20.35L227.99,19.34L228.17,17.13L230.47,17.87L230.65,18.33L231.27,18.05L231.8,17.04L231.09,16.3L232.59,15.19L232.59,14.73L233.48,15.75L235.52,16.21L240.38,15.01L241.62,14.37L241.89,12.71L243.04,11.88L242.6,10.87L244.1,10.31L244.9,9.39L250.12,9.39L252.25,8.38L252.87,7.37L253.75,6.91L255.08,6.82L256.5,5.8L261.81,3.59L262.96,3.87z",
  "Ribeira Grande de Santiago": "M746.23,734.84L747.04,737.07L747.22,740.08L748.59,742.2L749.45,745.21L752.72,749.1L756.16,754.76L757.54,756L758.85,758.78L758.85,758.78L756.64,758.78L755.76,756.96L754.87,757.42L753.9,757.23L753.63,756.6L752.75,757.23L752.13,756.69L752.04,757.42L751.16,757.78L750.89,756.78L749.12,756.42L748.5,756.87L747.26,756.87L747,757.6L745.31,757.6L745.14,756.6L742.48,755.78L741.24,756.05L739.74,754.68L738.85,755.41L737.17,755.14L736.73,755.59L735.75,755.59L735.4,756.6L734.34,756.51L733.36,755.14L733.81,754.59L733.54,753.5L730,752.96L728.58,752.32L725.66,750.59L723.01,747.67L722.21,747.58L721.32,748.13L721.24,747.49L720.79,747.4L720.08,747.86L719.82,747.22L719.02,747.22L718.31,746.13L717.52,745.95L715.04,743.12L713.09,742.67L713.18,742.12L712.47,742.03L712.29,740.66L711.85,740.66L711.5,739.94L710.52,739.84L709.2,738.57L708.58,736.38L706.72,734.84L706.72,733.65L706.72,733.65L710.91,728.08L712.81,727.65L713.45,726.77L711.75,724.59L711.96,722.19L713.66,719.14L713.45,716.96L714.72,715.21L715.99,714.55L721.51,714.55L722.57,708.66L724.48,707.35L724.48,707.35L726.17,707.35L726.17,707.35L727.23,708.01L728.9,708.24L728.9,708.24L732.32,713.68L733.79,714.18L733.79,714.18L734.23,715.65L736.14,717.39L736.99,719.79L736.56,725.25L734.87,727.86L735.5,729.83L742.29,733.97L744.83,734.84L744.83,734.84z",
  "S\xE3o Domingos": "M777,696.49L777.45,696.76L777.09,698.04L779.04,698.04L779.48,698.77L779.31,699.68L780.63,700.5L780.28,702.32L780.9,702.41L780.63,703.05L781.96,703.05L781.87,704.05L782.4,704.05L782.4,704.87L783.2,705.42L782.23,706.42L782.85,707.15L783.64,707.06L783.38,707.88L783.91,707.88L784.17,706.51L784.88,707.97L785.59,708.15L784.97,707.33L786.21,707.51L786.21,708.88L785.59,709.88L787.36,709.42L788.87,710.52L790.11,710.43L790.99,711.43L791.26,713.07L790.46,712.61L789.84,712.98L788.42,712.8L788.6,713.34L787.98,713.8L789.22,713.8L789.04,715.26L790.37,713.89L791.52,713.98L792.14,713.25L792.76,713.52L792.23,714.53L792.41,714.89L793.2,714.71L792.76,715.62L793.12,717.17L792.85,718.17L793.47,719.08L792.85,720.54L793.82,720.81L794.44,719.72L795.15,719.63L795.86,720.36L795.77,721.18L796.66,721.81L796.3,722L796.75,722.72L796.57,723.36L795.95,723.54L795.15,723.09L794.62,725.09L795.06,725.55L796.48,725.55L797.1,726.37L794,726.64L795.24,726.91L795.68,727.73L796.83,727.37L795.86,729.46L796.75,731.56L795.33,733.11L795.42,733.65L794.53,732.65L793.91,732.56L793.2,731.38L793.12,731.74L792.05,731.74L791.52,733.29L790.64,734.2L789.22,734.56L788.33,735.93L786.31,735.73L786.31,735.73L783.21,733.54L777.07,732.45L769.22,729.39L765.19,729.61L761.59,730.92L755.22,731.36L749.29,733.54L747.38,734.84L747.38,734.84L744.83,734.84L744.83,734.84L742.29,733.97L735.5,729.83L734.87,727.86L736.56,725.25L736.99,719.79L736.14,717.39L734.23,715.65L733.79,714.18L733.79,714.18L738.47,714.77L742.92,713.9L750.98,708.88L752.89,705.61L753.74,704.74L755.22,704.52L755.22,704.52L756.5,705.83L756.5,705.83L757.34,707.35L760.95,709.1L762.22,711.94L764.77,712.16L767.31,711.28L771.34,708.01L773.46,704.3L775.79,698.19z",
  "S\xE3o Filipe": "M504.74,740.5L502.14,743.19L496.85,747.44L494.92,749.82L494.79,753.67L495.95,757.78L500.72,762.03L504.72,762.96L508.72,762.69L514.66,761.36L518.14,758.84L522.27,752.08L524.36,749.96L524.36,749.96L525.16,751.32L525.07,753.87L525.6,755.69L525.16,757.6L525.96,759.05L525.96,762.88L526.58,764.33L525.16,770.43L524.45,771.71L522.15,773.62L521.97,774.89L519.41,777.62L515.78,780.72L514.18,780.53L513.21,780.99L511.35,782.9L511.26,783.9L510.29,783.63L506.57,785.45L504.71,787L502.59,787.09L500.55,788L497.63,788.54L496.12,788.18L495.06,788.45L494.09,787.81L493.56,788.09L492.85,788.09L492.58,787.63L487.27,788.18L487.01,787.54L485.68,786.81L483.11,787.09L481.96,785.54L480.28,785.36L479.22,783.99L477.98,783.72L477,781.81L475.76,780.53L474.44,780.17L471.43,776.17L469.39,775.89L466.2,773.98L464.88,770.89L461.16,767.7L456.55,765.7L454.96,762.6L455.4,757.87L454.96,756.32L455.14,754.05L454.87,753.32L454.17,753.5L454.08,752.77L455.14,750.68L455.05,749.31L455.58,748.31L455.4,746.58L456.2,744.58L455.94,744.03L458.24,740.39L458.33,738.84L458.68,738.66L458.33,737.93L459.56,736.93L459.48,735.66L459.03,735.29L459.65,734.84L459.83,733.56L460.54,733.65L461.87,732.83L462.31,732.29L462.22,731.47L464.43,729.92L464.08,729.1L464.88,729.01L465.41,728.01L467.8,727.19L468.15,726.18L469.75,725.37L470.28,723.63L471.87,723.09L472.22,722.54L474.79,722L476.12,720.99L476.21,719.45L477,719.81L478.24,719.45L479.22,718.72L479.48,717.9L483.2,718.81L487.14,717.08L487.14,717.08L496.03,728.74L500.05,730.68L500.29,735.06L503.13,738.96L503.13,738.96z",
  Sal: "M959.45,115.94l2.3,1.56l0.53,2.85l0.88,-0.37l1.15,0.18l0.18,1.38l2.39,0.92l0.27,-0.46h0.71l1.06,0.83l-0.27,0.92l-0.44,0.09l0.44,1.1l-0.53,0.92l0.18,1.01l-0.44,0.64l-1.15,0.28l-0.27,2.57l-1.24,1.19l-0.44,1.1l0.62,1.01l1.86,0.92v1.29l0.97,2.57l1.33,1.19v1.56l0.97,0.28l1.42,1.65l0.41,-0.05l0.21,-0.5l0.18,0.46l-1.5,1.38l-0.44,2.02l0.27,0.55l-0.53,0.55l-1.24,-0.18l-0.35,-0.46h-1.51l-0.35,1.93l-0.8,1.1l-0.8,0.28l0.09,0.37l1.06,-0.18l0.27,0.37l-0.27,0.64l0.53,0.18l0.44,1.56l-0.44,0.83l0.35,0.37l-0.27,1.1h-0.53l-0.88,1.1l0.71,0.09l0.53,0.64l-0.18,1.19l0.71,0.37l0.35,0.92l-0.35,1.01l1.5,4.32l3.54,3.77l-0.71,2.3l0.53,0.64l0.53,3.03l1.24,1.47l0.27,1.19l-0.53,0.73h-0.8l-1.33,1.1l-1.06,2.2l-0.8,0.64l-0.62,4.04l-1.95,0.46l-1.68,2.02l0.27,5.6l2.04,4.68l1.42,1.01v1.1l0.71,0.83l-0.18,1.19l-0.8,0.27l-3.01,-1.65l-3.89,-0.46l-1.33,1.29l-0.53,-0.37l-1.24,2.29l-0.62,0.74h-0.62l-1.06,-0.46l-0.53,-0.92l0.09,-1.93l0.97,-1.75v-0.55l-1.5,-0.64l0.09,-1.19l0.71,-0.18l0.35,-1.01l-0.44,-0.09v-1.56l-0.44,-0.37l-0.44,-2.39l-1.59,-2.66l-3.01,-2.11l0.18,-1.1l-1.15,-0.09l0.53,-0.55l-0.53,-1.47l0.71,0.46v-0.55l-0.18,-0.73h-0.8l-0.09,-0.64l2.57,-1.65l0.88,-1.38l0.44,-2.02l0.09,-3.03l-0.88,-3.4l-2.39,-2.2l-2.3,-0.83l-4.96,-0.92l-0.53,1.01l-3.19,1.1l-1.86,-0.46l-0.18,-1.1l-0.53,-0.28l2.04,-3.49l2.04,-0.73l-0.62,-1.65l-1.68,-1.1l-0.35,-1.75l-1.06,-1.75l1.77,-2.94h1.24l-1.06,-1.47l1.33,-1.19v-1.93l-0.35,-0.55l-0.53,0.28l-0.53,0.37l-1.5,-0.74l-0.8,-1.01l-0.44,-3.12l1.15,-1.19l-0.71,-0.37l-0.09,-1.19l-0.71,-1.1l0.18,-1.65l-0.53,-1.01l-0.35,-2.94l0.53,-1.29l-0.18,-3.49l1.77,-1.93l0.62,-2.85l1.5,-0.74l0.44,-1.1h2.39l3.98,-1.65l0.27,-0.64l1.86,-1.29l0.44,-0.92l1.86,1.1l1.68,0.09l0.53,-0.74l0.71,0.09l0.53,-0.64l3.19,-1.1l1.24,-2.11L959.45,115.94z",
  "S\xE3o Miguel": "M723.58,645.45L723.8,645.81L724.51,645.81L724.6,645.45L727.43,645.81L728.41,646.63L729.73,646.36L730.09,646.81L729.82,648L731.59,648.55L730.88,649.64L732.21,650.37L732.74,650.74L733.27,651.46L734.6,651.01L736.02,652.19L737.61,652.19L737.79,653.01L738.76,654.02L738.94,656.11L740.18,656.11L740.27,656.57L741.24,656.93L742.04,659.03L741.77,660.22L742.21,660.76L742.83,660.22L743.37,660.4L743.54,661.95L744.43,662.31L744.16,664.59L745.05,664.5L745.14,665.05L745.84,664.68L745.93,665.14L747.08,665.69L746.64,666.42L746.66,667.78L746.66,667.78L737.84,675.49L736.35,675.92L733.17,675.92L732.87,676.36L732.87,676.36L728.08,682.47L724.69,683.35L722.78,683.35L722.36,682.47L722.57,681.38L724.9,677.67L725.33,675.71L723.84,673.08L720.02,669.59L718.54,669.15L714.3,669.15L713.24,668.28L712.6,662.6L712.6,662.6L715.36,659.33L715.46,656.86L721.4,650.57z",
  "S\xE3o Louren\xE7o dos \xD3rg\xE3os": "M755.65,704.95L755.22,704.52L755.22,704.52L753.74,704.74L750.98,708.88L742.92,713.9L738.47,714.77L733.79,714.18L733.79,714.18L732.32,713.68L728.9,708.24L728.9,708.24L735.29,703.43L736.35,701.46L736.35,699.28L737.84,695.35L740.8,693.6L740.8,693.6L741.86,693L741.86,693L742.57,693.42L743.26,695.2L744.46,695.73L744.81,697.14L746.87,697.85L747.56,697.85L749.97,696.08L750.83,695.9L752.72,695.9L754.1,696.79L755.3,701.39z",
  "S\xE3o Salvador do Mundo": "M725.07,707.35L725.2,704.05L724.51,701.04L726.06,698.74L726.06,697.32L725.03,695.9L725.2,693.6L729.67,692.01L733.13,688.98L733.13,688.98L733.38,689.24L733.38,689.24L743.35,689.24L745.04,690.55L745.04,692.3L742.71,692.51L742.71,692.51L740.8,693.6L740.8,693.6L737.84,695.35L736.35,699.28L736.35,701.46L735.29,703.43L728.9,708.24L728.9,708.24L727.23,708.01L726.17,707.35L726.17,707.35z",
  "S\xE3o Vicente": "M429.29,190.26l1.06,1.29l1.68,0.18l0.71,1.19l-0.8,2.66l-1.33,1.1l-0.18,1.1l-2.13,0.28l-1.42,-0.64l-3.1,0.09l-0.35,-1.38l-1.15,-1.56l0.89,-2.3l0.53,-0.55l1.95,0.46L429.29,190.26zM398.4,176.86l2.57,2.39l2.48,1.56l2.75,4.59l-2.3,-1.19l-1.33,0.09l-2.92,-2.66l0,-0.55l-0.8,-0.37l-1.86,-2.2l0.62,-1.47L398.4,176.86zM367.59,132.02l1.86,1.47l1.15,-0.09l0.35,0.74l1.06,0.46l4.34,1.29l0.44,0.46l-0.27,1.65l0.97,1.38l0.35,1.84l2.83,1.01l1.15,2.66l0.71,0.55l-0.44,0.83l0.53,1.01l2.13,2.39l1.86,0.74h1.95l3.36,-1.65l4.51,-0.09l0.89,0.83v1.47l-0.53,0.92l-1.86,1.84l-0.09,0.73l-2.3,-0.37l-1.24,1.1l-3.81,-0.64l-0.62,0.83l-1.5,-0.09l-0.09,0.46l-3.19,-0.55h-2.66l-0.89,0.46l-0.97,-0.28l-0.35,-3.58l-0.8,-1.29l-2.57,-1.93l-0.62,-1.01l-5.05,-2.57l-1.68,0.46l-2.04,-0.92l-1.68,-5.05l1.06,-0.46l0.97,-1.84l0.18,-2.02l0.97,-0.37l1.33,-2.02l-0.18,-0.64L367.59,132.02zM322.18,93.6l3.36,2.3l1.33,2.39l0.09,1.75l-0.71,-0.55l-0.62,0.74l0.35,1.29l-0.71,-0.19l-0.18,-0.64l-1.33,0.64l1.33,1.38l-0.71,0.09l-0.8,1.38l0.09,1.84l1.77,2.76l4.07,3.31l3.54,1.65l2.74,0.37l0.89,-1.1l2.21,-0.37l1.95,1.1l0.35,1.19l-0.35,1.29l-1.06,0.18l-1.68,1.29l0.44,1.75l0.89,0.74l-0.53,0.83l0.62,1.1l0.97,-0.18l0.71,0.46l-0.8,1.29l-0.18,4.87l-0.71,1.2l-2.21,0.55l-0.97,1.01l-2.04,-0.73l-2.21,0.55l-1.86,-0.55l-2.03,0.73l-0.35,0.74l-1.42,0.55v0.46l-3.19,1.75l-0.18,0.64l-1.33,-0.09l-0.71,0.64l-2.74,0.09l-0.44,0.46l-1.42,-0.09l-1.42,0.64l-2.12,-0.46l-0.62,0.64l-1.68,0.46l-0.27,1.19l-4.96,0.09l-0.8,0.73v1.65l-0.44,0.37l-2.75,0.28l-1.5,-0.92l-0.62,-0.37l-1.95,-1.19l-1.5,-0.46l-1.06,-1.1l-0.97,-0.74l-0.53,-0.74l-1.77,0.18l-2.12,-2.02l-1.86,-0.09l-1.86,-1.38l-1.86,0.55l-0.09,-0.64l-1.59,-1.01l-0.09,-0.46l-2.3,1.56l-1.42,-1.93l-1.33,-0.83l-0.18,-4.14l-0.97,-1.29l-1.86,-0.46l-5.05,1.01l0.09,-0.74l1.59,-2.02l-0.09,-0.64l0.89,-0.46l-0.09,-0.64l-1.77,-0.92l-0.09,-0.92l1.24,-0.74h0.97l0.53,-1.29l1.15,-0.55l0.09,-2.57l0.27,-0.37l1.15,0.18l0.35,-1.38l0.97,1.01l1.24,-0.18l1.15,-0.83l0.09,-1.1l-0.62,-1.01l0.88,-0.92l-0.09,-0.64l1.68,-0.09l-0.88,-2.21l2.66,1.29v-1.56l1.86,0.74l1.68,-1.66l2.21,0.09l0.62,0.92l0.18,1.65l0.44,-0.09l0.53,0.83l3.54,1.75l0.35,-0.92l1.95,-0.64l1.06,0.18l2.83,-2.94l-0.18,-1.29l-0.62,0.18l0.09,0.55l-0.89,-0.18l-0.35,-0.83l-0.62,0.64l-0.44,-0.37l-0.35,0.28v-0.74l0.71,-0.74l1.15,0.37l0.71,-0.74l-0.18,-1.47l-1.77,-0.83l0.09,-0.83l-0.35,-0.92h2.57l0.44,-0.83l-0.27,-1.01l1.33,0.46h2.92l0.97,-2.57l1.33,-0.55l0.97,0.18l1.24,-1.29l0.71,0.74l-1.68,1.75l0.09,0.64l1.33,-0.55l0.62,1.75l3.01,1.47l1.59,0.18l2.92,-1.47l-0.35,-0.83h-0.44v-0.64l1.5,-0.55l0.44,-0.83l0.62,0.09l0.18,-0.74l-0.62,0.09l-0.18,-0.64h2.57l0.53,-0.46L322.18,93.6z",
  Tarrafal: "M689.81,621.83L690.7,622.83L691.76,622.38L691.76,621.55L691.14,620.91L692.82,620.64L691.93,619.36L692.11,617.72L692.73,617.54L693.08,618L693.71,617.72L693.71,617.17L694.5,617.81L695.56,617.36L696.27,617.54L696.01,616.81L696.45,616.35L696.36,615.35L698.04,615.71L698.84,617.18L700.08,616.72L700.17,617.54L702.82,618L703.09,619.18L703.71,619.46L704.33,618.63L705.13,618.91L704.86,617.54L705.48,617.08L707.07,617.72L708.4,617.63L708.49,618.09L709.2,617.81L709.2,618.73L708.75,619L709.46,619.46L710.52,619.46L711.14,618.27L711.68,618.27L712.38,618.91L712.12,619.55L713.36,620.28L713.45,620.92L715.04,621.74L714.95,622.19L715.92,623.47L715.66,624.38L716.46,624.84L715.48,627.57L713.89,627.3L713.27,627.85L713.62,628.85L714.68,629.03L713.53,633.14L713.71,634.96L714.42,635.42L714.33,637.33L715.22,639.43L717.78,642.62L718.85,642.62L719.46,643.53L720.88,643.8L720.79,644.54L721.94,643.53L723.58,645.45L723.58,645.45L721.4,650.57L715.46,656.86L715.36,659.33L712.6,662.6L712.6,662.6L708.36,662.6L707.09,661.29L706.45,659.77L704.54,659.11L703.48,663.26L702.85,663.48L701.58,663.26L700.09,661.73L698.39,660.86L696.06,661.95L692.11,661.89L692.11,661.89L692.64,659.12L693.17,658.39L692.82,657.3L693.17,653.56L693.62,652.83L694.86,652.47L696.89,650.64L697.25,650.01L697.07,647.91L697.6,646.81L697.51,645.54L696.27,643.53L693.97,641.98L692.47,642.25L692.64,641.43L691.67,639.34L691.76,636.42L691.4,635.69L693.35,634.87L693.44,634.05L692.38,633.05L691.85,633.23L691.76,632.68L691.23,632.68L690.78,631.49L687.77,631.13L687.42,630.76L687.6,629.4L686.71,628.94L688.48,626.57L690.96,627.03L691.4,626.39L691.23,625.47L691.93,624.56L691.85,623.92L690.7,623.29L689.63,623.47L689.19,622.1z",
  "Tarrafal de S\xE3o Nicolau": "M502.14,176.4L502.23,176.61L502.23,176.61L502.23,176.61L502.23,176.61L502.24,176.77L502.24,176.77L502.24,177.88L504.65,183.41L504.31,186.09L502.59,187.7L502.07,188.94L502.07,190.55L503.1,192.87L505.51,193.94L511.53,193.94L513.42,195.72L514.97,197.51L515.66,199.29L516,203.75L518.24,205.71L519.27,208.57L519.1,219.09L516.52,225.51L516.52,228.72L515.66,230.86L514.11,237.99L513.39,238.86L513.39,238.86L512.06,238.27L511.08,239.83L510.64,239.64L510.38,237.53L511.08,237.26L510.64,235.7L511.53,234.96L511.44,233.59L510.29,232.3L509.49,230.01L509.31,227.71L508.34,225.6L506.13,224.69L505.42,223.31L504.71,223.13L504.53,221.38L504.36,220.1L503.65,219.27L503.83,218.17L503.29,216.89L501.26,216.52L500.46,215.6L500.37,214.68L500.82,214.5L500.46,212.94L500.9,212.11L500.02,211.47L500.64,211.1L500.55,210.28L499.75,209.73L499.22,208.17L497.01,206.79L492.58,206.51L491.08,205.14L484.53,201.65L484.35,200.82L483.2,199.72L482.05,199.54L481.34,198.89L481.96,196.97L480.19,196.6L479.13,195.68L478.77,191.27L479.48,190.08L479.48,189.16L478.77,187.23L479.39,184.75L480.63,183.01L481.61,183.56L482.05,183.38L481.16,182.09L482.23,181.54L484.35,181.72L485.41,180.62L487.45,180.81L489.49,179.15L490.28,179.34L490.9,177.87L493.29,177.59L493.91,176.77L494.35,177.32L496.04,176.86L497.81,178.23L498.96,177.87L499.4,178.23z"
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

// src/Capeverde.tsx
import { useState as useState2 } from "react";
var Capeverde = ({
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
  hintBorderRadius
}) => {
  if (type === "select-single") {
    return /* @__PURE__ */ React.createElement(
      CapeverdeSingle,
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
        hintBorderRadius
      }
    );
  } else if (type === "select-multiple") {
    return /* @__PURE__ */ React.createElement(
      CapeverdeMultiple,
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
        hintBorderRadius
      }
    );
  } else {
    return null;
  }
};
var CapeverdeSingle = ({
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
  hintBorderRadius
}) => {
  const { x, y } = mouseTrack_default();
  const [stateHovered, setStateHovered] = useState2(null);
  const [selectedState, setSelectedState] = useState2(null);
  useEffect2(() => {
    if (selectedState) {
      const path = document.getElementById(selectedState);
      if (path) {
        path.style.fill = selectColor || constants.SELECTED_COLOR;
      }
    }
  }, [selectedState, selectColor]);
  const mapStyle = {
    width: size || constants.WIDTH,
    fill: mapColor || constants.MAPCOLOR,
    stroke: strokeColor || constants.STROKE_COLOR,
    strokeWidth: strokeWidth || constants.STROKE_WIDTH
  };
  const handleMouseEnter = (hoverStateId) => {
    const path = document.getElementById(hoverStateId);
    setStateHovered(hoverStateId);
    if (path) {
      if (selectedState === hoverStateId) {
        path.style.fill = selectColor || constants.SELECTED_COLOR;
      } else {
        path.style.fill = hoverColor || constants.HOVERCOLOR;
      }
    }
  };
  const handleMouseLeave = (hoverStateId) => {
    const path = document.getElementById(hoverStateId);
    setStateHovered(null);
    if (path) {
      if (selectedState === hoverStateId) {
        path.style.fill = selectColor || constants.SELECTED_COLOR;
      } else {
        path.style.fill = mapColor || constants.MAPCOLOR;
      }
    }
  };
  const handleClick = (stateCode2) => {
    if (selectedState) {
      const path = document.getElementById(selectedState);
      if (path) {
        path.style.fill = mapColor || constants.MAPCOLOR;
      }
    }
    setSelectedState(stateCode2);
    if (onSelect) {
      onSelect(stateCode2);
    }
  };
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("div", { className: "map", style: mapStyle }, /* @__PURE__ */ React.createElement("svg", { version: "1.1", id: "svg2", x: "0px", y: "0px", viewBox }, stateCode?.map((stateCode2, index) => /* @__PURE__ */ React.createElement(
    "path",
    {
      key: index,
      onClick: () => handleClick(stateCode2),
      onMouseEnter: () => handleMouseEnter(stateCode2),
      onMouseLeave: () => handleMouseLeave(stateCode2),
      id: stateCode2,
      d: drawPath[stateCode2]
    }
  )))), hints && /* @__PURE__ */ React.createElement("div", null, stateHovered && /* @__PURE__ */ React.createElement(
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
var CapeverdeMultiple = ({
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
  onSelect
}) => {
  const [selectedStates, setSelectedStates] = useState2([]);
  const { x, y } = mouseTrack_default();
  const [stateHovered, setStateHovered] = useState2(null);
  useEffect2(() => {
    selectedStates.forEach((stateCode2) => {
      const path = document.getElementById(stateCode2);
      if (path) {
        path.style.fill = selectColor || constants.SELECTED_COLOR;
      }
    });
  }, [selectedStates, selectColor]);
  const mapStyle = {
    width: size || constants.WIDTH,
    fill: mapColor || constants.MAPCOLOR,
    stroke: strokeColor || constants.STROKE_COLOR,
    strokeWidth: strokeWidth || constants.STROKE_WIDTH
  };
  const handleClick = (stateCode2) => {
    if (selectedStates.includes(stateCode2)) {
      const remove_state_code = selectedStates.filter(
        (state) => state !== stateCode2
      );
      setSelectedStates(remove_state_code);
      const path = document.getElementById(stateCode2);
      if (path) {
        path.style.fill = mapColor || constants.MAPCOLOR;
      }
    } else {
      setSelectedStates([...selectedStates, stateCode2]);
    }
    if (onSelect) {
      onSelect(stateCode2, selectedStates);
    }
  };
  const handleMouseEnter = (hoverStateId) => {
    const path = document.getElementById(hoverStateId);
    if (path) {
      if (selectedStates.includes(hoverStateId)) {
        path.style.fill = selectColor || constants.SELECTED_COLOR;
      } else {
        path.style.fill = hoverColor || constants.HOVERCOLOR;
      }
    }
    setStateHovered(hoverStateId);
  };
  const handleMouseLeave = (hoverStateId) => {
    const path = document.getElementById(hoverStateId);
    if (path) {
      if (selectedStates.includes(hoverStateId)) {
        path.style.fill = selectColor || constants.SELECTED_COLOR;
      } else {
        path.style.fill = mapColor || constants.MAPCOLOR;
      }
    }
    setStateHovered(null);
  };
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("div", { className: "map", style: mapStyle }, /* @__PURE__ */ React.createElement("svg", { version: "1.1", id: "svg2", x: "0px", y: "0px", viewBox }, stateCode?.map((stateCode2, index) => /* @__PURE__ */ React.createElement(
    "path",
    {
      key: index,
      onClick: () => handleClick(stateCode2),
      onMouseEnter: () => handleMouseEnter(stateCode2),
      onMouseLeave: () => handleMouseLeave(stateCode2),
      id: stateCode2,
      d: drawPath[stateCode2]
    }
  )))), hints && /* @__PURE__ */ React.createElement("div", null, stateHovered && /* @__PURE__ */ React.createElement(
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
var Capeverde_default = Capeverde;

// src/index.ts
var src_default = Capeverde_default;
export {
  src_default as default
};
