<template>
  <div class="flex flex-col gap-8 items-center justify-center">
    <div class="flex flex-col items-center w-full justify-center">
      <NuxtLink
        class="font-black text-5xl link text-center flex break-words gap-4"
        :to="np?.song.custom_fields.buy"
      >
        {{ np?.song.title }}
      </NuxtLink>
      <NuxtLink
        class="font-bold text-3xl link text-center break-words gap-4"
        :to="getArtistLinkFromName(np?.song.artist ?? '')"
      >
        <span class="font-light">by</span>
        {{ np?.song.artist }}
      </NuxtLink>
    </div>
    <div
      class="tooltip tooltip-bottom"
      data-tip="opens in a new tab, don't worry"
    >
      <NuxtLink
        target="_blank"
        rel="noopener noreferrer"
        :to="np?.song.custom_fields.buy"
        class="font-thin link text-md flex flex-row items-center gap-1"
      >
        <span> buy, stream or download this track </span>
        <ArrowTopRightOnSquareIcon class="w-4 h-4" />
      </NuxtLink>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useNowPlayingStore } from "~/scripts/nowplaying";
import { getArtistLinkFromName } from "~/scripts/artists";
import { ArrowTopRightOnSquareIcon } from "@heroicons/vue/16/solid";

const npStore = useNowPlayingStore();
const np = computed(() => npStore.lastValidResponse?.now_playing);
</script>
