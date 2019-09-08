<template>
    <div>
        <city-header></city-header>
        <city-search :citys="citys"></city-search>
        <city-list :citys="citys" :hotCitys="hotCitys" :letter="letter"></city-list>
        <city-map :citys="citys" @change="handleLetterChange"></city-map>
    </div>
</template>
<script>
import axios from 'axios'
import CityHeader from './components/Header'
import CitySearch from './components/Search'
import CityList from './components/List'
import CityMap from './components/Map'
export default {
  name: 'City',
  data () {
    return {
      citys: {},
      hotCitys: [],
      letter: ''
    }
  },
  components: {
    CityHeader,
    CitySearch,
    CityList,
    CityMap
  },
  methods: {
    getCitysInfo () {
      axios.get('/api/city.json')
        .then(this.getCityAsync)
    },
    getCityAsync (res) {
      res = res.data
      if (res.ret && res.data) {
        const data = res.data
        this.citys = data.cities
        this.hotCitys = data.hotCities
      }
    },
    handleLetterChange (letter) {
      this.letter = letter
    }
  },
  mounted () {
    this.getCitysInfo()
  }
}
</script>
<style lang="stylus" scoped>

</style>
