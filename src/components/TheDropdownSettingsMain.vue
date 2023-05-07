<script setup>
import DropdownSettingsListItem from './dropdown/DropdownSettingsListItem.vue'

defineProps({
  menuItems: {
    type: [Object, Number, String],
    required: false,
    default: 0,
  },
})
const emits = defineEmits(['select-menu'])

const selectMenu = (menuItem) => {
  // menuItem.withSubMenu && emit('select-menu', menuItem.id)
  if (menuItem.withSubMenu) {
    emits('select-menu', menuItem)
  }
}
</script>

<template>
  <section class="py-2 border-b">
    <ul>
      <DropdownSettingsListItem
        v-for="menuItem in menuItems.slice(0, 8)"
        :key="menuItem.label"
        @click.stop="selectMenu(menuItem)"
        :icon="menuItem.icon"
        :label="menuItem.label"
        :with-sub-menu="menuItem.withSubMenu"
      />
    </ul>
  </section>
  <section class="py-2">
    <ul>
      <DropdownSettingsListItem
        @click.stop="$emit('select-menu', menuItems[8])"
        :icon="menuItems[8].icon"
        :label="menuItems[8].label"
        :with-sub-menu="menuItems[8].withSubMenu"
      />
    </ul>
  </section>
</template>
