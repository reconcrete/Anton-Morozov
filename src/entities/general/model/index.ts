import { create } from "zustand";

export type GeneralState = {
  disableAppSound: boolean;
  isDarkMode: boolean;
};

type GeneralAction = {
  setDisableAppSound: (disableAppSound: boolean) => void;
  setIsDarkMode: (isDarkMode: boolean) => void;
};

export const useGeneral = create<GeneralState & GeneralAction>()((set) => ({
  disableAppSound: false,
  isDarkMode:
    typeof window === "undefined"
      ? false
      : localStorage.getItem("darkMode") === null
        ? false
        : Boolean(Number(localStorage.getItem("darkMode"))),

  setDisableAppSound: (disableAppSound) => {
    const audioElements = document.querySelectorAll("audio");
    audioElements.forEach((audioElement) => {
      audioElement.muted = disableAppSound;
    });

    set({ disableAppSound });
  },
  setIsDarkMode: (isDarkMode) => set({ isDarkMode }),
}));
