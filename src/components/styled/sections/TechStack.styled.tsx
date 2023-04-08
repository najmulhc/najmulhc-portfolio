import styled from "styled-components";
import { Card } from "../Card.styled";

export const TechStackContainer = styled.section`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  width: 100%;
  gap: 0.5rem;
  margin-bottom: 0.5rem;
  @media only screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;
export const TechContainer = styled(Card)`
  padding: 0.25rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  padding-bottom: 1rem;
`;
export const TechLogo = styled.img`
  height: 100px;
  margin: 2rem 0;
`;
export const TechTitle = styled.h3`
  font-weight: 500;
  font-size: 1.25rem;
  margin-bottom: 0.5rem;
  text-align: center;
`;
export const TechDescription = styled.p`
  text-align: center;
  margin: 0 0.25rem;
`;


