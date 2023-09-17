<template>
  <Header />
  <main class="main">
      <router-view/>
  </main>
  <Footer />
</template>

<style lang="scss">
</style>
<script setup>
import Header from "@/components/app/Header.vue";
import Footer from "@/components/app/Footer.vue";
</script>