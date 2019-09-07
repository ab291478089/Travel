<template>
<div class="list" ref="wrapper">
    <div>
        <div class="title border-topbottom">当前城市</div>
        <div class="button-list">
            <div class="button-wrapper">
                <div class="button">北京</div>
            </div>
        </div>
        <div class="title border-topbottom">热门城市</div>
        <div class="button-list">
            <div class="button-wrapper" v-for="item of hotCitys" :key="item.id">
                <div class="button">{{item.name}}</div>
            </div>
        </div>
        <div class="area"  v-for="(item,key) of citys" :key="key" :ref="key">
           <div class="title border-topbottom">{{key}}</div>
            <div class="item-list">
                <div class="item border-bottom" v-for="innerItem of item" :key="innerItem.id">{{innerItem.name}}</div>
            </div>
        </div>
    </div>
</div>
</template>
<script>
import BScroll from 'better-scroll'
export default {
  props: {
    citys: Object,
    hotCitys: Array,
    letter: String
  },
  mounted () {
    this.scroll = new BScroll(this.$refs.wrapper)
  },
  watch: {
    letter (letter) {
      if (this.letter) {
        const element = this.$refs[this.letter][0]
        this.scroll.scrollToElement(element)
      }
    }
  }
}
</script>
<style lang="stylus" scoped>
@import '~styles/varibles.styl';
.border-topbottom
    &:before
        border-color: #ccc;
    &:after
        border-color:#ccc;
.border-bottom
    &:before
        border-color: #ccc;
.list
    position: absolute;
    left: 0;
    top: 1.58rem;
    overflow: hidden;
    right: 0;
    bottom: 0;
   .title
       line-height: .54rem;
       background: #eee;
       padding-left: .2rem;
       color: #666;
       font-size: .26rem;
   .button-list
       overflow: hidden;
       padding: .1rem .6rem .1rem  .1rem;
       .button-wrapper
           float: left;
           width: 33.3%;
           .button
               margin: .1rem;
               text-align: center;
               padding: .1rem 0;
               border-radius: .06rem;
               border: .01rem solid $bgnColor;
   .item-list
       .item
           line-height: .76rem;
           padding-left: .2rem;
</style>
