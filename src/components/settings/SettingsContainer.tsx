import { motion } from "framer-motion";
import { styled } from "styled-components";

export const SettingsContainer = styled(motion.div)`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: stretch;
  padding: 2rem;
  border-radius: 1rem;
  gap: 1em;
  background-color: white;
  text-align: start;
`;
