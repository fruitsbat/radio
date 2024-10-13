<template>
  <div
    class="bg-gradient-to-tl flex from-neutral to-primary rounded-3xl flex-col w-full h-full"
  >
    <div
      class="bg-base-100 p-6 h-full w-full bg-opacity-95 overflow-hidden flex-col flex"
    >
      <div class="overflow-y-scroll gap-2 h-full rounded-xl flex flex-col">
        <div v-for="(song, index) in songs" class="w-full">
          <div class="flex gap-2 h-full w-full items-center">
            <NuxtLink
              class="h-24 w-24 drop-shadow-base-100 rounded-3xl"
              :to="song.custom_fields.buy"
              ><img class="h-full rounded-xl" :src="song.art"
            /></NuxtLink>
            <div class="flex-col flex">
              <div class="flex flex-row gap-2">
                <NuxtLink
                  :external="true"
                  class="link"
                  :to="getArtistLinkFromName(song.artist)"
                  >{{ song.artist }}</NuxtLink
                >
                <span>-</span>
                <NuxtLink class="link" :to="song.custom_fields.buy">{{
                  song.title
                }}</NuxtLink>
              </div>
              <span v-if="index === 1" class="badge badge-primary"
                >now playing</span
              >
              <span v-if="index === 0" class="badge badge-secondary"
                >up next</span
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { getArtistLinkFromName } from "~/scripts/artists";
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
  songs = songs?.reverse();
  return songs;
});
</script>
