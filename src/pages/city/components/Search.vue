<template>
    <div>
      <div class="search">
       <input class="city-search" type="text" placeholder="请输入城市">
      </div>
    </div>
</template>
<script>
export default {
  name: 'CityHeader'
}
</script>
<style lang="stylus" scoped>
@import '~styles/varibles.styl';
.search
    background: $bgnColor
    height: .72rem
    padding 0 .2rem
   .city-search
      width: 100%
      height: .56rem
      line-height: .56rem
      border-radius: .86rem
      box-sizing: border-box
      padding: 0 .3rem
      text-align: center
</style>
