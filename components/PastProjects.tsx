import React from "react";
import Project from "./Project";

const PastProjects = () => {
  return (
    <div className="px-8 py-[3.5rem] mb-20">
      {" "}
      <h2 className="text-3xl text-center font-bold">Past Projects</h2>
      <div className="flex flex-col items-center mt-10">
        <Project />
      </div>
    </div>
  );
};

export default PastProjects;
