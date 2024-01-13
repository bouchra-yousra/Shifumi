import { styled } from "styled-components";

type BoardContainerProps = {
  selected?: boolean;
};

export const BoardContainer = styled.div<BoardContainerProps>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 0.6rem;
  gap: 0.4rem;
  border-radius: 1rem;
  box-sizing: border-box;
  background-color: var(--bg3);

  @media (max-width: 400px) {
    flex-direction: column;
  }
`;
