"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _exportNames = {
  ADDON_EVENTS: true
};
Object.defineProperty(exports, "ADDON_EVENTS", {
  enumerable: true,
  get: function get() {
    return _events.CUSTOM_EVENTS;
  }
});
var _Example = require("./Example");
Object.keys(_Example).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _Example[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _Example[key];
    }
  });
});
var _CodeAdapter = require("./CodeAdapter");
Object.keys(_CodeAdapter).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _CodeAdapter[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _CodeAdapter[key];
    }
  });
});
var _Canvas = require("./Canvas");
Object.keys(_Canvas).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _Canvas[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _Canvas[key];
    }
  });
});
var _CanvasAdapter = require("./CanvasAdapter");
Object.keys(_CanvasAdapter).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _CanvasAdapter[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _CanvasAdapter[key];
    }
  });
});
var _CanvasReplacer = require("./CanvasReplacer");
Object.keys(_CanvasReplacer).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _CanvasReplacer[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _CanvasReplacer[key];
    }
  });
});
var _MobileFrame = require("./MobileFrame");
Object.keys(_MobileFrame).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _MobileFrame[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _MobileFrame[key];
    }
  });
});
var _events = require("./events");