import styles from "styled-components";

type BoardContainerProps = {
  selected?: boolean;
};
export const BoardContainer = styles.div<BoardContainerProps>`
   display:flex;
   gap:2rem
`;
