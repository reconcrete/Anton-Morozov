import { create } from "zustand";

const allowedSongs = ["coldplay", "киш", "rhcp", "foals"];

type MusicState = {
  currentSong?: string;
};

type MusicAction = {
  setCurrentSong: (currentSong: string | undefined) => void;
};

export const useMusic = create<MusicState & MusicAction>()((set) => ({
  setCurrentSong: (currentSong) => {
    const lowerCaseCurrentSong = currentSong?.toLowerCase();

    if (lowerCaseCurrentSong && allowedSongs.includes(lowerCaseCurrentSong)) {
      set({ currentSong: lowerCaseCurrentSong });
    } else {
      set({ currentSong: undefined });
    }
  },
}));
