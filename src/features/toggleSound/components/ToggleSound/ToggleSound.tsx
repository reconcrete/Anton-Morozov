"use client";

import { useEffect, useState } from "react";

import { SoundOffIcon, SoundOnIcon } from "@shared/icons";
import { useGeneral } from "@entities/general";
import { useMusic } from "@/src/entities/music";

export const ToggleSound = () => {
  const isSoundEnabled = useGeneral((state) => state.isSoundEnabled);
  const toggleSound = useGeneral((state) => state.toggleSound);

  const toggleCurrentSong = useMusic((state) => state.toggle);

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="h-8 w-3"></div>;
  }

  return (
    <button
      onClick={(e) => {
        e.currentTarget.blur();
        toggleSound();
        toggleCurrentSong();
      }}
    >
      {isSoundEnabled ? <SoundOffIcon /> : <SoundOnIcon />}
    </button>
  );
};
