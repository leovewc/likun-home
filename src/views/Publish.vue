<script setup>
import AnimatedSection from '../components/AnimatedSection.vue'
import ReleaseCard from '../components/ReleaseCard.vue'
import GlassCard from '../components/GlassCard.vue'
import { siteContent } from '../data/site'
</script>

<template>
  <div class="page">
    <section
      v-motion
      class="page-hero publish-hero"
      :initial="{ opacity: 0, y: 24, filter: 'blur(10px)' }"
      :enter="{
        opacity: 1,
        y: 0,
        filter: 'blur(0px)',
        transition: { duration: 680, delay: 80 },
      }"
    >
      <p class="eyebrow">{{ siteContent.publishPage.eyebrow }}</p>
      <h1>{{ siteContent.publishPage.title }}</h1>
      <p>{{ siteContent.publishPage.text }}</p>
    </section>

    <AnimatedSection class="release-layout">
      <GlassCard tone="feature" class="download-feature">
        <p class="eyebrow">{{ siteContent.publishPage.latestEyebrow }}</p>
        <h2>{{ siteContent.publishPage.latestTitle }}</h2>
        <p>{{ siteContent.publishPage.latestText }}</p>
        <div class="feature-meta">
          <span>Windows</span>
          <span>Beta</span>
          <span>Electron</span>
        </div>
        <a class="glass-button primary" href="/downloads/LkPOS-v1.0.0.zip">
          {{ siteContent.publishPage.downloadLatest }}
        </a>
      </GlassCard>

      <div class="release-list">
        <ReleaseCard
          v-for="(release, index) in siteContent.releases"
          :key="release.title"
          :release="release"
          :index="index"
        />
      </div>
    </AnimatedSection>
  </div>
</template>
