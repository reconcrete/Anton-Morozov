import { create } from "zustand";
import { persist } from "zustand/middleware";

export type GeneralState = {
  isSoundEnabled: boolean;
};

type GeneralAction = {
  toggleSound: () => void;
};

export const useGeneral = create<GeneralState & GeneralAction>()(
  persist(
    (set, get) => ({
      isSoundEnabled: true,

      toggleSound: () => {
        const currentState = get().isSoundEnabled;
        const newState = !currentState;
        
        const audioElements = document.querySelectorAll("audio");
        audioElements.forEach((audioElement) => {
          audioElement.muted = !newState;
        });

        set({ isSoundEnabled: newState });
      },
    }),
    {
      name: "general-storage",
      getStorage: () => localStorage,
      version: 1,
    },
  ),
);
