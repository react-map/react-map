// src/Belgium.tsx
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
var stateCode = [
  "Antwerp",
  "Walloon Brabant",
  "Brussels Capital Region",
  "Hainaut",
  "Liege",
  "Limburg",
  "Luxembourg",
  "Namur",
  "East Flanders",
  "Flemish Brabant",
  "West Flanders"
];
var drawPath = {
  Antwerp: "M468.18,16.63l-3,1.43l0.14,5.29l-4.42,-1.93l0.72,-3.33l1.87,1.99l1.65,-2.43l-1.58,-1.06L468.18,16.63zM435.75,1.31l11.07,5.98l0.88,7.01l-4.16,3.74l1.42,7.59l3.17,-0.25l-2.18,1.77l-11.89,-4.67l-0.31,5.26l18.11,1.68l4.16,-2.55l6.24,7.37l16.24,-15.84l0.64,-7.29l4.28,-5.36l3.25,4.24l6.42,0.4l5.1,12.2l-6.34,11.98l11.71,14.17l0.53,10.19l5.47,1.65l7.26,-3.38l7.84,5.18l-2.86,11.45l2.24,2.02l0,0l-4.08,4.56l-0.41,8.09l9.03,11.33l0.27,10.21l-5.41,5.41l-5.5,-2.07l-2.39,5.32l-5.17,0.65l0,0l-1.58,0.28l0,0l-5.52,0.34l-6.79,9.82l-16.18,3.4l-0.47,5.43l-5.62,7.04l0,0l-3.02,-3.36l-6.05,2.68l0,0h-0.91l0,0l-6.32,4.66l-15.62,3.27l-5.06,-8.57l-5.99,4.41l-5.39,-0.49l-7,8.42l1.93,-4.87l-4.49,-3.18l-15.29,4.41l-1.17,5.4l-3.15,0.65l-6.36,-4.16l-3.93,3.64l-7.76,-4.87l-2.04,5.27l-5.21,-4.35l-11.22,3.11l-1.11,-4.66l-3.19,-1.05l1.42,-5.06l-7.12,4.35l0.64,-3.24l-12.88,-5l-7.96,1.76l0,0l-1.46,-1.94l-3.89,3.21l-4.28,-2.28l1.5,-5.43l-2.28,-1.02l-2.28,-12.32l7.14,-6.4l7.1,2.23l12.8,-3.52l3.35,-9.06l-0.14,-8.76l-2.45,-1.21l1.42,-4.52l-4.24,-1.3l-2.78,-14.75l6.24,-9.27l-8.11,-5.58l-2,-12.23l-6.28,-3.6l0,0l-4.08,-6.56l23.09,-0.99l1.5,5.84l7.92,1.02l9.38,-2.77l-9.22,-17.51l2.45,-6.35l-3.6,-1.74l18.44,-9.75l12.66,-1.28l1.81,2.83l-3.35,7.32l1.05,8.09l7.76,-2.89l12.49,3.02l5.66,-1.15l-0.35,-5.63l5.04,-2.3l11.57,-14.8L435.75,1.31z",
  "Walloon Brabant": "M302.66,246.58L313.34,239.28L318.1,246.55L323.61,245.93L331.33,251.94L334.23,248.72L342.85,248.72L344.4,242.41L348.47,243.48L346.43,239.9L348.45,238L351.7,243.33L355.88,243.42L355.88,243.42L355.88,239.59L355.88,239.59L379.34,231.41L379.17,235.42L385.53,239.93L385.66,236.46L395.19,234.01L399.24,228.83L400.91,235.82L406.81,235.36L410.93,231.37L407.43,226.25L408.44,218.03L418.21,221.04L421.84,219.07L422.62,221.16L424.47,217.14L431.34,215.73L437.45,218.27L441.61,224.9L446.02,225.18L446.06,229.1L458.34,227.36L458.34,227.36L459.82,227.36L459.82,227.36L459.8,233.18L463.43,235.21L474.48,226.96L481.78,233.03L481.78,233.03L481.1,238.4L476.53,241L481.17,247.46L478.12,250.01L478.32,259.22L474.66,266.23L474.66,266.23L468.39,264.76L463.75,270.88L458.16,270.39L458.45,272.5L436.4,278.89L437.15,282.31L433.01,278.86L427.84,282.74L425.97,276.11L421.96,276.84L420.27,281.12L412.45,277.36L410.74,281.61L413.42,289.64L408.66,291.54L400.16,288.76L395.16,291.11L395.72,297.19L395.72,297.19L382.96,301.92L380.82,297.58L375.84,298.41L374.09,301.21L374.69,291.9L370.84,293.16L363.45,289.92L352.94,290.74L347.91,296.39L348.51,289.03L342.23,289.09L336.49,280.91L331.39,280.84L332.58,274.27L322.27,271.92L323.12,264.94L318.55,260.26L311.04,269.38L303.87,269.26L300.93,262.99L301.47,247.89L305.15,246.91z",
  "Brussels Capital Region": "M366.21,187.61L366.99,188.19L366.99,188.19L368.37,193.39L365.51,196.83L372.77,201.66L375.7,210.66L370.96,213.7L371.72,215.88L371.72,215.88L374.81,216.22L374.81,216.22L378.5,220.21L375.74,220.45L375.74,220.45L373.21,221.53L373.21,221.53L358,228.61L348.12,225.3L342.69,213.95L338.16,215.3L331.57,211.98L331.57,211.98L331.08,212.47L331.08,212.47L330.96,212.1L330.96,212.1L332.93,209.55L332.93,209.55L333.49,206.79L338.49,206.54L337.99,197.11L341.25,192.28L341.25,192.28L344.6,189.18L344.6,189.18L345.67,188.56L345.67,188.56L348.45,186.59L348.45,186.59L349.7,186.32L349.7,186.32L356.93,187.64L356.93,187.64L361.08,183.02L361.08,183.02L363.6,184.87L363.6,184.87L365.59,186.22L365.59,186.22z",
  Hainaut: "M178.07,227.85l6.65,3.1l8.66,-2.06l0.64,9.47l13.31,0.46l2.86,3.03l0,0l1.07,0.34l0,0l9.22,-15.76l6.4,-2.98l0.8,4.45l8.66,-4.17l-0.95,3.07l4.16,7.21l6.96,-0.71l5.49,2.64l7.96,-2.94l3.15,5.73l0,0l-1.15,6.93l4.26,5.82l8.27,0.64l0,0h1.3l0,0l17.37,-3.86l1.71,2.21l5.04,-6.31l0,0v0.71l0,0l2.76,1.72l0,0l2.49,0.34l-3.68,0.98l-0.54,15.09l2.94,6.27l7.18,0.12l7.51,-9.12l4.57,4.68l-0.86,6.97l10.31,2.35l-1.19,6.57l5.1,0.06l5.74,8.19l6.28,-0.06l-0.6,7.36l5.04,-5.65l10.5,-0.82l7.39,3.24l3.85,-1.25l-0.6,9.31l1.75,-2.81l4.98,-0.82l2.14,4.33l12.76,-4.73l0,0l-3.77,11.72l0,0v1.01l0,0l0.76,3.2l6.03,-3.11l-1.56,1.86l2.63,6.1l-5.45,9.81l8.91,5.12l-2.67,6.61l-3.64,1.22l3.97,3.96l-3.17,1.49l-1.71,6.84l2.67,9.36l-14.57,3.25l-2.9,-3.89l-4.1,0.06l-4.57,7.08l-10.87,-1.82l-0.95,4.59l-5.47,1.37l-2.12,4.98l-5.84,-0.55l-8.07,6.55l11.19,8.71l4.22,-4.76l1.89,1.09l0,0h1.91l0,0l2.76,2l0,0l-0.16,1.03l0,0l-0.39,4.97l0,0h-0.68l0,0l0.45,8.61l-6.59,4.73l7.49,13.77l-2.88,4.39l0.93,17.47l3.66,1.27l0.93,14.4l5.85,12.22l-2.31,4.85l0,0l-15.93,-3.44l-8.13,-4.85l-22.2,3.95l-0.56,-4.25l-9.67,-2.59l3.91,-6.52l-5.06,-5.58l4.67,-8.67l6.44,-0.36l7.2,-6.01l-6.42,-10.92l0.54,-8.35l-9.08,-0.15l0.23,2.12l-5.12,-2.18l5.17,-8.96l-0.84,-15.09l4.3,-1l9.4,-11.1l-2.47,-5.86l-5.95,-1l-3.03,-4.19l-2.43,4.31l3.38,5.07l-5.76,0.09l-4.03,-13.81l-4.05,-3.16l-3.85,0.91l-10.08,-14.62l-7.31,4.96l-2.61,-1.64l-1.01,2.07l-0.16,-2.19l-12.76,6.53l-10.1,-7.63l-4.67,-0.15l-2.3,2.71l-1.3,-3.22l-11.71,0.94l-2.68,2.4l-0.82,9.12l-4.03,-2.22l1.71,4.22l-1.89,0.49l-6.71,-8.99l-2.98,-10.61l3.23,-10.13l-2.92,-16.26l-10.13,-12.01l-4.92,1.68l-2.84,-3.02l-13.25,4.03l-0.89,-3.48l4.44,-7.6l-8.58,-2.93l-5.33,8.15l-2,-1.19l-11.87,5.86l-2.84,-3.9l-13.6,-6.22l-2.45,-4.36l0.02,-17.26l-7.72,-19.17l5.06,-5.63l-2.41,-3.92l1.52,-3.8l-13.17,-6.83l1.21,-3.31l-4.2,-6.59l0,0l8.25,-3.13l8.25,4.39l8.5,-1.07l3.64,10.36l6.87,3.68l9.03,-11.28l5.41,-0.8l0,0v-1.2l0,0L178.07,227.85zM61.92,246.39l1.36,-1.78l-5.62,-6.9l2.04,-1.69l-1.85,-2.97l5.19,-3.01l1.71,1.69l0.06,-2.21l3.37,2.67l5.15,-1.26l-0.12,-2.33l7.8,-2.79l-4.61,-6.08l12.39,-5.19l2.8,2.33l-1.21,6.17l4.07,0.86l-2.04,2.15l0,0l-8.21,6.81l-7.26,2.05l1.23,4.05l-7.04,11.7L61.92,246.39z",
  Liege: "M612.63,214.16L614.19,223.18L610.61,230.61L610.61,230.61L616.78,233.89L616.78,233.89L617.73,234.01L617.73,234.01L620.4,231.53L622.87,233.37L622.87,233.37L623.14,234.23L623.14,234.23L630.59,234.23L637.61,244.31L645.33,243.36L649.55,245.57L655,237.78L651.44,231.37L651.44,231.37L656.27,232.75L664.92,229.14L668.68,231.99L676.4,231.47L680.6,234.84L680.21,242.69L681.4,239.77L695.23,241.61L708.15,263.38L705.4,265.92L708.3,269.2L706.98,271L710.99,268.98L724.8,270.97L719.86,282.4L716.32,282.07L706.75,292.03L707.19,296.7L710.63,298.28L709.16,301.43L712.93,303.17L716.45,310.98L725.03,307.96L740.65,312.99L738.67,321.07L744.77,323.47L745.63,329.08L738.78,346.22L751.62,359.84L751.04,363.73L742.87,366.19L742.63,369.32L737.01,363.64L732.13,364.79L726.84,380.46L714.25,383.46L710.71,389.38L706.71,390.08L704.86,394.44L709.53,405.99L700.83,408.2L698.3,414.77L702.37,418.31L699.57,422.04L694.35,420.22L696.8,416.29L694.51,411.02L688.26,409.53L687.97,414.08L684.3,414.98L678.5,411.74L677.22,405.84L677.22,405.84L679.06,398.99L674.98,399.08L674.4,366.1L669.18,364.15L668.4,361.27L645.7,356.07L643.49,362.18L646.99,366.16L642.32,376.24L642.32,376.24L643.35,376.24L643.35,376.24L649.3,376.7L641.66,382.37L635.72,381.31L635,384.31L633.39,381.16L627.11,380.22L618.72,382.16L623.57,370.17L619.03,370.08L614.81,361.6L618.31,353.03L608.63,353.39L609.5,349.74L601.02,348.92L593.26,340.53L582.29,342.53L577.5,332.64L568.96,338L559.72,331.24L556.98,336.42L556.98,336.42L560.05,336.42L560.05,336.42L561.55,339.89L554.49,346.67L554.49,346.67L546.36,343.93L535.82,350.99L532.67,347.07L533.79,342.26L523.66,339.28L521.05,335.29L523.76,328.68L516.4,316.16L509.59,319.33L507.14,314.97L509.13,313.38L503.82,312.47L502.88,308.72L505.33,305.91L500.49,308.47L496.23,305.3L495.82,300.45L484.73,299.66L488.12,297.28L487.03,291.2L483.04,282.71L473.65,273.6L474.66,266.23L474.66,266.23L478.32,259.22L478.12,250.01L481.17,247.46L476.53,241L481.1,238.4L481.78,233.03L481.78,233.03L486.93,236.19L486.45,241.03L491.41,246.27L497.46,245.66L497.46,245.66L510.08,249.73L513.06,247.04L510.57,243.88L511.87,241L522.69,242.99L524.32,240.11L528.21,243.67L531.67,239.65L537.14,243.36L545.8,234.32L553.19,233.74L559.18,242.62L564.88,242.32L567.6,236.65L570.62,241.15L579.76,235.58L580.25,230.42L580.25,230.42L581.35,230.98L581.35,230.98L596.39,225.36L604.85,216.03L611.1,216.46L611.54,214.13L611.54,214.13z",
  Limburg: "M630.3,227.39l4.86,3.77l7.08,-2.61l0.97,3.1l6.89,-4.54l1.34,4.26l0,0l3.56,6.41l-5.45,7.78l-4.22,-2.21l-7.72,0.95l-7.02,-10.08h-7.45l0,0l-0.27,-0.86l0,0l-2.47,-1.84l-2.67,2.48l0,0l-0.95,-0.12l0,0l-6.17,-3.28l0,0l11.07,-0.74l5.58,-6.75L630.3,227.39zM581.9,70.45l4.32,4.06L587,87.66l17.6,7.46l1.26,3.93l20.78,0.43l2.28,9.9l9.1,-4.98l5.89,7.36l-8.81,8.19l4.34,6.18l-7.02,2.01l0.84,9.29l-5.08,-0.37l-3.05,8.8l3.52,3.3l-1.93,7.83l-8.81,10.94l1.5,2.28l4.4,-1.48l1.23,2.99l-6.71,12.56l-4.51,-0.34l-4.12,9.01l-6.54,2.92l0.86,13.55l7.55,4.7l0,0l-0.45,2.33l-6.24,-0.43l-8.46,9.33l-15.04,5.61l0,0l-1.11,-0.55l0,0l-0.49,5.15l-9.14,5.58l-3.02,-4.51l-2.72,5.67l-5.7,0.31l-5.99,-8.89l-7.39,0.58l-8.66,9.04l-5.47,-3.71l-3.46,4.01l-3.89,-3.55l-1.63,2.88L511.87,241l-1.3,2.88l2.49,3.16l-2.98,2.7l-12.63,-4.07l0,0l3.75,-8.12l-3.52,-1.81l1.21,-4.81l0,0l1.62,-2.09l0,0l-1.3,-6.87l8.29,-6.94l0,0l-1.38,-0.06l0,0l-2.98,-1.63l1.19,-10.32l3.56,-9.38l4.32,0.58l1.81,-8.18l-3.68,-3.05l-6.11,0.15l-0.6,-2.55l0,0l-3.97,1.51l0,0l-4.03,2.28l-2.65,-3.82l-2.51,1.45l-4.28,-7.94l6.58,-5.36l0.64,-7.92l8.87,-3.51l-1.75,-7.25l2.14,-1.08l0.41,2.65l5.5,-2.68l-7.84,-7.9l-7.39,0.93l0.64,7.13l-4.9,2.78l-2.74,-3.05l-3.99,1.42l-2.59,-5.98l-5.58,1.42l0,0l5.62,-7.04l0.47,-5.43l16.18,-3.4l6.79,-9.82l5.52,-0.34l0,0l1.58,-0.28l0,0l5.17,-0.65l2.39,-5.32l5.5,2.07l5.41,-5.41l-0.27,-10.21l-9.03,-11.33l0.41,-8.09l4.08,-4.56l0,0l19.1,-0.5l1.93,-3.78l13.91,3.72l13.34,-11.82l5.93,1.55L581.9,70.45z",
  Luxembourg: "M554.49,346.67L561.55,339.89L560.05,336.42L560.05,336.42L556.98,336.42L556.98,336.42L559.72,331.24L568.96,338L577.5,332.64L582.29,342.53L593.26,340.53L601.02,348.92L609.5,349.74L608.63,353.39L618.31,353.03L614.81,361.6L619.03,370.08L623.57,370.17L618.72,382.16L627.11,380.22L633.39,381.16L635,384.31L635.72,381.31L641.66,382.37L649.3,376.7L643.35,376.24L643.35,376.24L642.32,376.24L642.32,376.24L646.99,366.16L643.49,362.18L645.7,356.07L668.4,361.27L669.18,364.15L674.4,366.1L674.98,399.08L679.06,398.99L677.22,405.84L677.22,405.84L665.93,408.96L664.83,421.46L652.43,427.39L650.57,437.7L644.13,443.38L647.08,447.1L645.18,452.51L637.26,457.43L640.65,467.02L634.77,472.33L628.76,473.09L626.23,486.5L620.9,491.68L630.38,497.82L628.53,501.31L624.75,499.78L625.78,504.44L623.14,505.5L625.34,507.36L621.89,510.7L624.58,524.29L631.17,523L639.28,537.44L638.51,544.86L645.96,543.9L649.96,548.91L645.96,558.65L654.79,562.46L653.91,570.43L650.2,571.06L647.8,579.11L642.71,582.85L643.47,585.46L646.99,585.28L647.01,589.37L641.29,595.59L636.52,597.9L625.43,592.93L622.83,599.75L604.11,596.01L597.48,602.83L596.64,609.19L592.87,604.59L585.98,602.41L583.05,606.35L572.13,608.71L569.66,612L565.31,605.85L568.61,603.13L568.36,599.51L563.77,595.65L566.3,591.14L563.01,590.33L561.26,582.67L545.6,572.22L543.62,576.39L538.79,578.12L537.29,572.64L542.2,565.3L531.4,553.76L529.59,552.5L524.96,555.92L517.67,552.8L510.04,553.52L509.24,546.81L502.46,547.5L496,532.67L490.16,533.03L479.25,526.81L476.78,521.46L471.58,521.01L471.58,521.01L475.32,514.31L475.61,505.53L488.88,496.47L486.13,493.58L491.8,487.82L501.07,484.63L496.83,480.41L497.59,473.36L489.48,466.12L479.54,467.33L479.89,462.32L472.54,452.72L475.53,453.17L477.19,448.01L479.97,449.97L485.96,445.32L486.83,438.49L489.46,438.34L487.94,434.98L490.61,424.37L492.61,433.38L516.87,432.32L530.23,427.24L530.23,427.24L530.23,426.03L530.23,426.03L525.02,421.1L533.19,416.62L532.53,413.32L525.41,404.81L526.71,403.08L523.33,402.26L525.74,399.41L518.21,396.14L527.94,392.87L526.69,389.5L532.22,386.74L535.16,388.83L538.68,387.04L554.55,374.3L553.48,365.88L548.85,365.31L545.68,369.04L544.53,366.28L554.59,359.81L552,355.16L555.85,350.26z",
  Namur: "M395.72,297.19L395.16,291.11L400.16,288.76L408.66,291.54L413.42,289.64L410.74,281.61L412.45,277.36L420.27,281.12L421.96,276.84L425.97,276.11L427.84,282.74L433.01,278.86L437.15,282.31L436.4,278.89L458.45,272.5L458.16,270.39L463.75,270.88L468.39,264.76L474.66,266.23L474.66,266.23L473.65,273.6L483.04,282.71L487.03,291.2L488.12,297.28L484.73,299.66L495.82,300.45L496.23,305.3L500.49,308.47L505.33,305.91L502.88,308.72L503.82,312.47L509.13,313.38L507.14,314.97L509.59,319.33L516.4,316.16L523.76,328.68L521.05,335.29L523.66,339.28L533.79,342.26L532.67,347.07L535.82,350.99L546.36,343.93L554.49,346.67L554.49,346.67L555.85,350.26L552,355.16L554.59,359.81L544.53,366.28L545.68,369.04L548.85,365.31L553.48,365.88L554.55,374.3L538.68,387.04L535.16,388.83L532.22,386.74L526.69,389.5L527.94,392.87L518.21,396.14L525.74,399.41L523.33,402.26L526.71,403.08L525.41,404.81L532.53,413.32L533.19,416.62L525.02,421.1L530.23,426.03L530.23,426.03L530.23,427.24L530.23,427.24L516.87,432.32L492.61,433.38L490.61,424.37L487.94,434.98L489.46,438.34L486.83,438.49L485.96,445.32L479.97,449.97L477.19,448.01L475.53,453.17L472.54,452.72L479.89,462.32L479.54,467.33L489.48,466.12L497.59,473.36L496.83,480.41L501.07,484.63L491.8,487.82L486.13,493.58L488.88,496.47L475.61,505.53L475.32,514.31L471.58,521.01L471.58,521.01L463.84,525.34L448.75,523.54L453.28,515.57L447.89,501.4L450.54,501.31L455.89,488.52L447.93,476.86L436.96,473.87L436.69,470.67L437.33,466.54L442.25,462.98L442.54,453.5L446.72,449.76L442.62,441.63L446.12,440.97L448.65,430.57L452.72,434.68L451.88,425.09L457.44,419.95L453.65,415.04L445.63,414.65L443.92,410.35L431.51,419.98L429.06,427.51L418.03,435.56L415.39,441.15L419.18,445.8L416.17,453.44L417.86,462.5L399.46,465.15L388.43,470.43L385.2,476.04L367.51,478.72L367.51,478.72L369.83,473.87L363.97,461.65L363.04,447.25L359.38,445.98L358.45,428.51L361.33,424.13L353.84,410.35L360.43,405.63L359.99,397.02L359.99,397.02L360.67,397.02L360.67,397.02L361.06,392.05L361.06,392.05L361.21,391.02L361.21,391.02L358.45,389.01L358.45,389.01L356.54,389.01L356.54,389.01L354.66,387.92L350.44,392.68L339.25,383.98L347.32,377.42L353.16,377.97L355.28,372.99L360.74,371.63L361.7,367.04L372.57,368.86L377.14,361.78L381.25,361.72L384.15,365.61L398.72,362.36L396.05,353L397.76,346.16L400.93,344.66L396.97,340.71L400.6,339.49L403.27,332.88L394.36,327.77L399.81,317.96L397.18,311.86L398.74,310L392.71,313.11L391.95,309.91L391.95,309.91L391.95,308.9L391.95,308.9z",
  "East Flanders": "M329.29,47.05L335.57,50.65L337.58,62.88L345.69,68.47L339.44,77.74L342.23,92.49L346.47,93.79L345.05,98.31L347.5,99.52L347.63,108.27L344.29,117.33L331.49,120.86L324.39,118.63L317.25,125.03L319.53,137.35L321.8,138.37L320.3,143.8L324.58,146.08L328.47,142.88L329.93,144.82L329.93,144.82L329.21,150.56L326.39,151.76L328.51,155.8L321.78,161.41L321.78,161.41L319.68,161.47L319.68,161.47L314.45,159.56L311.39,166.06L313.98,174.87L313.98,174.87L314.97,177.15L314.97,177.15L310.34,181.55L301.77,177.02L302.72,184.26L298.09,187.12L300.81,190.32L299.7,194.37L291.34,205.99L296.73,207.16L295.42,221.01L286.36,227.14L283.05,224.63L280.62,228.43L273.44,225.27L270.1,230.61L273.99,238.73L268.35,239.68L268.35,239.68L266.63,239.59L266.63,239.59L263.09,238.73L263.09,238.73L259.94,233L251.99,235.94L246.5,233.31L239.54,234.01L235.37,226.8L236.33,223.74L227.67,227.91L226.87,223.46L220.47,226.44L211.25,242.2L211.25,242.2L210.18,241.86L210.18,241.86L207.32,238.82L194.02,238.36L193.38,228.89L184.72,230.95L178.07,227.85L178.07,227.85L190.13,216.09L185.85,210.41L188.28,206.97L176.73,197.02L181.78,187.82L178.11,184.69L172.85,187.76L169.64,185.61L173.09,181.52L171.59,177.79L176.61,177.76L174.16,174.44L178.32,173.76L169.26,169.48L175.11,166.71L171.73,162.02L176.71,154.35L171.63,144.17L171.63,144.17L172.8,144.17L172.8,144.17L175.56,141.61L173.46,139.57L153.21,125.68L161.55,120.12L168.63,106.66L163.73,98.68L158.77,96.98L163.46,93.54L160.04,85.92L166.06,82.98L162.91,71.35L162.91,71.35L172.06,80.62L191.26,80.25L189,67.48L193.32,68.44L198.12,65.09L201.97,67.54L203.73,61.61L224.03,70.95L240,74.86L243.52,77.28L242.65,89.89L255.72,90.91L261.36,87.22L261.27,94.25L269.2,88.15L270.72,90.57L275.13,89.3L286.15,80.34L295.13,80.72L315.87,65.15z",
  "Flemish Brabant": "M474.19,145.65l5.58,-1.42l2.59,5.98l3.99,-1.42l2.74,3.05l4.9,-2.78l-0.64,-7.13l7.39,-0.93l7.84,7.9l-5.5,2.68l-0.41,-2.65l-2.14,1.08l1.75,7.25l-8.87,3.51l-0.64,7.92l-6.58,5.36l4.28,7.94l2.51,-1.45l2.65,3.82l4.03,-2.28l0,0l3.97,-1.51l0,0l0.6,2.55l6.11,-0.15l3.68,3.05l-1.81,8.18l-4.32,-0.58l-3.56,9.38l-1.19,10.32l2.98,1.63l0,0l1.38,0.06l0,0l-8.29,6.94l1.3,6.87l0,0l-1.62,2.09l0,0l-1.21,4.81l3.52,1.81l-3.75,8.12l0,0l-6.05,0.61l-4.96,-5.24l0.49,-4.84l-5.16,-3.16l0,0l-7.29,-6.07l-11.05,8.25l-3.64,-2.02l0.02,-5.83l0,0h-1.48l0,0l-12.27,1.75l-0.04,-3.93l-4.42,-0.28l-4.16,-6.63l-6.11,-2.55l-6.87,1.41l-1.85,4.02l-0.78,-2.09l-3.64,1.96l-9.76,-3.01l-1.01,8.22l3.5,5.12l-4.12,3.99l-5.89,0.46l-1.67,-6.99l-4.05,5.18l-9.53,2.45l-0.14,3.46l-6.36,-4.51l0.18,-4.02l-23.46,8.19l0,0v3.83l0,0l-4.18,-0.09l-3.25,-5.33l-2.02,1.9l2.04,3.59l-4.07,-1.07l-1.56,6.31h-8.62l-2.9,3.22l-7.72,-6l-5.51,0.61l-4.77,-7.26l-10.68,7.29l0,0l-2.76,-1.72l0,0v-0.71l0,0l-5.04,6.31l-1.71,-2.21l-17.37,3.86l0,0h-1.3l0,0l-8.27,-0.64l-4.26,-5.82l1.15,-6.93l0,0l3.54,0.86l0,0l1.71,0.09l0,0l5.64,-0.95l-3.89,-8.12l3.35,-5.34l7.18,3.16l2.43,-3.8l3.31,2.52l9.06,-6.14l1.3,-13.85l-5.39,-1.17l8.36,-11.62l1.11,-4.06l-2.72,-3.2l4.63,-2.86l-0.95,-7.23l8.58,4.52l4.63,-4.4l0,0l-0.99,-2.28l0,0l-2.59,-8.81l3.05,-6.5l5.23,1.91l0,0l2.1,-0.06l0,0l6.73,-5.61l-2.12,-4.04l2.82,-1.2l0.72,-5.74l0,0l7.96,-1.76l12.88,5l-0.64,3.24l7.12,-4.35l-1.42,5.06l3.19,1.05l1.11,4.66l11.22,-3.11l5.21,4.35l2.04,-5.27l7.76,4.87l3.93,-3.64l6.36,4.16l3.15,-0.65l1.17,-5.4l15.29,-4.41l4.49,3.18l-1.93,4.87l7,-8.42l5.39,0.49l5.99,-4.41l5.06,8.57l15.62,-3.27l6.32,-4.66l0,0h0.91l0,0l6.05,-2.68L474.19,145.65zM349.7,186.32L349.7,186.32l-1.25,0.28l0,0l-2.78,1.97l0,0l-1.07,0.62l0,0l-3.35,3.11l0,0l-3.27,4.83l0.51,9.43l-5,0.25l-0.56,2.76l0,0l-1.96,2.55l0,0l0.12,0.37l0,0l0.49,-0.49l0,0l6.59,3.32l4.53,-1.35l5.43,11.36l9.88,3.31l15.21,-7.09l0,0l2.53,-1.07l0,0l2.76,-0.25l-3.7,-3.99l0,0l-3.09,-0.34l0,0l-0.76,-2.18l4.75,-3.04l-2.94,-9l-7.26,-4.83l2.86,-3.44l-1.38,-5.2l0,0l-1.4,-1.97l0,0l-1.98,-1.35l0,0l-2.53,-1.85l0,0l-4.14,4.61L349.7,186.32z",
  "West Flanders": "M160.4,42.39L163.5,52.98L158.6,58.91L161.92,62.95L160.19,64.16L162.91,71.35L162.91,71.35L166.06,82.98L160.04,85.92L163.46,93.54L158.77,96.98L163.73,98.68L168.63,106.66L161.55,120.12L153.21,125.68L173.46,139.57L175.56,141.61L172.8,144.17L172.8,144.17L171.63,144.17L171.63,144.17L176.71,154.35L171.73,162.02L175.11,166.71L169.26,169.48L178.32,173.76L174.16,174.44L176.61,177.76L171.59,177.79L173.09,181.52L169.64,185.61L172.85,187.76L178.11,184.69L181.78,187.82L176.73,197.02L188.28,206.97L185.85,210.41L190.13,216.09L178.07,227.85L178.07,227.85L173.07,232.33L173.07,232.33L173.07,233.52L173.07,233.52L167.66,234.32L158.63,245.6L151.77,241.92L148.13,231.56L139.63,232.63L131.38,228.25L123.13,231.37L123.13,231.37L117.84,220.98L113.06,222.08L110.35,219.78L104.83,226.44L100.28,224.01L95.2,227.39L92.42,226.07L92.42,226.07L94.46,223.92L90.4,223.06L91.6,216.89L88.8,214.56L76.41,219.75L81.02,225.82L73.22,228.61L73.34,230.95L68.18,232.2L64.82,229.53L64.76,231.74L63.05,230.06L57.85,233.06L59.7,236.04L57.66,237.72L63.28,244.62L61.92,246.39L61.92,246.39L58.86,241.64L53.22,243.79L47.74,240.45L45.95,232.94L35.07,220.15L34.84,214.74L26.07,213.73L24.28,211.15L17.8,214.1L14.03,203.13L10.85,202.67L13.31,197.91L12.66,187.76L12.22,183.06L9.05,181.12L17.14,172.59L12.33,159.37L5.84,155.58L0,128.86L42.87,104.87L103.33,62.85L124.26,53.82L121.52,47.27L124.77,43.66L122.45,46.21L125.49,50L128.25,48.23L124.85,52.52L126.81,50.9L127.12,54.29L128.46,50.47L130.37,51.74L129.07,49.63L132.33,50.47L130.93,45.75L129.44,46.71L131.77,44.53L127.18,43.41L132,44.6L132.98,50.62z"
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

// src/Belgium.tsx
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
var Belgium = ({
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
      BelgiumSingle,
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
      BelgiumMultiple,
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
var BelgiumSingle = ({
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
var BelgiumMultiple = ({
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
var Belgium_default = Belgium;

// src/index.ts
var src_default = Belgium_default;
export {
  src_default as default
};
