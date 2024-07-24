import React from "react";
import { Progress } from "@/components/ui/progress";
import { LuBadgeCheck } from "react-icons/lu";

interface ISkillProps {
  data: any;
}
const Skill: React.FC<ISkillProps> = ({ data }) => {
  let percentage = data.percentage || 0;
  const skillLevel = (percentage: number) => {
    if (percentage <= 50) {
      return "Beginner";
    } else if (percentage > 50 && percentage <= 70) {
      return "Intermediate";
    } else if (percentage > 70 && percentage <= 90) {
      return "Advanced";
    } else {
      return "Expert";
    }
  };
  return (
    <div className="flex items-start gap-2 mb-6">
      <LuBadgeCheck />
      <div className="flex-1 -mt-[0.15rem]">
        <div className="flex justify-between items-center mb-2">
          <p className="text-sm font-semibold">{data.name}</p>
          <p className="text-sm font-semibold">{data.percentage}%</p>
        </div>
        <Progress value={percentage} className="h-[6px]" />
        <p className="text-xs mt-1">{skillLevel(percentage)}</p>
      </div>
    </div>
  );
};

export default Skill;
