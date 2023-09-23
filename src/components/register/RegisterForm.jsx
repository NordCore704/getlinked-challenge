import React, { useState } from "react";
import Image from "next/image";
import { postRegistration } from "@/utils/post";
import { star, starGrey } from "@/exports/image";
import { validateForm } from "@/utils/validateForm";
import { RegisterSuccess } from "@/exports";

const RegisterForm = () => {
  const [postData, setPostData] = useState({
    email: "",
    phone_number: "",
    team_name: "",
    project_topic: "",
    group_size: 10,
    category: 1,
    privacy_poclicy_accepted: true,
  });
  const [errors, setErrors] = useState({});
  const [showPopUp, setShowPopUp] = useState(false)

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setPostData({
      ...postData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
 
    const newErrors = validateForm(postData);
 

    if (Object.keys(newErrors).length === 0) {
      const finalPostData = {
        ...postData,
        group_size: Number(postData.group_size),
        category: Number(postData.group_size)
      }
      try {
        const data = await postRegistration(finalPostData);
        console.log("Post successful", data);
        setShowPopUp(true)
      } catch (error) {
        console.log(error);
      }
    }
    setErrors(newErrors)
  };

  const closePopup = () => {
    setShowPopUp(false)
  }

  return (
    <div className="flex items-center justify-center flex-col gap-6 relative w-full h-[60%] md:w-1/2 md:h-full p-2 sm:p-5 lg:p-8 z-10 ">
      <div className="w-full md:rounded-md md:bg-opacity-50 md:bg-gray-800 md:shadow-sm md:backdrop-blur-lg md:backdrop-filter p-3 sm:p-10 flex flex-col gap-4">
        <div className="flex flex-col gap-16">
          <p className="text-scheme-violet text-2xl sm:text-3xl font-bold hidden md:flex">
            Register
          </p>

          <div className="flex flex-col">
            <div className="flex gap-2 items-center justify-center self-start">
              <p className="">Be part of this movement!</p>
              <p className="border-b border-dashed border-scheme-violet w-16 text-center  ">
                🚶🏼‍♂️🚶🏼‍♀️
              </p>
            </div>
            <p className="uppercase text-xl font-semibold">Create an account</p>
          </div>
        </div>
        <form
          action="POST"
          onSubmit={handleSubmit}
          className="flex flex-col gap-5 w-full"
        >
          <div className="flex flex-col md:flex-row gap-5 w-full">
            <div className="flex flex-col gap-2 md:w-1/2">
              <label htmlFor="team_name" className="">
                Team's Name
              </label>
              <input
                type="text"
                value={postData.team_name}
                onChange={handleInputChange}
                className="rounded-md bg-transparent border  p-2 w-full placeholder:text-gray-500 outline-none"
                name="team_name"
                placeholder="Enter the name of your group"
              />
              {errors.team_name && <p className="text-sm text-red-500">{errors.team_name}</p>}
            </div>
            <div className="flex flex-col gap-2 md:w-1/2">
              <label htmlFor="phone_number" className="">
                Phone
              </label>
              <input
                type="text"
                value={postData.phone_number}
                onChange={handleInputChange}
                className="rounded-md bg-transparent border  p-2 w-full placeholder:text-gray-500 outline-none"
                name="phone_number"
                placeholder="Enter your phone number"
              />
              {errors.phone_number && <p className="text-sm text-red-500">{errors.phone_number}</p>}
            </div>
            
          </div>
          <div className="flex flex-col md:flex-row gap-5 w-full">
            <div className="flex flex-col gap-2 md:w-1/2">
              <label htmlFor="email" className="">
                Email
              </label>
              <input
                type="text"
                className="rounded-md bg-transparent border  p-2 w-full placeholder:text-gray-500 outline-none"
                name="email"
                placeholder="Enter your email address"
              />
              {errors.email && <p className="text-sm text-red-500">{errors.email}</p>}
            </div>
            <div className="flex flex-col gap-2 md:w-1/2">
              <label htmlFor="topic" className="">
                Project Topic
              </label>
              <input
                type="text"
                className="rounded-md bg-transparent border  p-2 w-full placeholder:text-gray-500 outline-none"
                value={postData.project_topic}
                onChange={handleInputChange}
                name="project_topic"
                placeholder="What is your group project topic"
              />
              {errors.project_topic && <p className="text-sm text-red-500">{errors.project_topic}</p>}
            </div>
          </div>
          <div className="flex gap-5 w-full">
            <div className="flex flex-col gap-2 w-1/2">
              <label htmlFor="category" className="">
                Category
              </label>
              <select
                name="category"
                value={postData.category}
                onChange={handleInputChange}
                id=""
                placeholder="Select your category"
                className="outline-none bg-transparent w-full border text-gray-500 p-2 rounded-md"
              >
                <option value="0" className="bg-transparent text-scheme-violet">
                  Select your category
                </option>
                <option value="1" className="bg-transparent text-scheme-violet">
                  Frontend
                </option>
                <option value="2" className="bg-transparent text-scheme-violet">
                  Backend
                </option>
                <option value="3" className="bg-transparent text-scheme-violet">
                  Fullstack
                </option>
              </select>
            </div>
            <div className="flex flex-col gap-2 w-1/2">
              <label htmlFor="size" className="">
                Group Size
              </label>
              <select
                name="group_size"
                value={postData.group_size}
                onChange={handleInputChange}
                id=""
                placeholder="Select your category"
                className="outline-none bg-transparent w-full border text-gray-500 p-2 rounded-md"
              >
                <option value="0" className="bg-transparent text-scheme-violet">
                  0
                </option>
                <option value="1" className="bg-transparent text-scheme-violet">
                  1
                </option>
                <option value="2" className="bg-transparent text-scheme-violet">
                  2
                </option>
                <option value="3" className="bg-transparent text-scheme-violet">
                  3
                </option>
                <option value="4" className="bg-transparent text-scheme-violet">
                  4
                </option>
              </select>
              {errors.group_size && <p className="text-sm text-red-500">{errors.group_size}</p>}
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <p className="italic text-scheme-violet text-sm">
              Please review your registration details before submitting
            </p>
            <div className=" custom-checkbox">
              <input
                onChange={handleInputChange}
                checked={postData.privacy_poclicy_accepted}
                type="checkbox"
                name="privacy_poclicy_accepted"
                id=""
                className="cursor-pointer"
              />
              <label htmlFor="privacy_poclicy_accepted" className="pl-3">
                I agreed with the event's terms and conditions and privacy
                policy
              </label>
              
            </div>
            {errors.privacy_policy_accepted && <p className="text-sm text-red-500">{errors.privacy_poclicy_accepted}</p>}
          </div>
          <button
            type="submit"
            className="self-center md:self-start bg-gradient-to-r from-scheme-pink to-scheme-purple rounded-sm font-semibold p-2 w-36 md:w-full"
          >
            Register Now
          </button>
        </form>
      </div>
      <Image src={star} alt="star" className="absolute top-10 left-[70%] w-4" />
      <Image
        src={starGrey}
        alt="star"
        className="absolute bottom-5 left-[70%] w-3"
      />
      {showPopUp && <RegisterSuccess onClose={closePopup}/>}
    </div>
  );
};

export default RegisterForm;
