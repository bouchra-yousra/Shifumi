import { PropsWithChildren } from "react";
import { Container } from "..";

export const PageContainer = (props: PropsWithChildren) => {
  return (
    <Container
      initial={{
        width: 0,
      }}
      animate={{ width: "100%" }}
    >
      {props.children}
    </Container>
  );
};
