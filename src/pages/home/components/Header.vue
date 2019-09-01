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
      <div class="right">
        城市
        <span class="iconfont down-btn">&#xe64a;</span>
      </div>
    </header>
  </div>
</template>
<script>
export default {}
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl';
header {
  height: 0.86rem;
  display: flex;
  background-color: $bgnColor;
  line-height: 0.86rem;
  color: #fff;
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
    .down-btn {
      font-size: 0.2rem;
    }
  }
}
</style>
