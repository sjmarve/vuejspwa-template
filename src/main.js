// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import axios from 'axios';
import VueAxios from 'vue-axios';
import VueAuth from '@websanova/vue-auth';
import NProgress from 'vue-nprogress';
import { sync } from 'vuex-router-sync';
import App from './App';
import router from './router';
import store from './store';
import { TOGGLE_SIDEBAR } from './store/mutation-types';

Vue.router = router;
Vue.use(VueAxios, axios);
Vue.axios.defaults.baseURL = process.env.apiUrl;
Vue.use(VueAuth, {
  auth: {
    request: function (req, token) {
      this.options.http._setHeaders.call(this, req, { Authorization: 'Bearer ' + token })
    },
    response: function (res) {
      // Get Token from response body
      return res.data.access_token
    }
  },
  http: require('@websanova/vue-auth/drivers/http/axios.1.x.js'),
  router: require('@websanova/vue-auth/drivers/router/vue-router.2.x.js'),
  loginData: { url: 'api/auth/login', fetchUser: true },
  fetchData: { url: 'api/auth/user' },
  refreshData: { enabled: false },
  logoutData: { url: 'api/auth/logout', method: 'POST', redirect: '/', makeRequest: true },
  //refreshData: { url: 'api/auth/refresh', method: 'GET', enabled: true, interval: 30 },
});

Vue.use(NProgress);

sync(store, router);

const nprogress = new NProgress({ parent: '.nprogress-container' });

const { state } = store;

router.beforeEach((route, redirect, next) => {
  if (state.app.device.isMobile && state.app.sidebar.opened) {
    store.commit(TOGGLE_SIDEBAR, false);
  }
  next();
});

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  nprogress,
  ...App,
});
