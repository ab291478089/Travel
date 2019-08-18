<template>
    <div class="swiper-contain">
    <swiper :options="swiperOption">
    <swiper-slide v-for="item of swiperImgList"  :key="item.id">
        <img class="swiper-img" :src="item.imgUrl">
    </swiper-slide>
    <div class="swiper-pagination"  slot="pagination"></div>
  </swiper>
    </div>
</template>

<script>
    export default {
        name: 'HomeSwiper',
        data (){
            return {
                swiperOption: {
                    pagination: '.swiper-pagination',
                    loop: true
                },
                swiperImgList: [
                    {id:'001',imgUrl:"https://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20198/01c95889ea184ed8122d1bb3abe8b3de.jpg_750x200_d814b24f.jpg"},
                    {id:'002',imgUrl:"https://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20198/7eab8755403a92abbf59710568c4ed6c.jpg_750x200_61bdb7aa.jpg"},
                    {id:'003',imgUrl:"https://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20193/87a224d0349d94a11e97f31aa1aba4f5.jpg_750x200_1f78af87.jpg"}
                ]
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
    padding-bottom: 26%

    .swiper-img
        width : 100%
</style>