import Vue from 'vue'
import App from './App.vue'
/*import '../examples/assets/style/basic.scss'
import LuUI from '../packages'*/
import 'luss-ui/dist/luss-ui.css'
import LuUI from 'luss-ui'

Vue.use(LuUI);

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
}).$mount('#app');
