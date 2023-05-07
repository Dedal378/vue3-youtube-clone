<script setup>
import { computed, nextTick, onMounted, ref, watch } from 'vue'
import BaseIcon from '../ui/BaseIcon.vue'
import VideoItemDropdownListItem from './VideoItemDropdownListItem.vue'

const videoItemDropdown = ref(null)
const videoItemDropdownButton = ref(null)
const isOpen = ref(false)
const positionClasses = ref([])
const buttonClasses = computed(() => {
  return [
    'p-1',
    'text-gray-500',
    'hover:text-gray-700',
    'focus:outline-none',
    'group-hover:opacity-100',
    isOpen.value ? 'opacity-100' : 'opacity-0'
  ]
})
const dropdownClasses = computed(() => {
  return [
    'z-30',
    'absolute',
    // 'top-9',
    // '-right-full',
    // 'sm:right-0',
    'bg-white',
    'w-48',
    'rounded',
    'shadow',
    'focus:outline-none',
    ...positionClasses.value
  ]
})

const toggle = (event) => {
  isOpen.value = !isOpen.value

  if (isOpen.value) {
    nextTick(() => {
      positionClasses.value = getPositionClasses(event)
    })
  }
}
const getPositionClasses = (event) => {
  return [getTopClass(event), getBottomClass(event), getRightClass(event), getLeftClass(event)]
}
const getTopClass = (event) => {
  const clickCoordY = event.clientY
  const buttonHeight = event.currentTarget.offsetHeight
  const dropdownHeight = videoItemDropdown.value.offsetHeight

  if (window.innerHeight - clickCoordY < dropdownHeight) {
    return 'top-auto'
  }
  if (window.innerHeight - clickCoordY < dropdownHeight + buttonHeight) {
    return 'top-0'
  }

  return 'top-8'
}
const getBottomClass = (event) => {
  const clickCoordY = event.clientY
  const dropdownHeight = videoItemDropdown.value.offsetHeight

  if (window.innerHeight - clickCoordY < dropdownHeight) {
    return 'bottom-9'
  }

  return 'bottom-auto'
}
const getRightClass = (event) => {
  const clickCoordX = event.clientX
  const clickCoordY = event.clientY
  const buttonHeight = event.currentTarget.offsetHeight
  const dropdownWidth = videoItemDropdown.value.offsetWidth
  const dropdownHeight = videoItemDropdown.value.offsetHeight

  if (window.innerWidth - clickCoordX > dropdownWidth) {
    return 'right-auto'
  }
  if (window.innerHeight - clickCoordY > dropdownHeight + buttonHeight) {
    return 'right-0'
  }
  if (window.innerHeight - clickCoordY > dropdownHeight) {
    return 'right-8'
  }

  return 'right-0'
}
const getLeftClass = (event) => {
  const clickCoordX = event.clientX
  const clickCoordY = event.clientY
  const buttonHeight = event.currentTarget.offsetHeight
  const dropdownWidth = videoItemDropdown.value.offsetWidth
  const dropdownHeight = videoItemDropdown.value.offsetHeight

  if (window.innerWidth - clickCoordX < dropdownWidth) {
    return 'left-auto'
  }
  if (window.innerHeight - clickCoordY < dropdownHeight) {
    return 'left-auto'
  }
  if (window.innerHeight - clickCoordY > dropdownHeight + buttonHeight) {
    return 'left-auto'
  }

  return 'left-8'
}

watch(isOpen, () => {
  // блокировка скролла при открытом списке
  // document.body.classList.toggle('overflow-hidden')
  nextTick(() => isOpen.value && videoItemDropdown.value.focus())
})
onMounted(() => {
  window.addEventListener('click', (ev) => {
    if (!videoItemDropdownButton.value.contains(ev.target)) {
      isOpen.value = false
    }
  })
})
onMounted(() => {
  // при скролле список автоматически будет закрываться
  // window.addEventListener('scroll', () => (isOpen.value = false))
})
</script>

<template>
  <div class="relative -mt-1 ml-auto">
    <button
      ref="videoItemDropdownButton"
      @click="toggle"
      @keydown.esc="isOpen = false"
      :class="buttonClasses"
    >
      <BaseIcon
        name="dotsVertical"
        class="h-5 w-5"
      />
    </button>

    <transition
      enter-active-class="transition ease-out duration-100"
      enter-from-class="transition opacity-0 scale-55"
      enter-to-class="transform opacity-100 scale-100"
      leave-active-class="transition ease-in duration-75"
      leave-from-class="transform opacity-100 scale-100"
      leave-to-class="transform opacity-0 scale-55"
    >
      <div
        v-show="isOpen"
        ref="videoItemDropdown"
        @keydown.esc="isOpen = false"
        :class="dropdownClasses"
        tabindex="-1"
      >
        <section class="py-2">
          <ul>
            <VideoItemDropdownListItem
              label="Add to queue"
              icon="menuVideo"
            />
            <VideoItemDropdownListItem
              label="Add to queue"
              icon="menuVideo"
            />
            <VideoItemDropdownListItem
              label="Add to queue"
              icon="menuVideo"
            />
            <VideoItemDropdownListItem
              label="Add to queue"
              icon="menuVideo"
            />
            <VideoItemDropdownListItem
              label="Add to queue"
              icon="menuVideo"
            />
          </ul>
        </section>
      </div>
    </transition>
  </div>
</template>
