<template>
    <div class="banner">
        <img class="banner-img" src="http://img1.qunarzz.com/sight/p0/1508/89/895a1b7add84f23faca053ce9e3153db.water.jpg_600x330_93d96bdf.jpg"/>
        <div class="banner-photo">
            <span class="iconfont banner-icon">&#xe692;</span>
            <em>27</em>
        </div>
        <div class="banner-txt">北京欢乐谷(AAAA景区)</div>
    </div>
</template>
<script>
export default {
  name: 'Banner'
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
        top: 3rem
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
        top: 3.5rem
        font-size: .36rem
        color: #fff
</style>
