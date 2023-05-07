<script setup>
import { computed } from 'vue'

const props = defineProps({
  category: {
    type: String,
    required: true,
  },
  isActive: {
    type: Boolean,
    required: true,
  },
})
const classes = computed(() => {
  const classes = ['px-3', 'py1', 'transition', 'rounded-full', 'border']
  return props.isActive
    ? [...classes, 'border-gray-700', 'bg-gray-600', 'hover:bg-gray-500', 'text-white']
    : [...classes, 'border-gray-300', 'bg-gray-100', 'hover:bg-gray-200']
})
</script>

<template>
  <a
    :class="classes"
    href="#"
  >
    {{ category }}
  </a>
</template>
