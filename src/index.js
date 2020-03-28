// import 'core-js/stable'
// import 'regenerator-runtime/runtime'

import Vue from 'vue'
import App from './app/index.vue'

new Vue({
  render: (createElem) => createElem(App)
}).$mount('#app')
