<script setup>
defineProps({
  title: {
    type: String,
    required: true,
  },
})
</script>
<template>
  <div class="uppercase text-sm font-semibold px-6 py-2">{{ title }}</div>
</template>
