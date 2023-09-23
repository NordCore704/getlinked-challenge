import React, { useState } from "react";
import Image from "next/image";
import { postForm } from "@/utils/post";
import {
  x,
  meta,
  instagram,
  linkedin,
  starPurple,
  star,
  starGrey,
} from "@/exports/image";
import { validateContactForm } from "@/utils/validateForm";
import { RegisterSuccess }  from "@/exports";

const ContactForm = () => {
  const [postData, setPostData] = useState({
    email: "",
    phone_number: "",
    first_name: "",
    message: "",
  });
  const [errors, setErrors] = useState({})
  const [showPopUp, setShowPopUp] = useState(false)

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setPostData({
      ...postData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = validateContactForm(postData);

    if (Object.keys(newErrors).length === 0) {
      try {
        const data = await postForm(postData);
        console.log("Post successful", data);
        setShowPopUp(true)
        return data
      } catch (error) {}
    }
    setErrors(newErrors)
  };

  const closePopup = () => {
    setShowPopUp(false)
  }

  return (
    <div className="flex items-center justify-center flex-col gap-6 relative z-10">
      <div className="md:w-[90%] md:rounded-md md:bg-opacity-50 md:bg-gray-800 md:shadow-sm md:backdrop-blur-lg md:backdrop-filter p-3 sm:p-10 flex flex-col gap-4">
        <div className="">
          <p className="text-scheme-violet text-2xl sm:text-3xl font-bold">
            Questions or need assistance?
          </p>
          <p className="text-scheme-violet text-2xl sm:text-3xl font-bold">
            Let us know about it!
          </p>
        </div>

        <form action="" onSubmit={handleSubmit} className="flex gap-5 flex-col">
          <div className="">
            <input
              type="text"
              onChange={handleInputChange}
              value={postData.first_name}
              className="rounded-md bg-transparent border  p-2 w-full placeholder:text-white outline-none"
              name="first_name"
              placeholder="First Name"
            />
            {errors.first_name && <p className="text-sm text-red-500 mt-3">{errors.first_name}</p>}
          </div>
          <div className="">
            <input
              type="text"
              onChange={handleInputChange}
              value={postData.phone_number}
              className="rounded-md bg-transparent border  p-2 w-full placeholder:text-white outline-none"
              name="phone_number"
              placeholder="Phone"
            />
             {errors.phone_number && <p className="text-sm text-red-500 mt-3">{errors.phone_number}</p>}
          </div>
          <div className="">
            <input
              type="email"
              className="rounded-md bg-transparent border  p-2 w-full placeholder:text-white outline-none"
              name="email"
              placeholder="Email"
              onChange={handleInputChange}
              value={postData.email}
            />
             {errors.email && <p className="text-sm text-red-500 mt-3">{errors.email}</p>}
          </div>

          <div className="w-full">
            <textarea
              name="message"
              id=""
              className="bg-transparent border rounded-md p-2 placeholder:text-white w-full outline-none"
              placeholder="Message"
              cols="10"
              rows="5"
              onChange={handleInputChange}
              value={postData.message}
            ></textarea>
             {errors.message && <p className="text-sm text-red-500 mt-3">{errors.message}</p>}
          </div>

          <button
            type="submit"
            className="w-36 rounded-md p-3 font-semibold bg-gradient-to-r from-scheme-pink to-scheme-purple self-center"
          >
            Submit
          </button>
        </form>
        <div className="self-center flex items-center md:hidden flex-col gap-2">
          <p className="text-scheme-violet">Share on</p>
          <div className="flex gap-3">
            <a href="" className="">
              <Image src={instagram} alt="instagram" />
            </a>
            <a href="" className="">
              <Image src={x} alt="x" />
            </a>
            <a href="" className="">
              <Image src={meta} alt="meta" />
            </a>
            <a href="" className="">
              <Image src={linkedin} alt="in" />
            </a>
          </div>
        </div>
      </div>
      <Image
        src={star}
        alt="star"
        className="absolute top-20 right-5 md:right-0 w-4"
      />
      <Image
        src={starGrey}
        alt="star"
        className="absolute w-3 right-2 bottom-[20%]"
      />
      <Image
        src={starPurple}
        alt="star"
        className="absolute bottom-20 left-5 sm:bottom-32 w-3 sm:left-20 md:w-4 md:left-14"
      />
      <Image
        src={starPurple}
        alt="star"
        className="absolute w-3 flex md:hidden top-0"
      />
      {showPopUp && <RegisterSuccess onClose={closePopup}/>}
    </div>
  );
};

export default ContactForm;
