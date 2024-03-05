
import { H1, P } from "../../components/Typography/Typography";
import Image from "next/image"; 
import Header from "../../components/Header/Header";
import PageTitle from "../../components/PageTitle/PageTitle";
import Button from "../../components/Buttons/button";
import { FaEye, FaEyeDropper, FaGithub } from "react-icons/fa6";
import Section from "../../components/Section/Section";
import screenshot from "./screenshot.png";
import Footer from "../../components/Footer/Footer"; 
import Project from "../../../models/projectModel";
import mongoose from "mongoose";
import dbconnect from "../../../config/dbconnect";


export const generateMetadata = async ({params }) => {
  await dbconnect();
  const project = await Project.findById(params.projectId);
  const { name, intro, banner } = project;
  return {
    title: name,
    description: intro,
    image: banner,
  };
}

const ProjectPage = async ({ params }) => {
 await dbconnect();
  const project = await Project.findById(params.projectId);
  
  const {
    name,
    intro,
    frontendRepo,
    backendRepo,
    liveSite,
    problemsFaced,
    screenshots,
    technicalDetails, 
    caseStudy, banner
  } = project;
  return (
    <>
      <Header />
    <main className="">
      <Image className="w-full h-auto" src={banner} alt="top banner" width={1920} height={1080} />
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
              width={320} height={240}
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
            {problemsFaced.map((problem) => (
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
