import EachProject from "@/app/Components/EachProject";
import "../../globals.css";

export default function Home() {
  return (
    <div className="relative h-screen">
      <div className="h-[55vh] w-[40vw] rounded-full bg-white opacity-15 left-[29rem] -top-52 fixed -z-10 blur-3xl" />
      <div className="projects w-full flex flex-wrap transition-all duration-300 ease-in-out my-10 gap-12 justify-center py-10">
        <EachProject />
        <EachProject />
        <EachProject />
        <EachProject />
        <EachProject />
        <EachProject />
        <EachProject />
        <EachProject />
        <EachProject />
      </div>
    </div>
  );
}
