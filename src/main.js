import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import myComps from './components/index'
import { Button } from 'element-ui';
// import 'element-ui/lib/theme-chalk/index.css';
Vue.config.productionTip = false
Vue.use(myComps)
Vue.use(Button)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
