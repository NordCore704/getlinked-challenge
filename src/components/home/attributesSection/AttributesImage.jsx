import React, { useEffect } from "react";
import { analyticsPeople, star, starPurple } from "@/exports/image";
import Image from "next/image";
import { useInView } from "react-intersection-observer";
import { useAnimation, motion } from "framer-motion";

const AttributesImage = () => {
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
    <motion.div className="w-full md:w-1/2 h-1/2 md:h-full flex py-5 items-center justify-center overflow-x-hidden"  variants={textVariant} animate={animation} initial={'init'} transition={{ ease: 'easeInOut', type: 'spring', duration: 2 }} ref={ref}>
      <Image src={star} alt="star" className="absolute w-3" />
      <Image src={starPurple} alt="star" className="absolute w-3 top-5" />
      <Image src={analyticsPeople} alt="analytics-people" />
    </motion.div>
  );
};

export default AttributesImage;
