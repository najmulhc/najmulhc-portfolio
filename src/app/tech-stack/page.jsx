import SingleType from "../components/Pages/TechStack/SingleType";
import TechDetailCard from "../components/Cards/TechDetailCard";
import PageTitle from "../components/PageTitle/PageTitle";
import getTechnologies from "../services/getTechnologies";

const TechStackPage = async () => {
  
  const {technologies} = await getTechnologies();
 
  
  return (
    <main className="min-h-screen px-32">
      <PageTitle
        pageName="Tech Stack"
        description="Discover the foundation of my creations as we journey through the world of technology together. Unveil the tools and frameworks shaping my digital endeavors, reflecting a blend of innovation, expertise, and dedication."
      />
      <SingleType type="Frontend Frameworks">
        <div className="grid grid-cols-2 gap-4">
           
            <TechDetailCard technology={technologies[1]} />;
           {
            technologies.map(item => <TechDetailCard technology={item} key={item._id}/>)
           }
        </div>
      </SingleType>
    </main>
  );
};

export default TechStackPage;
