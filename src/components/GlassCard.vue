<script setup>
defineProps({
  as: {
    type: String,
    default: 'div',
  },
  tone: {
    type: String,
    default: 'default',
  },
})
</script>

<template>
  <component :is="as" class="glass-card" :class="`glass-card--${tone}`">
    <slot />
  </component>
</template>
