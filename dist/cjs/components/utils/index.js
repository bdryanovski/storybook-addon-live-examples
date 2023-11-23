"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _copyToClipboard = require("./copy-to-clipboard");
Object.keys(_copyToClipboard).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _copyToClipboard[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _copyToClipboard[key];
    }
  });
});
var _detectNoInline = require("./detect-no-inline");
Object.keys(_detectNoInline).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _detectNoInline[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _detectNoInline[key];
    }
  });
});
var _extractLanguageFromClassName = require("./extract-language-from-class-name");
Object.keys(_extractLanguageFromClassName).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _extractLanguageFromClassName[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _extractLanguageFromClassName[key];
    }
  });
});
var _extractLanguageFromFilename = require("./extract-language-from-filename");
Object.keys(_extractLanguageFromFilename).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _extractLanguageFromFilename[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _extractLanguageFromFilename[key];
    }
  });
});
var _transpileTs = require("./transpile-ts");
Object.keys(_transpileTs).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _transpileTs[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _transpileTs[key];
    }
  });
});
var _uniqId = require("./uniqId");
Object.keys(_uniqId).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _uniqId[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _uniqId[key];
    }
  });
});