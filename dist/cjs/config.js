"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getConfig = exports.configValue = exports.LIVE_EXAMPLES_ADDON_ID = void 0;
var _managerApi = require("@storybook/manager-api");
var LIVE_EXAMPLES_ADDON_ID = 'storybook-addon-live-examples';
exports.LIVE_EXAMPLES_ADDON_ID = LIVE_EXAMPLES_ADDON_ID;
var getConfig = function getConfig() {
  return _managerApi.addons.getConfig()[LIVE_EXAMPLES_ADDON_ID] || {};
};
exports.getConfig = getConfig;
var configValue = function configValue(key, defaultValue) {
  return getConfig()[key] || defaultValue;
};
exports.configValue = configValue;