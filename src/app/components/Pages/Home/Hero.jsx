import { H1, P } from "../../Typography/Typography";
import Button from "../../Buttons/button";
import image from "../../../../assets/hero-image.png";
import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="w-full min-h-screen flex justify-center items-center flex-col px-[128px] gap-4">
      <H1 classname="text-4xl "> <span className="italic text-green-600">najmulhc</span> welcomes you!</H1>
      <P classname="text-center">
         Here I need to write  about my text
      </P>
      <Link href="https://www.google.com" target="_blank">
        <Button>Download Resume</Button>
      </Link>
    </section>
  );
};

export default Hero;
