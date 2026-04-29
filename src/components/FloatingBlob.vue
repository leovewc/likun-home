<script setup>
defineProps({
  variant: {
    type: String,
    default: 'one',
  },
})
</script>

<template>
  <div class="floating-blob" :class="`floating-blob--${variant}`" aria-hidden="true"></div>
</template>
