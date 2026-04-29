<script setup>
import ProjectCard from '../components/ProjectCard.vue'
import { siteContent } from '../data/site'
</script>

<template>
  <div class="page">
    <section class="page-hero">
      <p class="eyebrow">{{ siteContent.projectsPage.eyebrow }}</p>
      <h1>{{ siteContent.projectsPage.title }}</h1>
      <p>{{ siteContent.projectsPage.text }}</p>
    </section>

    <section class="section-block first-section">
      <div class="project-grid portfolio-grid">
        <ProjectCard v-for="project in siteContent.projects" :key="project.title" :project="project" />
      </div>
    </section>
  </div>
</template>
