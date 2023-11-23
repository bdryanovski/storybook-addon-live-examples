"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Example = void 0;
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _react = _interopRequireWildcard(require("react"));
var _reactLive = require("react-live");
var _prismReactRenderer = require("prism-react-renderer");
var _theming = require("@storybook/theming");
var _DisplayMIcon = require("@alfalab/icons-glyph/DisplayMIcon");
var _MobilePhoneLineMIcon = require("@alfalab/icons-glyph/MobilePhoneLineMIcon");
var _CopyLineMIcon = require("@alfalab/icons-glyph/CopyLineMIcon");
var _ShareMIcon = require("@alfalab/icons-glyph/ShareMIcon");
var _RepeatMIcon = require("@alfalab/icons-glyph/RepeatMIcon");
var _utils = require("./utils");
var _ActionButton = require("./ActionButton");
var _ActionBar = require("./ActionBar");
var _MobileFrame = require("./MobileFrame");
var _useCode2 = require("./useCode");
var _ExpandMIcon = _interopRequireDefault(require("./icons/ExpandMIcon"));
var _config = require("../config");
var _events = require("./events");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
var ComponentWrapper = _theming.styled.div(function (_ref) {
  var _theme$typography;
  var theme = _ref.theme;
  return "\n    position: relative;\n    overflow: hidden;\n    border: 1px solid ".concat((0, _config.configValue)('borderColor', theme.appBorderColor), ";\n    margin: 25px 0 40px;\n    border-radius: ").concat((0, _config.configValue)('borderRadius', '16px'), ";\n    font-family: ").concat((0, _config.configValue)('fontBase', (_theme$typography = theme.typography) === null || _theme$typography === void 0 ? void 0 : _theme$typography.fonts.base), ";\n    font-size: ").concat((0, _config.configValue)('fontSizeBase', 16), "px;\n  ");
});
var Wrapper = _theming.styled.div(function () {
  return "\n    position: relative;\n";
});
var PreviewWrapper = _theming.styled.div(function (_ref2) {
  var _theme$background;
  var theme = _ref2.theme;
  return "\n    background-color: ".concat((0, _config.configValue)('bgColor', (_theme$background = theme.background) === null || _theme$background === void 0 ? void 0 : _theme$background.app), ";\n    margin: 0 auto;\n    position: relative;\n");
});
var Preview = (0, _theming.styled)(_reactLive.LivePreview)(function (_ref3) {
  var _theme$background2;
  var theme = _ref3.theme;
  return "\n    padding: 20px;\n    background-color: ".concat((0, _config.configValue)('previewBgColor', (_theme$background2 = theme.background) === null || _theme$background2 === void 0 ? void 0 : _theme$background2.app), ";\n    box-sizing: border-box;\n    overflow: auto;\n");
});
var ViewMismatch = _theming.styled.div(function () {
  return "\n    min-height: 220px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    text-align: center;\n    background-color: ".concat((0, _config.configValue)('viewMismatchBg', 'rgba(255, 255, 255)'), ";\n");
});
var ViewMismatchText = _theming.styled.div(function () {
  return "\n    font-style: normal;\n    font-weight: 400;\n    font-size: 16px;\n    line-height: 24px;\n    text-align: center;\n    width: 300px;\n    color: ".concat((0, _config.configValue)('hintColor', 'rgba(11, 31, 53, 0.3)'), ";\n");
});
var LiveEditorWrapper = _theming.styled.div(function (_ref4) {
  var _theme$typography2;
  var theme = _ref4.theme,
    live = _ref4.live,
    expanded = _ref4.expanded;
  return "\n    font-size: ".concat((0, _config.configValue)('fontSizeCode', 14), "px;\n\n    border-top: ").concat(live && expanded ? "1px solid ".concat((0, _config.configValue)('borderColor', theme.appBorderColor)) : 0, ";\n\n    & > div {\n        font-family: ").concat((0, _config.configValue)('fontCode', (_theme$typography2 = theme.typography) === null || _theme$typography2 === void 0 ? void 0 : _theme$typography2.fonts.mono), " !important;\n        outline: 0;\n    }\n\n    & textarea,\n    & pre {\n        padding: ").concat(live ? '12px' : '24px 40px 24px 24px', " !important;\n        outline-color: transparent;\n    }\n");
});
var StyledLiveErrors = (0, _theming.styled)(_reactLive.LiveError)(function (_ref5) {
  var _theme$typography3;
  var theme = _ref5.theme;
  return "\n    font-family: ".concat((0, _config.configValue)('fontCode', (_theme$typography3 = theme.typography) === null || _theme$typography3 === void 0 ? void 0 : _theme$typography3.fonts.mono), ";\n    padding: 10px;\n    margin: 0;\n    background-color: ").concat((0, _config.configValue)('errorsBg', '#feebea'), ";\n    color: ").concat((0, _config.configValue)('errorsColor', '#ef3124'), " !important;\n    border-top: 1px solid ").concat((0, _config.configValue)('borderColor', theme.appBorderColor), ";\n");
});
var FixedButtonContainer = _theming.styled.div(function () {
  return "\n    position: absolute;\n    right: 8px;\n    top: 8px;\n    z-index: 1;\n";
});
var MobileFrame = _theming.styled.iframe(function (_ref6) {
  var _theme$background3;
  var theme = _ref6.theme;
  return "\n    display: block;\n    border: 0;\n    margin: 0 auto;\n    background-color: ".concat((0, _config.configValue)('previewBgColor', (_theme$background3 = theme.background) === null || _theme$background3 === void 0 ? void 0 : _theme$background3.app), ";\n    border-left: 1px solid ").concat((0, _config.configValue)('borderColor', theme.appBorderColor), ";\n    border-right: 1px solid ").concat((0, _config.configValue)('borderColor', theme.appBorderColor), ";\n");
});
var Example = function Example(_ref7) {
  var codeProp = _ref7.code,
    _ref7$expanded = _ref7.expanded,
    expandedProp = _ref7$expanded === void 0 ? false : _ref7$expanded,
    live = _ref7.live,
    className = _ref7.className,
    _ref7$language = _ref7.language,
    language = _ref7$language === void 0 ? (0, _utils.extractLanguageFromClassName)(className) : _ref7$language,
    scope = _ref7.scope,
    desktopOnly = _ref7.desktopOnly,
    mobileOnly = _ref7.mobileOnly,
    _ref7$mobileWidth = _ref7.mobileWidth,
    mobileWidth = _ref7$mobileWidth === void 0 ? 360 : _ref7$mobileWidth,
    _ref7$mobileHeight = _ref7.mobileHeight,
    mobileHeight = _ref7$mobileHeight === void 0 ? 460 : _ref7$mobileHeight;
  var config = (0, _config.getConfig)();
  var query = '(max-width: 767px)';
  var _useState = (0, _react.useState)(window.parent.matchMedia(query).matches),
    _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
    isMobile = _useState2[0],
    setIsMobile = _useState2[1];
  var sandboxPath = config.sandboxPath,
    mobileFrameName = config.mobileFrameName;
  var _useState3 = (0, _react.useState)(function () {
      if (isMobile || mobileOnly) return 'mobile';
      if (desktopOnly) return 'desktop';
      return isMobile ? 'mobile' : 'desktop';
    }),
    _useState4 = (0, _slicedToArray2["default"])(_useState3, 2),
    view = _useState4[0],
    setView = _useState4[1];
  var _useState5 = (0, _react.useState)(expandedProp || !live),
    _useState6 = (0, _slicedToArray2["default"])(_useState5, 2),
    expanded = _useState6[0],
    setExpanded = _useState6[1];
  var _useState7 = (0, _react.useState)(view === 'mobile'),
    _useState8 = (0, _slicedToArray2["default"])(_useState7, 2),
    mobileFrameAlreadyLoaded = _useState8[0],
    setMobileFrameAlreadyLoaded = _useState8[1];
  var frameRef = (0, _react.useRef)();
  var _useCode = (0, _useCode2.useCode)({
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
  var _useState9 = (0, _react.useState)(false),
    _useState10 = (0, _slicedToArray2["default"])(_useState9, 2),
    storyLoaded = _useState10[0],
    setStoryLoaded = _useState10[1];
  var _useState11 = (0, _react.useState)(false),
    _useState12 = (0, _slicedToArray2["default"])(_useState11, 2),
    iframeLoaded = _useState12[0],
    setIframeLoaded = _useState12[1];
  var exampleId = (0, _react.useMemo)(function () {
    return (0, _utils.uniqId)();
  }, []);
  var allowShare = sandboxPath && live && !scope;
  var handleIframeLoad = function handleIframeLoad() {
    setIframeLoaded(true);
  };
  var handleCopy = function handleCopy(value) {
    (0, _utils.copyToClipboard)(value);
  };
  var handleChange = function handleChange(value) {
    setCode(value.trim());
  };
  var handleViewChange = function handleViewChange(view) {
    return function () {
      setView(view);
      (0, _events.dispatchCustomEvent)(_events.CUSTOM_EVENTS.VIEW_CHANGE, {
        view: view
      });
    };
  };
  (0, _react.useEffect)(function () {
    var handler = function handler(ev) {
      if (ev.data.message === _MobileFrame.LOADED_MESSAGE && ev.data.exampleId === exampleId.toString()) {
        setStoryLoaded(true);
      }
    };
    window.addEventListener('message', handler);
    return function () {
      return window.removeEventListener('message', handler);
    };
  }, []);
  (0, _react.useEffect)(function () {
    if (iframeLoaded && frameRef.current) {
      frameRef.current.contentWindow.postMessage({
        code: code,
        resetKey: resetKey
      });
    }
  }, [iframeLoaded, code, storyLoaded, resetKey]);
  (0, _react.useEffect)(function () {
    if (view === 'mobile') {
      setMobileFrameAlreadyLoaded(true);
    }
  }, [view]);
  (0, _react.useEffect)(function () {
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
  var noDesktopText = typeof mobileOnly === 'string' ? mobileOnly : (0, _config.configValue)('noDesktopText', 'Not for use on desktop devices');
  var noMobileText = typeof desktopOnly === 'string' ? desktopOnly : (0, _config.configValue)('noMobileText', 'Not for use on mobile devices');
  var renderActions = function renderActions() {
    if (!live && isMobile) return null;
    if (live) {
      return /*#__PURE__*/_react["default"].createElement(_ActionBar.ActionBar, {
        "data-role": "action-bar",
        rightAddons: live && /*#__PURE__*/_react["default"].createElement(_ActionButton.ActionButton, {
          icon: _RepeatMIcon.RepeatMIcon,
          onClick: resetCode,
          disabled: viewMismatch,
          title: (0, _config.configValue)('resetText', 'Reset code')
        })
      }, !isMobile && /*#__PURE__*/_react["default"].createElement(_ActionBar.ActionBar.Item, null, /*#__PURE__*/_react["default"].createElement(_ActionButton.ActionButton, {
        icon: _DisplayMIcon.DisplayMIcon,
        active: view === 'desktop',
        onClick: handleViewChange('desktop'),
        title: (0, _config.configValue)('desktopText', 'switch to desktop view')
      }), /*#__PURE__*/_react["default"].createElement(_ActionButton.ActionButton, {
        icon: _MobilePhoneLineMIcon.MobilePhoneLineMIcon,
        active: view === 'mobile',
        onClick: handleViewChange('mobile'),
        title: (0, _config.configValue)('mobileText', 'Switch to mobile view')
      })), /*#__PURE__*/_react["default"].createElement(_ActionBar.ActionBar.Item, {
        right: true
      }, /*#__PURE__*/_react["default"].createElement(_ActionButton.ActionButton, {
        icon: _ExpandMIcon["default"],
        onClick: function onClick() {
          setExpanded(!expanded);
          (0, _events.dispatchCustomEvent)(_events.CUSTOM_EVENTS.SHOW_SOURCE_CODE, {
            shown: !expanded
          });
        },
        title: (0, _config.configValue)('expandText', 'Expand code'),
        active: expanded,
        disabled: viewMismatch
      }), /*#__PURE__*/_react["default"].createElement(_ActionButton.ActionButton, {
        icon: _CopyLineMIcon.CopyLineMIcon,
        onClick: function onClick() {
          handleCopy(code);
          (0, _events.dispatchCustomEvent)(_events.CUSTOM_EVENTS.COPY);
        },
        title: (0, _config.configValue)('copyText', 'Copy code'),
        doneTitle: (0, _config.configValue)('copiedText', 'Code copied'),
        disabled: viewMismatch
      }), allowShare && /*#__PURE__*/_react["default"].createElement(_ActionButton.ActionButton, {
        icon: _ShareMIcon.ShareMIcon,
        onClick: function onClick() {
          handleCopy("".concat(window.parent.location.origin).concat(window.parent.location.pathname, "?path=").concat(sandboxPath, "/code=").concat(encodeURIComponent(code)));
          (0, _events.dispatchCustomEvent)(_events.CUSTOM_EVENTS.SHARE);
        },
        title: (0, _config.configValue)('shareText', 'Share code'),
        doneTitle: (0, _config.configValue)('sharedText', 'Link copied'),
        disabled: viewMismatch
      })));
    }
    return /*#__PURE__*/_react["default"].createElement(FixedButtonContainer, null, /*#__PURE__*/_react["default"].createElement(_ActionButton.ActionButton, {
      icon: _CopyLineMIcon.CopyLineMIcon,
      onClick: function onClick() {
        handleCopy(code);
        (0, _events.dispatchCustomEvent)(_events.CUSTOM_EVENTS.COPY);
      },
      title: (0, _config.configValue)('copyText', 'copy code'),
      doneTitle: (0, _config.configValue)('copiedText', 'Code copied')
    }));
  };
  return /*#__PURE__*/_react["default"].createElement(ComponentWrapper, {
    "data-role": "wrapper",
    className: "sb-unstyled"
  }, /*#__PURE__*/_react["default"].createElement(_reactLive.LiveProvider, {
    code: code || 'render(null)',
    noInline: (0, _utils.detectNoInline)(code),
    theme: config.editorTheme || _prismReactRenderer.themes.github,
    scope: _objectSpread(_objectSpread({}, config.scope), scope)
  }, /*#__PURE__*/_react["default"].createElement(Wrapper, {
    "data-role": "code-wrapper"
  }, renderActions(), live && /*#__PURE__*/_react["default"].createElement(PreviewWrapper, {
    className: view,
    "data-role": "preview-wrapper"
  }, !viewMismatch && !noDesktop && (view === 'desktop' || isMobile) && /*#__PURE__*/_react["default"].createElement(Preview, {
    "data-role": "preview"
  }), !noMobile && shouldRenderMobileFrame && /*#__PURE__*/_react["default"].createElement(MobileFrame, {
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
  }), viewMismatch && /*#__PURE__*/_react["default"].createElement(ViewMismatch, null, /*#__PURE__*/_react["default"].createElement(ViewMismatchText, null, view === 'desktop' && noDesktopText, view === 'mobile' && noMobileText)))), showEditor && /*#__PURE__*/_react["default"].createElement(LiveEditorWrapper, {
    live: live,
    expanded: true
  }, /*#__PURE__*/_react["default"].createElement(_reactLive.LiveEditor, {
    onChange: handleChange,
    language: language,
    disabled: !live,
    key: "".concat(view, "_").concat(resetKey),
    "data-role": "editor"
  })), showErrors && /*#__PURE__*/_react["default"].createElement(StyledLiveErrors, {
    "data-role": "errors"
  })));
};
exports.Example = Example;