import React from "react";
import { Bungee_Hairline } from "next/font/google";

const bh = Bungee_Hairline({
  weight: ["400"],
  style: ["normal"],
  subsets: ["latin"],
});

const Nav = () => {
  return (
    <div className="w-full h-16 justify-center items-center flex relative">
      <h1
        className={`text-white ${bh.className} lg:text-6xl tracking-wider mt-5 md:text-4xl sm:text-2xl transition-all ease-in-out duration-200`}
      >
        🎇 Projects 🎇
      </h1>
    </div>
  );
};

export default Nav;
