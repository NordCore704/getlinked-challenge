import React from "react";
import { sittingWoman, starGrey, star, flare } from "@/exports/image";
import Image from "next/image";

const RulesText = () => {
  return (
    <div className="w-full h-1/2 md:h-full md:w-1/2 flex flex-col items-center justify-center gap-5 p-5 lg:p-10 relative mb-10">
      <Image
        alt="star"
        src={star}
        className="absolute right-10 top-20 md:-top-0 w-4 md:right-1/2"
      />
      <Image
        src={star}
        alt="star"
        className="absolute md:hidden -bottom-5 left-1/4 w-4"
      />
      <div className="text-center md:text-left md:self-start">
        <h2 className="text-2xl sm:text-3xl font-bold text-center md:text-left md:self-start">
          Rules and
        </h2>
        <h2 className="sm:text-3xl font-bold text-center text-2xl md:text-left text-scheme-violet">
          Guidelines
        </h2>
      </div>
      <div className="self-center md:self-start text-center md:text-left">
        <p>
          Our tech hackathon is a melting pot of visionaries and its purpose is
          as clear as day; to shape the future. Whether you're a coding genius,
          a design maverick, or a concept wizard, you'll have the chance to
          transform your ideas into reality. Solving real-world problems,
          pushing the boundaries of technology, and creating solutions that can
          change the world, that's what we're all about!
        </p>
      </div>
    </div>
  );
};

export default RulesText;
