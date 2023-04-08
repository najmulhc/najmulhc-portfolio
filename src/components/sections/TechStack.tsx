import Tech, { TechProps } from "../reusable/Tech";
import { SectionHeader, SectionTitle } from "../styled/sections/Section.styled";
import { TechStackContainer } from "../styled/sections/TechStack.styled";
import { useState, useEffect } from "react";
const TechStack = () => {
  const [techList, setTechList] = useState<TechProps[]>([]);

  const fetchTech = async () => {
    const response = await fetch("/techStack.json");
    const data = await response.json();
    setTechList(data);
  };

  useEffect(() => {
    fetchTech();
  }, []);
  return (
    <>
      <SectionHeader>
        <SectionTitle id="tech-stack">My Tech Stack</SectionTitle>
      </SectionHeader>
      <TechStackContainer>
        {techList.map((tech) => (
          <Tech
            description={tech.description}
            logoSrc={tech.logoSrc}
            title={tech.title}
            key={tech.title}
          />
        ))}
      </TechStackContainer>
    </>
  );
};

export default TechStack;
