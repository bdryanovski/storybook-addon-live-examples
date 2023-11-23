"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CanvasReplacer = void 0;
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _react = _interopRequireWildcard(require("react"));
var _reactDom = _interopRequireDefault(require("react-dom"));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
var getContainer = function getContainer(id) {
  return document.getElementById("anchor--".concat(id)) || document.getElementById("story--".concat(id));
};
var CanvasReplacer = function CanvasReplacer(_ref) {
  var children = _ref.children,
    id = _ref.id;
  var _useState = (0, _react.useState)(getContainer(id)),
    _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
    container = _useState2[0],
    setContainer = _useState2[1];
  (0, _react.useLayoutEffect)(function () {
    if (!container) {
      setContainer(getContainer(id));
    }
  }, [container]);
  (0, _react.useLayoutEffect)(function () {
    if (container) {
      var defaultCanvas = container.querySelector('.sbdocs-preview');
      if (defaultCanvas) {
        defaultCanvas.setAttribute('style', 'display: none');
      }
    }
  }, [container]);
  if (!container) return null;
  return /*#__PURE__*/_reactDom["default"].createPortal( /*#__PURE__*/_react["default"].createElement("div", {
    key: id
  }, children), container);
};
exports.CanvasReplacer = CanvasReplacer;