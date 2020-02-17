// https://vuex.vuejs.org/en/mutations.html

export default {
  SET_COINS (state, coins) {
    state.coins = coins
  },
  SET_CATEGORY (state, category_name) {
    state.category = category_name
    state.category_name = []
    for(const i in category_name) {
      if(category_name[i]['parent_id'] === null) {
        state.category_name.push(Object.assign({}, category_name[i]))
      }
    }
  },
  SET_CATEGORY_ID(state, n) {
    state.categoryparent_id = n
    for(const i in state.category) {
      for(const j in state.category[i]['parent_id']) {
        if(n === state.category[i]['parent_id'][j]) {
          state.category1.push(Object.assign({}, state.category[i]))
        }
      }
    }
  },
  SET_CATEGORY_ID1(state, n) {
    state.categoryparent_id1 = n
    for(const i in state.category) {
      for(const j in state.category[i]['parent_id']) {
        if(n === state.category[i]['parent_id'][j]) {
          state.category2.push(Object.assign({}, state.category[i]))
        }
      }
    }
  }
}
