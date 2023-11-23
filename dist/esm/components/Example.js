import _defineProperty from "@babel/runtime/helpers/defineProperty";
import _slicedToArray from "@babel/runtime/helpers/slicedToArray";
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
import React, { useState, useEffect, useRef, useMemo } from 'react';
import { LiveProvider, LiveEditor, LivePreview, LiveError } from 'react-live';
import { themes } from 'prism-react-renderer';
import { styled } from '@storybook/theming';
import { DisplayMIcon } from '@alfalab/icons-glyph/DisplayMIcon';
import { MobilePhoneLineMIcon } from '@alfalab/icons-glyph/MobilePhoneLineMIcon';
import { CopyLineMIcon } from '@alfalab/icons-glyph/CopyLineMIcon';
import { ShareMIcon } from '@alfalab/icons-glyph/ShareMIcon';
import { RepeatMIcon } from '@alfalab/icons-glyph/RepeatMIcon';
import { extractLanguageFromClassName, detectNoInline, copyToClipboard, uniqId } from './utils';
import { ActionButton } from './ActionButton';
import { ActionBar } from './ActionBar';
import { LOADED_MESSAGE } from './MobileFrame';
import { useCode } from './useCode';
import ExpandMIcon from './icons/ExpandMIcon';
import { configValue, getConfig } from '../config';
import { CUSTOM_EVENTS, dispatchCustomEvent } from './events';
var ComponentWrapper = styled.div(function (_ref) {
  var _theme$typography;
  var theme = _ref.theme;
  return "\n    position: relative;\n    overflow: hidden;\n    border: 1px solid ".concat(configValue('borderColor', theme.appBorderColor), ";\n    margin: 25px 0 40px;\n    border-radius: ").concat(configValue('borderRadius', '16px'), ";\n    font-family: ").concat(configValue('fontBase', (_theme$typography = theme.typography) === null || _theme$typography === void 0 ? void 0 : _theme$typography.fonts.base), ";\n    font-size: ").concat(configValue('fontSizeBase', 16), "px;\n  ");
});
var Wrapper = styled.div(function () {
  return "\n    position: relative;\n";
});
var PreviewWrapper = styled.div(function (_ref2) {
  var _theme$background;
  var theme = _ref2.theme;
  return "\n    background-color: ".concat(configValue('bgColor', (_theme$background = theme.background) === null || _theme$background === void 0 ? void 0 : _theme$background.app), ";\n    margin: 0 auto;\n    position: relative;\n");
});
var Preview = styled(LivePreview)(function (_ref3) {
  var _theme$background2;
  var theme = _ref3.theme;
  return "\n    padding: 20px;\n    background-color: ".concat(configValue('previewBgColor', (_theme$background2 = theme.background) === null || _theme$background2 === void 0 ? void 0 : _theme$background2.app), ";\n    box-sizing: border-box;\n    overflow: auto;\n");
});
var ViewMismatch = styled.div(function () {
  return "\n    min-height: 220px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    text-align: center;\n    background-color: ".concat(configValue('viewMismatchBg', 'rgba(255, 255, 255)'), ";\n");
});
var ViewMismatchText = styled.div(function () {
  return "\n    font-style: normal;\n    font-weight: 400;\n    font-size: 16px;\n    line-height: 24px;\n    text-align: center;\n    width: 300px;\n    color: ".concat(configValue('hintColor', 'rgba(11, 31, 53, 0.3)'), ";\n");
});
var LiveEditorWrapper = styled.div(function (_ref4) {
  var _theme$typography2;
  var theme = _ref4.theme,
    live = _ref4.live,
    expanded = _ref4.expanded;
  return "\n    font-size: ".concat(configValue('fontSizeCode', 14), "px;\n\n    border-top: ").concat(live && expanded ? "1px solid ".concat(configValue('borderColor', theme.appBorderColor)) : 0, ";\n\n    & > div {\n        font-family: ").concat(configValue('fontCode', (_theme$typography2 = theme.typography) === null || _theme$typography2 === void 0 ? void 0 : _theme$typography2.fonts.mono), " !important;\n        outline: 0;\n    }\n\n    & textarea,\n    & pre {\n        padding: ").concat(live ? '12px' : '24px 40px 24px 24px', " !important;\n        outline-color: transparent;\n    }\n");
});
var StyledLiveErrors = styled(LiveError)(function (_ref5) {
  var _theme$typography3;
  var theme = _ref5.theme;
  return "\n    font-family: ".concat(configValue('fontCode', (_theme$typography3 = theme.typography) === null || _theme$typography3 === void 0 ? void 0 : _theme$typography3.fonts.mono), ";\n    padding: 10px;\n    margin: 0;\n    background-color: ").concat(configValue('errorsBg', '#feebea'), ";\n    color: ").concat(configValue('errorsColor', '#ef3124'), " !important;\n    border-top: 1px solid ").concat(configValue('borderColor', theme.appBorderColor), ";\n");
});
var FixedButtonContainer = styled.div(function () {
  return "\n    position: absolute;\n    right: 8px;\n    top: 8px;\n    z-index: 1;\n";
});
var MobileFrame = styled.iframe(function (_ref6) {
  var _theme$background3;
  var theme = _ref6.theme;
  return "\n    display: block;\n    border: 0;\n    margin: 0 auto;\n    background-color: ".concat(configValue('previewBgColor', (_theme$background3 = theme.background) === null || _theme$background3 === void 0 ? void 0 : _theme$background3.app), ";\n    border-left: 1px solid ").concat(configValue('borderColor', theme.appBorderColor), ";\n    border-right: 1px solid ").concat(configValue('borderColor', theme.appBorderColor), ";\n");
});
export var Example = function Example(_ref7) {
  var codeProp = _ref7.code,
    _ref7$expanded = _ref7.expanded,
    expandedProp = _ref7$expanded === void 0 ? false : _ref7$expanded,
    live = _ref7.live,
    className = _ref7.className,
    _ref7$language = _ref7.language,
    language = _ref7$language === void 0 ? extractLanguageFromClassName(className) : _ref7$language,
    scope = _ref7.scope,
    desktopOnly = _ref7.desktopOnly,
    mobileOnly = _ref7.mobileOnly,
    _ref7$mobileWidth = _ref7.mobileWidth,
    mobileWidth = _ref7$mobileWidth === void 0 ? 360 : _ref7$mobileWidth,
    _ref7$mobileHeight = _ref7.mobileHeight,
    mobileHeight = _ref7$mobileHeight === void 0 ? 460 : _ref7$mobileHeight;
  var config = getConfig();
  var query = '(max-width: 767px)';
  var _useState = useState(window.parent.matchMedia(query).matches),
    _useState2 = _slicedToArray(_useState, 2),
    isMobile = _useState2[0],
    setIsMobile = _useState2[1];
  var sandboxPath = config.sandboxPath,
    mobileFrameName = config.mobileFrameName;
  var _useState3 = useState(function () {
      if (isMobile || mobileOnly) return 'mobile';
      if (desktopOnly) return 'desktop';
      return isMobile ? 'mobile' : 'desktop';
    }),
    _useState4 = _slicedToArray(_useState3, 2),
    view = _useState4[0],
    setView = _useState4[1];
  var _useState5 = useState(expandedProp || !live),
    _useState6 = _slicedToArray(_useState5, 2),
    expanded = _useState6[0],
    setExpanded = _useState6[1];
  var _useState7 = useState(view === 'mobile'),
    _useState8 = _slicedToArray(_useState7, 2),
    mobileFrameAlreadyLoaded = _useState8[0],
    setMobileFrameAlreadyLoaded = _useState8[1];
  var frameRef = useRef();
  var _useCode = useCode({
      initialCode: codeProp,
      desktopOnly: desktopOnly,
      mobileOnly: mobileOnly,
      live: live,
      language: language,
      view: view
    }),
    code = _useCode.code,
    setCode = _useCode.setCode,
    resetCode = _useCode.resetCode,
    resetKey = _useCode.resetKey,
    ready = _useCode.ready;
  var _useState9 = useState(false),
    _useState10 = _slicedToArray(_useState9, 2),
    storyLoaded = _useState10[0],
    setStoryLoaded = _useState10[1];
  var _useState11 = useState(false),
    _useState12 = _slicedToArray(_useState11, 2),
    iframeLoaded = _useState12[0],
    setIframeLoaded = _useState12[1];
  var exampleId = useMemo(function () {
    return uniqId();
  }, []);
  var allowShare = sandboxPath && live && !scope;
  var handleIframeLoad = function handleIframeLoad() {
    setIframeLoaded(true);
  };
  var handleCopy = function handleCopy(value) {
    copyToClipboard(value);
  };
  var handleChange = function handleChange(value) {
    setCode(value.trim());
  };
  var handleViewChange = function handleViewChange(view) {
    return function () {
      setView(view);
      dispatchCustomEvent(CUSTOM_EVENTS.VIEW_CHANGE, {
        view: view
      });
    };
  };
  useEffect(function () {
    var handler = function handler(ev) {
      if (ev.data.message === LOADED_MESSAGE && ev.data.exampleId === exampleId.toString()) {
        setStoryLoaded(true);
      }
    };
    window.addEventListener('message', handler);
    return function () {
      return window.removeEventListener('message', handler);
    };
  }, []);
  useEffect(function () {
    if (iframeLoaded && frameRef.current) {
      frameRef.current.contentWindow.postMessage({
        code: code,
        resetKey: resetKey
      });
    }
  }, [iframeLoaded, code, storyLoaded, resetKey]);
  useEffect(function () {
    if (view === 'mobile') {
      setMobileFrameAlreadyLoaded(true);
    }
  }, [view]);
  useEffect(function () {
    var mql = window.parent.matchMedia(query);
    var handleMatchChange = function handleMatchChange() {
      return setIsMobile(mql.matches);
    };
    mql.addEventListener('change', handleMatchChange);
    handleMatchChange();
    return function () {
      mql.removeEventListener('change', handleMatchChange);
    };
  }, [query]);
  if (!ready) return null;
  var noDesktop = Boolean(view === 'desktop' && mobileOnly);
  var noMobile = Boolean(view === 'mobile' && desktopOnly);
  var viewMismatch = noMobile || noDesktop;
  var showEditor = ready && expanded && !viewMismatch;
  var showErrors = ready && live && !viewMismatch;
  var shouldRenderMobileFrame = !isMobile && (view === 'mobile' || mobileFrameAlreadyLoaded);
  var noDesktopText = typeof mobileOnly === 'string' ? mobileOnly : configValue('noDesktopText', 'Not for use on desktop devices');
  var noMobileText = typeof desktopOnly === 'string' ? desktopOnly : configValue('noMobileText', 'Not for use on mobile devices');
  var renderActions = function renderActions() {
    if (!live && isMobile) return null;
    if (live) {
      return /*#__PURE__*/React.createElement(ActionBar, {
        "data-role": "action-bar",
        rightAddons: live && /*#__PURE__*/React.createElement(ActionButton, {
          icon: RepeatMIcon,
          onClick: resetCode,
          disabled: viewMismatch,
          title: configValue('resetText', 'Reset code')
        })
      }, !isMobile && /*#__PURE__*/React.createElement(ActionBar.Item, null, /*#__PURE__*/React.createElement(ActionButton, {
        icon: DisplayMIcon,
        active: view === 'desktop',
        onClick: handleViewChange('desktop'),
        title: configValue('desktopText', 'switch to desktop view')
      }), /*#__PURE__*/React.createElement(ActionButton, {
        icon: MobilePhoneLineMIcon,
        active: view === 'mobile',
        onClick: handleViewChange('mobile'),
        title: configValue('mobileText', 'Switch to mobile view')
      })), /*#__PURE__*/React.createElement(ActionBar.Item, {
        right: true
      }, /*#__PURE__*/React.createElement(ActionButton, {
        icon: ExpandMIcon,
        onClick: function onClick() {
          setExpanded(!expanded);
          dispatchCustomEvent(CUSTOM_EVENTS.SHOW_SOURCE_CODE, {
            shown: !expanded
          });
        },
        title: configValue('expandText', 'Expand code'),
        active: expanded,
        disabled: viewMismatch
      }), /*#__PURE__*/React.createElement(ActionButton, {
        icon: CopyLineMIcon,
        onClick: function onClick() {
          handleCopy(code);
          dispatchCustomEvent(CUSTOM_EVENTS.COPY);
        },
        title: configValue('copyText', 'Copy code'),
        doneTitle: configValue('copiedText', 'Code copied'),
        disabled: viewMismatch
      }), allowShare && /*#__PURE__*/React.createElement(ActionButton, {
        icon: ShareMIcon,
        onClick: function onClick() {
          handleCopy("".concat(window.parent.location.origin).concat(window.parent.location.pathname, "?path=").concat(sandboxPath, "/code=").concat(encodeURIComponent(code)));
          dispatchCustomEvent(CUSTOM_EVENTS.SHARE);
        },
        title: configValue('shareText', 'Share code'),
        doneTitle: configValue('sharedText', 'Link copied'),
        disabled: viewMismatch
      })));
    }
    return /*#__PURE__*/React.createElement(FixedButtonContainer, null, /*#__PURE__*/React.createElement(ActionButton, {
      icon: CopyLineMIcon,
      onClick: function onClick() {
        handleCopy(code);
        dispatchCustomEvent(CUSTOM_EVENTS.COPY);
      },
      title: configValue('copyText', 'copy code'),
      doneTitle: configValue('copiedText', 'Code copied')
    }));
  };
  return /*#__PURE__*/React.createElement(ComponentWrapper, {
    "data-role": "wrapper",
    className: "sb-unstyled"
  }, /*#__PURE__*/React.createElement(LiveProvider, {
    code: code || 'render(null)',
    noInline: detectNoInline(code),
    theme: config.editorTheme || themes.github,
    scope: _objectSpread(_objectSpread({}, config.scope), scope)
  }, /*#__PURE__*/React.createElement(Wrapper, {
    "data-role": "code-wrapper"
  }, renderActions(), live && /*#__PURE__*/React.createElement(PreviewWrapper, {
    className: view,
    "data-role": "preview-wrapper"
  }, !viewMismatch && !noDesktop && (view === 'desktop' || isMobile) && /*#__PURE__*/React.createElement(Preview, {
    "data-role": "preview"
  }), !noMobile && shouldRenderMobileFrame && /*#__PURE__*/React.createElement(MobileFrame, {
    "data-role": "mobile-frame",
    src: "iframe.html?id=".concat(mobileFrameName, "&viewMode=story"),
    ref: frameRef,
    "data-id": exampleId,
    onLoad: handleIframeLoad,
    style: {
      width: mobileWidth ? +mobileWidth : undefined,
      height: mobileHeight ? +mobileHeight : undefined,
      display: view === 'mobile' ? 'block' : 'none'
    }
  }), viewMismatch && /*#__PURE__*/React.createElement(ViewMismatch, null, /*#__PURE__*/React.createElement(ViewMismatchText, null, view === 'desktop' && noDesktopText, view === 'mobile' && noMobileText)))), showEditor && /*#__PURE__*/React.createElement(LiveEditorWrapper, {
    live: live,
    expanded: true
  }, /*#__PURE__*/React.createElement(LiveEditor, {
    onChange: handleChange,
    language: language,
    disabled: !live,
    key: "".concat(view, "_").concat(resetKey),
    "data-role": "editor"
  })), showErrors && /*#__PURE__*/React.createElement(StyledLiveErrors, {
    "data-role": "errors"
  })));
};