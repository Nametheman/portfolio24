"use client";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { PAGE_LINKS } from "@/constants";

const Nav = () => {
  const pathname = usePathname();
  return (
    <nav className="flex gap-8">
      {PAGE_LINKS.map((link) => {
        return (
          <Link
            href={link.path}
            key={link.path}
            className={cn(
              link.path === pathname && "text-accent border-b-2 border-accent",
              "capitalize font-medium hover:text-accent transition-all"
            )}
          >
            {link.name}
          </Link>
        );
      })}
    </nav>
  );
};

export default Nav;
