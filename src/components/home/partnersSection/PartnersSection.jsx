import React from "react";
import { PartnersText, PartnersDisplay } from "@/exports";
import Image from "next/image";
import { flare } from "@/exports/image";

const PartnersSection = () => {
  return (
    <section className="flex flex-col gap-5 border-b border-gray-700 relative items-center justify-center">
      <PartnersText />
      <PartnersDisplay />
      <Image
        src={flare}
        alt="flare"
        className="opacity-50 top-0 w-[350px] absolute lg:-bottom-1/2 left-0"
      />
      <Image
        src={flare}
        alt="flare"
        className="absolute -right-0 w-[350px] top-[60%] md:w-[300px] lg:w-[500px] md:top-1/2 lg:top-1/2 -rotate-180 opacity-50"
      />
    </section>
  );
};

export default PartnersSection;
