import { motion } from "framer-motion";
import { styled } from "styled-components";

type GameFinalResultContainerProps = {
  isWinner?: boolean;
};

export const GameFinalResultContainer = styled(
  motion.div
)<GameFinalResultContainerProps>`
  position: absolute;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  overflow: hidden;
  pointer-events: none;
  height: 12rem;
  width: 20rem;
  border: 2px solid;
  border-radius: 1rem;
  pointer-events: all;

  ${({ isWinner }) =>
    isWinner
      ? `
        border-color: var(--orange-200);
        background-color: var(--orange-100);
        color: var(--orange-200);
        `
      : `
        border-color: var(--gray-900);
        background-color: var(--gray-300);
        color: var(--gray-900);
        `}
`;
