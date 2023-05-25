import { FaGraduationCap } from "react-icons/fa";
import SeeMore from "./SeeMore";
import EducationCard from "./EducationCard";
import Du from "../Logos/Du";
import Phero from "../Logos/Phero";
export default function Education() {
  return (
    <section>
      <hr className="border border-{#eeeeef} mx-10 opacity-75 " />
      <h1 className="flex items-center justify-center text-4xl font-semibold mt-4 mb-8 text-[#eeeeef] opacity-75 hover:opacity-100 gap-2 ">
        <FaGraduationCap /> Education
      </h1>
      <div className=" mx-10 mb-4 grid grid-cols-1 md:grid-cols-2 gap-8">
        <EducationCard
          name="University of Dhaka"
          course="Bachalors in Business Administration. Major in Management
            Information Systems"
          year="2022 - 2025"
        >
          <Du fill="#eeeeef" width="100px" />
        </EducationCard>
        <EducationCard
          name="Programming Hero"
          course="Complete web development with Jhaankar Mahbub"
          year="2022"
        >
          <Phero fill="#eeeeef" width="75px" />
        </EducationCard>
      </div>
      <SeeMore href="/education">Learn More</SeeMore>
    </section>
  );
}
