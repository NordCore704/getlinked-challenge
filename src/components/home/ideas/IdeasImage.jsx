import React, { useEffect } from "react";
import { idea, arrow, starViolet } from "@/exports/image";
import Image from "next/image";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const IdeasImage = () => {
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
      x: 100,
      opacity: 0,
    },
    animate: {
      x: 0,
      opacity: 1,
    },
  };
  return (
    <motion.div
      className="w-full md:w-[50%] flex justify-center items-center h-[50%] md:h-full lg:py-10 py-5 px-5 relative"
      variants={textVariant}
      animate={animation}
      initial={"init"}
      transition={{ ease: "easeInOut", type: "spring", duration: 2 }}
      ref={ref}
    >
      <Image
        src={arrow}
        alt="arrow"
        className="absolute bottom-0 lg:right-20 lg:bottom-20 md:right-5"
      />
      <Image
        src={starViolet}
        alt="arrow"
        className="absolute top-1/4 left-5 sm:left-20 md:left-5"
      />
      <div className="relative">
        <Image src={idea} alt="lightbulb" className="mb-5 lg:mr-5" />
        <p className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center font-bold text-2xl">
          The Big <br /> Idea!
        </p>
      </div>
    </motion.div>
  );
};

export default IdeasImage;
