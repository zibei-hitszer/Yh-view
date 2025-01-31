import DefaultTheme from 'vitepress/theme';
import '../../../packages/theme-chalk/index.css';
import { ElementPlusContainer } from '@vitepress-demo-preview/component';

import '@vitepress-demo-preview/component/dist/style.css';
import './custom.css';

export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    app.component('demo-preview', ElementPlusContainer);
  }
};
