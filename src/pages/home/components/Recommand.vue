<template>
  <div>
    <div class="title">热销推荐</div>
    <ul>
      <li class="item" v-for="item in list" :key="item.id">
        <img class="item-img" :src="item.imgUrl" />
        <div class="item-info border-bottom">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
          <button class="item-button">查看详情</button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HomeRecommand',
  props: {
    list: Array
  }
//   data () {
//     return {
//       imgList: [
//         {
//           id: 1,
//           src:
//             'http://img1.qunarzz.com/sight/p0/1804/1a/1a48cc20b0d6ed44a3.img.jpg_200x200_32e22bed.jpg',
//           title: '奥林匹克塔',
//           desc: '亚洲唯一飞行式过山车等你来挑战'
//         },
//         {
//           id: 2,
//           src:
//             'http://img1.qunarzz.com/sight/p0/1409/19/adca619faaab0898245dc4ec482b5722.jpg_200x200_1bc99086.jpg',
//           title: '故宫',
//           desc: '世界五大宫之首，穿越与您近在咫尺'
//         },
//         {
//           id: 3,
//           src:
//             'http://img1.qunarzz.com/sight/p0/1507/36/ce3d2d6c9ab44d67ae68d940b8781829.water.jpg_200x200_0938a8f2.jpg',
//           title: '北京野生动物园',
//           desc: '敢与森林之王近距离接触吗？'
//         },
//         {
//           id: 4,
//           src:
//             'http://img1.qunarzz.com/sight/p0/201308/08/41150dacc0e3a0c8c8d65eac.jpg_200x200_c62292e9.jpg',
//           title: '北京动物园',
//           desc: '百余种动物，让你离自然更近'
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

.item {
  display: flex;
  height: 1.8rem;

  .item-img {
    width: 1.6rem;
    height: 1.6rem;
    padding: 0.1rem;
  }

  .item-info {
    flex: 1;
    min-width: 0;

    .item-title {
      height: 0.5rem;
      font-size: 0.32rem;
      padding-top: 0.3rem;
      ellipsis();
    }

    .item-desc {
      color: #f55;
      ellipsis();
    }

    .item-button {
      margin-top: 0.2rem;
      padding: 0 0.2rem;
      border-radius: 0.06rem;
      font-size: 92%;
      color: #fff;
      background: #ff9300;
    }
  }
}
</style>
