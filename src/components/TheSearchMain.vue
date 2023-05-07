<script setup>
import { ref } from 'vue'
import BaseIcon from './ui/BaseIcon.vue'
import BaseTooltip from './ui/BaseTooltip.vue'

const classes = ref([
  'hidden',
  'sm:flex',
  'flex-1',
  'items-center',
  'justify-end',
  'p-2.5',
  'pl-8',
  'md:pl-12',
  'md:px-8',
  'lg:px-0',
  'lg:w-1/2',
  'max-w-screen-md'
])
</script>

<template>
  <div :class="classes">
    <slot />

    <BaseTooltip text="Search with your voice">
      <button class="py-2 focus:outline-none">
        <BaseIcon
          name="microphone"
          class="h-5 w-5"
        />
      </button>
    </BaseTooltip>
  </div>
</template>
