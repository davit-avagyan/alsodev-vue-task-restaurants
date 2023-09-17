import { createStore } from 'vuex'
import Partners from "@/store/partners"
import Menu from "@/store/menu"
import Auth from "@/store/auth"
import Cart from "@/store/cart"

export default createStore({
  state: {
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    Partners,
    Menu,
    Auth,
    Cart
  }
})
