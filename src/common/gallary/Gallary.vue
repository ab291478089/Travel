<template>
  <div class="gallary-box" @click="change">
    <div class="wrapper">
      <swiper :options="swiperOption">
        <swiper-slide v-for="(item,index) of gallaryImgs" :key="index">
          <img :src="item" />
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    gallaryImgs: {
      type: Array,
      default () {
        return []
      }
    }
  },
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        paginationType: 'fraction',
        observer: true,
        observeParents: true
      }
    }
  },
  methods: {
    change () {
      this.$emit('change')
    }
  }
}
</script>
<style lang="stylus" scoped>
.wrapper >>> .swiper-container {
  overflow: inherit;
}

.gallary-box {
  display: flex;
  color: #fff;
  justify-content: center;
  align-items: center;
  position: fixed;
  background-color: black;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  z-index: 99;

  .wrapper {
    height: 0;
    padding-bottom: 100%;
    width: 100%;

    img {
      width: 100%;
    }
  }

  .swiper-pagination {
    bottom: -1rem;
  }
}
</style>
