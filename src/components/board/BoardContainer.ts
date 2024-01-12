import { styled } from "styled-components";

type BoardContainerProps = {
  selected?: boolean;
};
export const BoardContainer = styled.div<BoardContainerProps>`
  display: flex;
  gap: 2rem;
`;
