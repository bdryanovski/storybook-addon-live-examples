"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.uniqId = void 0;
var uniqId = function () {
  var id = 0;
  return function () {
    id += 1;
    return id;
  };
}();
exports.uniqId = uniqId;