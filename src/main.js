import { createApp } from 'vue';
import App from './App.vue';
import VueSplide from '@splidejs/vue-splide';
import axios from 'axios'
import VueAxios from 'vue-axios'

import { Inkline, components } from '@inkline/inkline';
import '@inkline/inkline/inkline.scss';

import "./main.scss";


const app = createApp(App);

app.use(Inkline, {
    components
});
app.provide('axios', app.config.globalProperties.axios)
app.use(VueAxios, axios)
app.use(VueSplide);

app.mount('#app')