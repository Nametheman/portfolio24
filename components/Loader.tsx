import React from "react";

const Loader = () => {
  return (
    <div className="w-screen h-screen border flex justify-center items-center">
      <div className="bg-[#000] w-[150px] h-[150px] rounded-full flex justify-center items-center animate-pulse">
        <p className="text-white font-bold">{"< EmmyDev />"}</p>
      </div>
    </div>
  );
};

export default Loader;
