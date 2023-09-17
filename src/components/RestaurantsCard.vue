<template>
  <div
    v-if="partners.length"
    class="cards cards-restaurants"
  >
    <div
     v-for="partner in partners"
     :key="partner.id"
     class="card card-restaurant"
     @click.prevent="router.push({ name: 'restaurant', params: { id: partner.id } })"
    >
      <img
        :src="getImgUrl(partner.image)"
        alt="image"
        class="card-image"
      />
      <div class="card-text">
        <div class="card-heading">
          <h3 class="card-title">{{ partner.name }}</h3>
          <span class="card-tag tag">{{ partner.time_of_delivery }} мин</span>
        </div>
        <!-- /.card-heading -->
        <div class="card-info">
          <div class="rating">
            {{ partner.stars }}
          </div>
          <div class="price">От {{ partner.price }} ₽</div>
          <div class="category">{{ partner.kitchen }}</div>
        </div>
        <!-- /.card-info -->
      </div>
      <!-- /.card-text -->
    </div>
    <!-- /.card -->
  </div>
</template>

<script setup>
import { computed } from "vue"
import { useStore } from "vuex"
import router from "@/router";

const partnersStore = useStore()

const partners = computed(() => partnersStore.getters.getPartners)
const getImgUrl = img => require(`@/assets/img/${img}`)

</script>