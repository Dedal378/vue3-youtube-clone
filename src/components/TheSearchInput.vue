<script setup>
import { onBeforeUnmount, onMounted, ref } from 'vue'
import BaseIcon from './ui/BaseIcon.vue'

const searchInput = ref(null)
const isActive = ref(false)
const classes = [
  'px-3',
  'w-full',
  'h-full',
  'border',
  'border-gray-300',
  'shadow-inner',
  'rounded-bl-sm',
  'rounded-tl-sm',
  'focus:border-blue-700',
  'focus:outline-none'
]

const props = defineProps(['query', 'hasResults'])
const emits = defineEmits(['update:query', 'change-state'])

const setState = (state) => {
  isActive.value = state
  emits('change-state', state)
}
const updateQuery = (query) => {
  emits('update:query', query)
  setState(isActive.value)
}
const removeSelection = () => {
  const end = searchInput.value.length
  searchInput.value.setSelectionRange(end, end)
}
const handleEsc = () => {
  removeSelection()

  if (isActive.value && props.hasResults) {
    setState(false)

    // isActive.value = false
    // emits('change-state', isActive.value)
  } else {
    searchInput.value.blur()
  }
}
const clear = () => {
  searchInput.value.focus()
  updateQuery('')
}
const onKeydown = (ev) => {
  const isInputFocused = searchInput.value === document.activeElement

  if (ev.code === 'Slash' && !isInputFocused) {
    ev.preventDefault()
    searchInput.value.focus()
  }
}

onMounted(() => {
  if (window.innerWidth < 640) {
    searchInput.value.focus()
  }

  document.addEventListener('keydown', onKeydown)
})
onBeforeUnmount(() => {
  document.removeEventListener('keydown', onKeydown)
})
</script>

<template>
  <div class="relative w-full">
    <input
      ref="searchInput"
      @input="updateQuery($event.target.value)"
      @click="setState(true)"
      @focus="setState(true)"
      @blur="setState(false)"
      @keyup.esc="handleEsc"
      :class="classes"
      :value="query"
      placeholder="Search"
      type="text"
    >

    <button
      v-show="query"
      @click="clear"
      class="absolute top-0 right-0 h-full px-3 focus:outline-none"
    >
      <BaseIcon
        name="x"
        class="w-5 h-5"
      />
    </button>
  </div>
</template>
