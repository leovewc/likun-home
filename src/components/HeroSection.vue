<script setup>
import { siteContent } from '../data/site'
</script>

<template>
  <section class="hero-section">
    <div class="hero-content">
      <p class="eyebrow">{{ siteContent.hero.eyebrow }}</p>
      <h1>{{ siteContent.profile.headline }}</h1>
      <p class="hero-lede">{{ siteContent.profile.subheadline }}</p>

      <div class="hero-actions">
        <RouterLink class="glass-button primary" to="/projects">
          {{ siteContent.hero.actions.projects }}
        </RouterLink>
        <RouterLink class="glass-button" to="/publish">
          {{ siteContent.hero.actions.releases }}
        </RouterLink>
        <a class="glass-button" :href="siteContent.profile.resume">
          {{ siteContent.hero.actions.profile }}
        </a>
        <a class="glass-button ghost" :href="siteContent.profile.github" target="_blank" rel="noreferrer">
          {{ siteContent.common.github }}
        </a>
      </div>

      <div class="hero-metrics">
        <article v-for="metric in siteContent.heroMetrics" :key="metric.value" class="metric-glass">
          <strong>{{ metric.value }}</strong>
          <span>{{ metric.label }}</span>
        </article>
      </div>
    </div>

    <div class="hero-liquid" aria-label="Liquid glass brand visual">
      <div class="liquid-halo"></div>
      <div class="liquid-prism prism-one"></div>
      <div class="liquid-prism prism-two"></div>
      <div class="liquid-prism prism-three"></div>

      <div class="liquid-core">
        <div class="core-mark">
          <span>LINKUN</span>
        </div>
        <div class="core-rings" aria-hidden="true">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>

      <div class="signal-panel panel-top">
        <p>{{ siteContent.hero.panels.topEyebrow }}</p>
        <strong>{{ siteContent.hero.panels.topTitle }}</strong>
        <span>{{ siteContent.hero.panels.topText }}</span>
      </div>

      <div class="signal-panel panel-bottom">
        <p>{{ siteContent.hero.panels.bottomEyebrow }}</p>
        <strong>{{ siteContent.hero.panels.bottomTitle }}</strong>
        <span>{{ siteContent.hero.panels.bottomText }}</span>
      </div>
    </div>
  </section>
</template>
