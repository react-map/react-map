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

// src/Jordan.tsx
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
var stateCode = ["Zarqa", "Karak", "Madaba", "Balqa", "Jarash", "Ajlun", "Irbid", "Ma`an", "Tafilah", "Amman", "Mafraq", "Aqaba"];
var drawPath = {
  Zarqa: "M201.26,271.21L199.29,270.86L197.4,269.53L196.49,268.03L196.34,265.97L196.88,264.4L197.71,263.07L198,261.66L197.34,260.16L195.77,258.46L192.06,257.2L191.44,261.77L190.52,263.69L188.95,265.31L186.55,266.44L183.64,268.18L181.5,269.87L174.61,279.15L175.67,284.75L176.61,285.88L178.1,287.28L179.36,287.83L182.95,289.97L187.18,295.54L191.61,299.64L197.81,307.22L201.37,309.79L203.8,310.55L207.39,308.49L209.66,308.01L212.62,307.75L221.65,304.86L233.5,304.94L237.29,304.23L239.67,302.76L243.18,298.48L245.37,296.57L249.29,295.72L268.76,297.43L272.62,299.16L276.41,302.37L286.86,313.88L292.15,320.78L292.46,324.2L290.77,326.85L285.61,330.09L281.47,333.49L280.06,335.42L279.81,337.45L280.96,339.82L285.92,345.51L294.17,353.22L302.17,358.72L306.45,360.34L309.9,360.23L318.64,354.82L321.79,353.96L325.21,354.76L376.75,407.59L377.32,407.9L377.41,407.94L415.93,396.38L461.52,382.7L507.11,368.99L517.9,365.75L517.8,365.71L517.53,365.61L289.09,286.15L282.61,282.38L276.75,276.84L273.53,275.14L263.59,274.06L260.19,274.41L257.82,275.48L255.88,276.98L253.51,278.07L250.75,278.14L247.91,277.3L244.69,274.94L237.26,271.26L229.82,270.54L227.52,270.84L225.61,271.3L221.79,272.86L219.24,273.07L216.42,272.31L211.94,268.89L209.63,267.45L207.79,267.21L205.28,269.71L203.43,270.74L201.26,271.21z",
  Karak: "M136.21,428.87L133.67,428.84L130.19,428.15L111.74,421.96L97.81,421.39L93.88,422.46L93.83,424.62L93.09,429.51L89.82,438.18L86.4,444.38L87.76,445.94L87.46,450.59L84.87,455.11L82.57,460.35L83.58,466.24L85.33,471.77L87.29,476.09L90.03,481.46L91.32,487.34L90.45,493.46L81.81,510.6L80.63,516.89L80.65,523.62L78.6,527.52L73.63,532.33L75.05,533.3L84.25,539.78L86.81,540.48L90.09,540.72L92.15,539.46L93.35,537.34L94.52,528.62L96.38,523.06L97.18,518.69L98.32,517.01L100.06,516.45L102.4,516.55L105.66,516.08L108,516.24L110.08,516.86L112.14,518.7L114.7,520.39L117.34,521.42L133.04,522.2L162.54,534.01L163.76,535.1L164.28,536.41L165.05,537.93L166.77,539.59L169.08,541.25L175.75,544.35L177.67,545.5L179.1,547.07L181.01,550.3L182.47,551.93L190.27,557.74L198.15,565.69L219.71,525.39L229.09,495.38L224.78,483.41L221.7,462.29L166.02,460.94L164.19,459.3L163.54,456.72L163.99,452.53L164.68,449.48L166.16,445.19L166.5,443.25L166.02,440.42L164.76,436.32L160.28,428.41L152.06,426.51L148.18,426.43L141.89,427.04L136.21,428.87z",
  Madaba: "M160.28,428.41L162.28,426.5L163.39,425.63L164.79,424.16L165.59,422.76L168.74,413L169.96,410.65L172.5,406.95L173.07,405.58L172.73,404.26L171.28,402.84L170.19,401.5L170.02,399.79L170.65,398.23L170.79,396.17L169.68,393.44L161.68,384.78L160.31,381.39L158.89,375.82L158.6,373.72L158.86,371.85L159.77,370.19L162.94,366.38L164.02,364.39L164.42,362.36L163.99,346.69L162.68,345.45L161.45,345.25L159.14,346.21L156.31,346.92L147.01,346.95L140.09,348.76L137.73,350.17L132.81,350.61L130.53,351.31L128.3,352.8L127.19,354.26L125.04,360.08L122.02,365.59L119.71,367.84L117.14,369.06L104.48,368.35L102.22,368.07L98.11,377.64L95.18,393.32L94.17,409.32L94.23,409.67L94.25,409.87L94.17,409.94L94.06,409.86L94.14,409.93L93.88,422.46L97.81,421.39L111.74,421.96L130.19,428.15L133.67,428.84L136.21,428.87L141.89,427.04L148.18,426.43L152.06,426.51L160.28,428.41z",
  Balqa: "M126.71,259.99L113.91,258.44L112.73,258.57L111.92,262.04L112.7,264.62L112.7,266.24L111.2,267.01L110.36,267.99L110.36,269.17L111.33,270.56L108.25,275.86L108.13,278.37L110.07,281.07L106.97,283.62L105.97,287.36L106.31,297.38L108.31,302.47L108.7,304.78L108.82,307.74L109.12,309.54L110.21,311.94L110.07,313.67L109.24,314.67L107.96,315.04L106.82,315.67L106.31,317.43L110.8,334.78L108.82,337.48L108.82,339.09L112.7,350.77L106.84,357.32L102.22,368.07L104.48,368.35L117.14,369.06L119.71,367.84L122.02,365.59L125.04,360.08L127.19,354.26L128.3,352.8L130.53,351.31L132.81,350.61L137.73,350.17L140.09,348.76L140.44,344.89L140.87,342.6L143.2,335.97L142.89,334.13L141.84,332.97L137.61,332.27L135.18,331.54L133.21,330.54L131.93,329.03L131.53,327.04L132.81,324.65L135.58,322.16L146.29,316.65L150.89,313.29L159.17,303.45L161.91,301.18L168.91,299.03L171.79,297.4L177.53,291.75L182.95,289.97L179.36,287.83L178.1,287.28L176.61,285.88L175.67,284.75L174.61,279.15L167.85,274.09L166.47,272.26L164.39,270.14L161.82,269.04L158.2,268.35L142.21,268.75L139.75,268.52L137.87,267.81L137.61,266L132.81,265.02L129.7,263.74L126.71,259.99z",
  Jarash: "M196.94,224.71L190.84,224.45L185.12,222.79L182.67,223.54L176.35,226.25L172.45,228.41L170.45,229.27L167.59,231.18L164.68,234.09L161.57,239.01L160.28,242.59L159.77,245.62L159.91,247.69L159.48,249.63L157.83,251.53L145.29,257.23L137.61,266L137.87,267.81L139.75,268.52L142.21,268.75L158.2,268.35L161.82,269.04L164.39,270.14L166.47,272.26L167.85,274.09L174.61,279.15L181.5,269.87L183.64,268.18L186.55,266.44L188.95,265.31L190.52,263.69L191.44,261.77L192.06,257.2L190.15,252.75L187.73,248.68L186.46,247.53L184.95,246.51L184.07,245.03L184.21,242.88L185.98,239.49L194.35,230.01L196.94,224.71z",
  Ajlun: "M176.35,226.25L172.39,220.64L168.77,217.69L167.85,215.9L167.05,213.05L165.82,212.5L164.51,213.35L163.19,215.2L161,216.49L158,216.94L152.66,216.64L149.63,217.24L144.03,220.33L139.61,221.6L134.98,221.28L131.78,221.53L129.16,222.66L127.36,224.95L126.07,228.32L123.24,241.95L123.56,245.27L124.67,248.79L127.22,254.66L127.68,256.55L127.53,257.82L126.71,259.99L129.7,263.74L132.81,265.02L137.61,266L145.29,257.23L157.83,251.53L159.48,249.63L159.91,247.69L159.77,245.62L160.28,242.59L161.57,239.01L164.68,234.09L167.59,231.18L170.45,229.27L172.45,228.41L176.35,226.25z",
  Irbid: "M180.42,149.11L179.51,148.8L176.33,145.56L174.58,144.54L154.81,139.91L153.11,137.75L153.11,137.74L153.13,137.71L153.13,137.7L152.35,137.1L151.4,136.93L150.32,137.17L149.17,137.74L149.14,137.75L145.96,138.57L135.84,144.98L129.74,150.46L126.79,152L122.44,151.48L122.42,151.47L119.03,153.92L116.25,157.62L114.62,159.08L113.31,159.63L112.91,160.36L112.81,162.15L113.55,163.73L115.11,164.65L115.11,166.01L113.84,166.01L113.84,167.65L114.89,169.61L115.46,175.24L116.48,177.94L115.72,179.13L115.46,179.25L115.36,178.74L115.11,177.94L114.68,178.72L113.84,181.06L112.7,179.57L113.33,184.14L113.84,185.54L111.33,185.54L111.33,187.02L112.3,186.91L113.06,186.94L114.37,188.89L114.75,189.81L116.48,191.62L116.48,192.98L114.83,193.48L113.73,194.64L113.04,196.12L112.7,197.58L113.38,198.07L113.8,198.47L114.3,198.77L115.11,198.94L115.11,200.56L113.95,201.35L112.7,201.92L113.84,203.4L111.33,205.04L111.73,205.42L112.11,205.35L112.41,205.49L112.7,206.51L111.33,206.51L111.33,207.87L112.47,209.01L112.64,209.89L111.86,210.5L110.07,210.84L110.89,213.25L111.33,213.96L112.22,214.91L112.98,216.26L113.54,217.93L113.84,219.92L112.7,219.92L112.7,218.42L111.33,218.42L111.33,219.92L112.32,222.04L112.17,228.57L113.84,231.81L113.02,234.34L112.96,238.49L113.65,242.64L115.11,245.18L114.2,245.7L113.5,246.29L113,247.09L112.7,248.3L115.11,248.3L112.73,258.57L113.91,258.44L126.71,259.99L127.53,257.82L127.68,256.55L127.22,254.66L124.67,248.79L123.56,245.27L123.24,241.95L126.07,228.32L127.36,224.95L129.16,222.66L131.78,221.53L134.98,221.28L139.61,221.6L144.03,220.33L149.63,217.24L152.66,216.64L158,216.94L161,216.49L163.19,215.2L164.51,213.35L165.82,212.5L167.05,213.05L167.85,215.9L168.77,217.69L172.39,220.64L176.35,226.25L182.67,223.54L185.12,222.79L190.84,224.45L196.94,224.71L198.38,222.81L198.62,221.14L198.05,217.91L197.11,215.74L196.14,213.99L195.91,212.21L196.54,210.44L199.18,208.26L201.46,207.87L203.54,208.6L206.91,211.25L208.51,211.59L209.83,211.13L211.11,205.47L208.85,187.58L206.63,187.5L205.97,187.35L205.93,186.41L204.9,183.87L196.61,171.22L194.88,167.57L194.74,163.46L195.3,159.74L194.44,157.26L190.14,156.92L187.48,157.42L185.56,156.74L183.94,155.21L182.27,153.12L182.95,153.23L183.54,152.33L183.79,150.91L183.5,149.46L182.8,149.08L180.42,149.11z",
  "Ma`an": "M196.8,900.74L201.84,900.55L206.56,898.62L226.52,882.1L245.98,865.96L267.38,848.21L281.56,836.43L293.38,816.38L304.84,796.89L313.31,782.5L323.48,765.16L327.88,760.41L332.93,757.87L348.89,754.54L365.27,751.14L391.74,745.61L418,740.12L442.63,734.98L464.31,730.47L468.27,726.94L476.45,706.93L482.53,692.11L489.15,675.97L494.55,662.75L496.95,658.89L501.21,655.32L521.2,644.06L543.43,631.54L556.9,623.97L558.13,623.21L558.31,623.14L558.38,623.06L558.32,622.91L549.21,612.19L529.04,588.42L508.82,564.63L488.62,540.79L468.44,516.92L467.85,516.24L467.28,515.55L466.69,514.86L466.12,514.18L442.18,488.19L418.59,462.58L221.7,462.29L224.78,483.41L229.09,495.38L219.71,525.39L198.15,565.69L184.15,589.37L177.44,591.87L172.5,589.93L170.56,589.77L168.59,590.2L166.3,591.8L164.48,593.6L161.88,595.25L148.83,598.39L131.64,600.72L125.38,600.15L107.09,600.73L99.58,599.6L92.21,599.62L91.15,612.97L87.38,629.89L79.22,655.89L79.59,679.88L78.1,686.08L67.34,707.4L65.23,717.97L64.8,723.56L65.66,727.55L66.63,729.63L68.05,732.08L69.74,734.29L71.99,736.38L74.51,737.87L77.53,738.87L80.47,739L83.21,738.65L85.59,737.78L87.96,737.3L92.69,737.16L98.18,738.24L101.6,739.52L105.21,741.53L108.77,744.66L112.08,748.22L114.82,752.49L124.5,774.45L136.43,823.2L145.54,890.07L145.96,891.88L145.98,891.94L156.46,893.76L177.67,897.43L196.8,900.74z",
  Tafilah: "M198.15,565.69L190.27,557.74L182.47,551.93L181.01,550.3L179.1,547.07L177.67,545.5L175.75,544.35L169.08,541.25L166.77,539.59L165.05,537.93L164.28,536.41L163.76,535.1L162.54,534.01L133.04,522.2L117.34,521.42L114.7,520.39L112.14,518.7L110.08,516.86L108,516.24L105.66,516.08L102.4,516.55L100.06,516.45L98.32,517.01L97.18,518.69L96.38,523.06L94.52,528.62L93.35,537.34L92.15,539.46L90.09,540.72L86.81,540.48L84.25,539.78L75.05,533.3L73.63,532.33L71.39,534.5L69.05,539.35L68.56,544.21L68.65,549L68.02,553.74L66.96,555.78L63.84,558.59L62.41,560.28L61.2,562.87L60.57,565.28L59.73,570.69L58.32,575.77L61.08,577.89L73.64,586.93L76.48,588.42L78.87,590.6L81.07,594.43L83.32,597.38L85.93,598.67L88.01,599.44L92.21,599.62L99.58,599.6L107.09,600.73L125.38,600.15L131.64,600.72L148.83,598.39L161.88,595.25L164.48,593.6L166.3,591.8L168.59,590.2L170.56,589.77L172.5,589.93L177.44,591.87L184.15,589.37L198.15,565.69z",
  Amman: "M203.8,310.55L201.37,309.79L197.81,307.22L191.61,299.64L187.18,295.54L182.95,289.97L177.53,291.75L171.79,297.4L168.91,299.03L161.91,301.18L159.17,303.45L150.89,313.29L146.29,316.65L135.58,322.16L132.81,324.65L131.53,327.04L131.93,329.03L133.21,330.54L135.18,331.54L137.61,332.27L141.84,332.97L142.89,334.13L143.2,335.97L140.87,342.6L140.44,344.89L140.09,348.76L147.01,346.95L156.31,346.92L159.14,346.21L161.45,345.25L162.68,345.45L163.99,346.69L164.42,362.36L164.02,364.39L162.94,366.38L159.77,370.19L158.86,371.85L158.6,373.72L158.89,375.82L160.31,381.39L161.68,384.78L169.68,393.44L170.79,396.17L170.65,398.23L170.02,399.79L170.19,401.5L171.28,402.84L172.73,404.26L173.07,405.58L172.5,406.95L169.96,410.65L168.74,413L165.59,422.76L164.79,424.16L163.39,425.63L162.28,426.5L160.28,428.41L164.76,436.32L166.02,440.42L166.5,443.25L166.16,445.19L164.68,449.48L163.99,452.53L163.54,456.72L164.19,459.3L166.02,460.94L221.7,462.29L418.59,462.58L418.23,462.19L394.29,436.14L370.34,410.06L377.41,407.94L377.32,407.9L376.75,407.59L325.21,354.76L321.79,353.96L318.64,354.82L309.9,360.23L306.45,360.34L302.17,358.72L294.17,353.22L285.92,345.51L280.96,339.82L279.81,337.45L280.06,335.42L281.47,333.49L285.61,330.09L290.77,326.85L292.46,324.2L292.15,320.78L286.86,313.88L276.41,302.37L272.62,299.16L268.76,297.43L249.29,295.72L245.37,296.57L243.18,298.48L239.67,302.76L237.29,304.23L233.5,304.94L221.65,304.86L212.62,307.75L209.66,308.01L207.39,308.49L203.8,310.55z",
  Mafraq: "M704.33,0L659.26,28.06L619.91,52.92L604.29,62.78L572.25,82.97L572.25,82.98L548.81,98.1L517.28,118.44L485.75,138.73L468.81,149.61L454.2,159L422.7,179.25L402.33,192.31L402.33,192.32L402.3,192.32L402.3,192.33L374.13,210.74L344.55,231.06L342.2,231.87L339.61,231.77L327.86,228.66L323.86,228.54L320.67,230.43L314.03,225.38L288.85,222.3L282.14,221.48L279.15,219.6L268.78,218.55L265.15,217.44L262.43,215.89L246.27,200.52L234.4,192.31L228.41,186.26L226.41,185.16L225.46,185.47L223.37,187.37L222.45,187.81L221.35,187.61L219.45,186.86L218.29,186.74L211.48,187.66L208.85,187.58L211.11,205.47L209.83,211.13L208.51,211.59L206.91,211.25L203.54,208.6L201.46,207.87L199.18,208.26L196.54,210.44L195.91,212.21L196.14,213.99L197.11,215.74L198.05,217.91L198.62,221.14L198.38,222.81L196.94,224.71L194.35,230.01L185.98,239.49L184.21,242.88L184.07,245.03L184.95,246.51L186.46,247.53L187.73,248.68L190.15,252.75L192.06,257.2L195.77,258.46L197.34,260.16L198,261.66L197.71,263.07L196.88,264.4L196.34,265.97L196.49,268.03L197.4,269.53L199.29,270.86L201.26,271.21L203.43,270.74L205.28,269.71L207.79,267.21L209.63,267.45L211.94,268.89L216.42,272.31L219.24,273.07L221.79,272.86L225.61,271.3L227.52,270.84L229.82,270.54L237.26,271.26L244.69,274.94L247.91,277.3L250.75,278.14L253.51,278.07L255.88,276.98L257.82,275.48L260.19,274.41L263.59,274.06L273.53,275.14L276.75,276.84L282.61,282.38L289.09,286.15L517.53,365.61L517.8,365.71L517.9,365.75L552.69,355.29L559.33,353.36L594.08,343.29L635.44,331.28L676.79,319.25L718.18,307.22L739.08,301.14L739.1,301.15L739.1,301.11L745.47,298.41L767.32,277.58L770.9,274.87L772.76,274.26L772.72,272.59L794.86,253.67L799.56,246.79L795.71,232.11L792.99,225.42L789.21,223.2L754.35,232.86L752.49,231.81L751.12,228.54L742.14,197.21L741.89,196.86L741.82,196.59L741.89,196.43L742.14,196.35L756.35,191.87L743.98,146.22L735.29,114.1L726.91,82.97L720.53,59.61L712.89,31.41L704.33,0z",
  Aqaba: "M92.21,599.62L88.01,599.44L85.93,598.67L83.32,597.38L81.07,594.43L78.87,590.6L76.48,588.42L73.64,586.93L61.08,577.89L58.32,575.77L58.31,575.81L47.54,597.78L39.59,623.94L38.72,629.03L35.52,637.71L35.52,642.84L36.43,645.03L39.08,649.35L39.59,652.38L39.19,655.35L38.18,657.64L36.95,659.83L35.84,662.5L34.11,673.6L32.8,677.26L32.72,683.35L36.49,696.37L36.49,703.08L33.5,710.24L25.63,722.08L23.5,730.46L23.39,733.02L22.7,734.9L21.79,736.54L21.07,738.38L19.72,745.59L19.55,758.48L18.77,762.79L10.23,785.95L8.86,791.23L7.89,803.14L6.14,808.42L3.68,812.42L2.37,817.06L1.58,822.82L2.44,822.7L2.69,823.01L2.69,823.57L2.84,824.26L5.36,824.26L9.18,828.13L9.36,831.49L5.36,840.15L4.05,845.68L2.84,864.92L0.44,866.62L0.44,866.63L20.86,870.21L42.71,874.02L71.33,878.98L96.91,883.43L124.22,888.15L145.98,891.94L145.96,891.88L145.54,890.07L136.43,823.2L124.5,774.45L114.82,752.49L112.08,748.22L108.77,744.66L105.21,741.53L101.6,739.52L98.18,738.24L92.69,737.16L87.96,737.3L85.59,737.78L83.21,738.65L80.47,739L77.53,738.87L74.51,737.87L71.99,736.38L69.74,734.29L68.05,732.08L66.63,729.63L65.66,727.55L64.8,723.56L65.23,717.97L67.34,707.4L78.1,686.08L79.59,679.88L79.22,655.89L87.38,629.89L91.15,612.97L92.21,599.62z"
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

// src/Jordan.tsx
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
var Jordan = ({
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
      JordanSingle,
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
      JordanMultiple,
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
var JordanSingle = ({
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
var JordanMultiple = ({
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
var Jordan_default = Jordan;

// src/index.ts
var src_default = Jordan_default;
