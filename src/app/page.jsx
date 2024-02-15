import Hero from "./components/Pages/Home/Hero";
import TopBanner from "./components/Pages/Home/TopBanner";
import ProjectCard from "./components/Cards/ProjectCard";
import TechCard from "./components/Cards/TechCard";
import Qoute from "./components/Pages/Home/Qoute";
import Section from "./components/Section/Section";
import AboutMeHome from "./components/Pages/Home/AboutMeHome";
import getTechnologies from "./services/getTechnologies";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Project from "../models/projectModel"

const HomePage = async () => {
  const project = {
    name: "MireHouse",
    time: "a long time ago",
    type: "Full Stack Project",
    link: "https://www.google.com",
    image: "https://placehold.co/1600x900.png",
    description:
      "A captivating journey through code, crafting a dynamic Full Stack Project that echoes 'a long time ago'.",
  };
   
  const technologies = await getTechnologies();
  const projects = await Project.find();
  console.log(projects[0])

  return (
    <>
      <Header />
      <main>
        <Hero />
        <AboutMeHome />
        <TopBanner />
        <Section title="Featured Projects">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {
              projects.map((project) => (
                <ProjectCard project={project} key={project._id} />
              ))
            }
          </div>
        </Section>
        <Qoute />
        <Section title="Featured Tech">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {technologies
              .filter((item) => item.isFeatured === true)
              .map((technology) => (
                <TechCard technology={technology} key={technology._id} />
              ))}
          </div>
        </Section>
      </main>
      <Footer/>
    </>
  );
};

export default HomePage;
