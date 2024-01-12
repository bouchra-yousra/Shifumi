import { motion, useAnimation } from "framer-motion";
import { PropsWithChildren, useEffect } from "react";
import { CardContainer } from "./CardContainer";

type CardProps = {
  controler?: boolean;
};

export const Card = ({
  controler,
  children,
}: CardProps & PropsWithChildren) => {
  const containerAnimationController = useAnimation();
  const elementAnimationController = useAnimation();

  useEffect(() => {
    if (controler) {
      containerAnimationController.start({ rotateY: 0 }).then(() => {
        containerAnimationController.start({ background: ["red", "green"] });
        elementAnimationController.start({ opacity: 1 });
      });
    } else {
      containerAnimationController.start({ rotateY: 180 }).then(() => {
        containerAnimationController.start({ background: ["green", "red"] });
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
