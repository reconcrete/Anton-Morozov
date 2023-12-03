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
          <p>{item.name}</p>
        </Link>
      ))}

      {/* <Link
        href={"mailto:admorozov64@gmail.com"}
        className="ml-auto flex items-center gap-x-2 rounded-full bg-white px-4 py-2 text-black"
      >
        <div className="h-[15px] w-[15px] animate-pulse rounded-full bg-black"></div>
        <p>Let&apos;s Connect</p>
      </Link> */}
    </nav>
  );
};
