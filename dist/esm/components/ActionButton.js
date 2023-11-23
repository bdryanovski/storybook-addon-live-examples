import _extends from "@babel/runtime/helpers/extends";
import _slicedToArray from "@babel/runtime/helpers/slicedToArray";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
var _excluded = ["icon", "onClick", "active", "title", "doneTitle", "toastProps"];
import { IconButton } from '@alfalab/core-components/icon-button';
import { Toast } from '@alfalab/core-components/toast';
import { styled } from '@storybook/theming';
import React, { forwardRef, useState } from 'react';
import { configValue } from '../config';
var Button = styled(IconButton)(function (_ref) {
  var theme = _ref.theme;
  return "\n    &.active {\n        color: ".concat(configValue('iconColor', '#000'), ";\n    }\n");
});
export var ActionButton = /*#__PURE__*/forwardRef(function (_ref2, ref) {
  var icon = _ref2.icon,
    onClick = _ref2.onClick,
    active = _ref2.active,
    title = _ref2.title,
    doneTitle = _ref2.doneTitle,
    toastProps = _ref2.toastProps,
    restProps = _objectWithoutProperties(_ref2, _excluded);
  var _useState = useState(false),
    _useState2 = _slicedToArray(_useState, 2),
    open = _useState2[0],
    setOpen = _useState2[1];
  var handleClick = function handleClick() {
    if (doneTitle) setOpen(true);
    onClick();
  };
  return /*#__PURE__*/React.createElement(React.Fragment, null, Boolean(doneTitle) && /*#__PURE__*/React.createElement(Toast, {
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
  }), /*#__PURE__*/React.createElement(Button, _extends({
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