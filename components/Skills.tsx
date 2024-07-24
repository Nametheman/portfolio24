import React from "react";
import SkillCard from "./SkillCard";
import { Button } from "./ui/button";
import { VscTools } from "react-icons/vsc";
import zustand from "@/assets/images/zustand.png";
import redux from "@/assets/images/redux.png";
import tailwind from "@/assets/images/tailwind.png";
import tanstack from "@/assets/images/tanstack.png";
import styledComponents from "@/assets/images/styled-components.png";

const Skills = () => {
  const skillSet = [
    {
      name: "Frontend Development",
      tools: [
        {
          name: "HTML",
          percentage: 90,
        },
        {
          name: "CSS",
          percentage: 80,
        },
        {
          name: "Javascript",
          percentage: 70,
        },
        {
          name: "Typescript",
          percentage: 60,
        },
        {
          name: "React",
          percentage: 80,
        },
        {
          name: "Next JS",
          percentage: 70,
        },
        {
          name: "Angular JS",
          percentage: 30,
        },
      ],
      otherTools: [
        { name: "Zustand", icon: zustand },
        { name: "Redux", icon: redux },
        { name: "Tailwind Css", icon: tailwind },
        { name: "Tanstack Query", icon: tanstack },
        { name: "styled-components", icon: styledComponents },
      ],
    },
    {
      name: "Backend Development",
      tools: [
        {
          name: "Node JS",
          percentage: 30,
        },
        {
          name: "Express JS",
          percentage: 50,
        },
        {
          name: "Mongo DB",
          percentage: 50,
        },
      ],
      otherTools: [],
    },
    {
      name: "Mobile Development",
      tools: [
        {
          name: "React Native",
          percentage: 80,
        },

        {
          name: "Skia",
          percentage: 40,
        },
        { name: "ReAnimated", percentage: 40 },
      ],
      otherTools: [],
    },
  ];
  return (
    <div className="px-8 py-[3.5rem]">
      {" "}
      <h2 className="text-3xl text-center font-bold">Skills & Tools</h2>
      <p className="text-light text-center font-light text-xs">
        A breakdown of my arsenal
      </p>
      <div className="mt-10 flex flex-col gap-10">
        {skillSet.map((set, index) => (
          <SkillCard key={set.name} data={set} />
        ))}
      </div>
      <div className="flex justify-center mt-10">
        <Button className="gap-1">
          View More <VscTools size={20} />
        </Button>
      </div>
    </div>
  );
};

export default Skills;
