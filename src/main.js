import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

import ElementUI from 'element-ui'; //引入全局组件对象
import 'element-ui/lib/theme-chalk/index.css'; //引入全局样式
Vue.use(ElementUI);

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
