<script setup>
import { inject, ref, watch } from 'vue'
import TheSearchInput from './TheSearchInput.vue'
import TheSearchButton from './TheSearchButton.vue'
import TheSearchResults from './TheSearchResults.vue'

const emits = defineEmits(['update-search-query'])
const { searchQuery } = inject('searchQuery')
const query = ref(searchQuery)
const activeQuery = ref(searchQuery)
const results = ref([])
const activeSearchResultId = ref(null)
const isSearchResultsShown = ref(false)
const keywords = ref([
  'new york giants',
  'new york alicia keys',
  'new york giants vs washington football',
  'new york',
  'new york songs',
  'new york new york frank sinatra',
  'new york jets',
  'new york city',
  'new york giants live',
  'new york sate of mind',
  'new york giants vs washington football live',
  'new york giants injury',
  'new york giants live stream',
  'new york accent'
])

const updateSearchResults = () => {
  activeSearchResultId.value = null
  activeQuery.value = query.value

  if (query.value === '') {
    results.value = []
  } else {
    results.value = keywords.value.filter((result) => result.includes(trimmedQuery()))
  }
}
const trimmedQuery = () => query.value.replace(/\s+/g, ' ').trim()
const toggleSearchResults = (isSearchInputActive) => {
  isSearchResultsShown.value = isSearchInputActive && results.value.length
}

const makePreviousSearchResultActive = () => {
  if (activeSearchResultId.value === null) {
    activeSearchResultId.value = results.value.length - 1
  } else if (activeSearchResultId.value === 0) {
    activeSearchResultId.value = null
  } else {
    activeSearchResultId.value--
  }

  updateQueryWithSearchResults()
}
const handlePreviousSearchResult = () => {
  if (isSearchResultsShown.value) {
    makePreviousSearchResultActive()
  } else {
    toggleSearchResults(true)
  }
}
const makeNextSearchResultActive = () => {
  if (activeSearchResultId.value === null) {
    activeSearchResultId.value = 0
  } else if (activeSearchResultId.value + 1 === results.value.length) {
    activeSearchResultId.value = null
  } else {
    activeSearchResultId.value++
  }

  updateQueryWithSearchResults()
}
const handleNextSearchResult = () => {
  if (isSearchResultsShown.value) {
    makeNextSearchResultActive()
  } else {
    toggleSearchResults(true)
  }
}
const updateQueryWithSearchResults = () => {
  const hasActiveSearchResult = activeSearchResultId.value !== null

  query.value = hasActiveSearchResult
    ? results.value[activeSearchResultId.value]
    : activeQuery.value
}

watch(query, (query) => {
  emits('update-search-query', query)
})
</script>

<template>
  <div class="flex w-full mr-2">
    <div class="relative flex w-full">
      <TheSearchInput
        v-model:query="query"
        @update:query="updateSearchResults"
        @change-state="toggleSearchResults"
        @keyup.up="handlePreviousSearchResult"
        @keyup.down="handleNextSearchResult"
        @keydown.up.prevent
        :has-results="results.length"
      />
      <TheSearchResults
        v-show="isSearchResultsShown"
        @search-result-mouseenter="activeSearchResultId = $event"
        @search-result-mouseleave="activeSearchResultId = null"
        :results="results"
        :active-result-id="activeSearchResultId"
      />
    </div>

    <TheSearchButton />
  </div>
</template>
