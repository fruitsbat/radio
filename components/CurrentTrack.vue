<template>
  <div class="flex flex-col @md:flex-row">
    <img :src="currentTrack?.song.art" />
    <div>
      <div class="flex flex-row items-center gap-2">
        <MusicalNoteIcon class="w-10" />
        <span class="font-black text-4xl">{{ currentTrack?.song.album }}</span>
      </div>
      <div>
        <NuxtLink :to="currentArtistInfo?.links[0].url">
          {{ currentArtistInfo?.name }}
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { MusicalNoteIcon } from "@heroicons/vue/16/solid";
import { type ArtistInfo } from "~/scripts/artists";
import { useNowPlayingStore } from "~/scripts/nowplaying";

const npStore = useNowPlayingStore();
const currentTrack = computed(() => npStore.lastValidResponse?.now_playing);
const artists = await useAsyncData("np-current-track-artist", () =>
  queryContent<ArtistInfo>("/artist").find()
);
const currentArtistInfo = computed(() =>
  artists.data.value?.find(
    (maybeArtist) => maybeArtist.name === currentTrack.value?.song.artist
  )
);
</script>
