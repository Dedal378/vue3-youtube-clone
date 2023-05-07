<script setup>
import { ref, computed } from 'vue'
import CategoryItem from './ui/CategoryItem.vue'

const props = defineProps({
  isSidebarOpen: {
    type: Boolean,
  },
})
const categories = ref([
  'All',
  'Trucks',
  'Tool',
  'Machines',
  'Engines',
  'Snow',
  'Ships',
  'Roads',
  'Tanks',
  'Buildings',
  'Mars',
  'Woodworking',
  'Tractors',
  'Songs',
  'Show',
  'Football',
  'Planes',
  'Lives',
  'Streets',
  'Math',
  'Programming'
])
const classes = computed(() => [props.isSidebarOpen ? 'xl:pl-64' : 'md:pl-24'])
</script>

<template>
  <section :class="classes">
    <div class="bg-white bg-opacity-95 border-t border-b px-4 max-w-screen-2xl m-auto">
      <div class="py-3 flex space-x-3 overflow-auto text-sm whitespace-nowrap">
        <CategoryItem
          v-for="category in categories"
          :key="category"
          :category="category"
          :is-active="category === 'All'"
        />
      </div>
    </div>
  </section>
</template>
