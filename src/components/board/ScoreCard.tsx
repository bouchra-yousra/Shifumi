import { styled } from "styled-components";

export const ScoreContainer = styled.div`
  display: flex;
`;

export const PlayerScore = styled.div`
  display: flex;
  flex: 1;
  justify-content: space-between;
  align-items: center;
  padding: 0.6em;
  gap: 1rem;

  background-color: var(--primary);
  color: var(--primary-dark);
  font-size: larger;
  border-radius: 1rem 0rem 0rem 1rem;
`;
export const ComputerScore = styled.div`
  display: flex;
  flex: 1;
  justify-content: space-between;
  align-items: center;
  padding: 0.6em;
  gap: 1rem;

  background-color: var(--acces);
  color: var(--acces-dark);
  font-size: larger;
  border-radius: 0rem 1rem 1rem 0rem;
`;
