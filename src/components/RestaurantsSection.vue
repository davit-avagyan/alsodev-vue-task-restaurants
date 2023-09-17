<template>
  <section class="restaurants">
    <div class="section-heading">
      <h2 class="section-title">Рестораны</h2>
      <SearchBar
        :classes="['input', 'input-search']"
        label-class="search"
        placeholder="Поиск блюд и ресторанов"
      />
    </div>
    <Suspense>
      <RestaurantsCard />
    </Suspense>
  </section>
</template>

<script setup>

import SearchBar from "@/components/app/SearchBar.vue";
import RestaurantsCard from "@/components/RestaurantsCard.vue";
</script>
