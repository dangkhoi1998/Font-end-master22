import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './plugins'
import Vuetify from 'vuetify/lib'
import vuetify from './plugins/vuetify'
import { sync } from 'vuex-router-sync'
import BootstrapVue from 'bootstrap-vue'
import datetimePicker from '@/views/DatetimePicker'

Vue.use(BootstrapVue)
sync(store, router)
Vue.use(datetimePicker)

Vue.component(datetimePicker.name, datetimePicker)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  Vuetify,
  vuetify,
  render: h => h(App),
}).$mount('#app')
