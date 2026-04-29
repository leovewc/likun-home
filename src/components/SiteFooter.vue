<script setup>
import { profile } from '../data/site'
</script>

<template>
  <footer class="site-footer">
    <div>
      <strong>{{ profile.handle }}</strong>
      <p>Independent AI software company building practical intelligent systems.</p>
    </div>

    <div class="footer-links">
      <a :href="`mailto:${profile.email}`">Email</a>
      <a :href="profile.github" target="_blank" rel="noreferrer">GitHub</a>
      <RouterLink to="/blog">Blog</RouterLink>
    </div>
  </footer>
</template>
