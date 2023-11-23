import Link from "next/link";
import React from "react";

const navigationItems = [
  {
    name: "Main",
    href: "/",
  },
  {
    name: "About",
    href: "/about",
  },
  // {
  //   name: "Projects",
  //   href: "/projects",
  // },
  {
    name: "Contacts",
    href: "/contacts",
  },
];

export const Navigation = () => {
  return (
    <nav className="pt-[50px] flex gap-x-12">
      {navigationItems.map((item, index) => (
        <Link key={index} href={item.href}>
          <p>{item.name}</p>
        </Link>
      ))}
    </nav>
  );
};
