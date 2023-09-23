import React from "react";
import {
  FooterNotes,
  FooterContact,
  FooterLinks,
  FooterRights,
} from "@/exports";

const Footer = () => {
  return (
    <footer className="w-full flex flex-col py-8 bg-scheme-dark px-5 gap-5">
      <div className="w-full flex flex-col  lg:gap-24 md:flex-row">
        <FooterNotes />
        <FooterLinks />
        <FooterContact />
      </div>

      <FooterRights />
    </footer>
  );
};

export default Footer;
