import { BASE_URL, STATION_NAME } from "./variables";
import { useMediaControls } from "@vueuse/core";

export const useAudioPlayerStore = defineStore("audio-player", () => {
  const player = ref(new Audio("/silence.mp4"));

  const mediaControls = useMediaControls(player, {});

  const playing = ref(false);

  function stop() {
    playing.value = false;
    player.value.src = "/silence.mp4";
    mediaControls.playing.value = false;
  }

  function play() {
    mediaControls.playing.value = true;
    player.value.src = `https://${BASE_URL}/listen/${STATION_NAME}/aac`;
    playing.value = true;
  }

  return { mediaControls, player, stop, play, playing };
});
