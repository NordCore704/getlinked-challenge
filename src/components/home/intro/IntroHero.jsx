import React from "react";
import Image from "next/image";
import { hero, shinySphere, star } from "@/exports/image";

const IntroHero = () => {
  return (
    <div className="flex items-center justify-center mt-20">
      <Image
        src={star}
        alt="star"
        className="w-3 left-[50%] absolute top-36 hidden sm:hidden md:flex"
      />
      <Image
        src={hero}
        alt="hero"
        className="grayscale w-[100%] sm:w-[90%] md:w-[90%] lg:w-[80%] -z-20 self-end justify-self-end"
      />
      <Image
        src={shinySphere}
        alt="hero"
        className="absolute justify-self-center self-center sm:w-96 w-72 md:w-72 lg:w-96"
      />
    </div>
  );
};

export default IntroHero;
