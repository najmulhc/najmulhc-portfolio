import styled from "styled-components";
import { Card } from "../Card.styled";

// the card to contain the whole hero section
export const HeroContainer = styled(Card)`
  margin: 0.5rem 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 2rem;
  @media only screen and (max-width: 767px) {
    flex-direction: column-reverse;
  }
`;

// the left text part of hero section
export const HeroTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  margin-left: 2rem;
  gap: 0.25rem;
  width: 50%;
  @media only screen and (max-width: 767px) {
    width: 90%;
    align-items: center;
    margin-left: 0;
    margin-bottom: 2rem;n
  }
`;
export const HeroName = styled.h1`
  font-size: 3rem;
  color: #121212;
  line-height: 0.9em;
  @media only screen and (max-width: 767px) {
    text-align: center;
    font-size: 2rem;
  }
`;
export const Name = styled.span`
  color: #ffeb3b;
`;
export const HeroTitle = styled.h2`
  font-size: 1.25rem;
  font-weight: 500;
  @media only screen and (max-width: 767px) {
    text-align: center;
  }
`;

// the right image section of hero
export const HeroImageContainer = styled.div`
  padding: 2rem 0;
  width: 50%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  @media only screen and (max-width: 767px) {
    width: 100%;
  }
`;
export const HeroImage = styled.img`
  height: auto;
  width: 70%;
  object-fit: contain;
`;
