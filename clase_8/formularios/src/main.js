import Vue from 'vue'
import App from './App.vue'
import '@/../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '@/../node_modules/bootstrap/dist/js/bootstrap.min.js'
import '@/../node_modules/bootstrap-icons/font/bootstrap-icons.css';
import VueForm from 'vue-form';
Vue.config.productionTip = false
Vue.use(VueForm);

const vueApp = new Vue({
  render: h => h(App),
})

vueApp.$mount('#app')

