<template>
  <div
    class="bg-base-100 h-[100dvh] break-words flex flex-col items-stretch text-neutral"
  >
    <div class="flex-1 gap-24 pb-24 flex flex-col overflow-y-scroll">
      <ClientOnly class="h-full">
        <NowPlaying />
      </ClientOnly>
      <ArtistsList />
      <SubmitYourMusic />
      <TheMission />
    </div>
    <ClientOnly>
      <PlaybackControls />
    </ClientOnly>
  </div>
</template>

<script setup lang="ts">
useSeoMeta({ title: "radio | kittycat.homes" });
</script>
