import React from "react";
import { PoliciesText, PoliciesImage } from "@/exports";
import { flare } from "@/exports/image";
import Image from "next/image";

const PoliciesSection = () => {
  return (
    <section className="flex flex-col md:flex-row justify-center items-center md:items-end relative">
      <PoliciesText />
      <PoliciesImage />
      <Image
        src={flare}
        alt="flare"
        className="absolute left-0 w-[350px] top-[60%] md:w-[300px] lg:w-[500px] md:top-1/2 lg:top-1/2 opacity-70"
      />
    </section>
  );
};

export default PoliciesSection;
