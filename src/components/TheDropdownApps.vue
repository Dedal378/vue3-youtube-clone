<script setup>
import { nextTick, onMounted, reactive, ref, watch } from 'vue'
import BaseIcon from './ui/BaseIcon.vue'
import DropdownAppsListItem from './dropdown/DropdownAppsListItem.vue'
import BaseTooltip from './ui/BaseTooltip.vue'

const dropDownAppsButton = ref(null)
const dropDownApps = ref(null)
const isOpen = ref(false)
const dropdownClasses = reactive([
  'z-10',
  'absolute',
  'right-0',
  'sm:left-0',
  'top-9',
  'bg-white',
  'w-60',
  'border',
  'border-t-0',
  'focus:outline-none'
])

watch(isOpen, () => {
  nextTick(() => isOpen.value && dropDownApps.value.focus()) //выражение выполнится, если isOpen не null и не undefined
})
onMounted(() => {
  // обработка click вне элемента
  window.addEventListener('click', (ev) => {
    if (!dropDownAppsButton.value.contains(ev.target)) {
      isOpen.value = false
    }
  })
})
</script>

<template>
  <div class="relative">
    <BaseTooltip text="YouTube apps">
      <button
        ref="dropDownAppsButton"
        @click="isOpen = !isOpen"
        class="relative p-2 focus:outline-none"
      >
        <BaseIcon
          name="viewGrid"
          class="h-5 w-5"
        />
      </button>
    </BaseTooltip>

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
        ref="dropDownApps"
        @keydown.esc="isOpen = false"
        tabindex="-1"
        :class="dropdownClasses"
      >
        <section class="py-2 border-b">
          <ul>
            <DropdownAppsListItem label="YouTube TV" />
          </ul>
        </section>

        <section class="py-2 border-b">
          <ul>
            <DropdownAppsListItem label="YouTube Music" />
            <DropdownAppsListItem label="YouTube Kids" />
          </ul>
        </section>

        <section class="py-2">
          <ul>
            <DropdownAppsListItem label="Creator Academy" />
            <DropdownAppsListItem label="YouTube for Artist" />
          </ul>
        </section>
      </div>
    </transition>
  </div>
</template>
