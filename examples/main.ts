import { createApp } from 'vue';
import App from './app.vue';
import yhUI from '@yh-ui/components';
import '../packages/theme-chalk/index.css';

const app = createApp(App);
app.use(yhUI);
app.mount('#app');
