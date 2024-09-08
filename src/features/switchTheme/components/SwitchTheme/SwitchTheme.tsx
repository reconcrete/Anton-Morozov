"use client";

import { MoonIcon, SunIcon } from "@shared/icons";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export const SwitchTheme: React.FC<React.ButtonHTMLAttributes<HTMLButtonElement>> = (props) => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <MoonIcon className="h-8" />;
  }

  console.log("theme", theme);

  return theme === "dark" ? (
    <button {...props} onClick={() => setTheme("light")}>
      <SunIcon className="h-8" />
    </button>
  ) : (
    <button {...props} onClick={() => setTheme("dark")}>
      <MoonIcon className="h-8" />
    </button>
  );
};
