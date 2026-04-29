<script setup>
import { siteContent, toggleLanguage } from '../data/site'
</script>

<template>
  <header class="navbar-wrap">
    <RouterLink class="brand-lockup" to="/" aria-label="LINKUN Home">
      <span class="brand-glyph">L</span>
      <span class="brand-copy">
        <strong>{{ siteContent.profile.handle }}</strong>
        <small>{{ siteContent.profile.shortTitle }}</small>
      </span>
    </RouterLink>

    <nav class="nav-glass" aria-label="Primary navigation">
      <RouterLink v-for="item in siteContent.nav" :key="item.to" class="nav-link" :to="item.to">
        {{ item.label }}
      </RouterLink>
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
