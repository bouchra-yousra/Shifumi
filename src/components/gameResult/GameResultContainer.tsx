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
  border-color: ${({ result }) => {
    switch (result) {
      case Result.DRAW:
        return "var(--yellow-200)";
      case Result.LOSE:
        return "var(--red-200)";
      case Result.WIN:
        return "var(--green-200)";
      default:
        return "var(--bg-3)";
    }
  }};
  background-color: ${({ result }) => {
    switch (result) {
      case Result.DRAW:
        return "var(--yellow-100)";
      case Result.LOSE:
        return "var(--red-100)";
      case Result.WIN:
        return "var(--green-100)";
      default:
        return "var(--bg-1)";
    }
  }};
  color: ${({ result }) => {
    switch (result) {
      case Result.DRAW:
        return "var(--yellow-200)";
      case Result.LOSE:
        return "var(--red-200)";
      case Result.WIN:
        return "var(--green-200)";
      default:
        return "var(--bg-3)";
    }
  }};
`;
