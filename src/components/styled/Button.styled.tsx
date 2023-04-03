import styled from "styled-components";
export const Button = styled.button`
  background: #ffeb3b;
  border: 2px solid #ffeb3b00;
  padding: 0.5rem 1rem;
  border-radius: 30px;
  font-weight: 500;
  color: #121212;
  transition: .2s all ease;
  &:hover {
    border: 2px solid #ffeb3b;
    background-color: #00000000;
    color: #ffeb3b;
    cursor: pointer;
  }
`;
