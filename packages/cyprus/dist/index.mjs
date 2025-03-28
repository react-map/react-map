// src/Cyprus.tsx
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
var stateCode = ["Nicosia", "Limassol", "Larnaca", "Famagusta", "Paphos", "Kyrenia"];
var drawPath = {
  Nicosia: "M174.6,142.45l3.27,0.51l6.23,3.09l3.79,0.51l0.89,-1.24l7.19,-0.29l1.15,1.08l4,-1.95l1.62,-1.95l-0.18,3.57l2.33,0.26l0.97,1.63l3.92,1.95l2.25,-1.63l5.21,0.45l2.46,-0.96l4.5,0.19l2.96,1.59l0.84,-0.48l-0.71,-0.96l0.97,-0.22l2.93,2.01l-0.18,-2.36l0.97,-0.77l0.71,-0.16l0.18,1.56l2.67,0.32l-1.2,-1.79l0.86,-0.86l3.03,1.44l0.21,1.37l4.45,0.38l1.33,-0.92l1.49,1.75l1.57,0.35l1.07,3.63l3.92,-0.7l0.86,1.31l0.63,-3.48l2.33,0.35l0.39,-2.42l1.57,1.02l0.99,-1.56l1.28,1.05l0.81,-1.15l1.99,0.51l3.56,3.22l0.81,-1.53l6.59,1.21l2.17,2.39l1.33,-1.4l10.12,-0.19l2.43,0.73l8.03,-1.18l6.54,-3.16l1.78,0.16l0.92,-2.1l-0.84,-1.98l0.39,-1.85l3.48,-3.92l8.61,0.64l3.22,-0.41l0.86,-1.31l3.82,0.89l-1.1,1.15l-2.22,0.16l1.94,0.7l5.07,-2.23l3.35,1.53l2.07,-0.86l0,0l-0.24,3.48l1.67,5.01l-0.26,2.87l2.8,1.28l1.41,3.35l-0.44,1.31l-2.64,0.16l-1.15,1.34l1.05,8.51l2.25,2.33l0.13,4.01l-0.94,2.68l-3.95,4.4l-1.86,0.38l-0.73,1.75l0.76,2.96l1.73,1.72l1.52,-0.54l0.21,1.37l2.62,0.76l3.5,-0.89l1.6,0.83l1.73,4.23l0,0l-3.74,6.65l-3.82,-0.35l-1.75,-1.78h-3.56l-1.46,-2.67l-3.82,-1.05l-1.52,1.81l-2.51,0.51l-1.36,2.35l1.31,1.18v3.06l-2.33,0.99l0.13,1.53l-3.22,1.59l-1.18,5.76l0.52,0.64l2.96,-0.64l0.94,5.82l2.56,6.3l2.17,0.64l-0.21,2.61l-1.96,-0.67l0.92,3.59l-1.18,0.41l0.6,1.62l-2.09,0.73l-1.31,1.75l-0.55,2.61l1.13,2.06l-7.72,-3.72l-5.86,4.61l-1.13,-1.62l-1.46,0.64l-3.61,-3.02l-3.66,-0.6l-0.03,4l1.33,3.37l-2.41,5.27l-2.41,1.33l-5.94,-1.94l-4.66,0.7l-3.92,1.97l-0.86,-2.45l-3.92,-2.41l-1.15,1.87l-3.56,2.29l-0.99,3.94l-3.48,3.37l-5.26,2.19l-2.35,2.7l-3.9,-0.06l1.44,-0.83l-0.05,-2.92l-3.74,-0.22l0.58,-1.9h-2.15l-3.5,2.13l-4.47,0.25l-0.84,-2.83l-2.2,-0.25l-1.2,1.56l-0.76,-1.49l-1.28,0.38l-0.68,-1.68l-2.04,1.94l0.58,2.35l-4.55,0.57l-4.68,4.76l0,0l-2.25,-1.11l-2.33,0.32l-1.44,-2.6l-3.61,-1.02l-3.74,0.41l-1.23,1.94l-1.96,0.6l-3.4,-2.67l-1.88,-3.27l-0.63,-3.33l-2.15,-0.16l-3.84,-2.79l-2.56,-0.29l-5.05,-7.02l-5.83,-0.1l-3.69,-1.4l-10.36,6.93l-5.86,-1.56l-2.46,0.92l-4.84,-0.25l-2.15,-2.67l-3.32,0.25l-4.11,-2.6l-7.9,-2.8l-1.2,0.89l-0.5,2.54l-3.98,-0.06l-1.07,1.46l0.76,3.08l-1.78,4.19l-0.21,5.43l0,0l-2.85,0.92l-0.13,-2.64l-4.71,-1.87l-1.86,1.37l-0.71,4l-1.28,0.41l-1.12,3.43l-6.46,-2.54l2.2,-0.79l1.41,-2.13l-5.18,-0.83l0.31,2.7l-1.33,2.79l-2.48,-4.7l-2.64,-1.62l-1.23,-7.34l0.78,-1.08l2.3,0.16l-0.18,-4.35l1.91,-3.21l-0.81,-5.47l-2.33,-0.57l2.35,-3.05l-0.24,-2.19l-1.86,-3.88l-1.96,-0.76l-0.31,-3.94l-1.39,-1.72l-7.01,-2.29l-2.93,-7.03l-2.25,-0.6l1.83,-2.26l0.39,-2.23l3.11,0.29l1.7,-1.85L95.84,201l0.63,-9.64l-5.91,-2.39l0.05,-5.19l-4.81,-2.36l-3.4,-4.87l-3.19,-1.46l-1.18,-1.53l0,0l3.74,-0.92l2.3,-1.82l3.95,0.16l4.68,-4.56l1.88,1.15l2.04,-0.45l1.39,-1.43l2.3,-0.22l2.9,1.18l1.33,-0.73l0.97,1.75l1.62,0.57l5.02,1.18l4.05,-0.19l4.58,1.85l2.12,-0.61l1.57,2.17l9.94,3.66l3.17,3.18l5.39,1.75l2.54,1.94l3.87,-0.8l7.82,-5.29l3.35,-0.76l4.53,-4.87l3.82,-7.65L174.6,142.45z",
  Limassol: "M131.41,256.98L131.62,251.55L133.4,247.35L132.64,244.27L133.72,242.81L137.69,242.88L138.19,240.33L139.39,239.44L147.29,242.24L151.4,244.84L154.72,244.59L156.86,247.26L161.7,247.51L164.16,246.59L170.02,248.15L180.38,241.22L184.07,242.62L189.9,242.72L194.95,249.74L197.51,250.02L201.36,252.82L203.5,252.98L204.13,256.31L206.01,259.58L209.41,262.25L211.38,261.64L212.61,259.71L216.35,259.29L219.96,260.31L221.39,262.91L223.72,262.6L225.97,263.71L225.97,263.71L224.38,271.13L226.76,272.09L228.46,271.67L228.46,273.13L229.42,273.45L234.47,273.07L238.97,274.78L239.36,275.83L245.33,276.37L249.64,279.61L250.51,282.3L252.16,282.78L253.65,287.15L257.15,288.3L258.93,290.14L263.09,297.62L262.41,305.61L261.15,309.66L262.36,311.69L261.65,314.19L263.17,316.35L263.17,316.35L261.96,319.48L259.01,320.43L241.88,320.18L229.92,317.96L208.21,325.94L204.94,328.35L202.33,332.06L202.35,331.42L199.63,331.99L197.04,334.62L197.51,337.63L195.5,336.23L194.11,339.4L192.65,345.95L193.3,355.31L197.91,359.49L200.47,363.38L198.22,364.9L191.42,362.53L184.2,361.55L181.66,363.22L177.19,362.37L173.53,363.66L173.45,362.75L175.46,361.17L174.86,357.97L174.1,357.75L174.76,356.14L170.94,347.28L167.43,341.33L158.15,332.31L155.19,332.72L151.35,331.42L149.88,333.32L145.09,332.12L143.81,333.76L136.44,332.97L131.88,335.32L128.27,335.32L127.46,337.09L125.71,337.22L124.4,338.48L118.28,337.5L117.24,338.13L116.82,340.06L113.55,340.38L106.96,336.8L98.85,334.81L98.85,334.81L98.17,327.65L99.14,324.77L97.1,320.56L99.55,320.05L101.83,318.31L101.36,316.16L102.59,313.78L104.34,314.32L107.22,313.24L109.57,310.39L110.85,310.42L111.95,308.14L113.84,307.89L114.67,306.59L116.9,306.81L118.1,300.19L119.38,299.62L117.39,296.76L114.02,296.06L114.28,293.66L112.66,292.67L115.61,289.56L117.79,290.33L118.18,286.55L119.75,284.49L125.45,282.21L125.19,279.42L126.68,275.01L130.79,271.51L133.56,270.47L134.76,267.52L137.14,266.79L136.72,263.07L132.28,261.9z",
  Larnaca: "M346.79,192.44L350.85,192.19L353.91,190.88L354.85,193.17L362.07,197.47L361.7,202.05L363.06,210.04L368.61,209.27L369.6,206.86L370.54,206.19L373,206.63L376.19,202.59L377.42,202.75L378.57,203.96L375.67,210.77L377.84,214.46L379.07,214.71L384.62,210.16L388.12,212.26L388.33,215.63L392.31,218.08L392.41,220.69L394.97,220.31L396.02,221.1L395.16,223.08L403.16,223.14L405.99,225.62L417.63,225.27L417.86,228.51L421.34,237.28L424.22,238.4L426.94,237.54L426.94,237.54L426.7,239.41L424.14,242.43L418.23,245.58L415.48,245.96L408.18,239.57L394.27,234.2L392.83,234.71L387.26,233.69L385.84,234.52L382.99,233.44L382.13,234.42L376.01,234.46L369.16,236.58L363.14,240.75L360.29,245.19L358.98,249.13L360.29,251.17L359.22,250.5L358.96,251.13L359.32,251.8L358.69,254.4L359.53,254.18L358.17,255.1L358.41,261.42L357.33,266.79L358.2,270.44L350.38,280.08L348.86,286.17L343.58,284.62L335.39,285.06L326.42,293.08L321.84,295.43L320.69,298.25L314.36,298.66L303.08,302.44L299.76,305.89L293.98,307.35L287.81,312.39L281.63,312.45L275.91,316.22L273.45,316.28L274.39,317.39L270.91,315.65L271.49,315.02L270.54,314.67L266.33,314.51L263.17,316.35L263.17,316.35L261.65,314.19L262.36,311.69L261.15,309.66L262.41,305.61L263.09,297.62L258.93,290.14L257.15,288.3L253.65,287.15L252.16,282.78L250.51,282.3L249.64,279.61L245.33,276.37L239.36,275.83L238.97,274.78L234.47,273.07L229.42,273.45L228.46,273.13L228.46,271.67L226.76,272.09L224.38,271.13L225.97,263.71L225.97,263.71L230.65,258.95L235.21,258.37L234.63,256.02L236.67,254.09L237.35,255.77L238.63,255.39L239.39,256.88L240.59,255.33L242.79,255.58L243.63,258.41L248.1,258.15L251.61,256.02L253.75,256.02L253.18,257.93L256.92,258.15L256.97,261.07L255.53,261.9L259.43,261.96L261.78,259.26L267.04,257.07L270.52,253.71L271.51,249.77L275.07,247.48L276.22,245.61L280.14,248.02L281.01,250.47L284.93,248.5L289.59,247.8L295.52,249.74L297.93,248.4L300.34,243.13L299,239.76L299.03,235.76L302.69,236.36L306.3,239.38L307.77,238.75L308.89,240.37L314.75,235.76L322.47,239.48L321.34,237.41L321.89,234.8L323.2,233.06L325.29,232.33L324.69,230.71L325.87,230.29L324.95,226.7L326.91,227.37L327.12,224.76L324.95,224.13L322.39,217.83L321.45,212.01L318.49,212.65L317.97,212.01L319.14,206.25L322.36,204.66L322.23,203.13L324.56,202.15L324.56,199.09L323.25,197.92L324.61,195.56L327.12,195.05L328.64,193.24L332.46,194.29L333.92,196.96L337.48,196.96L339.23,198.74L343.05,199.09z",
  Famagusta: "M606.95,5.23l-2.93,4.17l0.24,2.92l-1.52,0.99l0.47,4.78l-1.07,0.42l0.05,1.79l-1.02,0.22l-0.99,1.96l-7.19,0.77L591.94,25l-4.71,0.13l-1.94,2.47l-1.39,-0.42l-1.26,1.7l-7.51,1.44l-10.96,8.17l-0.08,2.85l-1.83,0.26l-0.71,1.31L560,49.85l-2.59,0.51l-5.44,5.15l-5.54,1.73l-17.92,16.63l-11.59,4.38l-6.62,4.09l-7.35,2.91l-14.12,9.43l-14.81,15.97v3.7l-1.75,2.78l0.26,2.46l-2.85,3.99l-13.52,2.2l-3.84,-2.2l-3.27,1.12l-2.38,-0.32l-5.15,2.97l-3.71,3.67l-3.48,7.5l-2.12,2.01l-4.39,7.43l0.18,9.85l-1.18,2.33l0.03,3.47l3.11,8.63l-0.42,2.42l1.05,2.33l1.99,0.32l4.03,8.34l2.35,0.99l0.78,-0.54l0.37,1.15l-1.75,-0.38l1.05,1.31l1.6,-0.35l0.08,1.31l0.79,0.06l0.76,4.27l7.11,10.18l2.62,1.34l4.58,5.25l2.72,1.27l6.46,7.89l1.07,3.24l2.56,1.11l-0.68,1.46l0.6,1.65l3.9,5.05l-2.35,1.14l0.16,0.73l1.6,1.88l0.08,2.29l1.36,1.14l0.94,-0.6l0.5,1.56l-0.58,1.65l-1.62,-0.48l0.39,-1.37l-1.33,-0.86l-2.48,1.88l-3.11,-2.96l-6.72,-2.03l-3.48,-2.77l-2.17,-0.19l-1.31,1.02l-3.69,-1.43l-1.54,0.99l-0.71,-1.4l-1.99,0.19l-0.47,-0.73l-2.01,0.95l-1.41,-0.35l-0.39,1.97l-1.83,-0.64l-12.29,3.53l-0.13,0.51l0,0l-2.72,0.86l-2.88,-1.11l-3.48,-8.77l-0.24,-3.24l-11.64,0.35l-2.83,-2.48l-8,-0.06l0.86,-1.97l-1.05,-0.79l-2.56,0.38l-0.1,-2.61l-3.98,-2.45l-0.21,-3.37l-3.5,-2.1l-5.54,4.55l-1.23,-0.25l-2.17,-3.69l2.9,-6.81l-1.15,-1.21l-1.23,-0.16l-3.19,4.04l-2.46,-0.45l-0.94,0.67l-0.99,2.42l-5.55,0.76l-1.36,-7.99l0.37,-4.58l-7.22,-4.3l-0.94,-2.29l-3.06,1.31l-4.05,0.25l0,0l-1.73,-4.23l-1.6,-0.83l-3.5,0.89l-2.62,-0.76l-0.21,-1.37l-1.52,0.54l-1.73,-1.72l-0.76,-2.96l0.73,-1.75l1.86,-0.38l3.95,-4.4l0.94,-2.68l-0.13,-4.01l-2.25,-2.33l-1.05,-8.51l1.15,-1.34l2.64,-0.16l0.44,-1.31l-1.41,-3.35l-2.8,-1.28l0.26,-2.87l-1.67,-5.01l0.24,-3.48l0,0l-2.09,-3.8l0.44,-0.54l2.67,-0.32l10.57,-5.97l4.66,-1.18l1.78,-2.62l2.54,0.77l6.36,-1.79l0.81,-2.3l2.41,-0.64l0.37,-2.23l-2.41,0.19l-1.7,-1.44l-0.76,-3.29l0,0l1.05,-1.47l1.44,-0.32l0.99,0.83l1.91,-1.63l0.94,0.61l2.54,-1.37l5.26,-4.02l0.73,-1.82l2.72,-0.42l1.52,-1.76l1.8,-0.32l0.79,-1.69l1.99,-0.16l3.11,-2.24l2.88,-0.29l1.83,-1.34l4.5,0.67l4.03,-1.05l3.37,1.02l8.61,-0.42l7.77,-2.46l2.56,-2.36l2.56,0.58l0.99,-1.05l3.95,-0.7l0.47,-1.41l3.87,0.19l3.06,-1.57l1.2,-1.66l3.17,0.61l3.35,-0.99l3.06,-2.84l5.21,-1.02l5.05,-3.96l1.2,0.64l3.66,-1.57l1.91,-2.62l1.57,0.22l3.09,-1.95l2.59,-2.94l2.07,0.54l9.81,-3.55l4.11,-6.85l2.67,-1.54l0.92,-2.82l3.74,-1.79l0.79,-4.29l1.25,-1.09l1.94,0.1l1.94,1.66l3.32,-0.06l1.2,-1.54l1.36,1.92l1.78,-1.73l0.37,1.22l2.17,0.03l3.19,-1.63l1.81,-2.88l3.19,0.16l1.1,-1.54l0.52,0.77l1.2,-0.45l1.67,-1.82l0.39,1.02l2.28,0.16l4.87,-4.03l3.01,-1.09l1.78,-4.07l1.8,1.15l3.17,-3.07l0.18,-4.1l2.54,-0.29l0.21,-0.8l2.98,0.16l1.18,-2.02l3.17,-1.28l3.11,-0.71l0.5,1.19l2.77,-0.35l1.25,-2.15l1.52,0.1l0.37,-1.44h1.18l3.71,-3.08l3.9,-0.22l0.63,1.19l1.39,0.03l4.84,-2.47l2.62,0.38l3.61,-3.11l0.24,-2.4l1.52,-0.26l0.73,2.02h2.69l1.94,-2.24l1.67,-0.1l-0.29,-0.83l2.07,-1.44l-0.05,-0.99l3.45,-1.35L606.95,5.23z",
  Paphos: "M75.91,173.37l2.12,0.19l0,0l1.18,1.53l3.19,1.46l3.4,4.87l4.81,2.36l-0.05,5.19l5.91,2.39L95.84,201l0.63,1.11l-1.7,1.85l-3.11,-0.29l-0.39,2.23l-1.83,2.26l2.25,0.6l2.93,7.03l7.01,2.29l1.39,1.72l0.31,3.94l1.96,0.76l1.86,3.88l0.24,2.19l-2.35,3.05l2.33,0.57l0.81,5.47l-1.91,3.21l0.18,4.35l-2.3,-0.16l-0.78,1.08l1.23,7.34l2.64,1.62l2.48,4.7l1.33,-2.79l-0.31,-2.7l5.18,0.83l-1.41,2.13l-2.2,0.79l6.46,2.54l1.12,-3.43l1.28,-0.41l0.71,-4l1.86,-1.37l4.71,1.87l0.13,2.64l2.85,-0.92l0,0l0.86,4.92l4.45,1.17l0.42,3.71l-2.38,0.73l-1.2,2.95l-2.77,1.05l-4.11,3.49l-1.49,4.41l0.26,2.79l-5.7,2.28l-1.57,2.06l-0.39,3.77l-2.17,-0.76l-2.96,3.11l1.62,0.98l-0.26,2.41l3.37,0.7l1.99,2.85l-1.28,0.57l-1.2,6.62l-2.22,-0.22l-0.84,1.3l-1.88,0.25l-1.1,2.28l-1.28,-0.03l-2.35,2.85l-2.88,1.08l-1.75,-0.54l-1.23,2.38l0.47,2.15l-2.28,1.74l-2.46,0.51l2.04,4.21l-0.97,2.88l0.68,7.16l0,0l-3.92,-2.18l-5.52,-0.98l-5.49,-4.59l-4.26,-1.14l-5.36,-3.77l-1.46,0.41l-2.41,-1.14l-2.3,0.76l-4.05,-3.1l-5.39,1.3l-2.01,-2.19l-1.67,0.03l-1.99,-2.82l-6.33,-4.78l-3.71,-0.32l-0.21,-1.27l-2.3,-1.52l-2.43,-3.77l-1.65,0.79L34,303.99l1.73,-3.68l-1.46,-5.93l-1.86,-1.59l-0.08,-8.63l-1.75,-1.97l0.78,-0.32l-0.55,-0.86l0.81,-1.27l-0.65,-2.63l-1.78,-2.32l-3.3,-0.1l0.55,-1.21l-0.97,-1.14l-1.52,1.02l-0.34,-1.84l-3.19,0.16l-1.57,-4.95l-2.15,-1.4l-0.26,-2.25l-4.16,-4.83l-0.21,-0.98l2.54,-2.25l0.05,-4.64l-3.37,-7.27l-2.72,-0.86l0.03,-2.64l1.75,0.57l1.28,-1.91l-1.13,-2.13l1.13,-3.53l-0.68,-2.45l0.68,-2.23l-4.68,-6.87l-1.62,0.25l0.24,-1.43l-2.72,-4.36l-1.18,-0.38l0.63,-1.53l-1.6,-2.26l0.5,-1.88L0,204.37l1.23,-3.18l-0.13,-2.77l0.92,-1.11l-0.1,-2.04l1.15,-0.19l1.26,-1.81l4.55,4.58l-0.55,0.7l0.99,1.78l10.85,7.64l3.32,3.85l5.21,2l5.81,0.64l7.93,-1.94l6.57,-3.94l6.28,-5.57l6.98,-10.85l4.42,-10.79l0.97,0.1l3.32,-2.93l2.83,-6.63l1.26,-0.51L75.91,173.37z",
  Kyrenia: "M173.61,101.66l5,2.43l4.03,0.73l7.35,6.45l0.92,-0.67l7.11,1.44l1.62,-0.89l4.55,3.19l4.24,1.05l8.5,0.35l3.06,-2.14l1.41,-2.43l1.1,1.56l3.45,-0.35l1.1,1.5l8.4,2.71l3.82,0.42l3.06,-2.52h2.64l10.07,4.44l3.01,-0.73l0.86,-1.28l4.53,1.92l3.48,-1.18l3.69,2.07l4.55,-0.13l2.69,0.22l4.6,2.17l3.56,-0.83l2.59,1.05l1.81,-1.4l1.28,1.28l0.76,-0.57l5.15,1.02l1.05,-0.8l0.99,1.05l2.96,0.06l2.48,-1.28l4.84,0.41l2.35,-0.8l1.7,1.34l2.88,0.1l2.28,-1.15l0.86,0.48l0.76,-1.09l4.71,-0.35l5.1,-2.36l1.96,0.8l7.01,-0.8l9.44,-3.06l1.23,-1.4l1.44,1.69l6.25,-1.56l0.79,0.96l3.01,-0.77l0,0l0.76,3.29l1.7,1.44l2.41,-0.19l-0.37,2.23l-2.41,0.64l-0.81,2.3l-6.36,1.79l-2.54,-0.77l-1.78,2.62l-4.66,1.18l-10.57,5.97l-2.67,0.32l-0.44,0.54l2.09,3.8l0,0l-2.07,0.86l-3.35,-1.53l-5.07,2.23l-1.94,-0.7l2.22,-0.16l1.1,-1.15l-3.82,-0.89l-0.86,1.31l-3.22,0.41l-8.61,-0.64l-3.48,3.92l-0.39,1.85l0.84,1.98l-0.92,2.1l-1.78,-0.16l-6.54,3.16l-8.03,1.18l-2.43,-0.73l-10.12,0.19l-1.33,1.4l-2.17,-2.39l-6.59,-1.21l-0.81,1.53l-3.56,-3.22l-1.99,-0.51l-0.81,1.15l-1.28,-1.05l-0.99,1.56l-1.57,-1.02l-0.39,2.42l-2.33,-0.35l-0.63,3.48l-0.86,-1.31l-3.92,0.7l-1.07,-3.63l-1.57,-0.35l-1.49,-1.75l-1.33,0.92l-4.45,-0.38l-0.21,-1.37l-3.03,-1.44l-0.86,0.86l1.2,1.79l-2.67,-0.32l-0.18,-1.56l-0.71,0.16l-0.97,0.77l0.18,2.36l-2.93,-2.01l-0.97,0.22l0.71,0.96l-0.84,0.48l-2.96,-1.59l-1.73,0.48l-1.07,-0.67l-4.16,0.96l-5.21,-0.45l-2.25,1.63l-3.92,-1.95l-0.97,-1.63l-2.33,-0.26l0.18,-3.57l-1.62,1.95l-4,1.95l-1.15,-1.08l-7.19,0.29l-0.89,1.24l-3.79,-0.51l-6.23,-3.09l-3.27,-0.51l0,0l0.86,-11.68l-1.2,-4.79l0.1,-6.8l-0.5,-1.76l-1.94,-0.45l-0.92,-2.78l-0.37,-14.47L173.61,101.66z"
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

// src/Cyprus.tsx
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
var Cyprus = ({
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
      CyprusSingle,
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
      CyprusMultiple,
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
var CyprusSingle = ({
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
var CyprusMultiple = ({
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
var Cyprus_default = Cyprus;

// src/index.ts
var src_default = Cyprus_default;
export {
  src_default as default
};
