// src/Solomonislands.tsx
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
var viewBox = "0 0 1500 600";
var stateCode = [
  "Capital Territory (Honiara)",
  "Makira",
  "Choiseul",
  "Western",
  "Temotu",
  "Isabel",
  "Guadalcanal",
  "Central",
  "Rennell and Bellona",
  "Malaita"
];
var drawPath = {
  "Capital Territory (Honiara)": "M271.45,269.91L272.35,269.56L272.32,268.88L272.65,267.71L271.81,267.16L271.31,267.49L270.74,267.75L270.12,267.84L267.79,267.92L266.51,267.81L267.36,268.87L269.06,269.53L270.9,269.33L271.45,269.91z",
  Makira: "M376.24,319.25L376.14,317.65L375.16,315.95L373.85,314.88L373.04,315.58L373.05,316.38L373.85,317.86L374.12,317.97L374.53,318.07L374.76,318.33L374.47,318.89L374.21,319.3L374.23,319.62L374.46,319.86L374.88,319.94L376.24,319.25zM350.18,315L349.85,314.8L349.51,314.67L349.19,314.5L348.05,314.91L347.55,316.04L347.58,317.36L348,318.32L347.71,318.45L347.58,318.62L347.43,318.82L347.14,319.11L347.41,319.77L346.89,321.1L347.14,322.02L347.63,322.46L348.27,322.72L349.85,322.93L350.25,323.21L350.68,323.27L351.14,323.15L351.45,322.91L351.72,322.62L352.09,322.44L353.37,322.34L354.21,322.39L354.59,322.65L354.86,323.09L355.56,323.27L357.19,323.27L357.99,323.42L358.37,323.77L358.64,324.19L359.05,324.52L359.41,324.55L360.36,324.43L360.69,324.52L361.11,324.93L361.23,325.22L360.91,325.35L360.48,325.65L360.07,326.36L359.45,327.88L360.43,328.22L360.48,329.09L360.01,330.09L359.45,330.8L360.15,330.77L361.36,330.5L361.73,330.59L362.03,331.23L362,331.87L362.08,332.46L362.74,332.88L361.51,336.66L362.35,336.92L363.19,337.02L363.91,336.81L364.4,336.21L364.9,336.6L365.22,337.02L365.35,337.45L365.22,337.91L365.77,338.08L366.2,338.31L366.47,338.68L366.45,339.2L367.57,340.34L368.21,340.74L368.5,340.2L368.87,339.98L369.69,340.53L370.48,341.28L370.78,341.66L371.71,341.89L372.03,342.47L372.19,343.16L372.63,343.74L373.42,343.95L374.22,343.84L374.93,343.89L375.5,344.61L375.39,345.07L375.67,345.7L376.16,346.09L376.72,345.86L376.94,346.19L377.38,346.69L377.54,347.08L378.43,346.78L379.12,346.97L380.44,347.95L380.49,347.55L380.82,346.66L381.29,347.73L381.69,348.15L382.29,348.32L382.5,348.46L383.12,349.05L383.51,349.19L384.28,349.01L384.62,348.85L384.53,348.73L387.04,349.46L387.61,349.8L388.16,349.91L389.91,349.32L390.67,349.19L391.19,349.42L392.15,350.22L394.8,351.28L395.25,351.61L395.62,352.01L396.05,352.35L396.64,352.49L398.27,352.46L399.03,352.58L399.7,352.95L401.02,351.71L402.4,351.54L406.7,353.21L407.52,353.36L408.53,353.39L409.15,353.5L409.6,353.78L410.44,353.37L411.17,353.42L411.87,353.64L412.67,353.78L413.47,353.41L413.53,352.69L413.1,352.19L412.46,352.49L410.58,352.15L408.18,352.23L406.28,351.92L405.88,350.4L406.11,350.03L406.49,349.64L406.93,349.32L407.31,349.19L407.5,348.89L407.48,345.41L407.24,344.46L406.63,343.7L404.5,342.27L403.71,341.57L403.21,340.65L402.9,338.65L402.59,338.39L402.2,338.26L401.76,337.91L401.49,337.5L400.27,334.21L399.77,333.28L399.09,332.88L398.41,332.37L396.81,330.1L395.62,329.55L395.04,329.56L394.5,329.68L394.1,329.99L393.83,331.28L393.52,331.43L392.5,331.21L390.55,331.44L389.85,331.21L389.22,330.75L388.34,329.61L387.81,329.13L386.97,329.52L385.95,329.46L383.71,328.71L382.84,329.26L381.44,329.58L380.15,329.52L379.58,328.92L379.24,328.47L377.47,327.37L376.72,327.05L375.96,327.01L375.06,327.08L374.12,326.98L373.24,326.42L372.03,324.55L371.25,324.07L370.14,324.52L366.59,321.59L360.16,317.56L353.8,314.72L350.49,315.33L350.18,315z",
  Choiseul: "M120.84,144.07L119.81,144.64L118.83,145.35L119.44,145.53L120.98,145.46L121.45,145.53L122.12,145.89L124.49,146.59L124.14,146.79L123.62,147.21L123.26,147.41L123.26,147.79L125.11,147.83L125.72,147.49L125.78,146.59L127.42,147.79L127.05,147.14L126.92,146.44L127.05,145.81L127.42,145.35L126.98,144.9L126.6,145.35L125.62,144.24L124.11,144.17L122.41,144.37L120.84,144.07zM137.67,148.24L136.96,146.03L136.85,145.12L136.43,144.69L133.58,143.67L131.62,146.03L130.99,147.55L132.14,148.24L132.54,148.36L132.92,148.93L133.37,149.07L133.83,148.96L134.24,148.78L134.63,148.68L135.64,149.11L136.49,149.16L138.11,149.07L137.67,148.24zM65.25,99.33L64.98,98.79L64.79,98.26L64.36,97.94L63.94,97.75L63.24,96.97L62.04,96.52L60.65,96.32L59.63,96.51L57.63,98.19L57.18,99.03L57.16,100.25L57.63,103.54L58.03,104.38L59.29,105.41L59.44,105.61L66.12,111.47L66.84,111.79L67.73,112.08L70.58,113.57L71.57,114.27L73.66,117.85L74.24,118.43L74.98,118.9L77.32,122.17L77.93,123.51L78.38,124.02L79.18,124.24L79.73,124.53L80,125.19L80.14,125.94L80.4,126.5L85.99,133.08L86.96,133.86L87.78,134.17L89.08,134.36L90.24,134.89L91.14,135.69L91.69,136.68L91.2,137.55L92.03,137.45L93.2,136.97L93.74,136.68L94.47,137.05L95.28,137.84L95.92,138.72L96.57,140.54L97.42,141.16L98.27,141.19L98.65,140.6L99.19,140.55L102.37,140.81L103.63,141.49L105.76,142.21L106.9,142.87L106.99,142.01L107.26,141.83L107.72,142.05L108.46,141.28L108.81,140.99L109.32,140.81L108.78,142.24L109.03,143.36L109.83,144.14L111,144.52L113.71,144.76L115.16,145.09L115.95,145.72L116.43,145.46L116.8,145.5L117.06,145.88L117.17,146.59L118.7,143.71L119.42,143.29L121.1,143.22L121.87,142.88L122.08,142.08L122.08,140.6L121.79,139.2L120.98,138.61L119.8,138.65L117.63,139.46L117.03,139.57L115.74,139.57L115.08,139.32L114.45,138.94L114.01,138.98L113.86,139.98L113.49,139.98L113.06,139.21L112.41,138.49L111.67,137.9L111,137.51L109.26,136.94L108.47,136.56L108.13,136.04L108.02,135.21L107.67,134.17L107.08,133.31L106.27,132.93L105.08,132.77L104.04,132.27L103.25,131.48L102.77,130.42L102.47,130.72L101.55,131.28L101.23,130.16L100.68,129.39L100.05,128.75L99.47,127.98L98.49,125.68L97.83,122.96L97.72,120.37L97.54,119.31L97.04,118.43L94.76,116.55L93.47,114.77L92.88,114.27L92.29,114.15L91.61,114.18L91.07,114.11L90.83,113.67L90.55,112.94L89.9,112.56L89.16,112.31L88.13,111.78L85.97,111.38L83.46,110.18L79.72,107.63L77.16,106.94L74.45,105.11L73.61,104.38L70.52,100.86L68.93,99.65L66.66,98.98L66.4,99.12L65.82,99.34L65.25,99.33z",
  Western: "M125.72,223.99L124.72,223.72L124.42,223.58L124.17,223.26L123.82,222.95L123.27,222.86L122.92,223.02L122.59,223.38L122.08,224.18L121.71,223.72L120.82,224.09L119.85,224.06L117.62,223.72L117.44,224.66L118.9,225.73L122.08,227.08L124.95,227.86L127.1,228.97L127.62,229.14L129.22,228.56L129.28,227.29L128.41,226L127.21,225.42L126.78,225.15L126.34,224.57L125.72,223.99zM162.43,231.27L163.68,230.23L165.05,229.88L165.38,229.56L165.58,229.08L165.64,228.52L163.97,227.86L164.2,227.02L164.06,225.63L163.65,224.24L163.15,223.35L163.15,222.07L162.74,222.07L162.68,222.93L162.5,223.73L162.24,224.42L161.92,224.97L160.16,226.31L159.88,226.87L159.47,228.43L159.47,229.19L160.06,229.52L160.34,229.83L161.48,231.63L162.43,231.27zM151.06,213.97L150.67,213.44L150.57,212.93L150.78,212.48L151.28,212.1L151.28,211.69L150.84,211.27L150.65,211.51L150.47,211.6L150.02,211.69L147.93,212.52L147.57,212.92L147.57,213.86L147.89,214.49L148.05,215.07L147.57,215.86L147.36,215.23L147.16,215.05L146.75,214.99L146.52,216.02L145.87,215.99L144.25,214.99L144.29,215.84L144.03,216.34L143.68,216.7L143.43,217.06L143.02,219.17L143.02,222.27L143.31,222.62L145.07,224.18L145.31,224.48L145.67,225.12L145.93,225.42L146.63,225.77L147,226.04L147.16,226.45L147.68,226.72L148.87,227.13L150.2,227.41L151.06,227.29L151.53,227.02L152.57,226.77L153.11,226.45L153.41,226.11L154.15,224.97L156.6,222.79L157.11,221.37L155.75,220L156.23,219.71L156.62,219.36L157.39,218.35L156.75,218.45L156.49,218.54L156.16,218.76L155.69,218.47L154.51,218.29L154.15,217.93L154.31,217.55L155.47,217.09L155.75,216.88L155.99,216.39L156.56,216.34L157.23,216.4L157.8,216.23L158.26,215.7L158.35,215.26L158.2,213.97L157.68,213.05L156.42,212.64L154.91,212.63L153.67,212.92L153.08,213.38L152.49,213.97L151.84,214.3L151.06,213.97zM112.99,215.41L113.1,215.01L113.27,214.8L113.43,214.52L114.05,212.49L114.92,211.47L115.13,211.09L114.89,209.32L114.25,207.82L113.34,206.66L112.26,205.93L111.15,205.91L109.34,207.07L107.65,208.73L106.51,211L105.6,211.66L104,212.52L103.45,212.98L102.92,213.59L102.53,214.33L102.37,215.2L102.86,215.96L104.01,216.87L105.31,217.62L106.27,217.93L106.98,218.4L108.56,220.59L108.95,221.28L109,221.83L108.95,222.52L109.04,223.1L109.54,223.35L110.08,223.44L110.5,223.69L111.2,224.38L112,224.86L113.07,225.13L114.19,225.18L115.13,224.97L115.13,224.59L113.77,224.24L112.55,223.38L110.38,221.05L110.06,220.25L110.14,219.26L110.59,217.52L110.5,216.17L110.59,215.86L110.99,215.6L111.29,215.69L111.56,215.86L111.82,215.86L112,215.86L112.22,215.95L112.49,215.93L112.86,215.63L112.99,215.41zM99.47,200.89L98.6,200.45L98.15,199.59L97.83,197.58L97.13,195.26L97.04,194.48L96.37,193.25L94.87,192.94L93.32,192.84L92.51,192.17L91.68,192.6L92.12,193.42L93.16,194.24L94.14,194.69L93.93,194.89L93.54,195.33L93.33,195.51L95.75,196.01L96.86,198.08L97.73,200.33L99.47,201.34L99.47,200.89zM96.19,190.55L96.11,190.91L96.15,191.17L96.43,191.32L97.04,191.38L96.6,191.76L97.79,192.35L98.67,193.09L99.34,194L99.91,195.06L100.46,196.75L100.7,197.2L101.22,197.43L101.8,197.39L102.25,197.55L102.37,198.41L102.77,198.41L102.81,196.75L102.56,195.02L102.12,193.44L101.55,192.17L100.35,191.06L99.06,190.96L97.66,191.06L96.19,190.55zM78.97,184.28L77.73,184.28L77.48,186.14L79.26,187.71L80.81,187.77L79.82,185.14L79.19,185.29L78.97,184.28zM128.44,192.39L127.07,191.17L126.88,190.39L127.44,189.28L127.03,188.36L126.92,187.23L126.99,184.93L126.77,183.98L126.39,183.24L126.2,182.47L126.62,181.39L125.02,181.26L120.86,178.9L120.66,178.85L120.5,178.84L120.42,178.78L120.45,178.49L119.54,178.84L117.73,179.33L116.76,179.7L115.82,180.31L113.27,182.83L112.69,183.63L111.8,185.66L111.2,186.57L109.89,188.15L109.56,188.98L109.77,189.69L109.51,190.31L109.5,191.61L109.32,192.17L108.9,192.61L108.43,192.78L108.01,192.54L107.72,191.76L107.17,192.28L106.58,192.53L105.88,192.61L105.03,192.62L104.67,192.88L103.8,194.11L103.63,194.48L104,200.1L104.41,200.1L105.03,199.92L107.08,201.12L108.13,201.34L109.44,200.66L110.08,199.58L110.47,198.44L111,197.58L111.69,197.4L113.9,197.61L115.95,197.58L116.22,197.49L116.7,197.26L116.76,197.2L117.69,196.81L118.19,196.81L118.84,197.2L119.2,196.42L119.63,196.51L120.06,196.96L120.45,197.2L121.38,197.02L121.98,196.73L122.53,196.57L123.27,196.75L124.31,197.66L125.25,199.06L125.91,200.5L126.49,202.47L127.9,203.82L128.22,204.44L128.03,205.22L127.61,205.8L127.18,205.9L126.99,205.27L126.67,204.72L125.27,204.33L124.95,203.6L124.84,201.93L124.61,201.21L124.17,200.51L124.17,204.24L124.36,205.08L124.85,206.46L124.95,207.34L125.21,207.53L126.62,209.24L129.26,211.09L130.77,211.77L134.04,212.05L135.62,212.92L136.94,214.33L137.46,215.18L137.67,216.05L137.89,216.31L138.36,216.72L138.8,217.35L138.93,218.35L139.34,218.35L139.69,217.22L139.5,216.25L138.93,215.49L138.11,214.99L138.11,214.62L139.74,214.77L143.43,216.23L143.22,215.76L143.08,215.27L143,214.74L143.02,214.17L143.13,213.5L143.28,213.15L144.47,211.15L144.68,210.66L144.7,210.06L144.47,209.61L144.09,209.47L143.7,209.44L143.43,209.24L143.09,208.2L142.7,206.09L142.2,205.06L141.84,204.69L140.91,203.96L140.57,203.41L140.48,202.86L140.57,201.34L139.96,200.47L138.41,199.42L137.67,198.41L137.43,197.14L137.3,196.75L136.98,196.27L136.75,196.02L135.03,194.77L134.09,194.45L133.11,194.46L131.94,194.69L131.4,194.89L130.68,195.36L130.3,195.51L129.8,195.43L129.42,195.16L129.07,195.07L128.66,195.51L128.5,194.8L128.79,194.11L128.96,193.35L128.44,192.39zM66.63,192.49L67.31,191.26L67.49,189.78L67.02,188.49L67.34,187.74L67.31,186.89L67.02,185.33L66.95,184.47L66.74,183.39L66.42,182.34L65.61,180.97L65.25,179.54L64.98,178.9L64.24,178.03L63.34,177.25L62.3,177.84L62.28,179.15L62.93,182.21L62.51,185.12L62.66,186.46L63.55,187.83L65.06,192.25L65.6,193L66.63,192.49zM101.37,187.39L102.28,184.87L102.45,183.85L102.37,180.97L101.79,178.08L100.54,175.48L98.57,173.35L95.78,171.88L94.34,172.1L92.29,172.64L90.44,173.37L89.64,174.16L89.43,174.64L88,176.85L87.46,178.2L87.25,178.93L87.15,179.7L88.06,182.59L90.46,186.18L93.57,188.74L96.6,188.49L97.07,188.71L97.32,188.68L97.83,188.49L99.09,189.92L100.35,189.13L101.37,187.39zM63.68,169.87L63.92,168.97L63.3,168.52L63.08,168.32L62.54,168.29L61.91,168.79L61.43,169.39L61.37,169.92L62.45,170.48L63.68,169.87zM67.02,154.88L66.45,155.37L65.95,155.33L65.39,155.06L64.61,154.88L62.2,156.27L60.61,158.55L60.18,161.26L61.3,164L62.09,163.58L62.45,163.78L63.07,165.16L63.01,165.41L63.07,165.59L63.55,165.65L63.6,165.72L64.61,166.06L65.02,166.51L65.8,168.13L66.13,168.39L66.7,168.73L67.24,169.13L67.47,169.62L66.86,172.13L67.06,173.13L69.88,173.91L70.05,174.82L69.8,176.03L69.93,177.25L70.33,177.25L71.03,176.83L71.7,177.01L72.2,177.42L72.39,177.63L73.15,177.32L73.59,176.8L73.58,176.15L73.02,175.41L72.59,173.97L73.53,172.28L74.98,170.76L76.1,169.82L78.31,166.8L79.22,164.87L78.77,164L77.6,163.57L76.31,162.77L74.96,162.28L73.61,162.8L72.8,161.94L73.24,161.49L72.02,161.1L71.44,160.7L70.93,159.29L70.35,158.87L69.77,158.63L69.52,158.38L69.53,157.9L69.5,157.59L69.32,157.41L68.39,157.29L68.33,157.11L68.4,156.84L68.25,156.53L67.51,155.83L67.2,155.39L67.02,154.88zM4.64,139.98L3.72,140.11L3.38,140.12L2.96,139.98L1.29,142.07L0.9,143.17L1.94,143.67L4.99,143.91L6.26,143.61L7.51,142.46L6.82,141.84L6.26,141.14L5.59,140.48L4.64,139.98zM19.41,121.72L17.36,120.52L15.25,118.72L14.5,118.43L14.33,118.81L14.3,119.18L14.5,119.66L13.49,120.02L13.13,121.12L12.94,122.01L12.45,121.72L10.88,125.06L10.78,125.88L11.13,126.18L12.82,126.71L13.26,127.03L13.94,127.7L14.5,127.98L15.58,127.45L16.61,127.58L17.6,127.59L18.59,126.71L19.34,126.87L20.45,126.77L21.46,126.47L21.9,126.09L22.12,125.05L22.48,124.22L22.48,123.4L21.66,122.38L21.2,122.16L19.41,121.72zM36.54,113.12L35.77,112.77L34.74,112.5L34.21,112L34.37,111.11L34.79,110.4L35.43,109.94L36.26,109.73L36.26,109.32L35,109.32L33.37,110.32L33.2,111.52L33.82,112.75L34.59,113.89L34.78,113.88L35.29,114.18L35.62,114.54L35.2,114.71L34.67,114.83L34.42,115.1L34.21,115.95L34.33,116.48L34.71,116.89L34.99,117.31L34.79,117.8L33.9,118.63L32.95,119.29L33.57,119.34L34.12,119.21L34.59,118.91L35,118.43L35.1,118.75L35.23,118.95L35.34,119.19L35.41,119.66L36.17,119.01L36.64,118.19L36.93,117.27L37.08,116.33L37.67,116.64L38.31,116.78L38.95,116.69L39.54,116.33L39.1,116.12L37.96,115.79L37.49,115.54L37.15,115.2L36.26,113.89L36.54,113.12z",
  Temotu: "M797.69,442.23L798.66,441.88L799.1,441.67L798.92,440.8L798.28,440.74L797.89,441.22L797.42,441.7L797.69,442.23zM687.46,403L688.45,402.29L688.8,401.35L688.76,400.8L688.22,400.6L687.13,400.69L686.33,401.48L686.01,402.49L686.41,403.18L687.46,403zM681.87,399.25L680.5,399.48L679.12,399.4L678.01,399.41L676.79,400L676.19,400.34L675.71,400.97L675.72,401.97L676.46,402.9L677.5,404.19L677.83,404.65L678.65,404.96L679.36,405.64L680.26,406.86L681.97,407.08L682.97,407.11L684.23,406.96L688.72,406.65L688.37,404.24L685.11,404.47L685.18,403.28L685.11,402.43L685.8,400.46L683.28,399.54L681.87,399.25zM663.58,379.13L663.53,377.97L663.04,377.1L662.12,376.36L661.2,376.02L660.41,376.29L659.36,377.26L658.49,378.36L658.36,379.74L658.71,380.27L659.4,379.7L660.25,379.19L660.32,380.03L660.11,380.44L659.75,380.9L659.71,381.45L659.73,381.86L660.23,382.15L660.69,382.27L661.29,382.12L661.75,382.07L663.13,380.58L663.58,379.13zM633.4,342.14L631.33,341.71L629.4,342.57L625.14,342.11L622.42,342.31L620.61,344.01L619.62,345.41L619.44,347.02L619.37,347.95L619.06,348.74L618.47,348.56L617.59,347.57L617.85,345.47L617.3,345.5L616.62,346.46L616.08,347.29L614.93,348.11L614.97,349.38L615.14,351.79L615.96,353.23L617.75,353.34L619.45,351.8L620.17,351.93L620.89,352.79L620.7,354.47L621.46,355.23L623.25,352.52L625.79,349.56L627.91,349.23L628.58,349.42L629.12,349.02L629.87,348.43L631.42,349.05L631.83,348.93L633,349.02L633.65,348.5L634.75,347.98L635.47,347.34L637.7,346.46L637.94,345.27L638.6,344.58L638.29,343.07L636.6,343L634.82,343.24L634.58,342.97L634.42,342.69L633.4,342.14zM614.47,327.97L614.92,327.68L615.05,327.08L614.53,326.26L613.68,326.04L613.33,326.33L613.18,326.75L613.13,327.44L613.42,328.02L613.89,328.15L614.47,327.97zM644.27,315.74L644.03,315.39L644.07,316.56L643.87,317.84L643.44,319.1L643.6,319.52L644,319.55L643.88,320.35L643.96,321.24L644.8,321.12L645.92,320.07L646.51,318.92L645.74,318.39L644.86,318.42L644.66,318.53L644.26,318.67L644.27,315.74zM701.26,295.83L701.41,295.35L701.19,294.57L700.5,293.79L699.87,293.73L699.6,294.29L700.06,295.38L700.77,295.88L701.26,295.83zM696.15,290.41L695.93,290.24L695.17,290.33L695.9,290.53L696.15,290.41z",
  Isabel: "M249.66,210.15L248.97,209.3L248.6,208L248.79,205.17L248.31,204.19L246.56,203.79L244.85,203.95L243.65,204.51L242.87,205.54L242.43,207.14L242.49,208.72L243.15,209.44L244.07,209.94L244.92,210.89L245.74,210.32L246.24,210.53L246.97,211.69L247.83,212.58L248.33,212.98L249.01,213.34L249.75,213.61L250.36,213.72L250.92,213.64L251.47,213.34L252.12,212.72L252.17,212.33L251.47,211.69L249.66,210.15zM175.59,155.5L174.11,155.2L173.42,154.88L172.96,154.47L172.38,154.48L171.96,154.74L171.96,155.09L172.33,155.74L171.98,155.9L171.48,155.79L171.37,155.67L171.04,155.63L170.08,155.36L169.51,155.29L169.25,155.48L169.39,155.91L169.69,156.33L169.92,156.53L171.11,156.92L171.8,157.76L172.05,158.62L171.96,159L173.42,159L174.92,159.37L175.5,159.38L174.76,157.93L174.65,157.35L176.96,158.73L178.11,158.99L178.73,158.18L179.11,158.99L179.8,159.82L180.7,160.35L181.64,160.25L181.82,159.58L181.22,158.6L180.27,157.73L179.39,157.35L178.46,157.24L177.29,156.92L176.29,156.44L175.59,155.5zM185.98,155.88L185.48,155.54L179.6,153.52L178.36,152.78L177.35,152.62L176.93,153.32L177.02,154.35L177.55,155.29L180.64,156.95L185.32,160.88L185.32,163.39L185.22,164.03L185.06,164.61L185.03,165.25L185.32,166.06L186.27,166.88L188.87,168.33L189.46,169.41L190.48,169.13L191.52,169.5L192.43,170.21L193.1,171.02L193.92,173.18L194.55,173.94L195.18,173.12L195.59,173.12L196.19,173.62L196.85,174.36L196.4,175.23L197.27,175.8L199.1,176.24L200.13,175.96L200.62,177.01L200.95,179.32L204.44,180.97L205.57,181.18L206.44,181.77L206.97,182.7L207.08,183.9L208.36,183.35L208.76,183.04L208.88,183.93L209.21,184.26L209.72,184.41L210.39,184.73L210.53,184.97L210.79,185.8L210.8,185.97L211.19,186.02L212.05,185.91L212.44,185.97L214.08,186.79L214.42,186.76L214.62,186.49L214.87,186.26L215.34,186.35L215.42,186.61L215.41,187.11L215.46,187.65L215.72,188.04L216.09,188.11L217.01,187.97L217.38,188.04L223,192.15L224.21,192.81L225.5,193.06L226.8,192.62L226.88,193.44L227.43,193.94L228.22,194.21L229.06,194.27L229.74,194.6L230.29,195.36L230.89,196.75L231.91,196.44L233.01,196.77L235.03,198L235.83,197.71L236.85,197.95L237.83,198.47L239.17,199.59L240.66,200.21L242.79,201.52L247.78,202.58L250.58,205.07L251.26,205.48L252.17,205.63L252.32,206.01L252.19,206.54L252.32,207.14L252.89,207.76L254.78,209.24L255.61,210.33L256.03,210.74L257.27,211.14L257.98,212.25L259.02,212.66L259.2,213.02L259.34,213.44L259.64,213.76L259.93,213.8L260.63,213.7L260.92,213.76L262.83,214.89L263.37,214.99L264.16,214.28L263.47,213.26L261.7,211.89L261.66,210.66L261.49,209.79L261.01,208.88L259.21,206.37L258.66,205.86L258.17,206.4L257.6,206.69L257.04,206.69L256.54,205.67L255.6,205L255.55,204.65L256.07,204.26L256.74,204.18L257.41,204.35L257.94,204.65L258.39,204.31L259.64,202.58L260.92,201.23L260.66,200.64L249.09,191.9L243.54,188.58L240.76,186.35L240.66,186.2L240.51,185.71L240.38,185.52L239.68,185.23L239.53,185.14L238.74,184.53L237.04,183.58L236.06,182.83L235.46,181.79L234.94,180.53L234.32,179.86L233.39,180.56L232.9,180.13L232.45,179.83L231.34,179.32L231,180.09L230.2,180.31L228.25,180.15L227.64,179.64L227.16,178.67L226.55,178.15L225.53,178.9L225.22,178.16L224.88,177.63L224.32,177.35L223.3,177.25L222.73,177.02L222.1,176.5L221.91,175.94L222.68,175.59L221.36,175.25L220.26,175.17L219.15,175.41L217.79,176.06L216.16,174.78L215.33,175.09L214.95,174.57L214.72,173.68L214.31,172.92L213.6,172.45L211.21,171.47L210.35,171.78L209.42,171.22L208.96,170.15L209.58,168.96L208.32,168.26L206.52,166.71L205.44,166.06L203.29,165.28L202.54,164.82L202.03,164.28L201.11,163.04L200.02,162.4L199.07,160.64L198.69,160.25L198.1,160.02L197.38,159.49L196.21,158.38L195.82,157.7L195.63,156.95L195.31,156.33L194.57,156.08L194.2,156.22L193.75,156.57L193.34,157L193.1,157.35L190.76,156.36L189.89,155.58L189.46,154.39L189.17,154.46L188.99,154.53L188.82,154.65L188.6,154.88L187.73,154.56L187.09,155.18L186.56,155.9L185.98,155.88zM168.58,149.63L168.04,149.28L167.42,149.04L166.84,148.65L166.36,148.69L166.11,149.28L166.19,149.97L166.63,150.31L167.44,150.49L168.71,151.34L170.5,151.79L171.15,152.4L171.66,153.09L172.15,153.6L172.84,153.86L175.5,154.39L175.23,153.65L175.34,153.09L175.74,152.67L176.32,152.36L175.24,151.59L173.82,151.03L172.52,150.94L171.78,151.54L170.4,150.36L169.7,150.06L168.92,150.31L168.58,149.63zM166.4,144.07L165.26,144.33L163.7,145.82L163.14,145.72L162.73,145.72L161.91,146.59L161.91,146.96L163.17,147.01L163.84,147.65L164.36,148.47L165.18,149.07L165.62,146.96L165.93,147.27L166.81,147.79L166.78,147.14L166.84,146.5L167,145.9L167.23,145.35L167.03,145.47L166.63,145.61L166.4,145.72L166.4,144.07z",
  Guadalcanal: "M266.51,267.81L265.42,267.42L264.63,266.76L263.82,265.79L263.18,264.75L262.92,263.88L262.53,263.35L260.1,261.58L256.88,258.65L254.76,257.28L252.69,256.57L248.92,258.81L247.99,259.09L247.11,259.46L246.73,260.34L246.56,262.41L245.94,263.08L245.68,263.48L245.92,263.65L246.56,264.29L246.62,264.93L246.9,265.74L246.97,266.38L246.53,267.99L246.56,268.7L246.82,269.28L247.67,270.53L247.78,271.16L247.46,271.78L246.88,272.24L246.1,272.64L246.26,273.22L246.66,273.65L247.56,274.3L248.53,275.32L249.39,276.44L250.09,277.67L250.65,279.04L250.64,279.68L250.48,280.22L250.67,280.6L251.67,280.74L252.09,280.95L252.22,281.46L252.28,282.08L252.5,282.61L252.81,282.85L253.31,282.98L253.55,283.23L253.58,283.51L253.49,284.22L253.55,284.47L255.19,285.3L256.27,286L259.04,288.85L260.28,289.76L261.25,289.69L262.21,289.26L263.37,289.08L264.32,289.39L266.37,290.47L267.67,290.7L269,290.8L270.32,291.15L271.6,291.36L272,291.58L272.55,291.38L273.22,291.37L274.87,291.58L277.55,291.54L282.61,290.75L289.33,291.05L290.26,291.36L290.76,291.69L292.53,292.4L292.81,292.69L293.2,293.47L293.35,293.69L293.62,293.74L294.32,293.63L294.58,293.69L295.11,294.33L295.55,295L296.07,295.55L296.85,295.77L299.3,295.31L300.61,295.56L304.44,297.38L308.77,298.47L309.86,297.61L311.14,296.93L313.48,296.18L317.99,295.24L319.56,294.22L319.65,292.4L319.29,291.82L318.89,291.47L318.57,291.1L318.42,290.51L318.46,289.21L318.41,288.55L318.2,288.25L317.45,287.93L317.29,287.18L317.35,286.33L317.2,285.72L316.7,285.44L314.71,284.9L313.46,284.07L312.84,283.77L312.08,283.65L311.12,283.95L310.46,283.93L310.16,283.44L310.03,280.89L309.77,279.65L309.35,278.62L307.79,276.89L305.27,275.01L302.54,273.8L300.31,274.1L298.63,271.48L297.66,270.37L295.25,269.53L294.01,267.81L292.79,267.29L292.44,267.01L292.18,266.72L292.09,266.59L291.71,266.63L291.1,266.94L290.86,267.01L286.36,267.01L286.02,266.95L285.5,266.62L285.17,266.59L284.85,266.77L284.34,267.31L283.94,267.42L282.79,267.29L280.86,266.72L279.58,266.59L279,266.77L277.94,267.59L277.36,267.84L276.71,267.85L276.07,267.75L274.87,267.42L273.49,266.87L272.73,266.67L272.21,266.8L271.81,267.16L272.65,267.71L272.32,268.88L272.35,269.56L271.45,269.91L270.9,269.33L269.06,269.53L267.36,268.87L266.51,267.81z",
  Central: "M260.1,247.82L259.78,248.12L259.49,248.2L259.2,248.19L258.83,248.27L258.41,249.43L258.51,250.65L259.02,251.61L259.87,252.01L260.69,251.52L260.82,250.36L260.54,248.98L260.1,247.82zM294.22,250.28L294.95,249.52L294.49,249.08L293.93,248.82L293.22,248.72L292.31,248.69L291.66,248.26L290.04,245.38L289,245.27L288.39,246.54L287.63,249.52L287.27,249.96L286.71,250.5L286.02,250.98L285.36,251.18L283.94,251.17L283.43,251.41L283.08,252.01L283.81,252.12L284.19,252.38L284.23,252.77L283.94,253.25L285.2,253.14L286.57,252.85L287.47,252.33L287.22,251.59L288.4,251.23L289.59,251.69L290.8,252.41L292.09,252.83L292.53,252.42L293.33,251.9L294.22,250.28zM223.21,246.09L223.35,245.54L223.93,244.96L223.82,244.48L223.93,244.32L223.93,243.72L224.08,243.51L224.23,243.36L224.33,243.2L224.34,242.93L223.73,243.43L222.5,244.87L221.89,244.96L220.89,247.15L220.68,248.29L220.63,249.93L223.3,248.65L224.17,247.66L224.34,246.16L223.53,246.36L223.21,246.09zM279.4,241.19L278.98,240.9L278.82,240.92L278.59,241.19L278.88,241.68L278.98,242.06L278.87,242.44L278.59,242.93L278.18,242.47L277.55,243.31L276.43,243.66L275.35,243.78L274.87,243.92L274.94,244.36L275.15,244.68L275.48,244.89L275.92,244.96L276.26,245.18L276.35,245.7L276.38,246.26L276.5,246.61L277.32,247.03L278.41,247.28L279.52,247.23L280.43,246.81L281.37,246.49L282.11,247.09L283.08,248.69L283.49,248.69L283.23,247.78L283.08,247.45L283.8,247.49L284.35,247.81L284.69,248.35L284.76,249.07L285.25,248.88L285.57,248.86L285.77,249.05L285.98,249.52L286.94,248.57L287.79,246.99L288.19,245.27L287.81,243.92L286.79,242.93L285.59,242.08L284.53,241.91L283.94,242.93L283.49,242.93L282.62,241.69L281.57,241.55L280.47,241.66L279.4,241.19zM218.2,240.82L217.98,241.31L217.63,241.52L217.16,241.48L216.57,241.19L215.72,241.19L216.24,241.61L216.62,242.11L216.86,242.66L216.94,243.3L216,243.03L215.72,242.93L215.72,243.72L214.92,243.38L214.35,243.58L214.15,244.15L214.53,244.96L212.65,245.01L212.55,245.69L214.08,247.82L214.76,247.35L215.23,247.7L215.65,248.32L216.16,248.69L219.02,247.82L219.88,246.99L221.89,242.93L220.67,242.53L220.21,242.62L219.74,243.29L219.44,243.3L218.85,242.8L218.7,242.28L218.61,241.64L218.2,240.82zM276.95,239.97L276.62,239.17L275.68,237.92L274.78,238.08L274.59,238.58L274.87,240.18L274.62,241.03L274.21,241.73L274.12,242.35L274.87,242.93L275.57,241.27L276.07,240.83L276.91,241.19L276.95,239.97z",
  "Rennell and Bellona": "M273.27,393.51L272.63,393.22L272.04,392.8L271.18,391.88L270.95,391.8L270.73,391.76L270.53,391.67L270.32,391.43L269.89,392.16L268.69,393.28L268.28,394L267.93,395.07L268.06,395.38L268.5,395.85L268.8,396.27L269.05,397.13L270.76,399.28L271.55,399.97L272.61,400.23L273.29,399.97L274.11,399.53L275.07,399.45L276.17,400.23L275.98,400.48L275.68,401.11L276.87,401.52L279.19,402.81L280.22,403.2L281.47,403.31L282.18,403.3L282.71,403.2L283.09,402.86L283.66,401.82L283.94,401.52L284.55,401.43L285.22,401.52L285.86,401.71L286.36,401.94L287.03,402.48L287.2,402.95L287.15,403.43L287.22,404.03L287.22,404.5L287.11,404.87L287.26,405.24L287.99,405.71L288.59,405.86L289.87,405.94L290.49,406.13L291.71,407.08L292.24,408.16L292.91,410.76L293.22,411.17L295.46,412.69L295.81,412.85L296.16,412.84L297.07,412.43L297.71,413.09L298.35,414.11L299.09,414.92L299.93,414.97L300.37,414.51L300.84,413.27L301.16,412.85L301.87,412.58L302.38,412.68L302.9,412.86L303.62,412.85L305.02,411.85L303.96,410.51L300.31,408.25L293.73,403.46L291.27,402.36L288.59,401.55L287.36,400.99L285.62,399.65L283.49,398.6L281.72,397.25L278.36,395.63L277.12,394.83L275.92,393.76L275.35,393.49L273.93,393.56L273.27,393.51zM261.2,382.05L260.5,381.43L259.48,381.13L258.42,380.99L258.04,380.76L257.66,380.6L257.26,380.53L256.78,380.58L257.74,381.73L258.77,382.22L259.93,382.52L261.33,383.07L261.2,382.05z",
  Malaita: "M388.66,283.23L387.9,283.55L387.13,283.46L386.41,283.57L385.8,284.47L385.71,285.27L386.41,289.53L387,291.15L387.82,292.52L388.66,293.23L388.94,292.21L388.94,291.2L388.18,286.17L387.81,285.3L388.05,285.12L388.14,284.93L388.25,284.47L388.61,284.04L388.71,283.73L388.66,283.23zM355.61,266.53L355.37,265.56L354.95,264.96L352.89,263.7L352.09,262.86L351.59,262.13L351.3,262.08L350.86,262.41L352.14,264.57L352.54,265.73L352.54,267.01L352.79,266.89L353.46,266.71L353.72,266.59L353.93,267.85L354.4,268.85L354.59,269.82L353.61,271.58L353.58,272.35L353.72,273.68L353.72,277.23L353.72,280.95L354.08,282.22L354.94,283.72L355.99,285.14L356.97,286.17L357.59,285.13L358.02,283.43L358.67,283.23L359.33,283.56L359.71,284.23L360.27,285.72L362.74,288.44L362.98,289.68L363.54,289.46L364.12,288.37L364.4,287L364.25,285.65L363.38,283.62L363.18,282.61L363.26,280.42L363.14,279.36L362.74,278.25L361.95,276.84L361.48,276.17L360.91,275.55L360.43,274.9L359.99,273.55L359.66,273.04L358.93,272.17L357.41,269.08L355.61,266.53zM434.62,204.36L434.94,204.25L435.19,204.09L435.4,203.85L434.68,203.59L434.04,203.56L433.78,203.83L434.26,204.44L434.62,204.36zM318.1,202.65L317.48,202.31L316.75,201.72L315.62,200.1L314.87,199.68L313.48,199.65L313.48,199.27L312.96,199.21L312.43,199.47L312.01,199.88L311.84,200.31L313.69,201.53L313.89,202.06L313.52,202.54L312.87,202.87L312.25,203L311.8,202.82L310.62,201.72L308.39,200.89L306.17,200.63L304.95,201.54L305.7,204.24L306.35,205.15L308.39,207.17L309.17,207.55L309.47,208.14L311.84,211.27L313.28,214.44L313.27,214.99L312.17,215.28L310.41,216.81L309.35,217.52L311.29,221.79L311.41,222.34L311.44,225.61L311.67,226.44L314.14,231.44L314.97,232.74L315.9,235.79L315.94,236.67L316.26,237.14L316.36,237.48L316.26,237.83L315.94,238.29L316.74,239.73L317.79,242.7L322.15,250.76L323.46,252.15L326.85,253.68L328.25,254.91L328.36,255.35L328.26,256.34L328.45,256.79L328.87,257.02L329.84,256.93L330.3,257.02L331.11,257.6L332.78,259.5L332.46,260.54L335.26,260.93L336.7,262.61L340.8,264.71L343.63,267.66L344.28,268.7L344.48,269.38L344.58,270.56L344.72,271.16L345.03,271.72L347.41,274.84L347.84,275.76L348,276.8L348.58,276.85L351.68,279.04L352.58,279.48L353.22,279.29L353.59,278.52L353.62,277.22L352.9,272.44L351.75,270.36L350.9,269.21L350.27,268.7L349.73,268.16L347.84,263.4L347.16,262.44L344.8,259.98L344.3,259.25L344.17,258.6L344.72,258.26L345.29,258.55L345.59,259.15L345.96,259.53L346.77,259.09L346.06,258.4L345.7,256.21L345.32,255.74L345,255.41L344.75,254.7L344.7,253.99L344.91,253.66L345.51,253.63L347.14,253.25L347.14,252.83L346,252.47L345.54,252.42L345.75,251.6L345.39,251.05L344.68,250.87L343.9,251.18L343.67,250.74L343.29,250.43L342.2,249.93L343.7,248.75L343.9,248.48L343.77,247.82L343.42,247.46L343,247.24L342.65,246.99L342.22,246.76L341.83,246.75L341.52,246.59L341.42,245.95L341.43,245.31L341.36,244.81L341.12,244.43L340.6,244.13L340.9,243.2L340.56,242.23L339.87,241.49L339.14,241.19L338.62,240.84L338.8,240.15L339.41,239.68L340.19,239.98L339.12,238.47L337.74,237.12L336.24,236.06L334.83,235.39L334.74,235.49L334.48,235.64L334.09,235.67L333.6,235.39L333.24,234.84L333.39,234.46L333.64,234.13L333.6,233.7L333.08,233.11L331.44,231.87L330.9,231.63L329.47,232.3L328.62,232.44L328.25,231.85L327.98,231.29L326.86,230.23L326.61,229.33L326.48,228.45L326.27,227.68L326.29,226.9L327.24,225.25L327.27,224.45L327.01,223.65L326.61,222.86L327.74,222.25L329.09,221.76L330.22,221.05L330.7,219.79L330.46,218.65L329.87,217.5L328.45,215.63L326.04,213.59L322.93,210.24L320.92,207.14L320.65,206.92L319.82,206.41L319.65,206.11L319.61,205.48L319.51,204.98L319.24,204.24L318.66,203.17L318.1,202.65zM308.96,176.5L308.23,174.33L307.88,173.68L307.48,173.33L306.81,173.47L306.54,174.2L306.87,174.94L308.01,176.51L308.54,176.59L308.96,176.5z"
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

// src/Solomonislands.tsx
import { useState as useState2 } from "react";
var Solomonislands = ({
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
      SolomonislandsSingle,
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
      SolomonislandsMultiple,
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
var SolomonislandsSingle = ({
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
var SolomonislandsMultiple = ({
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
var Solomonislands_default = Solomonislands;

// src/index.ts
var src_default = Solomonislands_default;
export {
  src_default as default
};
