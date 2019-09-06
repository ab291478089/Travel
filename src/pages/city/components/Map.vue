<template>
    <div class="list">
        <div class="item" v-for="(item,key) of citys" :key="key">{{key}}</div>
    </div>
</template>
<script>
export default {
  props: {
    citys: Object
  }
}
</script>
<style lang="stylus" scoped>
@import '~styles/varibles.styl';
.list
    position: absolute;
    display: flex;
    flex-direction: column;
    justify-content: center;
    right: 0;
    top: 1.58rem;
    width: .4rem;
    bottom: 0;
    .item
        text-align: center;
        line-height: .4rem;
        color: $bgnColor;
</style>
