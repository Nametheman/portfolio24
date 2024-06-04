import React from "react";
import { IconType } from "react-icons";

interface Props {
  data: { name: string; value: string; icon: any };
}
const ExperienceCard: React.FC<Props> = ({ data }) => {
  return (
    <div className="border w-full rounded-xl flex flex-col items-center p-2 gap-1 hover:scale-105 transition-all ease-linear">
      {data.icon}
      <p className="font-bold">{data.name}</p>
      <p className="text-[0.65rem]">{data.value}</p>
    </div>
  );
};

export default ExperienceCard;
