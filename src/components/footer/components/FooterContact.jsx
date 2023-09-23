import React from "react";
import { TiLocation } from "react-icons/ti";
import { CgPhone } from "react-icons/cg";
import { starGrey } from "@/exports/image";
import Image from "next/image";

const FooterContact = () => {
  return (
    <div className="flex flex-col gap-4 p-8 relative">
      <p className="text-lg font-semibold text-scheme-violet">Contact Us</p>
      <div className="flex gap-3 items-center">
        <CgPhone />
        <p className="">+234 6707653444</p>
      </div>
      <div className="flex gap-3 items-center">
        <TiLocation className="self-start"/>
        <div className="">
          <p className="">2z, Alara Street</p>
          <p className="">Yaba 100012</p>
          <p className="">Lagos State</p>
        </div>
      </div>
      <Image src={starGrey} alt='star' className="absolute left-[70%] md:left-[90%] top-36 w-3"/>
    </div>
  );
};

export default FooterContact;
