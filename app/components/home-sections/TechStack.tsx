import { FaCode } from "react-icons/fa";
import SeeMore from "./SeeMore";
import TechCard from "./TechCard";
import Javascript from "../Logos/Javascript";
import NextJs from "../Logos/NextJs";
import TypeScript from "../Logos/TypeScript";
export default function TechStack() {
  return (
    <section>
      <hr className="border border-{#eeeeef} mx-10 opacity-75 " />
      <h1 className="flex items-center justify-center text-4xl font-semibold mt-4 mb-6 text-[#eeeeef] opacity-75 hover:opacity-100 gap-2">
        <FaCode /> Tech Stack
      </h1>
      <div className="px-10 gap-4 grid grid-cols-1 md:grid-cols-3 mb-4">
        <TechCard
          name="Next.js"
          techType="Javascript Framework"
          description="
I am currently diving deep into Next.js, the widely embraced framework in the developer community. It has become my go-to tool for creating impressive projects that showcase my creativity and push the boundaries of what's possible."
        >
          <NextJs width="5rem" fill="#eeeeef" />{" "}
        </TechCard>
        <TechCard
          name="TypeScript"
          techType="Programming Language"
          description="With unwavering confidence, I wholeheartedly embrace TypeScript as an industry favorite, leveraging its might to craft robust, scalable solutions that elevate my development prowess and inspire exceptional project outcomes."
        >
          <TypeScript width="5rem" fill="#eeeeef" />{" "}
        </TechCard>
        <TechCard
          name="JavaScript"
          techType="Programming Language"
          description="For the past 1.5 years, I've been delving into the fascinating world of JavaScript. With its versatile toolkit, I've crafted captivating personal projects that showcase my creativity and problem-solving skills. It's been an exciting journey of growth and exploration."
        >
          <Javascript width="5rem" fill="#eeeeef" />{" "}
        </TechCard>
      </div>
      <SeeMore href="/tech-stack">See more</SeeMore>
    </section>
  );
}
