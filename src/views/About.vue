<script setup>
import GlassCard from '../components/GlassCard.vue'
import { focusAreas, profile } from '../data/site'
</script>

<template>
  <div class="page">
    <section class="page-hero">
      <p class="eyebrow">About</p>
      <h1>LINKUN is an independent software company for intelligent business systems.</h1>
      <p>
        We work at the intersection of AI engineering, full-stack product development,
        cloud deployment, and polished user-facing software.
      </p>
    </section>

    <section class="about-grid section-block first-section">
      <GlassCard as="article" tone="about">
        <p class="eyebrow">Background</p>
        <h2>Practical engineering with a product mindset.</h2>
        <p>
          Our work focuses on turning technical ideas into usable software: clean interfaces,
          reliable services, useful automation, and release flows that make a project feel real.
        </p>
      </GlassCard>

      <GlassCard as="article" tone="about">
        <p class="eyebrow">Engineering Interests</p>
        <h2>AI systems, web platforms, and desktop products.</h2>
        <p>
          LINKUN is especially interested in computer vision, AI-assisted workflows, full-stack
          architecture, cloud operations, and interaction-heavy applications.
        </p>
      </GlassCard>

      <GlassCard as="article" tone="about">
        <p class="eyebrow">Current Focus</p>
        <h2>Building a portfolio of intelligent application systems.</h2>
        <div class="tag-cloud">
          <span v-for="area in focusAreas" :key="area">{{ area }}</span>
        </div>
      </GlassCard>

      <GlassCard as="article" tone="about">
        <p class="eyebrow">Contact</p>
        <h2>Open to collaboration and engineering conversations.</h2>
        <p>
          Email: <a :href="`mailto:${profile.email}`">{{ profile.email }}</a>
        </p>
        <p>
          GitHub:
          <a :href="profile.github" target="_blank" rel="noreferrer">{{ profile.github }}</a>
        </p>
      </GlassCard>
    </section>
  </div>
</template>
