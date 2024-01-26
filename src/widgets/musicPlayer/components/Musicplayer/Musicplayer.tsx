"use client";

import { useEffect, useRef } from "react";

import { useMusic } from "@entities/music";
import { useGeneral } from "@entities/general";

export const MusicPlayer = () => {
  const currentSong = useMusic((state) => state.currentSong);
  const setCurrentSong = useMusic((state) => state.setCurrentSong);

  const disableAppSound = useGeneral((state) => state.disableAppSound);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    if (!currentSong) return;

    const audio = audioRef.current;
    if (!audio) return;

    audio.play();

    audio.addEventListener("ended", () => {
      debugger;
      setCurrentSong(undefined);
    });
  }, [currentSong]);

  if (!currentSong) return null;

  return <audio muted={disableAppSound} ref={audioRef} src={`/music/${currentSong}.mp3`} />;
};
