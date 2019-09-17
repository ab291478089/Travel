<template>
   <div>
       <div class="ticket border-bottom" v-for="(item,index) of categoryList" :key="index">
           <div class="title">
                <span class="icon"></span>
               {{item.title}}
               <span class="price">{{item.price}}</span>
            </div>
            <div v-if="item.children" class="item-children">
                <detail-list :categoryList="item.children"></detail-list>
            </div>
       </div>
   </div>
</template>
<script>
export default {
  name: 'DetailList',
  props: {
    categoryList: Array
  }
}
</script>
<style lang="stylus" scoped>
.ticket
    line-height: .6rem
    .title
       font-size: .2rem
       .icon
           display: inline-block
           position: relative
           left: .09rem
           top: .09rem
           width: .36rem
           height: .36rem
           background: url(//s.qunarzz.com/piao/image/touch/sight/detail.png) 0 -.45rem no-repeat
           margin-right: .1rem
           background-size: .4rem 3rem
        .price
            right: .46rem;
            margin-top: -.28rem;
            color: #ff9800;
            font-size: .24rem;
    .item-children
        padding: 0 .4rem
</style>
