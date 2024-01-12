import styles from "styled-components";

type ButtonProps = {
  selected?: boolean;
};
export const Button = styles.button<ButtonProps>`
    border: ${({ selected }) =>
      selected ? "2px solid red" : "0px transparent"};
      outline:none;
`;
