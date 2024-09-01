"use client";

import { useEffect, useState } from "react";

type SmoothShowProps = {
  children: React.ReactNode;
  delayBeforeShowing?: number;
  duration?: number;
};

export const SmoothShow: React.FC<SmoothShowProps> = ({ children, delayBeforeShowing = 2000, duration = 200 }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, delayBeforeShowing);

    return () => clearTimeout(timer);
  }, [delayBeforeShowing]);

  return (
    <div
      className={`transition-opacity ease-in-out ${isVisible ? "opacity-100" : "opacity-0"}`}
      style={{ transitionDuration: `${duration}ms` }}
    >
      {children}
    </div>
  );
};
