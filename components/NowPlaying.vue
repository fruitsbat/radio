<template>
  <div v-if="pub">{{ pub }} {{ status }}</div>
</template>

<script setup lang="ts">
import type { AzuraApiReturn } from "~/scripts/nowplaying";
import { BASE_URL } from "~/scripts/variables";
const { status, data, send } = useWebSocket<string>(
  `wss://${BASE_URL}/api/live/nowplaying/websocket`,
  { autoReconnect: true }
);
send(
  JSON.stringify({
    subs: {
      "station:main": { recover: true },
    },
  })
);
const pub = computed((): string | undefined => {
  try {
    const parsed = JSON.parse(data.value ?? "");
    if (parsed.pub.data.np) {
      return parsed.pub.data.np;
    }
  } catch {
    return undefined;
  }

  return undefined;
});
</script>
