<script setup>
import ProjectCard from '../components/ProjectCard.vue'
import { projects } from '../data/site'
</script>

<template>
  <div class="page">
    <section class="page-hero">
      <p class="eyebrow">Portfolio</p>
      <h1>Projects</h1>
      <p>
        A glass-styled portfolio of software products, AI experiments, cloud deployments,
        and immersive interaction prototypes.
      </p>
    </section>

    <section class="section-block first-section">
      <div class="project-grid portfolio-grid">
        <ProjectCard v-for="project in projects" :key="project.title" :project="project" />
      </div>
    </section>
  </div>
</template>
