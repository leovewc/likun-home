<script setup>
import { watchEffect } from 'vue'
import { useRoute } from 'vue-router'
import Navbar from './components/Navbar.vue'
import SiteFooter from './components/SiteFooter.vue'
import { siteContent } from './data/site'

const route = useRoute()

watchEffect(() => {
  document.title = siteContent.value.pageTitles[route.name] || 'LINKUN'
})
</script>

<template>
  <div class="site-shell">
    <div class="ambient-scene" aria-hidden="true">
      <div class="ambient-grid"></div>
      <div class="ambient-wash wash-a"></div>
      <div class="ambient-wash wash-b"></div>
      <div class="ambient-wash wash-c"></div>
    </div>

    <Navbar />

    <main class="site-main">
      <RouterView />
    </main>

    <SiteFooter />
  </div>
</template>
