<template>
    <div>
     <router-link to="/">
        <header class="city-header">城市选择
            <div class="iconfont back-header">&#xe624;</div>
        </header>
     </router-link>
    </div>
</template>
<script>
export default {
  name: 'CityHeader'
}
</script>
<style lang="stylus" scoped>
@import '~styles/varibles.styl';
.city-header
    position: relative;
    height: $headerHeight;
    background: $bgnColor;
    overflow: hidden;
    text-align: center;
    line-height: $headerHeight;
    color: #fff;
    .back-header
      position: absolute;
      top: 0;
      left: 0;
      text-align: center;
      font-size: 0.4rem;
</style>
