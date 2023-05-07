<script setup>
import BaseIcon from '../ui/BaseIcon.vue'

defineProps({
  icon: {
    type: String,
    required: true,
  },
  label: {
    type: String,
    required: true,
  },
})
</script>

<template>
  <li>
    <a class="flex items-center pl-5 pr-8 py-2 text-sm hover:bg-gray-200"
      href="#"
    >
      <BaseIcon :name="icon"
        class="h-5 w-5 mr-4 text-gray-400"
      />
      <span>{{ label }}</span>
    </a>
  </li>
</template>
