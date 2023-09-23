import React from "react";
import { TimelineHeading, Timeline } from "@/exports";

const TimelineSection = () => {
  return (
    <section className="flex flex-col gap-20 p-5 items-center justify-center" id="timeline">
      <TimelineHeading />
      <Timeline />
    </section>
  );
};

export default TimelineSection;
