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
      <div class="flex flex-col items-center">
        <small class="w-full text-center">
          kittycats rule teh world forevah © 2024
        </small>
        <img
          class="w-[176px] h-[62px]"
          src="/button.png"
          style="image-rendering: pixelated"
        />
      </div>
    </div>
    <ClientOnly>
      <PlaybackControls />
    </ClientOnly>
  </div>
</template>

<script setup lang="ts">
useSeoMeta({ title: "radio | kittycat.homes" });
</script>
