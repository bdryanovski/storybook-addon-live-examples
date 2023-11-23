"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.decorator = void 0;
var _managerApi = require("@storybook/manager-api");
var _react = _interopRequireDefault(require("react"));
var _components = require("./components");
var _utils = require("./components/utils");
var _config = require("./config");
var decorator = function decorator(storyFn, context) {
  var _docs$source;
  var story = storyFn();
  if (context.viewMode !== 'docs' || context.parameters.defaultCanvas || _managerApi.addons.getConfig()[_config.LIVE_EXAMPLES_ADDON_ID].defaultCanvas) return story;
  var _context$parameters = context.parameters,
    _context$parameters$l = _context$parameters.live,
    live = _context$parameters$l === void 0 ? true : _context$parameters$l,
    _context$parameters$e = _context$parameters.expanded,
    expanded = _context$parameters$e === void 0 ? false : _context$parameters$e,
    docs = _context$parameters.docs,
    scope = _context$parameters.scope;
  var code = docs !== null && docs !== void 0 && (_docs$source = docs.source) !== null && _docs$source !== void 0 && _docs$source.originalSource ? "render(".concat(docs.source.originalSource, ")") : 'No code available';
  return /*#__PURE__*/_react["default"].createElement(_components.CanvasReplacer, {
    id: context.id
  }, /*#__PURE__*/_react["default"].createElement(_components.Example, {
    code: code,
    live: live,
    expanded: expanded,
    scope: scope,
    language: typeof context.parameters.fileName === 'string' ? (0, _utils.extractLanguageFromFilename)(context.parameters.fileName) : undefined
  }));
};
exports.decorator = decorator;
var _default = decorator;
exports["default"] = _default;