<script setup>
import { computed, useAttrs } from 'vue'
import BaseIcon from './BaseIcon.vue'

const attrs = useAttrs()
const classes = computed(() => {
  return (
    attrs.class ||
    'flex items-center whitespace-nowrap px-2 py-1 text-sm text-blue-700 uppercase border border-blue-700 rounded-sm focus:outline-none'
  )
})
</script>

<template>
  <button :class="classes">
    <BaseIcon
      name="user"
      class="h-7 w-7 mr-2"
    />
    Sign in
  </button>
</template>
