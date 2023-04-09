import {
  AboutContainer,
  AboutImage,
  AboutImageContainer,
  AboutLeftContainer,
  AboutText,
  AboutTextContainer,
  SocialCard,
  SocialContainer,
  SocialLink,
} from "../styled/sections/About.styled";
import { SectionHeader, SectionTitle } from "../styled/sections/Section.styled";
import { FaFacebook } from "react-icons/fa";

const About = () => {
  return (
    <>
      <SectionHeader>
        <SectionTitle id="about"> About Me</SectionTitle>
      </SectionHeader>
      <AboutContainer>
        <AboutLeftContainer>
          <AboutTextContainer>
            <AboutText>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus
              quasi quae repudiandae laboriosam rerum! Dicta inventore porro
              tempore sint quidem exercitationem pariatur at magnam, deleniti,
              modi error iusto quia illo vero a possimus amet cum nemo odio
              nihil eaque earum atque nesciunt alias! Totam nulla illo ea maxime
              tenetur officiis, eligendi ullam aspernatur at! Rerum aliquam
              provident assumenda voluptatibus hic quo officia ullam velit ipsa
              repudiandae cum beatae libero suscipit quod praesentium pariatur
              minima, perspiciatis nam corrupti! Atque possimus quaerat
              laudantium, quia magni ea porro. Dolorem et veritatis eos,
              deserunt, maiores at quas nobis dolores suscipit ex assumenda qui
              ipsum.
            </AboutText>
          </AboutTextContainer>
          <SocialContainer>
            <SocialCard>
              <SocialLink href="/">
                <FaFacebook />
              </SocialLink>
            </SocialCard>
            <SocialCard>
              <SocialLink href="/">
                <FaFacebook />
              </SocialLink>
            </SocialCard>
            <SocialCard>
              <SocialLink href="/">
                <FaFacebook />
              </SocialLink>
            </SocialCard>
            <SocialCard>
              <SocialLink href="/">
                <FaFacebook />
              </SocialLink>
            </SocialCard>
          </SocialContainer>
        </AboutLeftContainer>
        <AboutImageContainer>
          <AboutImage
            src="https://previews.123rf.com/images/vadymvdrobot/vadymvdrobot2008/vadymvdrobot200800559/152781584-image-of-smiling-unshaven-programmer-man-showing-thumb-up-while-working-with-computers-in-office.jpg"
            alt="My Face working"
          />
        </AboutImageContainer>
      </AboutContainer>
    
    </>
  );
};

export default About;
