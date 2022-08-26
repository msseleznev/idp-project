import '@/assets/index.scss';
import { createApp } from 'vue';
import components from '@/components/UI/index';
import store from '@/store';
import App from './App.vue';

const app = createApp(App);
components.forEach(component => {
  app.component(component.name, component);
});
app
  .use(store)
  .mount('#app');
