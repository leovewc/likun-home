<script setup>
import GlassCard from '../components/GlassCard.vue'
import HeroSection from '../components/HeroSection.vue'
import ProjectCard from '../components/ProjectCard.vue'
import ReleaseCard from '../components/ReleaseCard.vue'
import { profile, projects, releases, skillGroups } from '../data/site'

const featuredProjects = projects.slice(0, 4)
const releasePreview = releases.slice(0, 3)
</script>

<template>
  <div class="page page-home">
    <HeroSection />

    <section class="section-block">
      <div class="section-heading split">
        <div>
          <p class="eyebrow">Featured Projects</p>
          <h2>Product and engineering work across AI, cloud, desktop, and immersive systems.</h2>
        </div>
        <RouterLink class="text-link" to="/projects">All Projects</RouterLink>
      </div>

      <div class="project-grid">
        <ProjectCard v-for="project in featuredProjects" :key="project.title" :project="project" />
      </div>
    </section>

    <section class="section-block">
      <div class="section-heading">
        <p class="eyebrow">Skills / Tech Stack</p>
        <h2>The operating stack behind LINKUN software systems.</h2>
      </div>

      <div class="skill-grid">
        <GlassCard v-for="group in skillGroups" :key="group.title" as="article" tone="skill">
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
          <p class="eyebrow">Publish / Releases</p>
          <h2>Recent product builds, demos, and company resources.</h2>
        </div>
        <RouterLink class="text-link" to="/publish">Open Download Center</RouterLink>
      </div>

      <div class="release-preview-grid">
        <ReleaseCard v-for="release in releasePreview" :key="release.title" :release="release" />
      </div>
    </section>

    <section class="contact-section">
      <GlassCard tone="contact" class="contact-panel">
        <div>
          <p class="eyebrow">Contact</p>
          <h2>Building an AI workflow, internal platform, or operational product?</h2>
          <p>
            LINKUN works on intelligent systems, full-stack product builds, cloud deployment,
            and release-ready software for focused teams.
          </p>
        </div>

        <div class="contact-links">
          <a class="glass-button primary" :href="`mailto:${profile.email}`">{{ profile.email }}</a>
          <a class="glass-button" :href="profile.github" target="_blank" rel="noreferrer">GitHub</a>
          <RouterLink class="glass-button ghost" to="/blog">Blog</RouterLink>
        </div>
      </GlassCard>
    </section>
  </div>
</template>
