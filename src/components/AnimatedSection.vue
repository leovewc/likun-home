<script setup>
defineProps({
  as: {
    type: String,
    default: 'section',
  },
  delay: {
    type: Number,
    default: 0,
  },
})
</script>

<template>
  <component
    :is="as"
    v-motion
    class="animated-section"
    :initial="{ opacity: 0, y: 34, filter: 'blur(10px)' }"
    :visible-once="{
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      transition: {
        duration: 720,
        delay,
        ease: 'easeOut',
      },
    }"
  >
    <slot />
  </component>
</template>
