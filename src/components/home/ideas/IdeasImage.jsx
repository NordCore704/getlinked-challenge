import React from "react";
import { idea, arrow, starViolet } from "@/exports/image";
import Image from "next/image";

const IdeasImage = () => {
  return (
    <div className="w-full md:w-[50%] flex justify-center items-center h-[50%] md:h-full lg:py-10 py-5 px-5 relative">
      <Image
        src={arrow}
        alt="arrow"
        className="absolute bottom-0 lg:right-20 lg:bottom-20 md:right-5"
      />
      <Image
        src={starViolet}
        alt="arrow"
        className="absolute top-1/4 left-5 sm:left-20 md:left-5"
      />
      <div className="relative">
        <Image src={idea} alt="lightbulb" className="mb-5 lg:mr-5" />
        <p className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center font-bold text-2xl">
          The Big <br /> Idea!
        </p>
      </div>
    </div>
  );
};

export default IdeasImage;
