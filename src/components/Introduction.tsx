import React from "react";
import { Koulen } from "next/font/google";
import clsx from "clsx";

const koulen = Koulen({ weight: "400", subsets: ["latin"] });

export const Introduction = () => {
  return (
    <div className="flex flex-1 flex-col justify-center">
      <h1 className={clsx(koulen.className, "text-[224px] leading-none")}>HI THERE</h1>
      <p className="max-w-[450px]">
        My name is Anton. I have a passion for programming, mathematics, and music. This website is the central place
        where you can find all the information about me and my work.
      </p>
    </div>
  );
};
