<script setup>
import { reactive } from 'vue'
import SidebarSection from './SidebarSection.vue'
import SidebarNavItem from './SidebarNavItem.vue'
import SidebarSectionHeading from './SidebarSectionHeading.vue'
import ButtonLogin from '../ui/ButtonLogin.vue'
import TheFooter from '../TheFooter.vue'

const listItems = reactive([
  { label: 'Home', icon: 'home', isActive: true },
  { label: 'Trending', icon: 'trending', isActive: false },
  { label: 'Subscriptions', icon: 'subscriptions', isActive: false },
  { label: 'Library', icon: 'library', isActive: false },
  { label: 'History', icon: 'history', isActive: false }
])
const listItemsBest = reactive([
  { label: 'Music', icon: 'music', isActive: false },
  { label: 'Sports', icon: 'sports', isActive: false },
  { label: 'Gaming', icon: 'gaming', isActive: false },
  { label: 'Movies', icon: 'movies', isActive: false },
  { label: 'News', icon: 'news', isActive: false },
  { label: 'Live', icon: 'live', isActive: false },
  { label: '360&deg; Video', icon: 'video360', isActive: false }
])
const listItemsMore = reactive([
  { label: 'Browse channels', icon: 'browseChannels', isActive: false },
  { label: 'YouTube Premium', icon: 'premium', isActive: false },
  { label: 'Live', icon: 'live2', isActive: false },
  { label: 'Settings', icon: 'settings2', isActive: false },
  { label: 'Report history', icon: 'report', isActive: false },
  { label: 'Help', icon: 'help2', isActive: false },
  { label: 'Send feedback', icon: 'feedback2', isActive: false }
])
</script>

<template>
  <SidebarSection>
    <ul>
      <SidebarNavItem
        v-for="listItem in listItems.slice(0, 3)"
        :key="listItem.label"
        :label="listItem.label"
        :icon="listItem.icon"
        :is-active="listItem.isActive"
      />
    </ul>
  </SidebarSection>
  <SidebarSection>
    <ul>
      <SidebarNavItem
        v-for="listItem in listItems.slice(3)"
        :key="listItem.label"
        :label="listItem.label"
        :icon="listItem.icon"
        :is-active="listItem.isActive"
      />
    </ul>
  </SidebarSection>
  <SidebarSection class="px-8 py-4 border-b font-medium leading-5">
    <span class="text-sm">Sign in to like videos, comment, and subscribe.</span>
    <ButtonLogin
      class="flex items-center whitespace-nowrap px-2 py-0.5 mt-3 text-sm text-blue-700 uppercase border border-blue-700 rounded-sm focus:outline-none"
    />
  </SidebarSection>
  <SidebarSection>
    <SidebarSectionHeading title="Best of youtube" />
    <ul>
      <SidebarNavItem
        v-for="listItem in listItemsBest"
        :key="listItem.label"
        :label="listItem.label"
        :icon="listItem.icon"
        :is-active="listItem.isActive"
      />
    </ul>
  </SidebarSection>
  <SidebarSection>
    <ul>
      <SidebarNavItem
        :label="listItemsMore[0].label"
        :icon="listItemsMore[0].icon"
        :is-active="listItemsMore[0].isActive"
      />
    </ul>
  </SidebarSection>
  <SidebarSection>
    <SidebarSectionHeading title="More from youtube" />
    <ul>
      <SidebarNavItem
        v-for="listItem in listItemsMore.slice(1, 3)"
        :key="listItem.label"
        :label="listItem.label"
        :icon="listItem.icon"
        :is-active="listItem.isActive"
      />
    </ul>
  </SidebarSection>
  <SidebarSection>
    <ul>
      <SidebarNavItem
        v-for="listItem in listItemsMore.slice(3)"
        :key="listItem.label"
        :label="listItem.label"
        :icon="listItem.icon"
        :is-active="listItem.isActive"
      />
    </ul>
  </SidebarSection>
  <SidebarSection class="px-6 py-4 text-xs font-semibold space-y-4">
    <TheFooter />
  </SidebarSection>
</template>
