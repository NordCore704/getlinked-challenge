import React from "react";
import { flare, pinkArc, starGrey } from "@/exports/image";
import Image from "next/image";
import { IntroHero, IntroText } from "@/exports";
import { motion } from "framer-motion";

const IntroMain = () => {
  const animationVariant = {
    init: {
      opacity: 0,

    },
    animate: {
      opacity: 1,

    }
  }
  return (
    <motion.section className="flex flex-col md:flex-row overflow-hidden w-full border-b border-gray-700" transition={{ delay: .5, type: 'spring', duration: 2,}} variants={animationVariant} animate={'animate'} initial={'init'}>
      <Image
        src={starGrey}
        alt="star"
        className="absolute top-36 md:top-36 left-36"
      />
      <div className="absolute top-20 md:right-5 flex flex-col items-center justify-center self-center md:self-end mt-2">
        <p className="font-semibold sm:text-2xl md:text-2xl lg:text-2xl text-xl italic">
          Igniting a Revolution in HR Innovation
        </p>
        <Image alt="pink-arc" src={pinkArc} className="self-end" />
      </div>
      <Image
        src={flare}
        alt="flare"
        className="absolute  -top-0 w-[450px] opacity-50 -z-10"
      />
      <Image
        src={flare}
        alt="flare"
        className="absolute w-[470px]  right-0 top-20 opacity-50 -rotate-180"
      />
      <IntroText />
      <IntroHero />
    </motion.section>
  );
};

export default IntroMain;
