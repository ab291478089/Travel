<template>
  <div class="icons">
    <swiper :options="swiperOption">
      <swiper-slide v-for="(page,index) of pages" :key="index" :options="swiperOption">
        <div class="icon" v-for="item of page" :key="item.id">
          <div class="icon-content">
            <img
              class="icon-img"
              :src='item.imgUrl'
            />
          </div>
          <p class="hot-text">{{item.desc}}</p>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'HomeIcons',
  props: {
    list: Array
  },
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        autoplay: false
      }
    }
  },
  computed: {
    pages () {
      const pages = []
      this.list.forEach((item, index) => {
        const page = Math.floor(index / 8)
        if (!pages[page]) {
          pages[page] = []
        }
        pages[page].push(item)
      })
      return pages
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl';
@import '~styles/mixin.styl';
.icons >>> .swiper-container {
  height: 0;
  padding-bottom: 50%;
}
.icons{
  margin-top: .2rem;
.icon {
 position: relative;
 height: 0;
 width: 25%;
 padding-bottom: 25%;
 float: left;
 .icon-content {
   position: absolute;
   top: 0;
   left: 0;
   right: 0;
   bottom: 0.44rem;
   box-sizing: border-box;
   padding: 0.1rem;
   .icon-img {
     display: block;
     width: 75%;
     margin: 0 auto;
   }
 }
 .hot-text {
   position: absolute;
   bottom: 0;
   left: 0;
   right: 0;
   height: 0.42rem;
   line-height: 0.42rem;
   text-align: center;
   color: $darkTextColor;
   ellipsis();
  }
}
}
</style>
