import React, { useEffect } from "react";
import Image from "next/image";
import { motion, useAnimation } from "framer-motion";
import { starPurple } from "@/exports/image";
import { useInView } from "react-intersection-observer";

const TimelineHeading = () => {
  const [ref, inView] = useInView({
    threshold: 0.3,
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
      y: -100,
      opacity: 0,
    },
    animate: {
      y: 0,
      opacity: 1,
    },
  };
  return (
    <motion.div
      className="flex items-center flex-col gap-4 relative"
      variants={textVariant}
      animate={animation}
      initial={"init"}
      transition={{ ease: "easeInOut", type: "spring", duration: 2 }}
      ref={ref}
    >
      <h2 className="font-bold text-2xl sm:text-3xl text-center font-custom">
        Timeline
      </h2>
      <p className="text-center">
        Here is the breakdown of the time we anticipate <br /> using for the
        upcoming event.
      </p>
    </motion.div>
  );
};

export default TimelineHeading;
