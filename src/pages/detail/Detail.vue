<template>
  <div class="detail-page">
    <Banner></Banner>
    <Header></Header>
  </div>
</template>
<script>
import Banner from './components/Banner'
import Header from './components/Header'
export default {
  components: {
    Banner,
    Header
  }
}
</script>
<style lang="stylus" scoped>
.detail-page
    height: 50rem
</style>
