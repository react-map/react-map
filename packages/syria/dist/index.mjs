// src/Syria.tsx
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
var viewBox = "-20 -20 1800 700";
var stateCode = [
  "Al \u1E28asakah",
  "Dayr az Zawr",
  "Idlib",
  "R\u012Bf Dimashq",
  "\u1E28alab",
  "Ar Raqqah",
  "Al L\u0101dhiq\u012Byah",
  "\u1E28am\u0101h",
  "\u1E28im\u015F",
  "\u0162ar\u0163\u016Bs",
  "Dimashq",
  "Al Qunay\u0163irah",
  "Dar\u0670\u0101",
  "As Suwayd\u0101'"
];
var drawPath = {
  "Al \u1E28asakah": "M608.76,85.61L607.1,86.18L603.49,89.32L591.5,92.47L563.47,97.7L562.56,98.22L561.59,99.2L550.79,118.29L550.52,129.59L548.06,150.48L547.18,155.04L559.33,181.67L560.64,206.49L554.59,216.04L554.59,216.04L542,214.35L528.51,214.42L518.14,213.31L510.11,210.86L504.43,209.69L497.62,205.86L495.79,203.3L493.1,201.49L415.04,124.54L411.17,119.59L409.01,115.22L405.17,109.14L403.65,105.18L403.65,105.18L403.39,103.1L402.59,101.71L399.82,99.3L397.93,98.21L390.33,95.42L385.78,93.25L380.29,94.5L378.15,94.16L376.34,93.04L370.56,85.49L369.73,82.12L367.95,78.51L367.59,76.81L367.59,76.81L368.92,76.26L370.35,76.49L378.12,75.27L383.14,73.83L389.87,73.06L395.59,70.86L403.94,70.16L407.35,69.44L412.15,66.77L419.34,64.15L424.53,61.01L428.1,59.53L431.56,56.51L436.07,55.14L440.83,54.29L443.5,53.18L446.5,51.28L448.66,49.22L450.46,48.46L455.15,45.28L461.08,42.49L464.35,39.47L466.23,38.29L476.91,36.08L480.48,34.3L482.43,32.71L489.6,29.71L492.86,27.34L497.28,26.32L500.16,24.52L504.18,24.62L505.32,25.9L506.94,26.24L510.44,24.06L513.92,23.71L516.77,24.04L521.76,25.57L533.02,27.66L538.47,28.01L541.89,29.6L542.63,31.12L543.27,31.54L545.09,31.38L548.47,29.61L571.16,29.57L576.82,28.87L586.61,25.52L593.63,25.39L596.61,24.9L617.99,19.71L622.06,17.5L626.11,16.09L630.92,13.13L632.53,10.35L634.19,8.61L639.6,4.57L641.82,0.49L642.66,0L643.37,0.22L643.45,1.42L642.05,4.35L642.25,5.15L644.87,4.79L647.66,5.93L649.57,4.72L650.79,7.15L652.15,7.71L652.78,9.15L654.98,10.22L655.74,11.32L655.52,13.41L654.03,14.77L653.55,16.48L653.73,17.82L656.26,23.74L656.21,27.67L656.58,28.39L658.07,29.27L658.43,31.1L645.05,44.58L637.92,52.85L633.76,56.88L614.37,79.87L610.96,82.83z",
  "Dayr az Zawr": "M543.71,276.14L544.38,289.88L544.38,299.19L545.18,308.19L535.48,322.64L524.97,347.94L523.41,349.44L522.93,351.79L482.58,373.57L441.85,396.55L441.85,396.55L422.97,368.49L366.96,288.35L368,278.79L359.78,261.53L353.19,255.85L348.12,252.46L348.12,252.46L391.04,189.72L389.34,189.34L386.6,187.43L385.31,187.29L403.65,105.18L403.65,105.18L405.17,109.14L409.01,115.22L411.17,119.59L415.04,124.54L493.1,201.49L495.79,203.3L497.62,205.86L504.43,209.69L510.11,210.86L518.14,213.31L528.51,214.42L542,214.35L554.59,216.04L554.59,216.04L549.61,223.91L548.85,236.12L545.64,248.1L543.95,257.88L543.24,266.54z",
  Idlib: "M148.11,216.04L145.95,217.07L145.13,219.92L143.24,223.91L142.22,225.19L140.94,226.09L137.73,227.06L136.96,227.97L135.97,231.19L134.38,233.63L134.35,235.61L135.39,236.31L136.79,236.21L138.96,233.23L140.17,233.5L140.85,235.44L140.91,240.83L140.72,241.1L138.99,240.43L138.25,240.73L137.1,241.8L136.03,243.68L134.9,244.15L129.22,244.38L127.63,243.61L126.92,238.26L128.07,235.84L128.26,234.3L127.96,232.53L126.84,230.95L126.37,230.99L124.89,233.53L122.59,235.71L121.38,238.62L120.67,238.99L118.22,238.99L117.1,239.49L116.25,238.15L114.5,237.05L113.65,235.21L109.89,232.19L101.33,233.97L98.83,235.24L94.61,235.54L91.46,235.24L84.93,233.4L81.01,233.37L80.05,232.63L78.89,230.05L75.88,228.51L73.22,230.22L70.64,230.72L69.54,229.61L68.47,225.46L66.8,222.3L67.84,220.59L67.24,217.17L67.43,215.12L66.69,213.21L66.66,211.77L68.91,199.97L68.8,196.65L68.01,196.27L63.01,196.21L62.27,195.77L61.18,192.64L59.72,192.31L57.61,193.45L55.75,193.52L53.85,192.51L53.18,191.29L53.18,191.29L56.08,189.45L56.57,187.66L56.32,186.85L54.65,186.28L50.81,186.48L44.14,187.63L43.05,186.99L42.75,186.21L43.19,184.48L42.64,181.86L42.64,181.86L43.31,183.5L44.71,184.07L46.09,181.63L46.69,175.71L45.88,173.61L46.55,171.57L49.02,167.57L50.6,166.49L52.15,166.1L54.03,166.32L55.56,167.17L57.89,166.85L58.24,166.45L57.11,164.08L57.43,162.68L59.34,161.18L62,162.6L64.39,162.31L65.4,161.55L65.76,160.48L65.62,158.51L67.03,156.08L66.4,153.38L67.3,151.49L66.13,149.59L65.65,147.23L66.72,144.33L65.21,141.07L66.41,138.74L67.57,138.38L67.82,137.39L67.27,134.51L67.85,134.13L71,135.96L73.19,136.32L74.53,137.12L75.58,136.67L76.93,133.14L78.32,133.69L79.63,132.7L81.59,132.7L83.05,133.92L85.67,133.43L88.17,135.2L89.07,135.32L89.96,135.18L91.27,133.78L94.65,133.77L97.2,131.94L97.73,130.62L96.42,128.61L97.17,126.1L96.62,125.53L94.28,124.86L94.07,123.42L94.07,123.42L96.94,122.85L99.71,123.32L100.75,122.71L102.02,121.12L103.36,120.98L104.37,122.17L104.9,125.29L107.56,127.25L109.72,130.6L110.96,131.65L111.37,133.35L110.6,134.94L104.24,141.57L100.4,144.38L99.6,145.9L100.07,147.05L101.85,148.64L102.02,150.53L102.56,151.1L105.33,152.96L111.37,155.26L114.6,157.25L115.32,159.18L115.67,165.39L121.43,173.78L121.79,175.5L123.44,177.22L123.88,179.85L125.47,181.13L127.11,183.86L130.98,184.83L132.9,187.33L135.59,188.71L136.63,189.92L136.85,191.23L136.22,192.98L132.24,196.17L133.89,201.76L135.56,203.94L135.7,207.3L137.18,207.64L138.03,208.48L139.21,211.03L141.7,212.07L143.57,214.15z",
  "R\u012Bf Dimashq": "M84.38,496.64l-0.63,-3.98l-3.43,-3.88l-1.29,-3.27l-0.85,-0.75l-1.51,0.65l-1.78,1.99l-6.06,3.92l-1.92,1.86l-0.63,2.64l-1.01,0.62l-3.54,-0.82l-2,-1.76l-0.99,-1.7l-3.07,-0.72l-0.63,-2.32l-1.95,-1.31l-1.86,-2.45l-1.26,0.85l-0.16,1.14l0.55,2.68l-1.37,3.2l-0.58,0.49l-3.02,0.49l-3.48,1.6l-5.46,-0.46l-1.7,0.72l-2.69,2.19l-1.65,0.49l-2.63,-0.29l-1.01,-1.96l-2.52,-0.98l0,0l0.25,-4.6l-0.38,-0.94l-4.09,-0.49l-3.35,-3.36l1.04,-1.63l-0.14,-0.39l-2.2,-1.28l0,0l-0.33,-3.27l0.31,-2.13l0.84,-2.19l3,-3.95l0.35,-1.5l-0.14,-0.85l-0.51,-0.39l4.09,-3.75l1.25,-1.92l0.25,-1.43l-1.13,-3.12l1.59,-0.89l5.61,-1.21l3.01,-1.73l1.15,-1.63l-0.23,-2.44l-0.58,-0.75l-7.08,-4.15l-3.76,-0.55l-0.47,-1.12l0.19,-0.78l3.11,-3.03l0.14,-3.44l1.91,-2.37l1.8,-3.14l0.36,-1.39l0.53,-0.45l1.93,-0.25l3.35,-5.36l4.4,-1.17l3.97,-2.77l0.93,-0.15l1.12,2l2.12,0.57l3.07,-0.28l1.9,-2.19l2.8,0.69l1.1,1.05l2.05,0.05l4.33,1.73l1.54,0.06l0.67,-0.44l1.31,-2.09l-0.71,-1.54l-2.17,-1.86l-3.95,-1.33l-3.01,-2.6l-0.16,-1.15l0.71,-1.7l3.25,-4.91l1.94,-2.11l1.83,-0.73l0.3,-1.41l3.4,-2.93l0.26,-1.5l2.97,-1.38l3.59,1.16l2.18,-1.26l1.47,-1.42l0.34,-3.31l2.46,-3.27l1.16,-0.9l1.98,-0.72l0.66,-2.69l1.28,-1.18l0.58,-1.81l2.58,-1.42l0.97,-1.44l-0.49,-0.53l0,0l1.75,-1.03l3.4,-0.13l4.2,2.08l5.4,0.17l5.79,-2.9l2.44,-0.53l9.63,11.81l5.46,9.46l2.85,3.69l13.22,7.87l1.92,0.53l4.22,-0.3l0.85,0.79l3.48,7.04l2.85,4.44l3.4,2.3l6.72,7.23l7.41,5.58l4.91,4.95l1.76,3.61l2.09,5.87l4.22,6.03l1.87,2.02l6.96,5.41l3.73,2.26l8.61,2.52l10.31,7.1l9.41,8.92l7.43,5.29l7.02,5.94l8.91,6.49l4.37,4.2l0,0l-81,51.08l0,0l-3.52,-4.21l-3.56,-2.11l-2.33,-3.02l-2.85,-2.27l-8.67,-8.44l-0.96,-1.72l-0.77,-6.76l-2.08,-2.76l-2.47,-1.04l-2.52,1.76l-1.45,-0.23l-2.28,-1.53l-2.66,-1.11l-0.47,-1.4l-2.41,-3.22l-0.16,-2.47l-2.63,-1.95l-3.07,-1.27l-5.92,-0.59l-1.65,-0.78l-1.37,-1.6l-0.63,-3.39l-4.11,-4.27l-0.82,-2.93l-1.26,-1.4l-3.15,-1.7l-3.24,-3l-1.84,-0.19l-6.28,1.83l-15.5,1.83l-0.93,0.42L84.38,496.64zM67.69,450.12l-9.86,-0.31l-1.32,0.84l0.09,4.31l1.67,1.79l0.97,2.31l1.41,0.74l6.95,-0.21L67.69,450.12z",
  \u1E28alab: "M148.11,216.04L143.57,214.15L141.7,212.07L139.21,211.03L138.03,208.48L137.18,207.64L135.7,207.3L135.56,203.94L133.89,201.76L132.24,196.17L136.22,192.98L136.85,191.23L136.63,189.92L135.59,188.71L132.9,187.33L130.98,184.83L127.11,183.86L125.47,181.13L123.88,179.85L123.44,177.22L121.79,175.5L121.43,173.78L115.67,165.39L115.32,159.18L114.6,157.25L111.37,155.26L105.33,152.96L102.56,151.1L102.02,150.53L101.85,148.64L100.07,147.05L99.6,145.9L100.4,144.38L104.24,141.57L110.6,134.94L111.37,133.35L110.96,131.65L109.72,130.6L107.56,127.25L104.9,125.29L104.37,122.17L103.36,120.98L102.02,121.12L100.75,122.71L99.71,123.32L96.94,122.85L94.07,123.42L94.07,123.42L94.09,121.96L93.12,121L91.15,120.8L89.38,121.64L88.03,121.5L88.45,120.18L90,118.54L89.26,116.01L89.49,114.02L87.19,113.88L86.19,113.21L84.98,109.91L84.85,108.23L84.15,107.44L84.08,104.67L82.81,102.46L83.02,101.72L82.61,101.09L82.62,100.59L84.63,99.24L86.4,96.13L87.67,91.05L87.32,88.42L86.07,84.74L86.46,82.35L90.9,75.6L90.72,72.79L89.63,70.45L90.5,68.1L94.2,63.98L94.98,62.59L94.92,61.35L94.01,59.51L94.72,58.36L95.68,59.69L100.99,60.99L107.42,64.14L117.15,66.7L121.26,66.26L125.65,68.62L128.72,71.69L132.29,73.26L132.35,74.67L130.04,78.87L129.52,81.06L131.54,81.97L135.74,85.59L136.98,85.18L138.79,81.21L141.05,80.74L145.02,81.92L149.03,80.72L153.06,80.53L159.81,81.73L163.55,81.92L173.41,83.83L176.33,82.45L179.52,79.13L191.44,72.38L195.33,71.54L198.52,70.24L204.88,70.27L207.17,68.97L216.41,65.72L223.18,61.73L229.53,60.45L232.46,56.77L237.98,54L242.56,52.34L244.68,50.82L248.25,50.95L250.46,50.02L259.31,51.62L264.84,52.02L269.86,53.91L274.17,56.26L281.12,59.19L287.78,66.16L287.78,66.16L287.97,70.03L289.62,77.25L289.21,79.23L288.25,79.94L282.38,80.76L281.72,81.75L282.49,85.66L283.83,87.06L285.58,86.72L290,83.31L291.24,83.79L291.7,84.91L291.51,94.98L290.03,103.37L288.3,109.08L285.97,112.61L282.35,116.88L276.21,121.29L266.74,126.51L257.25,128.4L247.19,128.91L244.16,129.51L243.21,130.57L239.01,132.6L237.34,134.23L235.37,137.41L234.24,140.39L231.5,144.54L231.14,148.23L231.8,152.76L233.31,154.99L237.59,159.38L239.1,162.01L243.43,165.52L243.54,166.74L241.26,172.5L238.77,175.06L234.71,180.79L232.24,185.34L229.58,193.55L227.99,201.18L227.66,206.83L235.2,216.43L248.67,230L248.67,230L241.98,229.98L230.38,230.85L223,230.22L207.83,230.25L196.64,228.77L191.73,226.63L182.84,220.49L179.77,220.36L166.25,222.17L161.12,221.97L155.42,218.38z",
  "Ar Raqqah": "M255.27,236.45L253.66,233.87L248.67,230L248.67,230L235.2,216.43L227.66,206.83L227.99,201.18L229.58,193.55L232.24,185.34L234.71,180.79L238.77,175.06L241.26,172.5L243.54,166.74L243.43,165.52L239.1,162.01L237.59,159.38L233.31,154.99L231.8,152.76L231.14,148.23L231.5,144.54L234.24,140.39L235.37,137.41L237.34,134.23L239.01,132.6L243.21,130.57L244.16,129.51L247.19,128.91L257.25,128.4L266.74,126.51L276.21,121.29L282.35,116.88L285.97,112.61L288.3,109.08L290.03,103.37L291.51,94.98L291.7,84.91L291.24,83.79L290,83.31L285.58,86.72L283.83,87.06L282.49,85.66L281.72,81.75L282.38,80.76L288.25,79.94L289.21,79.23L289.62,77.25L287.97,70.03L287.78,66.16L287.78,66.16L296.94,74.95L302.25,76.32L316.16,76.53L326.23,75.82L332.67,76.58L346.68,80.52L358.28,77.51L367.59,76.81L367.59,76.81L367.95,78.51L369.73,82.12L370.56,85.49L376.34,93.04L378.15,94.16L380.29,94.5L385.78,93.25L390.33,95.42L397.93,98.21L399.82,99.3L402.59,101.71L403.39,103.1L403.65,105.18L403.65,105.18L385.31,187.29L386.6,187.43L389.34,189.34L391.04,189.72L348.12,252.46L348.12,252.46L336.57,247.93L326.15,246.02L314.11,241.87L292.91,237.59L277.11,235.74L270.47,235.41L262.11,235.48z",
  "Al L\u0101dhiq\u012Byah": "M16.57,228.15L9.41,222.22L6.88,221.45L6.14,222.76L5.32,221.78L4.55,221.55L4.22,221.11L4.55,220.01L4.66,220.11L4.42,221.18L5.02,220.41L5.27,219.13L4.88,218.86L5.51,217.82L4.58,217.46L4.44,216.68L3.95,216.95L3.9,216.02L3.59,216.21L2.19,215.34L2.17,214.87L1.62,214.87L2.88,213.36L2.53,212.32L1.87,212.08L0.41,212.72L0,211.92L1.18,211.95L2.47,211.01L2.61,211.41L3.29,211.52L3.51,210.91L4.14,210.98L4.72,208.93L5.27,208.69L5.38,209.23L5.81,209.16L5.51,208.05L6.01,207.99L6.75,206.11L6.31,205.67L6.06,203.95L5.1,203.32L5.16,201.57L6.42,200.26L8.12,199.86L8.26,199.05L8.91,198.58L8.78,198.01L9.76,197.5L10.04,196.66L11.25,196.22L11.63,193.47L12.7,192.86L12.07,187.81L11.19,186.67L11.19,185.35L10.29,184.45L10.23,182.53L8.91,181.65L9.44,180.07L8.31,179.7L8.34,179.29L9.11,179.43L9.65,178.96L10.04,179.56L10.75,179.39L11.11,179.93L12.81,179.83L14.68,177.95L15.5,177.91L16.18,176.97L16.92,173.4L17.39,173.09L17.61,171.98L18.1,171.24L19.89,170.33L19.97,169.89L21.68,171.55L28.17,168.85L28.85,168.92L30.28,170.84L29.49,175.04L29.86,176.11L32.95,176.35L39.52,178L41.26,179.24L42.64,181.86L42.64,181.86L43.19,184.48L42.75,186.21L43.05,186.99L44.14,187.63L50.81,186.48L54.65,186.28L56.32,186.85L56.57,187.66L56.08,189.45L53.18,191.29L53.18,191.29L52.02,191.77L51.3,192.74L51.41,196.07L51.03,197.49L50.23,198.39L48.09,198.93L47.41,200.58L49.41,203.97L50.18,209.42L49.82,217.71L47.82,230.82L48.94,235.47L50.18,237.98L50.26,240.9L52.67,249.97L52.97,255.58L52.97,255.58L48.59,253.23L44.18,255.25L34.45,255.54L31.07,256.39L30.2,256.19L25.44,252.41L23.9,251.64L21.39,251.47L21.39,251.47L21.09,250.85L20.52,250.89L20.16,249.15L20.41,247.07L20.1,246.1L20.43,245.4L20.02,245.13L20.35,242.82L20.05,242.66L19.83,236.97L20.21,236.6L19.23,232.85L19.63,232.24L18.51,230.3z",
  \u1E28am\u0101h: "M53.18,191.29L53.85,192.51L55.75,193.52L57.61,193.45L59.72,192.31L61.18,192.64L62.27,195.77L63.01,196.21L68.01,196.27L68.8,196.65L68.91,199.97L66.66,211.77L66.69,213.21L67.43,215.12L67.24,217.17L67.84,220.59L66.8,222.3L68.47,225.46L69.54,229.61L70.64,230.72L73.22,230.22L75.88,228.51L78.89,230.05L80.05,232.63L81.01,233.37L84.93,233.4L91.46,235.24L94.61,235.54L98.83,235.24L101.33,233.97L109.89,232.19L113.65,235.21L114.5,237.05L116.25,238.15L117.1,239.49L118.22,238.99L120.67,238.99L121.38,238.62L122.59,235.71L124.89,233.53L126.37,230.99L126.84,230.95L127.96,232.53L128.26,234.3L128.07,235.84L126.92,238.26L127.63,243.61L129.22,244.38L134.9,244.15L136.03,243.68L137.1,241.8L138.25,240.73L138.99,240.43L140.72,241.1L140.91,240.83L140.85,235.44L140.17,233.5L138.96,233.23L136.79,236.21L135.39,236.31L134.35,235.61L134.38,233.63L135.97,231.19L136.96,227.97L137.73,227.06L140.94,226.09L142.22,225.19L143.24,223.91L145.13,219.92L145.95,217.07L148.11,216.04L148.11,216.04L148.11,216.04L148.11,216.04L155.42,218.38L161.12,221.97L166.25,222.17L179.77,220.36L182.84,220.49L191.73,226.63L196.64,228.77L207.83,230.25L223,230.22L230.38,230.85L241.98,229.98L248.67,230L248.67,230L253.66,233.87L255.27,236.45L255.27,236.45L255.5,244.82L255.03,252.51L253.41,256.85L250.23,261.73L249.38,263.84L248.94,266.91L249.49,271.88L242.63,274.48L234.71,278.22L233.12,279.35L230.73,281.92L230.51,283.65L228.51,287.25L228.46,289.78L227.58,291.95L225.66,294.15L224.56,294.68L223.6,294.25L218.61,287.49L210.85,280.95L209.72,275.28L207.47,271.81L203.61,271.15L201.08,268.71L199.71,268.14L196.5,268.64L186.49,271.81L183.47,272.02L177.33,276.08L176.07,278.15L175.9,283.42L176.51,285.79L175.49,287.02L174.15,286.85L172.5,284.39L171.79,283.99L166.47,284.02L164.77,285.35L163.73,285.65L160.44,284.22L159.56,284.99L159.37,286.85L157.53,286.29L155.58,286.52L154.92,288.62L153.74,289.92L153.14,292.08L151.52,293.48L148.78,292.45L146.86,289.45L144.83,289.12L142.09,290.22L141.18,292.91L138.25,291.18L136.85,291.18L135.12,293.35L131.86,293.81L125.05,299.07L123.79,298.84L123.38,296.54L121.76,294.58L121.21,292.68L119.24,289.98L118.03,286.55L116.2,285.35L114.74,285.05L113.4,285.08L111.12,286.62L108.54,286.79L106.54,288.58L102.87,288.38L101.55,289.02L100.45,288.55L98.67,290.08L96.75,290.32L94.28,291.35L92.11,292.91L89.07,293.31L86.99,292.41L86.27,292.51L83.53,294.15L82.54,294.28L81.23,293.98L80.65,291.85L78.81,291.32L79.63,289.42L79.5,288.52L78.26,287.82L77.3,287.89L76.12,288.65L74.97,291.05L72.78,292.68L72.37,293.95L72.53,295.64L71.49,296.54L71.43,298.57L70.34,299.37L70.12,300.27L69.51,300.77L67.73,299.57L66.42,299.57L65.48,298.04L64.8,297.64L63.7,298.14L62.03,300.3L61.18,300.37L60.6,297.84L58.3,297.14L59.75,295.58L58.97,294.18L58.97,294.18L58.1,292.87L55.14,290.75L53.35,285.74L47.58,286.51L42.94,285.79L41.98,285.08L41.43,283.52L41.54,282.05L42.11,281.49L44.91,281.75L46.53,280.69L48.33,280.39L48.81,279.79L50.74,279.67L53.33,277.32L53.44,275.45L54.4,272.92L53.52,267.14L52.97,255.58L52.97,255.58L52.67,249.97L50.26,240.9L50.18,237.98L48.94,235.47L47.82,230.82L49.82,217.71L50.18,209.42L49.41,203.97L47.41,200.58L48.09,198.93L50.23,198.39L51.03,197.49L51.41,196.07L51.3,192.74L52.02,191.77z",
  \u1E28im\u015F: "M420.56,408.66L370.84,437.16L304.89,475.87L257.24,505.44L257.24,505.44L252.87,501.24L243.95,494.74L236.93,488.8L229.5,483.51L220.09,474.59L209.78,467.5L201.17,464.98L197.43,462.72L190.47,457.31L188.6,455.29L184.38,449.26L182.29,443.39L180.54,439.78L175.63,434.83L168.23,429.24L161.51,422.02L158.1,419.72L155.25,415.28L151.77,408.24L150.92,407.45L146.69,407.74L144.77,407.22L131.55,399.35L128.7,395.66L123.24,386.2L113.62,374.38L111.18,374.91L105.39,377.82L99.99,377.65L95.79,375.57L92.39,375.7L90.64,376.74L90.64,376.74L88.03,375.49L87.28,374.14L86.42,370L86.88,368.85L88.31,367.24L88.1,365.44L84.64,364.22L81.69,357.43L81.86,356.23L84.17,353.19L83.55,351.82L79.99,350.36L79.14,348.56L75.39,346.65L73.76,343.75L73.44,341.96L70.31,342.15L69.16,343L66.33,341.96L64.88,342.96L62.96,342.12L62.14,340.8L62.61,339.32L67.33,337.2L68.7,336.16L69.05,335.25L68.51,333.13L69.85,329.28L70.62,329.36L72.13,331.19L73.8,331.03L74.55,326.7L73.5,326.49L71.36,327.66L69.52,327.36L65.86,325.01L63.91,323.11L63.97,322.07L62.16,319.64L60.75,319.38L59.8,320.5L59.29,324.05L57.1,326.08L55.35,326.3L52.74,325.76L50.98,326.52L48.49,325.05L45.57,325.85L41.51,324.73L39.14,325.27L39.14,325.27L39.46,322.73L42.44,317.19L45.46,312.8L46.23,310.31L47.55,309.41L48.7,307.02L50.81,306.09L51.71,304.26L55.09,301.3L54.95,297.64L55.61,295.84L58.97,294.18L58.97,294.18L59.75,295.58L58.3,297.14L60.6,297.84L61.18,300.37L62.03,300.3L63.7,298.14L64.8,297.64L65.48,298.04L66.42,299.57L67.73,299.57L69.51,300.77L70.12,300.27L70.34,299.37L71.43,298.57L71.49,296.54L72.53,295.64L72.37,293.95L72.78,292.68L74.97,291.05L76.12,288.65L77.3,287.89L78.26,287.82L79.5,288.52L79.63,289.42L78.81,291.32L80.65,291.85L81.23,293.98L82.54,294.28L83.53,294.15L86.27,292.51L86.99,292.41L89.07,293.31L92.11,292.91L94.28,291.35L96.75,290.32L98.67,290.08L100.45,288.55L101.55,289.02L102.87,288.38L106.54,288.58L108.54,286.79L111.12,286.62L113.4,285.08L114.74,285.05L116.2,285.35L118.03,286.55L119.24,289.98L121.21,292.68L121.76,294.58L123.38,296.54L123.79,298.84L125.05,299.07L131.86,293.81L135.12,293.35L136.85,291.18L138.25,291.18L141.18,292.91L142.09,290.22L144.83,289.12L146.86,289.45L148.78,292.45L151.52,293.48L153.14,292.08L153.74,289.92L154.92,288.62L155.58,286.52L157.53,286.29L159.37,286.85L159.56,284.99L160.44,284.22L163.73,285.65L164.77,285.35L166.47,284.02L171.79,283.99L172.5,284.39L174.15,286.85L175.49,287.02L176.51,285.79L175.9,283.42L176.07,278.15L177.33,276.08L183.47,272.02L186.49,271.81L196.5,268.64L199.71,268.14L201.08,268.71L203.61,271.15L207.47,271.81L209.72,275.28L210.85,280.95L218.61,287.49L223.6,294.25L224.56,294.68L225.66,294.15L227.58,291.95L228.46,289.78L228.51,287.25L230.51,283.65L230.73,281.92L233.12,279.35L234.71,278.22L242.63,274.48L249.49,271.88L248.94,266.91L249.38,263.84L250.23,261.73L253.41,256.85L255.03,252.51L255.5,244.82L255.27,236.45L255.27,236.45L262.11,235.48L270.47,235.41L277.11,235.74L292.91,237.59L314.11,241.87L326.15,246.02L336.57,247.93L348.12,252.46L348.12,252.46L353.19,255.85L359.78,261.53L368,278.79L366.96,288.35L422.97,368.49L441.85,396.55L441.85,396.55z",
  \u0162ar\u0163\u016Bs: "M21.37,314.18l-0.6,-5.92l-4.17,-9.84l-1.09,-3.63l-1.48,-0.4l-0.41,-1.17l0.52,1.07l1.15,0.2l-0.38,-0.26l-0.28,-0.1l0.3,-0.4l-0.47,-0.1l0.44,-0.26l-0.44,-0.21l1.67,-1.2l-0.14,-4.02l-0.71,-1.73l0.44,0.33l0.22,-2.83l1.54,-1.23l0.49,-1l-0.55,-3.97l-0.71,-1.43V274.6l0.66,-1.79l-0.47,-3.24l0.53,-0.27l0.3,-1.17l0.96,-0.16l1.07,-3.48l0.63,-0.13l0.47,-0.73l-0.36,-2l0.77,-0.94l1.89,-1l0.24,-0.6l-0.49,-4.01l-1.51,-3.59l0,0l2.51,0.17l1.54,0.77l4.76,3.78l0.87,0.2l3.38,-0.84l9.73,-0.29l4.41,-2.03l4.38,2.36l0,0l0.56,11.56l0.88,5.77l-0.96,2.53l-0.11,1.87l-2.59,2.35l-1.93,0.11l-0.48,0.6l-1.8,0.3l-1.62,1.07l-2.8,-0.27l-0.58,0.57l-0.11,1.47l0.55,1.57l0.96,0.7l4.64,0.73l5.77,-0.77l1.8,5.01l2.96,2.12l0.87,1.32l0,0l-3.36,1.66l-0.66,1.8l0.14,3.66l-3.37,2.96l-0.91,1.83l-2.11,0.94l-1.15,2.39l-1.31,0.89l-0.77,2.5l-3.02,4.39l-2.98,5.55l-0.32,2.53l0,0l-2.75,0.77l-1.93,-0.31l-2.81,0.26l-1.64,-1.5l-2.21,-0.2l-0.51,-0.59l-1.21,1.22l-0.11,-0.39l-0.86,0.48L21.37,314.18z",
  Dimashq: "M59.24,459.06L58.27,456.74L56.6,454.96L56.51,450.65L57.83,449.8L67.69,450.12L67.6,459.58L60.65,459.79z",
  "Al Qunay\u0163irah": "M15.37,482.82L17.57,484.1L17.7,484.49L16.66,486.13L20.01,489.49L24.09,489.98L24.48,490.93L24.23,495.53L24.23,495.53L23.24,500.84L23.44,501.43L25.79,503.13L26.15,504.36L23.35,509.9L22.67,516.26L24.95,520.68L26.51,522.6L26.86,524.91L26.34,525.66L24.78,523.77L21.49,524.13L21.32,525.01L22.23,526.77L22.34,529.73L19.47,532.47L19.47,532.47L20.29,529.92L18.24,526.72L17.39,518.92L16.88,517.25L17.17,513.56L16.67,511.5L17.32,510.55L19.29,511.08L20.93,510.63L20.95,509.84L19.61,507.93L21.38,506.04L21.61,502.97L19.53,499.96L16.61,499.17L16.41,497.9L17.61,496.31L18.18,494.42L17.39,490.65L14.23,487.07L15.37,485.13z",
  Dar\u0670\u0101: "M65.49,588.97L61.25,584.64L48.32,574.66L45.63,575.83L41.23,575.18L38.94,575.28L36.98,575.88L36.35,572.24L34.97,569.13L31.46,565.48L31.89,561.35L31.6,559.97L29.97,559.08L27.39,559.14L25.39,558.01L26.33,556.74L26.31,555.73L25.51,555L24.34,554.98L23.24,554.24L22.6,552.57L21.78,551.82L20.16,552.06L18.27,551.74L16.01,550.47L14.38,550.47L11.73,551.25L10.27,550.59L9.95,550.02L9.02,550.15L8.71,549.65L9.12,548.42L12.21,544.84L14.63,540.5L16.23,538.78L19.47,532.47L19.47,532.47L22.34,529.73L22.23,526.77L21.32,525.01L21.49,524.13L24.78,523.77L26.34,525.66L26.86,524.91L26.51,522.6L24.95,520.68L22.67,516.26L23.35,509.9L26.15,504.36L25.79,503.13L23.44,501.43L23.24,500.84L24.23,495.53L24.23,495.53L26.76,496.51L27.77,498.46L30.4,498.76L32.05,498.27L34.74,496.08L36.44,495.36L41.9,495.82L45.38,494.22L48.4,493.73L48.97,493.24L50.34,490.04L49.79,487.37L49.96,486.23L51.22,485.38L53.09,487.82L55.03,489.13L55.66,491.45L58.73,492.17L59.72,493.86L61.73,495.62L65.26,496.44L66.28,495.82L66.91,493.18L68.83,491.32L74.89,487.4L76.67,485.41L78.18,484.76L79.03,485.51L80.32,488.77L83.75,492.66L84.38,496.64L84.38,496.64L84.38,496.64L84.38,496.64L83.09,497.78L82.19,497.97L78.37,497.39L75.6,499.51L74.45,501.89L74.92,503.58L74.61,505.7L75.99,509.42L76.26,512.61L77.19,513.26L79.22,512.61L80.49,512.87L80.9,516.45L82.02,519.09L80.73,519.41L74.67,518.99L71.43,519.22L69.08,520.1L65.02,523.55L62.03,525.4L61.7,526.64L62.3,528.43L61.2,531.35L62.11,535.77L63.95,539.28L62.85,541.69L63.34,545.97L64.47,549.41L64.3,550.06L63.34,550.45L63.1,551.04L63.29,554.34L64.11,555.12L67.43,556.06L71.32,556.49L72.5,558.01L72.09,560.25L69.57,562.29L67.27,563.23L67.16,563.88L68.17,565.79L67.32,568.64L68.36,569.19L70.12,569.35L73.46,569.06L75,570.49L76.89,570.26L77.96,571.07L78.24,571.85L78.21,572.79L77,574.28L76.73,575.34L79.72,578.97L80.07,579.94L79,585.83L79.52,589.84L78.71,594.65L78.71,594.65L77.71,594.37L75.43,592.71L68.47,591.68z",
  "As Suwayd\u0101'": "M84.38,496.64L84.65,496.96L85.59,496.54L101.08,494.71L107.36,492.88L109.2,493.08L112.44,496.08L115.59,497.78L116.85,499.18L117.68,502.12L121.79,506.39L122.42,509.77L123.79,511.37L125.44,512.15L131.36,512.74L134.43,514.01L137.07,515.96L137.23,518.44L139.65,521.66L140.11,523.06L142.77,524.17L145.05,525.69L146.5,525.92L149.03,524.17L151.49,525.21L153.58,527.97L154.35,534.73L155.31,536.46L163.97,544.9L166.83,547.17L169.16,550.19L172.72,552.3L176.24,556.51L176.24,556.51L122.43,590.68L115.83,595.64L111.53,599.79L109.51,600L100.93,597.48L98.44,598.31L96.35,596.69L94.21,596.32L78.71,594.65L78.71,594.65L79.52,589.84L79,585.83L80.07,579.94L79.72,578.97L76.73,575.34L77,574.28L78.21,572.79L78.24,571.85L77.96,571.07L76.89,570.26L75,570.49L73.46,569.06L70.12,569.35L68.36,569.19L67.32,568.64L68.17,565.79L67.16,563.88L67.27,563.23L69.57,562.29L72.09,560.25L72.5,558.01L71.32,556.49L67.43,556.06L64.11,555.12L63.29,554.34L63.1,551.04L63.34,550.45L64.3,550.06L64.47,549.41L63.34,545.97L62.85,541.69L63.95,539.28L62.11,535.77L61.2,531.35L62.3,528.43L61.7,526.64L62.03,525.4L65.02,523.55L69.08,520.1L71.43,519.22L74.67,518.99L80.73,519.41L82.02,519.09L80.9,516.45L80.49,512.87L79.22,512.61L77.19,513.26L76.26,512.61L75.99,509.42L74.61,505.7L74.92,503.58L74.45,501.89L75.6,499.51L78.37,497.39L82.19,497.97L83.09,497.78z"
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

// src/Syria.tsx
import { useState as useState2 } from "react";
var Syria = ({
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
      SyriaSingle,
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
      SyriaMultiple,
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
var SyriaSingle = ({
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
var SyriaMultiple = ({
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
var Syria_default = Syria;

// src/index.ts
var src_default = Syria_default;
export {
  src_default as default
};
