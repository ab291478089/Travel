<template>
    <Banner></Banner>
</template>
<script>
import Banner from './components/Banner'
import axios from 'axios'
export default {
  methods: {
    getDetail () {
      axios.get('/api/detail.json')
        .then(result => console.log(result))
    },
    mounted () {
      this.getDetail()
    }
  },
  components: {
    Banner
  }
}
</script>
<style lang="stylus" scoped>
</style>
