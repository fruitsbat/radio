<template>
  <button
    v-if="!mediaControls.playing"
    @click="mediaControls.playing = true"
    title="play"
    class="btn btn-lg btn-circle flex items-center justify-center border-2 border-primary bg-contain drop-shadow-primary"
    :style="`background-image: url('${nowPlaying?.now_playing.song.art}')`"
  >
    <div class="bg-base-100 w-full h-full rounded-full bg-opacity-50 flex items-center justify-center">
      <PlayIcon class="w-12 h-12 drop-shadow-primary" />
    </div>
  </button>
  <button
    v-else
    @click="mediaControls.playing = false"
    title="stop"
    class="btn btn-lg btn-circle flex items-center justify-center border-2 border-neutral bg-contain drop-shadow-neutral"
    :style="`background-image: url('${nowPlaying?.now_playing.song.art}')`"
  >
    <div class="bg-base-100 w-full h-full rounded-full bg-opacity-50 flex items-center justify-center">
      <PauseIcon class="w-12 h-12 drop-shadow-neutral" />
    </div>
  </button>
</template>

<script setup lang="ts">
import { useNowPlayingStore } from "~/scripts/nowplaying";
import { useAudioPlayerStore } from "~/scripts/audioPlayer";
import { PlayIcon, PauseIcon } from "@heroicons/vue/24/solid";
const nowPlayingStore = useNowPlayingStore();
const audioPlayer = useAudioPlayerStore();
const mediaControls = computed(() => audioPlayer.mediaControls);
const nowPlaying = computed(() => nowPlayingStore.lastValidResponse);
</script>
