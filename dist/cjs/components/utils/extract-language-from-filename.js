"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.extractLanguageFromFilename = void 0;
var extractLanguageFromFilename = function extractLanguageFromFilename() {
  var filename = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  return filename.split('.').slice(-1)[0];
};
exports.extractLanguageFromFilename = extractLanguageFromFilename;