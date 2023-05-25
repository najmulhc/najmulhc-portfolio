import { FaCode } from "react-icons/fa";
import SeeMore from "./SeeMore";
import TechCard from "./TechCard";
export default function TechStack() {
  return (
    <section>
      <hr className="border border-{#eeeeef} mx-10 opacity-75 " />
      <h1 className="flex items-center justify-center text-4xl font-semibold mt-4 mb-6 text-[#eeeeef] opacity-75 hover:opacity-100 gap-2">
        <FaCode /> Tech Stack
      </h1>
     <div className="px-10 gap-4 grid grid-cols-1 md:grid-cols-3 mb-4">
      <TechCard/>
      <TechCard/>
      <TechCard/>
     </div>
      <SeeMore href="/tech-stack">See more</SeeMore>
    </section>
  );
}
