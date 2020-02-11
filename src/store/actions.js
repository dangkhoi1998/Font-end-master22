// https://vuex.vuejs.org/en/actions.html
import axios from 'axios'
export default {
  loadCoins ({ commit }) {
    axios
      .get('http://192.168.1.250:18001/source')
      .then(r => r.data)
      .then(coins => {
      commit('SET_COINS', coins)
      })
  },
  loadCategory ({ commit }) {
    axios
      .get('http://192.168.1.250:18000/category')
      .then(r => r.data)
      .then(category_name => {
      commit('SET_CATEGORY', category_name)
      })
  },
}
