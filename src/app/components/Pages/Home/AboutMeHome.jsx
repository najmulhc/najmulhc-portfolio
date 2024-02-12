import Image from "next/image";
import { P } from "../../Typography/Typography";
import Title from "../../Titles/Title";

const AboutMeHome = () => {
  return (
    <section className="section grid grid-cols-1 gap-8 md:grid-cols-2 items-center ">
      <div className="flex  justify-start items-center">
        <Image
          width={340}
          src="https://smartslider3.com/wp-content/uploads/slider/cache/ebab2373b76342e707ae1a386570b3b1/portfolio.webp"
          height={340}
          alt="image"
        />
      </div>
      <div className="">
        <Title text="About me" />
        <div className="flex flex-col justify-center gap-2">
          <P>
            Hi, I'm Najmul, a web developer from Dhaka, Bangladesh! Driven by a
            passion for solving real-world problems with code, I've been writing
            code since 2017 and diving into JavaScript since 2021. I'm currently
            a 3<sup>rd</sup> year <b>BBA</b> student at the{" "}
            <b>University of Dhaka</b>, balancing my studies with learning the
            latest web technologies like <b>React</b> and <b>Node.js</b>.
          </P>

          <P>
            What excites me most is crafting creative solutions for everyday
            challenges. My recent project, <b>Spendser</b> (A personal finance
            management tool), allowed me to take better financial decisions. I'm
            always eager to learn and collaborate, so feel free to connect with
            me if you share my passion for building a better future with code!
          </P>
        </div>
      </div>
    </section>
  );
};

export default AboutMeHome;
