<template>
  <div class="flex gap-4 items-center w-full max-w-60">
    <SpeakerWaveIcon class="h-8 w-8" />
    <input
      type="range"
      step="0.05"
      min="0.0"
      max="1.0"
      value="0.75"
      class="range"
      v-model="mediaControls.volume"
    />
  </div>
</template>
<script setup lang="ts">
import { useAudioPlayerStore } from "~/scripts/audioPlayer";
import { SpeakerWaveIcon } from "@heroicons/vue/24/solid";
const audioPlayer = useAudioPlayerStore();
const mediaControls = computed(() => audioPlayer.mediaControls);
</script>
