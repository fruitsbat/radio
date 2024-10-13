<template>
  <NuxtLink
    :to="np?.now_playing.song.custom_fields.buy"
    class="relative aspect-square hover:scale-105 transition h-full w-full"
  >
    <img
      :src="np?.now_playing?.song.art"
      class="rounded-xl aspect-square scale-105 opacity-50 absolute top-0 left-0 blur-xl w-full h-full"
    />
    <img
      :src="np?.now_playing?.song.art"
      class="absolute aspect-square top-0 left-0 rounded-xl h-full"
    />
  </NuxtLink>
</template>

<script lang="ts" setup>
import { useNowPlayingStore } from "~/scripts/nowplaying";

const npStore = useNowPlayingStore();
const np = computed(() => npStore.lastValidResponse);
</script>
