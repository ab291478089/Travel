<template>
<div class="banner">
    <img  class="banner-img" :src="bannerImg" alt="" @click="changeGalary">
    <div class="banner-photo">
          <span class="iconfont banner-icon">&#xe692;</span>
          <em>{{this.gallaryImgs.length}}</em>
    </div>
    <div class="banner-txt">{{sightName}}</div>
    <Fade-animation>
      <Gallary :gallaryImgs="gallaryImgs" v-show="showGallary" @change="hiddenGallary"></Gallary>
    </Fade-animation>
</div>
</template>
<script>
import Gallary from 'common/gallary/Gallary'
import FadeAnimation from 'common/fade/FadeAnimation'
export default {
  components: {
    Gallary,
    FadeAnimation
  },
  props: {
    sightName: String,
    bannerImg: String,
    gallaryImgs: Array
  },
  data () {
    return {
      showGallary: false
    }
  },
  methods: {
    changeGalary () {
      this.showGallary = true
    },
    hiddenGallary () {
      this.showGallary = false
    }
  }
}
</script>
<style lang="stylus" scoped>
.banner
    height: 0
    padding-bottom: 55%
    .banner-img
        position: relative
        width: 100%
    .banner-photo
        position: absolute
        padding: 0 .4rem
        height: .4rem
        line-height: .4rem
        left: .6rem
        top: 2.5rem
        background: rgba(0,0,0,.8)
        color: #fff
        border-radius: .2rem
        background-image: linner-gradient(top, rgba(0,0,0,0), rgba(0,0,0,0.8))
        .banner-icon
            font-size: .28rem
            padding: .1rem .1rem
    .banner-txt
        position: absolute
        left: .6rem
        top: 3rem
        font-size: .36rem
        color: #fff
</style>
