<script setup>
import GlassCard from './GlassCard.vue'
import { siteContent } from '../data/site'

defineProps({
  release: {
    type: Object,
    required: true,
  },
})
</script>

<template>
  <GlassCard as="article" tone="release" class="release-card">
    <div class="release-heading">
      <div>
        <p class="release-type">{{ release.type }}</p>
        <h3>{{ release.title }}</h3>
      </div>
      <span class="status-pill">{{ release.status }}</span>
    </div>

    <dl class="release-meta">
      <div>
        <dt>{{ siteContent.common.version }}</dt>
        <dd>{{ release.version }}</dd>
      </div>
      <div>
        <dt>{{ siteContent.common.platform }}</dt>
        <dd>{{ release.platform }}</dd>
      </div>
    </dl>

    <p>{{ release.description }}</p>

    <div class="card-actions">
      <a class="glass-button compact primary" :href="release.download">
        {{ siteContent.common.download }}
      </a>
      <a class="glass-button compact ghost" :href="release.github" target="_blank" rel="noreferrer">
        {{ siteContent.common.github }}
      </a>
      <RouterLink class="glass-button compact" :to="release.details">
        {{ siteContent.common.details }}
      </RouterLink>
    </div>
  </GlassCard>
</template>
