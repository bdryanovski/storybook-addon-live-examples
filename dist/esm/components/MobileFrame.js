import _defineProperty from "@babel/runtime/helpers/defineProperty";
import _slicedToArray from "@babel/runtime/helpers/slicedToArray";
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
import React, { useEffect, useState } from 'react';
import { LiveProvider, LivePreview } from 'react-live';
import { detectNoInline } from './utils';
import { getConfig } from '../config';
export var LOADED_MESSAGE = 'STORY LOADED';
export var MobileFrame = function MobileFrame(_ref) {
  var scope = _ref.scope,
    onMessage = _ref.onMessage;
  var config = getConfig();
  var _useState = useState(''),
    _useState2 = _slicedToArray(_useState, 2),
    code = _useState2[0],
    setCode = _useState2[1];
  var _useState3 = useState(''),
    _useState4 = _slicedToArray(_useState3, 2),
    resetKey = _useState4[0],
    setResetKey = _useState4[1];
  useEffect(function () {
    var exampleId = window.frameElement.getAttribute('data-id');
    window.parent.postMessage({
      message: LOADED_MESSAGE,
      exampleId: exampleId
    }, '*');
    var handler = function handler(_ref2) {
      var data = _ref2.data;
      if (onMessage) onMessage(data);
      if (data.code) {
        setCode(data.code);
        setResetKey(data.resetKey);
      }
    };
    window.addEventListener('message', handler);
    var wrapper = document.querySelector('.sbdocs-wrapper');
    if (wrapper) {
      wrapper.style.padding = '20px';
      wrapper.style.overflow = 'auto';
      wrapper.style.background = 'transparent';
      wrapper.classList.add('sb-unstyled');
    }
    return function () {
      window.removeEventListener('message', handler);
    };
  }, []);
  return /*#__PURE__*/React.createElement(LiveProvider, {
    code: code,
    noInline: detectNoInline(code),
    scope: _objectSpread(_objectSpread({}, config.scope), scope)
  }, /*#__PURE__*/React.createElement(LivePreview, null));
};