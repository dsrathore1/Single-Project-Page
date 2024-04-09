"use client";
import React from "react";
import { Dawning_of_a_New_Day } from "next/font/google";
import "../globals.css";
import Image from "next/image";
import { useRouter } from "next/navigation";

import { motion } from "framer-motion";

const font = Dawning_of_a_New_Day({
  weight: ["400"],
  style: ["normal"],
  subsets: ["latin"],
});

const EachProject = ({ type, desc, name, img, link }) => {
  const router = useRouter();
  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ ease: "linear", duration: .5   }}
      className="mainContainer sm:h-[40vh] sm:w-[10%] md:h-full md:w-full lg:h-[65vh] lg:w-[22%] flex flex-col item-center bg-[#6d6d6d41] rounded-lg backdrop-blur border-t-amber-200 border-t-2 border-opacity-15 p-3 cursor-pointer lg:hover:scale-[1.1] transition-all ease-in-out duration-300 active:scale-[.9] mx-3 lg:mx-0 group"
      onClick={() => {
        // console.log(link);
        router.push(link);
      }}
    >
      <Image
        alt="#image"
        width={800}
        height={100}
        src={img}
        className="w-full h-[38vh] bg-gray-500 rounded-lg object-cover"
        priority={true}
      />
      <h1
        className={`${font.className} group-hover:hidden text-2xl tracking-wider text-center text-white -mt-4 -rotate-12`}
      >
        {type}
      </h1>
      <h1
        className={`${font.className} hidden group-hover:block text-2xl tracking-wider text-center text-white mt-4 group-hover:animate-bounce`}
      >
        {name}
      </h1>
      <p className="text-white opacity-50 text-md mt-2 h-28 w-full font-extralight leading-7 tracking-wide text-justify text-ellipsis overflow-hidden">
        {desc}
      </p>
    </motion.div>
  );
};

export default EachProject;
