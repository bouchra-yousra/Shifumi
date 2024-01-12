import { motion, useAnimation } from "framer-motion";
import { PropsWithChildren, useEffect } from "react";
import { CardContainer } from "./CardContainer";

type CardProps = {
  controler?: boolean;
  isPlayer?: boolean;
};

export const Card = ({
  controler,
  isPlayer,
  children,
}: CardProps & PropsWithChildren) => {
  const containerAnimationController = useAnimation();
  const elementAnimationController = useAnimation();

  useEffect(() => {
    if (controler) {
      containerAnimationController.start({ rotateY: 0 }).then(() => {
        containerAnimationController.start({
          background: isPlayer
            ? ["var(--primary-dark)", "var(--primary)"]
            : ["var(--acces-dark)", "var(--acces)"],
        });
        elementAnimationController.start({ opacity: 1 });
      });
    } else {
      containerAnimationController.start({ rotateY: 180 }).then(() => {
        containerAnimationController.start({
          background: isPlayer
            ? ["var(--primary)", "var(--primary-dark)"]
            : ["var(--acces", "var(--acces-dark))"],
        });
      });
    }
  }, [controler]);

  return (
    <CardContainer
      initial={{
        rotateY: 0,
        background: "blue",
      }}
      animate={containerAnimationController}
      transition={{ duration: 0.6 }}
      isPlayer={isPlayer}
    >
      <motion.div
        key={children}
        animate={elementAnimationController}
        initial={{ opacity: 0 }}
      >
        {children}
      </motion.div>
    </CardContainer>
  );
};
