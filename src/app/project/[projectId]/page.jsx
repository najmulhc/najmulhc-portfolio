import { H1, P } from "../../components/Typography/Typography";
import Image from "next/image";
import banner from "./banner.png";
import Header from "../../components/Header/Header";
import PageTitle from "../../components/PageTitle/PageTitle";
import Button from "../../components/Buttons/button";
import { FaEye, FaEyeDropper, FaGithub } from "react-icons/fa6";
import Section from "../../components/Section/Section";
import screenshot from "./screenshot.png";
import Footer from "../../components/Footer/Footer";

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
    screenshots: [screenshot, screenshot, screenshot],
    technicalDetails:
      " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis similique nihil quo est eos. Corporis minima dolor soluta. Qui voluptas facilis deserunt eveniet temporibus ipsa, illo ut impedit quisquam fugit laboriosam doloremque nostrum natus amet et eum unde minima sunt quidem minus porro! Modi vero, sint distinctio odio impedit praesentium voluptatum? Autem veniam aperiam vitae quasi optio ratione illo voluptates ad, exercitationem saepe, culpa libero. Deleniti quo vitae velit consequatur voluptatibus, nesciunt exercitationem ex quam tempora maxime cum, ipsum quia! Sequi iste cupiditate laudantium doloremque repudiandae aperiam vel magni inventore labore quis eum sapiente, perferendis, culpa quae ipsam error ad?",
    caseStudy:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, repellat fugiat animi expedita quis at temporibus odit reiciendis quia blanditiis commodi similique impedit exercitationem aut! Dicta velit quas atque repellat dolore. Quibusdam expedita hic, nostrum culpa temporibus pariatur illo sunt, dolores fugiat voluptatibus maiores non laborum iusto ducimus delectus. Eius molestias nihil tempore natus illum aperiam, totam ex incidunt aspernatur! Tempora reprehenderit, unde ex at neque provident quas quam sunt similique totam atque, debitis iure reiciendis ullam laudantium praesentium suscipit minus vel enim? Cupiditate accusantium ipsa officiis dicta delectus earum est? Deleniti, nulla nesciunt deserunt blanditiis maxime suscipit atque ipsum.",
  };
  const {
    name,
    intro,
    frontendRepo,
    backendRepo,
    liveSite,
    problems,
    screenshots,
    technicalDetails,
    caseStudy,
  } = project;
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
        <Section title="Screenshots">
          <main className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 flex-wrap items-center">
            {screenshots.map((ss) => (
              <Image
                className="w-full h-auto"
                src={ss}
                alt="screenshot"
                key={ss}
              />
            ))}
          </main>
        </Section>
        <Section title="Case study">
          <P>{caseStudy}</P>
        </Section>
        <Section title="Technical Details">
          <P>{technicalDetails}</P>
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
      <Footer />
    </>
  );
};

export default ProjectPage;
