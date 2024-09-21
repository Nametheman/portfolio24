import React, { useState, useEffect } from "react";
import AlternateReverseTimeline from "./tree/Timeline";
import { experiences } from "@/lib/data";
import ExperienceCard from "./cards/ExperienceCard";

const Experiences = () => {
  const [screenWidth, setScreenWidth] = useState(0);
  useEffect(() => {
    setScreenWidth(window.innerWidth);
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [screenWidth]);
  return (
    <div className="px-8 py-[3.5rem]">
      {" "}
      <h2 className="text-3xl text-center font-bold">Experience</h2>
      <p className="text-light text-center font-light text-xs">
        Some places I have made and/or still making a mark
      </p>
      <div className="mt-10">
        {screenWidth <= 768 ? (
          <div className="flex flex-col gap-8">
            {experiences.map((experience: any, index: number) => {
              return <ExperienceCard data={experience} key={index} />;
            })}
          </div>
        ) : (
          <AlternateReverseTimeline data={experiences} />
        )}
      </div>
    </div>
  );
};

export default Experiences;
