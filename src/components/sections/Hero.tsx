import { Button } from "../styled/Button.styled";
import {
  HeroContainer,
  HeroImage,
  HeroImageContainer,
  HeroName,
  HeroTextContainer,
  HeroTitle,
} from "../styled/sections/Hero.styled";
import hero from "/hero.png"

const Hero: React.FC = () => {
  return (
    <HeroContainer>
      <HeroTextContainer>
        <HeroName>Hi, I am Najmul!</HeroName>
        <HeroTitle>
        I am a Meta certified professional frontend web developer
        </HeroTitle>
        <Button>Download Resume</Button>
      </HeroTextContainer>
      <HeroImageContainer>
        <HeroImage src={hero}/>
      </HeroImageContainer>
    </HeroContainer>
  );
};

export default Hero;
