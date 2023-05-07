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
  const classes = ['flex', 'items-center', 'px-6', 'py-2', 'text-sm']
  return props.isActive
    ? [...classes, 'font-medium', 'text-gray-800', 'bg-gray-200', 'hover:bg-gray-300']
    : [...classes, 'hover:bg-gray-100']
})
const iconClasses = computed(() => (props.isActive ? 'h-6 w-6 mr-6 text-red-500' : 'h-6 w-6 mr-6'))
</script>

<template>
  <li>
    <a :class="classes"
      href="#"
    >
      <BaseIcon :name="icon"
        :class="iconClasses"
      />
      <span v-html="label"></span>
    </a>
  </li>
</template>
