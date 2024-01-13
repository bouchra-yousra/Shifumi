import { PropsWithChildren, useEffect, useState } from "react";
import { Container } from "..";

export const PageContainer = (props: PropsWithChildren) => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  });
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
