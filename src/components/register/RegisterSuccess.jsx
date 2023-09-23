import React from "react";
import { motion } from "framer-motion";
import {
  successMan,
  emoji,
  successCheck,
  starPurple,
  star,
} from "@/exports/image";
import Image from "next/image";

const RegisterSuccess = ({ onClose }) => {
  return (
    <motion.div initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}} className="flex items-center justify-center bg-black bg-opacity-50 inset-0 w-screen  h-screen p-5 z-50 relative top-0 left-0">
      <div className="border-scheme-violet border flex rounded-md p-5 lg:p-10 items-center justify-center gap-5 flex-col relative ">
        <div className="flex gap-0 self-center relative">
          <Image
            src={successCheck}
            alt="green-check"
            className="absolute sm:-left-14 -left-10"
          />
          <Image
            src={successMan}
            alt="green-check"
            className="z-10 self-end justify-self-end"
          />
        </div>

        <p className="text-xl font-semibold text-center">
          Congratulations <br className="lg:flex hidden" /> you have
          successfully Registered!
        </p>

        <div className="flex flex-col items-center text-center">
          <p className="">Yes, it was easy and you did it!</p>
          <p className="flex items-center gap-1 justify-center">
            check your mail box for next step <Image src={emoji} alt="emoji" />
          </p>
        </div>

        <button className="w-full bg-gradient-to-r from-scheme-pink to-scheme-purple rounded-sm font-semibold p-2" onClick={onClose}>
          Back
        </button>

        <Image
          src={starPurple}
          alt="star"
          className="absolute bottom-3 right-3 w-4"
        />
        <Image src={star} alt="star" className="absolute top-1/2 left-3 w-4" />
      </div>
      <Image
        src={starPurple}
        alt="star"
        className="absolute top-16 right-3 sm:right-24 sm:top-14 w-4 md:right-40 lg:right-[36%] lg:top-6"
      />
    </motion.div>
  );
};

export default RegisterSuccess;
