import { H1, P } from "../../components/Typography/Typography";
import Image from "next/image";
import banner from "./banner.png";
import Header from "../../components/Header/Header";
import PageTitle from "../../components/PageTitle/PageTitle";
import Button from "../../components/Buttons/button";
import { FaEye, FaEyeDropper, FaGithub } from "react-icons/fa6";
import Title from "../../components/Titles/Title";
import Section from "../../components/Section/Section";

const ProjectPage = () => {
  const project = {
    name: "Project",
    intro:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis illo assumenda minus provident sit, autem fugiat cum praesentium similique neque doloremque libero laudantium qui aliquam nulla soluta! Fugiat tempore eos, quasi ill",
    frontendRepo: "#",
    backendRepo: "#",
    liveSite: "#",
    problems: [
      "I needed to implement global state management in the first place. I tried Redux, but in order to use it, I needed to use client component feature. I was bit scared about the optimization in the pages but as I have explored Next.js more I saw it was not that issue for my case.",
    ],
  };
  const { name, intro, frontendRepo, backendRepo, liveSite, problems } =
    project;
  return (
    <>
      <Header />
      <main className="">
        <Image className="w-full h-auto" src={banner} alt="top banner" />
        <PageTitle pageName={name} description={intro} />
        <section
          className="
         mx-8 md:mx-32 flex flex-col md:flex-row justify-between items-center gap-8 my-8"
        >
          <Button classname="w-full" link={frontendRepo}>
            <span className="flex items-center justify-center gap-2 text-xl">
              {" "}
              <FaGithub /> Frontend Repo
            </span>
          </Button>
          <Button classname="w-full" link={backendRepo}>
            <span className="flex items-center justify-center gap-2 text-xl">
              {" "}
              <FaGithub /> Backend Repo
            </span>
          </Button>
          <Button classname="w-full" link={liveSite}>
            <span className="flex items-center justify-center gap-2 text-xl">
              {" "}
              <FaEye /> Live Site
            </span>
          </Button>
        </section>

        <Section title="Case study">
          <P>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero
            iste inventore maiores eius aut fuga consequuntur quod, accusantium
            quisquam molestiae? At accusamus adipisci est labore assumenda nemo
            illum. Animi placeat laudantium sapiente iusto id a ipsam ratione
            dolores temporibus molestias dolorum incidunt laborum, nobis numquam
            quibusdam. Porro quaerat soluta natus dolor voluptates? Eius
            repellat dolor atque est suscipit blanditiis omnis reiciendis magnam
            esse reprehenderit ut ea placeat at quo laboriosam assumenda
            recusandae, dicta enim dolorem officiis! Tempore ipsam blanditiis
            tenetur distinctio animi aperiam neque incidunt, quam velit
            accusantium, maiores repellendus quia debitis nam. Laborum magni
            dolorem vero facere, officia fugit.
          </P>
        </Section>
        <Section title="Technical Details">
          <P>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod autem
            dolorem quas laborum dignissimos fuga nemo perspiciatis officiis,
            molestiae nam necessitatibus at eveniet totam hic doloribus numquam
            quae ipsum asperiores recusandae! In assumenda eligendi neque saepe
            ipsam praesentium recusandae omnis nostrum dolore, est amet atque
            aut ab numquam illum accusamus, itaque reiciendis! Saepe rem fugiat,
            facilis deleniti cumque ea minus porro recusandae explicabo eos
            velit amet, quaerat voluptas commodi animi!
          </P>
        </Section>
        <Section title="Problems Faced">
          <article className="p">
            While I was developing <b>{name}</b>, I have faced issues like{" "}
            <ul className="mx-10  list-disc  ">
              {problems.map((problem) => (
                <li key={problem}>
                  {" "}
                  <P>{problem}</P>
                </li>
              ))}
            </ul>
          </article>
        </Section>
      </main>
    </>
  );
};

export default ProjectPage;
