import styled from "styled-components";
import { Card } from "../Card.styled";

export const AboutContainer = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.5rem;
  margin-bottom: .5rem;
`;
export const AboutLeftContainer = styled.div``;
export const AboutTextContainer = styled(Card)`
  padding: 1rem;
`;
export const AboutImageContainer = styled(Card)`
  max-width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem 0;
`;
export const AboutImage = styled.img`
  object-fit: contain;
  width: 85%;
`;
export const AboutText = styled.p``;

export const SocialContainer = styled.div`
  margin-top: .5rem;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 0.5rem;
  height: auto;
`;

export const SocialCard = styled(Card)`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
`;

export const SocialLink = styled.a`
  font-size: 4rem;
  text-decoration: none;
  color: black;
`;
