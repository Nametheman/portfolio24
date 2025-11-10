"use client";

import { motion } from "framer-motion";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { BsArrowUpRight, BsGithub } from "react-icons/bs";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Link from "next/link";
import Image from "next/image";
import { Swiper as TSwiper } from "swiper/types";
import ecozar from "@/assets/images/ecozar.png";
import petro from "@/assets/images/petro.png";
import payarena from "@/assets/images/payarena.png";
import pop from "@/assets/images/pop.png";
import WorkSliderBtns from "@/components/WorkSliderBtns";

const projects = [
  {
    num: "01",
    category: "frontend",
    title: "Ecozar",
    description:
      "Ecozar Technologies is a leading solar energy company in Nigeria providing reliable, eco-friendly power solutions for homes and businesses. Their platform highlights affordable solar installations, flexible payment plans, and expert maintenance services.",
    stack: [
      { name: "Next.js" },
      { name: "Tailwind css" },
      { name: "Typescript" },
    ],
    image: ecozar,
    live: "https://ecozar.vercel.app/",
    github: "",
  },
  {
    num: "02",
    category: "frontend",
    title: "Points of Purpose",
    description:
      "Points of Purpose is a community-engagement platform that empowers individuals and organizations to make meaningful contributions. Participants earn points by joining workshops, volunteer events and initiatives, and later redeem those points for rewards.",
    stack: [
      { name: "Next.js" },
      { name: "Tailwind css" },
      { name: "Typescript" },
    ],
    image: pop,
    live: "https://pop-production.vercel.app/",
    github: "",
  },
  {
    num: "03",
    category: "fullstack",
    title: "Petrodata",
    description:
      "Petrodata by Diophalytics is a real-time petroleum data analytics platform that empowers businesses with actionable market intelligence. It provides fuel pricing insights, and analytical dashboards that support decision-making in Nigeria’s energy sector.",
    stack: [{ name: "Next.js" }, { name: "Tailwind.css" }, { name: "Nest.js" }],
    image: petro,
    live: "https://petrodata.diophalytics.com/",
    github: "",
  },
  {
    num: "04",
    category: "frontend",
    title: "Payarena",
    description:
      "Payarena is a dynamic payments platform in Nigeria that offers an all-in-one hub for bills payments, airtime & data top-ups, value-added services and fund transfers. Built to support Nigeria’s cashless-economy drive through web, mobile and POS payments.",
    stack: [
      { name: "React.js" },
      { name: "Javascript" },
      { name: "Tailwind css" },
    ],
    image: payarena,
    live: "https://payarena.com/",
    github: "",
  },
];

const Work = () => {
  const [project, setProject] = useState(projects[0]);

  const handleSlideChange = (swiper: TSwiper) => {
    const currIndex = swiper.activeIndex;

    setProject(projects[currIndex]);
  };
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-[30px] h-[50%]">
              <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
                {project.num}
              </div>
              <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
                {project.title}
              </h2>
              <p className="text-white/60">{project.description}</p>
              <ul className="flex gap-4">
                {project.stack.map((item, index) => {
                  return (
                    <li key={index} className="text-xl text-accent">
                      {item.name}
                      {index !== project.stack.length - 1 && ","}
                    </li>
                  );
                })}
              </ul>
              <div className="border border-white/20"></div>
              <div className="flex items-center gap-4">
                <Link href={project.live} target="_blank">
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsArrowUpRight className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Live project</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
                {/* <Link href={project.github}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsGithub className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Github repository</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link> */}
              </div>
            </div>
          </div>
          <div className="w-full xl:w-[50%]">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className="xl:h-[520px] mb-12"
              onSlideChange={handleSlideChange}
            >
              {projects.map((project, index) => {
                return (
                  <SwiperSlide key={index} className="w-full">
                    <div className="h-[460px] relative group flex justify-center items-center bg-pink-50/20">
                      <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>
                      <div className="relative w-full h-full">
                        <Image
                          src={project.image}
                          fill
                          className="object-cover"
                          alt=""
                        />
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
              <WorkSliderBtns
                containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"
                btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all"
                iconsStyles=""
              />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Work;
