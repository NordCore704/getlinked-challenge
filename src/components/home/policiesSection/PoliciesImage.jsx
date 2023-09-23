import React from "react";
import { lock, lockGuy, star, starGrey, starPurple } from "@/exports/image";
import Image from "next/image";

const PoliciesImage = () => {
  return (
    <div className="w-full h-1/2 md:w-1/2 md:h-full flex relative p-10 flex-col justify-end items-center">
      <Image src={lock} alt="lock" className="absolute top-5 w-[70%]" />
      <Image
        src={lockGuy}
        alt="lock-person"
        className="self-start z-10 justify-self-start"
      />
      <Image
        src={star}
        alt="star"
        className="absolute bottom-[20%] right-10 w-3 md:w-4"
      />
      <Image
        src={starGrey}
        alt="star"
        className="absolute bottom-[30%] left-20 sm:left-32 w-3 md:w-4"
      />
      <Image
        src={starPurple}
        alt="star"
        className="absolute bottom-[37%] left-32 hidden md:flex sm:left-44 w-3 md:w-4"
      />
      <Image
        src={starPurple}
        alt="star"
        className="absolute top-[20%] left-5 w-4"
      />
      <Image
        src={starGrey}
        alt="star"
        className="absolute top-[20%] right-1/4 w-3 md:w-4"
      />
    </div>
  );
};

export default PoliciesImage;
