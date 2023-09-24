import React, { useEffect } from "react";
import Image from "next/image";
import { star, starGrey, starPurple, thinkingMan, questionMarkPurple, questionMarkSmall } from "@/exports/image";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const FaqsImage = () => {
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
    <motion.div className="relative w-full md:w-1/2 h-1/2 md:h-full flex flex-col items-center p-5 sm:p-10"  variants={textVariant} animate={animation} initial={'init'} transition={{ease: 'easeInOut', type: 'spring', duration: 2 }} ref={ref}>
      <div className="relative flex gap-10 items-center justify-center">
        <Image src={questionMarkSmall} alt="questionMark" />
        <Image src={questionMarkPurple} alt="questionMark" className="relative bottom-5" />
        <Image src={questionMarkSmall} alt="questionMark" />
      </div>
      <Image src={thinkingMan} alt="avatar" className="" />
      <Image
        src={starGrey}
        alt="star"
        className="absolute bottom-10 left-[70%] w-3"
      />
      <Image src={star} alt="star" className="absolute left-5 top-1/3 w-3" />
      <Image
        src={starPurple}
        alt="star"
        className="absolute top-24 left-20 w-3"
      />
      <Image
        src={starPurple}
        alt="star"
        className="absolute top-5 left-[57%] w-3"
      />
    </motion.div>
  );
};

export default FaqsImage;
