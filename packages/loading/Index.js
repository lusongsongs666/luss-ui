/**
 * @author : songsong.lu
 * @date : 2020/03/24
 * @description : 重写loading样式，暴露show/hide方法
 **/
import Vue from 'vue'
import LoadingComponent from './Loading'

const loadingComponent = Vue.extend(LoadingComponent);

let showLoading = (showWrapper=true) => {
  const loadingDom = new loadingComponent({
    el: document.createElement('div')
  });
  let methods = {
    show: () => {
      const loading = document.querySelector('.lu-loading');
      if(!loading){
        document.body.appendChild(loadingDom.$el);
      }
    },
    hide: () => {
      document.body.removeChild(loadingDom.$el);
    }
  };
  return methods
};

let registerLoading = (vue) => {
  vue.prototype.$loading = showLoading()
};

export default registerLoading
