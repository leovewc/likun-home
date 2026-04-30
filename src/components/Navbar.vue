<script setup>
import { onMounted, onUnmounted, ref } from 'vue'
import { siteContent, toggleLanguage } from '../data/site'

const isScrolled = ref(false)

const updateScrollState = () => {
  isScrolled.value = window.scrollY > 16
}

onMounted(() => {
  updateScrollState()
  window.addEventListener('scroll', updateScrollState, { passive: true })
})

onUnmounted(() => {
  window.removeEventListener('scroll', updateScrollState)
})
</script>

<template>
  <header class="navbar-wrap" :class="{ 'is-scrolled': isScrolled }">
    <RouterLink class="brand-lockup" to="/" aria-label="LINKUN Home">
      <span class="brand-glyph">L</span>
      <span class="brand-copy">
        <strong>{{ siteContent.profile.handle }}</strong>
        <small>{{ siteContent.profile.shortTitle }}</small>
      </span>
    </RouterLink>

    <nav class="nav-glass" aria-label="Primary navigation">
      <template v-for="item in siteContent.nav" :key="item.href || item.to">
        <a
          v-if="item.href"
          class="nav-link"
          :href="item.href"
          target="_blank"
          rel="noreferrer"
        >
          {{ item.label }}
        </a>
        <RouterLink v-else class="nav-link" :to="item.to">
          {{ item.label }}
        </RouterLink>
      </template>
    </nav>

    <div class="nav-actions">
      <button class="language-toggle" type="button" @click="toggleLanguage">
        {{ siteContent.nextLanguageLabel }}
      </button>
      <a
        class="nav-github glass-button compact"
        :href="siteContent.profile.github"
        target="_blank"
        rel="noreferrer"
      >
        {{ siteContent.common.github }}
      </a>
    </div>
  </header>
</template>
