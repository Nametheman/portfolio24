import React from "react";
import WorkTree from "./tree/WorkTree";

const Experiences = () => {
  const experiences = [
    {
      name: "NOEMDEK LTD.",
      startDate: "January 2024",
      endDate: "Current",
      achievements: [
        "Lead the Frontend Development Team to see to the successful completion of the company's projects.",
        "Managed 2 different projects with a focus on React and Next JS. Managed to get them launched in 2024.",
        "Actively contributing the startup's development in the tech world through innovative ideas.",
      ],
      direction: "right",
    },
    {
      name: "TM3O GLOBAL SOLUTIONS",
      startDate: "March 2022",
      endDate: "December 2023",
      achievements: [
        "Worked on about 8 Projects with TM30. All of which are currently live and solving problems",
        "Actively contributed to the development of a banking solution that has generated ove 2 billion naira in revenue.",
        "Taught Interns and other Juinior Developers how to solve problems with React and Next JS.",
      ],
      direction: "left",
    },

    {
      name: "SWATINI POWER LTD.",
      startDate: "June 2021",
      endDate: "January 2022",
      achievements: [
        "Spearheaded two Projects with swatini power for the business web presence. These two  web applications are currently live.",
        "Researched and used standard SEO practices that got the website indexed 4th on google in Lagos.",
        "Added new features to the existing platform with React and Next JS.",
      ],
      direction: "right",
    },
  ];
  return (
    <div className="px-8 py-[3.5rem]">
      {" "}
      <h2 className="text-3xl text-center font-bold">Experience</h2>
      <p className="text-light text-center font-light text-xs">
        An overview of my past experiences{" "}
      </p>
      <div className="mt-10">
        {experiences.map((experience) => (
          <WorkTree key={experience.name} data={experience} />
        ))}
      </div>
    </div>
  );
};

export default Experiences;
