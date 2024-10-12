<template>
  <div class="bg-base-100 min-h-screen">
    <ClientOnly>
      <NowPlaying />
    </ClientOnly>
    <ClientOnly>
      <PlaybackControls /> 
    </ClientOnly>
  </div>
</template>

<script setup lang="ts"></script>
