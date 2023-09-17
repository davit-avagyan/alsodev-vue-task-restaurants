export default {
  state: () => ({
    isCartModalOpen: false,
    items: []
  }),
  getters: {
    ifCartModalOpen: (state) => state.isCartModalOpen,
    getItems: (state) => state.items,
    itemsCount: state => {
      const items = localStorage.getItem('cart')
      if (items && JSON.parse(items).length) {
        state.items = JSON.parse(items)
      }
      return state.items.length
    },
    totalSum: state => state.items.reduce((sum, i) => sum += (+i.item.price * i.count), 0)
  },
  mutations: {
    SET_CART_MODAL(state) {
      state.isCartModalOpen = !state.isCartModalOpen
    },
    ADD_ITEM(state, item) {
      state.items.push(item)
      localStorage.setItem('cart', JSON.stringify(state.items))
    },
    DELETE_ITEM(state, item) {
      state.items = state.items.filter(i => JSON.stringify(i.item) !== JSON.stringify(item.item))
      localStorage.setItem('cart', JSON.stringify(state.items))
    },
    UPDATE_ITEM(state, item) {
      state.items = state.items.map(i => {
        if (JSON.stringify(i.item) === JSON.stringify(item.item)) {
          i.count = item.count
        }
        return i
      })
      localStorage.setItem('cart', JSON.stringify(state.items))
    }
  },
  actions: {
    changeCartModal({commit}) {
      commit('SET_CART_MODAL')
    },
    async addItem({dispatch, commit}, item) {
      const ifExist = await dispatch('ifItemExists', item)

      if (ifExist) {
        return false
      }

      const addedItem = {
        item: {...item},
        count: 1
      }
      commit('ADD_ITEM', addedItem)
    },
    async incrementItem({dispatch, commit, getters}, item) {
      const updatedItem = await dispatch('findItem', item)
      if (!updatedItem) {
        return false
      }

      updatedItem.count++
      commit('UPDATE_ITEM', updatedItem)
    },
    async decrementItem({dispatch, commit, getters}, item) {
      const updatedItem = await dispatch('findItem', item)
      if (!updatedItem) {
        return
      }

      if(updatedItem.count === 1) {
        commit('DELETE_ITEM', updatedItem)
        return
      }

      updatedItem.count--
      commit('UPDATE_ITEM', updatedItem)
    },
    ifItemExists({ getters }, item) {
      if (!getters.getItems.length) {
        return false
      }
      const found = getters.getItems.findIndex(i => JSON.stringify(i.item) === JSON.stringify(item))
      return found >= 0
    },
    findItem({getters}, item) {
      return getters.getItems.find(i => JSON.stringify(i) === JSON.stringify(item))
    }
  }
}