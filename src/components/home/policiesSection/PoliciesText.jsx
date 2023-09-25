import React, { useEffect } from "react";
import Image from "next/image";
import { greenCheck, starPurple, star } from "@/exports/image";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";


const PoliciesText = () => {
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
    <motion.div className="w-full h-1/2 md:w-1/2 md:h-full flex justify-center items-center p-5 lg:p-10 flex-col gap-10 relative"  variants={textVariant} animate={animation} initial={'init'} transition={{ ease: 'easeInOut', type: 'spring', duration: 2 }} ref={ref}>
      <div className="flex flex-col gap-5 self-center md:self-start">
        <h2 className="font-bold text-2xl sm:text-3xl text-center md:text-left">
          Privacy and Policy <br />{" "}
          <span className="text-scheme-violet">Terms</span>
        </h2>
        <p className="text-gray-400 text-center md:text-left">
          Last updated on September 12, 2023
        </p>
        <p className="text-center md:text-left">
          Below are our privacy & policy which outline a lot of goodies. it's
          our aim to always take care of our participants
        </p>
      </div>
      <div className="border sm:w-[90%] border-scheme-violet rounded-md p-5 flex flex-col gap-5 bg-opacity-50 bg-gray-800 backdrop-blur-lg backdrop-filter md:self-start self-center lg:w-[85%] px-5 py-10 z-10">
        <p className="md:text-left text-center self-center md:self-start">
          At getlinked tech Hackathon 1.0 we value your privacy and are
          committed to protecting your personal information. This Privacy Policy
          outlines how we collect, use, disclose and safeguard your data when
          you participate in our tech hackathon event, you consent to the
          practices described in this policy.
        </p>

        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <h3 className="font-bold text-lg text-scheme-violet">
              Licensing Policy
            </h3>
            <p className="font-semibold">
              Here are terms of our Standard Liscense:
            </p>
          </div>

          <ul className="flex flex-col gap-4 ">
            <li className="flex justify-center items-center">
              <Image src={greenCheck} className="self-center w-5" alt="green-check" />
              <p className="pl-4">
              The Standard License grants you a non-exclusive right to navigate
              and register for our event
              </p>
              
            </li>
            <li className="flex items-center justify-center">
              <Image src={greenCheck} className="self-center w-5" alt="green-check" />
              <p className="pl-4">
              You are licensed to use the item available at any free source
              sites for your project development
              </p>
            </li>
          </ul>

          <button className="self-center p-2 w-32 text-white font-semibold rounded-sm bg-gradient-to-r from-scheme-pink to-scheme-purple">
            Read More
          </button>
        </div>
      </div>
      <Image src={star} alt="star" className="absolute top-20 sm:top-10 w-3 sm:w-5 left-[70%] lg:left-[60%]"/>
      <Image src={starPurple} alt="star" className="absolute bottom-10 left-5 z-10"/>
    </motion.div>
  );
};

export default PoliciesText;
