import { Button } from "../styled/Button.styled";
import {
  HeroContainer,
  HeroImage,
  HeroImageContainer,
  HeroName,
  HeroTextContainer,
  HeroTitle,
  Name,
} from "../styled/sections/Hero.styled";
import hero from "/hero.png";

const Hero = () => {
  return (
    <HeroContainer>
      <HeroTextContainer>
        <HeroName>
          Hi, I am <Name>Najmul Huda</Name>
        </HeroName>
        <HeroTitle style={{ fontWeight: 400 }}>
          I am a{" "}
          <span style={{ fontWeight: 500, color: "#eab308" }}>
            Meta certified professional frontend web developer.
          </span>{" "}
        </HeroTitle>
        <br />
        <Button>Download Resume</Button>
      </HeroTextContainer>
      <HeroImageContainer>
        <HeroImage src={hero} alt="Hero Image" />
      </HeroImageContainer>
    </HeroContainer>
  );
};

export default Hero;
