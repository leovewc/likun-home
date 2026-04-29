<script setup>
import AnimatedSection from '../components/AnimatedSection.vue'
import ProjectCard from '../components/ProjectCard.vue'
import { siteContent } from '../data/site'
</script>

<template>
  <div class="page">
    <section
      v-motion
      class="page-hero"
      :initial="{ opacity: 0, y: 24, filter: 'blur(10px)' }"
      :enter="{
        opacity: 1,
        y: 0,
        filter: 'blur(0px)',
        transition: { duration: 680, delay: 80 },
      }"
    >
      <p class="eyebrow">{{ siteContent.projectsPage.eyebrow }}</p>
      <h1>{{ siteContent.projectsPage.title }}</h1>
      <p>{{ siteContent.projectsPage.text }}</p>
    </section>

    <AnimatedSection class="section-block first-section">
      <div class="project-grid portfolio-grid">
        <ProjectCard
          v-for="(project, index) in siteContent.projects"
          :key="project.title"
          :project="project"
          :index="index"
        />
      </div>
    </AnimatedSection>
  </div>
</template>
