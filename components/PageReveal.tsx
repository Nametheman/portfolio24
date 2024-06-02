"use client";

import React from "react";

import { motion } from "framer-motion";

const PageReveal = () => {
  const layers = [
    { index: 0, backgroundColor: "bg-red-500" },
    { index: 1, backgroundColor: "bg-blue-500" },
    { index: 2, backgroundColor: "bg-green-500" },
  ];

  return (
    <div>
      <motion.div
        className="w-full h-full bg-black absolute left-0"
        initial={{ x: "-100%" }}
        animate={{ opacity: 1, x: "100%" }}
        transition={{ duration: 5, type: "spring", stiffness: 50 }}
      ></motion.div>
      <motion.div
        className="w-full h-full bg-[#2b2b2b] left-0 absolute"
        initial={{ x: "-100%" }}
        animate={{ opacity: 1, x: "100%" }}
        transition={{
          duration: 5,
          delay: 0.1,
          type: "spring",
          stiffness: 40,
        }}
      ></motion.div>
      <motion.div
        className="w-full h-full bg-[#090f27] left-0 absolute"
        initial={{ x: "-100%" }}
        animate={{ opacity: 1, x: "100%" }}
        transition={{
          duration: 5,
          delay: 0.2,
          type: "spring",
          stiffness: 40,
        }}
      ></motion.div>
      <motion.div
        className="w-full h-full bg-[#2b2b2b] left-0 absolute"
        initial={{ x: "-100%" }}
        animate={{ opacity: 1, x: "100%" }}
        transition={{
          duration: 5,
          delay: 0.3,
          type: "spring",
          stiffness: 40,
        }}
      ></motion.div>
      <motion.div
        className="w-full h-full bg-black absolute left-0"
        initial={{ x: "-100%" }}
        animate={{ opacity: 1, x: "100%" }}
        transition={{ delay: 0.5, duration: 5, type: "spring", stiffness: 50 }}
      ></motion.div>
    </div>
  );
};

export default PageReveal;
