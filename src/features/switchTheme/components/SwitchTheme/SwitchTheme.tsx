"use client";

import { useEffect, useState } from "react";
import { MoonIcon, SunIcon } from "@shared/icons";
import { useGeneral } from "@/src/entities/general";

export const SwitchTheme: React.FC<React.ButtonHTMLAttributes<HTMLButtonElement>> = (props) => {
  const [isDarkMode, setIsDarkMode] = useGeneral((state) => [state.isDarkMode, state.setIsDarkMode]);

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
      setIsDarkMode(false);
    } else {
      document.getElementsByTagName("html")[0].classList.add("dark");
      localStorage.setItem("darkMode", "1");
      setIsDarkMode(true);
    }
  };

  return (
    <button className="block" onClick={(e) => handleThemeClick(e)} title="Switch light or dark theme" {...props}>
      {isDarkMode ? <SunIcon className="h-8" /> : <MoonIcon className="dark:text-dark-text h-8" />}
    </button>
  );
};
