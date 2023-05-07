<script setup>
import { computed } from 'vue'
import BaseIcon from '../ui/BaseIcon.vue'

const props = defineProps({
  active: {
    type: Boolean,
    required: false,
  },
  label: {
    type: String,
    required: true,
  },
  icon: {
    type: String,
    required: false,
    default: 'checkArr',
  },
  withSubMenu: {
    type: Boolean,
    required: false,
  },
})
const isIconShown = computed(
  () => props.active || (props.icon !== 'checkArr' && props.icon !== null)
)
const iconName = computed(() => (props.active ? 'checkArr' : props.icon))
</script>

<template>
  <li>
    <a
      @click.prevent
      class="flex items-center px-4 py-2 text-sm hover:bg-gray-100"
      href="#"
    >
      <BaseIcon
        v-if="isIconShown"
        :name="iconName"
        class="h-5 w-5 mr-3 text-gray-400"
      />
      <span :class="['truncate', 'flex-1', { 'ml-8': icon && !isIconShown }]">
        {{ label }}
      </span>
      <BaseIcon
        v-if="withSubMenu"
        name="arrow"
        class="h-5 w-5 text-gray-400 ml-auto"
      />
    </a>
  </li>
</template>
