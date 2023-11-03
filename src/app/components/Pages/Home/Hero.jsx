'use client'
import { H1, H2, H3, P } from "../../Typography/Typography";
import Button from "../../Buttons/button";

import { TypeAnimation } from "react-type-animation";
import { FaFacebook } from "react-icons/fa6";
import { useRouter } from "next/navigation";

const Hero = () => {
  const router = useRouter()
  return (
    <section className="w-full min-h-screen flex justify-center items-center flex-col px-[128px] gap-4">
      <div className="flex justify-center gap-6 items-start w-full h-full flex-col">
        <H1>Hi, I am Najmul</H1>
        <H3>
          I am a{" "}
          <TypeAnimation
            sequence={[
              "Frontend Developer", // Types 'One'
              2500, // Waits 1s
              "Backend Developer", // Deletes 'One' and types 'Two'
              2500, // Waits 2s
              "FullStack Developer", // Types 'Three' without deleting 'Two',
              3500,
              "Programmer",
              () => {
                console.log("Sequence completed");
              },
            ]}
            wrapper="span"
            cursor={true}
            repeat={Infinity}
          
          />
        </H3>
        <Button>Download Resume</Button>
      </div>
      <div>
        <Button onclick={() => {
          router.push("https://www.facebook.com")
        }}> <FaFacebook /></Button>
      </div>
    </section>
  );
};

export default Hero;
