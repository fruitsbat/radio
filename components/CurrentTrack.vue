<template>
  <div class="flex flex-col @md:flex-row">
    <img :src="currentTrack?.song.art" />
    <span class="font-bold text-2xl"><MusicalNoteIcon />{{ currentTrack?.song.album }}</span>
  </div>
</template>

<script setup lang="ts">
import { MusicalNoteIcon } from "@heroicons/vue/16/solid";
import { useNowPlayingStore } from "~/scripts/nowplaying";

const npStore = useNowPlayingStore();
const currentTrack = computed(() => npStore.lastValidResponse?.now_playing);
</script>
