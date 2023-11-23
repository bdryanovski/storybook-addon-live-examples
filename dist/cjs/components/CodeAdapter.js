"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CodeAdapter = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));
var _react = _interopRequireDefault(require("react"));
var _Example = require("./Example");
var _excluded = ["children"];
var CodeAdapter = function CodeAdapter(_ref) {
  var children = _ref.children,
    restProps = (0, _objectWithoutProperties2["default"])(_ref, _excluded);
  var codeBlockProps = children.props || {};
  return /*#__PURE__*/_react["default"].createElement(_Example.Example, (0, _extends2["default"])({}, restProps, {
    code: codeBlockProps.children,
    className: codeBlockProps.className
  }));
};
exports.CodeAdapter = CodeAdapter;