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
          <p class="hot-text">{{item.text}}</p>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
export default {
    name: 'HomeIcons',
    data() {
        return {
            swiperOption: {
                    pagination: '.swiper-pagination'
                },
            imgList : [
                {id:1,text:"热门景点",imgUrl:"https://imgs.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png"},
                {id:2,text:"银基水世界",imgUrl:"https://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20197/56275468d77b14cfb02430b0be09c448.png"},
                {id:3,text:"清明上河园",imgUrl:"https://imgs.qunarzz.com/piao/fusion/1803/85/77241e9427222b02.png"},
                {id:4,text:"开封府",imgUrl:"https://imgs.qunarzz.com/piao/fusion/1803/20/831d62d2e1c7be02.png"},
                {id:5,text:"大宋武侠城",imgUrl:"https://imgs.qunarzz.com/piao/fusion/1803/8c/47630407f70e8302.png"},
                {id:6,text:"夜场狂欢",imgUrl:"https://imgs.qunarzz.com/piao/fusion/1803/3e/86314b2af03b7502.png"},
                {id:7,text:"小宋城",imgUrl:"https://imgs.qunarzz.com/piao/fusion/1803/e3/67df61427c8e1302.png"},
                {id:8,text:"海洋馆",imgUrl:"https://imgs.qunarzz.com/piao/fusion/1803/50/26ffa31b56646402.png"},
                {id:9,text:"龙亭公园",imgUrl:"https://imgs.qunarzz.com/piao/fusion/1803/76/eb88861d78fb9902.png"},
            ]
        }  
    },
    computed: {
        pages() {
                const pages = []
                this.imgList.forEach((item,index)=>{
                    const page = Math.floor( index/8 )
                    if ( !pages[page] ) {
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