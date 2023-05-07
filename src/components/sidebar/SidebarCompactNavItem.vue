<script setup>
import { computed } from 'vue'
import BaseIcon from '../ui/BaseIcon.vue'

const props = defineProps({
  label: {
    type: String,
    required: true,
  },
  icon: {
    type: String,
  },
  isActive: {
    type: Boolean,
  },
})
const classes = computed(() => {
  const classes = ['flex', 'flex-col', 'items-center', 'px-2', 'py-5', 'text-sm', 'hover:bg-gray-100']
  return props.isActive ? [...classes, 'text-red-500'] : [...classes]
})
const iconClasses = computed(() => (props.isActive ? 'h-6 w-6 mb-1.5 text-red-500' : 'h-6 w-6 mb-1.5'))
</script>

<template>
  <li>
    <a :class="classes"
      href="#"
    >
      <BaseIcon :name="icon"
        :class="iconClasses"
      />
      <span class="text-xs">{{ label }}</span>
    </a>
  </li>
</template>
