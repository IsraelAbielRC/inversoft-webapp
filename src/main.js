import Vue from 'vue'
import App from './App.vue'
import VueSweetalert2 from 'vue-sweetalert2'
import 'sweetalert2/dist/sweetalert2.min.css';
const options = {
  confirmButtonColor: '#41b882',
  cancelButtonColor: '#ff7674',
};
Vue.config.productionTip = false
Vue.use(VueSweetalert2, options);
new Vue({
  render: h => h(App),
}).$mount('#app')
