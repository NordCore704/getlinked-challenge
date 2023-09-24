import React from "react";
import { IdeasText, IdeasImage } from "@/exports";

const Ideas = () => {
  return (
    <section className="flex flex-col items-center justify-center overflow-hidden md:flex-row border-b border-gray-700">
      <IdeasImage />
      <IdeasText />
    </section>
  );
};

export default Ideas;
