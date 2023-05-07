<script setup>
import { computed, ref } from 'vue'

const props = defineProps({
  results: {
    type: Array,
    required: false,
    default: null,
  },
  activeResultId: {
    type: [null, Number, String],
    required: true,
  },
})

const classes = ref([
  'absolute',
  'top-full',
  'w-full',
  'bg-white',
  'border',
  'border-t-0',
  'border-gray-300',
  'shadow-md',
  'pt-4',
  'select-none',
  'truncate'
])
const reportLinkClasses = ref([
  'w-full',
  'inline-block',
  'text-right',
  'text-xs',
  'italic',
  'text-gray-500',
  'hover:text-black pr-2'
])
const itemClasses = computed(() => {
  return (resultId) => [
    resultId === props.activeResultId ? 'bg-gray-100' : 'bg-transparent',
    'text-black',
    'px-3',
    'py-1'
  ]
})
</script>

<template>
  <div :class="classes">
    <ul>
      <li
        v-for="(text, id) in results"
        :key="text"
        @mouseenter="$emit('search-result-mouseenter', id)"
        @mouseleave="$emit('search-result-mouseleave')"
        :class="itemClasses(id)"
      >
        {{ text }}
      </li>
    </ul>

    <a
      :class="reportLinkClasses"
      href="#"
    >
      Report search predictions
    </a>
  </div>
</template>
