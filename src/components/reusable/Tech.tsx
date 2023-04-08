import {
  TechContainer,
  TechDescription,
  TechLogo,
  TechTitle,
} from "../styled/sections/TechStack.styled";

export interface TechProps {
  logoSrc: string;
  title: string;
  description: string;
}
const Tech: React.FC<TechProps> = ({ logoSrc, title, description }) => {
  return (
    <TechContainer>
      <TechLogo src={logoSrc} alt={title} />
      <TechTitle>{title}</TechTitle>
      <TechDescription>{description}</TechDescription>
    </TechContainer>
  );
};

export default Tech;
