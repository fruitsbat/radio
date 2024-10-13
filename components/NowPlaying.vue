<template>
  <div
    v-if="lastValidResponse"
    class="@container p-6 flex w-full items-center justify-center flex-col"
  >
    <CurrentTrack />
  </div>
  <div v-else class="loading-ring"></div>
</template>

<script setup lang="ts">
import { useNowPlayingStore } from "~/scripts/nowplaying";

const npStore = useNowPlayingStore();
const lastValidResponse = computed(() => npStore.lastValidResponse);
</script>
