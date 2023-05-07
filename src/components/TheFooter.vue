<script setup>
import { reactive } from 'vue'

const links = reactive([
  'About ',
  'Press ',
  'Copyright ',
  'Contact ',
  'Creators ',
  'Advertise ',
  'Developers ',
  'Terms ',
  'Privacy ',
  'Policy & Safety ',
  'How YouTube works ',
  'Test new features'
])
</script>

<template>
  <div>
    <a
      v-for="link in links.slice(0, 7)"
      :key="link"
      class="mr-2"
      href="#"
    >
      {{ link }}
    </a>
  </div>
  <div>
    <a
      v-for="link in links.slice(7)"
      :key="link"
      class="mr-2"
      href="#"
    >
      {{ link }}
    </a>
  </div>
  <div class="font-normal text-gray-500">&copy; 2021 Google LLC</div>
</template>
