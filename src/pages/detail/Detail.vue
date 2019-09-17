<template>
  <div>
    <Banner :sightName="sightName" :bannerImg="bannerImg" :gallaryImgs="gallaryImgs"></Banner>
    <Header></Header>
    <div class="detail-page">
      <List :categoryList="categoryList"></List>
    </div>
  </div>
</template>
<script>
import Banner from './components/Banner'
import Header from './components/Header'
import List from './components/List'
import axios from 'axios'
export default {
  // name 已知三个作用 第一用于keep-alive  第二用于递归子组件  第三用于Vue的插件 VueDevtools
  name: 'Detail',
  data () {
    return {
      sightName: '',
      bannerImg: '',
      categoryList: [],
      gallaryImgs: []
    }
  },
  methods: {
    getDetailInfos () {
      axios.get('/api/detail.json?id=' + this.$route.params.id)
        .then((res) => this.getSuccess(res))
    },
    getSuccess (res) {
      const data = res.data.data
      // 标题
      this.sightName = data.sightName
      // banner图
      this.bannerImg = data.bannerImg
      // 票种
      this.categoryList = data.categoryList
      // 轮播图
      this.gallaryImgs = data.gallaryImgs
    }
  },
  mounted () {
    this.getDetailInfos()
  },
  // 不想用activated 可以使用另一种方法 就是在使用keep-alive的地方加一个 extend属性
  // activated () {
  //   this.getDetailInfos()
  // },
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
