<script setup>
import { computed, nextTick, onMounted, reactive, ref, watch } from 'vue'
import BaseIcon from './ui/BaseIcon.vue'
import BaseTooltip from './ui/BaseTooltip.vue'
import TheDropdownSettingsMain from './TheDropdownSettingsMain.vue'
import TheDropdownSettingsAppearance from './TheDropdownSettingsAppearance.vue'
import TheDropdownSettingsLanguage from './TheDropdownSettingsLanguage.vue'
import TheDropdownSettingsLocation from './TheDropdownSettingsLocation.vue'
import TheDropdownSettingsRestrictedMode from './TheDropdownSettingsRestrictedMode.vue'

const dropDownSettingsButton = ref(null)
const dropDownSettings = ref(null)
const isOpen = ref(false)
const selectedMenu = ref(null)
const dropdownClasses = reactive([
  'absolute',
  'top-9',
  '-right-full',
  'sm:right-0',
  'bg-white',
  'w-72',
  'border',
  'border-t-0',
  'focus:outline-none'
])
const selectedOptions = reactive({
  theme: {
    id: 0,
    text: 'Device theme',
  },
  language: {
    id: 0,
    text: 'English',
  },
  location: {
    id: 0,
    text: 'United States',
  },
  mode: {
    enabled: false,
    text: 'Off',
  },
})

const menu = computed(() => {
  const menuComponentNames = {
    appearance: TheDropdownSettingsAppearance,
    language: TheDropdownSettingsLanguage,
    location: TheDropdownSettingsLocation,
    mode: TheDropdownSettingsRestrictedMode,
  }

  return selectedMenu.value ? menuComponentNames[selectedMenu.value.id] : null
})
const menuItems = computed(() => [
  { id: 'appearance', label: 'Appearance: ' + selectedOptions.theme.text, icon: 'theme', withSubMenu: true },
  { id: 'language', label: 'Language: ' + selectedOptions.language.text, icon: 'language', withSubMenu: true },
  { id: 'location', label: 'Location: ' + selectedOptions.location.text, icon: 'location', withSubMenu: true },
  { id: 'settings', label: 'Settings', icon: 'settings', withSubMenu: false },
  { id: 'data', label: 'Your data in YouTube', icon: 'data', withSubMenu: false },
  { id: 'help', label: 'Help', icon: 'help', withSubMenu: false },
  { id: 'feedback', label: 'Send feedback', icon: 'feedback', withSubMenu: false },
  { id: 'shortcuts', label: 'Keyboard shortcuts', icon: 'shortcut', withSubMenu: false },
  { id: 'mode', label: 'Restricted mode: ' + selectedOptions.mode.text, icon: null, withSubMenu: true }
])

const selectMenu = (menuItem) => {
  selectedMenu.value = menuItem
  dropDownSettings.value.focus()
}
const closeMenu = () => {
  selectMenu(null)
}
const close = () => {
  isOpen.value = false
  setTimeout(() => closeMenu, 100)
}
const open = () => {
  isOpen.value = true
}
const toggle = () => {
  isOpen.value ? close() : open()
}
const selectOption = (option) => {
  selectedOptions[option.name] = option.value
}

watch(isOpen, () => {
  nextTick(() => isOpen.value && dropDownSettings.value.focus())
})
onMounted(() => {
  window.addEventListener('click', (ev) => {
    if (!dropDownSettingsButton.value.contains(ev.target)) {
      close()
    }
  })
})
</script>

<template>
  <div class="relative">
    <BaseTooltip text="Settings">
      <button
        ref="dropDownSettingsButton"
        @click="toggle"
        @keydown.esc="isOpen = false"
        class="relative p-2 focus:outline-none"
      >
        <BaseIcon
          name="dotsVertical"
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
        ref="dropDownSettings"
        @keydown.esc="close"
        :class="dropdownClasses"
        tabindex="-1"
      >
        <component
          :is="menu"
          v-if="selectedMenu"
          @close="closeMenu"
          @select-option="selectOption"
          :selected-options="selectedOptions"
        />

        <TheDropdownSettingsMain
          v-else
          @select-menu="selectMenu"
          :menu-items="menuItems"
        />
      </div>
    </transition>
  </div>
</template>
