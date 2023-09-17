<template>
  <div class="container">
    <header class="header">
      <LogoSection />
      <SearchBar
        :classes="['input', 'input-address']"
        label-class="address"
      />
      <AuthButtons />
    </header>
  </div>
</template>

<script setup>
import AuthButtons from "@/components/app/AuthButtons.vue";
import SearchBar from "@/components/app/SearchBar.vue";
import LogoSection from "@/components/app/LogoSection.vue";
</script>