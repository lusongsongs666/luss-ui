/**
 * @author : songsong.lu
 * @date : 2020/03/24
 * @description : 重写loading样式，暴露show/hide方法
 **/
import Vue from 'vue'
import LoadingComponent from './Loading'

const loadingComponent = Vue.extend(LoadingComponent);

let showLoading = () => {
  const defaultOptions = {
    showWrapper: false
  };
  const loadingDom = new loadingComponent({
    el: document.createElement('div'),
    data(){
      return {
        show: false,
        showWrapper: defaultOptions.showWrapper
      }
    }
  });
  let methods = {
    show: (options) => {
      if(options){
        options = Object.assign(defaultOptions,options);
        loadingDom.showWrapper = options.showWrapper;
      }
      const loading = document.querySelector('.lu-loading');
      if(!loading){
        document.body.appendChild(loadingDom.$el);
        setTimeout(()=>{ loadingDom.show = true });
      }
    },
    hide: () => {
      loadingDom.show = false;
      setTimeout(()=>{
        document.body.removeChild(loadingDom.$el)
      },500)
    }
  };
  return methods
};

let registerLoading = (vue) => {
  vue.prototype.$loading = showLoading()
};

export default registerLoading
