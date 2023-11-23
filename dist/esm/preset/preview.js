import { CanvasAdapter, CodeAdapter } from '../components';
import storyDecorator from '../story-decorator';
var config = {
  parameters: {
    docs: {
      components: {
        pre: CodeAdapter,
        Canvas: CanvasAdapter
      }
    }
  },
  decorators: [storyDecorator]
};
export default config;