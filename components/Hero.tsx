import Image from "next/image";
import React from "react";
import photo from "@/assets/images/photo.png";
import Socials from "./Socials";
import { Button } from "./ui/button";
import { TbBrandTelegram } from "react-icons/tb";
import { VscCoffee } from "react-icons/vsc";

const Hero = () => {
  return (
    <div className="px-4 py-[3.5rem]">
      <div className="flex items-center justify-between">
        <Socials />
        <div></div>
        <div className="border-8 border-[#333] dark:border-[#f7f7f7] w-[220px] h-[220px] rounded-full flex justify-center items-center borderAnimate overflow-hidden">
          <Image
            src={photo}
            alt="my_photo"
            width={2000}
            height={2000}
            className="rounded-full h-[260px] w-[260px] object-cover"
          />
        </div>
      </div>
      <div className="mt-10">
        <span>
          <h2 className="text-3xl font-bold">Emmanuel Owolabi</h2>
          <p className="font-medium">--- Fullstack Software Developer</p>
        </span>
        <p className="mt-6 text-[1.1rem] tracking-wide">
          Hello, I am Emmanuel. A solution-oriented Fullstack developer that is
          passionate about building dynamic web and mobile applications{" "}
        </p>
        <div className="mt-6 flex item  gap-6 justify-between">
          <Button variant="default" className="flex items-center gap-3 py-6">
            Let&apos;s Talk <TbBrandTelegram size={22} />
          </Button>
          <Button variant="default" className="flex items-center gap-3 py-6">
            Buy Me Coffee <VscCoffee size={22} />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
