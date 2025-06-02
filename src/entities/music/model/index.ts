import { create } from "zustand";

const allowedSongs = ["coldplay", "киш", "rhcp", "foals"];

type MusicState = {
  audio: HTMLAudioElement;
};

type MusicAction = {
  setCurrentSong: (currentSong: string | undefined) => void;
  play: () => void;
  pause: () => void;
  toggle: () => void;
};

export const useMusic = create<MusicState & MusicAction>()((set, get) => ({
  audio: new Audio(),

  setCurrentSong: (currentSong) => {
    const lowerCaseCurrentSong = currentSong?.toLowerCase();

    if (lowerCaseCurrentSong && allowedSongs.includes(lowerCaseCurrentSong)) {
      set({ audio: new Audio(`/music/${lowerCaseCurrentSong}.mp3`) });
    } else {
      set({ audio: new Audio() });
    }
  },

  play: () => {
    get().audio.play();
  },

  pause: () => {
    get().audio.pause();
  },

  toggle: () => {
    get().audio.paused ? get().play() : get().pause();
  },
}));
