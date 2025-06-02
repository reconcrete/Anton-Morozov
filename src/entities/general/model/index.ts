import { create } from "zustand";
import { persist } from "zustand/middleware";

export type GeneralState = {
  disableAppSound: boolean;
};

type GeneralAction = {
  setDisableAppSound: (disableAppSound: boolean) => void;
};

export const useGeneral = create<GeneralState & GeneralAction>()(
  persist(
    (set) => ({
      disableAppSound: false,

      setDisableAppSound: (disableAppSound) => {
        const audioElements = document.querySelectorAll("audio");
        audioElements.forEach((audioElement) => {
          audioElement.muted = disableAppSound;
        });

        set({ disableAppSound });
      },
    }),
    {
      name: "general-storage",
      getStorage: () => localStorage,
      version: 1,
    },
  ),
);
