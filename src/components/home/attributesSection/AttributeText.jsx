import React, { useEffect } from "react";
import { attributesTextContent } from "@/constants/attributesTextContent";
import { starGrey } from "@/exports/image";
import Image from "next/image";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const AttributeText = () => {
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
    <motion.div className="w-full md:w-1/2 h-1/2 md:h-full flex p-5 lg:p-10 items-center gap-4 flex-col justify-center relative"  variants={textVariant} animate={animation} initial={'init'} transition={{delay: .5, ease: 'easeInOut', type: 'spring', duration: 2 }} ref={ref}>
      <div className="self-center md:self-start text-center md:text-left">
        <p className="font-bold text-3xl clash">Judging Criteria</p>
        <p className="font-bold text-3xl text-scheme-violet clash">Key Attributes</p>
      </div>
      {attributesTextContent.map((item, index) => (
        <p
          key={index}
          className="text-center md:text-left md:self-start self-center"
        >
          <mark className="text-scheme-pink bg-transparent font-semibold text-lg">
            {item.title}
          </mark>
          {item.content}
        </p>
      ))}
      <button className="p-2 rounded-sm bg-gradient-to-r from-scheme-pink self-center md:self-start to-scheme-purple w-32 text-white font-semibold">
        Read More
      </button>
      <Image
        src={starGrey}
        alt="white-star"
        className="absolute bottom-5 md:bottom-10 left-[80%] md:-left-4 lg:left-0"
      />
    </motion.div>
  );
};

export default AttributeText;
