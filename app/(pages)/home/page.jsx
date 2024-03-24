import EachProject from "@/app/Components/EachProject";
import "../../globals.css";
import projectData from "../../JSON/projects.json";

export default function Home() {
  return (
    <div className="relative h-screen ">
      {/* light */}
      <div className="h-[55vh] w-[40vw] rounded-full bg-white opacity-15 sm:hidden md:block left-[29rem] -top-52 fixed -z-10 blur-3xl" />
      {/* end light */}

      {/* projects */}
      <div className="flex flex-wrap transition-all duration-300 ease-in-out my-10 gap-12 justify-center items-center py-10">
        {projectData
          // .filter((pro) => pro.name != "Project4")
          // .slice(0, 5)
          .map((projects, index) => {
            return (
              <EachProject
                type={projects.type}
                desc={projects.desc}
                name={projects.name}
                img={projects.img}
                link={projects.link}
                key={index}
              />
            );
          })}
      </div>
      {/* end projects */}
    </div>
  );
}
