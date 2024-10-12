import { BASE_URL } from "./variables";

type ApiNowPlayingStationMount = {
  name: string;
  path: string;
  format: string | undefined;
  bitrate: number | undefined;
};

type ApiSong = {
  artist: string;
  title: string;
  album: string;
  art: string;
  custom_fields: { buy: string };
};

type ApiNowPlayingCurrentSong = {
  played_at: number;
  duration: number;
  streamer: string;
  song: ApiSong;
  elapsed: number;
  remaining: number;
};

type ApiNowPlayingSongHistory = {
  played_at: number;
  duration: number;
  song: ApiSong;
};

type ApiNowPlayingStationQueue = {
  played_at: number;
  duration: number;
  song: ApiSong;
};

type ApiNowPlayingStation = {
  mounts: Array<ApiNowPlayingStationMount>;
  hls_listeners: number;
};

type ApiNowPlaying = {
  station: ApiNowPlayingStation;
  now_playing: ApiNowPlayingCurrentSong;
  song_history: ApiNowPlayingSongHistory;
  playing_next: ApiNowPlayingStationQueue;
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
