import _slicedToArray from "@babel/runtime/helpers/slicedToArray";
import React, { useLayoutEffect, useState } from 'react';
import ReactDOM from 'react-dom';
var getContainer = function getContainer(id) {
  return document.getElementById("anchor--".concat(id)) || document.getElementById("story--".concat(id));
};
export var CanvasReplacer = function CanvasReplacer(_ref) {
  var children = _ref.children,
    id = _ref.id;
  var _useState = useState(getContainer(id)),
    _useState2 = _slicedToArray(_useState, 2),
    container = _useState2[0],
    setContainer = _useState2[1];
  useLayoutEffect(function () {
    if (!container) {
      setContainer(getContainer(id));
    }
  }, [container]);
  useLayoutEffect(function () {
    if (container) {
      var defaultCanvas = container.querySelector('.sbdocs-preview');
      if (defaultCanvas) {
        defaultCanvas.setAttribute('style', 'display: none');
      }
    }
  }, [container]);
  if (!container) return null;
  return /*#__PURE__*/ReactDOM.createPortal( /*#__PURE__*/React.createElement("div", {
    key: id
  }, children), container);
};