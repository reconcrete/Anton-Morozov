"use client";

import { useEffect, useRef } from "react";

import { useMusic } from "@entities/music";

export const MusicPlayer = () => {
  const currentSong = useMusic((state) => state.currentSong);
  const setCurrentSong = useMusic((state) => state.setCurrentSong);

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

  return <audio ref={audioRef} src={`/music/${currentSong}.mp3`} />;
};
