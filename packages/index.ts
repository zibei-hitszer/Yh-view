// packages/index.ts
// 统一导出组件、样式、工具
export * from './components';
import YHUI from './components';
export default YHUI;
export * from './utils';
import './theme-chalk/index.css'; // 导入所有样式
