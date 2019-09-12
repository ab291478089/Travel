<template>
<div>
    <img src="//img1.qunarzz.com/sight/p0/1804/1a/1a48cc20b0d6ed44a3.img.jpg_600x330_3f524da7.jpg" alt="" @click="changeGalary">
    <Gallary :imgs="imgs" v-show="showGallary" @change="hiddenGallary"></Gallary>
</div>
</template>
<script>
import Gallary from 'common/gallary/Gallary'
export default {
  components: {
    Gallary
  },
  data () {
    return {
      showGallary: false,
      imgs: ['http://img1.qunarzz.com/sight/p0/1804/1a/1a48cc20b0d6ed44a3.img.jpg_r_800x800_9b21ceda.jpg',
        'http://img1.qunarzz.com/sight/p0/1804/cf/cfab40f6cd9d80f1a3.img.jpg_r_800x800_c0f07486.jpg']
    }
  },
  methods: {
    changeGalary () {
      this.showGallary = true
    },
    hiddenGallary () {
      this.showGallary = false
    }
  }
}
</script>
<style lang="stylus" scoped>
img {
    width: 100%
}
</style>
