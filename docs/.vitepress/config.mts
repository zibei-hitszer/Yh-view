import { defineConfig } from 'vitepress';
import { containerPreview, componentPreview } from '@vitepress-demo-preview/plugin';

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'YH-UI',
  description: 'A VitePress Site',
  markdown: {
    config(md) {
      md.use(containerPreview);
      md.use(componentPreview);
    }
  },
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' }
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      },
      {
        text: 'Basic 基础组件',
        items: [{ text: 'Button 按钮', link: '/examples/button' }]
      }
    ],

    socialLinks: [{ icon: 'github', link: 'https://github.com/vuejs/vitepress' }]
  }
});
