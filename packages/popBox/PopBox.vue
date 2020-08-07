<template>
  <div>
    <transition name="wrapper">
      <div class="pop_box_wrapper" v-show="visible" @click="wrapperClose"></div>
    </transition>
    <transition
      @before-enter="beforeEnter"
      @enter="enter"
      @leave="leave"
      @after-leave="afterLeave"
    >
      <div v-show="visible" :class="['pop_box', `pop_box_${positionConvert}`]">
        <div class="pop_box_list">
          <slot>
            <h4 :class="['placeholder',`placeholder_${positionConvert}`]"></h4>
          </slot>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
  export default {
    name: "PopBox",
    props: {
      visible: {
        type: Boolean,
        default: false
      },
      position: {
        type: String,
        default: 'bottom'
      },
      clickWrapperClose: {
        type: Boolean,
        default: true
      },
      delay: {
        type: Number,
        default: 500
      }
    },
    data(){
      return {
        distance: 0
      }
    },
    computed: {
      positionConvert(){
        if(
          this.position === 'top' ||
          this.position === 'bottom' ||
          this.position === 'left' ||
          this.position === 'right'){
          return this.position
        }else {
          return 'bottom'
        }
      },
      isTop(){
        return this.positionConvert === 'top'
      },
      isBottom(){
        return this.positionConvert === 'bottom'
      },
      isLeft(){
        return this.positionConvert === 'left'
      },
      isRight(){
        return this.positionConvert === 'right'
      },
      axis(){
        return ( this.isLeft || this.isRight ) ? 'X' : 'Y'
      },
      negative(){
        return ( this.isLeft || this.isTop ) ? '-' : ''
      }
    },
    methods: {
      close(){
        this.$emit('update:visible',false)
      },
      wrapperClose(){
        if(!this.clickWrapperClose) return;
        this.close()
      },
      error(){
        console.error('按钮未定义方法')
      },

      // transition hook
      beforeEnter(el){
        let offsetPlace = ( this.isLeft || this.isRight ) ? 'offsetWidth' : 'offsetHeight';
        el.style.display = 'block';
        this.distance = document.querySelector('.pop_box')[offsetPlace] || 0;
        el.style.display = 'none';
        el.style.transform = `translate${this.axis}(${this.negative}${this.distance}px)`
      },
      enter(el,done){
        // 设置触发重排 刷新动画
        el.offsetWidth;
        el.style.transition = `all ${this.delay/1000}s ease`;
        el.style.transform = `translate${this.axis}(0)`;
        done()
      },
      leave(el,done){
        el.style.transition = `all ${this.delay/1000}s ease`;
        el.style.transform = `translate${this.axis}(${this.negative}${this.distance}px)`;
        // 延迟进入done函数，否则display直接变成none，看不到动画效果
        setTimeout(()=>{
          done()
        },this.delay)
      },
      afterLeave(el){
        el.style.display = 'none'
      }
    }
  };
</script>

<style scoped lang="scss">
  $nio-color: #00bebe;
  $title-color: #363C54;
  .pop_box_wrapper{
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    margin: 0;
    background-color: rgba(0,0,0,0.2);
    overflow: hidden;
    z-index: 2001;
  }
  .pop_box{
    position: fixed;
    box-sizing: border-box;
    background-color: #fff;
    z-index: 2002;
    &_list{
      width: 100%;
    }
  }

  .pop_box_top{
    left: 0;
    top: 0;
    width: 100%;
  }
  .pop_box_bottom{
    left: 0;
    bottom: 0;
    width: 100%;
  }
  .pop_box_left{
    top: 0;
    left: 0;
    height: 100%;
  }
  .pop_box_right{
    top: 0;
    right: 0;
    height: 100%;
  }

  .placeholder{
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .placeholder_left,.placeholder_right{
    width: 25vw;
  }
  .placeholder_top,.placeholder_bottom{
    height: 25vh;
  }


  /**动画效果**/
  .wrapper-enter,
  .wrapper-leave-to{
    opacity: 0;
  }
  .wrapper-enter-active,
  .wrapper-leave-active{
    transition: all 0.4s ease;
  }
</style>
