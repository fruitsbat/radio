<template>
  <ProgressBar />
  <div class="bg-base-100 bg-opacity-100">
    <div class="flex items-center gap-4 p-4">
      <PlayPauseButton />
      <PlaybackControlTrackInfo />
      <div class="flex flex-col items-center gap-2">
        <VolumeSlider />
        <NuxtLink
          :to="`https://${BASE_URL}/listen/${STATION_NAME}/aac`"
          class="link flex gap-1 items-center"
          :external="true"
        >
          <span>audio stream</span>
          <ArrowTopRightOnSquareIcon class="w-4 h-4" />
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ArrowTopRightOnSquareIcon } from "@heroicons/vue/16/solid";
import { BASE_URL, STATION_NAME } from "~/scripts/variables";
</script>
