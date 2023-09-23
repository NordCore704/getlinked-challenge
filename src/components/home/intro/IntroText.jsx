import Link from "next/link";
import React from "react";
import Image from "next/image";
import { bulb, spark, chain, star } from "@/exports/image";

const IntroText = () => {
  return (
    <div className="p-2 md:p-3 lg:pl-10 self-center flex-col gap-5 text-center mt-10 md:text-left flex md:items-center justify-center w-full h-[50%] md:h-full md:w-[50%] relative">
      <div className="relative self-center flex items-center flex-col md:items-start md:self-start mt-16">
        <p className="font-extrabold text-center md:text-left sm:text-4xl lg:text-5xl text-3xl flex flex-col">
          <Image
            alt="bulb"
            src={bulb}
            className="w-5 sm:w-8 self-end mr-4 absolute sm:-top-7 -top-3"
          />
          <span className="gap-0">getlinked Tech</span>
        </p>
        <p className="font-extrabold text-center md:text-left sm:text-4xl lg:text-5xl text-3xl flex gap-1">
          Hackathon <span className="text-scheme-violet">1.0</span>
          <Image src={chain} alt="chain" className="w-10" />
          <Image src={spark} alt="chain" className="w-10" />
        </p>
      </div>
      <p className="text-center md:text-left self-center md:self-start">
        Participate in getlinked tech Hackathon 2023, <br /> stand a chance to
        win a big prize
      </p>
      <Image
        src={star}
        alt="star"
        className="w-5 absolute bottom-20 right-10 sm:right-56 md:right-10 lg:right-56"
      />
      <Image
        src={star}
        alt="star"
        className="w-3 absolute top-20 right-10 sm:right-20 md:hidden lg:hidden"
      />
      <Link
        href={"/regiter"}
        className="bg-gradient-to-r from-scheme-pink to-scheme-purple w-36 p-2 rounded-sm self-center md:self-start flex justify-center items-center font-semibold"
      >
        Register
      </Link>
      <div className="flex gap-4 self-center md:self-start">
        <p className="text-4xl">
          00<span className="text-base">H</span>
        </p>
        <p className="text-4xl">
          00<span className="text-base">M</span>
        </p>
        <p className="text-4xl">
          00<span className="text-base">s</span>
        </p>
      </div>
    </div>
  );
};

export default IntroText;
