import _slicedToArray from "@babel/runtime/helpers/slicedToArray";
import { useEffect, useState } from 'react';
import prettier from 'prettier/standalone';
import parserBabel from 'prettier/parser-babel';
import { transpileTs } from './utils';
import { dispatchCustomEvent, CUSTOM_EVENTS } from './events';
var CHUNK_SEPARATOR = /^\s*(?:@|\/\/)MOBILE@?/m;
var transpile = function transpile(code) {
  return transpileTs(code).then(function (jsCode) {
    return prettier.format(jsCode, {
      parser: 'babel',
      plugins: [parserBabel]
    });
  });
};
export function useCode(_ref) {
  var initialCode = _ref.initialCode,
    desktopOnly = _ref.desktopOnly,
    mobileOnly = _ref.mobileOnly,
    live = _ref.live,
    language = _ref.language,
    view = _ref.view;
  var _useState = useState(false),
    _useState2 = _slicedToArray(_useState, 2),
    ready = _useState2[0],
    setReady = _useState2[1];
  var needsTranspile = live && ['typescript', 'tsx'].includes(language);
  var _useState3 = useState(+new Date()),
    _useState4 = _slicedToArray(_useState3, 2),
    resetKey = _useState4[0],
    setResetKey = _useState4[1];
  var _useState5 = useState(''),
    _useState6 = _slicedToArray(_useState5, 2),
    commonCode = _useState6[0],
    setCommonCode = _useState6[1];
  var _useState7 = useState(''),
    _useState8 = _slicedToArray(_useState7, 2),
    mobileCode = _useState8[0],
    setMobileCode = _useState8[1];
  var _useState9 = useState(''),
    _useState10 = _slicedToArray(_useState9, 2),
    desktopCode = _useState10[0],
    setDesktopCode = _useState10[1];
  var _useState11 = useState(''),
    _useState12 = _slicedToArray(_useState11, 2),
    desktopInitialCode = _useState12[0],
    setDesktopInitialCode = _useState12[1];
  var _useState13 = useState(''),
    _useState14 = _slicedToArray(_useState13, 2),
    mobileInitialCode = _useState14[0],
    setMobileInitialCode = _useState14[1];
  var useCommonCode = CHUNK_SEPARATOR.exec(initialCode) === null;
  var reset = function reset() {
    setResetKey(+new Date());
    dispatchCustomEvent(CUSTOM_EVENTS.REFRESH);
  };
  var prepareCode = function prepareCode() {
    Promise.all(initialCode.split(CHUNK_SEPARATOR).map(function (s) {
      return s.trim();
    }).map(function (codeChunk) {
      return needsTranspile ? transpile(codeChunk) : codeChunk;
    })).then(function (_ref2) {
      var _ref3 = _slicedToArray(_ref2, 2),
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
  useEffect(function () {
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