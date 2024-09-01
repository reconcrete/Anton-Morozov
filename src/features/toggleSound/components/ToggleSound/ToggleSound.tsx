"use client";

import { SoundOffIcon, SoundOnIcon } from "@/src/shared/icons";
import { useGeneral } from "@entities/general";

export const ToggleSound = () => {
  const [disableAppSound, setDisableAppSound] = useGeneral((state) => [
    state.disableAppSound,
    state.setDisableAppSound,
  ]);

  const toggleSound = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.currentTarget.blur();
    setDisableAppSound(!disableAppSound);
  };

  return disableAppSound ? (
    <button onClick={(e) => toggleSound(e)}>
      <SoundOffIcon />
    </button>
  ) : (
    <button onClick={(e) => toggleSound(e)}>
      <SoundOnIcon />
    </button>
  );
};
