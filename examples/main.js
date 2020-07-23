import Vue from 'vue'
import App from './App.vue'
import '../examples/assets/style/basic.scss'
import LuUI from '../packages'

Vue.use(LuUI);

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
}).$mount('#app');
