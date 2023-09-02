import Hero from "./components/Pages/Home/Hero";
import TopBanner from "./components/Pages/Home/TopBanner";
import ProjectCard from "./components/Cards/ProjectCard";
import TechCard from "./components/Cards/TechCard";
import Qoute from "./components/Pages/Home/Qoute";
import Section from "./components/Section/Section";
import AboutMeHome from "./components/Pages/Home/AboutMeHome"; 

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
  const technology = {
    name: "React",
    logo: "https://upload.wikimedia.org/wikipedia/commons/4/47/React.svg",
    type: "Frontend Library",
    description:
      "React: The maestro of UI orchestration. It dances, animates, and keeps your user experience grooving! 💃🎵",
  };
 
  return (
    <main className="mx-32">
      <Hero />
      <AboutMeHome />
      <TopBanner />
      <Section title="Featured Projects">
        <div className="grid grid-cols-3 gap-4">
          <ProjectCard project={project} />
          <ProjectCard project={project} />
          <ProjectCard project={project} />
        </div>
      </Section>
      <Qoute />
      <Section title="Featured Tech">
        <div className="grid grid-cols-3 gap-4">
          <TechCard technology={technology} />
          <TechCard technology={technology} />
          <TechCard technology={technology} />
        </div>
      </Section>
    </main>
  );
};

export default HomePage;
