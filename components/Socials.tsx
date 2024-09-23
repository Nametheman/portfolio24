import { cn } from "@/lib/utils";
import React from "react";
import { LuGithub, LuLinkedin } from "react-icons/lu";
import { RiTwitterXLine } from "react-icons/ri";

interface SocialsProps {
  className?: string;
}
const Socials = ({ className }: SocialsProps) => {
  return (
    <div className={cn("flex flex-col gap-4 text-2xl", className)}>
      <LuGithub className="cursor-pointer hover:scale-150 transition-all duration-300 ease-linear" />
      <LuLinkedin className="cursor-pointer hover:scale-150 transition-all duration-300 ease-linear" />
      <RiTwitterXLine className="cursor-pointer hover:scale-150 transition-all duration-300 ease-linear" />
    </div>
  );
};

export default Socials;
