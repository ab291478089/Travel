<template>
  <div>
    <header>
      <div class="left">
        <div class="iconfont back-btn">&#xe624;</div>
      </div>
      <div class="content">
        <span class="iconfont">&#xe632;</span>
        请输入内容
      </div>
      <router-link to="/city">
        <div class="right">
          {{this.city}}
          <span class="iconfont down-btn">&#xe64a;</span>
        </div>
      </router-link>
    </header>
  </div>
</template>
<script>
export default {
  props: {
    city: String
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl'
header {
  height: $headerHeight;
  display: flex;
  background-color: $bgnColor;
  line-height: $headerHeight;
  color: #fff;
}
.left {
  width: 0.64rem;
  float: left;
  .back-btn {
    text-align: center;
    font-size: 0.4rem;
  }
}
.content {
  flex: 1;
  line-height: 0.64rem;
  color: #ccc;
  paddig-left: 0.2rem;
  height: 0.64rem;
  margin-left: 0.2rem;
  border-radius: 0.25rem;
  background-color: #fff;
  margin-top: 0.12rem;
}

.right {
  float: right;
  width: 1.24rem;
  text-align: center;
  color: #fff;

  .down-btn {
    font-size: 0.2rem;
  }
}
</style>
