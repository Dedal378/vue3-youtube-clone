<script setup>
import VideoItemThumbnailButton from './VideoItemThumbnailButton.vue'

defineProps({
  index: {
    type: [Number, String],
    required: true,
  },
})
</script>

<template>
  <div class="relative">
    <img
      alt="image"
      :src="`https://loremflickr.com/720/404/paris,museum/all?lock=${index}`"
    >

    <VideoItemThumbnailButton
      icon="clock"
      label="Watch later"
      classTop="top-0"
    />
    <VideoItemThumbnailButton
      icon="menuVideo"
      label="Add to queue"
      classTop="top-8"
    />

    <span
      class="absolute opacity-100 group-hover:opacity-0 duration-500 bottom-0 right-0 bg-black text-white rounded-sm m-1 p-1 text-xs font-semibold"
    >
      6:35
    </span>
  </div>
</template>
