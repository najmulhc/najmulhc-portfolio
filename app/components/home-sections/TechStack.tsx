import { FaCode } from "react-icons/fa";
import SeeMore from "./SeeMore";
export default function TechStack() {
  return (
    <section>
      <hr className="border border-{#eeeeef} mx-10 opacity-75 " />
      <h1 className="flex items-center justify-center text-4xl font-semibold my-4 text-[#eeeeef] opacity-75 hover:opacity-100 gap-2">
        <FaCode /> Tech Stack
      </h1>
      <SeeMore href="/tech-stack">See more</SeeMore>
    </section>
  );
}
