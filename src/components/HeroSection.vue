<script setup>
import { heroMetrics, profile } from '../data/site'
</script>

<template>
  <section class="hero-section">
    <div class="hero-content">
      <p class="eyebrow">LINKUN / AI Software Company</p>
      <h1>{{ profile.headline }}</h1>
      <p class="hero-lede">{{ profile.subheadline }}</p>

      <div class="hero-actions">
        <RouterLink class="glass-button primary" to="/projects">View Projects</RouterLink>
        <RouterLink class="glass-button" to="/publish">Product Releases</RouterLink>
        <a class="glass-button" :href="profile.resume">Company Profile</a>
        <a class="glass-button ghost" :href="profile.github" target="_blank" rel="noreferrer">
          GitHub
        </a>
      </div>

      <div class="hero-metrics">
        <article v-for="metric in heroMetrics" :key="metric.value" class="metric-glass">
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
        <p>Adaptive Layer</p>
        <strong>AI Systems</strong>
        <span>Vision, automation, inference, internal tools.</span>
      </div>

      <div class="signal-panel panel-bottom">
        <p>Product Surface</p>
        <strong>Web / Cloud / Desktop</strong>
        <span>Interfaces and release workflows for real operations.</span>
      </div>
    </div>
  </section>
</template>
