import React from "react";
import Image from "next/image";
import { starPurple } from "@/exports/image";

const TimelineHeading = () => {
  return (
    <div className="flex items-center flex-col gap-4 relative">
      <h2 className="font-bold text-2xl sm:text-3xl text-center font-custom">Timeline</h2>
      <p className="text-center">
        Here is the breakdown of the time we anticipate <br /> using for the
        upcoming event.
      </p>
      
    </div>
  );
};

export default TimelineHeading;
