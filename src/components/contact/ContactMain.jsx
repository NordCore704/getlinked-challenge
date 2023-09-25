import React from "react";
import { ContactForm, ContactText, NavigateBack } from "@/exports";
import { flare } from "@/exports/image";
import Image from "next/image";
import { motion } from "framer-motion";

const ContactMain = () => {
  const opacityVariant = {
    animate: {
      opacity: 1,
    },
    init: {
      opacity: 0,
    },
  };
  return (
    <motion.section
      className="p-8 flex flex-col md:flex-row relative overflow-hidden gap-10 items-center justify-center"
      variants={opacityVariant}
      animate={"animate"}
      initial={"init"}
      transition={{ ease: "easeInOut", type: "spring", duration: 2 }}
    >
      <NavigateBack />
      <ContactText />
      <ContactForm />
      <Image
        src={flare}
        alt="flare"
        className="absolute left-0 w-[350px] top-20 md:w-[300px] lg:w-[500px] md:top-20 opacity-70"
      />
      <Image
        src={flare}
        alt="flare"
        className="absolute -right-0 w-[350px] hidden md:flex top-36 md:w-[300px] lg:w-[500px] md:top-36 lg:top-36 -rotate-180 opacity-70"
      />
    </motion.section>
  );
};

export default ContactMain;
