<template>
    <div>
        <Header :city="city"></Header>
        <HomeSwiper :list="swiperList"></HomeSwiper>
        <HomeIcons :list="iconList"></HomeIcons>
        <HomeRecommand :list="recommendList"></HomeRecommand>
        <HomeWeekendRecommand :list="weekendList"></HomeWeekendRecommand>
    </div>
</template>
<script>

import Header from './components/Header'
import HomeSwiper from './components/Swiper'
import HomeIcons from './components/Icons'
import HomeRecommand from './components/Recommand'
import HomeWeekendRecommand from './components/Weekend'
import axios from 'axios'
export default {
  data () {
    return {
      city: '',
      swiperList: [],
      iconList: [],
      recommendList: [],
      weekendList: []
    }
  },
  components: {
    Header,
    HomeSwiper,
    HomeIcons,
    HomeRecommand,
    HomeWeekendRecommand
  },
  methods: {
    getHomeInfo () {
      axios.get('/api/index.json')
        .then(this.getHomeInfoSuc)
    },
    getHomeInfoSuc (res) {
      console.log(res)
      if (res.status === 200 && res.data.data) {
        const data = res.data.data
        this.city = data.city
        this.swiperList = data.swiperList
        this.iconList = data.iconList
        this.recommendList = data.recommendList
        this.weekendList = data.weekendList
      }
    }
  },
  mounted () {
    this.getHomeInfo()
  }
}
</script>

<style>

</style>
