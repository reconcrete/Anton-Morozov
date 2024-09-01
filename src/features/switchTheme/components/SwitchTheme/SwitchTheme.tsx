"use client";

import { useEffect, useState } from "react";
import { MoonIcon, SunIcon } from "@shared/icons";

export const SwitchTheme: React.FC<React.ButtonHTMLAttributes<HTMLButtonElement>> = (props) => {
  const [isDarkMode, setIsDarkMode] = useState(
    typeof window === "undefined"
      ? true
      : localStorage.getItem("darkMode") === null
        ? matchMedia("(prefers-color-scheme: dark)").matches
        : Number(localStorage.getItem("darkMode")),
  );

  useEffect(() => {
    if (isDarkMode) {
      document.getElementsByTagName("html")[0].classList.add("dark");
    } else {
      document.getElementsByTagName("html")[0].classList.remove("dark");
    }
  }, [isDarkMode]);

  const handleThemeClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.currentTarget.blur();

    if (isDarkMode) {
      document.getElementsByTagName("html")[0].classList.remove("dark");
      localStorage.setItem("darkMode", "0");
      setIsDarkMode(0);
    } else {
      document.getElementsByTagName("html")[0].classList.add("dark");
      localStorage.setItem("darkMode", "1");
      setIsDarkMode(1);
    }
  };

  return (
    <button className="block" onClick={(e) => handleThemeClick(e)} title="Switch light or dark theme" {...props}>
      {isDarkMode ? <SunIcon className="dark:text-dark-text h-8" /> : <MoonIcon className="dark:text-dark-text h-8" />}
    </button>
  );
};
