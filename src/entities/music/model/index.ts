import { create } from "zustand";

const allowedSongs = ["coldplay", "киш", "rhcp", "foals"];

type MusicState = {
  audio: HTMLAudioElement | null;
};

type MusicAction = {
  setCurrentSong: (currentSong: string | undefined) => void;
  play: () => void;
  pause: () => void;
  toggle: () => void;
};

const createAudio = (src?: string): HTMLAudioElement | null => {
  if (typeof window === "undefined") return null;
  return src ? new Audio(src) : new Audio();
};

export const useMusic = create<MusicState & MusicAction>()((set, get) => ({
  audio: createAudio(),

  setCurrentSong: (currentSong) => {
    const lowerCaseCurrentSong = currentSong?.toLowerCase();

    if (lowerCaseCurrentSong && allowedSongs.includes(lowerCaseCurrentSong)) {
      set({ audio: createAudio(`/music/${lowerCaseCurrentSong}.mp3`) });
    } else {
      set({ audio: createAudio() });
    }
  },

  play: () => {
    const audio = get().audio;
    if (audio) {
      audio.play();
    }
  },

  pause: () => {
    const audio = get().audio;
    if (audio) {
      audio.pause();
    }
  },

  toggle: () => {
    const audio = get().audio;
    if (audio) {
      audio.paused ? get().play() : get().pause();
    }
  },
}));
