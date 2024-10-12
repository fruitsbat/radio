import { BASE_URL } from "./variables";
import { useMediaControls } from "@vueuse/core";

const player = ref(new Audio());

export const useAudioPlayerStore = defineStore("audio-player", () => {
  const mediaControls = useMediaControls(player, {
    src: `https://${BASE_URL}/listen/main/aac`,
  });

  return { mediaControls };
});
