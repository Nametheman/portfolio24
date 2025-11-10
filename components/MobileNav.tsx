"use client";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { CiMenuFries } from "react-icons/ci";
import { PAGE_LINKS } from "@/constants";
import { cn } from "@/lib/utils";
import { useState } from "react";

const MobileNav = () => {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger className="flex justify-center items-center">
        <CiMenuFries className="text-[32px] text-accent" />
      </SheetTrigger>
      <SheetContent className="flex flex-col">
        <div className="mt-32 mb-40 text-center text-2xl">
          <Link href={"/"}>
            <h1 className="text-4xl font-semibold">
              Emmy<span className="text-accent">.</span>dev
            </h1>
          </Link>
        </div>
        <nav className="flex flex-col justify-center items-center gap-8">
          {PAGE_LINKS.map((link, index) => {
            return (
              <Link
                href={link.path}
                key={index}
                className={cn(
                  link.path === pathname &&
                    "text-accent border-b-2 border-accent",
                  "text-xl capitalize hover:text-accent transition-all"
                )}
                onClick={() => setOpen(false)}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
