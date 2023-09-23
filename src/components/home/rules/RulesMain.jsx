import React from "react";
import Image from "next/image";
import { flare } from "@/exports/image";
import { RulesText, RulesImage } from "@/exports";

const RulesMain = () => {
  return (
    <section className="flex flex-col md:flex-row-reverse items-center justify-center border-b border-gray-700 relative w-full overflow-y-visible">
      <Image
        src={flare}
        alt="flare"
        className="absolute -top-36 left-0  opacity-50"
      />
      <Image
        src={flare}
        alt="flare"
        className="absolute -right-0 top-1/3 md:w-[300px] lg:w-[500px] md:top-1/2 lg:top-1/2 -rotate-180 opacity-50"
      />
      <RulesImage />
      <RulesText />
    </section>
  );
};

export default RulesMain;
