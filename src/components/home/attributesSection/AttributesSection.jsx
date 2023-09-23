import React from "react";
import { AttributeText, AttributesImage } from "@/exports";
import Image from "next/image";
import { flare } from "@/exports/image";

const AttributesSection = () => {
  return (
    <section className="flex flex-col md:flex-row border-b border-gray-700 relative items-center justify-center">
      <Image
        src={flare}
        alt="flare"
        className="opacity-50 top-10 absolute lg:-bottom-1/2 -z-10 left-0"
      />
         <Image
        src={flare}
        alt="flare"
        className="absolute -right-0 w-[350px] top-[80%] md:w-[300px] lg:w-[500px] md:top-1/2 lg:top-1/2 -rotate-180 opacity-50"
      />
      <AttributesImage />
      <AttributeText />
    </section>
  );
};

export default AttributesSection;
