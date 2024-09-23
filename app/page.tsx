"use client";

import Loader from "@/components/Loader";
import PageReveal from "@/components/PageReveal";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import NavBar from "@/components/NavBar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Experiences from "@/components/Experiences";
import PastProjects from "@/components/PastProjects";
import Contact from "@/components/Contact";

const bgCharacters = "&^%$#$!@#*($)$&$&$(37364@^#&$^@(\":;'.,<>/?][}{\\|~`";

const generateRandomCharacters = (length: number) => {
  let result = "";
  const charactersLength = bgCharacters.length;

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * charactersLength);
    result += bgCharacters[randomIndex];
  }

  return result;
};

export default function Home() {
  const [showLoader, setLoader] = useState(true);
  const [showReveal, setShowReveal] = useState(false);
  const [randomString, setRandomString] = useState("");
  const [pageHeight, setPageHeight] = useState(500);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const calculateCharacters = () => {
      setTimeout(() => {
        ///TODO: MAKE NUMBER OF CHARACTERS DYNAMIC
        if (containerRef.current) {
          const containerHeight = containerRef.current.clientHeight;
          console.log(containerHeight);
          setPageHeight(containerHeight);
          const characterHeight = 3;
          const numberOfCharacters = Math.ceil(
            (containerHeight as number) * characterHeight
          );

          const randomString = generateRandomCharacters(numberOfCharacters);
          setRandomString(randomString);
        }
      }, 5000);
    };

    calculateCharacters();

    // Recalculate on resize
    window.addEventListener("resize", calculateCharacters);
    return () => {
      window.removeEventListener("resize", calculateCharacters);
    };
  }, []);

  useEffect(() => {
    const timeout = 1500;
    const loaderTimeout = setTimeout(() => {
      setLoader(false);
      setShowReveal(true);
    }, timeout);

    return () => {
      clearTimeout(loaderTimeout);
    };
  }, []);

  useEffect(() => {
    if (showReveal) {
      const timeout = 1500;
      const revealTimeout = setTimeout(() => {
        setShowReveal(false);
      }, timeout);
      return () => {
        clearTimeout(revealTimeout);
      };
    }
  }, [showReveal]);
  return showLoader ? (
    <Loader />
  ) : (
    <main className="relative h-screen w-screen overflow-x-hidden">
      {showReveal && <PageReveal />}
      <div
        className="text-[#F2F2F2] absolute inset-0 break-words select-none animate-fade font-normal contain-strict"
        aria-hidden="true"
        id="background"
        style={{ animationDelay: "1s", height: `${pageHeight}px` }}
      >
        {randomString.split("").map((char, index) => (
          <p
            key={index}
            className="inline-block mx-auto items-center w-[35px] h-[35px] hover:opacity-50 hover:duration-0 transition-all duration-300 opacity-5"
          >
            {char}
          </p>
        ))}
      </div>
      <div ref={containerRef}>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="w-full max-w-[1440px] mx-auto"
        >
          <NavBar />
          <Hero />
          <About />
          <Skills />
          <Experiences />
          <PastProjects />
          <Contact />
          <p className="text-center text-xs">
            © 2024 Emmanuel Owolabi. All rights reserved.
          </p>
        </motion.div>
      </div>
    </main>
  );
}
