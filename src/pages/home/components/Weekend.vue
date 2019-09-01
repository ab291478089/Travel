<template>
  <div>
    <div class="title">周末去哪</div>
    <ul>
      <li class="item" v-for="item in list" :key="item.id">
        <div class="item-img-top">
           <img class="item-img" :src="item.src" />
        </div>
        <div class="item-info border-bottom">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'WeekendRecommand',
  props: {
    list: Array
  }
//   data () {
//     return {
//       imgList: [
//         {
//           id: 1,
//           src:
//             'http://img1.qunarzz.com/sight/source/1811/f3/86173f863bef61.jpg_r_640x214_52b003ac.jpg',
//           title: '京城周末撒欢',
//           desc: '在帝都过周末，不仅仅是城中游！'
//         },
//         {
//           id: 2,
//           src:
//             'http://img1.qunarzz.com/sight/source/1811/f3/86173f863bef61.jpg_r_640x214_52b003ac.jpg',
//           title: '京城周末撒欢',
//           desc: '在帝都过周末，不仅仅是城中游！'
//         },
//         {
//           id: 3,
//           src:
//             'http://img1.qunarzz.com/sight/source/1811/f3/86173f863bef61.jpg_r_640x214_52b003ac.jpg',
//           title: '北京野生动物园',
//           desc: '在帝都过周末，不仅仅是城中游！'
//         },
//         {
//           id: 4,
//           src:
//             'http://img1.qunarzz.com/sight/source/1811/f3/86173f863bef61.jpg_r_640x214_52b003ac.jpg',
//           title: '北京动物园',
//           desc: '在帝都过周末，不仅仅是城中游！'
//         }
//       ]
//     }
//   }
}
</script>

<style lang="stylus" scoped>
@import '~styles/mixin.styl';

.title {
  background: #eee;
  margin-top: 0.2rem;
  line-height: 0.8rem;
  text-indent: 0.2rem;
}

  .item-img-top{
      height: 0;
      padding-bottom: 33.3%;
      overflow: hidden;
        .item-img {
            width: 100%;
        }
   }

  .item-info {
    flex: 1;
    min-width: 0;

    .item-title {
      height: 0.5rem;
      font-size: 0.28rem;
      padding-top: 0.3rem;
      text-indent: .2rem;
      ellipsis();
    }

    .item-desc {
      color: #616161;
      font-size: .24rem;
      padding: 0 0 .12rem 0;
      text-indent: .2rem;
      ellipsis();
    }
}
</style>
