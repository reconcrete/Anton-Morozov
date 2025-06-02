"use client";

import { SoundOffIcon, SoundOnIcon } from "@shared/icons";
import { useGeneral } from "@entities/general";
import { useEffect, useState } from "react";

export const ToggleSound = () => {
  const [disableAppSound, setDisableAppSound] = useGeneral((state) => [
    state.disableAppSound,
    state.setDisableAppSound,
  ]);

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="h-8 w-3"></div>;
  }

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
