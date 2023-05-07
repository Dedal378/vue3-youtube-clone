<script setup>
import DropdownSettingsHeader from './dropdown/DropdownSettingsHeader.vue'

defineProps({
  selectedOptions: {
    type: [Object, Number, String],
    required: false,
    default: 0,
  },
})
const emits = defineEmits(['close', 'select-option'])
const selectOption = ($event) => {
  const enabled = $event.target.checked
  const value = { enabled, text: enabled ? 'On' : 'Off' }

  emits('select-option', { name: 'mode', value })
}
</script>

<template>
  <DropdownSettingsHeader
    @back="$emit('close')"
    title="Restricted Mode"
  />

  <section class="px-3 py-4 text-black text-sm">
    <p>This helps hide potentially mature videos. No filter is 100% accurate.</p>
    <p class="pt-3">This setting only applies to this browser.</p>

    <div class="pt-3 text-gray-600 font-semibold flex items-center">
      <span class="uppercase mr-2">Activate restricted mode</span>
      <input
        @input="selectOption($event)"
        :checked="selectedOptions.mode.enabled"
        type="checkbox"
      >
    </div>

    <template v-if="selectedOptions.mode.enabled">
      <p class="pt-3">Restricted Mode lock prevents other from changing the Restricted Mode settings on this browser.</p>
      <p class="pt-3">Lock Restricted Mode on this browser.</p>
    </template>
  </section>
</template>
