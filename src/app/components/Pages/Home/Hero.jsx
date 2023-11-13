"use client";
import { H1, H2, H3, P } from "../../Typography/Typography";
import Button from "../../Buttons/button";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { FaFacebook } from "react-icons/fa6";
import { useRouter } from "next/navigation";
import heroImage from "../../../../assets/hero-image.png";

const Hero = () => {
  const router = useRouter();
  return (
    <section className="w-full md:min-h-screen flex flex-col-reverse md:flex-row md:justify-between md:items-center  md:px-[128px] gap-4">
      <div className="flex justify-center gap-6 items-center md:items-start w-full h-full flex-col">
        <H1 classname="md:text-left text-center">Hi, I am Najmul</H1>
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
      <div className="md:w-[50%] flex justify-center items-center ">
        <Image className="w-[80%]" src={heroImage} alt="Hero Image " />
      </div>
    </section>
  );
};

export default Hero;
