import {
  FooterContainer,
  FooterName,
  FooterText,
} from "../styled/sections/Footer.styled";

const Footer = () => {
  return (
    <>
      <FooterContainer>
        <FooterText>
          © Najmul Huda Chowdhury Chayan - Designed and developed by{" "}
          <FooterName>@najmulhc</FooterName>
        </FooterText>
      </FooterContainer>
    </>
  );
};

export default Footer;
