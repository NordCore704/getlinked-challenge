import React, { useEffect } from "react";
import Image from "next/image";
import { sponsors, starGrey, starPurple } from "@/exports/image";
import { motion, useAnimation, } from "framer-motion";
import { useInView } from "react-intersection-observer";

const PartnersDisplay = () => {
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
    <motion.div className="flex items-center justify-center py-2  sm:p-5 relative"  variants={textVariant} animate={animation} initial={'init'} transition={{delay: .5, ease: 'easeInOut', type: 'spring', duration: 2 }} ref={ref}>
      <Image
        src={starPurple}
        alt="star"
        className=" absolute sm:left-20 md:left-32 md:top-0 w-3 top-2 left-10"
      />
      <Image
        src={starPurple}
        alt="star"
        className=" absolute md:left-1/2 md:top-20 w-3 top-[40%] left-[55%]"
      />
      <Image
        src={starGrey}
        alt="star"
        className="absolute md:left-1/2 md:bottom-20 left-[80%] bottom-10 w-3 md:w-4"
      />
      <Image src={sponsors} alt="sponsors" className="w-[85%]" />
    </motion.div>
  );
};

export default PartnersDisplay;
