"use client";

import dynamic from "next/dynamic";

type DesktopOnlyProps = {
  children: React.ReactNode;
};

const DesktopOnlyWrapper: React.FC<DesktopOnlyProps> = ({ children }) => {
  if (typeof screen !== "undefined" && screen.width >= 1024) return children;
  return null;
};

export const DesktopOnly = dynamic(() => Promise.resolve(DesktopOnlyWrapper), {
  ssr: false,
});
