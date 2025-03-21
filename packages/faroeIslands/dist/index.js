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

// src/Faroeislands.tsx
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
var stateCode = ["\xD8ster\xF8", "Norder\xF8erne", "Sand\xF8", "Str\xF8m\xF8", "Suder\xF8", "V\xE5g\xF8"];
var drawPath = {
  \u00D8ster\u00F8: "M366.64,204.31l0,0.15l1.88,0.76l10.3,4.18l2.09,2.42l0.54,2.67l0.24,1.18l2.08,2.46l0.08,0l2.85,-0.11l2.85,3.7l4.42,5.72l0.17,0.22l-1.91,1.31l-6.83,4.68l-0.74,0.51l-4.74,0.91l-1.82,-0.05l-2.33,-0.06l-0.39,-0.01l-3.08,-2.93l2.11,14.74l0.01,0.08l-0.64,1.48l-0.38,0.89l-2.72,6.27l1.33,4.51l0.94,3.17l-0.75,3.39l-0.29,1.28l-2.08,2.3l-2.04,-0.14l-2.49,-0.17l-12.39,-24.39l-0.12,-0.24l-0.16,-0.31l-0.73,-1.43l0.55,-4.98l0.01,-0.09l-0.04,-0.08l-2.37,-4.36l2.39,-5.76l0.2,-0.51l4.36,0.16l-0.61,-8.78l-3.25,-10.97l0.27,-2.76l-15.24,-27.73l-1.01,-0.8l-4.83,-3.8l-3.36,-2.64l-4.24,-4.78l-2.74,-3.09l-3.42,-3.89l-5.27,-1.99l1.15,3.56l1.37,4.24l12.15,13.59l3.73,4.13l0.41,0.49l2.94,3.5l0.05,0.09l0.39,0.72l4.15,7.76l1.98,3.69l3.14,5.84l1,18.17l-4.75,12.03l0.51,5.24l0.16,1.68l-4.6,-3.01l-6.39,-10.62l-8.58,-8.96l-5.53,-2.54l-7.43,-11.51l-4.26,-9.2l-3.87,-3.9l-5.76,-1.67l-2.97,-2.41l-0.74,-0.61l-1.41,0.39l-9.4,2.57l-1.66,-3.44l-0.58,-1.3l-0.25,-0.49l-0.08,-0.16l-7.64,-9.13l-1.11,-1.32l-1.41,-3.5l-0.8,-1.99l-5.15,-3.57l-1.96,-0.27l-3.31,-0.46l-0.41,-4.37l-4.2,-11.75l0.57,-3.1l0.1,-0.56l-0.9,-0.69l-3.93,-3.04l-0.12,-0.22l-3.05,-5.61l-2.55,-2.77l-2.56,-5.73l-3.6,-1.91l0.02,-4.44l0.02,-3.21l-3.99,-8.76l-1.1,-2.4l-0.34,-0.76l-0.76,-6.12l-2.5,-8.28l-3.01,-3.19l0.2,-6.19l-2.12,-3.59l-4.66,0.2l-6.29,0.28l0.71,-3.22l1.41,-6.44l2.97,-8.14l0.2,-0.16l1.1,-0.89l2.52,2.13l1.94,1.64l2.96,4.67l0.42,0.67l3.27,-0.96l9.77,-3.03l8.06,-7.67l-0.1,-1.03l-0.07,-0.68l-0.05,-0.52l1.86,-3.18l7.18,-1.79l1.15,-1.44l2.74,0.27l1.34,-2.4l3.8,0.15l4.41,0.17l0.47,3.27l5.05,2.15l2.36,4.72l0.04,0.08l6.75,3.98l5.99,3.53l2.45,3.19l-9.06,3.91l-6.25,5.28l-7.83,6.61l3.73,11.22l0.06,0.2l-1.78,13.47l5.24,16.22l0.9,1.33l2.46,-0.86l0.13,-0.05l-0.1,-0.1l-2.89,-2.87l-3.53,-9.41l0.68,-4.36l3.27,-5.73l1.4,-6.98l0.53,-2.66l1.08,0.8l2.95,-0.85l1.71,-1.97l3.24,0.67l3.78,-3.41l1.13,-1.02l10.43,-1.15l6.27,-2.93l0.04,-0.02l2.21,1.41l5.67,3.62l1.49,4.06l-6.51,1.46l-0.66,0.15l-0.12,0.42l-2.63,8.99l-0.42,2.61l-0.03,0.18l0.13,1.22l0.06,0.54l12.47,-5.13l3.24,-1.33l2.75,1.55l11.22,6.34l2.61,2.68l0.73,0.75l1.7,4.07l-0.51,4.37l-1.05,2.1l-1.1,2.21l-4.59,3.42l-2.69,2l-3.31,0.24l-5.24,-6.85l-0.18,-0.23l-1.45,0.16l0.14,0.32l4.47,10.1l0.25,0.57l0.97,1.04l0.32,0.24l2.66,2.06l5.17,3.79l2.44,-0.74l3.99,-1.22l4.49,-3.18l3.45,-0.08l2.53,1.04l8.44,8.63l27.88,10.06l0.19,2.05l1.12,12.34l-2.84,2.65l-13.57,-6.65l-5.54,-2.68l-17.91,-3.88l-1.37,-2.25l-1.34,1.97l0.07,3.29l-2,-0.08l0.3,6.6l5.56,8.16l3.64,1.12l0.31,0.1l2.75,-0.64l0.14,0.11l3.52,2.91l6.26,5.16l0.92,0.36l8.73,3.38l10.12,8.69l1.54,1.32l0.72,0.38l2.03,1.05l10.62,5.4l0.68,4.39l-9.62,-3.2l-9.97,-5.61l-19.01,-1.72L366.64,204.31z",
  Norder\u00F8erne: "M404.86,11.24l-0.08,-1.45l2.35,-1.33l2.89,-1.63l1.45,-2.8L413.56,0l5.61,1.67l4.83,3.29l1.96,1.33l6.29,11.83l2.76,5.19l-0.06,2.67l-0.2,9.4l7.2,12.89l3.57,1.81l4.13,7.24l-1.23,8.19l0.56,9.01l2.86,1.36l0.51,-0.4l3.47,-2.71l3.83,-13.65l2.92,2.69l11.09,10.21l2.37,2.18l-8.8,11.01l-1.87,5.67l0.16,0.79l0.6,3.01l0.44,2.18l-32.26,-10.26l-5.44,-18.38l-1,-4.55l-1.2,-2.32l-3.73,-7.18l-3.42,-11.27l0.08,-0.35l0.05,-0.22l2.47,-10.31l-0.7,-5.92l-0.61,-0.93l-1.47,-2.26l-11.51,-5.52l-2.79,-3.6L404.86,11.24zM518.62,82.42l-3.23,-1.83l-2.85,0.55l-1.39,0.27l-0.33,0.06l-5.87,-4.55l-0.22,-2.95l-6.13,2.15l-4.58,6.15l-0.06,0.08l-5.06,10.33l-0.29,0.6l-5.75,-0.59l-2.08,-0.21l-3.8,1.27l-0.03,0.03l-0.15,0.16l-2.2,2.37l-1.34,3.17l-0.48,1.13l0.5,3.07l0.24,1.47l3.57,2.55l3.8,5.25l1.83,4.63l-0.24,5.82l0.38,1.01l2.26,6.05l0.49,1.3l1,-0.43l10.14,-4.42l3.87,-0.73l3.67,-0.7l1.58,-2.02l1.28,-1.64l-0.8,-2.43l1.25,-3.78l-0.45,-2.94l3.19,-6.27l-10.77,-7.92l-0.09,-4.53l1.84,-1.09l6.91,0.31l2.64,0.12l8.32,2.12l-0.02,-0.56L518.62,82.42zM405.85,114.87l-0.16,-8.89l-0.01,-0.42l-3.42,-7.53l-0.82,-1.8l-3.38,-17.31l-8,-14.26l-10.38,-18.5l0.87,-4.4l-1.47,-2.95l0.2,-0.15l1.45,-1.25L379,29.31l-2.43,-0.34l-1.58,-0.22l-1.19,-2.76l-5.45,-1.09l-3.94,8.13l1.29,10.1l-2.14,8.9l3.47,10.68l0.26,5.74l0.03,0.73l0.4,0.7l5.23,9.12l2.47,4.31l3.64,10.37l0.23,0.44l1.71,3.31l2.35,4.6l4.24,8.3l2.25,4.39l12.28,2.73L405.85,114.87zM459.61,111.42l-4.66,-6.93l-7.4,-2.08l-6.91,-5.18l-6.85,-7.15l-2.6,-3.99l0.92,-4.04L427.94,70.1l-4.66,-6.92l-6.92,-9.96l-2.73,-5.53l-1.89,-12.94l-1.14,-2.24l-1.42,-2.8l-2.37,0.17l-3.12,0.23l-3.98,4.07l-0.97,3.34l-1.77,6.09l4.14,9.61l0.13,0.3l-0.35,4.16l-0.02,0.31l6.76,14.13l-0.82,22.66l2.82,8.7l0.23,0.71l0.6,5.5l-1.15,7.25l-0.72,1.2l-2.81,4.7l0.24,0.87l2.51,9.08l-0.07,0.8l-0.14,1.55l-0.08,0.92l-4.12,-2.15l-1.63,-8.6l-0.2,0l-1.39,0.01l-7.61,0.06h-0.12l-0.49,3.05l1.42,5.29l0.67,2.49l-0.03,0.77l-0.19,5.36l1.3,3.9l3.23,1.56l3.9,6.92l0.86,1.53l7.72,13.69l2.88,2.37l2.43,2l5.29,8.87l0.06,0.02l1.3,0.35l1.71,0.46l0.42,-1.33l0.4,-1.29l-0.57,-7.58l-0.02,-0.28l-0.37,-0.68l-4.09,-7.49l-1.85,-3.36l0.72,-4.73l-1.76,-2.19l-3.09,-9.45l-2.82,-2.83l1.22,-3.39l1.52,-0.34l1.41,-0.32l4.33,4.99l2.66,3.07l1.41,4.83l1.97,6.78l4.49,6.36l4.61,3.66l3.2,6.63l1.82,0.1l15.42,0.87l3.03,-3.15l0.48,-2.46l0.24,-1.1l0.21,-0.96l-1.39,-1.67l-1.92,-2.31l1.45,-9.94l-0.13,-1.21l-0.94,-8.49l-14.25,-3.78l-6.82,-7.54l-7.06,-10.66l-2.16,-6.4l-0.64,-1.9l0.73,0.24l2.49,0.82l2.89,0.95l6.31,7.01l8.21,6.73l2.94,2.43l14.11,-2.79l0.51,-0.64l1.79,-2.23l0.97,-9.75l0.26,-2.59l-3.86,-3.98L459.61,111.42zM373.32,116.78l-3.26,-5.32l-0.09,-0.15l-2.59,-8l-0.25,-0.78l-1.62,-5.07l-1.69,-5.29l-0.67,-2.09l-11.06,-19.12l-1.98,-3.42l-3.86,-6.67l-0.26,-1.14l-1,-4.38l-3.94,-8.14l-3.3,-15.87l-2.53,-0.43l-0.46,-0.7L327,18.35l-4.2,0.08l-1.15,7.46l3.02,10.85l0.56,2.03l0.32,1.17l0.54,3.28l0.09,0.56l8.03,20.38l3.05,7.73l0.69,1.76l2.53,4.54l8.65,15.49l2.3,2.15l4.61,4.13l3.09,5.58l-0.72,20.96l2.04,4.09l8.67,7.23l5.02,2.53l5.38,-2.53l0.99,-4.58l0.31,-1.43l-2.13,-11.77L373.32,116.78zM525.9,42.17l-3.88,1.73l-4.34,0.63l-2.64,0.39l-1.58,-1.15l1.35,-2.23l0.59,-0.97l-0.36,-0.72l-1.65,-3.28l-6.18,-0.63l-2.4,-0.25l-1.57,2.98l-0.59,1.12l-0.62,1.18l-0.1,1.92l-0.6,11.43l5.67,9.92l0.31,0.55l1.11,-0.15l5.92,-0.77l3.96,-0.52l2.08,-1.2l0.85,-1.42l2.39,-4l0.14,-0.25l3.01,0.95l0.54,-1.38l0.3,-0.77l0.79,-6L525.9,42.17z",
  Sand\u00F8: "M350.38,561.97l0.43,0.91l-1.3,0.86l-4.01,-1.15l-4.1,-1.18l-0.06,-0.02l-0.38,-6.24l-0.18,-2.99l0.15,-0.9l0.38,-2.25l0.38,-2.35l3.34,1.54l3.1,3.88l-0.33,4.44L350.38,561.97zM331.27,509.35l-1.08,-4.88l-0.2,-0.55l-5.23,-14.51l-3.3,-3.37l-5.87,-1.8l-3.23,0.63l-1.07,-0.83l-2.08,-1.6L309,483.15l-1.8,6.11l0.54,10.75l5.29,5.78l3.42,3.73l2.16,2.36l1.82,1.99l11.33,-2.35l-0.44,-2.01L331.27,509.35zM389.35,448.41l-1.43,0.65l-6.09,0.16l-3.82,-8.49l-2.6,-2.47l-2.76,-2.61l-1.78,-5.46l-4.67,-5.73l-6.8,-1.15l-7.1,-3.41l-1.15,-2.28l-0.52,-1.03l-0.53,-0.02l-6.11,-0.22l-0.53,-0.3l-10.51,-6.06l-0.06,-0.21l-0.25,-0.87l-2.21,-7.58l-1.72,0.26l-1.36,0.21l-1.51,-2.71l-1.38,-2.48l-0.79,-0.31l-2.22,-0.87l-4.2,1.18l-4.95,-1.62l-1.29,-0.42l-0.53,0.22l-4.41,1.83l-0.74,-1.2l-4.95,-8.09l-0.95,-0.26l-2.89,-0.79l-7.47,1.33l-0.2,0.04l-2.46,-0.77l-10.92,-3.42l-1.22,0.31l-1.34,0.34l1.86,4.57l2.12,0.63l2.37,5.47l3.31,3.51l0.22,4.41l3.16,2.73l-2.04,4.27l-0.27,0.56l2.75,3.85l0.33,6.86l2.19,4l0.74,5.82l2.99,1.89l1.47,4.87l-3.85,-1.15l-0.9,-0.27l0.4,0.94l4.73,11.16l2.84,1.14l1.79,6.55l0.73,0.14l2.64,0.49l0.77,-1.56l-0.82,-2.04l3.01,-4.64l2.52,0.3l9.27,-3.31l0.27,0.06l1.9,0.21l1.28,4.51l1.49,1.4l2.88,2.73l-0.16,-2.77l-0.3,-5.12l-0.06,-1.09l-0.06,-0.99l0.3,-0.02l2.97,-0.22l10.29,5.19l1.57,0.79l0.01,0.35l0.07,2.71l5.06,14.72l0.51,6.48l4.61,6.87l0.06,0.15l0.2,0.52l2.39,6.35l4.2,3.53l2.71,4.63l3.2,0.63l2.44,6.74l3.91,1.37l1.14,3.26l2.08,1.73l3.08,-0.08l2.3,-4.62l2.72,-0.24l-0.67,-1.88l2.79,-2.59l-1.84,-3.53l-4.55,-8.71l-2.64,-2.03l3.86,-2.47l4.24,-2.71l-0.08,-3.35l-0.21,-8.65l-0.01,-0.25l-0.05,-0.05l-3.29,-3.09l-1.15,-1.13l-0.19,-0.19l2.45,-2.61l1.56,-0.85l6.85,-3.74l0.39,-3.89l0.07,-0.16l0.45,-1.07l1.62,-3.88L389.35,448.41z",
  Str\u00F8m\u00F8: "M397.87,350.02l-1.41,4.34l-2.82,2.6l-1.78,-1.64l-2.75,-2.54l-0.26,-0.36l-1.45,-2l-0.79,-6.32l-0.22,-1.73l-0.74,0.21l-1.26,0.35l-3.73,-6.14l-1.21,-1.99l-2.97,-1l-0.08,-0.03l-1.47,-5.26l-0.27,-0.98l0.12,-0.71l1.92,-11.14l-0.44,-3.32l-6.33,-12.34l-0.28,-0.54l1.3,-0.48l6.17,4.74l0.28,2.05l0.22,1.61l0.35,2.51l3.2,4.82l5.79,5.93l0.22,0.25l0.8,4.85l0.1,0.58l1.11,0.4l1.59,0.55l0.68,0.24l-0.21,3.8l-0.23,4.17l2.16,3.2l0.18,0.27l4.16,6.16l0.37,4.82L397.87,350.02zM352.74,343.86l-0.58,-3.83l2.07,-6.98l-0.4,-2.59l-0.05,-0.33l-8.55,-5.38l-1.74,-1.09l-0.17,-0.41l-2.17,-5.28l-0.03,-0.03l-3.38,-3.13l0.11,-0.25l3.64,-7.98l1.19,0.16l1.4,-2.63l0.04,-0.07l2.62,-1.29l-1.69,-8.74l3.24,-1.61l0.25,-0.13l-0.78,-0.51l-2.38,-1.55l-2.7,-11.12l-0.49,-2.01l-6.35,-0.24l-0.97,-0.46l-5.27,-2.47l-13.48,2.85l-13.56,-6.57l-6.46,-1.19l-4.35,-3.48l0.25,0l2.27,0.02l6.29,0.06l4.68,1.78l0.37,0.14l6.33,2.41l0.06,0.02l0.07,-0.03l7.75,-3.51l0.44,-0.2l7.78,-5.37l-11.52,-22.77l-3.78,-7.49l-5.75,-1.81l-4.23,-3.74l-5.22,-1.43l-3.69,2.07l-5.26,5.66l-9.16,2.44l-0.1,-0.23l-1.57,-3.58l6.38,-0.94l4.73,-4.53l3.31,-3.25l5.68,-1.11l3.71,-2.78l0.65,-5.54l0.1,-0.81l-1.75,-1.7l-2.82,-2.75l-1.98,-4.23l-1.25,-2.68l-3.12,-2.41l-3.46,-2.67l-2.66,-2.06l-6.08,-1.28l-3.35,-0.71l0.02,-3.23l0.01,-0.75l-4.8,-5.4l-2.61,-2.53l-4.18,-3.21l-0.07,-0.06l-6.79,-5.23l-0.84,-0.65l-6.24,-2.62l-5.76,-2.54l-0.09,-2.22l-0.06,-1.6l5.87,-0.48l0.2,-0.3l1.47,-2.18l0.15,-0.22l0.22,-4.33l-6.57,-11.27l-5.87,-4.61l-0.56,-0.97l-2.67,-4.61l-6.8,-11.77l-0.95,-2.47l-5.74,-19.21l-9.07,-16.06l-0.03,-0.05l-0.07,-0.03l-1.01,-0.41l-6.27,-2.55l-0.26,0.2l-4.17,3.28l-2.01,1.51l0.26,-6.06l-0.31,-0.54l-0.88,-1.53l-3.39,-1.84l-5.07,-2.75l-2.61,0.8l-0.16,0.05l-4.74,6.86l-1.31,0.3l-1,-3.13l-6.71,-1.99l-0.35,1.02l-1.23,3.52l-2.19,-0.07l-0.65,3.63l-1.69,2.13l1.37,2.47l0.26,2.41l0.64,5.97l-1.52,1.59l-0.19,6.38l-2.45,3.27l-0.28,4l0.74,3.33l0.7,3.17l0.02,0.1l8.13,3.11l-4.61,1.19l-1.49,7.43l-0.39,1.97l-3.35,16.72l-3.08,5.81l2.2,2.95l-3.94,7.39l-1.46,7.4l-1.07,0.47l5.68,4.01l4.05,5.21l6.75,12.35l4.09,3.38l6.32,1.55l2.72,0.67l2.86,5.13l1.78,3.2l1.86,6.36l0.2,0.17l9.16,7.91l0.18,0.16h0.1l8.79,-0.11l7.19,2.22l3.78,1.15l1.06,-1.85l0.67,-1.18l0.48,0.23l4.52,1.93l7.11,-2.42l0.79,-0.31l-0.02,0.84l-0.11,3.88l1.9,1.83l1.3,1.25l7.71,7.4l2.19,6.66l0.29,0.44l2.79,4.31l0.24,2.14l1.47,13.3l-0.6,3.5l-1.37,8.06l2.23,3.88l1.69,-1.75l0.78,2.99l1,3.78l3.06,0.99l0.31,-0.12l5.38,-2.09l7.76,-0.16l2.05,0.91l1.18,0.52l0.99,2.15l4.25,9.24l0.48,3.39l1.9,13.45l2.18,1.84l3.62,3.06l4.64,1.97l2.24,3.68l2.87,0.81l5.83,6.8l10.64,12.4l5.46,6.47l5.6,5.2l4.43,2.48l5.58,5.97l5.59,0.17l2.85,1.57l0.62,-0.64l5.73,-5.91l-3.94,-11.68L352.74,343.86zM266.37,323.86l-0.03,-0.07l-0.7,-1.72l-5.59,-5.95l-0.96,-1.02l-0.18,-0.19l-2.18,-2.32l-5.65,-0.83l-0.29,-0.04l2.63,7.15l0.86,2.33l7.79,5.45l7.33,8.52l1.63,0.08l-0.44,-1.07L266.37,323.86zM296,349.15l-1.87,-1.5l-0.35,-1.29l-0.63,-2.34L288.73,341l-3.23,-0.64l-3.98,0.07l-1.5,1.23l0.12,0.33l2.22,6.22l3.43,2.82l4.93,7.19l1.38,0.58l1.81,0.76l0.45,0.91l0.63,1.27l2.66,5.37l0.16,0.33l0.3,0.04l2.93,0.43l1.81,2.26l0.28,0.34l0.13,-0.3l0.65,-1.51l1.53,-1.41l0.7,-0.64l-6.39,-14.51L296,349.15z",
  Suder\u00F8: "M375.66,775.88L373.5,792l-1.69,-2.36l-1.95,-0.06l-2.04,2.41l-2.86,-4.71l-4.65,-3.53l-4.3,-1.97l-9.15,-4.32l-4.59,-5.99l-0.34,-1.26l-2.66,-9.68l-0.45,-0.22l-1.96,-0.94l-10.2,-9.69l-3.15,-2.99l-0.1,-0.09l-3.78,-3.59l-1.62,-0.46l-1.91,-0.55l-0.74,-1.12l-1.29,-1.94l1.33,-2.45l-0.55,-0.3l-1.89,-1.02l-3.91,-0.07l-1.23,-2.13l-3.16,-5.48l-3.16,-0.55l-0.89,-0.15l0.4,-0.72l1.85,-3.3l-1.75,-0.58l-0.46,-2.86l0.99,-2.84l-5.12,-6.87l-2.62,-0.13l-0.58,-0.03l-0.08,-0.37l-0.59,-2.8l-0.88,-4.16l-0.45,-2.85l3.05,-5.83l0.81,-5.31l0.16,-1.04l0.41,-2.67l-5.02,-4.99l-6.27,-4.82l-0.33,-3.19l-0.85,-4.12l-3.31,-2.8l-0.22,-3.74l-1.71,-3.69l-0.13,-0.29l-3.48,-3.29l-1.37,-1.32l-5.26,-2.63l-3.07,-4.58l-3.17,-1.52l2.4,-2.79l1.01,-3.9l2.76,-2.42l-7.73,-3.42l-0.66,-2.53l-3.8,-3.47l2.6,-1.52l0.95,-0.55l1.16,-0.67l1.67,-2.27l-4.89,-3.01l-0.6,-4.12l-3.29,-3.45l4.2,-2.65l1.41,-2.97l0.26,-0.55l0.26,-0.55l4.12,-1.09l-2.26,-7.42l0.27,-0.34l1.22,-1.53l6.61,-1.41l14.97,-3.04l1.33,1.02l7.22,5.54l-0.27,3.54l-8.2,5.28l-1.04,4.84h3.31h1.67l5.24,-1.87l3.75,0.7l1.33,1.07l0.42,0.33l-4.38,2.19l-11.36,9.36l-1.89,4.21l-7.8,2.5l2.19,4.31l5.31,-3.22l1.73,1.32l13.12,-2.67l4.95,1.04l7.39,-1.4l2.31,2.14l3.93,3.63l-1.05,4.41l2.54,1.89l0.93,0.7l0.03,0.02l0.29,2.85l0.1,0.94l0.13,1.28l3.38,0.92l4.94,1.42l3.31,-2.57l8.88,0.86l6.71,2.49l1.06,0.39l0.37,1.91l0.08,0.42l0.45,2.34l-2.12,4.75l3.77,3.01l1.18,0.94l1.29,1.03l0.42,2.47l0.22,1.27l0.11,0.63l-2.62,1.69l-0.27,0.18l-1.51,3.91l-0.05,0.14l-2.92,-0.49l-2.45,-0.41l-1.93,-0.33l-0.5,-0.09l-0.19,0.17l-0.55,0.49l-1.92,1.71l-0.84,0.75l-1.89,-2.6l-3.71,-5.1l-9.97,-5.62l-1.98,-1.12l-2.06,-1.16l-0.11,0.33l-0.99,2.51l14.75,10.82l0.62,2.48l1.19,1.64l6.8,3.16l0.57,0.27l5.68,0.7l4.49,3.89l0.23,0.4l2.85,4.99l0.78,1.37l-0.51,2.95l-0.16,0.94l0.23,0.46l0.56,1.11l2.1,4.14l0.86,1.69l-12.15,0.47l0.85,2.65l0.19,0.58l0.04,0.11l0.24,0.31l0.86,1.11l0.95,1.23l2.04,2.64l1.9,1.79l2.9,2.28l6.53,-2.31l2.12,0.6l0.79,1.91l0.33,0.78l-1.82,2.1l-3.79,1.16l-0.73,1.14l-0.57,0.88l-2.3,-0.16l-1.24,-0.09l-1.3,1.38l-2.67,0.28l-2.25,3.63l-2.13,1.3l-1.32,0.8h-0.34h-5l-3.12,-1.55l-5.87,-0.54l-2.71,1.24l5.09,4.04l4.23,5.31l0.81,1.02l1.2,1.51l-0.76,1.9l0.55,3.65l0.45,2.97l0.03,0.16l2.84,-0.08l1.29,-6.36l1.47,-1.75l11.52,-4.08l3,0.45l1.08,1.13l0.42,0.46l-3.5,12.03l-0.06,0.22l1.93,0.78l9.2,-2.85l0.31,-0.1l1.26,14.43l-0.76,2.83l-0.24,0.89l4.38,2.68l0.82,0.5L375.66,775.88zM366.07,603.41l0.23,-2.56l-4.56,-1.71l-1.27,-0.48l-2.34,1.56l-0.55,2.54l-0.45,2.07l8.88,-0.62L366.07,603.41z",
  V\u00E5g\u00F8: "M92.75,250.55l6.06,4.31l-9.83,1.96l0.09,-3.98L92.75,250.55zM231.54,252.62l-5.27,-12.28l-4.64,-2.52l-17.39,-0.97l-6.94,-10.4l-4.28,-6.41l-1.19,-1.73l-0.09,-0.13l-0.06,-0.09l-2.65,-1.72l-6.78,-4.41l-14.15,-6.75l-2.64,-3.89l-0.13,-1.13l-0.76,-6.5l1.67,-1.27l-0.45,-2.94l-1.65,-0.36l-2.88,-0.63l-22.31,10.88l-5.11,2.49l-5.64,0.24l-0.19,7.78l-1.56,4.21l-0.84,1.35l-0.49,0.79l-1.64,-0.29l-5.97,-1.04l-0.86,-0.15l-7.42,-1.3l-3.86,-5.87l-3.79,0.24l-11.44,-8.57l-1.86,1.83l-3.79,-1.43l-1.48,2.54l0.28,1.02l1.05,3.75l-1.15,1.59l1.38,3.65l-1.67,1.83l1.89,3.89l4.41,3.38l0.04,0.03l0.12,0.73l0.51,3l1.82,1.19l3.78,8.4l3.9,3.53l6.17,-0.04l-1.87,2.33l5.22,1l2.82,3.33l2.71,-1.69l3.17,1.73l3.34,1.82l4.69,1.37l8.27,2.41l2.76,5.29l0.14,0.74l0.42,2.18l0.25,1.29l-4.82,-1.91l-5.41,-2.14l-2.25,0.98l-1.34,0.58l-2.75,1.2l-0.43,0.19l-0.78,-0.9l-4.46,-5.11l-0.3,-0.07l-3.53,-0.68l-8.47,5.09l2.31,2.38l-0.45,2.93l6.13,1.2l-0.09,3.96l-0.02,0.94l2.69,1.11l8.41,3.48l5.65,-0.79l3.14,3.49l0.21,0.23l4.05,-3.17l4.24,5.38l8.66,0.71l4.38,5.22l5.24,1l0.28,0.77l1.06,2.91l3.61,3.14l3.22,2.8l1.1,1.2l0.22,0.23l2.03,2.21l0.54,-0.3l2.69,-1.52l0.34,-0.19l7.01,1.46l1.71,-1.19l2.86,-1.98l2.02,-1.4l3.56,-2.47l0.74,0.13l3.96,0.72l6.15,-6.7l-4.57,-4.51l-2.84,-0.76l-1.86,-0.5l-2.67,-0.71l-3.92,-2.62l2.02,-0.17l0.04,0l4.57,-0.4l3.17,-0.27l3.06,-5.74l0.35,2.02l0.6,3.3l1.92,1.85l3.95,0.85l2.69,-0.27l2.88,-0.29l3.28,-0.35l2.59,-0.28l2.49,2.77l4.72,-0.24l0.98,-2.47l1.37,-3.46l0.85,-10.69l5.97,-6.33L231.54,252.62zM52.63,236.69l-7.79,-8.53l-3.94,-1.69l-3.01,-3.73l-6.54,-0.32l-5.87,3.17l-2.17,-0.01l-1.37,1.75l-1.43,1.83l-4.7,0.22l-0.39,0.02l-4.42,3.41l-9.31,3.83L0,239.47l5.09,-0.24l2.05,-1.19l3.43,-1.98l4,-0.66l7.71,3.31l0.11,0.06l0.1,0.01l9.34,0.65l1.33,0.09l0.38,0.03l6.02,-1.35l3.57,2.62l3.59,0.74l11.92,2.47l-1.31,-6.19L52.63,236.69z"
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

// src/Faroeislands.tsx
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
var Faroeislands = ({
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
      FaroeislandsSingle,
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
      FaroeislandsMultiple,
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
var FaroeislandsSingle = ({
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
var FaroeislandsMultiple = ({
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
var Faroeislands_default = Faroeislands;

// src/index.ts
var src_default = Faroeislands_default;
