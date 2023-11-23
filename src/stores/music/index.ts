import { create } from "zustand";

type AllowedSongs = "coldplay" | "киш" | "rhcp";

export type MusicState = {
  currentSong?: AllowedSongs;
};

type MusicAction = {
  setCurrentSong: (currentSong: AllowedSongs | undefined) => void;
};

export const useMusic = create<MusicState & MusicAction>()((set) => ({
  setCurrentSong: (currentSong) => set({ currentSong }),
}));
