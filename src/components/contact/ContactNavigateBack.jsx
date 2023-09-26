import React from "react";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { useRouter } from "next/router";

const NavigateBack = () => {
  const router = useRouter();

  const handleGoBack = () => {
    router.back();
  };
  return (
    <div className="flex w-full md:hidden">
      <button
        className="border border-scheme-violet p-1 rounded-full text-lg"
        onClick={handleGoBack}
      >
        <MdKeyboardArrowLeft />
      </button>
    </div>
  );
};

export default NavigateBack;
