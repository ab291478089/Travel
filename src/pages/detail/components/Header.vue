<template>
<div>
   <router-link tag="div" to="/" class="header" v-show="!isShowInfo">
       <div class="iconfont header-abs-back">&#xe624;</div>
   </router-link>
   <router-link to="/" v-show="isShowInfo" :style="opacityStyle">
        <header class="city-header">景点详情
            <div class="iconfont back-header">&#xe624;</div>
        </header>
    </router-link>
</div>
</template>
<script>
export default {
  data () {
    return {
      isShowInfo: false,
      opacityStyle: {
        opacity: 0
      }
    }
  },
  methods: {
    handleScrool () {
      const scrollTop = document.documentElement.scrollTop
      if (scrollTop > 60) {
        let opacity = scrollTop / 140
        opacity = opacity > 1 ? 1 : opacity
        this.opacityStyle = { opacity }
        this.isShowInfo = true
      } else {
        this.isShowInfo = false
      }
    }
  },
  activated () {
    // 如果不对全局事件进行解绑操作  当该组件执行此方法后 其他组件同样也可以执行
    window.addEventListener('scroll', this.handleScrool)
  },
  deactivated () {
    // 对全局事件进行解绑
    window.removeEventListener('scroll', this.handleScrool)
  }
}
</script>
<style lang="stylus" scoped>
@import '~styles/varibles.styl';
.header
    position: absolute
    left: .2rem
    top:  .2rem
    width: .72rem
    height: .72rem
    line-height: .72rem
    text-align: center
    border-radius: .4rem
    background: rgba(0,0,0,.8)
   .header-abs-back
        font-size: .4rem
        color: #fff
.city-header
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    height: $headerHeight;
    background: $bgnColor;
    overflow: hidden;
    text-align: center;
    line-height: $headerHeight;
    color: #fff;
    z-index: 2
    .back-header
      position: absolute;
      top: 0;
      left: 0;
      text-align: center;
      font-size: 0.4rem;
</style>
