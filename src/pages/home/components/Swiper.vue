<template>
    <div class="swiper-contain">
    <swiper :options="swiperOption" v-if="showSwiper">
    <swiper-slide v-for="item of list"  :key="item.id">
        <img class="swiper-img" :src="item.imgUrl">
    </swiper-slide>
    <div class="swiper-pagination"  slot="pagination"></div>
  </swiper>
    </div>
</template>

<script>
export default {
  name: 'HomeSwiper',
  props: {
    list: Array
  },
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        loop: true
      }
    }
  },
  computed: {
    showSwiper () {
      return this.list.length
    }
  }
}
</script>

<style lang="stylus" scoped>
.swiper-contain >>> .swiper-pagination-bullet-active
        background: #fff !important
.swiper-contain
    width :100%
    height: 0
    overflow: hidden
    padding-bottom: 33%
    .swiper-img
        width : 100%
</style>
