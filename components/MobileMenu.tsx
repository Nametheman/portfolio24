import React from "react";
import {
  LayoutPanelLeft,
  Home,
  UserRound,
  PencilRuler,
  HardHat,
  ClipboardList,
  MessageSquareMore,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import Link from "next/link";
import { cn } from "@/lib/utils";

import useHash from "@/lib/useHash";

const MobileMenu = () => {
  const [hash, setHash] = useHash();
  const handleLinkClick = (path: string) => {
    setHash(path);
    window.location.hash = path;
  };
  const links = [
    { name: "Home", path: "#home", icon: <Home size={18} /> },
    { name: "About", path: "#about", icon: <UserRound size={18} /> },
    { name: "Skills", path: "#skills", icon: <PencilRuler size={18} /> },
    { name: "Services", path: "#services", icon: <HardHat size={18} /> },
    { name: "Projects", path: "#projects", icon: <ClipboardList size={18} /> },
    {
      name: "Contact",
      path: "#contact",
      icon: <MessageSquareMore size={18} />,
    },
  ];
  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button className="border-2 border-myText animate-pulse rounded-full bg-transparent h-[40px] w-[40px] flex items-center justify-center p-0 hover:bg-transparent lg:hidden">
          <LayoutPanelLeft size={18} className="text-primary" />
        </Button>
      </DrawerTrigger>
      <DrawerContent>
        <div className="mx-auto w-full max-w-sm grid grid-cols-3 gap-8 my-10">
          {links.map((link) => {
            return (
              <Link
                href={link.path}
                key={link.path}
                onClick={() => handleLinkClick(link.path)}
                className={cn(
                  "justify-self-center flex flex-col items-center gap-1 transition-all duration-300 ease-in-out",
                  hash === link.path ? "text-black font-bold" : "text-myText"
                )}
              >
                {link.icon}
                <p className="text-sm">{link.name}</p>
              </Link>
            );
          })}
        </div>
      </DrawerContent>
    </Drawer>
  );
};

export default MobileMenu;
