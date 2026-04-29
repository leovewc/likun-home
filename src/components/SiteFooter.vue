<script setup>
import { siteContent } from '../data/site'
</script>

<template>
  <footer class="site-footer">
    <div>
      <strong>{{ siteContent.profile.handle }}</strong>
      <p>{{ siteContent.footer.text }}</p>
    </div>

    <div class="footer-links">
      <a :href="`mailto:${siteContent.profile.email}`">{{ siteContent.common.email }}</a>
      <a :href="siteContent.profile.github" target="_blank" rel="noreferrer">
        {{ siteContent.common.github }}
      </a>
      <RouterLink to="/blog">{{ siteContent.common.blog }}</RouterLink>
    </div>
  </footer>
</template>
