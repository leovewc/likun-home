<script setup>
import GlassCard from '../components/GlassCard.vue'

const posts = [
  {
    title: 'Designing AI features that feel practical',
    summary: 'Notes on moving from impressive demos to useful software workflows.',
    tag: 'AI Product',
  },
  {
    title: 'Shipping desktop software with a web stack',
    summary: 'A short field note on Vue, Vite, Electron, and release packaging.',
    tag: 'Engineering',
  },
  {
    title: 'Cloud deployment as a product skill',
    summary: 'Why deployment, monitoring, and data flow matter for independent builders.',
    tag: 'Cloud',
  },
]
</script>

<template>
  <div class="page">
    <section class="page-hero">
      <p class="eyebrow">Blog</p>
      <h1>Field notes from building AI software products.</h1>
      <p>
        A future home for concise engineering notes, release writeups, and practical lessons from
        building intelligent applications.
      </p>
    </section>

    <section class="section-block first-section">
      <div class="blog-grid">
        <GlassCard v-for="post in posts" :key="post.title" as="article" tone="blog">
          <p class="eyebrow">{{ post.tag }}</p>
          <h2>{{ post.title }}</h2>
          <p>{{ post.summary }}</p>
          <RouterLink class="text-link" to="/blog">Coming Soon</RouterLink>
        </GlassCard>
      </div>
    </section>
  </div>
</template>
