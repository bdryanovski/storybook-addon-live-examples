"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CUSTOM_EVENTS = void 0;
exports.dispatchCustomEvent = dispatchCustomEvent;
var CUSTOM_EVENTS = {
  VIEW_CHANGE: 'view-change',
  COPY: 'copy',
  SHOW_SOURCE_CODE: 'show-source-code',
  SHARE: 'share',
  REFRESH: 'refresh'
};
exports.CUSTOM_EVENTS = CUSTOM_EVENTS;
function dispatchCustomEvent(eventName, data) {
  document.dispatchEvent(new CustomEvent(eventName, {
    detail: data,
    bubbles: true
  }));
}