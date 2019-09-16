<template>
  <div>
    <Banner></Banner>
    <Header></Header>
    <div class="detail-page">
      <List :list="list"></List>
    </div>
  </div>
</template>
<script>
import Banner from './components/Banner'
import Header from './components/Header'
import List from './components/List'
export default {
  name: 'Detail',
  data () {
    return {
      list: [
        {title: '成人票', children: [{title: '奥林匹克一塔成人票', price: 255}, {title: '奥林匹克二塔成人票', price: 255, children: [{title: '奥林匹克二塔夜场成人票', price: 255}]}]},
        {title: '学生票', children: [{title: '北京欢乐谷一号学生票', price: 255}, {title: '北京欢乐谷二号学生票', price: 255, children: [{title: '北京欢乐谷二号下午场学生票', price: 255}]}]},
        {title: '儿童票'},
        {title: '双人票'}
      ]
    }
  },
  components: {
    Banner,
    Header,
    List
  }
}
</script>
<style lang="stylus" scoped>
.detail-page
    height: 50rem
</style>
