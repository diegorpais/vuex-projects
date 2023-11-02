const state = {
  count: 0,
}

const getters = {
  getCount: state => state.count,
}

const mutations = {
  increment(state) {
    state.count++
  },

  decrement(state) {
    state.count--
  },
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
}