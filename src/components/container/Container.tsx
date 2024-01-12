import { motion } from "framer-motion";
import { styled } from "styled-components";

export const Container = styled(motion.div)`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 100vw;
  height: 100vh;
  gap: 1rem;
  padding: 2rem;
  box-sizing: border-box;
  overflow: hidden;
  background-color: var(--bg2);
`;
