import Hero from "./components/Pages/Home/Hero";
import TopBanner from "./components/Pages/Home/TopBanner";
import Title from "./components/Titles/Title";
import ProjectCard from "./components/Cards/ProjectCard";

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
          image="https://placehold.co/600x400.png"
          description="lorem we are wrokf aidfna dfao fnac vkaedra fakfna oierbhna lkcfvnalkscvnaoidfhbaoidhfba lcknvfasodklfb naqoweir "
        />
      </div>
    </main>
  );
};

export default HomePage;
