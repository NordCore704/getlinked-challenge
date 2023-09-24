import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const PartnersText = () => {
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
    <motion.div className="flex flex-col items-center justify-center gap-5 p-5"  variants={textVariant} animate={animation} initial={'init'} transition={{ease: 'easeInOut', type: 'spring', duration: 2 }} ref={ref}>
      <h2 className="text-2xl sm:text-3xl text-center font-bold">
        Partners and Sponsors
      </h2>
      <p className="text-center">
        Getlinked hackathon 1.0 is honored to have the following major{" "}
        <br className="hidden lg:flex" /> companies as its partners and sponsors{" "}
      </p>
    </motion.div>
  );
};

export default PartnersText;
