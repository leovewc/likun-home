<script setup>
import GlassCard from '../components/GlassCard.vue'
import { siteContent } from '../data/site'
</script>

<template>
  <div class="page">
    <section class="page-hero">
      <p class="eyebrow">{{ siteContent.aboutPage.eyebrow }}</p>
      <h1>{{ siteContent.aboutPage.title }}</h1>
      <p>{{ siteContent.aboutPage.text }}</p>
    </section>

    <section class="about-grid section-block first-section">
      <GlassCard as="article" tone="about">
        <p class="eyebrow">{{ siteContent.aboutPage.cards[0].eyebrow }}</p>
        <h2>{{ siteContent.aboutPage.cards[0].title }}</h2>
        <p>{{ siteContent.aboutPage.cards[0].text }}</p>
      </GlassCard>

      <GlassCard as="article" tone="about">
        <p class="eyebrow">{{ siteContent.aboutPage.cards[1].eyebrow }}</p>
        <h2>{{ siteContent.aboutPage.cards[1].title }}</h2>
        <p>{{ siteContent.aboutPage.cards[1].text }}</p>
      </GlassCard>

      <GlassCard as="article" tone="about">
        <p class="eyebrow">{{ siteContent.aboutPage.cards[2].eyebrow }}</p>
        <h2>{{ siteContent.aboutPage.cards[2].title }}</h2>
        <div class="tag-cloud">
          <span v-for="area in siteContent.focusAreas" :key="area">{{ area }}</span>
        </div>
      </GlassCard>

      <GlassCard as="article" tone="about">
        <p class="eyebrow">{{ siteContent.aboutPage.cards[3].eyebrow }}</p>
        <h2>{{ siteContent.aboutPage.cards[3].title }}</h2>
        <p>
          {{ siteContent.aboutPage.cards[3].emailLabel }}:
          <a :href="`mailto:${siteContent.profile.email}`">{{ siteContent.profile.email }}</a>
        </p>
        <p>
          {{ siteContent.aboutPage.cards[3].githubLabel }}:
          <a :href="siteContent.profile.github" target="_blank" rel="noreferrer">
            {{ siteContent.profile.github }}
          </a>
        </p>
      </GlassCard>
    </section>
  </div>
</template>
