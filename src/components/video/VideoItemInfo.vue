<script setup>
import { computed, ref } from 'vue'
import BaseIcon from '../ui/BaseIcon.vue'
import BaseTooltip from '../ui/BaseTooltip.vue'
import VideoItemDropdown from './VideoItemDropdown.vue'

const props = defineProps({
  index: {
    type: [Number, String],
    required: true,
  },
})
const channelName = ref(`Channel name ${props.index}`)
const summary = computed(() => {
  const days = props.index === 1 ? 'day' : 'days'
  return `${props.index}k views &middot; ${props.index} ${days} ago`
})
</script>

<template>
  <div class="flex items-start mt-3">
    <img alt="image"
      class="mr-3 rounded-full w-9 h-9"
      :src="`https://loremflickr.com/720/404/paris,museum/all?lock=${index}`"
    >

    <div class="text-xs whitespace-nowrap">
      <span class="font-semibold text-gray-800">Video title {{ index }}</span>

      <div class="flex mt-1">
        <BaseTooltip :text="channelName"
          top
        >
          <span class="mb-1">{{ channelName }}</span>
        </BaseTooltip>

        <BaseTooltip text="Verified"
          top
        >
          <BaseIcon name="check"
            class="h-3.5 w-3.5 ml-1"
          />
        </BaseTooltip>
      </div>

      <div v-html="summary"></div>
    </div>

    <VideoItemDropdown />
  </div>
</template>
