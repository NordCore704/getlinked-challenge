import React, { useState, useEffect } from "react";
import { Footer, Navbar } from "@/exports";
import { useRouter } from "next/router";

const SharedLayout = ({ children }) => {
  const router = useRouter();
  const [isMobileView, setIsMobileView] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobileView(window.innerWidth < 768);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const excludeContactRoute = router.pathname === "/contact";
  const excludeRegisterRoute = router.pathname === "/register";

  if (isMobileView && excludeContactRoute) {
    return <>{children}</>;
  }
  if (isMobileView && excludeRegisterRoute) {
    return <>{children}</>;
  }

  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
};

export default SharedLayout;
