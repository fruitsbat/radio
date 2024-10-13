<template>
  <div
    class="bg-gradient-to-tr from-neutral to-primary rounded-3xl indicator w-full"
  >
    <span
      class="indicator-item right-12 badge badge-primary drop-shadow-primary flex flex-col gap-1 items-center @md:flex-row"
      ><PlayIcon class="w-3 h-3" /> now playing</span
    >

    <div
      class="bg-base-100 flex gap-6 flex-col @md:flex-row bg-opacity-95 p-6 w-full h-full min-h-96"
    >
      <CurrentTrackHeroCover />
      <CurrentTrackTrackInfo />
    </div>
  </div>
</template>

<script setup lang="ts">
import { type ArtistInfo } from "~/scripts/artists";
import { useNowPlayingStore } from "~/scripts/nowplaying";
import { PlayIcon } from "@heroicons/vue/16/solid";

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
