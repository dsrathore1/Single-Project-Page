import React from "react";
import { Dawning_of_a_New_Day } from "next/font/google";

const font = Dawning_of_a_New_Day({
  weight: ["400"],
  style: ["normal"],
  subsets: ["latin"],
});

const EachProject = () => {
  return (
    <div className="h-[65vh] w-[22%] flex flex-col item-center bg-[#6d6d6d41] rounded-lg backdrop-blur border-t-amber-200 border-t-2 border-opacity-15 p-3 cursor-pointer hover:scale-[1.1] transition-all ease-linear duration-300">
      <img
        alt="image"
        width={30}
        height={30}
        src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        className="w-full h-[38vh] bg-gray-500 rounded-lg"
      />
      <h1
        className={`${font.className} text-2xl tracking-wider text-center text-white -mt-4 -rotate-12`}
      >
        DevOps
      </h1>
      <p className="text-white opacity-50 text-md mt-2 h-38 w-full font-extralight leading-7 tracking-wide text-justify">
        Lorem, ipsum. Lorem ipsum dolor sit amet consectetur adipisicing elit.
        At fugiat possimus neque iusto quo aperiam, esse sint commodi debitis a.
      </p>
    </div>
  );
};

export default EachProject;
