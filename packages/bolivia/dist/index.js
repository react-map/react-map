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

// src/Bolivia.tsx
var import_react2 = __toESM(require("react"));

// src/constants.ts
var constants = {
  WIDTH: "500px",
  MAPCOLOR: "#ffffff",
  STROKE_COLOR: "#000000",
  STROKE_WIDTH: "0.5",
  HOVERCOLOR: "#303030",
  SELECTED_COLOR: "#ff0000"
};
var viewBox = "-50 -50 1200 800";
var stateCode = ["El Beni", "Cochabamba", "Chuquisaca", "La Paz", "Pando", "Oruro", "Potos\xED", "Santa Cruz", "Tarija"];
var drawPath = {
  "El Beni": "M144.82,309.4L130.84,295.27L129.15,294.65L128.41,293.8L127.87,292.43L127.5,286.83L120.47,274.88L119.49,273.89L115.84,273.85L113.09,271.91L112.13,269.4L112.06,267.47L113.04,262.67L112.66,260.24L107.92,255.43L106.48,250.99L106.6,244.96L105.66,237.15L107.57,231.87L106.78,221.65L108.8,209.69L110.23,206.03L111.82,205.28L116.35,199.07L116.22,197.88L114.82,197.09L113.7,191.06L114.16,189.54L117.33,184.84L119.54,183.65L126.23,175.25L131.29,171.18L135.91,156.07L137.09,150.65L136.31,146.86L136.84,138.74L137.46,137.94L137.46,137.94L138.26,137.19L138.95,135.71L138.27,132.59L138.96,127.9L140.49,122.93L140.62,121.31L139.1,116.6L137.46,113.63L138.3,105.55L138.95,104.44L145.81,102.23L148.34,100.05L147.92,96.83L149.06,91.53L150.09,89.96L153.51,89.2L161.16,89.28L168.15,85.44L169.32,84.47L170.69,82.25L170.57,80.9L176.19,72.76L180.38,65.61L181.97,60.6L181.11,59.88L179.36,59.77L183.22,56.76L184.71,56.65L187.72,57.36L196.25,51.42L201.62,45.21L208.14,41.24L210.79,37.65L211.76,36.86L214.86,36.35L214.86,36.35L215.09,37.38L214.53,38.83L212.53,40.42L212.73,47.83L215.15,54.82L218.89,61.19L219.56,66.54L214.55,75.94L215.12,81.3L217.26,87.95L219.17,92.52L220.21,93.07L222.64,93.12L223.58,93.78L226.28,98.69L224.27,103.65L225.15,105.71L227.28,106.74L228.85,103L231.68,105.86L232.64,108.67L233.97,116.87L234.4,117.87L235.61,118.98L244.43,119.88L245.36,120.54L248.01,126.1L254.11,129.22L259.21,130.82L260.19,137.19L264,141.03L266.44,142.42L270.46,143.13L273.21,142.98L276.36,143.31L283.26,144.97L284.25,145.95L288.89,146.48L290.37,145.52L291.78,143.73L295.47,142L301.8,142.54L311.91,147.66L312.27,148.97L314.73,151.95L319.3,154.53L323.23,154.62L324.79,153.34L328.96,151.02L332.3,152.26L333.21,156.76L335.98,161.48L340.9,164.61L347.3,170.04L351.41,168.12L353.55,170.12L353.57,171.4L366.72,177.24L372.58,176.99L373.78,176.25L375.34,175.96L380.39,177.65L381.81,183.7L385.99,188.38L387.48,189.06L392.47,193.11L392.75,194.49L394.17,197.48L395.7,197.99L406.62,195.85L406.62,195.85L306.07,253.79L286.81,259.15L287.44,260.58L288.53,265.36L287.49,276.89L288.62,280.94L291.97,288.38L301.56,303.1L304.17,305.68L311.16,309.44L313.34,312.76L316.83,319.71L315.4,320.56L259.93,318.29L254.81,317.96L250.78,317.04L250.78,317.04L245.78,317.94L225.35,320.32L220.88,329.3L221.35,331.25L218.82,338.89L217.94,340.87L216.96,341.82L212.51,344.13L204.87,346.51L194.29,349.41L190.67,349.47L184.61,348.25L179.7,346.5L172.29,341.63L162.38,330.67L160.94,328.65L159.31,324.03L156.99,321.11z",
  Cochabamba: "M152.87,429.43L148.91,420.43L143.83,413.68L141.06,411L134.46,406.27L134.46,406.27L142.43,402.08L139.35,386.53L132.66,376.51L136.63,368.72L138.96,368.28L142.83,368.17L144.69,367.49L145.52,366.69L146.54,364.81L147.65,357.56L147.79,355.39L146.2,352.42L145.1,345.86L144.69,340.7L139.98,331.76L138.33,329.93L138.08,316.29L138.66,314.88L140.74,312.52L144.82,309.4L144.82,309.4L156.99,321.11L159.31,324.03L160.94,328.65L162.38,330.67L172.29,341.63L179.7,346.5L184.61,348.25L190.67,349.47L194.29,349.41L204.87,346.51L212.51,344.13L216.96,341.82L217.94,340.87L218.82,338.89L221.35,331.25L220.88,329.3L225.35,320.32L245.78,317.94L250.78,317.04L250.78,317.04L249.62,320.49L249.95,324.88L251.02,327.87L251.98,333.27L253.02,344.36L249.99,352.96L247.58,357.02L245.67,361.85L245.86,366.28L246.46,368.21L250.1,375.48L265.64,385.63L268.14,387.63L273.86,394.58L274.38,395.64L274.15,399.38L267.99,399.41L265,401.67L264.96,404.24L264.23,405.72L256.13,417.49L252.78,420.99L249.81,423.43L249.41,424.59L249.55,426.37L253.2,430.41L261.01,443.12L263.75,451.87L264.5,452.64L266,453.19L269.92,456.27L270.5,461.36L267.93,465.04L267.93,465.04L266.3,462.14L264.24,462.25L262.31,464.32L259.1,465.4L257.32,465.41L253.62,463.4L250.34,458.2L244.5,456.07L241.17,456.01L238.58,457.18L233.66,460.8L231.89,462.82L232.33,464.28L232.24,465.61L225.66,462.53L222.57,460.6L222.02,458.1L217.29,452.23L217.29,452.23L210.73,447.12L206.33,442.27L202.43,437.06L199.17,433.96L194.1,430.27L190.57,428.6L187.81,429.22L184.85,425.82L183.43,423.11L182.42,422.55L179.44,422.14L175.09,423.06L167.12,429.19L165.5,429.45L161.4,428.99z",
  Chuquisaca: "M222.89,618.34L218.11,614.39L212.17,608.37L210.87,605.59L210.7,603.84L211.1,593.98L212.66,589.25L213.31,581.38L215.88,573.96L219.12,567.38L219.88,564.47L216.31,550.17L216.15,547.1L218.64,538.27L223.29,535.46L227.79,534.65L231.04,534.5L232.92,533.97L240.03,530.05L245.52,524.67L248.15,520.83L244.81,515.8L243.41,511L243.6,508.68L241.84,504.39L238.98,501.91L235.18,501.59L233.91,501.93L232.43,502.92L227.5,502.7L219.65,499.1L215.64,496.4L215.15,494.77L208.7,486.96L207.59,483.6L209.66,479.4L209.22,472.95L213.19,469.1L213.56,467.97L213.45,466.91L212.51,466.05L204.19,464.64L202.95,457.79L200.91,452.9L201.31,448.78L211.99,451.39L216.13,452.74L217.29,452.23L217.29,452.23L222.02,458.1L222.57,460.6L225.66,462.53L232.24,465.61L232.33,464.28L231.89,462.82L233.66,460.8L238.58,457.18L241.17,456.01L244.5,456.07L250.34,458.2L253.62,463.4L257.32,465.41L259.1,465.4L262.31,464.32L264.24,462.25L266.3,462.14L267.93,465.04L267.93,465.04L269.2,465.85L269.33,469.35L271.05,473.68L282.86,487.02L284.98,491.69L287.24,492.12L288.31,491.9L289.3,491.01L289.96,489.72L290.24,485.88L291.01,484.98L298.3,485.08L296.92,496.23L298.83,522.05L298.91,533.09L300.45,537.29L300.9,541.09L300.85,545.23L301.65,559.27L302.49,559.97L310.12,560.62L314.59,557.61L321.07,561.32L376.09,561.12L376.09,561.12L372.53,565.98L372.95,589.48L372.95,589.48L334.17,589.65L286.43,589.33L283.11,586.98L281.74,585.06L276.44,583.64L275.91,585.01L276.01,590.72L275.21,595.38L274.52,596.57L273.52,597.22L266.9,596.73L260.3,594.07L256.4,590.56L252.66,586.35L249.26,585.74L247.4,588.68L247.03,591.28L245.92,593.86L243.3,594.41L241.38,593.48L239.24,591.26L230.89,587L226.75,586.51L225.98,588.08z",
  "La Paz": "M144.82,309.4L140.74,312.52L138.66,314.88L138.08,316.29L138.33,329.93L139.98,331.76L144.69,340.7L145.1,345.86L146.2,352.42L147.79,355.39L147.65,357.56L146.54,364.81L145.52,366.69L144.69,367.49L142.83,368.17L138.96,368.28L136.63,368.72L132.66,376.51L139.35,386.53L142.43,402.08L134.46,406.27L134.46,406.27L131.76,403.35L129.63,399.74L128.36,398.64L126.93,398.31L124.99,398.65L118.7,400.69L111.66,404.79L105.81,409.28L95.94,415.64L95.85,416.98L96.8,418.71L96.97,420.36L96.06,422.05L94.68,422.73L93.02,422.47L82.66,414.74L75.81,411.7L73.76,411.23L66.6,411.11L60.37,411.7L56.98,413.03L53.88,415.04L48.08,422.17L42.19,426.87L39.09,428.44L32.96,430.02L29.31,431.88L29.31,431.88L26.35,431.41L18.41,428.8L17.19,426.04L16.88,424.19L17.02,420.67L15.16,416.48L8.52,410.56L7.89,403.85L7.82,397.21L3.3,392.82L0,392.39L1.88,388.59L6.29,384.14L12.6,381.11L13.58,380.1L16.92,373.46L23.41,365.7L27.67,362.22L32.47,359.36L32.37,357.92L31.48,356.83L31.01,353.65L31.37,349.75L33.56,346.96L41.5,343.53L41.96,342.08L41.24,340.62L38.49,339.85L34.7,335.96L30.84,335.89L29.53,336.92L26.03,336.65L25.04,336.1L22.31,333.25L11.86,305.34L16.32,295.84L19.56,290.02L23.21,286.63L24.53,286.71L25.88,286.25L26.18,284.86L23.12,281.27L18.22,277.16L13.86,271.21L14.7,262.7L15.77,261.62L17.43,260.96L20.54,256.84L20.75,253.15L21.22,251.73L33.89,240.82L33.1,238.64L32.97,234.13L33.78,233.25L40.26,231.62L38.21,222.92L35.06,220.61L34.35,219.53L32.38,210.49L29.93,206.19L34.14,198.89L35.05,195.83L35.08,183.76L34.69,178.28L34.94,171.11L34.44,169.84L34.44,162.82L39.17,157.27L42.4,156.02L46.02,148.4L49.54,144.11L49.54,144.11L51.32,143.98L59.43,139.88L61.49,136.58L63,132.05L64.94,130.36L68.61,128.1L69.14,126.98L69.05,122.39L69.41,121.03L70.29,120.02L72.49,118.84L81.37,116.12L83.68,114.72L84.45,113.35L122.16,130.25L137.46,137.94L137.46,137.94L136.84,138.74L136.31,146.86L137.09,150.65L135.91,156.07L131.29,171.18L126.23,175.25L119.54,183.65L117.33,184.84L114.16,189.54L113.7,191.06L114.82,197.09L116.22,197.88L116.35,199.07L111.82,205.28L110.23,206.03L108.8,209.69L106.78,221.65L107.57,231.87L105.66,237.15L106.6,244.96L106.48,250.99L107.92,255.43L112.66,260.24L113.04,262.67L112.06,267.47L112.13,269.4L113.09,271.91L115.84,273.85L119.49,273.89L120.47,274.88L127.5,286.83L127.87,292.43L128.41,293.8L129.15,294.65L130.84,295.27z",
  Pando: "M49.54,144.11L36.86,118.32L4.43,64.78L8.54,64.78L12.3,64.1L29.25,65.6L40.71,68.1L45.1,67.44L44.86,74.28L48.19,74.15L54.45,72.54L57.17,70.3L63.23,68.18L66.18,67.63L69.36,66.24L77.24,54.99L77.53,53.6L78.38,52.24L80.44,50.77L82.64,49.94L90.29,49.77L92.73,50.2L96.52,52.63L98.49,51.7L99.92,47.89L103.21,43.31L104.58,42L111.29,38.8L117.48,34.59L117.65,32.78L122.59,32.19L124.72,32.79L130.08,29.99L139.32,20.97L146.05,15.85L151.14,13.7L152.59,11.52L160.22,10.3L162.35,10.65L175.56,6L180.48,4.9L185.81,5.11L197.21,4.64L204.26,7.92L206.11,7.93L208.81,4.82L208.99,3.16L212.52,0L214.3,0.36L215.81,1.23L219.6,8.29L217.85,13.62L218.16,18.55L219.5,21.45L220.24,27.4L219.11,31.01L215.75,34.38L214.86,36.35L214.86,36.35L211.76,36.86L210.79,37.65L208.14,41.24L201.62,45.21L196.25,51.42L187.72,57.36L184.71,56.65L183.22,56.76L179.36,59.77L181.11,59.88L181.97,60.6L180.38,65.61L176.19,72.76L170.57,80.9L170.69,82.25L169.32,84.47L168.15,85.44L161.16,89.28L153.51,89.2L150.09,89.96L149.06,91.53L147.92,96.83L148.34,100.05L145.81,102.23L138.95,104.44L138.3,105.55L137.46,113.63L139.1,116.6L140.62,121.31L140.49,122.93L138.96,127.9L138.27,132.59L138.95,135.71L138.26,137.19L137.46,137.94L137.46,137.94L122.16,130.25L84.45,113.35L83.68,114.72L81.37,116.12L72.49,118.84L70.29,120.02L69.41,121.03L69.05,122.39L69.14,126.98L68.61,128.1L64.94,130.36L63,132.05L61.49,136.58L59.43,139.88L51.32,143.98z",
  Oruro: "M29.31,431.88L32.96,430.02L39.09,428.44L42.19,426.87L48.08,422.17L53.88,415.04L56.98,413.03L60.37,411.7L66.6,411.11L73.76,411.23L75.81,411.7L82.66,414.74L93.02,422.47L94.68,422.73L96.06,422.05L96.97,420.36L96.8,418.71L95.85,416.98L95.94,415.64L105.81,409.28L111.66,404.79L118.7,400.69L124.99,398.65L126.93,398.31L128.36,398.64L129.63,399.74L131.76,403.35L134.46,406.27L134.46,406.27L141.06,411L143.83,413.68L148.91,420.43L152.87,429.43L152.87,429.43L152.14,430.96L147.88,432.43L147.01,433.24L146.51,437.85L146.79,440.14L147.76,441.41L150.8,442.65L153.85,442.19L157.78,443.12L157.34,444.31L155.26,445.59L153.4,446.25L150.17,448.52L149.5,455.7L151.75,460.79L152.61,461.95L157.87,466.27L163.57,468.46L166.28,468.55L169.11,469.47L170.51,470.61L172.92,478.03L174.35,481.27L176.69,484.69L182.22,491.12L182.39,492.2L181.52,493.38L180.09,493.8L169.34,494.69L165.83,494.6L162.38,495.18L158.36,497.5L151.41,504.07L149.26,505.47L106.12,524.34L99.24,527.25L97.35,527.59L83.2,522.54L67.11,517.4L54.65,512.84L54.65,512.84L61.15,505.77L58.73,502.33L55.73,499.69L51.14,497.71L44.06,490.27L38.14,486.18L34.82,480.26L36.48,476.53L33.07,469.13L31.86,464.66L31.45,459.45L31.91,455.4L31.09,453.16L29.33,450.58L28.51,441.92L26.26,439.36L25.58,437.83L26.05,436.48L28.94,434.47L29.4,433.49z",
  Potos\u00ED: "M222.89,618.34L223.01,620.48L222.07,623.57L221.26,625.03L220.23,625.83L218.63,630.12L218.26,632.35L221.04,635.49L224.4,640.78L226.11,648.22L225.23,648.47L225.23,648.47L204.62,648.76L201.66,649.24L197,649.3L193.83,647.21L188.12,639.74L180.48,634.26L173.14,631.49L172.48,632.37L169.7,645.25L168.91,647.51L166.97,649.66L153.3,653.73L149.65,653.96L147.24,655.66L145.49,663.65L145.32,666.47L137.67,669.24L132.82,671.73L133.32,677.72L127.68,682.36L124.7,687.91L104.75,692.24L93.95,690.98L89.76,688.26L89.37,681.99L91.1,673.41L86.92,659.6L87.41,658.17L87.43,656.29L86.33,649.01L84.9,646.61L83.68,645.89L79.23,641.27L79.11,634.85L78.22,629.58L76.53,625.36L74.14,622.27L74.01,605.42L62.14,586.17L58.02,586.11L56.71,585.5L55.28,583.63L55,582.49L55.03,575.17L56.85,572.7L59.71,570.72L59.97,569.64L58.69,568.26L55.82,566.26L51.78,564.72L48.68,562.92L46.98,561.09L45.59,558.58L45.46,555.88L46.46,554.74L48.04,553.98L47.16,548.63L44.87,543.21L43.95,542.04L44.33,540.69L50.72,538.95L54.39,538.79L57.13,531.47L54.93,527.07L48.74,522.21L48.87,520.14L54.65,512.84L54.65,512.84L67.11,517.4L83.2,522.54L97.35,527.59L99.24,527.25L106.12,524.34L149.26,505.47L151.41,504.07L158.36,497.5L162.38,495.18L165.83,494.6L169.34,494.69L180.09,493.8L181.52,493.38L182.39,492.2L182.22,491.12L176.69,484.69L174.35,481.27L172.92,478.03L170.51,470.61L169.11,469.47L166.28,468.55L163.57,468.46L157.87,466.27L152.61,461.95L151.75,460.79L149.5,455.7L150.17,448.52L153.4,446.25L155.26,445.59L157.34,444.31L157.78,443.12L153.85,442.19L150.8,442.65L147.76,441.41L146.79,440.14L146.51,437.85L147.01,433.24L147.88,432.43L152.14,430.96L152.87,429.43L152.87,429.43L161.4,428.99L165.5,429.45L167.12,429.19L175.09,423.06L179.44,422.14L182.42,422.55L183.43,423.11L184.85,425.82L187.81,429.22L190.57,428.6L194.1,430.27L199.17,433.96L202.43,437.06L206.33,442.27L210.73,447.12L217.29,452.23L217.29,452.23L216.13,452.74L211.99,451.39L201.31,448.78L200.91,452.9L202.95,457.79L204.19,464.64L212.51,466.05L213.45,466.91L213.56,467.97L213.19,469.1L209.22,472.95L209.66,479.4L207.59,483.6L208.7,486.96L215.15,494.77L215.64,496.4L219.65,499.1L227.5,502.7L232.43,502.92L233.91,501.93L235.18,501.59L238.98,501.91L241.84,504.39L243.6,508.68L243.41,511L244.81,515.8L248.15,520.83L245.52,524.67L240.03,530.05L232.92,533.97L231.04,534.5L227.79,534.65L223.29,535.46L218.64,538.27L216.15,547.1L216.31,550.17L219.88,564.47L219.12,567.38L215.88,573.96L213.31,581.38L212.66,589.25L211.1,593.98L210.7,603.84L210.87,605.59L212.17,608.37L218.11,614.39z",
  "Santa Cruz": "M532.58,501.26L487.9,498.5L456.05,507.12L399.11,517.01L390.5,540.2L376.09,561.12L376.09,561.12L321.07,561.32L314.59,557.61L310.12,560.62L302.49,559.97L301.65,559.27L300.85,545.23L300.9,541.09L300.45,537.29L298.91,533.09L298.83,522.05L296.92,496.23L298.3,485.08L291.01,484.98L290.24,485.88L289.96,489.72L289.3,491.01L288.31,491.9L287.24,492.12L284.98,491.69L282.86,487.02L271.05,473.68L269.33,469.35L269.2,465.85L267.93,465.04L267.93,465.04L270.5,461.36L269.92,456.27L266,453.19L264.5,452.64L263.75,451.87L261.01,443.12L253.2,430.41L249.55,426.37L249.41,424.59L249.81,423.43L252.78,420.99L256.13,417.49L264.23,405.72L264.96,404.24L265,401.67L267.99,399.41L274.15,399.38L274.38,395.64L273.86,394.58L268.14,387.63L265.64,385.63L250.1,375.48L246.46,368.21L245.86,366.28L245.67,361.85L247.58,357.02L249.99,352.96L253.02,344.36L251.98,333.27L251.02,327.87L249.95,324.88L249.62,320.49L250.78,317.04L250.78,317.04L254.81,317.96L259.93,318.29L315.4,320.56L316.83,319.71L313.34,312.76L311.16,309.44L304.17,305.68L301.56,303.1L291.97,288.38L288.62,280.94L287.49,276.89L288.53,265.36L287.44,260.58L286.81,259.15L306.07,253.79L406.62,195.85L406.62,195.85L407.43,196.82L410.27,198.08L411.7,198.23L434.59,195.12L436.34,197.58L438.68,199.75L447.06,204.73L449.45,204.88L452.91,207.78L462.94,211.13L467.59,220.62L466.78,222.81L465.51,224.74L463.54,226.53L462.68,229.95L464.26,236.32L465.43,238.04L472.81,253.51L473.93,277.9L458.17,278.1L475.52,297.9L478.9,338.78L565.7,342.26L566.92,341.75L568.24,339.81L571.33,339.62L571.49,345.73L570.38,351.47L566.7,355L564.25,358.69L563.85,360.29L564.48,372.12L566.44,377.84L567.3,383.2L567.2,387.32L568.16,390.94L569.13,391.96L573,393.05L575.24,394.44L581.77,398.99L582.36,400.36L583.23,401.23L587.01,403.44L588.68,403.61L592.81,401.57L600.68,408.51L599.66,409.5L598.97,410.81L599.99,413.4L602.11,415.54L602.03,421.72L612,440.64L610.42,442.9L609.87,444.38L599.43,477.77L601.82,478.17L602.74,485.06L599.11,485.27L581.74,522.14L595.32,534.62L592.85,537.48L582.32,543.89L579.84,544.9L580.93,542.14L581.14,540.32L581.23,535.19L580.24,526.92L574.33,523.36z",
  Tarija: "M353.65,656.28L352.97,656.13L347.54,651.72L346.16,649.59L345.74,644.27L344.91,643.2L288.23,643.39L285.61,648.46L278.87,665.57L276.55,668.83L274.01,671.14L272.48,674.11L271.14,678.34L270.94,684.26L270.06,688.5L269.3,690.03L268.2,690.53L267.7,689.08L267.48,684.95L266.95,683.31L262.4,678.25L262.29,676.71L262.87,674.78L261.96,671.22L258.72,665.49L257.67,657.45L255.37,654.89L250.78,652.84L249.16,653.2L236.36,649.17L235.41,648.26L225.23,648.47L225.23,648.47L226.11,648.22L224.4,640.78L221.04,635.49L218.26,632.35L218.63,630.12L220.23,625.83L221.26,625.03L222.07,623.57L223.01,620.48L222.89,618.34L222.89,618.34L225.98,588.08L226.75,586.51L230.89,587L239.24,591.26L241.38,593.48L243.3,594.41L245.92,593.86L247.03,591.28L247.4,588.68L249.26,585.74L252.66,586.35L256.4,590.56L260.3,594.07L266.9,596.73L273.52,597.22L274.52,596.57L275.21,595.38L276.01,590.72L275.91,585.01L276.44,583.64L281.74,585.06L283.11,586.98L286.43,589.33L334.17,589.65L372.95,589.48L372.95,589.48L373.06,592.52z"
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

// src/Bolivia.tsx
var import_react3 = require("react");
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
var Bolivia = ({
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
    return /* @__PURE__ */ import_react2.default.createElement(
      BoliviaSingle,
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
    return /* @__PURE__ */ import_react2.default.createElement(
      BoliviaMultiple,
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
var BoliviaSingle = ({
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
  const instanceId = (0, import_react3.useId)().replace(/:/g, "");
  const { x, y } = mouseTrack_default();
  const [stateHovered, setStateHovered] = (0, import_react3.useState)(null);
  const [selectedState, setSelectedState] = (0, import_react3.useState)(null);
  const strokeProps = getStrokeProperties(borderStyle);
  const mapStyle = {
    width: size || constants.WIDTH,
    stroke: strokeColor || constants.STROKE_COLOR,
    strokeWidth: strokeWidth || constants.STROKE_WIDTH,
    ...strokeProps
  };
  (0, import_react2.useEffect)(() => {
    stateCode.forEach((state) => {
      const path = document.getElementById(`${state}-${instanceId}`);
      if (path) {
        path.style.fill = cityColors[state] || mapColor || constants.MAPCOLOR;
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
  return /* @__PURE__ */ import_react2.default.createElement(import_react2.default.Fragment, null, /* @__PURE__ */ import_react2.default.createElement("div", { className: "map", style: mapStyle }, /* @__PURE__ */ import_react2.default.createElement("svg", { version: "1.1", id: `svg2-${instanceId}`, x: "0px", y: "0px", viewBox }, stateCode?.map((stateCode2, index) => /* @__PURE__ */ import_react2.default.createElement(
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
  )))), hints && /* @__PURE__ */ import_react2.default.createElement("div", null, stateHovered && /* @__PURE__ */ import_react2.default.createElement(
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
var BoliviaMultiple = ({
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
  const instanceId = (0, import_react3.useId)().replace(/:/g, "");
  const [selectedStates, setSelectedStates] = (0, import_react3.useState)([]);
  const { x, y } = mouseTrack_default();
  const [stateHovered, setStateHovered] = (0, import_react3.useState)(null);
  const strokeProps = getStrokeProperties(borderStyle);
  const mapStyle = {
    width: size || constants.WIDTH,
    stroke: strokeColor || constants.STROKE_COLOR,
    strokeWidth: strokeWidth || constants.STROKE_WIDTH,
    ...strokeProps
  };
  (0, import_react2.useEffect)(() => {
    stateCode.forEach((state) => {
      const path = document.getElementById(`${state}-${instanceId}`);
      if (path) {
        path.style.fill = cityColors[state] || mapColor || constants.MAPCOLOR;
      }
    });
  }, [cityColors, mapColor, instanceId]);
  (0, import_react2.useEffect)(() => {
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
  return /* @__PURE__ */ import_react2.default.createElement(import_react2.default.Fragment, null, /* @__PURE__ */ import_react2.default.createElement("div", { className: "map", style: mapStyle }, /* @__PURE__ */ import_react2.default.createElement("svg", { version: "1.1", id: `svg2-${instanceId}`, x: "0px", y: "0px", viewBox }, stateCode?.map((stateCode2, index) => /* @__PURE__ */ import_react2.default.createElement(
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
  )))), hints && /* @__PURE__ */ import_react2.default.createElement("div", null, stateHovered && /* @__PURE__ */ import_react2.default.createElement(
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
var Bolivia_default = Bolivia;

// src/index.ts
var src_default = Bolivia_default;
