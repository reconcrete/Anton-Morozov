import clsx from "clsx";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";

import { Navigation } from "@widgets/navigation";
import { BackgroundShape } from "@widgets/backgroundShape";

import { ThemeProvider } from "next-themes";

import "../../../public/globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Anton Morozov",
  description: "Morozov Anton Portfolio",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={clsx(
          inter.className,
          "relative flex min-h-[100dvh] flex-col overflow-hidden bg-[#F5F5F5] text-black dark:bg-[#1a1a1a] dark:text-white",
        )}
      >
        <ThemeProvider enableSystem={false} attribute="class">
          <div className="z-[100]">
            <Navigation />
            {children}
          </div>

          <BackgroundShape />
        </ThemeProvider>
      </body>
      {process.env.NODE_ENV !== "development" && <Analytics />}
    </html>
  );
}
