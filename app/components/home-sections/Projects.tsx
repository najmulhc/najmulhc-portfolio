import { FaProjectDiagram } from "react-icons/fa";
import SeeMore from "./SeeMore";
export default function Projects() {
  return (
    <section>
      <hr className="border border-{#eeeeef} mx-10 opacity-75 " />
      <h1 className="flex items-center justify-center text-4xl font-semibold my-4 text-[#eeeeef] opacity-75 hover:opacity-100 gap-2">
        <FaProjectDiagram /> Projects
      </h1>
      <SeeMore href="/projects">See more</SeeMore>
    </section>
  );
}
