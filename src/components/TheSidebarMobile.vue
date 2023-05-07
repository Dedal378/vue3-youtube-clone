<script setup>
import { ref, toRefs, watch, nextTick } from 'vue'
import BaseIcon from './ui/BaseIcon.vue'
import LogoMain from './ui/LogoMain.vue'
import SidebarContent from './sidebar/SidebarContent.vue'
import TheSidebarMobileOverlay from './TheSidebarMobileOverlay.vue'

const props = defineProps({
  isOpen: {
    type: Boolean,
    required: true,
  },
})
defineEmits({ close: null })
const mobileSidebar = ref(null)
const { isOpen } = toRefs(props)

watch(isOpen, () => {
  nextTick(() => isOpen.value && mobileSidebar.value.focus()) //выражение выполнится, если isOpen не null и не undefined
})
</script>

<template>
  <transition
    enter-active-class="transition-opacity ease-linear duration-200"
    enter-from-class="opacity-0"
    enter-to-class="opacity-100"
    leave-active-class="transition-opacity ease-linear duration-200"
    leave-from-class="opacity-100"
    leave-to-class="opacity-0"
  >
    <TheSidebarMobileOverlay
      v-show="isOpen"
      @click="$emit('close')"
    />
  </transition>

  <transition
    enter-active-class="transition transform ease-in-out duration-200"
    enter-from-class="-translate-x-full"
    enter-to-class="translate-x-0"
    leave-active-class="transition transform ease-in-out duration-200"
    leave-from-class="translate-x-0"
    leave-to-class="-translate-x-full"
  >
    <aside
      v-show="isOpen"
      ref="mobileSidebar"
      @keydown.esc="$emit('close')"
      tabindex="-1"
      class="fixed z-40 w-64 max-h-screen overflow-auto bg-white outline-none"
    >
      <section class="flex items-center p-4 border-b sticky top-0 bg-white">
        <button @click="$emit('close')"
          class="ml-2 mr-6 focus:outline-none"
        >
          <BaseIcon name="menu" />
        </button>
        <LogoMain />
      </section>
      <SidebarContent />
    </aside>
  </transition>
</template>
