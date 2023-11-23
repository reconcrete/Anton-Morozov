"use client";

import { useEffect, useRef } from "react";
import { useMusic } from "@stores/music";

export const MusicPlayer = () => {
  const currentSong = useMusic((state) => state.currentSong);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    if (!currentSong) return;

    const audio = audioRef.current;
    if (!audio) return;

    audio.play();
  }, [currentSong]);

  if (!currentSong) return null;

  return (
    <audio ref={audioRef} src={`/${currentSong}.mp3`}>
      MusicPlayer
    </audio>
  );
};
