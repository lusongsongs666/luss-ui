<!--
* @author : songsong.lu
* @date : 2020/04/07
* @description : 重写按钮组件，扩展功能
-->
<template>
  <transition name="dialog">
    <div class="lu-dialog_wrapper" v-show="visible" @click.self="handlerClose">
      <div class="lu-dialog" :style="{ width: width,marginTop: top }">
        <div class="lu-dialog_header">
          <slot name="title">
            <span class="lu-dialog_title">{{ title }}</span>
          </slot>
          <button class="lu-dialog_headerbtn" @click="handlerClose">
            <i class="iconfont icon-Icon1"></i>
          </button>
        </div>

        <div class="lu-dialog_body">
          <slot></slot>
        </div>

        <div class="lu-dialog_footer">
          <slot name="footer" v-if="$slots.footer"></slot>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
  export default {
    name: "LuDialog",
    props: {
      visible: {
        type: Boolean,
        default: false
      },
      title: {
        type: String,
        default: '提示'
      },
      width: {
        type: String,
        default: '50%'
      },
      top: {
        type: String,
        default: '15vh'
      }
    },
    methods: {
      handlerClose(){
        this.$emit('update:visible',false)
      }
    }
  }
</script>

<style scoped lang="scss">
  .lu-dialog_wrapper{
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    overflow: auto;
    margin: 0;
    z-index: 2001;
    background-color: rgba(0,0,0,0.5);
    .lu-dialog{
      position: relative;
      margin: 15vh auto 50px;
      background: #fff;
      border-radius: 2px;
      box-shadow: 0 1px 3px rgba(0,0,0,0.3);
      box-sizing: border-box;
      width: 30%;
      //min-width: 300px;
      &_header{
        padding: 20px 20px 10px;
        .lu-dialog_title{
          line-height: 24px;
          font-size: 18px;
          color: #303133;
        }
        .lu-dialog_headerbtn{
          position: absolute;
          top: 20px;
          right: 20px;
          padding: 0;
          background: transparent;
          border: none;
          outline: none;
          cursor: pointer;
          font-size: 16px;
          .lu-icon-close{
            color: #909399;
          }
        }
      }
      &_body{
        padding: 30px 20px;
        color: #606266;
        font-size: 14px;
        word-break: break-all;
      }
      &_footer{
        padding: 10px 20px 20px;
        text-align: right;
        box-sizing: border-box;
        ::v-deep .lu-button:first-child{
          margin-right: 20px;
        }
      }
    }
  }

  /***动画***/
  .dialog-enter-active{
    animation: fade .4s;
  }

  .dialog-leave-active{
    animation: fade 0.2s reverse;
  }

  @keyframes fade {
    0% {
      opacity: 0;
      transform: translateY(-20px);
    }
    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }

</style>
