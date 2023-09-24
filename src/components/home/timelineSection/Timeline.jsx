import React, { useEffect } from "react";
import Image from "next/image";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";
import { starGrey, starPurple, star } from "@/exports/image";

const Timeline = () => {
  const [ref, inView] = useInView({
    threshold: 0.4,
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
    <div
      className="w-full px-2 mx-auto grid gap-2 md:grid-cols-9 place-items-center relative"
      ref={ref}
    >
      <Image
        src={starPurple}
        alt="star"
        className="absolute -top-10 left-20 lg:left-36 w-5"
      />
      <Image
        src={starGrey}
        alt="star"
        className="absolute top-[40%] right-20 lg:right-36 lg:w-4 w-3"
      />
      <Image
        src={star}
        alt="star"
        className="absolute -bottom-3 md:bottom-20 left-20 lg:left-36 w-3"
      />

      {/* Stack 1 */}

      <motion.div
        className="col-span-4 w-full h-full"
        variants={textVariant}
        animate={animation}
        initial={"init"}
        transition={{ ease: "easeInOut", type: "spring", duration: 2 }}
      >
        <div className="w-full h-full bg-transparent md:pl-4 border-l-2 border-scheme-violet md:border-none ml-2 px-5">
          <h2 className="text-scheme-violet font-semibold text-lg sm:text-xl text-left md:text-right">
            Hackathon Announcement
          </h2>
          <p className=" text-left md:text-right">
            The getlinked tech hackathon 1.0 is formally announced to the
            general public and teams begin to get ready to register
          </p>
        </div>
      </motion.div>
      <motion.div
        className="relative md:col-span-4 w-full h-full flex justify-center items-center flex-col gap-1"
        variants={textVariant}
        animate={animation}
        initial={"init"}
        transition={{ ease: "easeInOut", type: "spring", duration: 2 }}
        ref={ref}
      >
        <div className="h-full w-0.5 ml-2.5 bg-scheme-violet md:self-start md:flex hidden"></div>
        <div className="flex gap-3 self-center md:self-start z-10">
          <div className="mb-1 text-white text-center w-6 h-6 rounded-full bg-gradient-to-r from-scheme-violet to-scheme-purple font-semibold">
            1
          </div>
          <p className="text-scheme-violet font-semibold text-sm sm:text-base ">
            November 18, 2023
          </p>
        </div>
      </motion.div>
      <div className="col-span-4 w-full h-full"></div>

      {/* Stack 2 */}
      <motion.div
        className="col-span-4 w-full h-full flex"
        variants={textVariant}
        animate={animation}
        initial={"init"}
        transition={{
          delay: 1,
          ease: "easeInOut",
          type: "spring",
          duration: 2,
        }}
      >
        <div className="w-full h-full bg-transparent md:pl-4 border-l-2 border-scheme-violet ml-2 px-5">
          <h2 className="text-scheme-violet font-semibold text-lg sm:text-xl text-left md:text-left">
            Teams Registration begins
          </h2>
          <p className=" text-left md:text-left">
            Interested teams can now show their interest in the getlinked tech
            hackathon 1.0 by proceeding to register
          </p>
        </div>
      </motion.div>
      <motion.div
        className="relative md:col-span-4 w-full h-full flex justify-center items-center flex-col gap-1"
        variants={textVariant}
        animate={animation}
        initial={"init"}
        transition={{
          delay: 1,
          ease: "easeInOut",
          type: "spring",
          duration: 2,
        }}
      >
        <div className="h-10 w-0.5 ml-2.5 bg-scheme-violet md:self-end hidden"></div>
        <div className="flex md:flex-row-reverse gap-3 self-center md:self-end z-10 md:relative md:-right-7">
          <div className="mb-1 text-white text-center w-6 h-6 rounded-full bg-gradient-to-r from-scheme-violet to-scheme-purple font-semibold">
            2
          </div>
          <p className="text-scheme-violet font-semibold text-sm sm:text-base">
            November 18, 2023
          </p>
        </div>
      </motion.div>
      <div className="col-span-4 w-full h-full"></div>

      {/* Stack 3 */}
      <motion.div
        className="col-span-4 w-full h-full"
        variants={textVariant}
        animate={animation}
        initial={"init"}
        transition={{
          delay: 2,
          ease: "easeInOut",
          type: "spring",
          duration: 2,
        }}
      >
        <div className="w-full h-full bg-transparent md:pl-4 border-l-2 border-scheme-violet md:border-none ml-2 px-5">
          <h2 className="text-scheme-violet font-semibold text-lg sm:text-xl text-left md:text-right">
            Team Registeration ends
          </h2>
          <p className=" text-left md:text-right">
            The Interested participants are no longer allowed{" "}
            <br className="md:hidden lg:flex" /> to register
          </p>
        </div>
      </motion.div>
      <motion.div
        className="relative md:col-span-4 w-full h-full flex justify-center items-center flex-col gap-1"
        variants={textVariant}
        animate={animation}
        initial={"init"}
        transition={{
          delay: 2,
          ease: "easeInOut",
          type: "spring",
          duration: 2,
        }}
      >
        <div className="h-full w-0.5 ml-2.5 bg-scheme-violet md:self-start md:flex hidden"></div>
        <div className="flex w-full gap-3 self-center md:self-start z-10">
          <div className="mb-1 text-white text-center w-6 h-6 rounded-full bg-gradient-to-r from-scheme-violet to-scheme-purple font-semibold">
            3
          </div>
          <p className="text-scheme-violet text-sm sm:text-base font-semibold w-full">
            November 18, 2023
          </p>
        </div>
      </motion.div>
      <div className="col-span-4 w-full h-full"></div>

      {/* Stack 4 */}
      <motion.div
        className="col-span-4 w-full h-full flex"
        variants={textVariant}
        animate={animation}
        initial={"init"}
        transition={{
          delay: 3,
          ease: "easeInOut",
          type: "spring",
          duration: 2,
        }}
      >
        <div className="w-full h-full bg-transparent md:pl-4 border-l-2 border-scheme-violet ml-2 px-5">
          <h2 className="text-scheme-violet font-semibold text-lg sm:text-xl text-left md:text-left">
            Annoncement of the accepted teams and ideas
          </h2>
          <p className=" text-left md:text-left">
            All teams whom idea has been accepted into the getlinked tech
            hackathon 1.0 2023 are formally announced
          </p>
        </div>
      </motion.div>
      <motion.div
        className="relative md:col-span-4 w-full h-full flex justify-center items-center flex-col gap-1"
        variants={textVariant}
        animate={animation}
        initial={"init"}
        transition={{
          delay: 3,
          ease: "easeInOut",
          type: "spring",
          duration: 2,
        }}
      >
        <div className="h-10 w-0.5 ml-2.5 bg-scheme-violet md:self-end hidden"></div>
        <div className="flex md:flex-row-reverse gap-3 self-center md:self-end z-10 md:relative md:-right-7">
          <div className="mb-1 text-white text-center w-6 h-6 rounded-full bg-gradient-to-r from-scheme-violet to-scheme-purple font-semibold">
            4
          </div>
          <p className="text-scheme-violet font-semibold text-sm sm:text-base">
            November 18, 2023
          </p>
        </div>
      </motion.div>
      <div className="col-span-4 w-full h-full"></div>

      {/* Stack 5 */}
      <motion.div
        className="col-span-4 w-full h-full"
        variants={textVariant}
        animate={animation}
        initial={"init"}
        transition={{
          delay: 4,
          ease: "easeInOut",
          type: "spring",
          duration: 2,
        }}
      >
        <div className="w-full h-full bg-transparent md:pl-4 border-l-2 border-scheme-violet md:border-none ml-2 px-5">
          <h2 className="text-scheme-violet font-semibold text-lg sm:text-xl text-left md:text-right">
            Getlinked Hackathon 1.0 Officially Begins
          </h2>
          <p className=" text-left md:text-right">
            Accepted teams can now proceed to build their ground breaking skill
            driven solutions
          </p>
        </div>
      </motion.div>
      <motion.div
        className="relative md:col-span-4 w-full h-full flex justify-center items-center flex-col gap-1"
        variants={textVariant}
        animate={animation}
        initial={"init"}
        transition={{
          delay: 4,
          ease: "easeInOut",
          type: "spring",
          duration: 2,
        }}
      >
        <div className="h-full w-0.5 ml-2.5 bg-scheme-violet md:self-start md:flex hidden"></div>
        <div className="flex gap-3 self-center md:self-start z-10">
          <div className="mb-1 text-white text-center w-6 h-6 rounded-full bg-gradient-to-r from-scheme-violet to-scheme-purple font-semibold">
            5
          </div>
          <p className="text-scheme-violet font-semibold text-sm sm:text-base">
            November 18, 2023
          </p>
        </div>
      </motion.div>
      <div className="col-span-4 w-full h-full"></div>

      {/* Stack 6 */}
      <motion.div
        className="col-span-4 w-full h-full flex"
        variants={textVariant}
        animate={animation}
        initial={"init"}
        transition={{
          delay: 5,
          ease: "easeInOut",
          type: "spring",
          duration: 2,
        }}
      >
        <div className="w-full h-full bg-transparent md:pl-4 border-l-2 border-scheme-violet ml-2 px-5">
          <h2 className="text-scheme-violet font-semibold text-lg sm:text-xl text-left md:text-left">
            Demo Day
          </h2>
          <p className=" text-left md:text-left">
            Teams get the opportunity to pitch their projects to judges. The
            winner of the hackathon will be announced on this day
          </p>
        </div>
      </motion.div>
      <motion.div
        className="relative md:col-span-4 w-full h-full flex justify-center items-center flex-col gap-1"
        variants={textVariant}
        animate={animation}
        initial={"init"}
        transition={{
          delay: 5,
          ease: "easeInOut",
          type: "spring",
          duration: 2,
        }}
      >
        <div className="h-10 w-0.5 ml-2.5 bg-scheme-violet md:self-end hidden"></div>
        <div className="flex md:flex-row-reverse gap-3 self-center md:self-end z-10 md:relative md:-right-7">
          <div className="mb-1 text-white text-center w-6 h-6 rounded-full bg-gradient-to-r from-scheme-violet to-scheme-purple font-semibold">
            6
          </div>
          <p className="text-scheme-violet font-semibold text-sm sm:text-base">
            November 18, 2023
          </p>
        </div>
      </motion.div>
      <div className="col-span-4 w-full h-full"></div>
    </div>
  );
};

export default Timeline;
