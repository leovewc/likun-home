<script setup>
import { computed } from 'vue'
import AnimatedSection from '../components/AnimatedSection.vue'
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

    <AnimatedSection class="section-block">
      <div
        v-motion
        class="section-heading split"
        :initial="{ opacity: 0, y: 22, filter: 'blur(8px)' }"
        :visible-once="{
          opacity: 1,
          y: 0,
          filter: 'blur(0px)',
          transition: { duration: 620, delay: 80 },
        }"
      >
        <div>
          <p class="eyebrow">{{ siteContent.home.featuredEyebrow }}</p>
          <h2>{{ siteContent.home.featuredTitle }}</h2>
        </div>
        <RouterLink class="text-link" to="/projects">{{ siteContent.home.allProjects }}</RouterLink>
      </div>

      <div class="project-grid">
        <ProjectCard
          v-for="(project, index) in featuredProjects"
          :key="project.title"
          :project="project"
          :index="index"
        />
      </div>
    </AnimatedSection>

    <AnimatedSection class="section-block" :delay="80">
      <div
        v-motion
        class="section-heading"
        :initial="{ opacity: 0, y: 22, filter: 'blur(8px)' }"
        :visible-once="{
          opacity: 1,
          y: 0,
          filter: 'blur(0px)',
          transition: { duration: 620, delay: 120 },
        }"
      >
        <p class="eyebrow">{{ siteContent.home.skillsEyebrow }}</p>
        <h2>{{ siteContent.home.skillsTitle }}</h2>
      </div>

      <div class="skill-grid">
        <GlassCard
          v-for="(group, index) in siteContent.skillGroups"
          :key="group.title"
          v-motion
          as="article"
          tone="skill"
          :initial="{ opacity: 0, y: 26, scale: 0.985, filter: 'blur(8px)' }"
          :visible-once="{
            opacity: 1,
            y: 0,
            scale: 1,
            filter: 'blur(0px)',
            transition: { duration: 560, delay: index * 55 },
          }"
        >
          <h3>{{ group.title }}</h3>
          <div class="tag-cloud">
            <span v-for="item in group.items" :key="item">{{ item }}</span>
          </div>
        </GlassCard>
      </div>
    </AnimatedSection>

    <AnimatedSection class="section-block" :delay="110">
      <div
        v-motion
        class="section-heading split"
        :initial="{ opacity: 0, y: 22, filter: 'blur(8px)' }"
        :visible-once="{
          opacity: 1,
          y: 0,
          filter: 'blur(0px)',
          transition: { duration: 620, delay: 120 },
        }"
      >
        <div
          v-motion
          :initial="{ opacity: 0, y: 22, filter: 'blur(8px)' }"
          :visible-once="{
            opacity: 1,
            y: 0,
            filter: 'blur(0px)',
            transition: { duration: 620, delay: 80 },
          }"
        >
          <p class="eyebrow">{{ siteContent.home.releasesEyebrow }}</p>
          <h2>{{ siteContent.home.releasesTitle }}</h2>
        </div>
        <RouterLink class="text-link" to="/publish">
          {{ siteContent.home.downloadCenter }}
        </RouterLink>
      </div>

      <div class="release-preview-grid">
        <ReleaseCard
          v-for="(release, index) in releasePreview"
          :key="release.title"
          :release="release"
          :index="index"
        />
      </div>
    </AnimatedSection>

    <AnimatedSection class="contact-section" :delay="120">
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
          <a class="glass-button ghost" :href="siteContent.profile.blog" target="_blank" rel="noreferrer">
            {{ siteContent.common.blog }}
          </a>
        </div>
      </GlassCard>
    </AnimatedSection>
  </div>
</template>
