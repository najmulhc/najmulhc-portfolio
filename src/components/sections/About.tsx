import {
  AboutContainer,
  AboutImage,
  AboutImageContainer,
  AboutLeftContainer,
  AboutRightContainer,
  AboutText,
  AboutTextContainer,
  SocialCard,
  SocialContainer,
  SocialLink,
} from "../styled/sections/About.styled";
import { SectionHeader, SectionTitle } from "../styled/sections/Section.styled";
import { FaFacebook, FaGithub, FaLinkedin, FaStackOverflow } from "react-icons/fa";

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
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Excepturi quas inventore architecto qui asperiores dolores rerum
              illo, iusto doloremque facere voluptates possimus minima magnam
              obcaecati illum aliquid enim eos a praesentium labore deleniti
              laudantium aperiam. Laboriosam, debitis beatae? Perferendis beatae
              excepturi nulla expedita exercitationem, odio voluptatem qui
              recusandae delectus ullam, iure facilis nobis placeat quos
              pariatur nihil quasi ad autem, commodi odit eos veritatis corrupti
              maiores? Saepe est eligendi tenetur fugiat. Error quam et dolorem
              quo, incidunt quidem maxime ab nihil tempora quae! Ullam
              repudiandae ratione illum nisi debitis iure? Ut, et id error eum
              quaerat cum rerum voluptates rem quod repudiandae, impedit quam
              maxime sed vitae voluptatibus molestiae asperiores atque aut
              numquam fugiat ipsum? Dolore accusantium ipsum aspernatur quia.
            </AboutText>
          </AboutTextContainer>
          <SocialContainer>
            <SocialCard>
              <SocialLink href="https://github.com/najmulhc" target="_blank">
                <FaGithub color="#171515" />
              </SocialLink>
            </SocialCard>
            <SocialCard>
              <SocialLink
                href="https://linkedin.com/in/najmulhc"
                target="_blank"
              >
                <FaLinkedin color="#0A66C2" />
              </SocialLink>
            </SocialCard>
            <SocialCard>
              <SocialLink href="https://facebook.com/najmulhudachow" target="_blank">
                <FaFacebook color="#1672e6" />
              </SocialLink>
            </SocialCard>
            <SocialCard>
              <SocialLink href="/">
                <FaStackOverflow color="#f47f24" />
              </SocialLink>
            </SocialCard>
          </SocialContainer>
        </AboutLeftContainer>{" "}
        <AboutRightContainer>
          <AboutImageContainer>
            <AboutImage
              src="https://previews.123rf.com/images/vadymvdrobot/vadymvdrobot2008/vadymvdrobot200800559/152781584-image-of-smiling-unshaven-programmer-man-showing-thumb-up-while-working-with-computers-in-office.jpg"
              alt="My Face working"
            />
          </AboutImageContainer>
        </AboutRightContainer>
      </AboutContainer>
    </>
  );
};

export default About;
