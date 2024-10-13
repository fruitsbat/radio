<template>
  <div class="w-full flex flex-col gap-2 items-center justify-center">
    <div>
      <NuxtLink
        class="font-bold text-5xl link"
        :to="getArtistLinkFromName(np?.song.artist ?? '')"
      >
        {{ np?.song.artist }}
        -
        {{ np?.song.title }}
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

    <div>
      <span>{{}}</span>
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
