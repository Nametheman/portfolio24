import React from "react";
import { cn } from "@/lib/utils";

type TWorkTreeProps = {
  data: any;
};
const WorkTree = ({ data }: TWorkTreeProps) => {
  return (
    <div className="flex items-start gap-5 h-[340px]">
      <div className="flex flex-col items-center h-full">
        <div className="w-[18px] h-[18px] rounded-full bg-[#333] dark:bg-[#e2e2e2]"></div>
        <div className="w-[2px] h-full flex-1 bg-[#333] dark:bg-[#e2e2e2]"></div>
      </div>
      <div className="py-8">
        <h3 className="font-bold">{data.name}</h3>
        <p className="font-medium">Frontend Engineer</p>
        <p className="text-xs">
          {data.startDate} - {data.endDate}
        </p>
        <ul className="list-none mt-3 list-item">
          {data.achievements.map((achievement: any) => {
            return (
              <li className="mb-2 text-sm" key={achievement}>
                {achievement}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default WorkTree;
