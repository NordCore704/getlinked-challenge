import React from "react";
import { starGrey } from "@/exports/image";
import Image from "next/image";

const FooterNotes = () => {
  return (
    <div className="p-8 md:p-2 lg:p-8 flex flex-col gap-5 justify-center relative md:w-[35%] self-start">
      <h2 className="text-2xl md:text-3xl font-bold">
        get<span className="text-scheme-violet">linked</span>
      </h2>

      <p className="text-left self-start">
        Getlinked tech Hackathon is a technology innovation program established
        by a group of organizations with the aim of showcasing young and
        talented individuals in the field of technology
      </p>

      <div className="flex gap-3 items-center">
        <a href="" className="">
          Terms Of Use
        </a>{" "}
        <div className="h-5 w-0.5 rounded-sm bg-scheme-violet"></div>
        <a href="" className="">Privacy Policy</a>
      </div>
      <Image src={starGrey} alt="star" className="absolute top-1/2 left-2 w-3"/>
    </div>
  );
};

export default FooterNotes;
