import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    category_id: 0,
  },
  getters: {
    categoryid: state => {
      return state.category_id + 1
    }
  }
})
