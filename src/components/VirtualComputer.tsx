"use client";

import { useEffect, useState } from "react";
import { Press_Start_2P } from "next/font/google";
import Spline from "@splinetool/react-spline";
import clsx from "clsx";
import { useMusic } from "@stores/music";

const geekyFont = Press_Start_2P({ weight: "400", subsets: ["latin"] });

export const VirtualComputer = () => {
  const [text, setText] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  const setCurrentSong = useMusic((state) => state.setCurrentSong);

  useEffect(() => {
    function parseCode(code: string): { functionName: string; argument: string | null } | null {
      const regex = /^(\w+)\(["']?([^"']*)["']?\)$/;

      const match = code.match(regex);

      if (match) {
        const [, functionName, argument] = match;
        return { functionName, argument: argument || null };
      } else {
        return null;
      }
    }

    const handleCode = (functionName: string, argument: string | null) => {
      const lowerCaseArgument = argument ? argument.toLowerCase() : null;
      if (functionName === "play_music") {
        if (lowerCaseArgument !== "coldplay" && lowerCaseArgument !== "киш" && lowerCaseArgument !== "rhcp") return;

        setCurrentSong(lowerCaseArgument);
      } else if (functionName === "stop_music") {
        setCurrentSong(undefined);
      }
    };

    const mainKeyListener = (e: KeyboardEvent) => {
      if (e.key === "Enter") {
        const code = parseCode(text);
        if (!code) {
          setText("");
          return;
        }

        handleCode(code.functionName, code.argument);

        setText("");
      } else if (e.key === "Backspace") {
        if (e.metaKey) {
          setText("");
          return;
        }

        setText((text) => text.slice(0, -1));
      } else if (
        e.key === "Shift" ||
        e.key === "Alt" ||
        e.key === "Control" ||
        e.key === "Meta" ||
        e.key === "Tab" ||
        e.key === "CapsLock" ||
        e.key === "Escape" ||
        e.key === "ArrowUp" ||
        e.key === "ArrowDown" ||
        e.key === "ArrowLeft" ||
        e.key === "ArrowRight"
      ) {
        // do nothing
      } else if (e.key === " ") {
        setText((text) => text + " ");
        e.preventDefault();
      } else {
        setText((text) => text + e.key);
      }
    };

    addEventListener("keydown", mainKeyListener);

    return () => {
      removeEventListener("keydown", mainKeyListener);
    };
  }, [setCurrentSong, text]);

  const onSplineLoad = () => {
    setTimeout(() => {
      setIsLoading(false);
    }, 100);
  };

  return (
    <div
      className="relative mt-5 flex h-[500px] max-h-[500px] w-[575px] max-w-[575px] flex-col justify-end transition-all duration-500 ease-in-out"
      style={{ perspective: "140px", opacity: isLoading ? 0 : 1, transform: isLoading ? "scale(0.9)" : "scale(1)" }}
    >
      <div
        className="absolute bottom-[175px] left-[200px] h-[250px] w-[400px] overflow-auto rounded-[36px] border-[1px] border-white p-3.5 text-[14px] text-[#3cb043]"
        style={{ transform: "skewY(10.5deg) rotateY(-1.5deg) translateX(-30px) translateY(-15px)" }}
      >
        <div className="w-full h-full border-[1px] border-white p-5 rounded-[24px]">
          <p className={clsx(geekyFont.className, "text-sm")}>
            <span className="text-white">&gt; </span>
            {text}
            <span className="animate-pulse text-white">_</span>
          </p>
        </div>
      </div>

      <div className="max-h-[250px]">
        <Spline onLoad={onSplineLoad} scene="https://prod.spline.design/GV1Nng-ns6JAXdli/scene.splinecode" />
      </div>
    </div>
  );
};
