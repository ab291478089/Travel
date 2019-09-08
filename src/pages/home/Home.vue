<template>
    <div>
        <Header></Header>
        <HomeSwiper :list="swiperList"></HomeSwiper>
        <HomeIcons :list="iconList"></HomeIcons>
        <HomeRecommand :list="recommendList"></HomeRecommand>
        <HomeWeekendRecommand :list="weekendList"></HomeWeekendRecommand>
    </div>
</template>
<script>
import {mapState} from 'vuex'
import Header from './components/Header'
import HomeSwiper from './components/Swiper'
import HomeIcons from './components/Icons'
import HomeRecommand from './components/Recommand'
import HomeWeekendRecommand from './components/Weekend'
import axios from 'axios'
export default {
  data () {
    return {
      swiperList: [],
      iconList: [],
      recommendList: [],
      weekendList: [],
      lastCity: ''
    }
  },
  components: {
    Header,
    HomeSwiper,
    HomeIcons,
    HomeRecommand,
    HomeWeekendRecommand
  },
  computed: {
    ...mapState(['city'])
  },
  methods: {
    getHomeInfo () {
      axios.get(`/api/index.json?city=${this.city}`)
        .then(this.getHomeInfoSuc)
    },
    getHomeInfoSuc (res) {
      console.log(res)
      if (res.status === 200 && res.data.data) {
        const data = res.data.data
        this.swiperList = data.swiperList
        this.iconList = data.iconList
        this.recommendList = data.recommendList
        this.weekendList = data.weekendList
      }
    }
  },
  mounted () {
    this.lastCity = this.city
    this.getHomeInfo()
  },
  activated () {
    if (this.lastCity !== this.city) {
      this.lastCity = this.city
      this.getHomeInfo()
    }
  }
}
</script>

<style>

</style>
