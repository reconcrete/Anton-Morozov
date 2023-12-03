"use client";

import { useState } from "react";
import Spline from "@splinetool/react-spline";

import { Chat } from "./Chat";

const SPLINE_KEYBOARD_HEIGHT = 200;
const SPLINE_KEYBOARD_WIDTH = 478;

export const VirtualComputer = () => {
  const [isLoading, setIsLoading] = useState(true);

  if (typeof screen === "undefined" || screen.width < 1024) return null;

  const onSplineLoad = () => {
    setTimeout(() => {
      setIsLoading(false);
    }, 100);
  };

  return (
    <div
      className="relative mt-5 hidden h-[500px] max-h-[500px] flex-col justify-end transition-all duration-500 ease-in-out lg:flex"
      style={{ perspective: "140px", opacity: isLoading ? 0 : 1, transform: isLoading ? "scale(0.9)" : "scale(1)" }}
    >
      <div
        className="absolute bottom-[190px] left-[75px] h-[250px] w-[400px] rounded-[36px] border-[1px] border-white p-3.5 text-[14px] text-white"
        style={{ transform: "skewY(10.5deg) rotateY(-1.5deg)" }}
      >
        <div className="h-full w-full overflow-auto rounded-[24px] border-[1px] border-white p-5">
          <Chat />
        </div>
      </div>

      <Spline
        style={{
          width: `${SPLINE_KEYBOARD_WIDTH}px`,
          maxWidth: `${SPLINE_KEYBOARD_WIDTH}px`,
          maxHeight: `${SPLINE_KEYBOARD_HEIGHT}px`,
        }}
        onLoad={onSplineLoad}
        scene="https://prod.spline.design/w6IPQnB5xMSipyMm/scene.splinecode"
      />
    </div>
  );
};

export default VirtualComputer;
