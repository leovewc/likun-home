<script setup>
import { profile } from '../data/site'

const navItems = [
  { label: 'Home', to: '/' },
  { label: 'Projects', to: '/projects' },
  { label: 'Publish', to: '/publish' },
  { label: 'Blog', to: '/blog' },
  { label: 'About', to: '/about' },
]
</script>

<template>
  <header class="navbar-wrap">
    <RouterLink class="brand-lockup" to="/" aria-label="LINKUN Home">
      <span class="brand-glyph">L</span>
      <span class="brand-copy">
        <strong>{{ profile.handle }}</strong>
        <small>{{ profile.shortTitle }}</small>
      </span>
    </RouterLink>

    <nav class="nav-glass" aria-label="Primary navigation">
      <RouterLink v-for="item in navItems" :key="item.to" class="nav-link" :to="item.to">
        {{ item.label }}
      </RouterLink>
    </nav>

    <a class="nav-github glass-button compact" :href="profile.github" target="_blank" rel="noreferrer">
      GitHub
    </a>
  </header>
</template>
