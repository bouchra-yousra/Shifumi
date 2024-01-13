import { Rock, Paper, Scissor } from "../../Icons";
import { GameChoice } from "../../types";
import { Choice } from "./Choice";
import { ChoiceContainer } from "./ChoiceContainer";

type ChoicesProps = {
  playerChoice?: GameChoice;
  disabled?: boolean;
  handleSelectChoice: (choice: GameChoice) => void;
};

export const Choices = ({
  handleSelectChoice,
  playerChoice,
  disabled,
}: ChoicesProps) => {
  const choices: GameChoice[] = [
    GameChoice.ROCK,
    GameChoice.PAPER,
    GameChoice.SCISSORS,
  ];
  const Component = {
    [GameChoice.ROCK]: <Rock color="var(--bg1)" />,
    [GameChoice.PAPER]: <Paper color="var(--bg1)" />,
    [GameChoice.SCISSORS]: <Scissor color="var(--bg1)" />,
  };
  return (
    <ChoiceContainer>
      {choices.map((choice) => (
        <Choice
          onClick={() => handleSelectChoice(choice)}
          selected={choice === playerChoice}
          disabled={disabled}
        >
          {Component[choice]}
        </Choice>
      ))}
    </ChoiceContainer>
  );
};
