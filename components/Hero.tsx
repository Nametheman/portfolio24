import Image from "next/image";
import React from "react";
import photo from "@/assets/images/photo.png";
import Socials from "./Socials";
import { Button } from "./ui/button";
import { TbBrandTelegram } from "react-icons/tb";
import { VscCoffee } from "react-icons/vsc";

const Hero = () => {
  return (
    <div className="px-4 py-[3.5rem] lg:px-10 lg:flex lg:flex-row-reverse lg:gap-[5rem] items-center">
      <div className="flex items-center justify-between lg:flex-row-reverse lg:flex-1">
        <Socials />
        <div></div>
        <div className="border-8 border-[#333] dark:border-[#f7f7f7] w-[220px] h-[220px] rounded-full lg:w-[500px] lg:h-auto flex justify-center items-center borderAnimate overflow-hidden">
          <Image
            src={photo}
            alt="my_photo"
            width={2000}
            height={2000}
            className="rounded-full h-[260px] w-[260px] lg:w-[120%] lg:h-auto object-cover lg:grayscale"
          />
        </div>
      </div>
      <div className="mt-14 lg:flex-1">
        <span>
          <div className="relative">
            <h2 className="text-3xl lg:text-6xl font-bold textGloss">
              Emmanuel Owolabi
            </h2>
          </div>
          <p className="font-medium">--- Frontend Engineer</p>
        </span>
        <p className="mt-6 text-[1.1rem] tracking-wide">
          Hello, I am Emmanuel. A solution-oriented Fullstack developer that is
          passionate about building dynamic web and mobile applications{" "}
        </p>
        <div className="mt-6 flex item  gap-6 justify-between lg:justify-normal">
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
