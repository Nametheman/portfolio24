import { cn } from "@/lib/utils";
import React from "react";
import { LuGithub, LuLinkedin } from "react-icons/lu";
import { RiTwitterXLine } from "react-icons/ri";

interface SocialsProps {
  className?: string;
}
const Socials = ({ className }: SocialsProps) => {
  return (
    <div className={cn("flex flex-col gap-4 text-2xl relative", className)}>
      <a href="https://github.com/nametheman" target="_blank">
        <LuGithub className="cursor-pointer hover:scale-150 transition-all duration-300 ease-linear" />
      </a>
      <a
        href="https://www.linkedin.com/in/emmanuel-owolabi-6b5b73172/"
        target="_blank"
      >
        <LuLinkedin className="cursor-pointer hover:scale-150 transition-all duration-300 ease-linear" />
      </a>
      <a href="https://x.com/Infiniti0X" target="_blank">
        <RiTwitterXLine className="cursor-pointer hover:scale-150 transition-all duration-300 ease-linear" />
      </a>
    </div>
  );
};

export default Socials;
