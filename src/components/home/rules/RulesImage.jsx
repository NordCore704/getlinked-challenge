import React, { useEffect } from "react";
import { sittingWoman, starGrey } from "@/exports/image";
import Image from "next/image";
import { useInView } from "react-intersection-observer";
import { useAnimation, motion } from "framer-motion";

const RulesImage = () => {
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
      x: -100,
      opacity: 0,
    },
    animate: {
      x: 0,
      opacity: 1,
    },
  };
  return (
    <motion.div className="flex items-center justify-center w-full h-1/2 md:w-1/2 md:h-full relative"  variants={textVariant} animate={animation} initial={'init'} transition={{ ease: 'easeInOut', type: 'spring', duration: 2 }} ref={ref}>
      <Image src={sittingWoman} alt="sitting-woman" className="z-10" />
      <Image
        src={starGrey}
        alt="star"
        className="absolute left-10 sm:left-10 lg:top-1/2 w-3 sm:w-4 top-[70%]"
      />
    </motion.div>
  );
};

export default RulesImage;
