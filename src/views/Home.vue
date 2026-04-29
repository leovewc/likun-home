<script setup>
import { computed } from 'vue'
import GlassCard from '../components/GlassCard.vue'
import HeroSection from '../components/HeroSection.vue'
import ProjectCard from '../components/ProjectCard.vue'
import ReleaseCard from '../components/ReleaseCard.vue'
import { siteContent } from '../data/site'

const featuredProjects = computed(() => siteContent.value.projects.slice(0, 4))
const releasePreview = computed(() => siteContent.value.releases.slice(0, 3))
</script>

<template>
  <div class="page page-home">
    <HeroSection />

    <section class="section-block">
      <div class="section-heading split">
        <div>
          <p class="eyebrow">{{ siteContent.home.featuredEyebrow }}</p>
          <h2>{{ siteContent.home.featuredTitle }}</h2>
        </div>
        <RouterLink class="text-link" to="/projects">{{ siteContent.home.allProjects }}</RouterLink>
      </div>

      <div class="project-grid">
        <ProjectCard v-for="project in featuredProjects" :key="project.title" :project="project" />
      </div>
    </section>

    <section class="section-block">
      <div class="section-heading">
        <p class="eyebrow">{{ siteContent.home.skillsEyebrow }}</p>
        <h2>{{ siteContent.home.skillsTitle }}</h2>
      </div>

      <div class="skill-grid">
        <GlassCard v-for="group in siteContent.skillGroups" :key="group.title" as="article" tone="skill">
          <h3>{{ group.title }}</h3>
          <div class="tag-cloud">
            <span v-for="item in group.items" :key="item">{{ item }}</span>
          </div>
        </GlassCard>
      </div>
    </section>

    <section class="section-block">
      <div class="section-heading split">
        <div>
          <p class="eyebrow">{{ siteContent.home.releasesEyebrow }}</p>
          <h2>{{ siteContent.home.releasesTitle }}</h2>
        </div>
        <RouterLink class="text-link" to="/publish">
          {{ siteContent.home.downloadCenter }}
        </RouterLink>
      </div>

      <div class="release-preview-grid">
        <ReleaseCard v-for="release in releasePreview" :key="release.title" :release="release" />
      </div>
    </section>

    <section class="contact-section">
      <GlassCard tone="contact" class="contact-panel">
        <div>
          <p class="eyebrow">{{ siteContent.home.contactEyebrow }}</p>
          <h2>{{ siteContent.home.contactTitle }}</h2>
          <p>{{ siteContent.home.contactText }}</p>
        </div>

        <div class="contact-links">
          <a class="glass-button primary" :href="`mailto:${siteContent.profile.email}`">
            {{ siteContent.profile.email }}
          </a>
          <a class="glass-button" :href="siteContent.profile.github" target="_blank" rel="noreferrer">
            {{ siteContent.common.github }}
          </a>
          <RouterLink class="glass-button ghost" to="/blog">
            {{ siteContent.common.blog }}
          </RouterLink>
        </div>
      </GlassCard>
    </section>
  </div>
</template>
