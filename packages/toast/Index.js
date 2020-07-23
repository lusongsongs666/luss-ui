import Vue from 'vue';
import toastComponent from './Toast'

const ToastComponent = Vue.extend(toastComponent);

let showToast = (text, duration=2000)=>{
    const toastDom = new ToastComponent({
        el: document.createElement('div'),
        data(){
            return {
                text: text,
                show: false
            }
        }
    });
    document.body.appendChild(toastDom.$el);
    setTimeout(()=>{toastDom.show = true});
    setTimeout(()=>{
      toastDom.show = false;
      setTimeout(()=>{
        document.body.removeChild(toastDom.$el)
      },500)
    },duration)
};

let registryToast = ()=>{
  Vue.prototype.$toast = showToast
};

export default registryToast
