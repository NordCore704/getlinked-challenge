import React from "react";
import Image from "next/image";
import { sponsors, starGrey, starPurple } from "@/exports/image";

const PartnersDisplay = () => {
  return (
    <div className="flex items-center justify-center py-2  sm:p-5 relative">
      <Image
        src={starPurple}
        alt="star"
        className=" absolute sm:left-20 md:left-32 md:top-0 w-3 top-2 left-10"
      />
      <Image
        src={starPurple}
        alt="star"
        className=" absolute md:left-1/2 md:top-20 w-3 top-[40%] left-[55%]"
      />
      <Image
        src={starGrey}
        alt="star"
        className="absolute md:left-1/2 md:bottom-20 left-[80%] bottom-10 w-3 md:w-4"
      />
      <Image src={sponsors} alt="sponsors" className="w-[85%]" />
    </div>
  );
};

export default PartnersDisplay;
