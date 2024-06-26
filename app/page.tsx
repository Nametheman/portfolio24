"use client";

import Loader from "@/components/Loader";
import PageReveal from "@/components/PageReveal";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import NavBar from "@/components/NavBar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";

export default function Home() {
  const [showLoader, setLoader] = useState(true);
  const [showReveal, setShowReveal] = useState(false);
  useEffect(() => {
    const timeout = 3000;
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
      const timeout = 2000;
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
      </motion.div>
    </main>
  );
}
