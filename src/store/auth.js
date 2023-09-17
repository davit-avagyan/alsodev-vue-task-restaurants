export default {
  state: () => ({
    modalOpen: false,
    isAuth: false
  }),
  getters: {
    ifUserAuth: (state) => state.isAuth,
    ifModalOpen: (state) => state.modalOpen
  },
  mutations: {
    SET_MODAL(state) {
      state.modalOpen = !state.modalOpen
    },
    SET_AUTH(state) {
      state.isAuth = !state.isAuth
    }
  },
  actions: {
    changeModal({commit}) {
      commit('SET_MODAL')
    },
    login({dispatch, commit}) {
      commit('SET_AUTH')
      dispatch("changeModal")
    }
  }
}