<script setup>
import { ref } from 'vue'
import DropdownSettingsListItem from './dropdown/DropdownSettingsListItem.vue'
import DropdownSettingsHeader from './dropdown/DropdownSettingsHeader.vue'

defineProps({
  selectedOptions: {
    type: [Object, Number, String],
    required: false,
    default: 0,
  },
})
const emits = defineEmits(['close', 'select-option'])
const themes = ref(['Device theme', 'Dark theme', 'Light theme'])
const selectOption = (theme) => {
  emits('select-option', { name: 'theme', value: theme })
}
</script>

<template>
  <DropdownSettingsHeader
    @back="$emit('close')"
    title="Appearance"
  />

  <section class="py-2">
    <div class="p-3 text-xs text-gray-500">
      Setting applies to this browser only
    </div>
    <ul>
      <DropdownSettingsListItem
        v-for="(theme, themeIdx) in themes"
        :key="themeIdx"
        @click.stop="selectOption({ id: themeIdx, text: theme })"
        :active="themeIdx === selectedOptions.theme.id"
        :label="theme"
      />
    </ul>
  </section>
</template>
