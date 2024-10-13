<template>
  <div
    class="bg-gradient-to-tr from-neutral to-primary rounded-3xl indicator w-full h-full @container"
  >
    <span
      class="indicator-item right-12 badge badge-primary drop-shadow-primary flex flex-row gap-1 items-center"
      ><PlayIcon class="h-3 w-3" /> now playing</span
    >

    <div
      class="bg-base-100 justify-stretch items-stretch grid gap-6 flex-row grid-cols-1 @2xl:grid-cols-2 bg-opacity-95 p-6 w-full h-full min-h-96"
    >
    <div class="h-full w-full flex">
      <CurrentTrackHeroCover
        class="relative h-full w-full @2xl:w-auto @2xl:h-full"
      />
      </div>
      <CurrentTrackTrackInfo class="flex-1" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { PlayIcon } from "@heroicons/vue/16/solid";
</script>
