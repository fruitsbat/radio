<template>
  <div v-if="!loading" class="flex flex-col items-start w-full">
    <a
      target="_blank"
      rel="noopener noreferrer"
      title="get this track!"
      :href="np?.now_playing.song.custom_fields.buy"
      class="link flex items-center justify-center gap-2"
    >
      <MusicalNoteIcon class="h-6 w-6" />
      <span>{{ np?.now_playing.song.title }}</span>
    </a>
    <a
      title="show this artist some love!"
      :href="`/#${artistLink}`"
      class="link flex items-center justify-center gap-2"
    >
      <UserIcon class="h-6 w-6" />
      <span>{{ np?.now_playing.song.artist }}</span>
    </a>
  </div>
</template>

<script setup lang="ts">
import { useNowPlayingStore } from "~/scripts/nowplaying";
import { useAudioPlayerStore } from "~/scripts/audioPlayer";
import { MusicalNoteIcon, UserIcon } from "@heroicons/vue/16/solid";
const mediaControlsStore = useAudioPlayerStore();
const mediaControls = computed(() => mediaControlsStore.mediaControls);
const npStore = useNowPlayingStore();
const np = computed(() => npStore.lastValidResponse);
const loading = computed(() => npStore.lastValidResponse === undefined);
const artistLink = computed(() =>
  np.value?.now_playing.song.artist.replaceAll(" ", "-")
);
</script>
