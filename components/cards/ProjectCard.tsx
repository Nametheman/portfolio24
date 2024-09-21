import React, { useRef, useEffect, useState, useCallback } from "react";
import {
  useInView,
  useAnimation,
  motion,
  AnimatePresence,
} from "framer-motion";
import { PiInfoLight, PiLinkSimpleHorizontal } from "react-icons/pi";
import { BiCodeAlt } from "react-icons/bi";
import { VscCode } from "react-icons/vsc";

const ProjectCard = ({ data, index }: any) => {
  const mediaRef = useRef<HTMLVideoElement>(null);
  const inView = useInView(mediaRef, { once: false });
  const [showInfo, setShowInfo] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [wasPaused, setWasPaused] = useState(false);
  const animation = useAnimation();

  useEffect(() => {
    if (mediaRef.current) {
      if (inView && !showInfo) {
        mediaRef.current.play();
        console.log(mediaRef.current.currentTime);
        setIsPlaying(true);
      } else {
        mediaRef.current.pause();
        mediaRef.current.currentTime = 0;
        setIsPlaying(false);
      }
    }
  }, [inView, wasPaused, showInfo]);

  const toggleProjectInfo = useCallback(() => {
    setShowInfo((prev) => !prev); // Toggle the info state
    setIsPlaying(false); // Ensure the video pauses
    setWasPaused(!showInfo);
  }, [showInfo]);

  useEffect(() => {
    if (showInfo) {
      animation.start({
        height: "100px",
        opacity: 0.5,
        transition: { duration: 0.5 }, // Smooth transition
      });
    } else {
      animation.start({
        opacity: 1,
        height: "auto",
        transition: { duration: 0.5 }, // Smooth transition
      });
    }
  }, [showInfo]);

  return (
    <div>
      <div className="text-xl font-bold">
        {index + 1}. {data?.name}
      </div>
      <div className=" border-gray-200 shadow-[#959da533_0px_8px_24px] dark:shadow-[#25282a33_0px_8px_24px] rounded-xl overflow-hidden mt-6">
        <motion.div
          className=""
          initial={{ opacity: 1, height: "auto" }}
          animate={animation}
        >
          <video preload="auto" ref={mediaRef} muted playsInline loop>
            <source src={data?.video} />
          </video>
        </motion.div>
        <div className="flex items-center justify-between p-4 bg-primary-foreground relative">
          <div className="flex gap-8">
            <a href={data?.url}>
              <PiLinkSimpleHorizontal size={22} className="cursor-pointer" />
            </a>
            <a href={data?.github}>
              <VscCode size={22} className="cursor-pointer" />
            </a>
          </div>
          <PiInfoLight
            size={25}
            onClick={toggleProjectInfo}
            className="cursor-pointer"
          />
        </div>
        <AnimatePresence mode="wait">
          {wasPaused && (
            <motion.div
              className="p-4 bg-primary-foreground relative"
              initial={{ opacity: 0, height: 0 }}
              animate={{
                opacity: 1,
                height: "auto",
                transition: { duration: 0.5 },
              }}
              exit={{ opacity: 0, height: 0, transition: { duration: 0.5 } }}
            >
              <p className="text-sm bg-primary-foreground leading-relaxed tracking-wide">
                {data?.details}
              </p>
              <div className="mt-4">
                <p className="text-sm">Tools: </p>
                <ul className="flex items-center gap-2 text-xs mt-2 w-full overflow-x-scroll no-scrollbar">
                  {data?.tools?.map((tool: any) => {
                    return (
                      <li className="whitespace-nowrap" key={tool}>
                        {tool}
                      </li>
                    );
                  })}
                </ul>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default ProjectCard;
