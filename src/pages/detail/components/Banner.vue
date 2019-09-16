<template>
<div class="banner">
    <img  class="banner-img" src="//img1.qunarzz.com/sight/p0/1804/1a/1a48cc20b0d6ed44a3.img.jpg_600x330_3f524da7.jpg" alt="" @click="changeGalary">
    <div class="banner-photo">
          <span class="iconfont banner-icon">&#xe692;</span>
          <em>27</em>
    </div>
    <div class="banner-txt">北京欢乐谷(AAAA景区)</div>
    <Gallary :imgs="imgs" v-show="showGallary" @change="hiddenGallary"></Gallary>
</div>
</template>
<script>
import Gallary from 'common/gallary/Gallary'
export default {
  components: {
    Gallary
  },
  data () {
    return {
      showGallary: false,
      imgs: ['http://img1.qunarzz.com/sight/p0/1804/1a/1a48cc20b0d6ed44a3.img.jpg_r_800x800_9b21ceda.jpg',
        'http://img1.qunarzz.com/sight/p0/1804/cf/cfab40f6cd9d80f1a3.img.jpg_r_800x800_c0f07486.jpg']
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
