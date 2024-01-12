import { styled } from "styled-components";

type ButtonProps = {
  selected?: boolean;
};
export const Button = styled.button<ButtonProps>`
  border: 2px solid ${({ selected }) => (selected ? " white" : "transparent")};
  outline: none;
`;
