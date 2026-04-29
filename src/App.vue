<script setup>
import { watchEffect } from 'vue'
import { useRoute } from 'vue-router'
import FloatingBlob from './components/FloatingBlob.vue'
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
      <FloatingBlob variant="one" />
      <FloatingBlob variant="two" />
      <FloatingBlob variant="three" />
      <div class="ambient-grid"></div>
      <div class="neon-river river-a"></div>
      <div class="neon-river river-b"></div>
      <div class="neon-river river-c"></div>
      <div class="ambient-wash wash-a"></div>
      <div class="ambient-wash wash-b"></div>
      <div class="ambient-wash wash-c"></div>
    </div>

    <Navbar />

    <main class="site-main">
      <RouterView v-slot="{ Component }">
        <Transition name="page" mode="out-in">
          <component :is="Component" :key="$route.fullPath" />
        </Transition>
      </RouterView>
    </main>

    <SiteFooter />
  </div>
</template>
