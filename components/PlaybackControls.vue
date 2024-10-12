<template>
  <div class="bg-gradient-to-br from-primary to-secondary flex-col">
    <div class="h-2 bg-neutral bg-opacity-50"></div>
    <div class="bg-base-100 bg-opacity-100">
      <div class="flex items-center gap-4 p-4">
        <PlayPauseButton />
        <VolumeSlider />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>
