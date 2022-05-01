import { createApp } from 'vue';
import App from './App.vue';
import VueSplide from '@splidejs/vue-splide';
import { Inkline, components } from '@inkline/inkline';
import '@inkline/inkline/inkline.scss';

import "./main.scss";


const app = createApp(App);

app.use(Inkline, {
    components
});
app.use(VueSplide);

app.mount('#app')