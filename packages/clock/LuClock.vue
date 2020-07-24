<!--
* @author : songsong.lu
* @date : 2020/04/10
* @description : 重写按钮组件，扩展功能
-->
<template>
  <span class="lu-clock">
    {{ time }}
  </span>
</template>

<script>
  export default {
    name: "LuClock",
    props: {
      type: {
        type: String,
        default: 'clock'
      },
      timestamp: {
        type: Number,
        default: 0
      },
      id: {
        type: Number,
        default: -1
      },
      format: {
        type: String,
        default: 'yyyy-MM-dd hh:mm:ss'
      }
    },
    data(){
      return {
        timestampCopy: 0,
        nowTimestamp: 0,
        timer: null
      }
    },
    computed: {
      time(){
        let timestamp;
        if(this.type === 'clock'){
          timestamp = this.nowTimestamp;
        }else if(this.type === 'countDown'){
          timestamp = this.timestampCopy;
        }
        let time = new Date(Math.floor(timestamp / 1000) * 1000);
        return this.switchTs(this.format,time)
      }
    },
    mounted(){
      if(this.type === 'clock'){
        this.nowTimestamp = new Date().getTime();
        this.timer = setInterval(()=>{
          this.nowTimestamp += 1000
        },1000)
      }else if(this.type === 'countDown'){
        this.timestampCopy = this.timestamp;
        let timer = setInterval(()=>{
          this.timestampCopy -= 1000;
          if(this.timestampCopy < 1000){
            clearInterval(timer);
            this.$emit('timeout',this.key)
          }
        },1000)
      }
    },
    methods: {
      /*switchTs(fmt,d){
        let date = (d.getFullYear()) + "-" +
          ((d.getMonth()+1>9)?(d.getMonth()+1):('0'+(d.getMonth()+1))) + "-" +
          (d.getDate()>9?d.getDate():('0'+d.getDate())) + " " +
          (d.getHours()>9?d.getHours():('0'+d.getHours())) + ":" +
          (d.getMinutes()>9?d.getMinutes():('0'+d.getMinutes())) + ":" +
          (d.getSeconds()>9?d.getSeconds():('0'+d.getSeconds()));
        return !!d ? date : '—'
      }*/
      switchTs(fmt,date){
        const o = {
          "M+": date.getMonth() + 1, //月份
          "d+": date.getDate(), //日
          "h+": date.getHours(), //小时
          "m+": date.getMinutes(), //分
          "s+": date.getSeconds(), //秒
          "q+": Math.floor((date.getMonth() + 3) / 3), //季度
          "S": date.getMilliseconds() //毫秒
        };
        if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (date.getFullYear() + "").substr(4 - RegExp.$1.length));
        for (let k in o){
          if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)))
        }
        return fmt;
      }
    },
    destroyed(){
      clearInterval(this.timer)
    }
  }
</script>

<style scoped lang="scss">
  .lu-clock{
    display: inline-block;
    vertical-align: center;
  }
</style>
