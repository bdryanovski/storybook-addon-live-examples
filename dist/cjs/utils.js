"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.patchWebpackConfig = patchWebpackConfig;
var _remarkMdxCodeMeta = _interopRequireDefault(require("remark-mdx-code-meta"));
function patchWebpackConfig(config) {
  var mdxExt = '.mdx';
  var mdx2Loader = '@storybook/mdx2-csf';
  var mdxRules = config.module.rules.filter(function (rule) {
    var _rule$test;
    return (_rule$test = rule.test) === null || _rule$test === void 0 ? void 0 : _rule$test.toString().includes(mdxExt);
  });
  mdxRules.forEach(function (rule) {
    var _rule$use, _rule$use$;
    if ((_rule$use = rule.use) !== null && _rule$use !== void 0 && (_rule$use$ = _rule$use[0]) !== null && _rule$use$ !== void 0 && _rule$use$.loader.includes(mdx2Loader)) {
      rule.use[0].options.mdxCompileOptions.remarkPlugins.push(_remarkMdxCodeMeta["default"]);
    }
  });
  return config;
}