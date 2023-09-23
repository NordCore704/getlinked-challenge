import React from "react";
import Image from "next/image";
import { trophy, medals, star, starGrey } from "@/exports/image";

const PrizeImage = () => {
  return (
    <div className="w-full h-1/2 flex items-center justify-center flex-col md:flex-row p-10 gap-10 relative">
      <div className="w-[80%] h-1/2 md:w-[40%] md:h-full z-10 relative">
        <Image src={trophy} alt="trophy" className="" />
        <Image
          src={starGrey}
          alt="star"
          className="absolute  -bottom-5 left-1/3 w-3"
        />
      </div>
      <div className="w-full h-1/2 md:w-1/2 md:h-full relative">
        <Image src={medals} alt="medals" className="" />
        <Image
          src={starGrey}
          alt="star"
          className="absolute  top-0 lg:left-14 left-10 w-4 md:flex hidden"
        />
        <Image
          src={starGrey}
          alt="star"
          className="absolute  top-12 sm:top-28 md:top-20 lg:top-28 sm:right-0 -right-3 w-3"
        />
        <Image
          src={star}
          alt="star"
          className="absolute  -bottom-5 right-1/3 w-3"
        />
      </div>
    </div>
  );
};

export default PrizeImage;
