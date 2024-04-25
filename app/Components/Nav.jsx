"use client";
import React, { useEffect, useState } from "react";
import { Bungee_Hairline } from "next/font/google";
import { useRouter } from "next/navigation";
import {
  AiFillGithub,
  AiFillLinkedin,
  AiFillCode,
  AiOutlineSearch,
} from "react-icons/ai";

const bh = Bungee_Hairline({
  weight: ["400"],
  style: ["normal"],
  subsets: ["latin"],
  display: "swap",
  adjustFontFallback: false,
});

import "../globals.css";
import { motion } from "framer-motion";

const Nav = () => {
  const router = useRouter();

  const [search, setSearch] = useState(false);
  const [searchValue, setSearchValue] = useState("");

  const handleSearch = (e) => {
    if (e.key === "Enter") {
      console.log(searchValue);
      setSearchValue("");
    }
  };

  useEffect(() => {
    if (window.innerWidth <= 1200) {
      setSearch(true);
    }
  });

  return (
    <>
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ ease: "linear", duration: 0.5 }}
        className="nav-bar w-full h-16 justify-center items-center flex relative"
      >
        <div className="social-icons text-white absolute left-6 top-5 flex gap-x-10">
          <AiFillGithub className="cursor-pointer text-gray-500" size={35} />
          <AiFillLinkedin className="cursor-pointer text-blue-400" size={35} />
          <AiFillCode className="cursor-pointer text-amber-400" size={35} />
        </div>
        <h1
          className={`text-white ${bh.className} lg:text-6xl tracking-wider mt-5 md:text-4xl sm:text-2xl transition-all ease-in-out duration-200 cursor-default`}
          onClick={() => {
            router.push("/");
          }}
        >
          🎇 Projects 🎇
        </h1>
        <div className="search-container flex absolute right-5 top-7 gap-6">
          {search ? (
            <input
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
              onKeyUp={handleSearch}
              className="search-bar rounded px-4 py-2"
              placeholder="Search"
            />
          ) : (
            ""
          )}
          <AiOutlineSearch
            className="search-icon transition-all duration-300 ease-linear"
            onClick={() => setSearch(!search)}
            size={40}
            color={search ? "#fff" : "#454545"}
          />
        </div>
      </motion.div>
    </>
  );
};

export default Nav;
