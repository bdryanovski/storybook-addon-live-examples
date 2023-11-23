"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ActionButton = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));
var _iconButton = require("@alfalab/core-components/icon-button");
var _toast = require("@alfalab/core-components/toast");
var _theming = require("@storybook/theming");
var _react = _interopRequireWildcard(require("react"));
var _config = require("../config");
var _excluded = ["icon", "onClick", "active", "title", "doneTitle", "toastProps"];
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
var Button = (0, _theming.styled)(_iconButton.IconButton)(function (_ref) {
  var theme = _ref.theme;
  return "\n    &.active {\n        color: ".concat((0, _config.configValue)('iconColor', '#000'), ";\n    }\n");
});
var ActionButton = /*#__PURE__*/(0, _react.forwardRef)(function (_ref2, ref) {
  var icon = _ref2.icon,
    onClick = _ref2.onClick,
    active = _ref2.active,
    title = _ref2.title,
    doneTitle = _ref2.doneTitle,
    toastProps = _ref2.toastProps,
    restProps = (0, _objectWithoutProperties2["default"])(_ref2, _excluded);
  var _useState = (0, _react.useState)(false),
    _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
    open = _useState2[0],
    setOpen = _useState2[1];
  var handleClick = function handleClick() {
    if (doneTitle) setOpen(true);
    onClick();
  };
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, Boolean(doneTitle) && /*#__PURE__*/_react["default"].createElement(_toast.Toast, {
    open: open,
    position: "bottom-end",
    offset: [0, 100],
    badge: null,
    title: doneTitle,
    hasCloser: false,
    block: false,
    onClose: function onClose() {
      return setOpen(false);
    },
    autoCloseDelay: 1500,
    style: {
      left: '50%',
      transform: 'translateX(-50%)'
    }
  }), /*#__PURE__*/_react["default"].createElement(Button, (0, _extends2["default"])({
    type: "button",
    size: "s",
    view: "secondary",
    onClick: handleClick,
    className: active && 'active',
    icon: icon,
    ref: ref,
    title: title
  }, restProps)));
});
exports.ActionButton = ActionButton;