"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MobileFrame = exports.LOADED_MESSAGE = void 0;
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _react = _interopRequireWildcard(require("react"));
var _reactLive = require("react-live");
var _utils = require("./utils");
var _config = require("../config");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
var LOADED_MESSAGE = 'STORY LOADED';
exports.LOADED_MESSAGE = LOADED_MESSAGE;
var MobileFrame = function MobileFrame(_ref) {
  var scope = _ref.scope,
    onMessage = _ref.onMessage;
  var config = (0, _config.getConfig)();
  var _useState = (0, _react.useState)(''),
    _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
    code = _useState2[0],
    setCode = _useState2[1];
  var _useState3 = (0, _react.useState)(''),
    _useState4 = (0, _slicedToArray2["default"])(_useState3, 2),
    resetKey = _useState4[0],
    setResetKey = _useState4[1];
  (0, _react.useEffect)(function () {
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
  return /*#__PURE__*/_react["default"].createElement(_reactLive.LiveProvider, {
    code: code,
    noInline: (0, _utils.detectNoInline)(code),
    scope: _objectSpread(_objectSpread({}, config.scope), scope)
  }, /*#__PURE__*/_react["default"].createElement(_reactLive.LivePreview, null));
};
exports.MobileFrame = MobileFrame;