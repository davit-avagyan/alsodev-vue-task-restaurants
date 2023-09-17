<template>
  <div class="buttons">
    <span class="user-name"></span>
    <button
      v-if="!ifLoggedIn"
      @click="showAuthModal"
      class="button button-primary button-auth"
    >
      <span class="button-auth-svg"></span>
      <span class="button-text">Войти</span>
    </button>
    <button
      @click="openCartModal"
      class="button button-cart" id="cart-button"
    >
      <span class="button-cart-svg"></span>
      <span class="button-text">Корзина <span v-if="cartCount" class="cart-count">{{ cartCount }}</span></span>
    </button>
    <button
      v-if="ifLoggedIn"
      class="button button-primary button-out"
    >
      <span class="button-text">Выйти</span>
      <span class="button-out-svg"></span>
    </button>
  </div>

<!--  To Show of two ways how we can open and close modals -->
  <AuthModal v-if="showModal" />

  <CartModal />
</template>

<script setup>
import {useStore} from "vuex";
import {computed} from "vue";
import AuthModal from "@/components/modal/AuthModal.vue"
import CartModal from "@/components/modal/CartModal.vue";

const authStore = useStore()
const ifLoggedIn = computed(() => authStore.getters.ifUserAuth)
const showModal = computed(() => authStore.getters.ifModalOpen)
const cartCount = computed(() => authStore.getters.itemsCount)

const showAuthModal = () => {
  authStore.dispatch('changeModal')
}

const openCartModal = () => {
  authStore.dispatch('changeCartModal')
}
</script>