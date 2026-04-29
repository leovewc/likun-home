<script setup>
import ReleaseCard from '../components/ReleaseCard.vue'
import GlassCard from '../components/GlassCard.vue'
import { releases } from '../data/site'
</script>

<template>
  <div class="page">
    <section class="page-hero publish-hero">
      <p class="eyebrow">Download Center</p>
      <h1>Product Releases</h1>
      <p>Download software builds, demos, and portfolio resources.</p>
    </section>

    <section class="release-layout">
      <GlassCard tone="feature" class="download-feature">
        <p class="eyebrow">Latest Build</p>
        <h2>LkPOS Desktop v1.0.0</h2>
        <p>
          A beta Windows release for a practical desktop POS workflow. Download links are
          preserved as placeholders until the final build assets are uploaded.
        </p>
        <div class="feature-meta">
          <span>Windows</span>
          <span>Beta</span>
          <span>Electron</span>
        </div>
        <a class="glass-button primary" href="/downloads/LkPOS-v1.0.0.zip">Download Latest</a>
      </GlassCard>

      <div class="release-list">
        <ReleaseCard v-for="release in releases" :key="release.title" :release="release" />
      </div>
    </section>
  </div>
</template>
