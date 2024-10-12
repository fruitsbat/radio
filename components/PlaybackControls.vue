<template>
  <ProgressBar />
  <div class="bg-base-100 bg-opacity-100">
    <div class="flex items-center gap-4 p-4">
      <PlayPauseButton />
      <PlaybackControlTrackInfo class="flex-grow" />
      <VolumeSlider />
    </div>
  </div>
</template>

<script setup lang="ts"></script>
