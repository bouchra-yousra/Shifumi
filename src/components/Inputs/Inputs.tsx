import { styled } from "styled-components";

export const Input = styled.input`
  padding: 1rem 1rem;
  border: 2px transparent;
  border-radius: 12px;
  outline: none;
  background-color: var(--bg2);
  color: var(--gray-900);
  &:hover {
    border: 2px tomato;
  }
`;
