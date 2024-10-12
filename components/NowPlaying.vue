<template>
  <div v-if="lastValidResponse">{{ lastValidResponse }}</div>
  <div v-else class="loading-ring"></div>
</template>

<script setup lang="ts">
import { useNowPlayingStore } from "~/scripts/nowplaying";

const npStore = useNowPlayingStore();
const lastValidResponse = computed(() => npStore.lastValidResponse);
</script>
