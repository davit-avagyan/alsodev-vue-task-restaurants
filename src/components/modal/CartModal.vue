<template>
  <div
    v-if="showModal"
    @click.self="hideModal"
    class="modal modal-cart">
    <div class="modal-dialog">
      <div class="modal-header">
        <h3 class="modal-title">Корзина</h3>
        <button
          @click.prevent="hideModal"
          class="close"
        >
          &times;
        </button>
      </div>
      <!-- /.modal-header -->
      <div
        v-if="cartItems.length"
        class="modal-body">

        <div
          v-for="cartItem in cartItems"
          :key="cartItem.item.id"
          class="food-row"
        >
          <span class="food-name">{{ cartItem.item.name }}</span>
          <strong class="food-price">{{ cartItem.item.price }} ₽</strong>
          <div class="food-counter">
            <button
              @click="decrement(cartItem)"
              class="counter-button"
            >
              -
            </button>
            <span class="counter">{{ cartItem.count }}</span>
            <button
              @click="increment(cartItem)"
              class="counter-button"
            >
              +
            </button>
          </div>
        </div>
        <!-- /.foods-row -->
      </div>
      <div v-else>There is no any item in the cart yet!</div>
      <!-- /.modal-body -->
      <div v-if="cartItems.length" class="modal-footer">
        <span class="modal-pricetag">{{ totalSum }} ₽</span>
        <div class="footer-buttons">
          <button class="button button-primary">Оформить заказ</button>
          <button class="button clear-cart">Отмена</button>
        </div>
      </div>
      <!-- /.modal-footer -->
    </div>
    <!-- /.modal-dialog -->
  </div>
</template>

<script setup>
import { useStore } from "vuex"
import {computed} from "vue";

const cartStore = useStore()

const showModal = computed(() => cartStore.getters.ifCartModalOpen)
const totalSum = computed(() => cartStore.getters.totalSum)

const cartItems = computed(() => cartStore.getters.getItems)

const hideModal = () => cartStore.dispatch('changeCartModal')

const decrement = (item) => cartStore.dispatch('decrementItem', item)
const increment = (item) => cartStore.dispatch('incrementItem', item)
</script>