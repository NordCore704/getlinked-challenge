import React, { useEffect } from "react";
import { faqsContent } from "@/constants/faqsContent";
import { starPurple } from "@/exports/image";
import Image from "next/image";
import { motion, useAnimation } from "framer-motion";
import { FaPlus } from "react-icons/fa";
import { useInView } from "react-intersection-observer";

const FaqsText = () => {
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
    <motion.div className="flex flex-col items-center gap-10 w-full md:w-1/2 h-1/2 md:h-full p-5 lg:p-10 relative"  variants={textVariant} animate={animation} initial={'init'} transition={{ ease: 'easeInOut', type: 'spring', duration: 2 }} ref={ref}>
      <div className="flex-col self-center md:self-start items-center justify-center flex gap-5">
        <div className="self-center md:self-start">
          <h2 className="font-bold text-2xl text-center md:text-left sm:text-3xl">
            Frequently Asked
          </h2>
          <h2 className="font-bold text-2xl text-center md:text-left sm:text-3xl text-scheme-violet">
            Question
          </h2>
        </div>

        <div className="self-center md:self-start">
          <p className="text-center md:text-left self-center md:self-start">
            We got answers to the questions that you might <br /> want to ask
            about <span className="font-semibold">getlinked Hackathon 1.0</span>
          </p>
        </div>
      </div>

      <div className="w-[85%] self-center md:self-start">
        {faqsContent.map((item, index) => (
          <details
            className="group border-b w-full pb-3  border-y-scheme-violet marker:hidden"
            key={index}
          >
            <summary className="flex items-center gap-1 marker:content-none hover:cursor-pointer justify-between">
              {item.question}
              <FaPlus className="-rotate-90 group-open:rotate-0 transition-transform text-scheme-violet text-xs" />
            </summary>
            <article className="px-2 w-full">{item.answer}</article>
          </details>
        ))}
      </div>
      <Image
        src={starPurple}
        alt="star"
        className="absolute sm:left-[25%] left-10 md:left-2 w-5 "
      />
    </motion.div>
  );
};

export default FaqsText;
