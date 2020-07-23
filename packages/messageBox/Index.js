/**
 * @author : songsong.lu
 * @date : 2020/06/13
 * @description : 重封装消息盒子组件，扩展功能
**/
import Vue from 'vue';
import MsgBoxComponent from './MessageBox'

const msgBoxComponent = Vue.extend(MsgBoxComponent);

const showMsgBox = (header='', content='', options={}) => {
  return new Promise((resolve, reject) => {
    let basicOptions = {
      type: 'warning',
      confirmText: '确定',
      cancelText: '取消',
      defaultValue: '',
      placeholder: ''
    };
    options = Object.assign(basicOptions,options);
    const msgDom = new msgBoxComponent({
      el: document.createElement('div'),
      data(){
        return {
          show: false,
          header: header,
          content: content,
          inputVal: options.defaultValue,
          placeholder: options.placeholder,
          confirmText: options.confirmText,
          cancelText: options.cancelText,
        }
      },
      methods: {
        confirm(){
          resolve(
            {
              value: msgDom.inputVal
            }
          );
          this.close()
        },
        cancel(){
          reject();
          this.close()
        },
        close(){
          msgDom.show = false;
          setTimeout(()=>{
            document.body.removeChild(msgDom.$el)
          },500)
        }
      }
    });
    document.body.appendChild(msgDom.$el);
    setTimeout(()=>{ msgDom.show = true });
  })
};

const registerMsgBox = (vue) => {
  vue.prototype.$msg = showMsgBox
};

export default registerMsgBox
