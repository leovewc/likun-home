<script setup>
import GlassCard from './GlassCard.vue'

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
        <dt>Version</dt>
        <dd>{{ release.version }}</dd>
      </div>
      <div>
        <dt>Platform</dt>
        <dd>{{ release.platform }}</dd>
      </div>
    </dl>

    <p>{{ release.description }}</p>

    <div class="card-actions">
      <a class="glass-button compact primary" :href="release.download">Download</a>
      <a class="glass-button compact ghost" :href="release.github" target="_blank" rel="noreferrer">
        GitHub
      </a>
      <RouterLink class="glass-button compact" :to="release.details">Details</RouterLink>
    </div>
  </GlassCard>
</template>
