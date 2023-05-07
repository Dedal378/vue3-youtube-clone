<script setup>
import BaseIcon from './ui/BaseIcon.vue'
import BaseTooltip from './ui/BaseTooltip.vue'
import { ref } from 'vue'

const classes = ref([
  'h-full',
  'focus:outline-none',
  'flex',
  'items-center',
  'px-6',
  'py-1',
  'text-gray-600',
  'bg-gray-100',
  'border',
  'border-l-0',
  'border-gray-300',
  'rounded-tr-sm',
  'rounded-br-sm',
  'hover:bg-gray-200'
])
</script>

<template>
  <BaseTooltip text="Search">
    <button :class="classes">
      <BaseIcon
        name="search"
        class="h-5 w-5"
      />
    </button>
  </BaseTooltip>
</template>
