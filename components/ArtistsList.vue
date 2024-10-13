<template>
  <div class="flex w-full flex-col items-center">
    <h2 class="font-black px-8 text-center text-7xl" id="artists">
      <a href="#artists">artists</a>
    </h2>
    <div
      v-if="artists"
      class="grid w-full p-8 gap-6"
      style="grid-template-columns: repeat(auto-fit, minmax(300px, 1fr))"
    >
      <div
        v-for="artist in artists"
        class="bg-gradient-to-tr from-neutral to-primary rounded-3xl indicator w-full h-full @container"
      >
        <div
          class="bg-base-100 p-8 w-full flex flex-col gap-4 h-full bg-opacity-95"
        >
          <h3 class="font-bold text-3xl w-full text-center">
            <a
              :id="getArtistIdFromName(artist.name)"
              :external="true"
              :href="getArtistLinkFromName(artist.name)"
              class="link"
            >
              {{ artist.name }}
            </a>
          </h3>
          <ul
            class="grid text-center w-full"
            style="grid-template-columns: repeat(auto-fit, minmax(40px, 1fr))"
          >
            <li v-for="link in artist.links">
              <NuxtLink class="link flex items-center gap-1 w-full justify-center" :to="link.url" :external="true">
                <span>{{ link.name }}</span>
                <ArrowTopRightOnSquareIcon class="w-4 h-4" />
                </NuxtLink
              >
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { getArtistIdFromName, type ArtistInfo } from "~/scripts/artists";
import { getArtistLinkFromName } from "~/scripts/artists";
import { ArrowTopRightOnSquareIcon } from "@heroicons/vue/16/solid";

const { data: artists } = await useAsyncData(
  "artist-list-ijksidf09sdf",
  async () => await queryContent<ArtistInfo>("/artist").sort({ name: 1 }).find()
);
</script>
