import React, { useEffect } from "react";
import Image from "next/image";
import { trophy, medals, star, starGrey } from "@/exports/image";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const PrizeImage = () => {

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
    <div className="w-full h-1/2 flex items-center justify-center flex-col md:flex-row p-10 gap-10 relative" ref={ref}>
      <motion.div className="w-[80%] h-1/2 md:w-[40%] md:h-full z-10 relative" variants={textVariant} animate={animation} initial={'init'} transition={{delay: .5, ease: 'easeInOut', type: 'spring', duration: 2 }}>
        <Image src={trophy} alt="trophy" className="" />
        <Image
          src={starGrey}
          alt="star"
          className="absolute  -bottom-5 left-1/3 w-3"
        />
      </motion.div>
      <motion.div className="w-full h-1/2 md:w-1/2 md:h-full relative"  variants={textVariant} animate={animation} initial={'init'} transition={{delay: 1, ease: 'easeInOut', type: 'spring', duration: 2 }}>
        <Image src={medals} alt="medals" className="" />
        <Image
          src={starGrey}
          alt="star"
          className="absolute  top-0 lg:left-14 left-10 w-4 md:flex hidden"
        />
        <Image
          src={starGrey}
          alt="star"
          className="absolute  top-12 sm:top-28 md:top-20 lg:top-28 sm:right-0 -right-3 w-3"
        />
        <Image
          src={star}
          alt="star"
          className="absolute  -bottom-5 right-1/3 w-3"
        />
      </motion.div>
    </div>
  );
};

export default PrizeImage;
