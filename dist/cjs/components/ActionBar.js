"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Item = exports.ActionBarComponent = exports.ActionBar = void 0;
var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));
var _theming = require("@storybook/theming");
var _react = _interopRequireDefault(require("react"));
var _config = require("../config");
var _templateObject;
var ItemWrapper = _theming.styled.div(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n\n    ", "\n"])), function (props) {
  return props.right && "margin-left: auto;";
});
var Item = function Item(_ref) {
  var children = _ref.children,
    right = _ref.right;
  return /*#__PURE__*/_react["default"].createElement(ItemWrapper, {
    right: right
  }, children);
};
exports.Item = Item;
var Wrapper = _theming.styled.div(function (_ref2) {
  var _theme$background;
  var theme = _ref2.theme;
  return "\n        display: flex;\n        justify-content: flex-start;\n        align-items: center;\n        background-color: ".concat((0, _config.configValue)('previewBgColor', (_theme$background = theme.background) === null || _theme$background === void 0 ? void 0 : _theme$background.app), ";\n        border-bottom: 1px solid ").concat((0, _config.configValue)('borderColor', theme.appBorderColor), ";\n    ");
});
var RightAddons = _theming.styled.div(function (_ref3) {
  var theme = _ref3.theme;
  return "\n        position: relative;\n\n        &::before {\n            content: '';\n            display: block;\n            transform: translateY(-50%);\n            top: 50%;\n            left: 0;\n            height: 24px;\n            width: 1px;\n            background: ".concat((0, _config.configValue)('borderColor', theme.appBorderColor), ";\n            position: absolute;\n        }\n    ");
});
var ActionBarComponent = function ActionBarComponent(_ref4) {
  var rightAddons = _ref4.rightAddons,
    children = _ref4.children;
  return /*#__PURE__*/_react["default"].createElement(Wrapper, null, children, rightAddons && /*#__PURE__*/_react["default"].createElement(RightAddons, null, rightAddons));
};
exports.ActionBarComponent = ActionBarComponent;
var ActionBar = Object.assign(ActionBarComponent, {
  Item: Item
});
exports.ActionBar = ActionBar;