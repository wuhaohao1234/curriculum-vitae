import Vue from 'vue';
import App from './App.vue';
import router from './router';

// 引入element-ui组件
import { Button, Select } from 'element-ui';
// 引入lodah
import _ from 'lodash'
// 引入localstorage
import { createLocalStorage } from "localstorage-ponyfill";

Vue.prototype._ = _
Vue.prototype.$createLocalStorage = createLocalStorage

Vue.component(Button.name, Button);
Vue.component(Select.name, Select);

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');
