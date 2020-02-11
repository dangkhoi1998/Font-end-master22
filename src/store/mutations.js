// https://vuex.vuejs.org/en/mutations.html

export default {
  SET_COINS (state, coins) {
    state.coins = coins
  },
  SET_CATEGORY (state, category_name) { 
    // console.log('Khimmmm', state.category_id)
    for(const i in category_name) {
      if(category_name[i]['parent_id'] === null) {
        state.category_name.push(Object.assign({}, category_name[i]))
      }
    }
  }
}
