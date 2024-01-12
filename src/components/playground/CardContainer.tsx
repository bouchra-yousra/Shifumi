import { motion } from "framer-motion";
import { styled } from "styled-components";

type CardContainerProps = {
  isPlayer?: boolean;
};

export const CardContainer = styled(motion.div)<CardContainerProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 10rem;
  height: 10rem;
  border-radius: 100%;
  border: 4px solid
    ${({ isPlayer }) =>
      isPlayer ? "var(--primary-dark)" : "var(--acces-dark)"};
`;
