import React from "react";
import SkillCard from "./SkillCard";
import { Button } from "./ui/button";
import { VscTools } from "react-icons/vsc";
import { skillSet } from "@/lib/data";

const Skills = () => {
  return (
    <div className="px-8 py-[3.5rem]">
      <h2 className="text-3xl text-center font-bold">Skills & Tools</h2>
      <p className="text-light text-center font-light text-xs">
        A breakdown of my arsenal
      </p>
      <div className="mt-10 flex flex-col lg:flex-row gap-10 lg:place-content-center">
        {skillSet.map((set) => (
          <SkillCard key={set.name} data={set} />
        ))}
      </div>
      <div className="flex justify-center mt-10 relative">
        <a href="https://github.com/nametheman" target="_blank">
          <Button className="gap-1">
            View More <VscTools size={20} />
          </Button>
        </a>
      </div>
    </div>
  );
};

export default Skills;
