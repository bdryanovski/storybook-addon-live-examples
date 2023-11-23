"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.copyToClipboard = void 0;
var copyToClipboard = function copyToClipboard(text) {
  if (navigator && navigator.clipboard) {
    return navigator.clipboard.writeText(text);
  }
  var tmp = document.createElement('textarea');
  var focus = document.activeElement;
  tmp.value = text;
  document.body.appendChild(tmp);
  tmp.select();
  document.execCommand('copy');
  document.body.removeChild(tmp);
  if (focus) {
    focus.focus();
  }
};
exports.copyToClipboard = copyToClipboard;