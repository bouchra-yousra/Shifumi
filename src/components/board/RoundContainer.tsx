import { styled } from "styled-components";

export const RoundContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 1.25rem;

  width: 125px;
  height: max-content;
  font-size: larger;
  background-color: var(--orange-100);
  color: var(--orange-200);
  border-radius: 1em;
`;
