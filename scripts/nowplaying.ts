import { BASE_URL } from "./variables";

type ApiNowPlayingStationMount = {
  name: string;
  path: string;
  format: string | undefined;
  bitrate: number | undefined;
};

type ApiNowPlayingStation = {
  mounts: Array<ApiNowPlayingStationMount>;
  hls_listeners: number;
};

type ApiNowPlaying = {
  station: ApiNowPlayingStation;
};

type AzuraNPResponse = {
  channel: string;
  pub: { data: { np: ApiNowPlaying } };
};


export const useNowPlayingStore = defineStore("nowPlaying", () => {
  const socket = useWebSocket<string>(
    `wss://${BASE_URL}/api/live/nowplaying/websocket`,
    { autoReconnect: { delay: 5000 }, immediate: true }
  );

  socket.send(
    JSON.stringify({
      subs: {
        "station:main": { recover: true },
      },
    })
  );

  const lastValidResponse: Ref<ApiNowPlaying | undefined> = ref();

  watch(socket.data, () => {
    try {
      // handle regular status update
      const parsed: ApiNowPlaying = JSON.parse(socket.data.value!).pub.data.np;
      lastValidResponse.value = parsed;
    } catch {
      // handle connect signal
      try {
        const parsed: ApiNowPlaying = JSON.parse(socket.data.value!).connect
          .subs["station:main"].publications[0].data.np;
        lastValidResponse.value = parsed;
      } catch {}
    }
  });
  return { lastValidResponse, socket };
});
