"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useCode = useCode;
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _react = require("react");
var _standalone = _interopRequireDefault(require("prettier/standalone"));
var _parserBabel = _interopRequireDefault(require("prettier/parser-babel"));
var _utils = require("./utils");
var _events = require("./events");
var CHUNK_SEPARATOR = /^\s*(?:@|\/\/)MOBILE@?/m;
var transpile = function transpile(code) {
  return (0, _utils.transpileTs)(code).then(function (jsCode) {
    return _standalone["default"].format(jsCode, {
      parser: 'babel',
      plugins: [_parserBabel["default"]]
    });
  });
};
function useCode(_ref) {
  var initialCode = _ref.initialCode,
    desktopOnly = _ref.desktopOnly,
    mobileOnly = _ref.mobileOnly,
    live = _ref.live,
    language = _ref.language,
    view = _ref.view;
  var _useState = (0, _react.useState)(false),
    _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
    ready = _useState2[0],
    setReady = _useState2[1];
  var needsTranspile = live && ['typescript', 'tsx'].includes(language);
  var _useState3 = (0, _react.useState)(+new Date()),
    _useState4 = (0, _slicedToArray2["default"])(_useState3, 2),
    resetKey = _useState4[0],
    setResetKey = _useState4[1];
  var _useState5 = (0, _react.useState)(''),
    _useState6 = (0, _slicedToArray2["default"])(_useState5, 2),
    commonCode = _useState6[0],
    setCommonCode = _useState6[1];
  var _useState7 = (0, _react.useState)(''),
    _useState8 = (0, _slicedToArray2["default"])(_useState7, 2),
    mobileCode = _useState8[0],
    setMobileCode = _useState8[1];
  var _useState9 = (0, _react.useState)(''),
    _useState10 = (0, _slicedToArray2["default"])(_useState9, 2),
    desktopCode = _useState10[0],
    setDesktopCode = _useState10[1];
  var _useState11 = (0, _react.useState)(''),
    _useState12 = (0, _slicedToArray2["default"])(_useState11, 2),
    desktopInitialCode = _useState12[0],
    setDesktopInitialCode = _useState12[1];
  var _useState13 = (0, _react.useState)(''),
    _useState14 = (0, _slicedToArray2["default"])(_useState13, 2),
    mobileInitialCode = _useState14[0],
    setMobileInitialCode = _useState14[1];
  var useCommonCode = CHUNK_SEPARATOR.exec(initialCode) === null;
  var reset = function reset() {
    setResetKey(+new Date());
    (0, _events.dispatchCustomEvent)(_events.CUSTOM_EVENTS.REFRESH);
  };
  var prepareCode = function prepareCode() {
    Promise.all(initialCode.split(CHUNK_SEPARATOR).map(function (s) {
      return s.trim();
    }).map(function (codeChunk) {
      return needsTranspile ? transpile(codeChunk) : codeChunk;
    })).then(function (_ref2) {
      var _ref3 = (0, _slicedToArray2["default"])(_ref2, 2),
        _ref3$ = _ref3[0],
        desktop = _ref3$ === void 0 ? '' : _ref3$,
        _ref3$2 = _ref3[1],
        mobile = _ref3$2 === void 0 ? '' : _ref3$2;
      setCommonCode(desktop);
      if (!useCommonCode) {
        setDesktopCode(desktop);
        setMobileCode(mobile);
        setDesktopInitialCode(desktop);
        setMobileInitialCode(mobile);
      }
      setReady(true);
    });
  };
  (0, _react.useEffect)(function () {
    prepareCode();
  }, []);
  var code = commonCode;
  var setCode = setCommonCode;
  var resetCode = function resetCode() {
    reset();
    setCommonCode(initialCode);
  };
  if (!useCommonCode) {
    if (view === 'desktop') {
      code = mobileOnly ? '' : desktopCode;
      setCode = setDesktopCode;
      resetCode = function resetCode() {
        reset();
        setDesktopCode(desktopInitialCode);
      };
    }
    if (view === 'mobile') {
      code = desktopOnly ? '' : mobileCode;
      setCode = setMobileCode;
      resetCode = function resetCode() {
        reset();
        setMobileCode(mobileInitialCode);
      };
    }
  }
  return {
    code: code,
    setCode: setCode,
    resetCode: resetCode,
    resetKey: resetKey,
    ready: ready
  };
}