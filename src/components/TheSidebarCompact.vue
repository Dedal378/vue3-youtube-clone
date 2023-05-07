<script setup>
import { computed, reactive } from 'vue'
import SidebarCompactNavItem from './sidebar/SidebarCompactNavItem.vue'

const navItems = reactive([
  { label: 'Home', icon: 'home', isActive: true },
  { label: 'Trending', icon: 'trending', isActive: false },
  { label: 'Subscriptions', icon: 'subscriptions', isActive: false },
  { label: 'Library', icon: 'library', isActive: false },
  { label: 'History', icon: 'history', isActive: false }
])
const classes = computed(() => ['min-h-screen', 'overflow-auto', 'fixed', 'z-20', 'top-0', 'pt-14', 'bg-white'])
</script>

<template>
  <aside :class="classes">
    <ul>
      <SidebarCompactNavItem
        v-for="navItem in navItems"
        :key="navItem.label"
        :label="navItem.label"
        :icon="navItem.icon"
        :is-active="navItem.isActive"
      />
    </ul>
  </aside>
</template>
