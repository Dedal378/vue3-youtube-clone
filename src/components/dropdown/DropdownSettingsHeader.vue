<script setup>
import BaseIcon from '../ui/BaseIcon.vue'

defineProps({
  title: {
    type: String,
    required: true,
  },
})
defineEmits({ back: null })
</script>

<template>
  <section class="flex items-center border-b border-gray-200 text-black">
    <button class="p-3 focus:outline-none">
      <BaseIcon @click.stop="$emit('back')"
        name="arrowLeft"
        class="h-5 w-5"
      />
    </button>
    <span>{{ title }}</span>
  </section>
</template>
