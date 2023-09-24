import React, { useEffect } from "react";
import { starPurple } from "@/exports/image";
import Image from "next/image";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const PrizeText = () => {
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
      y: -100,
      opacity: 0,
    },
    animate: {
      y: 0,
      opacity: 1,
    },
  };
  return (
    <motion.div className="w-full h-1/2 flex md:justify-end justify-center items-center md:px-36 p-5 relative"  variants={textVariant} animate={animation} initial={'init'} transition={{ ease: 'easeInOut', type: 'spring', duration: 2 }} ref={ref}>
      <Image
        src={starPurple}
        alt="star"
        className="absolute left-[20%] md:left-1/3 top-10 w-4"
      />
      <Image
        src={starPurple}
        alt="star"
        className="absolute right-1/4 top-16 md:top-24 w-4"
      />
      <div className="self-center md:self-start">
        <h2 className="text-2xl sm:text-3xl text-center md:text-left font-bold">
          Prizes and
        </h2>
        <h2 className="text-scheme-violet text-2xl sm:text-3xl text-center md:text-left font-bold">
          Rewards
        </h2>
        <p className="text-center md:text-left">
          Highlight of the prizes or rewards for the winners and <br /> for
          participants
        </p>
      </div>
    </motion.div>
  );
};

export default PrizeText;
