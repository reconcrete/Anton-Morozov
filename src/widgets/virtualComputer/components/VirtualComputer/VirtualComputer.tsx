"use client";

import { useState } from "react";

import { Keyboard } from "../Keyboard/Keyboard";
import { Monitor } from "../Monitor/Monitor";

export const VirtualComputer = () => {
  const [isLoading, setIsLoading] = useState(true);

  if (typeof screen === "undefined" || screen.width < 1024) return null;

  const onKeyboardLoad = () => {
    setTimeout(() => {
      setIsLoading(false);
    }, 300);
  };

  return (
    <div
      className="relative mt-5 hidden h-[500px] max-h-[500px] flex-col justify-end transition-all duration-500 ease-in-out lg:flex"
      style={{ perspective: "140px", opacity: isLoading ? 0 : 1, transform: isLoading ? "scale(0.9)" : "scale(1)" }}
    >
      <Monitor />
      <Keyboard onKeyboardLoad={onKeyboardLoad} />
    </div>
  );
};
