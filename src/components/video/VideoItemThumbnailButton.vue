<script setup>
import { computed, ref } from 'vue'
import BaseIcon from '../ui/BaseIcon.vue'

const props = defineProps({
  icon: {
    type: String,
    required: true,
  },
  label: {
    type: String,
    required: true,
  },
  classTop: {
    type: String,
    required: true,
    default: 'top-0',
  },
})
const isBadgeShown = ref(false)
const classes = computed(() => {
  return [
    'absolute',
    'opacity-0',
    'group-hover:opacity-100',
    'bg-opacity-60',
    'right-0',
    'bg-black',
    'text-white',
    'm-1',
    'p-1',
    props.classTop,
    isBadgeShown.value ? 'rounded-r-sm' : 'rounded-sm'
  ]
})
const badgeClasses = computed(() => {
  return [
    'absolute',
    'transition-width',
    'bg-black',
    'bg-opacity-60',
    'whitespace-nowrap',
    'top-0',
    'right-full',
    'overflow-hidden',
    'uppercase',
    'text-xs',
    'delay-100',
    'font-semibold',
    'rounded-l-sm',
    isBadgeShown.value ? 'w-28' : 'w-0'
  ]
})

const toggleBadge = () => (isBadgeShown.value = !isBadgeShown.value)
</script>

<template>
  <span @mouseenter="toggleBadge"
    @mouseleave="toggleBadge"
    :class="classes"
  >
    <BaseIcon :name="icon"
      class="h-5 w-5"
    />
    <span :class="badgeClasses">
      <span class="inline-block my-1.5 mx-3">{{ label }}</span>
    </span>
  </span>
</template>
