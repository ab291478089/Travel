<template>
  <div>
    <div class="title">热销推荐</div>
    <ul>
      <router-link :to="'/detail/'+item.id" tag="li" class="item" v-for="item in list" :key="item.id">
        <img class="item-img" :src="item.imgUrl" />
        <div class="item-info border-bottom">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
          <button class="item-button">查看详情</button>
        </div>
      </router-link>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HomeRecommand',
  props: {
    list: Array
  }
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
