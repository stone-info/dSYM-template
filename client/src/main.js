import Vue    from 'vue'
import App    from './App.vue'
import router from './router'
import store  from './store'
import axios  from './http'
import qs     from 'qs'
import './assets/styles/global.scss'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.use(ElementUI)

import Mock from 'mockjs'

const Random = Mock.Random
const mock   = Mock.mock

Vue.prototype.$axios  = axios
Vue.prototype.$Random = Random
Vue.prototype.$mock   = mock
Vue.prototype.$qs     = qs

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
