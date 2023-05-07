import { createApp } from 'vue';
import { createPinia } from 'pinia';
import App from './App.vue';
import '@unocss/reset/tailwind.css';
import 'uno.css';
import 'virtual:unocss-devtools';
// import './assets/main.css'
const app = createApp(App);
app.use(createPinia());
app.mount('#app');
