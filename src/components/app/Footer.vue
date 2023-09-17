<template>
  <footer class="footer">
    <div class="container">
      <div class="footer-block">
        <LogoSection />
        <NavBar />
        <SocialLinks />
      </div>
    </div>
  </footer>
</template>

<script setup>
import LogoSection from "@/components/app/LogoSection.vue";
import NavBar from "@/components/app/NavBar.vue";
import SocialLinks from "@/components/app/SocialLinks.vue";
</script>