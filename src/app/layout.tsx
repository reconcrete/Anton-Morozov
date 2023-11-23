import type { Metadata } from "next";
import { Inter } from "next/font/google";

import { Navigation } from "@components/Navigation";

import "./globals.css";
import clsx from "clsx";
import { BackgroundShape } from "../components/BackgroundShape";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Morozov Anton Portfolio",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={clsx(inter.className, "relative")}>
        <Navigation />
        {children}
        <BackgroundShape />
      </body>
    </html>
  );
}
