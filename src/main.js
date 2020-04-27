import Vue from 'vue'
import './plugins/axios'
import App from './App.vue'
import router from './router'
// import store from './store'
import 'element-ui/lib/theme-chalk/reset.css'
import './plugins/element.js'
import store from './vuex'
import echarts from "echarts"
import VueKinesis from 'vue-kinesis'

Vue.use(VueKinesis)

Vue.prototype.$echarts = echarts;

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
