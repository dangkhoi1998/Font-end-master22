// https://vuex.vuejs.org/en/actions.html
import axios from 'axios'
import { getcategory } from '../api/GetApi/getApiAdmin'
import { Postcategory } from '../api/PostApi/PostApiAdmin'
import { Putcategory } from '../api/PutApi/PutAdminApi'
import { Deletecategory } from '../api/DeleteApi/DeleteAdminApi'
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
    getcategory()
      .then(r => r.data)
      .then(category_name => {
      commit('SET_CATEGORY', category_name)
      })
  },
  postCategory ({commit, state}, category) {
    Postcategory(category)
      .then(response => {
        console.log(response)
        getcategory()
        .then(r => r.data)
        .then(category_name => {
          commit('SET_CATEGORY', category_name)
          if(state.categoryAdd === 0) {
            state.category1 = []
            commit('SET_CATEGORY_ID', category.parent_id)
          } else {
            state.category2 = []
            commit('SET_CATEGORY_ID1', category.parent_id)
          }
        })
      })
      .catch((err) => {
        console.log(err)
      })
  },
  PutCategory ({commit, state}, category) {
    Putcategory(category)
      .then(response => {
        getcategory()
        .then(r => r.data)
        .then(category_name => {
          commit('SET_CATEGORY', category_name)
          if(state.categoryAdd === 0) {
            state.category1 = []
            commit('SET_CATEGORY_ID', state.categoryparent_id)
          } else {
            state.category2 = []
            commit('SET_CATEGORY_ID1', state.categoryparent_id1)
          }
        })
      })
  },
  deletecategory ({commit, state}, category) {
    if(state.categoryAdd === 0) {
      Deletecategory(state.categoryparent_id, category.id)
        .then(rep => {
          getcategory()
            .then(r => r.data)
            .then(category_name => {
              commit('SET_CATEGORY', category_name)
              state.category1 = []
              commit('SET_CATEGORY_ID', state.categoryparent_id)
            })
        })
    } else {
      Deletecategory(state.categoryparent_id1, category.id)
      .then(rep => {
        getcategory()
          .then(r => r.data)
          .then(category_name => {
            commit('SET_CATEGORY', category_name)
            state.category2 = []
            commit('SET_CATEGORY_ID1', state.categoryparent_id1)
          })
        })
    }
  }
}
