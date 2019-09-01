<template>
    <div>
        <Header></Header>
        <HomeSwiper></HomeSwiper>
        <HomeIcons></HomeIcons>
        <HomeRecommand></HomeRecommand>
        <HomeWeekendRecommand></HomeWeekendRecommand>
    </div>
</template>
<script>

import Header from './components/Header'
import HomeSwiper from './components/Swiper'
import HomeIcons from './components/Icons'
import HomeRecommand from './components/Recommand'
import HomeWeekendRecommand from './components/Weekend'
export default {
  components: {
    Header,
    HomeSwiper,
    HomeIcons,
    HomeRecommand,
    HomeWeekendRecommand
  }
}
</script>

<style>

</style>
