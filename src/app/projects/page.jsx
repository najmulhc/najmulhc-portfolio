import PageTitle from "../components/PageTitle/PageTitle";
import Section from "../components/Section/Section";
import ProjectPageCard from "../components/Pages/Projects/ProjectPageCard";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Project from '../../models/projectModel'

const page = async () => {
  const projects = await Project.find({});
  return (
    <>
      <Header />
      <main className=" min-h-screen">
        <PageTitle
          pageName={`Projects ${projects.length}`}
          description="Embark on a tour of my digital creations. Explore the projects I've crafted with passion and expertise, each representing a unique blend of creativity, innovation, and problem-solving. From concept to completion, these endeavors showcase my dedication to building meaningful and impactful digital solutions."
        />
        <Section title="Full Stack Projects">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <ProjectPageCard />
            <ProjectPageCard />
            <ProjectPageCard />
          </div>
        </Section>
      </main>
      <Footer />
    </>
  );
};

export default page;
