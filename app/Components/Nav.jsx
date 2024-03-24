"use client";
import React from "react";
import { Bungee_Hairline } from "next/font/google";
import { useRouter } from "next/navigation";

const bh = Bungee_Hairline({
  weight: ["400"],
  style: ["normal"],
  subsets: ["latin"],
});

const Nav = () => {
  const router = useRouter();
  return (
    <div className="w-full h-16 justify-center items-center flex relative">
      <h1
        className={`text-white ${bh.className} lg:text-6xl tracking-wider mt-5 md:text-4xl sm:text-2xl transition-all ease-in-out duration-200 cursor-default`}
        onClick={() => {
          router.push("/");
        }}
      >
        🎇 Projects 🎇
      </h1>
    </div>
  );
};

export default Nav;
