import { motion } from "framer-motion";
import { styled } from "styled-components";

export const CardContainer = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 10rem;
  height: 10rem;
  border-radius: 100%;
  background-color: tomato;
`;
