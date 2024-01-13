import { PropsWithChildren } from "react";
import { motion } from "framer-motion";
import { styled } from "styled-components";
import BluredWraper from "./BlurredWraper";

export const BackgroundContainer = styled(motion.div)`
  position: absolute;
  z-index: 0;
  width: 100%;
  height: 100%;
`;

export const Background = (props: PropsWithChildren) => {
  return (
    <BackgroundContainer
      initial={{
        background: `url(/bg.png)`,
        backgroundColor: "var(--primary-dark)",
        backgroundSize: "20%",
        backgroundRepeat: "none",
        backgroundPosition: "0% -50%",
      }}
      animate={{
        backgroundSize: "30%",
        backgroundPosition: "0% 10%",
        animationIterationCount: "infinite",
        transition: {
          duration: 100,
          repeat: Infinity,
          repeatType: "reverse",
        },
      }}
    >
      <BluredWraper>{props.children}</BluredWraper>
    </BackgroundContainer>
  );
};
