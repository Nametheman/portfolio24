"use client";
import { motion, useSpring } from "framer-motion";
import { useMemo, useRef, useState } from "react";

const Project = () => {
  const [cardPosition, setCardPosition] = useState<{ x: number; y: number }>({
    x: 0,
    y: 0,
  });

  const cardRef = useRef<HTMLDivElement>(null);
  const cardElement = cardRef.current ? cardRef.current : undefined;

  return (
    <motion.div
      className="w-full h-[600px] border hover:cursor-pointer rounded-xl bg-[#333]"
      whileTap={{
        scale: 0.9,
        x: cardPosition.x - 50,
        y: cardPosition.y - 50,
      }}
      ref={cardRef}
    >
      Project
    </motion.div>
  );
};

export default Project;
