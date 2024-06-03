import Image from "next/image";
import React from "react";
import photo from "@/assets/images/photo.png";

const About = () => {
  return (
    <div className="px-8 py-[3.5rem] mb-20">
      <h2 className="text-3xl text-center font-bold">About Me</h2>
      <p className="text-light text-center font-light text-sm">
        Details about my journey
      </p>

      <div className="mx-auto w-full mt-10 flex justify-center profilePic">
        <div className="w-[220px] h-[220px] rounded-lg shadow rotate-12 transition-all ease-linear duration-300 aboutCard absolute -z-1"></div>

        <Image
          src={photo}
          alt="my_picture"
          className="w-[220px] h-[220px] object-cover rounded-lg shadow relative z-1"
        />
      </div>
    </div>
  );
};

export default About;
