<template>
  <div class="w-full relative aspect-square @md:max-h-96 @md:max-w-96">
    <img
      :src="np?.now_playing?.song.art"
      class="rounded-xl scale-105 opacity-50 absolute top-0 left-0 blur-xl w-full h-full"
    />
    <img
      :src="np?.now_playing?.song.art"
      class="absolute top-0 left-0 rounded-xl w-full h-full"
    />
  </div>
</template>

<script lang="ts" setup>
import { useNowPlayingStore } from "~/scripts/nowplaying";

const npStore = useNowPlayingStore();
const np = computed(() => npStore.lastValidResponse);
</script>
