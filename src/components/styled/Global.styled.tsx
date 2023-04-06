import styled from "styled-components";

export const Global = styled.main`
  background-color: #323330;
  position: relative;
  max-width: 100%;
  top: 0;
  left: 0;
  z-index: 1;
`;

export const Logo = styled.img` // for the logo in the navbar
  height: 2rem;
`;

// for the background logo display
export const Background = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  background-color: #323330;
`;

// the container for whole content.
export const Content = styled.div`
  min-height: 100vh;
  width: 100%;
 
  position: absolute;
  top: 0;
  left: 0; 
  padding: 1rem;
`;

// the background logo
export const BackgroundLogo = styled.img`
  height: 25vw;
  width: auto;
  @media only screen and (max-width: 767px) {
    height: 50vw;
  }
`;
