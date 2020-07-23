//包入口
import Button from './button/LuButton'
import Dialog from './dialog/LuDialog'
import MsgBox from './messageBox/Index'
import Toast from './toast/Index'
import './iconfont/iconfont.css'

const methodComponents = [
  MsgBox,
  Toast
];

const elementComponents = [
  Button,
  Dialog
];

const install = function (Vue) {
  //分类注册不同形式的组件
  methodComponents.forEach(item=>{
    Vue.use(item)
  });

  elementComponents.forEach(item=>{
    Vue.component(item.name,item)
  });

  // 判断是否直接引入文件，如果是，就不用调用Vue.use()
  if(typeof window !== "undefined" && window.Vue){
    install(window.Vue)
  }
};

//导出install函数
export default {
  install
}
