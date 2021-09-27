// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';

import 'vuetify/dist/vuetify.min.css';
import 'font-awesome/css/font-awesome.css';

import Vuetify from 'vuetify';

import 'material-design-icons-iconfont/dist/material-design-icons.css';
import './styles/global.css';

import axios from 'axios'
import VueAxios from 'vue-axios'
Vue.use(VueAxios, axios);

import VueChartkick from 'vue-chartkick';
import Chart from 'chart.js';
import { setupComponents } from './config/setup-components';

import swatches from 'vue-swatches';
import "vue-swatches/dist/vue-swatches.min.css"

import JsonViewer from 'vue-json-viewer'
Vue.use(JsonViewer);

import moment from 'moment';
Vue.use(moment);

Vue.use(VueChartkick, { adapter: Chart });
Vue.component('swatches', swatches);

setupComponents(Vue);

Vue.use(Vuetify);

Vue.config.productionTip = false

import Vuex from 'vuex'
import VueRouter from 'vue-router'
import common from './assets/js/common'

Vue.use(Vuex);
Vue.use(VueRouter);
Vue.use(common);

import vueMoment from 'vue-moment'

Vue.use(vueMoment);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  data: {
    themeColor: '#1D2939',
    userEmail: 'admin@yopmail.com',
    userPassword: '123456',
    // endpoint: "https://birdbox.cloudnativelab.tech/",
    endpoint: "https://birdbox.opsinno.cloud/",
    // endpoint: "http://localhost:8080/",
    endpoint_introduction: "https://birdbox.opsinno.cloud/util/taogi/",
    endpoint_kaci: "https://backend.kaci.opsinno.cloud/"
    // endpoint: "http://localhost:28000/",
  }
})
