import Image from "next/image";
import React from "react";
import photo from "@/assets/images/photo.png";
import ExperienceCard from "./ExperienceCard";
import { PiMedalThin } from "react-icons/pi";
import { VscRocket } from "react-icons/vsc";
import { HiOutlineUserPlus } from "react-icons/hi2";
import { GoGoal } from "react-icons/go";
import { Button } from "./ui/button";
import { VscDebugStart } from "react-icons/vsc";

const About = () => {
  const details = [
    {
      name: "Experience",
      value: "4 Years Working",
      icon: <PiMedalThin size={20} />,
    },
    {
      name: "Completed",
      value: "10+ Projects",
      icon: <GoGoal size={20} />,
    },
    {
      name: "Clients",
      value: "6+ Clients Worldwide",
      icon: <HiOutlineUserPlus size={20} />,
    },
    {
      name: "Deployed",
      value: "1 app deployed",
      icon: <VscRocket size={20} />,
    },
  ];
  return (
    <div className="px-8 py-[3.5rem]">
      <h2 className="text-3xl text-center font-bold">About Me</h2>
      <p className="text-light text-center font-light text-xs">
        Details about my journey
      </p>

      <div className="mx-auto w-full mt-10 flex justify-center profilePic">
        <div className="w-[220px] h-[220px] rounded-lg shadow rotate-12 transition-all ease-linear duration-300 aboutCard absolute -z-1"></div>

        <Image
          src={photo}
          alt="my_picture"
          className="w-[220px] h-[220px] object-cover rounded-lg shadow relative z-1"
        />
      </div>
      <div className="mt-10 grid grid-cols-2 justify-items-center w-full mx-auto gap-3">
        {details.map((detail) => (
          <ExperienceCard data={detail} key={detail.name} />
        ))}
      </div>
      <p className="mt-10 text-sm text-center leading-relaxed">
        My years of experience as a Fullstack Software Developer building
        dynamic and fucntional web applications and mobile applications is my
        fuel for delivering best possible results for your projects.{" "}
      </p>
      <div className="flex justify-center mt-10">
        <Button className="gap-1">
          Start Building <VscDebugStart size={20} />
        </Button>
      </div>
    </div>
  );
};

export default About;
