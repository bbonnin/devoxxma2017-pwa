// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import VueResource from 'vue-resource';
import Raphael from 'raphael/raphael';
import jQuery from 'jquery';
import App from './App';
import router from './router';

global.Raphael = Raphael;
global.jQuery = jQuery; // Should be put in webpack config

Vue.use(VueResource);

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App },
});
