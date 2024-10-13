<template>
  <div>
    <div
      v-if="lastValidResponse"
      class="p-6 w-full flex flex-col items-center justify-center xl:grid grid-cols-3 gap-6"
    >
      <CurrentTrack
        class="col-span-2 xl:max-h-[24em] 2xl:max-h-[32em] @4xl:max-h-[48em]"
      />
      <TrackHistory
        class="max-h-[32em] xl:max-h-[24em] 2xl:max-h-[32em] @4xl:max-h-[48em]"
      />
    </div>
    <div v-else class="loading-ring"></div>
  </div>
</template>

<script setup lang="ts">
import { useNowPlayingStore } from "~/scripts/nowplaying";

const npStore = useNowPlayingStore();
const lastValidResponse = computed(() => npStore.lastValidResponse);
</script>
