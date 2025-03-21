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

// src/Pitcairnislands.tsx
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
var stateCode = ["Pitcairn Islands"];
var drawPath = {
  "Pitcairn Islands": "M10.45,359.33L10.49,359.33L10.52,359.31L10.59,359.29L10.64,359.25L10.66,359.2L10.68,359.13L10.68,359.06L10.68,359.02L10.66,358.97L10.64,358.93L10.65,358.89L10.68,358.87L10.71,358.85L10.77,358.87L10.82,358.88L10.87,358.89L10.94,358.89L11,358.89L11.05,358.91L11.06,358.94L11.07,358.99L11.1,359.02L11.14,359.03L11.17,359L11.23,358.98L11.28,359.01L11.33,359.04L11.33,359.09L11.36,359.12L11.38,359.13L11.38,359.16L11.41,359.16L11.43,359.16L11.51,359.19L11.51,359.15L11.5,359.11L11.49,359.09L11.49,359.06L11.47,359.03L11.49,359.01L11.51,359L11.53,359.02L11.54,359.04L11.57,359.04L11.58,359L11.58,358.97L11.6,358.94L11.63,358.93L11.72,358.92L11.76,358.91L11.81,358.9L11.93,358.83L11.97,358.81L12.01,358.8L12.08,358.79L12.1,358.78L12.17,358.79L12.19,358.82L12.21,358.85L12.25,358.85L12.28,358.82L12.31,358.78L12.35,358.76L12.41,358.73L12.47,358.72L12.5,358.73L12.55,358.73L12.56,358.7L12.56,358.66L12.58,358.64L12.61,358.64L12.62,358.61L12.61,358.57L12.61,358.5L12.57,358.5L12.55,358.48L12.56,358.44L12.62,358.39L12.68,358.35L12.75,358.29L12.86,358.18L12.9,358.1L12.91,357.96L12.94,357.91L12.99,357.75L13.02,357.57L13.03,357.52L13.06,357.47L13.12,357.42L13.16,357.36L13.2,357.27L13.23,357.15L13.25,357.07L13.25,356.92L13.26,356.85L13.28,356.81L13.34,356.76L13.4,356.74L13.49,356.73L13.54,356.72L13.57,356.74L13.6,356.79L13.65,356.83L13.68,356.89L13.71,356.91L13.77,356.92L13.83,356.94L13.97,356.95L14.05,356.98L14.08,357L14.21,357L14.3,356.98L14.34,356.95L14.38,356.94L14.44,356.95L14.57,356.94L14.61,356.95L14.67,356.96L14.72,356.98L14.73,357.02L14.74,357.06L14.76,357.1L14.79,357.13L14.85,357.15L14.9,357.15L14.95,357.17L14.98,357.2L15.01,357.23L15.03,357.22L15.05,357.2L15.04,357.14L15.01,357.09L15.02,357.07L15.05,357.09L15.09,357.16L15.21,357.22L15.29,357.25L15.39,357.31L15.45,357.35L15.49,357.37L15.54,357.38L15.66,357.42L15.74,357.44L15.76,357.44L15.79,357.43L15.79,357.4L15.84,357.42L15.87,357.45L15.89,357.49L15.89,357.51L15.93,357.52L15.97,357.52L16,357.5L16.02,357.48L15.97,357.48L15.96,357.45L15.99,357.44L16.04,357.41L16.08,357.41L16.1,357.38L16.13,357.38L16.17,357.34L16.19,357.31L16.22,357.31L16.27,357.28L16.38,357.27L16.41,357.26L16.42,357.23L16.4,357.2L16.37,357.18L16.39,357.16L16.39,357.13L16.37,357.11L16.31,357.09L16.28,357.1L16.23,357.1L16.2,357.09L16.2,357.06L16.2,357L16.21,356.96L16.23,356.92L16.23,356.89L16.25,356.85L16.3,356.83L16.36,356.83L16.38,356.81L16.32,356.8L16.24,356.8L16.21,356.79L16.17,356.77L16.23,356.72L16.22,356.7L16.13,356.66L16.05,356.65L15.92,356.63L15.87,356.61L15.86,356.59L15.86,356.55L15.88,356.52L15.92,356.51L16,356.49L16.03,356.45L16.04,356.42L16.02,356.39L15.98,356.37L15.94,356.36L15.87,356.35L15.9,356.31L15.96,356.29L15.98,356.28L16,356.27L16.01,356.24L15.98,356.19L15.95,356.16L15.95,356.14L15.96,356.11L15.98,356.08L15.95,356.05L15.92,356.03L15.9,356.03L15.9,355.98L15.92,355.96L15.92,355.93L15.91,355.9L15.87,355.86L15.8,355.82L15.75,355.83L15.69,355.84L15.65,355.85L15.59,355.84L15.55,355.83L15.52,355.8L15.54,355.78L15.62,355.76L15.75,355.75L15.78,355.74L15.78,355.72L15.72,355.68L15.66,355.66L15.59,355.66L15.55,355.66L15.51,355.66L15.48,355.65L15.49,355.62L15.53,355.61L15.57,355.59L15.6,355.56L15.6,355.52L15.58,355.49L15.53,355.46L15.49,355.45L15.4,355.44L15.33,355.42L15.28,355.38L15.25,355.37L15.23,355.34L15.24,355.29L15.23,355.26L15.19,355.25L15.19,355.22L15.18,355.19L15.13,355.13L15.13,355.1L15.11,355.07L15.06,355.03L15,355.03L14.94,355L14.89,354.98L14.84,354.97L14.79,354.96L14.73,354.95L14.69,354.93L14.67,354.89L14.65,354.83L14.64,354.76L14.65,354.73L14.67,354.71L14.7,354.69L14.72,354.67L14.75,354.65L14.74,354.62L14.67,354.58L14.63,354.57L14.6,354.55L14.56,354.49L14.55,354.46L14.53,354.4L14.54,354.37L14.56,354.35L14.58,354.32L14.55,354.29L14.52,354.26L14.47,354.22L14.44,354.19L14.4,354.14L14.38,354.13L14.36,354.15L14.37,354.21L14.36,354.23L14.31,354.25L14.31,354.29L14.28,354.37L14.26,354.43L14.23,354.45L14.2,354.46L14.08,354.46L14.02,354.46L14,354.47L13.96,354.48L13.93,354.5L13.91,354.52L13.89,354.54L13.86,354.55L13.81,354.56L13.77,354.55L13.74,354.53L13.7,354.5L13.66,354.46L13.62,354.41L13.58,354.36L13.55,354.33L13.45,354.28L13.41,354.26L13.36,354.2L13.34,354.18L13.31,354.16L13.28,354.15L13.2,354.13L13.18,354.12L13.11,354.11L13.02,354.09L12.98,354.06L12.95,354.03L12.92,354L12.91,353.98L12.86,353.96L12.84,353.95L12.81,353.93L12.79,353.92L12.74,353.9L12.72,353.91L12.72,353.94L12.75,353.96L12.75,354L12.76,354.04L12.76,354.07L12.72,354.08L12.69,354.05L12.65,354.03L12.64,353.98L12.63,353.93L12.63,353.87L12.63,353.84L12.62,353.81L12.63,353.77L12.64,353.74L12.64,353.71L12.65,353.68L12.66,353.65L12.66,353.62L12.65,353.58L12.66,353.53L12.66,353.49L12.65,353.45L12.61,353.4L12.59,353.39L12.57,353.36L12.59,353.33L12.59,353.31L12.53,353.3L12.51,353.28L12.5,353.25L12.48,353.2L12.47,353.15L12.47,353.13L12.44,353.1L12.4,353.08L12.37,353.06L12.36,353.04L12.35,353.03L12.33,353.01L12.25,352.93L12.24,352.91L12.2,352.95L12.16,352.95L12.16,352.92L12.19,352.88L12.19,352.86L12.18,352.84L12.09,352.84L12.03,352.83L11.98,352.82L12.01,352.79L12.01,352.76L11.98,352.74L11.96,352.71L11.96,352.67L11.96,352.63L11.93,352.55L11.89,352.49L11.89,352.46L11.85,352.43L11.82,352.43L11.77,352.4L11.75,352.39L11.72,352.39L11.71,352.37L11.67,352.35L11.64,352.27L11.62,352.24L11.61,352.21L11.58,352.22L11.55,352.24L11.53,352.24L11.53,352.21L11.54,352.19L11.58,352.18L11.62,352.17L11.63,352.14L11.63,352.12L11.64,352.09L11.6,352.08L11.59,352.06L11.54,352.04L11.51,352.03L11.51,351.98L11.49,351.88L11.46,351.87L11.38,351.88L11.36,351.9L11.31,351.9L11.32,351.86L11.3,351.84L11.28,351.83L11.26,351.85L11.24,351.9L11.21,351.91L11.14,351.87L11.11,351.85L11.1,351.86L11.1,351.91L11.03,351.88L11.01,351.89L10.99,351.91L10.95,351.91L10.92,351.91L10.9,351.91L10.89,351.88L10.88,351.86L10.78,351.82L10.74,351.8L10.7,351.79L10.68,351.79L10.64,351.78L10.59,351.77L10.57,351.79L10.56,351.82L10.52,351.83L10.49,351.81L10.47,351.78L10.47,351.77L10.46,351.74L10.47,351.7L10.5,351.67L10.49,351.65L10.45,351.66L10.42,351.69L10.4,351.73L10.39,351.71L10.37,351.72L10.37,351.69L10.39,351.67L10.41,351.67L10.41,351.65L10.38,351.64L10.39,351.63L10.41,351.62L10.41,351.58L10.39,351.55L10.37,351.51L10.33,351.5L10.31,351.51L10.31,351.53L10.29,351.54L10.26,351.54L10.24,351.56L10.21,351.56L10.16,351.57L10.06,351.61L10.01,351.63L9.93,351.62L9.89,351.61L9.85,351.59L9.8,351.58L9.8,351.54L9.8,351.51L9.8,351.47L9.77,351.46L9.76,351.47L9.75,351.43L9.75,351.4L9.73,351.39L9.71,351.39L9.7,351.42L9.7,351.45L9.69,351.49L9.67,351.5L9.63,351.49L9.59,351.48L9.57,351.47L9.55,351.45L9.51,351.4L9.49,351.36L9.48,351.34L9.47,351.33L9.46,351.31L9.42,351.27L9.38,351.28L9.36,351.29L9.35,351.32L9.34,351.36L9.34,351.39L9.32,351.41L9.29,351.41L9.24,351.4L9.19,351.37L9.12,351.36L9.08,351.35L9.04,351.34L9.03,351.34L9.03,351.37L9.02,351.37L8.98,351.4L8.96,351.36L8.97,351.33L8.94,351.27L8.95,351.24L8.92,351.22L8.9,351.22L8.89,351.2L8.89,351.17L8.91,351.1L8.91,351.07L8.9,351.06L8.9,351.04L8.87,351.03L8.85,351.03L8.83,351.05L8.81,351.03L8.8,351.03L8.77,351.06L8.75,351.09L8.75,351.08L8.76,351.06L8.75,351.03L8.73,351L8.72,351L8.7,350.99L8.7,350.96L8.72,350.95L8.73,350.94L8.72,350.92L8.68,350.87L8.63,350.83L8.6,350.83L8.58,350.82L8.57,350.83L8.58,350.85L8.52,350.83L8.49,350.85L8.46,350.88L8.46,350.85L8.44,350.85L8.45,350.84L8.45,350.81L8.44,350.77L8.37,350.78L8.4,350.76L8.42,350.75L8.43,350.71L8.32,350.71L8.27,350.75L8.17,350.73L8.12,350.73L8.06,350.74L7.92,350.74L7.91,350.72L7.94,350.7L7.91,350.68L7.88,350.65L7.85,350.65L7.82,350.64L7.8,350.6L7.78,350.58L7.74,350.56L7.76,350.52L7.76,350.47L7.74,350.44L7.74,350.42L7.74,350.4L7.73,350.38L7.59,350.32L7.57,350.29L7.53,350.26L7.57,350.26L7.6,350.3L7.67,350.33L7.73,350.34L7.75,350.33L7.74,350.31L7.72,350.28L7.69,350.27L7.6,350.26L7.54,350.23L7.52,350.21L7.52,350.19L7.55,350.19L7.64,350.23L7.68,350.23L7.67,350.2L7.66,350.18L7.63,350.16L7.61,350.14L7.6,350.1L7.56,350.07L7.55,350.05L7.53,350.03L7.45,350L7.41,349.99L7.43,350.05L7.43,350.09L7.44,350.13L7.43,350.14L7.38,350.13L7.36,350.11L7.33,350.08L7.27,350.04L7.23,350.01L7.18,349.96L7.16,349.95L7.13,349.99L7.11,350.01L7.07,350.03L7.05,350.05L7.02,350.07L7,350.1L6.96,350.12L6.93,350.1L6.93,350.07L6.95,350.07L6.96,350.05L6.97,350.02L6.97,349.99L6.97,349.95L6.98,349.92L6.99,349.89L7.01,349.86L7.03,349.82L6.97,349.85L6.95,349.83L6.91,349.78L6.85,349.77L6.82,349.77L6.8,349.77L6.8,349.74L6.81,349.65L6.79,349.63L6.77,349.65L6.75,349.68L6.73,349.69L6.71,349.7L6.68,349.68L6.67,349.7L6.67,349.73L6.67,349.76L6.66,349.83L6.64,349.88L6.62,349.91L6.63,349.94L6.63,349.97L6.61,350L6.59,349.99L6.56,350L6.52,349.99L6.49,349.99L6.45,350L6.43,350.01L6.39,350L6.38,349.98L6.38,349.95L6.39,349.93L6.39,349.89L6.39,349.86L6.39,349.8L6.38,349.83L6.36,349.85L6.35,349.87L6.33,349.89L6.32,349.92L6.31,349.95L6.29,349.96L6.27,349.95L6.25,349.93L6.23,349.92L6.21,349.93L6.2,349.99L6.18,349.99L6.14,349.97L6.13,349.94L6.1,349.93L6.06,349.98L6.04,349.99L6.01,350L5.99,349.99L5.96,349.97L5.91,349.97L5.87,349.96L5.86,349.99L5.85,350L5.81,350.01L5.78,350L5.75,350L5.72,349.94L5.7,349.91L5.65,349.87L5.61,349.87L5.62,349.91L5.61,349.94L5.57,349.92L5.55,349.9L5.53,349.86L5.5,349.84L5.45,349.86L5.42,349.88L5.39,349.92L5.4,349.94L5.4,350.01L5.42,350.05L5.42,350.09L5.42,350.12L5.36,350.11L5.35,350.14L5.3,350.13L5.26,350.13L5.22,350.12L5.21,350.1L5.22,350.09L5.22,350.06L5.22,350.04L5.19,350.03L5.15,350.03L5.1,350.06L5.02,350.1L4.96,350.12L4.94,350.14L4.89,350.13L4.86,350.15L4.82,350.13L4.71,350.13L4.68,350.14L4.65,350.16L4.61,350.16L4.55,350.18L4.54,350.21L4.5,350.24L4.46,350.26L4.44,350.27L4.42,350.3L4.43,350.34L4.43,350.37L4.42,350.38L4.35,350.38L4.31,350.41L4.29,350.44L4.29,350.46L4.27,350.49L4.24,350.48L4.21,350.49L4.19,350.52L4.18,350.53L4.16,350.54L4.15,350.58L4.15,350.6L4.17,350.62L4.17,350.64L4.14,350.67L4.13,350.69L4.13,350.73L4.14,350.75L4.13,350.77L4.11,350.8L4.07,350.86L4.06,350.88L4.06,350.91L4.06,350.93L4.06,350.97L4.04,350.98L4.01,350.99L3.98,350.99L3.96,351L3.95,351.02L3.98,351.02L4,351.02L4.05,351.02L4.1,351.04L4.13,351.06L4.19,351.08L4.16,351.11L4.07,351.13L4.04,351.14L4.05,351.17L4.07,351.2L4.06,351.24L4.03,351.26L4,351.27L3.96,351.27L3.93,351.25L3.91,351.24L3.88,351.25L3.86,351.27L3.86,351.3L3.88,351.32L3.9,351.34L3.94,351.35L3.97,351.35L3.96,351.38L3.94,351.44L3.93,351.49L3.89,351.52L3.87,351.56L3.83,351.6L3.78,351.61L3.73,351.63L3.67,351.64L3.63,351.71L3.6,351.74L3.57,351.75L3.53,351.79L3.51,351.81L3.47,351.82L3.43,351.83L3.41,351.85L3.38,351.87L3.36,351.88L3.3,351.87L3.27,351.93L3.23,351.95L3.2,351.97L3.15,351.97L3.08,351.97L3.03,351.96L3.01,351.93L3,351.86L2.97,351.85L2.96,351.88L2.94,351.9L2.92,351.86L2.9,351.89L2.88,351.93L2.85,351.94L2.83,351.92L2.8,351.89L2.7,351.86L2.65,351.86L2.64,351.88L2.62,351.92L2.63,351.98L2.6,351.98L2.56,351.96L2.54,351.92L2.51,351.95L2.48,351.97L2.43,352.01L2.4,352.01L2.41,351.97L2.41,351.94L2.4,351.91L2.38,351.9L2.33,351.89L2.3,351.86L2.28,351.86L2.25,351.86L2.23,351.86L2.22,351.88L2.19,351.88L2.2,351.89L2.27,351.94L2.27,351.96L2.23,351.95L2.18,351.93L2.26,352L2.21,352.01L2.14,352.04L2.11,352.05L2.07,352.04L2.08,352.07L2.1,352.12L2.11,352.16L2.11,352.2L2.11,352.24L2.09,352.28L2.07,352.32L2.05,352.35L2.01,352.36L1.98,352.38L1.9,352.44L1.85,352.46L1.77,352.48L1.77,352.52L1.74,352.56L1.73,352.58L1.76,352.61L1.76,352.65L1.76,352.68L1.71,352.7L1.67,352.7L1.62,352.68L1.57,352.67L1.49,352.7L1.43,352.71L1.37,352.71L1.32,352.71L1.28,352.71L1.26,352.75L1.25,352.78L1.27,352.8L1.3,352.82L1.3,352.86L1.26,352.89L1.25,352.93L1.26,352.96L1.26,352.98L1.24,353.01L1.26,353.08L1.26,353.12L1.28,353.21L1.29,353.27L1.3,353.3L1.31,353.34L1.32,353.38L1.31,353.41L1.29,353.44L1.26,353.47L1.2,353.48L1.15,353.49L1.13,353.52L1.11,353.54L1.13,353.57L1.14,353.62L1.14,353.65L1.19,353.67L1.22,353.66L1.28,353.68L1.3,353.73L1.31,353.82L1.32,353.84L1.32,353.87L1.31,353.92L1.27,353.93L1.23,353.95L1.2,353.98L1.18,354L1.18,354.03L1.17,354.08L1.17,354.11L1.2,354.15L1.21,354.16L1.21,354.18L1.21,354.21L1.23,354.23L1.27,354.24L1.32,354.25L1.36,354.24L1.42,354.24L1.48,354.22L1.5,354.2L1.52,354.18L1.57,354.15L1.62,354.15L1.68,354.16L1.69,354.19L1.7,354.21L1.68,354.23L1.64,354.23L1.62,354.24L1.62,354.28L1.65,354.34L1.65,354.37L1.62,354.39L1.5,354.39L1.44,354.4L1.42,354.42L1.4,354.45L1.43,354.49L1.45,354.5L1.48,354.52L1.52,354.54L1.57,354.54L1.59,354.54L1.61,354.55L1.64,354.57L1.66,354.58L1.69,354.59L1.71,354.59L1.77,354.58L1.81,354.56L1.83,354.54L1.87,354.5L1.89,354.47L1.94,354.42L1.96,354.36L1.97,354.32L1.96,354.26L1.98,354.22L2.02,354.22L2.04,354.22L2.07,354.2L2.09,354.19L2.15,354.18L2.21,354.2L2.23,354.2L2.26,354.2L2.31,354.2L2.4,354.2L2.43,354.2L2.46,354.22L2.5,354.23L2.56,354.24L2.6,354.25L2.61,354.26L2.75,354.29L2.8,354.31L2.81,354.34L2.83,354.35L2.86,354.37L2.87,354.38L2.91,354.38L2.94,354.38L2.98,354.38L3.02,354.38L3.08,354.42L3.12,354.46L3.13,354.48L3.19,354.53L3.27,354.57L3.34,354.58L3.38,354.59L3.41,354.6L3.44,354.62L3.46,354.64L3.47,354.66L3.5,354.7L3.54,354.8L3.59,354.84L3.62,354.88L3.65,354.91L3.7,354.94L3.71,354.96L3.76,355L3.77,355.03L3.82,355.05L3.83,355.07L3.89,355.09L3.94,355.11L4.03,355.16L4.04,355.17L4.08,355.2L4.14,355.22L4.19,355.24L4.22,355.26L4.27,355.29L4.34,355.33L4.58,355.39L4.69,355.44L4.85,355.52L4.95,355.58L5.04,355.62L5.16,355.64L5.24,355.64L5.29,355.63L5.34,355.66L5.34,355.71L5.34,355.81L5.32,355.87L5.27,355.93L5.2,355.97L5.11,356.02L5.03,356.09L4.95,356.16L4.9,356.23L4.9,356.29L4.87,356.44L4.82,356.54L4.79,356.55L4.77,356.59L4.75,356.61L4.82,356.58L4.85,356.57L4.82,356.62L4.78,356.63L4.76,356.67L4.82,356.67L4.85,356.71L4.89,356.67L4.93,356.65L4.95,356.64L5.14,356.45L5.2,356.43L5.25,356.4L5.34,356.4L5.36,356.42L5.41,356.51L5.42,356.59L5.4,356.71L5.36,356.76L5.24,356.82L5.15,356.89L5.11,356.94L5.1,356.97L5.1,357.04L5.1,357.09L5.13,357.11L5.14,357.1L5.16,357.07L5.22,356.98L5.23,356.92L5.26,356.86L5.27,356.94L5.29,357.01L5.33,357.07L5.39,357.07L5.45,357.13L5.44,357.19L5.42,357.25L5.43,357.33L5.47,357.4L5.51,357.43L5.56,357.45L5.6,357.39L5.64,357.35L5.7,357.29L5.72,357.21L5.72,357.1L5.78,356.95L5.82,356.9L5.89,356.9L5.99,356.91L6.47,357.1L6.55,357.13L6.66,357.2L6.7,357.24L6.75,357.37L6.74,357.43L6.74,357.56L6.74,357.61L6.73,357.66L6.73,357.73L6.76,357.74L6.81,357.79L6.82,357.84L6.83,357.87L6.83,357.9L6.91,357.91L6.95,357.9L7.03,357.92L7.08,357.91L7.15,357.9L7.22,357.89L7.29,357.89L7.37,357.9L7.42,357.93L7.5,357.96L7.55,357.96L7.72,357.98L7.77,357.99L7.79,358L7.84,358.05L7.87,358.08L7.88,358.14L7.88,358.17L7.88,358.27L7.91,358.31L7.95,358.35L8.07,358.47L8.11,358.52L8.11,358.57L8.14,358.61L8.14,358.69L8.14,358.76L8.15,358.86L8.15,358.91L8.17,358.96L8.19,359.02L8.2,359.06L8.22,359.05L8.29,359.04L8.32,359.05L8.34,359.07L8.33,359.12L8.34,359.15L8.4,359.2L8.44,359.2L8.46,359.18L8.51,359.16L8.53,359.14L8.53,359.11L8.54,359.05L8.55,359.02L8.58,358.98L8.63,358.98L8.7,358.97L8.72,358.97L8.74,358.97L8.79,358.98L8.81,358.99L8.83,359L8.88,359.03L8.93,359.04L8.98,359.05L9.05,359.07L9.14,359.07L9.19,359.08L9.24,359.09L9.36,359.08L9.41,359.06L9.49,359.03L9.55,358.98L9.67,358.94L9.74,358.9L9.86,358.87L9.92,358.84L9.97,358.73L10,358.86L10.04,358.91L10.06,358.96L10.08,358.99L10.1,359.02L10.16,359.11L10.23,359.19L10.29,359.22L10.35,359.27L10.42,359.32L10.45,359.33zM794.85,0L794.77,0.03L794.72,0.08L794.72,0.15L794.69,0.23L794.59,0.28L794.48,0.29L794.36,0.32L794.23,0.33L794.14,0.36L794.1,0.45L794,0.6L793.91,0.69L793.84,0.71L793.78,0.7L793.72,0.7L793.61,0.72L793.52,0.78L793.45,0.82L793.42,0.89L793.29,0.95L793.21,0.97L792.97,1.04L792.67,1.19L792.41,1.32L792.07,1.47L791.45,1.75L791.16,1.92L790.74,2.19L789.86,2.65L789.54,2.8L789.25,2.92L788.58,3.19L787.74,3.46L787.47,3.54L787.19,3.61L786.95,3.65L786.72,3.71L786.49,3.81L786.3,3.89L786,4.02L785.6,4.11L785.35,4.18L785,4.21L784.63,4.24L784.27,4.27L783.72,4.26L783.33,4.27L782.91,4.3L782.65,4.3L782.15,4.25L781.56,4.17L780.9,4.01L780.3,3.83L779.72,3.66L779.02,3.45L778.49,3.31L778.08,3.28L777.71,3.29L777.45,3.35L777.21,3.42L777.03,3.53L776.84,3.6L776.67,3.68L776.55,3.76L776.42,3.87L776.23,4.11L776.12,4.21L776,4.27L775.93,4.32L775.93,4.41L775.89,4.47L775.87,4.54L775.86,4.63L775.79,4.75L775.71,4.81L775.67,4.89L775.68,4.99L775.68,5.11L775.63,5.18L775.58,5.23L775.5,5.29L775.49,5.36L775.51,5.45L775.51,5.51L775.31,5.74L775.26,5.86L775.25,5.95L775.24,6.07L775.21,6.15L775.19,6.27L775.14,6.44L775.11,6.61L775.09,6.77L775.06,6.96L775.02,7.06L774.98,7.18L774.98,7.29L774.98,7.4L774.99,7.52L774.97,7.58L774.89,7.68L774.87,7.82L774.88,7.98L774.83,8.25L774.82,8.62L774.75,8.88L774.61,9.27L774.53,9.44L774.42,9.64L774.29,9.84L774.08,10.11L773.89,10.31L773.73,10.48L773.57,10.61L773.41,10.7L773.31,10.79L772.78,11.14L772.54,11.35L772.32,11.61L772.23,11.79L772.21,12.03L772.16,12.23L772.11,12.35L772.04,12.51L772.03,12.69L771.97,12.77L771.95,12.86L771.96,12.97L771.96,13.15L771.94,13.28L771.83,13.65L771.75,13.86L771.65,14.07L771.58,14.27L771.54,14.39L771.48,14.54L771.43,14.69L771.37,14.76L771.2,14.95L771.14,15.04L771.11,15.16L771.02,15.26L770.99,15.34L770.96,15.51L770.92,15.65L770.85,15.7L770.82,15.81L770.84,15.91L770.82,16.04L770.75,16.16L770.69,16.24L770.62,16.32L770.6,16.53L770.59,16.64L770.56,16.79L770.53,16.91L770.52,17.03L770.52,17.14L770.55,17.31L770.55,17.45L770.54,17.57L770.51,17.75L770.5,17.85L770.5,17.97L770.49,18.16L770.51,18.33L770.61,18.6L770.62,18.78L770.7,19.32L770.73,19.49L770.78,19.68L770.8,19.8L770.85,19.99L770.89,20.12L770.94,20.26L770.98,20.47L771.03,20.72L770.99,20.83L770.99,20.98L771,21.06L771.02,21.2L771.09,21.36L771.13,21.53L771.13,21.65L771.16,21.78L771.19,21.92L771.24,22.03L771.27,22.12L771.38,22.4L771.45,22.65L771.45,22.75L771.51,22.89L771.54,22.98L771.59,23.08L771.6,23.2L771.64,23.35L771.66,23.45L771.79,23.71L772.02,24.26L772.19,24.62L772.39,24.96L772.51,25.11L772.58,25.24L772.7,25.4L772.77,25.53L772.99,25.89L773.18,26.12L773.2,26.22L773.24,26.33L773.32,26.47L773.48,26.76L773.69,26.92L773.86,27.07L773.98,27.17L774.05,27.27L774.09,27.34L774.17,27.44L774.19,27.55L774.21,27.66L774.27,27.78L774.32,27.84L774.33,27.94L774.38,28.14L774.42,28.25L774.5,28.35L774.7,28.49L774.89,28.73L775.01,28.94L775.06,29.1L775.32,29.32L775.39,29.46L775.5,29.59L775.62,29.73L775.71,29.87L775.81,29.94L775.92,30.03L775.99,30.17L776.02,30.32L776.11,30.57L776.19,30.67L776.25,30.76L776.33,30.88L776.35,31.03L776.4,31.17L776.44,31.24L776.56,31.35L776.61,31.48L776.63,31.56L776.7,31.64L776.75,31.74L776.73,31.87L776.76,31.97L776.83,32.07L777.02,32.47L777.16,32.78L777.38,33.31L777.46,33.57L777.56,33.73L777.65,33.92L777.8,34.21L777.86,34.34L777.91,34.42L777.95,34.52L778,34.59L778.08,34.54L778.13,34.52L778.18,34.54L778.21,34.61L778.25,34.74L778.28,34.83L778.29,34.99L778.3,35.06L778.39,35.14L778.46,35.25L778.45,35.36L778.5,35.48L778.6,35.68L778.94,36.09L779.03,36.24L779.11,36.35L779.21,36.59L779.25,36.68L779.32,36.75L779.47,36.8L779.66,36.88L779.85,37L780.05,37.15L780.45,37.42L780.68,37.53L780.94,37.76L781.05,37.86L781.09,37.95L781.19,38.04L781.29,38.08L781.46,38.16L781.58,38.15L781.68,38.1L781.75,38.05L781.83,38.09L781.86,38.18L781.86,38.32L781.89,38.41L781.95,38.43L782.03,38.4L782.15,38.37L782.28,38.38L782.57,38.57L782.77,38.62L783.04,38.65L783.24,38.65L783.47,38.68L783.89,38.79L784.13,38.85L784.65,38.93L785.19,39L785.55,39.05L785.78,39.03L785.99,39.01L786.24,39.04L786.43,39.04L786.68,39.08L786.9,39.15L787.06,39.18L787.18,39.19L787.44,39.25L787.65,39.26L787.89,39.29L788.23,39.3L788.53,39.32L788.75,39.38L788.94,39.45L789.1,39.57L789.18,39.64L789.29,39.66L789.46,39.66L789.66,39.73L789.69,39.83L789.75,39.92L789.8,39.98L789.96,40.03L790.07,40.08L790.18,40.13L790.27,40.24L790.42,40.38L790.52,40.44L790.68,40.6L790.84,40.86L790.98,40.96L791.1,41.03L791.14,41.16L791.21,41.25L791.5,41.35L791.62,41.44L791.78,41.54L791.86,41.67L791.99,41.87L792.12,42L792.24,42.1L792.47,42.24L792.59,42.36L792.74,42.41L793.12,42.6L793.42,42.84L793.62,42.97L793.94,43.14L794.1,43.21L794.21,43.28L794.33,43.38L794.41,43.48L794.55,43.57L794.9,43.74L795.19,43.88L795.21,43.96L795.33,43.97L795.44,43.97L795.46,44.07L795.62,44.18L795.69,44.21L795.88,44.14L796.02,44.11L795.96,44.17L795.95,44.25L796.07,44.26L796.25,44.25L796.5,44.21L796.63,44.21L796.79,44.19L797,44.09L797.24,43.92L797.36,43.83L797.41,43.74L797.49,43.63L797.63,43.61L797.63,43.68L797.78,43.6L797.92,43.48L798.04,43.41L798.3,43.15L798.53,42.89L798.68,42.69L798.76,42.48L798.84,42.24L798.88,41.95L798.89,41.61L798.86,41.4L798.81,41.05L798.7,40.68L798.64,40.36L798.56,39.88L798.44,39.43L798.34,39.02L798.28,38.49L798.21,38.23L798.14,37.9L798.08,37.66L798.04,37.37L798.01,36.99L797.9,36.39L797.83,35.96L797.77,35.28L797.7,34.95L797.73,34.6L797.75,34.38L797.72,34.27L797.71,34.16L797.73,33.86L797.73,33.69L797.79,33.23L797.75,32.95L797.73,32.72L797.71,32.54L797.73,32.31L797.68,31.89L797.74,31.57L797.75,31.38L797.82,31.15L797.91,30.35L798.02,29.76L798.12,29.21L798.14,28.99L798.14,28.62L798.15,28.42L798.17,28L798.14,27.84L798.09,27.72L797.96,27.48L797.8,27.05L797.64,26.71L797.41,26.3L797.33,26.14L797.21,25.89L797.09,25.59L796.95,25.16L796.79,24.95L796.71,24.78L796.63,24.54L796.52,24.35L796.47,24.17L796.45,23.98L796.39,23.84L796.32,23.67L796.24,23.34L796.14,22.91L796.08,22.53L796.01,22.11L795.95,21.85L795.91,21.68L795.88,21.26L795.85,21.06L795.8,20.77L795.75,20.58L795.68,20.27L795.62,20.12L795.63,20.03L795.63,19.94L795.57,19.8L795.52,19.68L795.48,19.53L795.47,19.33L795.47,19.2L795.43,19.04L795.39,18.9L795.29,18.77L795.24,18.69L795.21,18.56L795.17,18.43L795.16,18.41L795.15,18.3L795.12,18.16L795.02,17.84L794.96,17.53L794.88,17.2L794.83,17.02L794.79,16.88L794.67,16.43L794.56,16.09L794.53,16.03L794.5,15.97L794.43,15.85L794.41,15.72L794.37,15.49L794.3,15.24L794.23,14.99L794.12,14.54L794.1,14.46L794,14.19L793.91,13.98L793.85,13.78L793.76,13.72L793.74,13.56L793.72,13.43L793.64,13.16L793.49,12.74L793.38,12.41L793.31,12.09L793.25,11.91L793.09,11.45L792.93,11.04L792.8,10.56L792.69,10.07L792.64,9.7L792.57,9.33L792.5,8.98L792.49,8.76L792.49,8.42L792.49,8.06L792.5,7.75L792.5,7.33L792.56,6.75L792.61,6.24L792.72,5.7L792.8,5.41L792.89,5.22L792.93,5.06L793.08,4.71L793.2,4.4L793.27,4.22L793.44,3.9L793.51,3.71L793.59,3.47L793.62,3.28L793.76,2.85L793.83,2.67L793.91,2.61L794.01,2.51L794.04,2.38L794.08,2.31L794.19,2.28L794.22,2.21L794.4,1.71L794.52,1.4L794.6,1.21L794.7,0.97L794.72,0.81L794.79,0.51L794.82,0.37L794.89,0.24L794.92,0.16L794.93,0.01L794.85,0z"
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

// src/Pitcairnislands.tsx
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
var Pitcairnislands = ({
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
      PitcairnislandsSingle,
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
      PitcairnislandsMultiple,
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
var PitcairnislandsSingle = ({
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
var PitcairnislandsMultiple = ({
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
var Pitcairnislands_default = Pitcairnislands;

// src/index.ts
var src_default = Pitcairnislands_default;
