"use client";

import { SoundOffIcon, SoundOnIcon } from "@/src/shared/icons";
import { useGeneral } from "@entities/general";

export const ToggleSound = () => {
  const [disableAppSound, setDisableAppSound] = useGeneral((state) => [
    state.disableAppSound,
    state.setDisableAppSound,
  ]);

  const toggleSound = () => {
    setDisableAppSound(!disableAppSound);
  };

  return disableAppSound ? (
    <button onClick={toggleSound}>
      <SoundOffIcon />
    </button>
  ) : (
    <button onClick={toggleSound}>
      <SoundOnIcon />
    </button>
  );
};
