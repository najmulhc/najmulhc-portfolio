import styled from "styled-components";
import { Card } from "../Card.styled";

export const FooterContainer = styled(Card)`
    width: 100%;
    padding: .5rem 2rem;
`;

export const FooterText = styled.h2`
  font-weight: 400;
  font-size: 1rem;
  text-align: center;
  color: #121212;
`;

export const FooterName = styled.a`
  color: #ffeb3b;
  cursor: pointer;
`;