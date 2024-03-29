
import TechDetailCard from "../components/Cards/TechDetailCard";
import PageTitle from "../components/PageTitle/PageTitle";
import getTechnologies from "../services/getTechnologies";
import Section from "../components/Section/Section";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

export const metadata = {
  title: "Tech Stack",
  description:
    "Discover the foundation of my creations as we journey through the world of technology together. Unveil the tools and frameworks shaping my digital endeavors, reflecting a blend of innovation, expertise, and dedication.",
 
};


const TechStackPage = async () => {
  const technologies = await getTechnologies();
  const titles = [
    { singular: "Frontend Library", plural: "Frontend Libraries" },
    { singular: "Backend Library", plural: "Backend Libraries" },
    { singular: "Web Language", plural: "Web Languages" },
    { singular: "Programming Language", plural: "Programming Languages" },
    { singular: "CSS Framework", plural: "CSS Frameworks" },
    { singular: "Full Stack Framework", plural: "Full Stack Frameworks" },
    { singular: "Developer Tool", plural: "Developer Tools" },
    { singular: "Design Tool", plural: "Design Tools" },
  ];

  return (
    <>
      <Header />
      <main className="min-h-screen">
        <PageTitle
          pageName="Tech Stack"
          description="Discover the foundation of my creations as we journey through the world of technology together. Unveil the tools and frameworks shaping my digital endeavors, reflecting a blend of innovation, expertise, and dedication."
        />
        {titles.map((title) => (
          <Section key={title.singular} title={title.plural}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {technologies
                .filter((item) => item.type === title.singular)
                .map((tech) => (
                  <TechDetailCard technology={tech} key={tech._id} />
                ))}
            </div>
          </Section>
        ))}
      </main>
      <Footer />
    </>
  );
};

export default TechStackPage;
