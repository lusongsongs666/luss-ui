<template>
  <div id="app">
    <div class="lib">
      <div class="row buttons">
        <h3>Button</h3>
        <div class="col">
          <lu-button>按钮</lu-button>
          <lu-button type="primary" @click="test">按钮</lu-button>
          <lu-button type="success">按钮</lu-button>
          <lu-button type="info">按钮</lu-button>
          <lu-button type="warning">按钮</lu-button>
          <lu-button type="danger">按钮</lu-button>
        </div>
        <div class="col">
          <lu-button plain >按钮</lu-button>
          <lu-button plain type="primary">按钮</lu-button>
          <lu-button plain type="success">按钮</lu-button>
          <lu-button plain type="info">按钮</lu-button>
          <lu-button plain type="warning">按钮</lu-button>
          <lu-button plain type="danger">按钮</lu-button>
        </div>
        <div class="col">
          <lu-button disabled round>按钮</lu-button>
          <lu-button round type="primary">按钮</lu-button>
          <lu-button round type="success">按钮</lu-button>
          <lu-button round type="info">按钮</lu-button>
          <lu-button round type="warning">按钮</lu-button>
          <lu-button round type="danger">按钮</lu-button>
        </div>
        <!--<div class="col">
          <lu-button circle>拆</lu-button>
          <lu-button circle type="primary">拆</lu-button>
          <lu-button circle type="success">拆</lu-button>
          <lu-button circle type="info">拆</lu-button>
          <lu-button circle type="warning">拆</lu-button>
          <lu-button circle type="danger">拆</lu-button>
        </div>-->
        <div class="col">
          <lu-button plain disabled>按钮</lu-button>
          <lu-button disabled type="primary">按钮</lu-button>
          <lu-button plain disabled type="success">按钮</lu-button>
          <lu-button disabled type="info">按钮</lu-button>
          <lu-button disabled type="warning">按钮</lu-button>
          <lu-button disabled type="danger">按钮</lu-button>
        </div>

        <div class="col">
          <h3>Toast</h3>
          <lu-button type="primary" @click="showToast()">show</lu-button>
        </div>

        <div class="col">
          <h3>MessageBox</h3>
          <lu-button type="primary" @click="showMsg()">show</lu-button>
        </div>

        <div class="col">
          <h3>Dialog</h3>
          <lu-button type="primary" @click="showDialog()">show</lu-button>
          <lu-dialog width="30%" top="300px" :visible.sync="visible">
            <template v-slot:title>
              <h3>我是标题党</h3>
            </template>

            <div>This is body</div>

            <template v-slot:footer>
              <lu-button @click="visible = false">取消</lu-button>
              <lu-button type="primary" @click="visible = false">确定</lu-button>
            </template>
          </lu-dialog>
        </div>

        <div class="col">
          <h3>Loading</h3>
          <lu-button type="primary" @click="showLoading()">show</lu-button>
        </div>

        <div class="col">
          <h3>Switch</h3>
          <lu-switch v-model="active" activeColor="" inactiveColor=""></lu-switch>
        </div>

        <div class="col">
          <h3>Clock</h3>
          <lu-clock type="countDown" :timestamp="112331231231212"></lu-clock>
        </div>

        <div class="col">
          <h3>PopBox</h3>
          <lu-button type="primary" @click="showPopBox()">show</lu-button>
          <pop-box :visible.sync="popVisivle"></pop-box>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  data(){
    return {
      visible: false,
      active: false,
      popVisivle: false
    }
  },
  methods: {
    test(){
      console.log('This is Button Primary')
    },
    showToast(){
      this.$toast('This is Toast')
    },
    showMsg(){
      this.$msg('请输入你想输入的东西','',{
        defaultValue: '这是默认值',
      }).then(res=>{
        this.$toast(res.value)
      }).catch(err=>{
        this.$toast('取消啦')
      })
    },
    showDialog(){
      this.visible = true
    },
    showLoading(){
      this.$loading.show(
        {
          showWrapper: true
        }
      );
      setTimeout(()=>{
        this.$loading.hide()
      },3000)
    },
    showPopBox(){
      this.popVisivle = true
    },
  }
}
</script>

<style lang="scss" scoped>
  #app {
    width: 100vw;
    height: 100vh;
    .lib{
      width: 100vw;
      height: 100vh;
      overflow-y: auto;
      h3{
        margin-top: 0!important;
      }
      .row{
        padding: 20px;
      }
      .col{
        margin-bottom: 15px;
      }
    }
    ::v-deep .lu-button {
      margin-right: 10px;
      margin-bottom: 10px;
    }
  }
</style>
