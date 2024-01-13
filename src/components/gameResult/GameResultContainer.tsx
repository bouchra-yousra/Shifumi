import { styled } from "styled-components";
import { Result } from "../../types";

type GameResultContainerProps = {
  result?: Result;
};

export const GameResultContainer = styled.div<GameResultContainerProps>`
  position: absolute;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  overflow: hidden;
  pointer-events: none;
  height: 10rem;
  width: 20rem;
  border: 2px solid;
  border-radius: 1rem;

  ${({ result }) => {
    switch (result) {
      case Result.DRAW:
        return `
        border-color: var(--yellow-200);
        background-color: var(--yellow-100);
        color: var(--yellow-200);
        `;
      case Result.LOSE:
        return `
        border-color: var(--red-200);
        background-color: var(--red-100);
        color: var(--red-200);
        `;
      case Result.WIN:
        return `
        border-color: var(--green-200);
        background-color: var(--green-100);
        color: var(--green-200);
        `;
      default:
        return `
        display: none;
        border-color: transparent;
        background-color: transparent;
        color: transparent;
        `;
    }
  }};
`;
