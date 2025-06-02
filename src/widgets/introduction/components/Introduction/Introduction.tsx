import React from "react";
import { Magra } from "next/font/google";
import clsx from "clsx";

import { socials } from "../../constants";

const magraFont = Magra({ weight: "700", subsets: ["latin"] });

export const Introduction = () => {
  return (
    <div className="flex flex-col justify-center">
      <h1
        className={clsx(
          magraFont.className,
          "mb-[20px] -translate-x-0 text-[80px] leading-none lg:mb-0 lg:-translate-x-2 lg:text-[160px] select-none",
        )}
      >
        Hi{" "}
        <span className="relative">
          There
          <svg
            className="absolute -right-16 -top-2"
            xmlns="http://www.w3.org/2000/svg"
            width="61"
            height="61"
            viewBox="0 0 61 61"
            fill="none"
          >
            <path
              d="M30.5 0L34.7918 26.2082L61 30.5L34.7918 34.7918L30.5 61L26.2082 34.7918L0 30.5L26.2082 26.2082L30.5 0Z"
              className="fill-black dark:fill-white"
            />
          </svg>
        </span>
      </h1>

      <p className="mt-4 max-w-[450px]">
        My name is Anton. I have a passion for programming, mathematics, and music. <br />
        <br /> This website is the central hub where you can find all the information about me and my <br /> work.
      </p>

      <div className="mt-10 flex justify-between gap-2.5 md:justify-start">
        {socials.map(({ href, iconSvg }, i) => (
          <a
            key={i}
            href={href}
            target="_blank"
            className={clsx(
              "rounded-[15px] border-[1px] px-10 py-3 md:px-12",
              "border-black hover:border-purple-500",
              "dark:border-white dark:hover:border-purple-300/40",
              "transition-colors duration-200",
            )}
          >
            {iconSvg}
          </a>
        ))}
      </div>
    </div>
  );
};
