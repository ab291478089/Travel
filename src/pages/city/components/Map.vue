<template>
  <div class="list">
    <div
      class="item"
      v-for="item  of letters"
      :key="item"
      :ref="item"
      @click="handleLetterClick(item)"
      @touchstart="handleTouchStart"
      @touchmove="handleTouchMove"
      @touchend="handleTouchEnd"
    >{{item}}</div>
  </div>
</template>
<script>
export default {
  computed: {
    letters () {
      const letters = []
      for (let i in this.citys) {
        letters.push(i)
      }
      console.log(letters)
      return letters
    }
  },
  data () {
    return {
      touchStatus: false,
      distanceA: 0,
      timer: null
    }
  },
  props: {
    citys: Object
  },
  updated () {
    // 获取A字母距 上多少高度
    this.distanceA = this.$refs['A'][0].offsetTop
  },
  methods: {
    handleLetterClick (e) {
      this.$emit('change', e)
    },
    handleTouchStart () {
      this.touchStatus = true
    },
    handleTouchMove (e) {
      if (this.touchStatus) {
        // 代码优化 加入节流函数
        if (this.timer) {
          clearTimeout(this.timer)
        }
        this.timer = setTimeout(() => {
          // 获取滑动停止的位置
          const touchY = e.touches[0].clientY - 79
          // 获取滑到哪个字母的索引  20表示字母的高度
          const index = Math.floor((touchY - this.distanceA) / 20)
          if (index >= 0 && this.letters.length) {
            this.$emit('change', this.letters[index])
          }
        }, 16)
      }
    },
    handleTouchEnd () {
      this.touchStatus = false
    }
  }
}
</script>
<style lang="stylus" scoped>
@import '~styles/varibles.styl';

.list {
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  right: 0;
  top: 1.58rem;
  width: 0.4rem;
  bottom: 0;

  .item {
    text-align: center;
    line-height: 0.4rem;
    color: $bgnColor;
  }
}
</style>
