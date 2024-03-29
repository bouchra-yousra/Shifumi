import { styled } from "styled-components";
import { Result } from "../../types/Results";

type PlayGroundContainerProps = {
  status?: Result;
};

export const PlayGroundContainer = styled.div<PlayGroundContainerProps>`
  position: relative;
  display: flex;
  flex: 1;
  align-items: space-between;
  justify-content: center;
  width: 100%;
  gap: 2rem;
  border-radius: 1rem;
`;
