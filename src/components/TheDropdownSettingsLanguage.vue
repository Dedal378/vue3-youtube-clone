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
const languages = ref(['English', 'Belarusian', 'Ukraine', 'German', 'Russian'])
const selectOption = (language) => {
  emits('select-option', { name: 'language', value: language })
}
</script>

<template>
  <DropdownSettingsHeader
    @back="$emit('close')"
    title="Choose your language"
  />

  <section class="py-2">
    <ul class="max-h-96 overflow-auto">
      <DropdownSettingsListItem
        v-for="(language, languageIdx) in languages"
        :key="languageIdx"
        @click.stop="selectOption({ id: languageIdx, text: language })"
        :active="languageIdx === selectedOptions.language.id"
        :label="language"
      />
    </ul>
  </section>
</template>
