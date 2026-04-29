<script setup>
defineProps({
  to: {
    type: String,
    default: '',
  },
  href: {
    type: String,
    default: '',
  },
  variant: {
    type: String,
    default: '',
  },
  compact: {
    type: Boolean,
    default: false,
  },
  target: {
    type: String,
    default: '',
  },
})
</script>

<template>
  <RouterLink
    v-if="to"
    class="glass-button liquid-button"
    :class="[variant, { compact }]"
    :to="to"
  >
    <slot />
  </RouterLink>
  <a
    v-else
    class="glass-button liquid-button"
    :class="[variant, { compact }]"
    :href="href"
    :target="target || undefined"
    :rel="target ? 'noreferrer' : undefined"
  >
    <slot />
  </a>
</template>
