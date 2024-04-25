"use client";
import React from "react";
import Image from "next/image";
import projectData from "../../../JSON/projects.json";

const DetailPage = ({ params }) => {
  console.log(params.details);
  return (
    <>
      <div className="h-full flex-col flex justify-center items-center w-full mt-10">
        <Image
          alt="#image"
          className="w-1/2 h-1/2 object-contain border-2 border-white border-opacity-20 rounded-xl"
          src={"/assets/netflix-clone.png"}
          width={900}
          height={900}
        />

        <div className="mt-10 w-full">
          {projectData
            .filter((pro) => pro.slug == params.details)
            .map((elem, index) => {
              return (
                <div
                  className="flex-col flex justify-center items-center w-full h-auto px-10 space-y-10"
                  key={index}
                >
                  <h1 className="text-white text-5xl uppercase">{elem.name}</h1>
                  <p className="text-white w-[65%] text-justify">{elem.desc}</p>
                  <p className="text-white w-[65%] text-justify">{elem.desc}</p>
                  <p className="text-white w-[65%] text-justify">{elem.desc}</p>
                </div>
              );
            })}
        </div>
      </div>
    </>
  );
};

export default DetailPage;
