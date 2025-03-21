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

// src/Liechtenstein.tsx
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
  "Balzers",
  "Eschen",
  "Gamprin",
  "Mauren",
  "Planken",
  "Ruggell",
  "Schaan",
  "Schellenberg",
  "Triesen",
  "Triesenberg",
  "Vaduz"
];
var drawPath = {
  Balzers: "M115.14,647.44l1.13,1.13l2.94,5.14l4.48,4.99l1.37,4.34l1.58,3.6l1.11,2.27l1.07,1.12l3.23,2.17l4.95,1.69l2.54,0.65l2.59,0.09l1.18,0.47l2.72,0.08l0.96,0.75l0.26,1.79l-0.37,6.56l-0.59,2.92l-1.5,4.16l-0.05,5.84l2.01,4.18l1.82,6.2l0.78,1.43l5.4,5.31l16.18,21.01l0,0l-1.58,-0.71l-1.8,-0.23l-3.54,0.73l-3.05,1.98l-4.97,2.12l-2.35,1.81l-6.48,3.48l-16.87,2.51l-3.7,0.83l-11.24,4.58l-4.38,3.97l-3.63,4.17l-3.26,1.98l-10.12,2.54l-14.15,0.86l-3.9,0.56l-3.12,1.41l-2.56,3.48l-1.55,0.98l-1.96,0.26l-2.99,-0.75l-1.76,-0.85l-3.06,-2.23l-3.01,-1.15l-2.33,-0.3l-2.31,0.5l-1.1,0.63l-1.63,1.71l-2.91,5.27l-2.48,5.66l-2.41,4.05l-1.48,1.57l-2.08,0.87l-2.22,0.05l-2.09,-0.71l-3.36,-3.41l-1.04,-1.8l-1.79,-6.34l-0.99,-1.96l-1.48,-1.64l-2.16,-0.89h-2.35l-3.41,0.83l-3.44,1.48l-3.07,-1.54l-2.46,-2.77L3.05,758.4l-2.77,-15.28L0,737.98l0.59,-5.01l2.48,-8l5.24,-3.94l5.05,-2.66l2.4,-1.72l5.22,-1.61l3.99,-2.24l4.43,-1.26l3.99,-2.31l4.41,-1.33l3.98,-2.34l4.41,-1.34l3.97,-2.35l5.09,-1.84l6.61,-5.61l10.04,-5.86l6.61,-5.63l5.75,-2.37l7.25,-6.1l9.4,-5.5l4.39,-3.86l3.83,-4.21l2,-4.8l2.52,-3.82L115.14,647.44zM235.25,639.71l9.36,3.07l2.23,-0.62l3.6,-2.04l2.2,0.08l2.53,1.04l0,0l-0.71,2.22l-1.88,3.22l-0.12,2.56l4.75,5.93l0.56,3.35l0.05,4.45l0.48,1.67l0.03,4.65l1.11,3.54l3.8,4.61l2.42,1.9l4.21,4.29l0.72,3.21l-2.83,2.5l-3.99,1.36l-3.54,2.37l-6.77,3.73l-5.08,1.21l-4.4,-0.01l-7.95,-1.73l-0.81,-0.59l-5.34,-5.44l-3.22,-3.85L223,680.19l-0.73,-2.33l1.07,-4.87l-0.01,-5.36l-0.92,-11.21l2.77,-6.04l2.7,-3.21L235.25,639.71zM369.73,440.89l-1.15,28.66l11.04,23.18l11.98,15.36l-20.92,31.1l-2.76,4.87l0,0l0.33,-3.22l-1.15,-0.22l-4.15,-3.04l-15.69,-7.17l-5.38,-1.33l-1.15,-0.63l-1.18,-4.49l-0.12,-3.07l-0.94,-2.91l-0.1,-5.22l-1.41,-3.15l-0.22,-2.4l-1.53,-2.13l0,0l-0.05,-1.75l-1.62,-5.88l-1.96,-3.4l-0.59,-3.66l0.01,-9.96l-1.14,-3.08l-4.83,-6.11l-3.5,-2.44l-4.78,-5.13l-5.52,-4.85l0,0l-3.13,-2.56l-3.04,-3.59l-6.64,-0.16l-2.74,-0.67l-6.34,-2.77l-4.06,-2.96l-6.55,-3.89l-4.15,-1.2l-5.42,-0.11l-1.29,-0.67l-1.16,-1.14l0,0l-0.29,-1.6l0.27,-1.64l1.6,-3.15l-0.5,-2.45l0.46,-1.21l0.1,-3.69l0.53,-1.72l-1.02,-2.67l0.44,-1.62l0.09,-2.79l1.98,-2.83l1.12,-2.58l0.21,-4.11l2.09,-5.05l0,0l1.46,-1.78l0.88,-1.84l1.86,-1.36l3.89,-3.96l1.03,-3.11l0.18,-2.81l0.59,-1.18l1.89,-1.91l1.1,-1.72l0.65,-2.44l0,0l4.73,3.72l16.43,15.02l10.48,22.81l21.32,12.9L369.73,440.89z",
  Eschen: "M196,275.38l-2.4,-3.34l0.48,-2.05l0.05,-4.47l1.14,-2.09l2.17,-1.16l0.47,0.24l4.41,6.58l3.22,2.18l3.66,1.68l7.09,2.26l2.2,0.36l0,0l-0.82,9.51l-1.86,3.89l-6.11,-1.76l-3.57,1.28l0,0l-3.6,-7.2L196,275.38zM62.73,217.49l2.55,2.41l7.21,4.49l0.96,-0.17l3.14,-3.13l0.96,-0.39l1.56,1.31l1.09,2.21l-8.47,9.6l-5.92,8.65l-4.55,7.71l-3.56,4.15l-0.15,3.44l0.47,1.25l0.16,1.97l5.7,4.06l0.71,-0.09l2.8,-1.94l4.95,-0.03l0.72,-0.26l0.6,-1.31l0.6,-8.1l0.51,-1.43l0.05,-3.45l0.51,-1.44l0.03,-3.21l0.46,-0.71l0.8,-0.12l13.65,8.48l0.61,1.85l0.07,2.83l0.98,5.28l0.06,2.68l0.48,1.32l-0.05,2.04l0,0l-5.41,-0.03l-2.15,-0.54l-2.89,0.04l0,0l-1.2,0.57L58.36,288.23l-1.61,1.11l-0.88,-0.5l-6.05,-12.87l-4.39,-3.35l-4.33,-2.49l0,0l0.47,-7.79l2.79,-3.29l2.05,-5.34l2.14,-3.03l1.87,-4.91l2.14,-2.96l1.9,-4.91l2.05,-3.05l0.67,-1.78l1.32,-7l2.45,-3.87L62.73,217.49zM183.53,150.36l-7.46,5.02l-4.99,3.86l-2.17,2.18l-1.78,2.7l-2.95,-0.44l-0.95,-0.44l-2.2,-0.01l-1.91,0.65l-1.69,1.7l-6,9.36l0.83,1.54l4.21,4.29l0.25,1.08l-8.88,5.77l-2.21,3.1L143.88,196l-0.13,2.39l-0.51,1.55l0.11,1.4l1.58,2.75l14.56,12.66l19.18,14.26l0.86,-0.28l5.2,-5.93l2.36,-0.12l1.49,0.43l0.67,-0.48l1.39,-5.66l0.6,-1.17l0.75,-0.48l17.72,-4.38l4.82,0.07l2.77,3.34l3.19,6.32l3.32,11.01l-0.97,0.85l-6.83,2.37l-6.47,3.18l-0.33,0.94l0.86,1.36l4.45,4.46l2.43,1.73l3.25,1.19l4.19,0.81l8.76,5.77l6.41,1.77l1.24,-0.05l2.79,-1.02l3.8,0.7l4.73,3.6l5.87,5.89l0.98,0.66l1.11,-0.65l0,0l-2.63,3.42l-12.83,20.02l0,0l-9.98,-5.96l-7.92,2.53l-1.3,-0.08l-0.59,-0.66l-2.11,-4.92l-1.4,-6.04l0,0l-0.9,-10.81l-1.65,-3.91l-3.75,-6.23l-0.69,-0.43l-12.3,-2.94l-0.43,-2.47l-3.75,-3.8l-7.76,-4.85l-1.53,0.89l-2.61,2.31l-1.15,1.55l2.61,5.66l4.99,1.35l0.56,0.43l0.06,4.68l-1.69,0.73l-4.07,0.71l-4.12,1.58l-9.98,6.78l-1.74,0.11l-1.54,-0.55l-1.78,0.08l-0.76,1.35l-0.1,3.49l-0.71,2.87l0,0l-3.76,1.28l-2.37,0.09l-6.9,-1.63l-2.96,-0.23l0,0l-0.86,-0.75l0,0l-1.31,-5.04l-0.68,-1.02l-43.61,-17.37l-13.9,-40.85l-0.67,-4.49l0.32,-0.59l0.98,-0.13l4.9,1.16l4.95,-0.15l0.68,-1.93l0.15,-3.02l0.69,-0.31l2.45,0.04l0.53,-0.52l0.04,-8.67l-0.51,-1.75l-0.02,-3.38l0.53,-2.04l0.19,-3.01l3.54,-2.12l3.6,-0.81l2.26,-1.63l3.26,-3.25l2.65,-3.95l2.49,-2.22l8.09,-0.16l4.21,-3.59l3.62,-0.09l1.61,0.84l0.74,2.17l1.61,2.87l2.08,1.11l1.41,0.05l1.67,-1.16l0.81,-1.86l1.14,-1.44l1.24,-0.81l2.17,-0.2l2.99,-3.48l6.05,-0.21l2.78,-3.57l0,0l0.33,-1.02l2.69,-3.25l4.07,-3.49l3.02,-3.6l3.47,-2.05h0.53l0.61,0.61l2.02,3.53l0.8,2.54L183.53,150.36z",
  Gamprin: "M166.46,274.11l0.71,-2.87l0.1,-3.49l0.76,-1.35l1.78,-0.08l1.54,0.55l1.74,-0.11l9.98,-6.78l4.12,-1.58l4.07,-0.71l1.69,-0.73l-0.06,-4.68l-0.56,-0.43l-4.99,-1.35l-2.61,-5.66l1.15,-1.55l2.61,-2.31l1.53,-0.89l7.76,4.85l3.75,3.8l0.43,2.47l12.3,2.94l0.69,0.43l3.75,6.23l1.65,3.91l0.9,10.81l0,0l-2.77,0.04l0,0l-2.2,-0.36l-7.09,-2.26l-3.66,-1.68l-3.22,-2.18l-4.4,-6.58l-0.47,-0.24l-2.17,1.16l-1.14,2.09l-0.05,4.47l-0.48,2.05l2.4,3.34l0,0l-3.75,2.57l0,0l-0.93,-1.55l-2.22,-1.7l-6.4,-3.96l-6.71,0.03l-6.37,2.48L166.46,274.11zM101.13,127.45l0.49,0.31l-0.1,0.54l3.83,2.41l2.51,1.08l3.76,-2.16l3.53,-2.98l3.22,-2.14l0.82,0.01l3.74,3.83l1.67,2.25l0.3,0.92l-0.26,2.12l0.22,1.04l1.66,1.05l3.8,1.29l1.7,1.71l1.17,4.15l0.06,4.41l0.63,0.94l2.4,2.24l6.92,0.07l0,0l-0.8,1.44l0,3.13l0.63,0.76l2.18,1.16l2.01,0.05l5.77,-1.58l1.35,0.09l2.94,1.04h3.24l1.6,-0.51l3.18,0.12l0,0l-2.78,3.57l-6.05,0.22l-2.99,3.48l-2.17,0.2l-1.24,0.81l-1.14,1.44l-0.81,1.86l-1.67,1.16l-1.41,-0.05l-2.08,-1.1l-1.6,-2.87l-0.74,-2.17l-1.6,-0.84l-3.62,0.09l-4.2,3.59l-8.09,0.16l-2.49,2.23l-2.65,3.95l-3.26,3.25l-2.26,1.63l-3.6,0.81l-3.54,2.12l-0.19,3.01l-0.53,2.04l0.03,3.38l0.51,1.75l-0.04,8.67l-0.53,0.53l-2.45,-0.04l-0.69,0.31l-0.15,3.02l-0.68,1.93l-4.95,0.15l-4.9,-1.16l-0.98,0.14l-0.32,0.59l0.67,4.49l13.9,40.85l43.61,17.37l0.68,1.02l1.31,5.04l0,0l-3.8,-0.24l-1.18,-0.47l-2.58,-0.09l-1.18,-0.47l-2.72,-0.12l-1.19,-0.47l-2.96,-0.07l-1.74,-0.53l0,0l-2.02,-0.04l-1.21,-0.47l-2.53,-0.09l-1.23,-0.47l-2.87,-0.12l-2.08,-0.5l-8.54,0.03l0,0l-3.3,-0.65l-9.07,-0.07l-2.75,-0.55l-4.24,-0.04l0,0l0.05,-2.03l-0.48,-1.32l-0.06,-2.68l-0.98,-5.28l-0.07,-2.83l-0.61,-1.85L76.59,242.95l-0.8,0.12l-0.45,0.71l-0.03,3.21l-0.5,1.44l-0.05,3.45l-0.5,1.43l-0.6,8.1l-0.6,1.31l-0.72,0.26l-4.95,0.03l-2.8,1.94l-0.71,0.09l-5.7,-4.06l-0.16,-1.97l-0.47,-1.25l0.15,-3.44l3.56,-4.15l4.55,-7.71l5.93,-8.65l8.47,-9.6l-1.09,-2.21l-1.56,-1.31l-0.96,0.39l-3.13,3.13l-0.96,0.18l-7.21,-4.49l-2.55,-2.41l0,0l1.74,-2.45l0.91,-2.78l0.94,-6.55l2.57,-6.97l1.28,-9.06l2.54,-6.97l1.07,-7.94l0.95,-3.18l3.87,-7.98l3.35,-5.57l2.75,-3.6l2.05,-4.79l6.09,-7.01l1.55,-4.11l2.49,-3.78l1.99,-4.86L101.13,127.45z",
  Mauren: "M183.53,150.36L185.75,150.25L186.86,149.65L190.37,143.98L194.78,140.14L205.37,134.81L208.84,134.7L209.45,133.91L209.07,132.78L209.45,132.21L211.72,131.95L213.62,133.48L217.36,135.1L217.36,135.1L211.99,141.27L200.53,160.69L211.41,171.6L230.02,180.81L247.76,193.26L259.75,210.67L276,237.02L271.06,252.9L260.03,267.21L260.03,267.21L258.93,267.86L257.95,267.2L252.08,261.31L247.35,257.71L243.55,257.01L240.76,258.03L239.52,258.08L233.11,256.32L224.35,250.55L220.16,249.74L216.91,248.56L214.48,246.83L210.03,242.37L209.17,241.01L209.5,240.07L215.97,236.89L222.8,234.51L223.78,233.66L220.46,222.65L217.27,216.33L214.49,212.99L209.67,212.92L191.96,217.3L191.21,217.79L190.61,218.96L189.23,224.62L188.56,225.1L187.07,224.67L184.71,224.79L179.52,230.73L178.65,231.01L159.48,216.75L144.92,204.09L143.34,201.34L143.23,199.94L143.75,198.39L143.88,196L145.62,190.69L147.83,187.59L156.71,181.82L156.47,180.74L152.26,176.45L151.43,174.92L157.43,165.56L159.12,163.86L161.03,163.21L163.23,163.23L164.18,163.67L167.13,164.11L168.91,161.42L171.08,159.23L176.06,155.38z",
  Planken: "M152.13,305.06l-0.6,-0.05l-2.57,-2.12l-1.55,-2.38l-0.13,-1.64l1.26,-2.34l1.15,0.11l5.54,3.05l0.48,3.91l-0.5,0.5L152.13,305.06zM221.27,275.54l1.4,6.04l2.11,4.92l0.59,0.66l1.3,0.08l7.92,-2.53l9.98,5.96l0,0l1,21.19l5.32,27.33l5.98,15.28l15.67,13.79l14.74,11.6l0,0l-0.64,2.44l-1.1,1.72l-1.88,1.91l-0.58,1.19l-0.18,2.82l-1.03,3.11l-3.89,3.96l-1.86,1.36l-0.88,1.85l-1.46,1.78l0,0l-1.43,-0.09l-7.36,-2.19l-7.16,-3.93l-8.06,-6.54l-14.76,-12.83l-6.45,-4.89l-12.86,-6.48l0,0l5.87,-8.11l4.23,-3.39l1.53,-3.39l2.84,-4.35l-19.45,-12.11l-6.23,-4.69l-10.2,-0.63l-0.87,0.71l-1.83,3.62l-1.3,0.5l-14.28,-3.44l-1.07,-0.51l-0.39,-0.66l0.02,-6.1l-0.5,-1.99l-0.1,-5.62l-2.19,-4.45l-3.37,-4.19l-4.93,-3.39l3.5,-7.18l2.45,-6.31l2.19,-3.85l0.91,-0.07l4.26,1.63l3.7,-2.35l3.44,-2.98l8.37,-1.24l2.3,-1.24l0,0l1.8,1.74l5.09,3.02L203,285.98l1.25,3.33l1.89,-0.81l0,0l3.57,-1.28l6.11,1.77l1.86,-3.89l0.82,-9.51l0,0L221.27,275.54zM186.98,319.56l0.75,0.36l0.3,3.03l0.76,0.46l1.91,-0.07l1.32,-0.48l3.79,-0.08l1.26,-0.67l0.63,-1.44l-0.21,-0.98l-3.46,-4.23l-5.63,-0.28l-2.56,-3.08l-3.85,-0.11l-0.44,0.77l0.09,4.43l0.92,1.13l2.02,1.2L186.98,319.56zM132.25,270.4l1.74,0.53l2.97,0.07l1.19,0.47l2.72,0.12l1.19,0.47l2.58,0.09l1.18,0.47l3.8,0.24l0,0l0.86,0.75l0,0l10.22,10.83l-0.07,1.62l-2.22,3.88l-1.09,1.24l-1.33,-0.69l-12.28,-11.64l-9.38,-4.27l-1.85,-2.94L132.25,270.4z",
  Ruggell: "M140,10.14L142.02,6.75L147.47,0L154.8,8.81L166.12,20.55L180.33,39.2L200.4,56.94L205.37,63.36L205.37,63.36L203.74,62.43L197.9,69.38L192.52,74.8L181.71,85.03L172.79,92.29L166.63,98.77L165.01,101.07L165.23,101.77L172.76,109.4L177.76,112.83L179.04,113.25L188.08,107.33L200.77,95.2L206.25,90.79L207.62,90.3L207.6,91.68L205.9,95.39L200.42,105.75L193.43,112.79L187.23,117.35L182.57,123.09L175.94,126.53L168.08,131.6L161.99,135.04L157.74,139.18L154.84,139.25L152.33,138.68L149.74,138.97L143.19,150.55L143.19,150.55L136.28,150.48L133.87,148.24L133.25,147.3L133.19,142.89L132.02,138.74L130.32,137.02L126.52,135.73L124.87,134.68L124.65,133.64L124.9,131.52L124.61,130.6L122.94,128.35L119.2,124.52L118.37,124.51L115.16,126.65L111.62,129.63L107.86,131.79L105.35,130.71L101.52,128.3L101.62,127.76L101.13,127.45L101.13,127.45L104.97,122.85L106.52,118.75L109.02,114.99L110.56,110.83L113.3,107.19L116.49,101.54L118.65,94.98L121,90.95L122.63,83.13L124.99,79.09L126.69,73.44L128.83,68.79L130.54,63.15L132.99,59.2L134.7,53.58L137.15,47.89L138.72,41.72L141.04,35.85L141.42,33.61L141.56,21.83L141.2,17.08z",
  Schaan: "M281.41,633.8l6.01,0.18l1.5,0.58l6.1,4.1l11.43,3.89l6.41,1.29l3.34,1.03l1.69,-0.07l1.98,-0.77l0,0l1.34,3.22l0.59,2.62l0.08,2.77l1.63,3.94l3.38,4.22l2.82,2.69l2.16,3.38l0.76,2.41l1.67,3.39l1.33,1.79l1.27,3.31l1.12,0.79l0,0l-3,20.06l-9.42,40.52l2,2.31l-1.65,-0.01l-2.26,0.98l0,0l-5.16,-3.47l-3.1,-4.74l-3.42,-2.38l-3.77,-3.29l-3.24,-4.44l-4.15,-8.74l-6.4,-5.06l0.33,-0.74l5.95,-5.83l0.4,-0.93l-7.28,-13.96l-5.54,-18.14l-5.67,-15.06l-1.02,-4.36l3.01,-8.47l-2.96,-7.07L281.41,633.8zM266.71,439.09l1.16,1.15l1.3,0.67l5.42,0.11l4.15,1.2l6.55,3.89l4.06,2.96l6.34,2.77l2.74,0.67l6.64,0.16l3.04,3.6l3.13,2.56l0,0l-1.18,2.22l-7.63,10.86l-4.51,4.74l-1.01,0.69l-6.92,2.14l-7.11,0.67l-1.23,0.69l-0.02,1.14l4.64,7.03l1.32,3.92l5.46,4.98l8.13,0.15l2.31,0.53l3.83,0.07l3.7,-1.06l2.78,0.05l3.02,0.71l3.78,5.72l2.32,0.14l6.15,1.6h4.09l2.08,-0.71l0,0l1.53,2.13l0.22,2.4l1.41,3.15l0.1,5.22l0.94,2.91l0.12,3.07l1.18,4.5l1.15,0.63l5.39,1.33l15.69,7.17l4.15,3.04l1.15,0.22l-0.33,3.22l0,0l-7.9,13.89l3.87,3.81l0,0l-2.43,2.97l-1.77,3.26l-4.49,-0.93l-16.76,-5.33l-2.2,0.44l-7,-0.03l-2.06,0.5l-2.07,-0.52l-5,-0.08l-4.55,-1.05l-4.05,-0.04l-1.94,0.78l-2.84,2.72l-3.26,2.17l-2.1,0.7l-2.66,0.14l-2.41,1.53l0,0l-0.92,-0.19l-3.1,-1.92l-4.2,-1.28l-2.9,-1.52l-5.98,-0.12l-3.29,-1.04l-2.72,-0.07l0,0l0.53,-2.81l0.08,-4.43l0.48,-1.91l0.05,-6.11l0.52,-1.63l0.08,-3.7l3.63,-9.2l2.77,-8.98l0.11,-3.31l0.52,-1.74l-0.19,-5.09l-0.71,-0.81l-8.58,-1.28l-6.46,-2.6l-5.7,-0.73l-3.44,-1.18l-6.01,-4.7l-2.59,-2.93l-2.5,-3.58l-9.82,-6.22l-0.59,-0.66l-0.62,-1.74l0.17,-2.77l2.45,-3.62l1.39,-3.7l3.08,-4.44l1.13,-0.08l2.45,2.06l1.09,-0.16l1.69,-2.38l-0.03,-4.24l0.34,-1.01l3.95,-3.72l3.57,-4.63l2.38,-1.8l4.83,-4.87l2.78,-6.18l0.6,-2.42L266.71,439.09zM188.8,315.25h4.38l1.2,0.47l3.23,4.16l0.04,1.2l-0.57,1.02l-1.66,0.75l-3.67,0.03l-1.9,0.53l-1.55,-0.15l-0.3,-0.58l-0.03,-2.37l-0.42,-0.58l-3.25,-0.31l-2.54,-1.98l-0.12,-5.11l0.63,-0.42l3.6,0.16l0.96,0.86l1.37,2.1L188.8,315.25zM81.94,266.9l1.27,1.82l4.51,15.88l0.53,1.09l6.65,8.49l3.45,10.46l0.61,1.16l0.79,0.22h6.47l2.51,-0.51l6.63,0.03l3.33,-0.5l0.51,-0.4l-7.42,-35.88l0,0l8.54,-0.03l2.09,0.5l2.88,0.12l1.23,0.47l2.53,0.1l1.21,0.47l2.02,0.04l0,0l0.21,1.25l1.85,2.94l9.38,4.27l12.28,11.64l1.33,0.69l1.1,-1.24l2.22,-3.88l0.07,-1.62l-10.22,-10.83l0,0l2.96,0.23l6.9,1.63l2.38,-0.09l3.76,-1.28l0,0l3.17,-0.86l6.37,-2.48l6.71,-0.03l6.4,3.96l2.23,1.7l0.93,1.55l0,0l2.32,1.28l0,0l-2.3,1.24l-8.37,1.24l-3.44,2.98l-3.69,2.35l-4.26,-1.63l-0.91,0.07l-2.19,3.85l-2.45,6.31l-3.5,7.18l4.93,3.4l3.37,4.19l2.19,4.45l0.1,5.62l0.5,1.99l-0.02,6.1l0.39,0.66l1.07,0.51l14.28,3.44l1.3,-0.5l1.84,-3.62l0.87,-0.71l10.2,0.63l6.23,4.69l19.45,12.11l-2.84,4.35l-1.53,3.39l-4.23,3.4l-5.87,8.11l0,0l-1.42,1.58l-3.44,5.58l-5.66,6.75l-0.5,1.48l0,0l-9.86,-4.9l-3.06,-0.09l-1.4,-0.48l-3.46,-0.08l-3.08,-0.55l-8.84,0.5l-7.27,-0.04l-6.92,1.01l-5.06,-0.04l-15.06,-4.86l-8.21,-1.28l-1.2,-0.47l-2.57,-0.01l-0.5,0.36l-3.99,8.08l-2.09,0.67l-3.32,0.01l-0.84,0.73l0.48,3.31l0.01,6.3l0.5,2.36l-0.2,3.91l-7.51,1.85l-7.08,3.03l-0.91,0.07l-9.96,-5.63l-1.62,-1.05l-1.11,-1.24l-4.3,-20.44l-0.01,-3.57l1.03,-2.48l-0.01,-1.28l-1.4,-0.65l-1.9,-0.16l-11.68,-2.65l-2.15,-0.12l-1.07,-0.44l-8.85,-0.01l-0.3,0.46l0,1.48l2.07,9.36l0.11,2.33l0.64,1.85l25.96,22.68l0,0.84l-1.91,2.41l-0.2,0.89l0.67,0.96l3.06,2.64l2.28,12.39l3.23,9.35l1.63,2.84l9.54,11.94l-0.12,0.66l-1.77,1.02l-5.19,2.14l-1.78,0.07l-2.07,-6.88L93,435.79l-6.08,-8.87l-5.75,-7.23l-1.32,-0.57l-6.14,-0.01l-3.23,0.51l3.46,6.14l13.95,20.43l5.61,22.28l0,0l-3.01,-6.04l-4.1,-6.31l-7.87,-7.51l-2.24,-2.54l-2.05,-5.22l-3.06,-4.52l-2.04,-5.79l-2.3,-4.82l-1.97,-5.78l-2.2,-3.34l-2.15,-5.04l-2.66,-3.98l-1.74,-4.23l-2.67,-3.99l-1.73,-4.24l-2.97,-5l-4.17,-13.74l-1.81,-10.36l-2.79,-7.21l-1.52,-9.2L35.02,334.47l-1.5,-16.73l0.7,-10.33l0.54,-3.35l2.6,-9.77l0.82,-11.96l2.92,-12.19l0,0l4.33,2.49l4.39,3.36l6.05,12.87l0.88,0.5l1.61,-1.1l22.37,-20.77L81.94,266.9zM126.72,326.79l1.41,0.67l3.56,7.38l1.1,1.06l4.59,2.17l1.04,-0.63l4.31,-6.57l-0.07,-0.63l-0.53,-0.57l-6.98,-5.44l-9.43,-4.54l-1.08,0.28l-1.67,4.96l-0.15,1.35l0.71,0.49L126.72,326.79zM148.25,296.83l-1.06,2.68l0.21,1l1.56,2.38l2.75,2.2l3.69,-1.13l0.37,-1.13l-0.68,-3.37l-5.96,-2.98L148.25,296.83z",
  Schellenberg: "M217.36,135.1L213.62,133.48L211.72,131.95L209.45,132.21L209.07,132.78L209.45,133.91L208.84,134.7L205.37,134.81L194.78,140.14L190.37,143.98L186.86,149.65L185.75,150.25L183.53,150.36L183.53,150.36L182.8,149.51L182,146.98L179.98,143.44L179.37,142.84L178.85,142.84L175.38,144.89L172.36,148.49L168.29,151.98L165.61,155.23L165.28,156.25L165.28,156.25L162.1,156.13L160.5,156.64L157.26,156.64L154.32,155.61L152.97,155.51L147.21,157.09L145.2,157.04L143.02,155.88L142.39,155.12L142.39,151.99L143.19,150.55L143.19,150.55L149.74,138.97L152.33,138.68L154.84,139.25L157.74,139.18L161.99,135.04L168.08,131.6L175.94,126.53L182.57,123.09L187.23,117.35L193.43,112.79L200.42,105.75L205.9,95.39L207.6,91.68L207.62,90.3L206.25,90.79L200.77,95.2L188.08,107.33L179.04,113.25L177.76,112.83L172.76,109.4L165.23,101.77L165.01,101.07L166.63,98.77L172.79,92.29L181.71,85.03L192.52,74.8L197.9,69.38L203.74,62.43L205.37,63.36L205.37,63.36L216.78,78.07L236.63,107.56L225.16,126.15z",
  Triesen: "M146.09,511.04L150.62,517.68L150.88,524.23L155.96,531.25L155.96,532.07L154.48,535.37L154.56,536.48L157.71,540.75L158.65,541.37L162.21,542.57L163.92,542.1L166.5,542.22L168.83,549.55L168.87,558.55L168.36,560.46L168.26,562.92L166.04,573.88L163.41,580.05L163.55,580.94L166.73,586.39L167.87,587.54L170.25,587.64L172.09,587.11L174.72,587.06L175.85,586.6L178.37,586.58L183.58,585.6L184.67,585.86L195.32,594.04L196.08,596.09L196.75,600.43L197.54,602.71L210.73,616.99L216.43,621.35L217.66,621.35L227.11,615.79L228.23,615.74L234.73,623.6L234.73,637.33L235.25,639.71L235.25,639.71L227.87,647.16L225.17,650.37L222.4,656.41L223.32,667.63L223.33,672.99L222.27,677.86L223,680.19L226.62,686.35L229.84,690.19L235.18,695.64L235.99,696.23L243.94,697.96L248.35,697.98L253.43,696.77L260.2,693.04L263.75,690.68L267.74,689.32L270.57,686.82L269.85,683.6L265.64,679.31L263.22,677.42L259.42,672.81L258.31,669.27L258.29,664.62L257.81,662.95L257.77,658.5L257.2,655.15L252.45,649.22L252.57,646.66L254.45,643.45L255.17,641.23L255.17,641.23L256.67,640.03L257.7,638.62L259.39,635.58L260.59,631.67L259.44,626.46L256.89,618.55L256.91,604.44L256.39,602.69L256.42,600.5L257.05,600.08L262.05,600.12L263.49,599.63L267.43,599.61L268.85,599.13L271.61,599.03L271.61,599.03L271.45,606.57L271.91,607.75L272,610.49L273.61,617.68L276.29,625.09L278.72,629.08L280.57,633.01L281.41,633.8L281.41,633.8L281.64,635.74L284.61,642.82L281.6,651.29L282.62,655.65L288.28,670.71L293.83,688.85L301.11,702.8L300.71,703.73L294.76,709.56L294.43,710.3L300.83,715.36L304.98,724.1L308.22,728.53L312,731.83L315.41,734.21L318.51,738.95L323.68,742.42L323.68,742.42L319.43,744.88L315.58,747.9L311.3,749.79L306.56,752.93L302.56,754.58L295.55,756.84L293.52,758.39L286.22,765.71L280.47,767.53L274.34,770.28L267.91,772.29L255.11,773.66L242.15,775.83L239.66,776.52L230.35,781.14L219.55,787.96L214.59,792L208.7,788.73L207.14,787.27L203.49,782.32L203.03,780.28L202.62,769.69L201.29,760.52L200.61,757.65L198.58,753.29L194.68,749.29L190.27,745.91L184.63,743.72L177.34,738.12L173.2,736.65L170.92,735.32L170.92,735.32L154.73,714.31L149.33,709L148.55,707.58L146.73,701.38L144.72,697.2L144.77,691.36L146.28,687.21L146.86,684.29L147.23,677.73L146.97,675.94L146.01,675.19L143.29,675.1L142.12,674.63L139.53,674.54L136.99,673.89L132.04,672.2L128.81,670.03L127.75,668.92L126.64,666.65L125.06,663.04L123.68,658.7L119.2,653.71L116.26,648.57L115.14,647.44L115.14,647.44L117.93,641.03L119.59,634.96L121.73,630.24L122.45,627.04L122.78,621.46L122.68,596.34L122.29,593.1L119.7,583.71L117.8,572.87L113.6,562.67L110.77,556.88L111.84,552.73L112.35,547.53L112.24,540.99L111.68,535.89L110.52,530.75L109.11,521.67L106.35,512.09L106.35,512.09L114.72,510.42L120.82,509.81L122.53,509.34L128.2,509.41L134.96,510.98L138.96,511.09L142.23,511.63z",
  Triesenberg: "M296.29,568.98l2.41,-1.53l2.66,-0.13l2.1,-0.7l3.26,-2.17l2.84,-2.72l1.94,-0.78l4.05,0.04l4.55,1.05l5,0.08l2.07,0.52l2.06,-0.5l7,0.03l2.2,-0.44l16.76,5.33l4.49,0.93l1.77,-3.26l2.43,-2.97l0,0l14.52,14.29l10.76,17.95l8.18,23.76l-6.47,22.04l-3.46,23.33l-25.77,0.51l-22.94,10.27l-0.7,4.65l0,0l-1.12,-0.79l-1.27,-3.31l-1.33,-1.79l-1.67,-3.39l-0.76,-2.41l-2.16,-3.37l-2.81,-2.69l-3.38,-4.22l-1.63,-3.94l-0.08,-2.77l-0.59,-2.62l-1.34,-3.21l0,0l2.27,-1.38l0.7,-1.25l0.62,-3.11l0.09,-2.6l0.46,-1.18l0.09,-2.61l0.47,-1.18l0.11,-2.73l2.02,-5.62l1.28,-4.78l1.98,-4.22l0.03,-2.68l-3.03,-3.25l-1.61,-2.62l-1.12,-5.17l-0.13,-3.26l-1.08,-4.28l-0.7,-1.51l-2.87,-2.49l-2.81,-3.67l-2.44,-2l-0.85,-1.86l-1.59,-2.19l-2.69,-2.73l-5.38,-3.79l-4.42,-1.39L296.29,568.98zM273.77,401.98l-2.09,5.05l-0.21,4.11l-1.12,2.59l-1.97,2.83l-0.09,2.79l-0.44,1.62l1.02,2.67l-0.53,1.72l-0.1,3.69l-0.46,1.21l0.5,2.45l-1.6,3.15l-0.27,1.64l0.29,1.6l0,0l-0.1,4.46l-0.6,2.42l-2.78,6.18l-4.83,4.87l-2.38,1.8l-3.57,4.63l-3.95,3.72l-0.34,1.01l0.03,4.24l-1.69,2.38l-1.09,0.16l-2.45,-2.06l-1.13,0.08l-3.08,4.44l-1.39,3.7l-2.45,3.62l-0.17,2.77l0.63,1.74l0.59,0.66l9.82,6.22l2.5,3.58l2.6,2.93l6.01,4.7l3.44,1.19l5.71,0.73l6.46,2.6l8.58,1.28l0.71,0.81l0.2,5.09l-0.52,1.74l-0.11,3.31l-2.77,8.98l-3.63,9.2l-0.08,3.7l-0.51,1.63l-0.05,6.11l-0.48,1.91l-0.08,4.43l-0.53,2.81l0,0l-2.62,6.66l-1.64,6.5l-0.15,2.54l-0.5,1.6l0.03,7.6l0.43,1.02l0.69,4.64l2.18,5.62l0,0l-2.76,0.1l-1.41,0.48l-3.95,0.01l-1.43,0.5l-5.01,-0.04l-0.63,0.42l-0.02,2.19l0.52,1.75l-0.02,14.11l2.55,7.91l1.15,5.21l-1.2,3.91l-1.68,3.04l-1.04,1.41l-1.5,1.2l0,0l-2.53,-1.04l-2.2,-0.08l-3.6,2.04l-2.22,0.62l-9.36,-3.07l0,0l-0.52,-2.38v-13.73l-6.5,-7.85l-1.12,0.05l-9.44,5.56h-1.23l-5.71,-4.36l-13.19,-14.28l-0.78,-2.27l-0.67,-4.34l-0.77,-2.04l-10.65,-8.18l-1.09,-0.27l-5.2,0.98l-2.52,0.03l-1.13,0.46l-2.63,0.05l-1.84,0.53l-2.38,-0.09l-1.14,-1.16l-3.18,-5.45l-0.14,-0.89l2.63,-6.18l2.22,-10.95l0.1,-2.46l0.51,-1.91l-0.04,-9l-2.33,-7.33l-2.58,-0.12l-1.71,0.47l-3.56,-1.2l-0.94,-0.62l-3.15,-4.27l-0.08,-1.12l1.49,-3.3v-0.82l-5.08,-7.02l-0.27,-6.54l-4.53,-6.65l0,0l5.64,-2.33l1.15,-4.36l0.1,-2.48l0.53,-1.87l-0.33,-1.6l-2.66,-2.17l-2.24,-2.58l-0.65,-2.48l-0.09,-3.69l-3.57,-4.79l-0.12,-2.91l-0.5,-1.59l0.05,-8.14l2.27,-8.52l2.3,-3.7l4.46,-2.07l1.52,-0.98l0.26,-0.59l-0.09,-2.34l-2.46,-5.4l-1.63,-4.81l0.04,-3.37l2,-1.31l2.58,0.71l4.51,7.73l2.86,1.28l0.88,0.07l1.35,-1.12l0.23,-0.86l-0.07,-4.86l-2.06,-5.47l0.11,-2.06l1.14,-1.72l2.94,-0.66l6.35,0.14l3.32,2.25l3.51,5.37l0.97,0.43l6.27,-2.8l4.18,-4.05l3.78,-1.59l2.37,-0.27l0.02,-2.19l-3.07,-12.1l-0.04,-1.87l4.21,-11l1.86,-5.97l2.5,-5.37l2.17,-5.95l0.12,-3.34l-0.34,-1.28l0,0l0.5,-1.48l5.67,-6.75l3.44,-5.58l1.42,-1.58l0,0l12.86,6.48l6.45,4.89l14.76,12.84l8.06,6.55l7.16,3.93l7.36,2.19L273.77,401.98z",
  Vaduz: "M273.19,562.84l2.72,0.07l3.29,1.04l5.98,0.12l2.9,1.52l4.2,1.28l3.1,1.93l0.92,0.19l0,0l2.94,1.51l4.42,1.39l5.38,3.8l2.69,2.73l1.59,2.19l0.85,1.86l2.44,2.01l2.81,3.67l2.87,2.49l0.71,1.51l1.08,4.28l0.13,3.26l1.12,5.17l1.61,2.62l3.03,3.26l-0.03,2.68l-1.98,4.22l-1.28,4.78l-2.02,5.62l-0.11,2.73l-0.47,1.18L324,634.52l-0.46,1.18l-0.08,2.6l-0.62,3.11l-0.69,1.25l-2.27,1.39l0,0l-1.98,0.77l-1.69,0.07l-3.34,-1.03l-6.41,-1.29l-11.43,-3.89l-6.1,-4.1l-1.5,-0.58l-6.01,-0.17l0,0l-0.84,-0.79l-1.85,-3.93l-2.43,-3.99l-2.68,-7.41l-1.62,-7.18l-0.09,-2.74l-0.46,-1.18l0.16,-7.53l0,0l-2.18,-5.62l-0.69,-4.64l-0.43,-1.02l-0.02,-7.6l0.5,-1.6l0.15,-2.54l1.64,-6.5L273.19,562.84zM311.23,458.82l5.52,4.85l4.78,5.13l3.5,2.44l4.83,6.11l1.14,3.08l0,9.96l0.59,3.66l1.96,3.41l1.62,5.88l0.05,1.75l0,0l-2.08,0.71h-4.09l-6.15,-1.6l-2.32,-0.13l-3.78,-5.72l-3.02,-0.71L311,497.58l-3.7,1.06l-3.83,-0.07l-2.31,-0.52l-8.12,-0.15l-5.46,-4.98l-1.31,-3.92l-4.64,-7.03l0.02,-1.14l1.23,-0.69l7.11,-0.67l6.92,-2.14l1.01,-0.69l4.51,-4.74l7.63,-10.86L311.23,458.82zM93.51,468.46l-5.61,-22.28l-13.95,-20.42l-3.46,-6.14l3.23,-0.51l6.14,0.01l1.32,0.57l5.75,7.23L93,435.79l2.99,3.65l2.07,6.88l1.78,-0.07l5.19,-2.14l1.77,-1.02l0.12,-0.66l-9.54,-11.94l-1.63,-2.84l-3.23,-9.35l-2.28,-12.39l-3.06,-2.64l-0.67,-0.96l0.2,-0.89l1.91,-2.41l0,-0.83l-25.96,-22.68l-0.64,-1.84l-0.11,-2.33l-2.07,-9.36l0,-1.48l0.3,-0.46l8.86,0.01l1.07,0.44l2.15,0.12l11.68,2.65l1.9,0.16l1.4,0.65l0.01,1.28l-1.03,2.48l0.01,3.57l4.3,20.44l1.11,1.24l1.62,1.05l9.96,5.63l0.91,-0.07l7.08,-3.03l7.51,-1.84l0.2,-3.91l-0.5,-2.36l-0.01,-6.3l-0.48,-3.31l0.84,-0.73l3.32,-0.01l2.09,-0.67l3.99,-8.08l0.5,-0.36l2.57,0.01l1.2,0.47l8.21,1.28l15.06,4.86l5.06,0.04l6.92,-1.01l7.27,0.04l8.84,-0.5l3.08,0.55l3.46,0.08l1.4,0.49l3.07,0.09l9.86,4.9l0,0l0.34,1.28l-0.12,3.34l-2.17,5.95l-2.5,5.37l-1.86,5.97l-4.21,11l0.04,1.87l3.07,12.11l-0.02,2.19l-2.37,0.27l-3.78,1.59l-4.18,4.05l-6.27,2.8l-0.97,-0.43l-3.51,-5.37l-3.32,-2.25l-6.35,-0.13l-2.93,0.66l-1.14,1.72l-0.11,2.06l2.06,5.47l0.07,4.86l-0.23,0.86l-1.35,1.12l-0.88,-0.07l-2.86,-1.28l-4.51,-7.73l-2.58,-0.71l-2,1.31l-0.04,3.37l1.63,4.81l2.46,5.4l0.09,2.34l-0.26,0.59l-1.52,0.98l-4.45,2.07l-2.3,3.7l-2.27,8.52l-0.05,8.14l0.5,1.59l0.12,2.91l3.57,4.79l0.09,3.69l0.65,2.48l2.24,2.58l2.66,2.17l0.33,1.6l-0.53,1.87l-0.1,2.48l-1.15,4.36l-5.64,2.33l0,0l-3.85,0.59l-3.27,-0.54l-4,-0.11l-6.76,-1.57l-5.67,-0.07l-1.71,0.47l-6.1,0.61l-8.36,1.67l0,0l-2.09,-10.7l-2.76,-7.42l-2.1,-10.11l-2.1,-4.95l-2.24,-7.32L93.51,468.46zM138.11,326.7l4.01,2.98l0.63,0.98l-4.34,6.79l-0.82,0.65l-5.47,-2.75l-4,-7.88l-1.4,-0.67l-3.45,-0.07l-0.46,-0.65l1.82,-6.1l1.08,-0.28l8.58,4.01L138.11,326.7zM206.13,288.5l-1.89,0.81L203,285.98l-1.54,-1.99l-5.09,-3.02l-1.8,-1.74l0,0l-2.32,-1.28l0,0l3.75,-2.57l0,0l6.54,5.93L206.13,288.5zM111.75,268.73l7.42,35.88l-0.51,0.4l-3.32,0.5l-6.63,-0.03l-2.51,0.51h-6.47l-0.79,-0.21l-0.61,-1.16l-3.45,-10.46l-6.65,-8.49l-0.53,-1.09l-4.5,-15.87l-1.27,-1.82l0,0l2.89,-0.04l2.15,0.54l5.41,0.03l0,0l4.24,0.04l2.75,0.55l9.07,0.07L111.75,268.73z"
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

// src/Liechtenstein.tsx
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
var Liechtenstein = ({
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
      LiechtensteinSingle,
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
      LiechtensteinMultiple,
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
var LiechtensteinSingle = ({
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
var LiechtensteinMultiple = ({
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
var Liechtenstein_default = Liechtenstein;

// src/index.ts
var src_default = Liechtenstein_default;
