<template>
  <div
    class="bg-gradient-to-tl from-neutral to-primary rounded-3xl indicator w-full h-full"
  >
    <div
      class="bg-base-100 h-full w-full bg-opacity-95 overflow-y-scroll flex-col flex rounded-3xl"
    >
      <div v-for="song in songs">
        <div class="flex gap-2">
          <NuxtLink
            class="h-24"
          :to="song.custom_fields.buy"
            ><img class="h-full" :src="song.art"
          /></NuxtLink>
          <NuxtLink>{{ song.artist }}</NuxtLink>
          <span>-</span>
          <NuxtLink>{{ song.title }}</NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useNowPlayingStore } from "~/scripts/nowplaying";

const npStore = useNowPlayingStore();
const songs = computed(() => {
  let songs = npStore.lastValidResponse?.song_history.map((history) => {
    return { ...history.song, startTime: history.played_at };
  });

  const nextUpStartTime =
    npStore.lastValidResponse?.playing_next.played_at ?? 0;
  const nextUpSong = npStore.lastValidResponse?.playing_next.song!;
  songs?.push({ ...nextUpSong, startTime: nextUpStartTime });
  return songs;
});
</script>
