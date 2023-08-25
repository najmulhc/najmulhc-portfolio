import Hero from "./components/Pages/Home/Hero";
import TopBanner from "./components/Pages/Home/TopBanner";
import Title from "./components/Titles/Title";
import ProjectCard from "./components/Cards/ProjectCard";
import TechCard from "./components/Cards/TechCard";
const HomePage = () => {
  return (
    <main className="">
      <Hero />
      <TopBanner />
      <Title text="Featured Projects" />
      <div className="grid grid-cols-3 mx-[128px]">
        <ProjectCard
          name="MireHouse"
          time="a long time ago"
          type="Full Stack Project"
          link="https://www.google.com"
          image="https://placehold.co/1600x900.png"
          description="lorem we are wrokf aidfna dfao fnac vkaedra fakfna oierbhna lkcfvnalkscvnaoidfhbaoidhfba lcknvfasodklfb naqoweir "
        />
      </div>
      <Title text="Featured Tech" />
      <div className="grid grid-cols-3 mx-[128px]">
        <TechCard
          name="React"
          logo="https://upload.wikimedia.org/wikipedia/commons/4/47/React.svg"
          type="Frontend Library"
          description="React: The maestro of UI orchestration. It dances, animates, and keeps your user experience grooving! 💃🎵"
        />
      </div>
    </main>
  );
};

export default HomePage;
