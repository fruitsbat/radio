<template>
  <div class="bg-gradient-to-r from-primary to-secondary flex-col">
    <div class="w-full h-1 bg-base-100 opacity-50">
      <div
        class="bg-neutral h-full"
        :style="`width: ${percentage}%`"
      ></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useNowPlayingStore } from "~/scripts/nowplaying";

const nowPlayingStore = useNowPlayingStore();
const np = computed(() => nowPlayingStore.lastValidResponse);
const percentage = computed(
  () =>
    ((np.value?.now_playing.elapsed ?? 0.5) /
      (np.value?.now_playing.duration ?? 0.5)) *
    100
);
</script>
