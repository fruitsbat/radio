<template>
  <div class="bg-base-100 h-screen flex flex-col">
    <div class="flex-1 overflow-y-scroll">
      <ClientOnly class="h-full">
        <NowPlaying />
      </ClientOnly>
    </div>
    <ClientOnly>
      <PlaybackControls />
    </ClientOnly>
  </div>
</template>

<script setup lang="ts"></script>
