import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import mutations from './mutations'
Vue.use(Vuex)

export default new Vuex.Store({
  state,
  mutations
  /* 一般如果没有异步代码可以不使用actions
actions: {
changeCity (ctx, city) {
ctx.commit('changeCity', city)
}
},  */
})
