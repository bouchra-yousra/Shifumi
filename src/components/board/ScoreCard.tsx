import { styled } from "styled-components";

type ScoreCardProps = { isPlayer?: boolean };

export const ScoreContainer = styled.div`
  display: flex;
`;

export const ScoreCard = styled.div<ScoreCardProps>`
  display: flex;
  flex: 1;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 1.25rem;
  gap: 1rem;
  width: 125px;
  font-size: larger;
  ${({ isPlayer }) =>
    isPlayer
      ? `
      background-color: var(--primary);
      color: var(--primary-dark);
      border-radius: 1rem 0rem 0rem 1rem;
    `
      : `
      background-color: var(--acces);
      color: var(--acces-dark);
      border-radius: 0rem 1rem 1rem 0rem;
    `}
`;
