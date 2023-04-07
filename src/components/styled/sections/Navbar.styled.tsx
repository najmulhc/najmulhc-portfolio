import styled from "styled-components";
import { Card } from "../Card.styled";

export const NavContainer = styled.main`
  max-width: 1440px;
  display: flex;
  gap: 0.5rem;
  margin: 0 auto;
`;

export const LogoContainer = styled(Card)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 0 0 auto;
  padding: 0.5rem;
`;

export const MenuContainer = styled(Card)`
  flex: 1;
  @media only screen and (max-width: 767px) {
    display: none;
  }
`;

export const Menu = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  gap: 2rem;
`;

export const MenuItem = styled.a`
  display: flex;
  align-items: center;
  text-decoration: none;
  gap: 0.5rem;
  color: #ffeb3b;
  transition: all .2s ease;
  &:hover {
    color: #fff9c4;
  }
`;

export const MenuText = styled.span`
  @media only screen and (min-width: 768px) and (max-width: 991px) {
    display: none;
  }
`;

export const NavButtonContainer = styled(Card)`
  flex: 0 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 1rem;
  @media only screen and (max-width: 767px) {
   flex: 1;
  }
`;