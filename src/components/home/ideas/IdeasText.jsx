import React, { useEffect } from "react";
import { starPurple } from "@/exports/image";
import Image from "next/image";
import { Inter, Montserrat } from "next/font/google";
import { useInView } from "react-intersection-observer";
import { useAnimation, motion } from "framer-motion";

const IdeasText = () => {
  const [ref, inView] = useInView({
    threshold: 0.6,
    triggerOnce: true,
  });

  const animation = useAnimation();
  useEffect(() => {
    if (inView) {
      animation.start("animate");
    } else {
      animation.start("init");
    }
  });
  const textVariant = {
    init: {
      y: 100,
      opacity: 0,
    },
    animate: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <motion.div
      className="flex flex-col gap-5 items-center justify-center w-full h-1/2 md:w-1/2 md:h-full p-5"
      variants={textVariant}
      animate={animation}
      initial={"init"}
      transition={{
        delay: 0.5,
        ease: "easeInOut",
        type: "spring",
        duration: 2,
      }}
      ref={ref}
    >
      <div className="self-center md:self-start relative">
        <h2 className="text-center md:text-left font-bold text-2xl sm:text-3xl">
          Introduction to getlinked
        </h2>
        <h2 className="text-center md:text-left font-bold text-2xl sm:text-3xl text-scheme-violet">
          tech Hackathon 1.0
        </h2>
        <Image
          src={starPurple}
          alt="star"
          className="absolute right-0 sm:-right-20 w-3 md:right-0  sm:w-5 lg:-right-32 top-[60%]"
        />
      </div>
      <div className="text-center md:text-left">
        <p>
          Our tech hackathon is a melting pot of visionaries and its purpose is
          as clear as day; to shape the future. Whether you're a coding genius,
          a design maverick, or a concept wizard, you'll have the chance to
          transform your ideas into reality. Solving real-world problems,
          pushing the boundaries of technology, and creating solutions that can
          change the world, that's what we're all about!
        </p>
      </div>
    </motion.div>
  );
};

export default IdeasText;
