import { SectionHeader, SectionTitle } from "../styled/sections/Section.styled";
import {
  Tech,
  TechDescription,
  TechLogo,
  TechStackContainer,
  TechTitle,
} from "../styled/sections/TechStack.styled";
const TechStack = () => {
  return (
    <>
      <SectionHeader>
        <SectionTitle id="tech-stack">My Tech Stack</SectionTitle>
      </SectionHeader>
      <TechStackContainer>
        <Tech>
          <TechLogo src="https://upload.wikimedia.org/wikipedia/commons/9/99/Unofficial_JavaScript_logo_2.svg" />
          <TechTitle>JavaScript</TechTitle>
          <TechDescription>
            The language I think, the language I write code. I can make any
            business requirement into reality using it.
          </TechDescription>
        </Tech>
        <Tech>
          <TechLogo src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" />
          <TechTitle>React</TechTitle>
          <TechDescription>
            The go to canvas of my imagination. I can convert any UI
            design/imagination into real frontend using it.
          </TechDescription>
        </Tech>
        <Tech>
          <TechLogo src="https://www.vectorlogo.zone/logos/expressjs/expressjs-icon.svg" />
          <TechTitle>Express.js</TechTitle>
          <TechDescription>
            The brain that can deliver any info I need to display in the
            frontend. I can create any basic backend server using it.
          </TechDescription>
        </Tech>
        <Tech>
          <TechLogo src="https://www.svgrepo.com/show/303557/redux-logo.svg" />
          <TechTitle>Redux</TechTitle>
          <TechDescription>
            My favorite state manager that can store any data in the global
            state. I can perform any task related to state management with it.
          </TechDescription>
        </Tech>
        <Tech>
          <TechLogo src="https://www.svgrepo.com/show/354113/nextjs-icon.svg" />
          <TechTitle>Next.js</TechTitle>
          <TechDescription>
            The preferred meta-framework of my projects. I can create any full stack application using this that will be fast and optimized for production.
          </TechDescription>
        </Tech>
      </TechStackContainer>
    </>
  );
};

export default TechStack;
