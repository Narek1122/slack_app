require('./bootstrap');
import Vue from 'vue';
window.Vue = require('vue');

import App from './components/App.vue';
import VueRouter from 'vue-router';
import VueAxios from 'vue-axios';
import axios from 'axios';
import store from './store';
import { routes } from './routes';
import { getUserToken } from './helpers';

import Vuelidate from 'vuelidate'
Vue.use(Vuelidate)

Vue.use(getUserToken)


Vue.use(VueRouter);
Vue.use(VueAxios, axios);

// Vue.mixin({
//     methods: {
//         globalHelper: function() {
//             alert("Hello world")
//         },
//     },
// })

const router = new VueRouter({
    mode: 'history',
    routes: routes
});

const app = new Vue({
    el: '#app',
    router: router,
    store,
    render: h => h(App),
});