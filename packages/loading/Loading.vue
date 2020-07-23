<template>
  <div>
    <div class="lu-loading_wrapper"></div>
    <div class="lu-loading">
      <div class="lu-loading_spinner">
        <div class="dot"></div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Loading"
  }
</script>

<style scoped lang="scss">
  $dot-color: #00BCBC;
  .lu-loading_wrapper{
    position: fixed;
    left: 0;
    bottom: 0;
    right: 0;
    top: 0;
    background-color: transparent;
    /*pointer-events:none;*/
    z-index: 3001;
  }

  .lu-loading{
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 3001;
    &_spinner{
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%,-50%);
      text-align: center;
      .dot{
        position: relative;
        width: 35px;
        height: 35px;
        border-color: $dot-color;
        border-radius: 100%;
      }
      .dot:before,.dot:after {
        position: absolute;
        display: block;
        content: '';
        width: 10px;
        height: 10px;
        border-radius: 50%;
        top: 50%;
        margin-top: -5px;
      }
      .dot:before {
        left: 0;
        background: #00dada;
        animation: left-dot 1.2s infinite both;
        -webkit-animation: left-dot 1.2s infinite both;
        -moz-animation: left-dot 1.2s infinite both;
        -o-animation: left-dot 1.2s infinite both;
      }
      .dot:after {
        right: 0;
        background: #00bebe;
        animation: right-dot 1.2s infinite both;
        -webkit-animation: right-dot 1.2s infinite both;
        -moz-animation: right-dot 1.2s infinite both;
        -o-animation: right-dot 1.2s infinite both;
      }
    }
  }

  @keyframes left-dot {
    0% {
      transform: translateX(0);
    }
    50% {
      transform: translateX(25px);
    }
    100% {
      transform: translateX(0);
    }
  }

  @keyframes right-dot {
    0% {
      transform: translateX(0);
    }
    50% {
      transform: translateX(-25px);
    }
    100% {
      transform: translateX(0);
    }
  }

  /* Safari 和 Chrome */
  @-webkit-keyframes left-dot {
    0% {
      -webkit-transform: translateX(0);
    }
    50% {
      -webkit-transform: translateX(25px);
    }
    100% {
      -webkit-transform: translateX(0);
    }
  }

  @-webkit-keyframes right-dot {
    0% {
      -webkit-transform: translateX(0);
    }
    50% {
      -webkit-transform: translateX(-25px);
    }
    100% {
      -webkit-transform: translateX(0);
    }
  }

  /* Firefox */
  @-moz-keyframes left-dot {
    0% {
      -moz-transform: translateX(0);
    }
    50% {
      -moz-transform: translateX(25px);
    }
    100% {
      -moz-transform: translateX(0);
    }
  }

  @-moz-keyframes right-dot {
    0% {
      -moz-transform: translateX(0);
    }
    50% {
      -moz-transform: translateX(-25px);
    }
    100% {
      -moz-transform: translateX(0);
    }
  }

  /* Opera */
  @-o-keyframes left-dot {
    0% {
      -o-transform: translateX(0);
    }
    50% {
      -o-transform: translateX(25px);
    }
    100% {
      -o-transform: translateX(0);
    }
  }

  @-o-keyframes right-dot {
    0% {
      -o-transform: translateX(0);
    }
    50% {
      -o-transform: translateX(-25px);
    }
    100% {
      -o-transform: translateX(0);
    }
  }
</style>
