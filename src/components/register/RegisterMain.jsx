import React from "react";
import { RegisterForm, RegisterImage } from "@/exports";
import Image from "next/image";
import { flare } from "@/exports/image";

const RegisterMain = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-center">
      <RegisterImage />
      <RegisterForm />
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
    </section>
  );
};

export default RegisterMain;
