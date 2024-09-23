import React from "react";
import Skill from "./Skill";
import Image from "next/image";

interface Props {
  data: any;
}
const SkillCard: React.FC<Props> = ({ data }) => {
  return (
    <div className="w-full lg:w-[500px] border rounded-xl p-6">
      <h3 className="text-center text-lg font-medium mb-8">{data.name} </h3>
      {data.tools.map((tool: any) => {
        return <Skill data={tool} key={tool.name} />;
      })}
      <div>
        {data.otherTools.length > 0 && (
          <p className="mb-2 text-xs text-center">Other Tools:</p>
        )}
        <div className="flex items-center justify-evenly">
          {data.otherTools.map((data: any) => {
            return (
              <div
                className="w-[40px] h-[40px] bg-white rounded-full flex items-center justify-center"
                key={data.name}
              >
                <Image
                  src={data.icon}
                  alt={data.name}
                  width={400}
                  height={400}
                  className="w-[40px] h-[40px] object-cover"
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default SkillCard;
