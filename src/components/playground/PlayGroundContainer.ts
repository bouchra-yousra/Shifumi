import { styled } from "styled-components";
import { Result } from "../../types/Results";

type PlayGroundContainerProps = {
  status?: Result;
};
export const PlayGroundContainer = styled.div<PlayGroundContainerProps>`
  display: flex;
  align-items: space-between;
  justify-content: center;
  height: 20vw;
  gap: 2rem;
  background: ${({ status }) => {
    switch (status) {
      case Result.DRAW:
        return "yellow";
      case Result.LOSE:
        return "red";
      case Result.WIN:
        return "green";
    }
  }};
`;
