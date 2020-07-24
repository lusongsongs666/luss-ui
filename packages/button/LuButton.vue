<!--
* @author : songsong.lu
* @date : 2020/04/06
* @description : 重写按钮组件样式，提供type,plain,round,circle,disabled的样式选择
-->
<template>
    <button :class="['lu-button',`lu-button-${type}`,{
      'is-plain': plain,
      'is-round': round,
      'is-circle': circle,
      'is-disabled': disabled,
    }]"
      :disabled="disabled"
      @click=handlerClick
    >
      <span>
        <slot></slot>
      </span>
    </button>
</template>

<script>
  export default {
    name: "LuButton",
    props: {
      type:{
        type: String,
        default: 'default'
      },
      plain:{
        type: Boolean,
        default: false
      },
      round:{
        type: Boolean,
        default: false
      },
      circle:{
        type: Boolean,
        default: false
      },
      disabled:{
        type: Boolean,
        default: false
      }
    },
    created(){
      //console.log(this.type)
    },
    methods:{
      handlerClick(e){
        this.$emit('click',e)
      }
    }
  }
</script>

<style scoped lang="scss">
  .lu-button{
    display: inline-block;
    line-height: 1;
    white-space: nowrap;
    cursor: pointer;
    background-color: #fff;
    border: 1px solid #dcdfe6;
    color: #606266;
    -webkit-appearance: none;
    text-align: center;
    box-sizing: border-box;
    outline: none;
    margin: 0;
    transition: 0.1s;
    font-weight: 500;

    //禁止元素的文字被选中
    -moz-user-select: none;
    -webkit-user-select: none;
    -ms-user-select: none;
    padding: 12px 20px;
    font-size: 14px;
    border-radius: 4px;
    &:hover,
    &:focus{
      color: #00BCBC;
      border-color: #00BCBC;
      background-color: #ecf5ff;
    }
  }
  .lu-button-primary{
    color:#fff;
    background-color: #00BCBC;
    border-color: #00BCBC;
    &:hover,
    &:focus{
      border-color: #85BCBA;
      background-color: #85BCBA;
      color: #fff;
    }
  }
  .lu-button-success{
    color:#fff;
    background-color: #67c23a;
    border-color: #67c23a;
    &:hover,
    &:focus{
      border-color: #85ce61;
      background-color: #85ce61;
      color: #fff;
    }
  }
  .lu-button-info{
    color:#fff;
    background-color: #909399;
    border-color: #909399;
    &:hover,
    &:focus{
      border-color: #a6a9ad;
      background-color: #a6a9ad;
      color: #fff;
    }
  }
  .lu-button-warning{
    color:#fff;
    background-color: #e6a23c;
    border-color: #e6a23c;
    &:hover,
    &:focus{
      border-color: #ebb563;
      background-color: #ebb563;
      color: #fff;
    }
  }
  .lu-button-danger{
    color:#fff;
    background-color: #f56c6c;
    border-color: #f56c6c;
    &:hover,
    &:focus{
      border-color: #f78989;
      background-color: #f78989;
      color: #fff;
    }
  }

  // 朴素按钮样式
  .lu-button.is-plain{
    &:hover,
    &:focus{
      background-color: #fff;
      border-color: #00BCBC;
      color: #00BCBC;
    }
  }
  .lu-button-primary.is-plain{
    color: #00BCBC;
    background-color: #ecf5ff;
    &:hover,
    &:focus{
      background-color: #00BCBC;
      border-color: #00BCBC;
      color: #fff;
    }
  }
  .lu-button-success.is-plain{
    color: #67c23a;
    background-color: #c2e7b0;
    &:hover,
    &:focus{
      background-color: #67c23a;
      border-color: #67c23a;
      color: #fff;
    }
  }
  .lu-button-info.is-plain{
    color: #909399;
    background-color: #d3d4d6;
    &:hover,
    &:focus{
      background-color: #909399;
      border-color: #909399;
      color: #fff;
    }
  }
  .lu-button-warning.is-plain{
    color: #e6a23c;
    background-color: #f5dab1;
    &:hover,
    &:focus{
      background-color: #e6a23c;
      border-color: #e6a23c;
      color: #fff;
    }
  }
  .lu-button-danger.is-plain{
    color: #f56c6c;
    background-color: #fbc4c4;
    &:hover,
    &:focus{
      background-color: #f56c6c;
      border-color: #f56c6c;
      color: #fff;
    }
  }

  // round属性
  .lu-button.is-round{
    border-radius: 20px;
    padding: 12px 23px;
  }

  // circle属性
  .lu-button.is-circle{
    border-radius: 50%;
    padding: 20px;
  }

  // disabled属性
  .lu-button.is-disabled{
    cursor: no-drop;
  }
  .lu-button-default.is-disabled{
    color: #A4A4A4;
    border-color: #dcdfe6;
    &:hover,
    &:focus{
      border-color: #dcdfe6;
      background-color: #fff;
      color: #A4A4A4;
    }
  }
  .lu-button-primary.is-disabled{
    color:#fff;
    background-color: #85BCBA;
    border-color: #85BCBA;
    &:hover,
    &:focus{
      border-color: #85BCBA;
      background-color: #85BCBA;
      color: #fff;
    }
  }
  .lu-button-success.is-disabled{
    border-color: #85ce61;
    background-color: #85ce61;
    color: #fff;
    &:hover,
    &:focus{
      background-color: #85ce61;
      border-color: #85ce61;
      color: #fff;
    }
  }
  .lu-button-info.is-disabled{
    color:#fff;
    background-color: #a6a9ad;
    border-color: #a6a9ad;
    &:hover,
    &:focus{
      border-color: #a6a9ad;
      background-color: #a6a9ad;
      color: #fff;
    }
  }
  .lu-button-warning.is-disabled{
    color:#fff;
    background-color: #ebb563;
    border-color: #ebb563;
    &:hover,
    &:focus{
      border-color: #ebb563;
      background-color: #ebb563;
      color: #fff;
    }
  }
  .lu-button-danger.is-disabled{
    color:#fff;
    background-color: #f78989;
    border-color: #f78989;
    &:hover,
    &:focus{
      border-color: #f78989;
      background-color: #f78989;
      color: #fff;
    }
  }
</style>
