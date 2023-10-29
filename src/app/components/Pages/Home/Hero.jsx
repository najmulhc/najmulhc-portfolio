'use client'
import { H1, H2, P } from "../../Typography/Typography";
import Button from "../../Buttons/button";

import { TypeAnimation } from "react-type-animation";

const Hero = () => {
  return (
    <section className="w-full min-h-screen flex justify-center bg-red-600 items-center flex-col px-[128px] gap-4">
      <div className="flex justify-center items-start w-full h-full flex-col">
        <H1>Hi, I am Najmul</H1>
        <H2>
          I am a{" "}
          <TypeAnimation
            sequence={[
              "Frontend Developer", // Types 'One'
              1500, // Waits 1s
              "Backend Developer", // Deletes 'One' and types 'Two'
              1500, // Waits 2s
              "FullStack Developer", // Types 'Three' without deleting 'Two',
              1500, "Programmer",
              () => {
                console.log("Sequence completed");
              },
            ]}
            wrapper="span"
            cursor={true}
            repeat={Infinity}
          
          />
        </H2>
        <Button>Download Resume</Button>
      </div>
      <div></div>
    </section>
  );
};

export default Hero;
