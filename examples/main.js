import Vue from 'vue'
import App from './App.vue'
import './basic.scss'

import LussUI from '../packages'

/*import 'luss-ui/dist/luss-ui.css'
import LussUI from 'luss-ui'*/

Vue.use(LussUI);

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
}).$mount('#app');
