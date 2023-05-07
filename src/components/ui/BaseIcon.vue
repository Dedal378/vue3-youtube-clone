<script setup>
import icons from '../../icons.js'

const props = defineProps({
  name: {
    type: String,
    required: false
  },
})
const path = icons[props.name]
</script>

<template>
  <svg
    :class="$attrs.class || 'h-6 w-6'"
    fill="currentColor"
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
    v-html="path"
  />
</template>
