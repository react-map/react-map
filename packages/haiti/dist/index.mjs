// src/Haiti.tsx
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
var viewBox = "-50 -40 2000 800";
var stateCode = ["Sud-Est", "Ouest", "Nord", "Nord-Est", "Centre", "L'Artibonite", "Sud", "Nord-Ouest", "Nippes", "Grand'Anse"];
var drawPath = {
  "Sud-Est": "M583.61,508.15L578.26,505.44L570.91,501.79L560.82,501.15L551.52,505.51L544.6,513.84L541.78,516.01L538.39,516.12L531.51,519.08L525.02,519.89L521.3,520.34L518.12,523.06L512.76,523.76L507.32,523.99L504.05,526.8L500.98,529.71L496.11,529.01L491.71,526.6L490.96,530.84L489.42,534.52L486.01,537.22L483.82,541.36L474.55,539.01L465.04,535.78L460.3,538.63L457.13,542.05L451.1,538.98L447.93,534.35L443.79,534.1L439.42,533.8L431.96,535.45L426.02,536.25L422.65,529.77L418.61,524.4L417.5,533.16L413.91,541.5L413.93,547.98L414.48,554.46L415.15,559.63L416.03,564.77L415.72,566.21L422.08,566.92L432.69,569.74L442.58,573.63L449.95,577.9L457.52,574.99L472.98,576.51L480.74,571.5L482.72,572.94L484.39,573.39L488.55,573.69L488,572.34L487.19,569.01L486.63,567.66L493.4,568.09L526.35,565.05L530.64,565.83L538.29,568.8L541.56,568.72L544.21,565.83L542.31,554.48L543.82,553.32L547.2,554.6L552.83,557.57L574.82,553.56L615.67,553.02L644.82,553.3L667.19,549.53L678.1,549.55L687.2,553.06L696.32,557.84L718.36,565.41L728.21,571.6L736.76,579.34L756.34,604.9L760.92,608.03L764.27,599.11L765.29,594.01L764.66,585.45L764.85,580.54L764.19,577.24L761.17,568.79L760.75,566L761.54,560.19L763.75,554.65L776.2,533.19L776.37,532.9L776.1,532.94L751.59,537.2L737.09,528.16L718.21,526.69L694.64,527L670.42,521.49L646.07,516.47L622.19,517.96L598.99,516.56L595.13,512.21L591.72,507.53L583.61,508.15z",
  Ouest: "M468.29,412.72L471.57,406.88L472.37,399.4L471.37,391.77L469.24,385.36L461.1,375.3L441.17,366.9L419.82,356.07L400.62,349.77L361.7,333.36L355.07,332.6L349.05,333.44L343.33,335.68L338.43,338.99L334.96,342.89L334.01,346.15L334.87,349.42L336.73,352.47L338.78,355.04L340.25,356.35L345.49,360.08L351.13,368.07L357.84,372.48L382.79,379.29L407.49,395.28L416.45,397.49L424.98,398.15L449.95,403.74L456.27,404.15L458.41,404.72L460.81,406.84L463.32,412.15L465.3,413.97L468.29,412.72zM548,335.82L526.84,332.8L508.97,332.13L504.28,335.59L500.36,340.59L500.35,340.6L504.82,342.89L509.61,344.44L515.51,348.2L521.12,352.8L525.08,356.86L539.45,379.29L541.81,384.91L544.21,387.58L553.79,393.44L560.59,392.65L566.01,396.91L571.06,403.05L576.74,407.95L580.04,408.96L586.85,409.18L590.3,409.78L603.09,416.04L605.61,417.86L607.12,421.39L606.1,423.6L603.94,425.98L601.97,429.99L601.51,433.32L601.97,451.32L601.34,458.2L599.06,463.16L594.13,464.49L591.45,462.98L585.62,456.41L584.73,456.06L584.19,455.32L583.37,454.57L581.61,454.21L580.65,454.84L580.2,456.23L579.48,457.63L577.78,458.25L531.04,454.07L522.14,456.05L515.34,464.49L510.64,474.87L505.04,483.97L497.43,490.45L486.63,492.91L466.72,489.54L462.63,487.78L457.68,487.81L450.18,490.46L444.83,491.51L446.28,486.68L422.01,480.8L402.3,484.33L402.3,484.33L403.9,487.62L404.03,491.2L399.68,498.57L400.31,506.51L407.31,506.79L412.16,511.69L414.22,518.86L418.61,524.4L422.65,529.77L426.02,536.25L431.96,535.45L439.42,533.8L443.79,534.1L447.93,534.35L451.1,538.98L457.13,542.05L460.3,538.63L465.04,535.78L474.55,539.01L483.82,541.36L486.01,537.22L489.42,534.52L490.96,530.84L491.71,526.6L496.11,529.01L500.98,529.71L504.05,526.8L507.32,523.99L512.76,523.76L518.12,523.06L521.3,520.34L525.02,519.89L531.51,519.08L538.39,516.12L541.78,516.01L544.6,513.84L551.52,505.51L560.82,501.15L570.91,501.79L578.26,505.44L583.61,508.15L591.72,507.53L595.13,512.21L598.99,516.56L622.19,517.96L646.07,516.47L670.42,521.49L694.64,527L718.21,526.69L737.09,528.16L751.59,537.2L776.1,532.94L776.37,532.9L779.67,527.21L779.06,526.35L776.48,524.04L772.48,521.4L757.42,515.71L746.85,508.63L744.58,506L740.32,499.69L737.96,497.59L727.03,494.84L722.83,492.52L721.15,487.05L722.2,483.81L724.3,482.6L725.79,480.98L725.1,476.55L723.29,473.75L697.95,447.68L695.46,442.84L700.28,439.2L710.69,436.99L731.76,440.9L742.61,437.17L746.26,433.24L752.02,423.37L755.84,419.08L756.56,418.63L756.47,418.51L754.58,416.2L743.98,409.87L732.25,406.8L722.84,403.38L713.28,400.04L690.73,404.17L668.54,411.42L647.17,404.03L630.3,387.32L621.95,381.54L612.39,379.12L603.19,373.3L595.87,363.48L589.3,356.68L581.76,351.14L574.36,348.14L567.36,345.11L564.56,340.55L561.53,336.26L554.59,336.58L548,335.82z",
  Nord: "M684.78,112.58L684.03,112.21L683.14,110.82L681.9,109.43L679.63,108.78L669.96,108.78L667.25,107.92L663.21,103.83L661.27,102.52L659.7,102.11L658.74,102.04L647.65,104L643.07,103.52L638.32,100.66L640.7,93.48L636.94,90.28L631.41,90.43L628.59,93.36L626.35,97.75L621.25,99.42L615.52,98.89L611.36,96.61L609.61,96.61L610.71,99.74L611.36,100.66L611.36,102.52L610.95,101.94L610.26,102.91L609.68,104.17L609.61,104.53L610.53,104.63L612.35,104.48L613.27,104.53L609.61,108.78L610.66,111.37L609.61,111.75L604.65,110.64L603.42,109.33L599.88,100.66L604.28,101.92L605.61,102.52L605.61,100.66L592.08,87.98L590.3,83.28L586.8,84.32L578.85,82.28L570.37,78.99L565.26,76.25L560.97,79.05L553.17,76.22L545.67,71.12L539.83,63.83L539.83,63.83L537.57,65.46L534.79,69.65L532.99,73.25L530.67,75.07L527.54,78.02L523.87,81.26L520.91,80.89L518.14,79.12L513.65,77.95L509.74,79.01L508.82,82.58L508.89,84.38L512.21,91.58L517.97,96.12L518.78,102.77L524.82,101.94L530.67,106.28L528.03,116.34L531.53,121.45L538.31,124.37L542.17,136.21L546.79,148.32L554.55,156.01L563.03,162.86L573.04,167.04L581.46,164.34L581.48,156.64L587.06,156.82L592.23,151.86L597.04,151.43L601.12,153.52L606.52,156.29L607.87,175.17L618.68,185.23L629.94,190.78L634.65,201.39L633.21,209.62L634.54,218.08L639.22,226.52L642.15,234.51L650.42,237.43L656.56,243.58L659.13,247.46L664.57,246.94L683.94,234.82L704.13,224.46L699.47,209.14L685.33,194.75L680.11,193.22L674.95,191.81L677.73,187.43L678.6,179.55L673.82,171.81L670.95,163.02L667.18,155.99L666.35,149L667.45,145.22L667.25,141.13L670.64,138.89L675.14,137.93L681.12,129.11L682.37,117.63L683.44,115.39L684.78,112.59L684.78,112.58z",
  "Nord-Est": "M766.19,113.16L754.42,112.85L747.17,111.22L743.96,111L741.82,112.85L741.36,115.83L742.37,118.45L744.35,120.28L750.53,121.9L751.14,124.03L749.63,128.11L748.25,129.06L745.13,127.1L740.06,122.82L735.91,123.5L730.65,124.98L725.79,124.41L722.85,118.96L730.67,119.07L734,118.51L736.43,116.92L738.13,113.18L736.12,111.68L728.59,110.64L714.89,106.6L706.94,106.54L701.61,110.64L698.4,111.53L696.61,113.69L695.18,115.91L693.02,116.92L690.46,116.28L686.65,113.5L684.78,112.58L684.78,112.59L683.44,115.39L682.37,117.63L681.12,129.11L675.14,137.93L670.64,138.89L667.25,141.13L667.45,145.22L666.35,149L667.18,155.99L670.95,163.02L673.82,171.81L678.6,179.55L677.73,187.43L674.95,191.81L680.11,193.22L685.33,194.75L699.47,209.14L704.13,224.46L714.11,230.4L724.49,235.16L729.71,239.58L737.32,240.65L743.71,241.88L748.86,241.51L758.77,242.37L768.28,241.13L768.41,241.11L767.23,239.9L762.23,232.84L760.84,226.92L762.68,225.04L770.24,220.72L772.9,218.61L776.45,209.56L778,207.86L781.2,201.04L781.39,187.77L778.04,164.52L770.21,145.9L768.92,139.15L769.38,131.34L769.66,126.61L768.66,121.35L766.19,113.16z",
  Centre: "M743.71,241.88L737.32,240.65L729.71,239.58L724.49,235.16L714.11,230.4L704.13,224.46L683.94,234.82L664.57,246.94L659.13,247.46L656.56,243.58L650.42,237.43L642.15,234.51L629.31,252.63L627.71,274.12L635.24,281.66L632.62,287.97L633.23,295.18L635.12,303.96L631.27,319.02L632.97,333.84L633.78,341.7L629.93,351.33L628.87,360.48L622.28,364.24L608.99,362.68L595.87,363.48L603.19,373.3L612.39,379.12L621.95,381.54L630.3,387.32L647.17,404.03L668.54,411.42L690.73,404.17L713.28,400.04L722.84,403.38L732.25,406.8L743.98,409.87L754.58,416.2L756.47,418.51L756.56,418.63L758.49,417.43L766.01,412.76L769.94,409.53L773.29,404.02L775.21,399.02L776.58,393.55L777,387.99L774.74,376.36L774.45,364.35L772.9,358.87L770.82,356.19L764.4,350.3L761.84,347.28L757.87,338.89L755.31,336.8L748.75,336.58L741.78,338.97L736.76,339.76L735.93,334.62L740.77,331.35L755.15,327.46L758.83,325.17L770.98,311.66L779.36,299.87L783.61,296.05L793.11,289.21L796.64,283.96L798.07,278.87L799.35,261.17L795.81,259.45L777.65,250.59L768.41,241.11L768.28,241.13L758.77,242.37L748.86,241.51L743.71,241.88z",
  "L'Artibonite": "M508.89,84.38L500.37,83.18L493.49,88.15L488.82,90.86L482.94,92.4L465.53,107.36L444.38,111.09L432.93,108.96L421.36,108L410.06,105.2L399.26,106.26L386.08,120.22L383.84,136.47L384.12,137.27L384.12,137.27L386.94,137.56L392.46,138.94L395.33,139.27L412.69,145.71L415.49,144.45L417.36,144.89L427.25,153.35L431.84,155.51L437.16,156.79L452.03,166.04L469.88,174.23L475.15,178.04L478.85,182.59L481.31,186.55L484.98,189.24L499.46,190.16L502.29,191.75L507.7,202.56L504.18,202.49L501.49,201.07L499.53,199.39L498.13,198.5L494.1,197.77L493.46,197.53L494.17,198.83L494.64,205.66L495.63,208.11L495.47,210.29L492.38,212.54L489.61,212.97L486.92,212.11L484.58,210.5L482.81,208.66L481.61,212.38L481.17,218.54L482.27,224.34L485.6,226.89L491.21,227.4L494.1,229.03L498.13,237.04L494.84,236.47L490.33,236.67L485.88,237.55L482.81,239.07L480.97,241.81L477.89,248.65L475.15,251.24L474.9,252.81L475.21,253.39L474.99,253.92L473.08,255.29L474.85,260.02L481.58,271.96L484.55,275.72L489.2,278.48L494.29,280.43L498.37,283.33L500.03,288.9L497.43,293.26L491.49,295.25L480.74,295.98L468.88,300.79L470.23,308.39L499.6,340.22L500.35,340.6L500.36,340.59L504.28,335.59L508.97,332.13L526.84,332.8L548,335.82L554.59,336.58L561.53,336.26L564.56,340.55L567.36,345.11L574.36,348.14L581.76,351.14L589.3,356.68L595.87,363.48L608.99,362.68L622.28,364.24L628.87,360.48L629.93,351.33L633.78,341.7L632.97,333.84L631.27,319.02L635.12,303.96L633.23,295.18L632.62,287.97L635.24,281.66L627.71,274.12L629.31,252.63L642.15,234.51L639.22,226.52L634.54,218.08L633.21,209.62L634.65,201.39L629.94,190.78L618.68,185.23L607.87,175.17L606.52,156.29L601.12,153.52L597.04,151.43L592.23,151.86L587.06,156.82L581.48,156.64L581.46,164.34L573.04,167.04L563.03,162.86L554.55,156.01L546.79,148.32L542.17,136.21L538.31,124.37L531.53,121.45L528.03,116.34L530.67,106.28L524.82,101.94L518.78,102.77L517.97,96.12L512.21,91.58L508.89,84.38z",
  Sud: "M223.42,588.09L221.82,587.67L220.56,588.88L219.66,591.82L226.7,598.37L230.99,600.99L235.9,602.07L246.8,602.63L252.51,602.09L256,599.86L256,595.68L252,593.26L246.45,592.11L241.73,591.82L233.02,591.82L231.08,590.54L229.97,588.54L228.43,587.73L225.21,589.97L223.42,588.09zM191.81,611.95L195.52,611.05L196.19,608.78L194.76,602.99L193,598.4L181.21,585.79L186.09,577.72L191.17,572.67L211.22,563.36L223.47,553.56L223.77,552.53L223.44,551.21L223.33,550.03L224.33,549.53L227.34,550.18L228.98,550.83L229.21,551.55L231.49,549.27L234.65,545.09L236.85,543.3L234.14,550.06L233.22,553.6L233.02,557.57L237.05,554.4L240.52,546.69L244.5,545.5L243.1,550.35L244.33,554.16L247.12,555.68L250.42,553.56L252.17,553.56L255.96,555.65L258.04,551.33L260.07,545.57L263.81,543.3L265.86,544.96L268.28,550.37L270.51,551.55L273.94,550.85L282.95,545.5L289.56,543.66L312.25,543.48L330.97,545.5L330.97,547.33L320.85,547.25L317.13,548.71L315.66,552.56L318.25,553.28L334.96,551.55L372.18,557.57L374.63,558.41L382.79,563.62L385.11,563.98L392.53,563.62L415.72,566.21L416.03,564.77L415.15,559.63L414.48,554.46L407.34,544.69L405.08,531.86L396.13,523.52L385.5,514.85L378.72,512.96L372.34,514.88L365.26,514.07L357.91,513.19L343.07,513.48L328.48,511.45L319.72,515.03L309.66,517.66L300.81,517.35L291.97,518.21L274.11,521.08L259.9,517.46L262.7,511.1L265.21,506L258.95,502.83L254.91,497.82L250,493.61L242.36,492.94L233.37,494.19L227.01,499.53L222.27,497.97L216.64,495.13L207.35,495.56L198.25,494.3L189.31,496.83L180.35,499.27L173.87,499.29L167.39,499.44L163.51,505.27L163.99,512.27L150.68,511.19L137.32,507.37L125.65,503.44L113.83,500.52L85.43,502.8L57.3,508.57L41.98,511.83L26.46,513.37L18.67,511.91L11.96,512.62L10.9,513.11L10.89,513.12L12.77,517.43L23.31,522.77L25.7,526.08L28,528.53L33.44,531.57L39.83,534.16L45,535.24L51.16,533.34L57.07,529.67L62.68,527.29L67.98,529.19L69.87,527L72.22,528.38L79.45,531.21L82.37,531.99L84.75,532.14L86.33,533.1L86.93,536.25L88.23,539.04L91.28,541.27L94.87,542.76L103.43,544.2L108.3,546.58L135.44,566.6L140.66,571.5L141.41,572.76L141.55,573.69L141.78,574.59L142.77,575.71L143.76,576.3L145.88,577.23L146.77,577.9L164.7,603.72L165.77,608.06L167.81,610.11L170.53,611.42L173.25,611.88L191.81,611.95z",
  "Nord-Ouest": "M480.74,43.51L472.03,43L462.69,44.19L453.76,46.53L446.28,49.62L440.86,47.61L434.43,48.24L429.15,51.11L427.14,55.73L424.17,52.93L420.28,51.48L415.99,51.11L411.85,51.66L406.25,53.16L404.4,53.44L401.06,53.51L397.14,52.92L389.75,50.23L385.66,49.62L377.7,50.54L374.5,49.45L371.15,45.36L365.53,53.19L355.55,60.49L321.41,76.25L315.76,76.61L310.05,76.14L304.71,76.71L300.18,80.14L315.66,80.14L315.66,82.36L301.02,89.22L298.27,89.29L296.79,92.66L286.79,108.78L287.6,112.27L288.12,118.51L289.67,124.45L293.56,127.09L296.28,128.34L301.23,133.93L303.22,135.22L306.32,135.52L311.61,136.92L338.32,138.27L350.36,136.69L356.01,131.15L359.8,134.5L365.84,137.86L372.03,140.45L376.2,141.48L379.18,140.83L381.03,139.36L382.33,137.91L383.75,137.23L384.12,137.27L383.84,136.47L386.08,120.22L399.26,106.26L410.06,105.2L421.36,108L432.93,108.96L444.38,111.09L465.53,107.36L482.94,92.4L488.82,90.86L493.49,88.15L500.37,83.18L508.89,84.38L508.82,82.58L509.74,79.01L513.65,77.95L518.14,79.12L520.91,80.89L523.87,81.26L527.54,78.02L530.67,75.07L532.99,73.25L534.79,69.65L537.57,65.46L539.83,63.83L538.84,62.6L522.21,57.41L516.38,54.62L509.34,50.23L480.74,43.51zM484.55,6.69L478.18,2.91L473.35,0.76L467.94,0L459.85,0.38L445.69,2.32L432.72,6.69L431.09,8.15L430.31,8.53L429.08,8.52L433.07,12.24L439.3,15.41L446.17,17.71L452.03,18.9L455.06,18.37L458.39,17.12L461.6,16.5L466.25,18.63L479.86,21.72L490.88,26.06L514.62,29.35L519.17,31.3L522.35,24.33L511.07,17.15L484.55,6.69z",
  Nippes: "M402.3,484.33L395.23,485.59L390.51,485.27L386.27,483.65L381.07,480.62L371.18,476.91L360.21,475.95L337.76,476.77L331.53,475.5L320.37,469.8L314.7,468.52L270.38,465.11L258.34,466.62L248.51,472.56L244.11,470.35L235.2,471.65L230.26,469.44L229.03,467.13L229.14,464.87L228.84,463.13L224.22,462L219.57,459.51L217.72,458.25L223.83,456.09L229.25,455.47L234.64,456.21L240.68,458.25L240.68,456.41L248.12,457.57L253.8,453.73L253.64,448.65L243.65,446.15L240,446.66L227.3,450.35L225.09,450.43L222.78,450.24L220.56,450.34L218.68,451.29L215.12,455.7L214.78,456.41L213.61,457L210.78,459.1L210.77,459.13L208.44,463.99L203.58,469.55L204.95,473.67L209.56,475.84L203.31,482.89L198.25,494.3L207.35,495.56L216.64,495.13L222.27,497.97L227.01,499.53L233.37,494.19L242.36,492.94L250,493.61L254.91,497.82L258.95,502.83L265.21,506L262.7,511.1L259.9,517.46L274.11,521.08L291.97,518.21L300.81,517.35L309.66,517.66L319.72,515.03L328.48,511.45L343.07,513.48L357.91,513.19L365.26,514.07L372.34,514.88L378.72,512.96L385.5,514.85L396.13,523.52L405.08,531.86L407.34,544.69L414.48,554.46L413.93,547.98L413.91,541.5L417.5,533.16L418.61,524.4L414.22,518.86L412.16,511.69L407.31,506.79L400.31,506.51L399.68,498.57L404.03,491.2L403.9,487.62L402.3,484.33z",
  "Grand'Anse": "M217.72,442.11L217.62,435.55L210.6,431.59L201.44,430.86L194.76,434.02L195.35,441.94L202.32,445.93L211.26,445.98L217.72,442.11zM92.9,425L81.75,422.59L66.01,421.7L62.72,421.9L59.61,422.81L58.21,424.85L57.03,427.26L54.17,427.35L47.7,425.77L42.4,426.7L29.95,431.76L20.45,437.32L18.28,440.06L19,443.2L20.09,445.5L21.2,449.21L21.68,452.67L20.92,454.21L16.74,457.24L13.45,470.93L8.32,474.58L9.55,477.44L10.39,478.62L0.65,492.91L7.93,502.13L9.76,506.22L10.39,511.99L10.89,513.12L10.9,513.11L11.96,512.62L18.67,511.91L26.46,513.37L41.98,511.83L57.3,508.57L85.43,502.8L113.83,500.52L125.65,503.44L137.32,507.37L150.68,511.19L163.99,512.27L163.51,505.27L167.39,499.44L173.87,499.29L180.35,499.27L189.31,496.83L198.25,494.3L203.31,482.89L209.56,475.84L204.95,473.67L203.58,469.55L208.44,463.99L210.77,459.13L210.78,459.1L210.03,459.66L208.32,460.45L205.81,460.42L202.35,458.71L199.55,458.25L198.06,458.79L197.13,459.84L195.73,460.67L192.85,460.45L191.07,459.41L185.04,454.21L181.75,452.77L178.77,452.19L166.17,451.72L162.55,450.42L154.41,446.15L152.65,446.34L150.7,447.35L149.14,447.52L148.5,445.22L148.12,444.61L146.29,442.55L145.71,442.11L129.57,441.39L92.9,425z"
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

// src/Haiti.tsx
import { useState as useState2, useId } from "react";
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
var Haiti = ({
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
    return /* @__PURE__ */ React.createElement(
      HaitiSingle,
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
    return /* @__PURE__ */ React.createElement(
      HaitiMultiple,
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
var HaitiSingle = ({
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
  const instanceId = useId().replace(/:/g, "");
  const { x, y } = mouseTrack_default();
  const [stateHovered, setStateHovered] = useState2(null);
  const [selectedState, setSelectedState] = useState2(null);
  const strokeProps = getStrokeProperties(borderStyle);
  const mapStyle = {
    width: size || constants.WIDTH,
    stroke: strokeColor || constants.STROKE_COLOR,
    strokeWidth: strokeWidth || constants.STROKE_WIDTH,
    ...strokeProps
  };
  useEffect2(() => {
    stateCode.forEach((state) => {
      const path = document.getElementById(`${state}-${instanceId}`);
      if (path) {
        path.style.fill = cityColors[state] || mapColor || constants.MAPCOLOR;
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
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("div", { className: "map", style: mapStyle }, /* @__PURE__ */ React.createElement("svg", { version: "1.1", id: `svg2-${instanceId}`, x: "0px", y: "0px", viewBox }, stateCode?.map((stateCode2, index) => /* @__PURE__ */ React.createElement(
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
var HaitiMultiple = ({
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
  const instanceId = useId().replace(/:/g, "");
  const [selectedStates, setSelectedStates] = useState2([]);
  const { x, y } = mouseTrack_default();
  const [stateHovered, setStateHovered] = useState2(null);
  const strokeProps = getStrokeProperties(borderStyle);
  const mapStyle = {
    width: size || constants.WIDTH,
    stroke: strokeColor || constants.STROKE_COLOR,
    strokeWidth: strokeWidth || constants.STROKE_WIDTH,
    ...strokeProps
  };
  useEffect2(() => {
    stateCode.forEach((state) => {
      const path = document.getElementById(`${state}-${instanceId}`);
      if (path) {
        path.style.fill = cityColors[state] || mapColor || constants.MAPCOLOR;
      }
    });
  }, [cityColors, mapColor, instanceId]);
  useEffect2(() => {
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
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("div", { className: "map", style: mapStyle }, /* @__PURE__ */ React.createElement("svg", { version: "1.1", id: `svg2-${instanceId}`, x: "0px", y: "0px", viewBox }, stateCode?.map((stateCode2, index) => /* @__PURE__ */ React.createElement(
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
var Haiti_default = Haiti;

// src/index.ts
var src_default = Haiti_default;
export {
  src_default as default
};
