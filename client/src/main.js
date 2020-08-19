import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import 'material-design-icons-iconfont/dist/material-design-icons.css'
import router from './router'
import Axios from 'axios'
import VueClipboard from 'vue-clipboard2'
import VueCookies from 'vue-cookies'
import VueCryptojs from 'vue-cryptojs'
import 'material-design-icons-iconfont/dist/material-design-icons.css'

// Copy to clipboard
Vue.use(VueClipboard)

// Cookie handling
Vue.use(VueCookies)
Vue.$cookies.config('7d')

Vue.use(VueCryptojs)

Vue.prototype.$http = Axios
Vue.prototype.$serverURLI = "http://localhost:5000";

Vue.config.productionTip = false

new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')
