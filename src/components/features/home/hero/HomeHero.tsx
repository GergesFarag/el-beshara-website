"use client";

import { images } from "@/data/images";
import Image from "next/image";
import  { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import MyBtn from "@/components/ui/MyBtn";
import { heroContent } from "@/data/HeroContent";

const HomeHero = () => {
  const [index, setIndex] = useState(0);
  const [contentIndex, setContentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
      setContentIndex((prev) => (prev + 1) % heroContent.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

 

  return (
    <div className="relative h-[80vh] mb-20 overflow-hidden">
        {/* Overlay */}
      <div className="absolute inset-0 bg-dark/70 z-10"></div>

      {/* Stacked Images */}
      {images.slice(0, index + 1).map((img, i) => (
        <motion.div
          key={i}
          initial={i === 0 ? { x: 0 } : { x: "100%" }}
          animate={{ x: 0 }}
          transition={{ duration: 2, ease: "easeOut" }}
          className="absolute inset-0"
        >
          <Image src={img.url} alt="" fill className="object-cover" />
        </motion.div>
      ))}

      {/* Smooth Text Animation */}
      <div className="absolute inset-0 z-20 flex justify-center items-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={contentIndex} // <--- VERY IMPORTANT
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="text-center max-w-2xl flex flex-col justify-center items-center px-4 text-light"
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
              {heroContent[contentIndex].title}
            </h1>

            <p className="text-sm text-light/80 md:text-lg mb-6">
              {heroContent[contentIndex].description}
            </p>
            
            {heroContent[contentIndex].href && (
                <MyBtn
                  text={heroContent[contentIndex].btnText}
                  href={heroContent[contentIndex].href}
                  variant="primary"
                />
            )}
          
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default HomeHero;
