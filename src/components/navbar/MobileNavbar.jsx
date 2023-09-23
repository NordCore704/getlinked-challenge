import React, { useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { motion } from "framer-motion";

const MobileNavbar = ({ alata, toggle, setToggle }) => {
  const router = useRouter();
  const currentRoute = router.pathname;

  const parentAnimationVariants = {
    init: {
      scale: 0,
    },
    animate: {
      scale: 1,
    },
  };

  const toggleNav = () => {
    setToggle((prev) => !prev);
  };



  return (
    <div
      className={`md:hidden lg:hidden list-none absolute top-0 left-0 flex items-center justify-center text-center backdrop-blur-sm w-[100%]  z-30 h-screen flex-col ${alata.className}`}
    >
      <motion.div
        variants={parentAnimationVariants}
        initial="init"
        animate="animate"
        exit={"init"}
        transition={{
          ease: "easeInOut",
          type: "string",
        }}
        className="bg-scheme-bg-color p-2 h-full rounded-md w-full flex items-center justify-center text-center"
      >
        <ul className="flex flex-col gap-8 text-left w-[90%]">
          <li className="">
            <Link href={"#timeline"} onClick={toggleNav} className={`text-xl`}>
              Timeline
            </Link>
          </li>
          <li className="">
            <Link
              href={"/"}
              onClick={toggleNav}
              className={`text-xl ${currentRoute === "/" ? "active" : ""}`}
            >
              Overview
            </Link>
          </li>
          <li className="">
            <Link href={"#faqs"} onClick={toggleNav} className={`text-xl`}>
              FAQs
            </Link>
          </li>
          <li className="">
            <Link
              href={"/contact"}
              onClick={toggleNav}
              className={`text-xl ${
                currentRoute === "/contact" ? "active" : ""
              }`}
            >
              Contact
            </Link>
          </li>
          <Link
            href={"/register"}
            onClick={toggleNav}
            className={`p-3 w-36 flex items-center ${
              currentRoute === "/register"
                ? "bg-transparent border-scheme-violet border-2"
                : "bg-gradient-to-r from-scheme-pink to-scheme-purple"
            }  justify-center rounded-sm font-semibold`}
          >
            Register
          </Link>
        </ul>
      </motion.div>
    </div>
  );
};

export default MobileNavbar;
