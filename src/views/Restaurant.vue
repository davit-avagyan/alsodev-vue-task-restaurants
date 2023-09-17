<template>
  <div class="container">
    <section class="menu">
      <div class="section-heading">
        <div>
          <h2 class="section-title restaurant-title">{{ partner.name }}</h2>
          <div class="card-info">
            <div class="rating">
              {{ partner.stars }}
            </div>
            <div class="price">От {{ partner.price }} ₽</div>
            <div class="category">{{ partner.kitchen }}</div>
          </div>
        </div>
        <!-- /.card-info -->

        <!-- sorting -->
        <div class="section-sorting">
          <button
            class="button"
            :class="{'button-primary': sorted === 'DESC'}"
            @click="changeSorted('DESC')"
          >
            Сначала дорогие
          </button>
          <button
            class="button"
            :class="{'button-primary': sorted === 'ASC'}"
            @click="changeSorted('ASC')"
          >
            Сначала дешевые
          </button>
        </div>
      </div>
      <RestaurantCard :menus="menus.menu" />
      <!-- /.cards -->
    </section>
  </div>
</template>

<script setup>
import { useStore } from "vuex"
import {computed, ref} from "vue"
import { useRoute } from "vue-router"
import RestaurantCard from "@/components/RestaurantCard.vue";

const menuStore = useStore()
const route = useRoute()

const partner = computed(() => menuStore.getters.getPartnersById(+route.params.id))
const menus = computed(() => menuStore.getters.getMenuById(+route.params.id))
const sorted = computed(() => menuStore.getters.getSorted)

const changeSorted = order => {
  menuStore.dispatch('changeSorted', order)
}
</script>