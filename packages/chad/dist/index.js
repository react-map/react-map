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

// src/Chad.tsx
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
  "Batha",
  "Bahr el Gazel",
  "Borkou",
  "Chari-Baguirmi",
  "Ennedi",
  "Gu\xE9ra",
  "Hadjer Lamis",
  "Kanem",
  "Lac",
  "Logone-Occidental",
  "Logone-Oriental",
  "Mandoul",
  "Moyen-Chari",
  "Mayo-K\xE9bbi-Est",
  "Mayo-K\xE9bbi-Ouest",
  "Ville de Ndjamena",
  "Ouadda\xEF",
  "Salamat",
  "Sila",
  "Tandjil\xE9",
  "Tibesti",
  "Wadi Fira"
];
var drawPath = {
  Batha: "M314.03,389.17L314.94,470.77L314.94,470.77L314.65,476.94L324.78,483.15L326.07,486.77L324.73,493.71L329.37,503.09L329.09,520.76L329.09,520.76L329.04,522.66L327.79,523.58L314.12,526.8L314.12,526.8L301.31,522.12L273.73,537.71L272.97,538.88L239.08,538.64L220.91,548.66L219.48,550.32L210.73,550.61L200.65,558.73L200.36,559.85L197.63,560.67L195.67,562.62L197.16,566.21L197.16,566.21L192.66,564.61L189.89,564.75L188.22,563.35L187.12,559.17L184.82,557.71L183.39,555.47L182.58,548.61L180.71,547.93L175.74,542.68L172.97,534.21L167.33,530.6L166.56,529.48L168.43,526.7L174.78,521.39L176.27,518.81L176.27,518.81L180.09,513.39L179.76,502.8L181.52,491.32L196.58,486.53L218.81,402.29L218.81,402.29L227.75,407.85L232.67,409.58L240.13,410.51L247.49,410.27L254.66,408.3L260.63,405.29L265.46,401.69L271.63,394.74L274.65,389.46L276.27,384.87L277.61,375.97L277.27,371.63L281.14,371.04L283.39,372.42L287.26,380.38L290.89,384.18L299.97,385.66L305.52,387.64z",
  "Bahr el Gazel": "M218.81,402.29L196.58,486.53L181.52,491.32L179.76,502.8L180.09,513.39L176.27,518.81L176.27,518.81L169.72,515.98L168.43,516.95L163.79,518.32L161.21,517L157.19,519.25L146.92,520.22L143.14,521.98L138.03,521.15L131.05,521.68L129.33,522.51L120.67,521.49L119.14,517.68L116.47,515.2L116.47,515.2L117.38,513.54L117.62,501.68L114.84,493.66L115.61,488.09L115.23,487.16L109.97,486.63L109.39,487.55L103.9,487.75L101.75,487.06L102.56,473.22L106.96,471.55L111.4,467.68L125.65,451.75L127.61,448.07L129.47,433.88L145.77,377.71L153.61,364.46L153.61,364.46L208.82,388.97L214.79,398.24z",
  Borkou: "M267.56,74.81L360.14,123.6L360.14,123.6L316.42,218.21L321.87,239.76L336.98,280.35L330.38,341.32L351.84,389.06L351.84,389.06L349.84,389.36L343.43,394.25L340.75,395.28L335.73,393.46L327.22,395.33L323.97,394.69L317.33,390.3L314.03,389.17L314.03,389.17L305.52,387.64L299.97,385.66L290.89,384.18L287.26,380.38L283.39,372.42L281.14,371.04L277.27,371.63L277.61,375.97L276.27,384.87L274.65,389.46L271.63,394.74L265.46,401.69L260.63,405.29L254.66,408.3L247.49,410.27L240.13,410.51L232.67,409.58L227.75,407.85L218.81,402.29L218.81,402.29L214.79,398.24L208.82,388.97L153.61,364.46L153.61,364.46L94.63,334.66L94.63,334.66L97.13,331.95L97.52,323.12L97.52,323.12L180.09,173.86L187.17,159.59L187.98,151.78L189.7,148.43L191.61,147.52L196.92,150.77L196.92,153.56L193.52,157.11L193.33,160.05L194.43,164L196.39,166.18L198.4,166.83L199.83,170.07L203.18,172.35L204.37,176.3L207.86,179.58L209.92,182.67L212.69,181.15L215.28,176.39L215.37,173.41L213.84,166.37L212.41,163.64L212.89,159.84L214.13,158.07L211.31,149.49L207.58,145.69L206.67,141.17L207.06,138.98L209.16,136.09L214.42,132.43L219.2,124.49L224.78,121.44L228.46,120.52L234.34,120.22L235.87,118.79L240.46,117.31L243.86,114.25L245.92,110.78L252.23,105.93L252.9,103.07L253.09,94.95L254.19,91.78L253.76,89.48L257.67,82.99L258.82,82.99L260.16,80.63L260.21,78.01L262.93,75.96z",
  "Chari-Baguirmi": "M75.31,561.35L85.83,558.73L88.98,556.78L90.8,554.65L97.16,561.5L99.93,559.02L105.67,555.86L119.62,555.86L123.06,553.72L125.07,551.29L152.6,561.16L155.43,565.82L154.61,572.52L156.33,575.58L158.53,576.94L160.25,585.58L161.78,588.01L164.08,587.62L169.48,588.39L172.78,590.38L175.21,593.34L184.58,597.9L184.58,597.9L183.15,609.62L185.78,623.89L185.92,630.66L185.4,636.66L184.2,641.35L186.88,643.13L190.03,643.86L194.53,647.29L194.53,647.29L191.95,660.75L186.78,677.44L186.78,677.44L180.81,676.76L177.56,675.27L176.41,672.91L170.48,671.7L165.8,671.7L165.18,670.45L163.65,669.53L159.49,668.37L157.86,668.57L156.05,666.49L152.41,665.63L150.36,660.8L150.55,657.76L149.54,657.67L148.69,656.27L143.86,659.4L130.04,658.96L130.04,658.96L129.09,656.27L126.94,653.9L126.55,646.61L127.89,634.92L126.36,632.02L123.06,632.74L120.58,631.44L116.32,631.49L113.12,630.66L108.58,629.21L103.99,625.64L102.27,625.49L98.97,623.65L98.16,621.67L93.91,617.8L91.95,610.49L84.01,610.63L74.57,616.29L74.57,616.29L74.84,615.25L74.17,614.26L74.86,612.46L74.26,610.11L74.96,609.53L74.24,607.06L76.31,602.94L75.78,600.9L79.78,594.73L79.5,593.41L77.78,592.55L77.87,591.17L76.88,589.82L76.11,586.32L76.48,585.38L77.86,585.41L76.81,583.86L78.66,582.3L77.55,580.9L77.51,579.73L76.71,579.02L76.45,579.94L75.58,579.48L74.98,577.2L76.04,575.79L75.53,573.73L76.58,573.74L77.12,572.79L77.12,572.79L79.52,573.11L80.62,568.93L75.65,562.96z",
  Ennedi: "M503.18,376.42L503.26,391L487.02,388.39L483.01,388.58L475.28,391.58L472.23,391.91L461.66,390.72L461.66,390.72L457.43,386.35L454.99,385.27L450.59,386.35L448.4,386.01L445.72,384.23L442.66,385.41L436.35,386.45L433.82,385.71L433.53,382.75L432.62,381.86L427.36,380.43L423.06,381.91L420.81,381.22L417.76,378.99L416.32,379.69L413.55,378.1L406.19,380.48L395.43,378.3L391.9,379.83L376.93,383.44L372.97,382.65L369.86,380.67L366.18,379.64L361.49,382.4L360.2,382.55L356.05,386.69L351.84,389.06L351.84,389.06L330.38,341.32L336.98,280.35L321.87,239.76L316.42,218.21L360.14,123.6L360.14,123.6L503.18,201.38z",
  Gu\u00E9ra: "M314.12,526.8L322.97,533.38L323.64,535.13L321.72,536.84L320.29,536.93L317.42,542.43L319.33,546.47L315.89,548.27L312.02,553.57L309.1,560.33L306.67,568.45L307.48,570.34L307.48,570.34L291.9,568.25L286.4,566.31L279.13,573.16L280.47,579.32L274.45,589.85L268.38,591.69L266.8,587.37L259.49,587.23L258.15,597.65L259.49,604.73L262.59,605.6L264.22,607.54L266.85,608.89L283.53,615.72L287.07,618.43L297.35,620.7L297.92,623.55L299.4,625.05L297.97,626.89L298.88,634.43L297.77,640.67L297.77,640.67L293.76,643.66L292.09,645.98L289.65,646.13L287.88,645.11L284.73,646.42L282.86,648.54L282.43,650.62L280.62,652.45L281.14,654.62L277.75,658.24L274.45,660.03L274.11,662.01L271.87,661.57L270.77,662.83L267.9,669.63L255.81,669.63L254.32,674.88L251.6,674.98L246.58,672.96L247.06,667.84L240.08,660.08L234.58,657.13L232.67,657.47L230.19,656.41L224.21,652.36L221.34,651.44L219.57,652.16L214.55,649.89L209.87,645.06L194.53,647.29L194.53,647.29L190.03,643.86L186.88,643.13L184.2,641.35L185.4,636.66L185.92,630.66L185.78,623.89L183.15,609.62L184.58,597.9L184.58,597.9L188.89,592.37L194.62,588.2L201.08,587.81L198.88,582.18L194.62,576.6L194.48,574.71L197.16,566.21L197.16,566.21L195.67,562.62L197.63,560.67L200.36,559.85L200.65,558.73L210.73,550.61L219.48,550.32L220.91,548.66L239.08,538.64L272.97,538.88L273.73,537.71L301.31,522.12z",
  "Hadjer Lamis": "M52.36,528.91L53.86,529.63L57.58,527.33L60.81,528.15L64.36,525.68L67.1,527.49L69.2,527L69.69,526.18L71.46,525.68L72.42,523.85L74.21,525.19L76.15,525.19L77.6,524.2L78.57,518.27L80.18,517.28L77.8,512.95L79.9,512.76L82.05,513.93L82.05,513.93L82.05,513.93L82.05,513.93L82.91,516.03L85.4,519L86.83,516.81L87.79,516.37L88.84,517L92.04,514.42L91.04,513.15L87.19,511.15L87.19,511.15L87.19,511.15L87.19,511.15L87.61,508.38L86.99,505.06L86.99,505.06L86.99,505.06L86.99,505.06L91.13,504.46L93.43,508.17L100.5,511.59L100.5,511.59L109.06,515.68L114.17,516.12L116.47,515.2L116.47,515.2L119.14,517.68L120.67,521.49L129.33,522.51L131.05,521.68L138.03,521.15L143.14,521.98L146.92,520.22L157.19,519.25L161.21,517L163.79,518.32L168.43,516.95L169.72,515.98L176.27,518.81L176.27,518.81L174.78,521.39L168.43,526.7L166.56,529.48L167.33,530.6L172.97,534.21L175.74,542.68L180.71,547.93L182.58,548.61L183.39,555.47L184.82,557.71L187.12,559.17L188.22,563.35L189.89,564.75L192.66,564.61L197.16,566.21L197.16,566.21L194.48,574.71L194.62,576.6L198.88,582.18L201.08,587.81L194.62,588.2L188.89,592.37L184.58,597.9L184.58,597.9L175.21,593.34L172.78,590.38L169.48,588.39L164.08,587.62L161.78,588.01L160.25,585.58L158.53,576.94L156.33,575.58L154.61,572.52L155.43,565.82L152.6,561.16L125.07,551.29L123.06,553.72L119.62,555.86L105.67,555.86L99.93,559.02L97.16,561.5L90.8,554.65L88.98,556.78L85.83,558.73L75.31,561.35L75.31,561.35L71.1,560.43L68.48,561.34L68.48,561.34L68.69,553.86L67.14,549.72L66.12,550.52L65.75,550.1L66.02,545.55L64.92,541.73L61.75,541.39L60.91,538.91L59.75,540.32L59.24,540.13L59.43,537.36L56.85,537.26L54.88,536.38L54.88,534.82L53.17,535.94L52.73,534.66L51.54,534.07z",
  Kanem: "M153.61,364.46L145.77,377.71L129.47,433.88L127.61,448.07L125.65,451.75L111.4,467.68L106.96,471.55L102.56,473.22L101.75,487.06L103.9,487.75L109.39,487.55L109.97,486.63L115.23,487.16L115.61,488.09L114.84,493.66L117.62,501.68L117.38,513.54L116.47,515.2L116.47,515.2L114.17,516.12L109.06,515.68L100.5,511.59L100.5,511.59L99.4,505.97L96.92,501.34L91.75,487.41L82.34,488.58L71.06,491.17L65.85,490.83L63.08,492.64L56.72,480.85L51.65,474.98L48.54,470.23L42.14,468.66L40.7,465.82L37.12,464.99L35.49,461.71L32.77,460.82L32.05,457.44L28.85,454.4L26.46,454.21L25.12,451.95L15.9,451.9L14.46,449.99L8.16,449.5L8.16,449.5L10.64,447.77L10.47,444.74L9.74,443.58L13.01,440.55L14.11,440.86L16.08,439.4L15.12,432.45L18.58,424.18L23.74,418.02L43.56,389.68L94.63,334.66L94.63,334.66z",
  Lac: "M51.56,526.03L47.15,520L29.13,519.76L7.85,489.39L0,453.09L1.26,451.37L8.16,449.5L8.16,449.5L14.46,449.99L15.9,451.9L25.12,451.95L26.46,454.21L28.85,454.4L32.05,457.44L32.77,460.82L35.49,461.71L37.12,464.99L40.7,465.82L42.14,468.66L48.54,470.23L51.65,474.98L56.72,480.85L63.08,492.64L65.85,490.83L71.06,491.17L82.34,488.58L91.75,487.41L96.92,501.34L99.4,505.97L100.5,511.59L100.5,511.59L93.43,508.17L91.13,504.46L86.99,505.06L87.61,508.38L86.84,510.76L87.93,511.98L91.04,513.15L92.04,514.42L88.84,517L87.79,516.37L86.83,516.81L85.4,519L82.91,516.03L82.05,513.93L79.9,512.76L77.8,512.95L80.18,517.28L78.57,518.27L77.6,524.2L76.15,525.19L74.21,525.19L72.42,523.85L71.46,525.68L69.69,526.18L69.2,527L67.1,527.49L64.36,525.68L60.81,528.15L57.58,527.33L53.86,529.63L52.36,528.91z",
  "Logone-Occidental": "M141.18,711.53L144.86,717.44L146.25,717.73L146.82,719.56L147.87,719.17L148.83,720.81L149.16,722.06L145.67,727.92L144.34,729.41L140.18,730.8L137.55,733.78L133.82,733.54L126.36,736.04L124.45,737.91L120.58,739.5L120.29,740.65L114.17,744.34L111.35,749.19L105.71,749.38L101.98,751.5L98.26,752.12L98.64,751.3L98.11,750.63L96.39,751.3L96.3,749.48L94.72,748.33L94.29,747.18L91.28,747.08L89.32,745.88L85.99,742.09L85.99,742.09L85.54,735.89L86.21,733.44L86.93,731.57L90.03,728.78L90.03,723.45L90.42,720.23L91.8,717.78L91.47,715.61L94.05,714.27L94.05,714.27L100.36,716.09L104.14,714.27L112.12,715.32L117.38,714.27L118.81,711.77L120.01,711L122.87,711.05L128.27,713.4L129.71,712.49L131,709.79L134.58,708.5L138.17,705.42L140.42,708.5z",
  "Logone-Oriental": "M141.18,711.53L146.73,709.84L149.26,710.03L152.03,712.1L153.47,711.77L157.67,713.79L167.9,714.8L174.98,713.45L174.98,713.45L175.74,718.59L175.36,728.64L170.77,734.93L174.78,739.06L182.67,751.02L178.75,757.69L173.73,758.93L182.14,774.63L182.14,774.63L181.22,775.56L181.13,777.35L179.69,776.56L179.02,778.32L176.49,779.46L176.9,780.15L176.24,781.19L174.89,781.36L174.1,780.19L172.93,779.97L172.9,781.49L170.92,781.74L170.5,782.71L166.51,782.67L165.15,783.3L165.08,784.1L163.83,783.6L163.58,785.61L164.17,786.39L162.55,786.48L162.25,787.33L161.11,787.75L159.72,787.47L158.72,785.09L155.51,781.98L153.76,781.95L152.66,781.1L152.7,777.77L149.19,776.3L149.35,774.57L148.67,773.18L149.26,770.96L145.57,772.61L144.15,775.27L142.75,775.53L142.53,774.69L141.75,774.56L140.49,776.34L141.15,777.36L140.72,778.27L141.35,778.7L139.54,780.98L135.18,781.91L132.02,784.07L129.64,783.7L128.59,784.65L123.93,785.25L123.13,785.79L122.63,787.56L119.57,789.98L111.67,792L108.48,790.21L107.77,788.26L99.09,788.64L97.23,787.86L100.4,784.84L101.56,780.07L101.52,776.36L97.38,774.99L94.63,770.26L91.66,763.25L92,760.99L86.66,750.38L84.72,742.66L84.72,742.66L85.99,742.09L85.99,742.09L89.32,745.88L91.28,747.08L94.29,747.18L94.72,748.33L96.3,749.48L96.39,751.3L98.11,750.63L98.64,751.3L98.26,752.12L101.98,751.5L105.71,749.38L111.35,749.19L114.17,744.34L120.29,740.65L120.58,739.5L124.45,737.91L126.36,736.04L133.82,733.54L137.55,733.78L140.18,730.8L144.34,729.41L145.67,727.92L149.16,722.06L148.83,720.81L147.87,719.17L146.82,719.56L146.25,717.73L144.86,717.44z",
  Mandoul: "M195.05,688.47L198.23,691.08L200.4,695.61L205.04,696.22L208.03,702.99L216.91,707.63L225.93,708.73L221.58,715.88L217.6,717.32L216.17,719.17L217.28,724.7L219.31,727.53L218.71,733.52L219.42,736.45L220.11,738.08L221.96,739.02L222.49,742.72L224.87,748.91L224.49,755.23L226.6,764.29L226.6,764.29L217.9,764.77L212.63,767.2L203.62,766.25L202.19,766.68L200.68,766.04L199.59,767.82L198.04,768.72L197.08,768.44L195.79,769.62L194.73,768.99L193.19,771.51L190.93,770.3L189.88,771.63L189.27,771.1L188.56,771.38L188.11,771.63L187.83,772.74L186.03,772.47L184.48,773.82L183.33,773.48L182.96,774.54L182.14,774.63L182.14,774.63L173.73,758.93L178.75,757.69L182.67,751.02L174.78,739.06L170.77,734.93L175.36,728.64L175.74,718.59L174.98,713.45L174.98,713.45L179.18,709.22L172.16,704.65L179.47,699.35L179.47,694.59L180.86,693.53L178.9,690.98L178.56,689.48L180.57,688.52L185.16,688.38L191.71,686.35L192.81,687.56z",
  "Moyen-Chari": "M297.77,640.67L294.52,655.11L297.25,656.17L296.72,658.77L295.15,661.53L295.43,664.37L293.47,665.82L296.72,670.88L311.27,712.62L311.27,712.62L309.08,713.01L308.49,714.28L305.5,714.1L304.11,715.11L303.49,714.11L301.46,714.38L296.29,716.2L292.95,716.27L291.78,715.28L289.17,716.42L288.4,715.56L287.08,716.51L285.16,715.7L278.62,716.82L274.61,715.69L270.63,716.98L268.55,716.22L266.97,717.41L263.82,718.2L262.28,720.68L260.47,720.76L259.65,722.11L258.87,721.96L257.6,724.29L258.17,724.84L259.69,724.56L259.86,726.48L261.89,726.37L262.28,727.39L264.86,728.46L266.17,730.3L269.2,731.68L270.01,733L267.32,734.63L266.19,738.62L265.26,739.91L263.67,740.6L264.04,741.23L262.76,742.94L260.43,744.86L260.54,746.49L259.37,747.75L258.68,747.65L258.25,748.85L257.02,748.56L257.05,750.56L254.82,752.71L248.24,755.34L246.39,758.44L246.82,760.85L245.91,762.7L226.6,764.29L226.6,764.29L224.49,755.23L224.87,748.91L222.49,742.72L221.96,739.02L220.11,738.08L219.42,736.45L218.71,733.52L219.31,727.53L217.28,724.7L216.17,719.17L217.6,717.32L221.58,715.88L225.93,708.73L216.91,707.63L208.03,702.99L205.04,696.22L200.4,695.61L198.23,691.08L195.05,688.47L195.05,688.47L196.82,684.81L190.61,679.41L186.78,677.44L186.78,677.44L191.95,660.75L194.53,647.29L194.53,647.29L209.87,645.06L214.55,649.89L219.57,652.16L221.34,651.44L224.21,652.36L230.19,656.41L232.67,657.47L234.58,657.13L240.08,660.08L247.06,667.84L246.58,672.96L251.6,674.98L254.32,674.88L255.81,669.63L267.9,669.63L270.77,662.83L271.87,661.57L274.11,662.01L274.45,660.03L277.75,658.24L281.14,654.62L280.62,652.45L282.43,650.62L282.86,648.54L284.73,646.42L287.88,645.11L289.65,646.13L292.09,645.98L293.76,643.66z",
  "Mayo-K\xE9bbi-Est": "M74.57,616.29L84.01,610.63L91.95,610.49L93.91,617.8L98.16,621.67L98.97,623.65L102.27,625.49L103.99,625.64L108.58,629.21L113.12,630.66L116.32,631.49L120.58,631.44L123.06,632.74L126.36,632.02L127.89,634.92L126.55,646.61L126.94,653.9L129.09,656.27L130.04,658.96L130.04,658.96L132.15,660.37L132.39,664.9L133.34,667.56L127.37,678.19L122.32,683.42L119.07,685.33L116.68,685.64L115.08,683.44L113.19,682.7L110.92,682.32L109.06,683.12L107.72,684.67L107.1,688.23L105.57,689L104.76,692.95L100.02,697.04L96.1,701.86L93.09,707.1L93.09,707.1L85.88,704.15L79.55,700.01L77.24,696.1L76.83,691.13L74.21,688.35L75.24,686.57L74.6,685.36L70.58,683.59L66.3,684.77L60.97,684.97L60.3,677.74L59.64,676.82L60.62,673.1L59.97,671.41L59.97,671.41L65.13,672.69L69.1,670.02L72.28,669L77.82,670.79L79.32,669.31L83.13,670.76L84.25,669.22L93.76,672.27L105.65,669.77L103.99,667.8L98.28,664.48L97.54,664.68L96.21,663.31L94.55,659.99L91.78,656.94L89.97,655.02L87.8,654.22L86.48,651.43L86.51,649.68L84.49,646.33L79.94,643.07L80.36,637.84L76.29,630.16L77.37,625.95L76.93,623.27L75.36,620.97L75.12,616.78z",
  "Mayo-K\xE9bbi-Ouest": "M50.17,668.84L59.97,671.41L59.97,671.41L60.62,673.1L59.64,676.82L60.3,677.74L60.97,684.97L66.3,684.77L70.58,683.59L74.6,685.36L75.24,686.57L74.21,688.35L76.83,691.13L77.24,696.1L79.55,700.01L85.88,704.15L93.09,707.1L93.09,707.1L94.05,714.27L94.05,714.27L91.47,715.61L91.8,717.78L90.42,720.23L90.03,723.45L90.03,728.78L86.93,731.57L86.21,733.44L85.54,735.89L85.99,742.09L85.99,742.09L84.72,742.66L84.72,742.66L82.89,735.9L78.08,732.9L72.41,732.7L72.36,730.53L68.7,728.94L69.4,728.3L68.09,726.38L66.93,726.04L64.51,726.75L61.19,725.84L51.92,716.63L49.54,715.64L48.33,713.8L48.75,712.78L43.37,707.73L43.61,703.32L42.11,702.4L40.34,699.56L37.14,698.37L35.92,696.25L34.57,695.55L34.3,694.2L31.66,692.75L26.22,686.06L27.01,681.7L33.15,674.65L35.18,669.55L39.89,668.87z",
  "Ville de Ndjamena": "M68.48,561.34L71.1,560.43L75.31,561.35L75.31,561.35L75.65,562.96L80.62,568.93L79.52,573.11L77.12,572.79L77.12,572.79L74.87,571.11L75.89,570.26L74.63,568.93L74.79,567.61L73.42,566.82L71.4,567.81L67.99,564.89L67.83,564.13L68.67,563.45z",
  Ouadda\u00EF: "M314.94,470.77L323.49,460.14L329.04,455.87L335.2,456.36L340.94,454.5L348.64,456.8L352.41,459.11L360.01,467.29L364.94,468.47L368.09,472.63L371.87,472.88L378.03,469.35L380.66,468.61L391.85,470.28L411.83,476.35L415.8,478.8L417.59,478.9L417.59,478.9L413.41,483.47L411.91,486.25L413.5,487.87L413.13,490.19L414.56,493.29L418.18,496.84L418.14,501.59L419.43,503.71L420.89,504.58L421.16,506.57L416.38,511.68L414.01,515.45L408.22,516.99L407.73,518.63L404.02,521.35L404.27,522.74L402.73,524.52L400.57,529.4L399.89,533.3L399.89,533.3L395.29,532.11L392.33,530.41L382.91,534.45L376.89,540.83L372.63,539.61L365.08,540.73L363.93,541.41L356.52,538.54L356.95,533.38L355.71,530.8L348.49,529.09L348.92,526.95L348.44,522.8L337.78,523.05L329.09,520.76L329.09,520.76L329.37,503.09L324.73,493.71L326.07,486.77L324.78,483.15L314.65,476.94z",
  Salamat: "M307.48,570.34L308.2,574.22L312.5,573.16L312.88,570.97L323.3,570.24L324.69,570.87L326.46,570.58L358.53,586.11L364.51,589.75L364.36,594.31L405.14,586.65L408.53,588.88L415.36,590.04L429.8,620.98L429.8,620.98L427.86,622.17L425.58,622.23L416.92,625.17L414.83,626.75L411.12,625.79L408.36,626.31L406.74,627.35L405.67,627.61L403.8,626.95L401.88,627.04L401.13,628.17L399.57,628.51L397.46,630.68L397.47,636.73L396.03,638.05L394.84,637.48L394.81,642.3L394.07,644.54L396.63,649.18L395.29,650.63L395.18,651.95L394.34,652.3L395.02,653.6L394.58,654.49L393.5,655.72L392.11,655.63L392.4,656.3L391.35,656.84L391.72,657.87L389.52,657.89L387.91,658.85L385.43,658.1L382.15,661.71L381.2,663.33L381.45,665.04L380.87,665.15L380.43,666.7L379.26,667.07L378.18,669.45L377.1,669.58L376.05,670.8L374.57,669.53L374.01,670.59L371.92,669.51L369.46,672.39L369.28,674.1L366.13,676.38L365.28,679.08L362.8,680.36L361.23,679.94L361.23,682.14L359.53,681.24L359.98,683.24L358.23,683.4L359.71,684.24L358.89,685.18L359.47,686.13L358.2,686.28L359.2,687.33L357.45,687.54L357.46,689.87L356.31,689.72L355.72,691.92L353.78,692.02L353.39,693.75L351.5,694.93L351.52,696.49L350.13,695.87L348.69,696.6L348.34,697.9L343.85,698.04L342.93,700.74L341.78,701.1L342.46,701.91L340.86,701.98L339.74,700.71L339.09,701.32L337.24,700.99L337.02,702.4L335.67,702.43L335.78,704.11L333.77,708.86L332.73,709.8L326.47,711.36L324.52,711.21L322.55,709.9L318.22,710.56L316.82,709.67L315.87,710.79L314.49,710.35L312.57,711.14L312.4,712.16L311.87,711.6L311.27,712.62L311.27,712.62L296.72,670.88L293.47,665.82L295.43,664.37L295.15,661.53L296.72,658.77L297.25,656.17L294.52,655.11L297.77,640.67L297.77,640.67L298.88,634.43L297.97,626.89L299.4,625.05L297.92,623.55L297.35,620.7L287.07,618.43L283.53,615.72L266.85,608.89L264.22,607.54L262.59,605.6L259.49,604.73L258.15,597.65L259.49,587.23L266.8,587.37L268.38,591.69L274.45,589.85L280.47,579.32L279.13,573.16L286.4,566.31L291.9,568.25z",
  Sila: "M329.09,520.76L337.78,523.05L348.44,522.8L348.92,526.95L348.49,529.09L355.71,530.8L356.95,533.38L356.52,538.54L363.93,541.41L365.08,540.73L372.63,539.61L376.89,540.83L382.91,534.45L392.33,530.41L395.29,532.11L399.89,533.3L399.89,533.3L401.16,537.3L404.76,541.39L409.14,541.3L414.09,539.91L416.9,537.91L417.03,535.8L424.76,540.13L429.48,541.94L427.66,547.54L425.34,551.22L427.74,553.44L428.79,559.07L430.81,563.43L430.93,568.38L430.11,570.84L429.43,571L431.08,571.29L433.93,569.71L437.93,569.47L438.12,569.96L434.09,587.13L434.63,590.69L439.23,595.79L443.63,597.74L445.23,599.53L445.29,601.23L452.76,600.55L453.14,605.65L454.52,606.41L454.71,611.09L449.7,624.09L444.32,623.45L443.17,622.15L436.84,620.89L434.76,621.51L432.46,620.38L429.8,620.98L429.8,620.98L415.36,590.04L408.53,588.88L405.14,586.65L364.36,594.31L364.51,589.75L358.53,586.11L326.46,570.58L324.69,570.87L323.3,570.24L312.88,570.97L312.5,573.16L308.2,574.22L307.48,570.34L307.48,570.34L306.67,568.45L309.1,560.33L312.02,553.57L315.89,548.27L319.33,546.47L317.42,542.43L320.29,536.93L321.72,536.84L323.64,535.13L322.97,533.38L314.12,526.8L314.12,526.8L327.79,523.58L329.04,522.66z",
  Tandjil\u00E9: "M130.04,658.96L143.86,659.4L148.69,656.27L149.54,657.67L150.55,657.76L150.36,660.8L152.41,665.63L156.05,666.49L157.86,668.57L159.49,668.37L163.65,669.53L165.18,670.45L165.8,671.7L170.48,671.7L176.41,672.91L177.56,675.27L180.81,676.76L186.78,677.44L186.78,677.44L190.61,679.41L196.82,684.81L195.05,688.47L195.05,688.47L192.81,687.56L191.71,686.35L185.16,688.38L180.57,688.52L178.56,689.48L178.9,690.98L180.86,693.53L179.47,694.59L179.47,699.35L172.16,704.65L179.18,709.22L174.98,713.45L174.98,713.45L167.9,714.8L157.67,713.79L153.47,711.77L152.03,712.1L149.26,710.03L146.73,709.84L141.18,711.53L141.18,711.53L141.18,711.53L141.18,711.53L140.42,708.5L138.17,705.42L134.58,708.5L131,709.79L129.71,712.49L128.27,713.4L122.87,711.05L120.01,711L118.81,711.77L117.38,714.27L112.12,715.32L104.14,714.27L100.36,716.09L94.05,714.27L94.05,714.27L93.09,707.1L93.09,707.1L96.1,701.86L100.02,697.04L104.76,692.95L105.57,689L107.1,688.23L107.72,684.67L109.06,683.12L110.92,682.32L113.19,682.7L115.08,683.44L116.68,685.64L119.07,685.33L122.32,683.42L127.37,678.19L133.34,667.56L132.39,664.9L132.15,660.37z",
  Tibesti: "M72.77,23.2L120.68,0L167.71,23.44L267.56,74.81L267.56,74.81L262.93,75.96L260.21,78.01L260.16,80.63L258.82,82.99L257.67,82.99L253.76,89.48L254.19,91.78L253.09,94.95L252.9,103.07L252.23,105.93L245.92,110.78L243.86,114.25L240.46,117.31L235.87,118.79L234.34,120.22L228.46,120.52L224.78,121.44L219.2,124.49L214.42,132.43L209.16,136.09L207.06,138.98L206.67,141.17L207.58,145.69L211.31,149.49L214.13,158.07L212.89,159.84L212.41,163.64L213.84,166.37L215.37,173.41L215.28,176.39L212.69,181.15L209.92,182.67L207.86,179.58L204.37,176.3L203.18,172.35L199.83,170.07L198.4,166.83L196.39,166.18L194.43,164L193.33,160.05L193.52,157.11L196.92,153.56L196.92,150.77L191.61,147.52L189.7,148.43L187.98,151.78L187.17,159.59L180.09,173.86L97.52,323.12L97.52,323.12L101.35,240.42L108.62,181.06L108.99,179.19L120.56,158.91L114.32,153.13L108.61,144.65L101.18,137.29L99.08,131.9L99.79,130.4L102.87,127.69L86.76,103.78L82.45,100.77L82.14,75.26z",
  "Wadi Fira": "M351.84,389.06L356.05,386.69L360.2,382.55L361.49,382.4L366.18,379.64L369.86,380.67L372.97,382.65L376.93,383.44L391.9,379.83L395.43,378.3L406.19,380.48L413.55,378.1L416.32,379.69L417.76,378.99L420.81,381.22L423.06,381.91L427.36,380.43L432.62,381.86L433.53,382.75L433.82,385.71L436.35,386.45L442.66,385.41L445.72,384.23L448.4,386.01L450.59,386.35L454.99,385.27L457.43,386.35L461.66,390.72L461.66,390.72L458.13,393.36L455.6,396.69L453.19,397.22L451.84,399.11L452.04,402.82L455.23,406.11L454.95,408.96L455.56,410.54L454.74,412.95L455.36,414.05L454.19,416.06L452.11,417.56L452.51,420.43L449.19,421.63L443.75,427.09L443.76,430.5L441.23,431.1L439.82,432.66L442.02,440.89L437.08,442.91L430.61,444.21L429.18,445.52L427.23,445.58L425.94,449.95L428.97,451.14L428.78,456.88L429.65,458.67L428.04,460.47L430.48,463.42L432.28,462.84L434.25,463.53L434.03,464.55L435.12,466.16L433.21,468.98L431.65,469.42L428.18,472.28L426.35,472.34L424.71,473.93L423.26,474.25L421.52,476.02L418.66,477.36L417.59,478.9L417.59,478.9L415.8,478.8L411.83,476.35L391.85,470.28L380.66,468.61L378.03,469.35L371.87,472.88L368.09,472.63L364.94,468.47L360.01,467.29L352.41,459.11L348.64,456.8L340.94,454.5L335.2,456.36L329.04,455.87L323.49,460.14L314.94,470.77L314.94,470.77L314.03,389.17L314.03,389.17L317.33,390.3L323.97,394.69L327.22,395.33L335.73,393.46L340.75,395.28L343.43,394.25L349.84,389.36z"
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

// src/Chad.tsx
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
var Chad = ({
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
      ChadSingle,
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
      ChadMultiple,
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
var ChadSingle = ({
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
var ChadMultiple = ({
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
var Chad_default = Chad;

// src/index.ts
var src_default = Chad_default;
