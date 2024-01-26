import Link from "next/link";
import React from "react";

import { ToggleSound } from "@features/toggleSound";
import { SendEmail } from "@features/sendEmail";

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

      <div className="ml-auto flex items-center gap-x-12">
        <SendEmail />
        <ToggleSound />
      </div>
    </nav>
  );
};
