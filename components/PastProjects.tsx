import React from "react";
import ProjectCard from "./cards/ProjectCard";
import { personalProjects } from "@/lib/data";

const PastProjects = () => {
  const Projects = [];
  return (
    <div className="px-8 py-[3.5rem] mb-20">
      {" "}
      <h2 className="text-3xl text-center font-bold">My Projects</h2>
      <p className="text-light text-center font-light text-xs">
        Some cool things I have built or still building
      </p>
      <div className="mt-10 grid gap-[4rem] grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {personalProjects.map((project, index: number) => {
          return <ProjectCard key={index} data={project} index={index} />;
        })}
      </div>
    </div>
  );
};

export default PastProjects;
