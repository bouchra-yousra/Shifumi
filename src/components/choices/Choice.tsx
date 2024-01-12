import { motion } from "framer-motion";
import { styled } from "styled-components";

type ChoiceProps = {
  selected?: boolean;
};
export const Choice = styled(motion.button)<ChoiceProps>`
  border: 2px solid ${({ selected }) => (selected ? " white" : "transparent")};
  outline: none;
  border-radius: 100%;
  width: 6rem;
  height: 6rem;
  background-color: var(--gray-800);
`;
