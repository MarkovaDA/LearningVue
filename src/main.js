import Vue from 'vue'
import App from './App.vue'
//https://cli.vuejs.org/guide/ - опции сборки
Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')

