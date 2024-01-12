import { styled } from "styled-components";

type ChoiceProps = {
  selected?: boolean;
};
export const Choice = styled.button<ChoiceProps>`
  border: 2px solid ${({ selected }) => (selected ? " white" : "transparent")};
  outline: none;
`;
