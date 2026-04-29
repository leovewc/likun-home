<script setup>
import { computed } from 'vue'
import LiquidButton from './LiquidButton.vue'
import { siteContent } from '../data/site'

const splitHeadline = (headline) => {
  const normalized = headline.trim()
  if (!normalized) return []

  if (/[\u3400-\u9fff]/.test(normalized) && !normalized.includes(' ')) {
    const buildIndex = normalized.indexOf('构建')
    const softwareIndex = normalized.indexOf('软件')

    if (buildIndex > 0 && softwareIndex > buildIndex) {
      return [
        normalized.slice(0, buildIndex),
        normalized.slice(buildIndex, softwareIndex),
        normalized.slice(softwareIndex),
      ].filter(Boolean)
    }

    const chars = Array.from(normalized)
    const chunkSize = Math.max(3, Math.ceil(chars.length / 3))
    const chunks = []

    for (let index = 0; index < chars.length; index += chunkSize) {
      chunks.push(chars.slice(index, index + chunkSize).join(''))
    }

    return chunks
  }

  const words = normalized.split(/\s+/)
  return words.map((word, index) => (index === words.length - 1 ? word : `${word} `))
}

const headlineTokens = computed(() => splitHeadline(siteContent.value.profile.headline))
</script>

<template>
  <section class="hero-section">
    <div class="hero-content">
      <p
        v-motion
        class="eyebrow"
        :initial="{ opacity: 0, y: 18, filter: 'blur(8px)' }"
        :enter="{ opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 620 } }"
      >
        {{ siteContent.hero.eyebrow }}
      </p>
      <h1 class="stagger-title" :aria-label="siteContent.profile.headline">
        <span
          v-for="(token, index) in headlineTokens"
          :key="`${token}-${index}`"
          v-motion
          aria-hidden="true"
          :initial="{ opacity: 0, y: 36, filter: 'blur(14px)' }"
          :enter="{
            opacity: 1,
            y: 0,
            filter: 'blur(0px)',
            transition: { duration: 720, delay: 90 + index * 72 },
          }"
        >
          {{ token }}
        </span>
      </h1>
      <p
        v-motion
        class="hero-lede"
        :initial="{ opacity: 0, y: 24, filter: 'blur(10px)' }"
        :enter="{ opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 700, delay: 180 } }"
      >
        {{ siteContent.profile.subheadline }}
      </p>

      <div
        v-motion
        class="hero-actions"
        :initial="{ opacity: 0, y: 22 }"
        :enter="{ opacity: 1, y: 0, transition: { duration: 680, delay: 280 } }"
      >
        <LiquidButton variant="primary" to="/projects">
          {{ siteContent.hero.actions.projects }}
        </LiquidButton>
        <LiquidButton to="/publish">
          {{ siteContent.hero.actions.releases }}
        </LiquidButton>
        <LiquidButton :href="siteContent.profile.resume">
          {{ siteContent.hero.actions.profile }}
        </LiquidButton>
        <LiquidButton variant="ghost" :href="siteContent.profile.github" target="_blank">
          {{ siteContent.common.github }}
        </LiquidButton>
      </div>

      <div
        v-motion
        class="hero-capabilities"
        :initial="{ opacity: 0, y: 24 }"
        :enter="{ opacity: 1, y: 0, transition: { duration: 700, delay: 390 } }"
      >
        <span v-for="metric in siteContent.heroMetrics" :key="metric.value">
          <strong>{{ metric.value }}</strong>
          <small>{{ metric.label }}</small>
        </span>
      </div>
    </div>

    <div
      v-motion
      class="hero-liquid"
      aria-label="Liquid glass brand visual"
      :initial="{ opacity: 0, scale: 0.94, rotate: -2, filter: 'blur(16px)' }"
      :enter="{
        opacity: 1,
        scale: 1,
        rotate: 0,
        filter: 'blur(0px)',
        transition: { duration: 980, delay: 240 },
      }"
    >
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
