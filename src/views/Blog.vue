<script setup>
import AnimatedSection from '../components/AnimatedSection.vue'
import GlassCard from '../components/GlassCard.vue'
import { siteContent } from '../data/site'
</script>

<template>
  <div class="page">
    <section
      v-motion
      class="page-hero"
      :initial="{ opacity: 0, y: 24, filter: 'blur(10px)' }"
      :enter="{
        opacity: 1,
        y: 0,
        filter: 'blur(0px)',
        transition: { duration: 680, delay: 80 },
      }"
    >
      <p class="eyebrow">{{ siteContent.blogPage.eyebrow }}</p>
      <h1>{{ siteContent.blogPage.title }}</h1>
      <p>{{ siteContent.blogPage.text }}</p>
    </section>

    <AnimatedSection class="section-block first-section">
      <div class="blog-grid">
        <GlassCard v-for="post in siteContent.blogPage.posts" :key="post.title" as="article" tone="blog">
          <p class="eyebrow">{{ post.tag }}</p>
          <h2>{{ post.title }}</h2>
          <p>{{ post.summary }}</p>
          <RouterLink class="text-link" to="/blog">{{ siteContent.common.comingSoon }}</RouterLink>
        </GlassCard>
      </div>
    </AnimatedSection>
  </div>
</template>
