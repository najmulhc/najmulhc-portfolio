import SingleType from "../components/Pages/TechStack/SingleType";
import TechDetailCard from "../components/Cards/TechDetailCard";
import PageTitle from '../components/PageTitle/PageTitle'

const TechStackPage = () => {
  const technology = {
    name: "React",
    logo: "https://upload.wikimedia.org/wikipedia/commons/4/47/React.svg",
    type: "Frontend Library",
    description:
      "React: The maestro of UI orchestration. It dances, animates, and keeps your user experience grooving! 💃🎵",
    time: "1 year",
  };
  return (
    <main className="min-h-screen px-[128px]">
      <PageTitle
        pageName="Tech Stack"
        description="Discover the foundation of my creations as we journey through the world of technology together. Unveil the tools and frameworks shaping my digital endeavors, reflecting a blend of innovation, expertise, and dedication."
      />
      <SingleType type="Frontend Frameworks">
        <div className="grid grid-cols-2 gap-4">
          <TechDetailCard technology={technology} />
          <TechDetailCard technology={technology} />
        </div>
      </SingleType>
    </main>
  );
};

export default TechStackPage;
