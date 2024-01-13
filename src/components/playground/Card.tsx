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
          background: isPlayer ? ["var(--primary)"] : ["var(--acces)"],
        });
        elementAnimationController.start({ opacity: 1 });
      });
    } else {
      containerAnimationController
        .start({
          background: isPlayer
            ? ["var(--primary-dark)"]
            : ["var(--acces-dark)"],
        })
        .then(() => {
          containerAnimationController.start({
            rotateY: 180,
          });
        });
    }
  }, [controler]);

  return (
    <CardContainer
      initial={{
        rotateY: 0,
        background: isPlayer ? "var(--primary-dark)" : "var(--acces-dark)",
      }}
      animate={containerAnimationController}
      transition={{ duration: 0.6 }}
      isPlayer={isPlayer}
    >
      <motion.div
        key={`${children}`}
        animate={elementAnimationController}
        initial={{ opacity: 0 }}
      >
        {children}
      </motion.div>
    </CardContainer>
  );
};
