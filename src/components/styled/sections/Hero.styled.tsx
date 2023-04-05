import styled from "styled-components";
import { Card } from "../Card.styled";

// the card to contain the whole hero section
export const HeroContainer = styled(Card)`
  margin: 0.5rem 0;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
`;

// the left text part of hero section
export const HeroTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  margin-left: 2rem;
  gap: .25rem;
`;
export const HeroName = styled.h1`
  font-size: 3rem;
  color: #121212;
  line-height: .9em;
`;
export const Name = styled.span`
  color: #ffeb3b;

`;
export const HeroTitle = styled.h2`
 font-size: 1.25rem;
 font-weight: 500;
 color
`;

// the right image section of hero
export const HeroImageContainer = styled.div`
  padding: 2rem 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const HeroImage = styled.img`
  height: auto;
  width: 50%;
  object-fit: contain;
`;
