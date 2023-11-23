"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.detectNoInline = detectNoInline;
function detectNoInline(code) {
  var clearedCode = code.split('\n').filter(function (line) {
    return line.startsWith('//') === false;
  }).join('\n').trim();
  return clearedCode.startsWith('<') === false && clearedCode.startsWith('//') === false;
}