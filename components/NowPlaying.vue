<template>
  <div v-if="data">{{ data }} {{ status }}</div>
</template>

<script setup lang="ts">
import type { AzuraApiReturn } from "~/scripts/nowplaying";
import { BASE_URL } from "~/scripts/variables";
const { status, data, send } = useWebSocket<
  { pub: { data: { np: any } } }
>(`wss://${BASE_URL}/api/live/nowplaying/websocket`, { autoReconnect: true });
send(
  JSON.stringify({
    subs: {
      "station:main": { recover: true },
    },
  })
);
</script>
