import { styled } from "styled-components";

type ButtonProps = {
  selected?: boolean;
};
export const Button = styled.button<ButtonProps>`
  border: ${({ selected }) => (selected ? "2px solid red" : "0px transparent")};
  outline: none;
`;
