"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CanvasAdapter = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));
var _react = _interopRequireDefault(require("react"));
var _Example = require("./Example");
var _excluded = ["mdxSource"];
var CanvasAdapter = function CanvasAdapter(_ref) {
  var mdxSource = _ref.mdxSource,
    restProps = (0, _objectWithoutProperties2["default"])(_ref, _excluded);
  return /*#__PURE__*/_react["default"].createElement(_Example.Example, (0, _extends2["default"])({
    code: decodeURIComponent(mdxSource)
  }, restProps));
};
exports.CanvasAdapter = CanvasAdapter;