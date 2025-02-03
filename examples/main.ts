import { createApp } from 'vue';
import App from './app.vue';
// import yhUI from '../packages/index';
import yhUI from '../dist/yh-ui.es.js';
// import '../packages/theme-chalk/index.css';

const app = createApp(App);
app.use(yhUI);
app.mount('#app');
