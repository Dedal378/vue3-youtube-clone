<script setup>
import { reactive, ref } from 'vue'

const props = defineProps({
  text: {
    type: String,
    required: true,
  },
  top: {
    type: Boolean,
    required: false,
  },
  right: {
    type: Boolean,
    required: false,
  },
  left: {
    type: Boolean,
    required: false,
  },
})
const isShown = ref(false)
const getPositionClasses = () => {
  const topClass = props.top ? 'bottom-12' : 'top-14'

  if (props.right) {
    return [topClass, 'left-0']
  }
  if (props.left) {
    return [topClass, 'right-0']
  }

  return [topClass, 'left-1/2', '-translate-x-1/2']
}
const classes = reactive([
  'bg-gray-600',
  'bg-opacity-80',
  'rounded-sm',
  'text-white',
  'text-xs',
  'whitespace-nowrap',
  'p-2',
  'absolute',
  'transform',
  ...getPositionClasses()
])
</script>

<template>
  <div class="relative">
    <div
      @mouseenter="isShown = true"
      @mouseleave="isShown = false"
      @click="isShown = false"
      class="flex items-center h-full"
    >
      <slot />
    </div>
    <transition
      enter-active-class="duration-300"
      enter-from-class="opacity-0"
      enter-to-class="opacity-100"
      leave-active-class="duration-75"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <div v-show="isShown"
        :class="classes"
      >{{ text }}</div>
    </transition>
  </div>
</template>
