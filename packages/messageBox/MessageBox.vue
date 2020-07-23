<template>
  <div>
    <transition name="wrapper">
      <div class="lu-msg_wrapper" v-if="show"></div>
    </transition>
    <transition name="msg">
      <div class="lu-msg" v-if="show">
        <div class="lu-msg_header">
          {{ header }}
        </div>
        <div class="lu-msg_body">
          <!--<div class="msg-body-tip">{{ content }}</div>-->
          <input class="lu-msg-input_inner" v-model="inputVal"/>
        </div>
        <div class="lu-msg_footer">
          <div @click="cancel">{{ cancelText }}</div>
          <div @click="confirm">{{ confirmText }}</div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
  export default {
    name: "Dialog"
  }
</script>

<style scoped lang="scss">
  $border-color: #F0F1F2;
  $input-color: #696D7F;
  .lu-msg_wrapper{
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: black;
    opacity: 0.3;
    z-index: 2001;
  }
  .lu-msg{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    max-width: 80%;
    width: 300px;
    border-radius: 8px;
    background-color: #fff;
    color: #363C54;
    font-size: 16px;
    z-index: 2002;
    //增加阴影
    -moz-box-shadow:0 0 2px #333;
    -webkit-box-shadow:0 0 2px #333;
    box-shadow:0 0 2px #333;
    &_header{
      padding: 19px 20px;
      padding-bottom: 10px;
      text-align: center;
    }
    &_body{
      margin-bottom: 20px;
      padding: 0 20px;
      input,textarea{
        width: 100%;
      }
      /*.msg-body_tip{
        font-size: 13px;
        margin-bottom: 5px;
      }*/
    }
    &_footer{
      display: flex;
      justify-content: space-between;
      height: 50px;
      border-top: 1px solid $border-color;
      & > div{
        width: 50%;
        line-height: 50px;
        text-align: center;
      }
      & > div:nth-child(1){
        border-bottom-left-radius: 8px;
        border-right: 1px solid $border-color;
        background-color: #fff;
      }
      & > div:nth-child(2){
        border-bottom-right-radius: 8px;
        color: #fff;
        background-color: #00BCBC;
      }
    }
  }

  .lu-msg-input_inner{
    -webkit-appearance: none;
    background-color: #fff;
    background-image: none;
    border-radius: 4px;
    border: 1px solid #dcdfe6;
    box-sizing: border-box;
    color: #606266;
    display: inline-block;
    font-size: inherit;
    height: 40px;
    line-height: 40px;
    outline: none;
    padding: 0 15px;
    transition: border-color .2s cubic-bezier(.645,.045,.355,1);
    width: 100%;
  }

  /***动画效果***/
  .wrapper-enter,
  .wrapper-leave-to{
    opacity: 0;
  }
  .wrapper-enter-active,
  .wrapper-leave-active{
    transition: all 0.4s ease;
  }

  .msg-enter,
  .msg-leave-to{
    opacity: 0;
    transform: translate(-50%,-75%);
  }
  .msg-enter-active,
  .msg-leave-active{
    transition: all 0.4s ease;
  }

  @keyframes fade{
    0% {
      opacity: 0;
    }
    100% {
      opacity: 100%;
    }
  }
</style>
