import React from "react";
import { analyticsPeople, star, starPurple } from "@/exports/image";
import Image from "next/image";

const AttributesImage = () => {
  return (
    <div className="w-full md:w-1/2 h-1/2 md:h-full flex py-5 items-center justify-center">
      <Image src={star} alt="star" className="absolute w-3" />
      <Image src={starPurple} alt="star" className="absolute w-3 top-5" />
      <Image src={analyticsPeople} alt="analytics-people" />
    </div>
  );
};

export default AttributesImage;
