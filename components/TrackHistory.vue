<template>
  <div
    class="bg-gradient-to-tl flex from-neutral to-primary rounded-3xl flex-col w-full h-full"
  >
    <div
      class="bg-base-100 p-6 h-full w-full bg-opacity-95 overflow-hidden flex-col flex"
    >
      <div class="overflow-y-scroll gap-2 h-full rounded-xl flex flex-col">
        <div v-for="(song, index) in songs" class="w-full">
          <div class="inline-flex gap-2 h-full items-center">
            <NuxtLink
              class="drop-shadow-base-100 rounded-3xl w-24 h-24 basis-auto"
              :to="song.custom_fields.buy"
              ><img class="aspect-square rounded-xl h-24 w-24 min-w-24" :src="song.art" style="aspect-ratio: 1/1!important;"
            /></NuxtLink>
            <div class="flex-col items-start break-words basis-full flex col-span-4">
              <div class="flex h-full flex-col gap-2 justify-center text-ellipsis">
                <NuxtLink
                  :external="true"
                  class="link"
                  :to="getArtistLinkFromName(song.artist)"
                  >{{ song.artist }}</NuxtLink
                >
                <NuxtLink class="link" :to="song.custom_fields.buy">{{
                  song.title
                }}</NuxtLink>
                <span v-if="index === 1" class="badge badge-primary"
                  >now playing</span
                >
              </div>

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
  const nowPlayingSong = npStore.lastValidResponse?.now_playing.song!;
  const nowPlayingTime = npStore.lastValidResponse?.now_playing.played_at;
  songs?.push({ ...nowPlayingSong, startTime: nowPlayingTime! });
  songs?.push({ ...nextUpSong, startTime: nextUpStartTime });
  songs = songs?.sort((a, b) => b.startTime - a.startTime);
  return songs;
});
</script>
