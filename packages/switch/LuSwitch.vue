<!--
* @author : songsong.lu
* @date : 2020/04/06
* @description : 重写开关组件,提供修改激活和非激活状态颜色的入口
-->
<template>
  <label class="lu-switch" @click="handlerClick" :class="{'is-checked': value}">
    <span class="lu-switch_core" :style="{ borderColor: switchColor, backgroundColor: switchColor }">
      <span class="lu-switch_button"></span>
    </span>
  </label>
</template>

<script>
  export default {
    name: "LuSwitch",
    props: {
      value: {
        type: Boolean,
        default: false
      },
      activeColor: {
        type: String,
        default: ''
      },
      inactiveColor: {
        type: String,
        default: ''
      }
    },
    computed:{
      switchColor(){
        let color = '';
        if(this.activeColor && this.value) color = this.activeColor;
        if(this.inactiveColor && !this.value) color = this.inactiveColor;
        return color
      }
    },
    methods: {
      handlerClick(){
        this.$emit('input',!this.value)
      }
    }
  }
</script>

<style scoped lang="scss">
  $checked-color: #00BCBC;
  .lu-switch{
    position: relative;
    display: inline-block;
    align-items: center;
    font-size: 14px;
    line-height: 20px;
    vertical-align: middle;
    .lu-switch_core{
      position: relative;
      display: inline-block;
      margin: 0;
      width: 40px;
      height: 20px;
      border: 1px solid #dcdfe6;
      outline: none;
      border-radius: 10px;
      box-sizing: border-box;
      background: #dcdfe6;
      cursor: pointer;
      transition: border-color .3s,background-color .3s;
      vertical-align: middle;
      .lu-switch_button{
        position:absolute;
        top: 1px;
        left: 1px;
        border-radius: 100%;
        transition: all .3s;
        width: 16px;
        height: 16px;
        background-color: #fff;
      }
    }
  }

  // 选中样式
  .is-checked {
    .lu-switch_core{
      border-color: $checked-color;
      background-color: $checked-color;
      .lu-switch_button {
        transform: translateX(20px);
      }
    }
  }
</style>
