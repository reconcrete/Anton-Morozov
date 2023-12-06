import Link from "next/link";
import React from "react";

const navigationItems = [
  {
    name: "Main",
    href: "/",
  },
  {
    name: "Projects",
    href: "/projects",
  },
];

export const Navigation = () => {
  return (
    <nav className="flex items-center gap-x-12 pt-[50px]">
      {navigationItems.map((item, index) => (
        <Link key={index} href={item.href}>
          <p className="text-[18px]">{item.name}</p>
        </Link>
      ))}

      <Link
        href={"mailto:admorozov64@gmail.com"}
        className="ml-auto flex items-center gap-x-2 rounded-[15px] bg-white px-5 py-2.5 text-black"
      >
        <div className="h-[8px] w-[8px] animate-pulse rounded-full bg-[#A129FF]"></div>
        <p className="text-[18px]">Let&apos;s Connect</p>
      </Link>
    </nav>
  );
};
