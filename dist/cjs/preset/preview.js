"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _components = require("../components");
var _storyDecorator = _interopRequireDefault(require("../story-decorator"));
var config = {
  parameters: {
    docs: {
      components: {
        pre: _components.CodeAdapter,
        Canvas: _components.CanvasAdapter
      }
    }
  },
  decorators: [_storyDecorator["default"]]
};
var _default = config;
exports["default"] = _default;