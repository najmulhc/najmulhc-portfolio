import styled from "styled-components";
import { Card } from "../Card.styled";

export const AboutContainer = styled.section`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0.5rem;
  margin-bottom: 0.5rem;
  @media only screen and (max-width: 768px) {
    display: flex;
    flex-direction: column-reverse;
  }
`;
export const AboutLeftContainer = styled.div`
  width: 100%;
  height: 100%; 
  display: flex;
  flex-direction: column;
  gap: .5rem;
`;
export const AboutRightContainer = styled.div`
  width: 100%;
  padding: 0;
`;

export const AboutTextContainer = styled(Card)`
 padding: .5rem;
`;
export const AboutImageContainer = styled(Card)`
  width: 100%;
  padding: 0.5rem;
`;

export const AboutImage = styled.img`
  width: 100%;
  object-fit: contain;
  border-radius: 8px;
`;
export const AboutText = styled.p``;
export const SocialContainer = styled.div`
  width: 100%;
  display: grid;
  height: 100%;
  grid-template-columns: repeat(2, 1fr);
  gap: 0.5rem;
  @media only screen and (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const SocialCard = styled(Card)`
  display: flex;
  justify-content: center;
  align-items: center;
  @media only screen and (max-width: 768px) {
    min-height: 4rem;
  }
`;

export const SocialLink = styled.a`
  text-decoration: none;
  font-size: 3rem;
  color: #121212;
  margin: 0;
  padding: 0;
`;
