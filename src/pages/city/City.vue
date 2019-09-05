<template>
    <div>
        <city-header></city-header>
        <city-search></city-search>
        <city-list></city-list>
        <city-map></city-map>
    </div>
</template>
<script>
import CityHeader from './components/Header'
import CitySearch from './components/Search'
import CityList from './components/List'
import CityMap from './components/Map'
export default {
  name: 'City',
  components: {
    CityHeader,
    CitySearch,
    CityList,
    CityMap
  }
}
</script>
<style lang="stylus" scoped>

</style>
