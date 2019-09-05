<template>
    <div class="list">
        <div class="item">A</div>
        <div class="item">A</div>
        <div class="item">A</div>
        <div class="item">A</div>
        <div class="item">A</div>
    </div>
</template>
<script>
export default {
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
