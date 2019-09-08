<template>
    <div>
      <div class="search">
          <label name="city">
               <input id="city" class="city-search" v-model="keyword" type="text" placeholder="请输入城市或拼音">
          </label>
      </div>
      <ul class="search-box" v-show="keyword">
        <li class="search-item border-bottom" @click="handleChangeCity(item.name)" v-for="item of list" :key="item.id">
          {{item.name}}
        </li>
        <li class="search-item border-bottom"  v-show="hasData">已经没有匹配到的数据了~~~</li>
      </ul>
    </div>
</template>
<script>
import {mapMutations} from 'vuex'
export default {
  name: 'CitySearch',
  data () {
    return {
      keyword: '',
      timer: null,
      list: []
    }
  },
  computed: {
    hasData () {
      return !this.list.length
    }
  },
  methods: {
    handleChangeCity (city) {
      this.changeCity(city)
      this.$router.push('/')
    },
    ...mapMutations(['changeCity'])
  },
  props: {
    citys: Object
  },
  watch: {
    keyword () {
      const result = []
      if (this.timer) {
        clearTimeout(this.timer)
      }
      this.timer = setTimeout(() => {
        for (var key in this.citys) {
          this.citys[key].forEach((item) => {
            if (item.spell.indexOf(this.keyword) > -1 || item.name.indexOf(this.keyword) > -1) {
              result.push(item)
            }
          })
        }
        this.list = result
      }, 160)
    }
  }
}
</script>
<style lang="stylus" scoped>
@import '~styles/varibles.styl';
.search
    background: $bgnColor
    height: .72rem
    padding 0 .2rem
   .city-search
      width: 100%
      height: .56rem
      line-height: .56rem
      border-radius: .86rem
      box-sizing: border-box
      padding: 0 .3rem
      text-align: center
.search-box
    position: absolute
    top: 1.58rem
    left: 0
    right: 0
    bottom: 0
    z-index: 1
    background: #eee
    .search-item
      line-height: .62rem
      padding-left: .4rem
      color: #666
      background: #fff
</style>
