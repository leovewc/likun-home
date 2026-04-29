<script setup>
import GlassCard from './GlassCard.vue'
import { siteContent } from '../data/site'

defineProps({
  project: {
    type: Object,
    required: true,
  },
})
</script>

<template>
  <GlassCard as="article" tone="project" class="project-card">
    <div class="card-topline">
      <span>{{ project.category }}</span>
      <em>{{ project.status }}</em>
    </div>

    <h3>{{ project.title }}</h3>
    <p>{{ project.description }}</p>

    <div class="tag-cloud">
      <span v-for="tag in project.tags" :key="tag">{{ tag }}</span>
    </div>

    <div class="card-actions">
      <RouterLink class="glass-button compact primary" :to="project.demo">
        {{ siteContent.common.viewDetails }}
      </RouterLink>
      <a class="glass-button compact ghost" :href="project.github" target="_blank" rel="noreferrer">
        {{ siteContent.common.github }}
      </a>
    </div>
  </GlassCard>
</template>
