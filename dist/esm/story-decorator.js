import { addons } from '@storybook/manager-api';
import React from 'react';
import { CanvasReplacer, Example } from './components';
import { extractLanguageFromFilename } from './components/utils';
import { LIVE_EXAMPLES_ADDON_ID } from './config';
export var decorator = function decorator(storyFn, context) {
  var _docs$source;
  var story = storyFn();
  if (context.viewMode !== 'docs' || context.parameters.defaultCanvas || addons.getConfig()[LIVE_EXAMPLES_ADDON_ID].defaultCanvas) return story;
  var _context$parameters = context.parameters,
    _context$parameters$l = _context$parameters.live,
    live = _context$parameters$l === void 0 ? true : _context$parameters$l,
    _context$parameters$e = _context$parameters.expanded,
    expanded = _context$parameters$e === void 0 ? false : _context$parameters$e,
    docs = _context$parameters.docs,
    scope = _context$parameters.scope;
  var code = docs !== null && docs !== void 0 && (_docs$source = docs.source) !== null && _docs$source !== void 0 && _docs$source.originalSource ? "render(".concat(docs.source.originalSource, ")") : 'No code available';
  return /*#__PURE__*/React.createElement(CanvasReplacer, {
    id: context.id
  }, /*#__PURE__*/React.createElement(Example, {
    code: code,
    live: live,
    expanded: expanded,
    scope: scope,
    language: typeof context.parameters.fileName === 'string' ? extractLanguageFromFilename(context.parameters.fileName) : undefined
  }));
};
export default decorator;