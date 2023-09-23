import React from "react";
import { sittingWoman, starGrey } from "@/exports/image";
import Image from "next/image";

const RulesImage = () => {
  return (
    <div className="flex items-center justify-center w-full h-1/2 md:w-1/2 md:h-full relative">
      <Image src={sittingWoman} alt="sitting-woman" className="z-10" />
      <Image
        src={starGrey}
        alt="star"
        className="absolute left-10 sm:left-10 lg:top-1/2 w-3 sm:w-4 top-[70%]"
      />
    </div>
  );
};

export default RulesImage;
