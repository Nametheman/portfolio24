import React from "react";
import { IconType } from "react-icons";

interface Props {
  data: any;
}
const AboutCard: React.FC<Props> = ({ data }) => {
  return (
    <div className="border w-full rounded-xl p-4 gap-1 hover:scale-105 transition-all ease-linear">
      {data.icon}
      <p className="font-bold">{data.name}</p>
      <p className="font-normal"></p>
      <p className="">{data.value}</p>{" "}
      <ul className="list-disc mt-5 ml-5">
        {data.achievements?.map((achievement: any) => {
          return (
            <li className="mb-2 text-sm" key={achievement}>
              {achievement}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default AboutCard;
