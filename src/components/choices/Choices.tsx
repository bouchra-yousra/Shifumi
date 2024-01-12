import { Button } from "..";
import { GameChoice } from "../../types";
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
  return (
    <ChoiceContainer>
      {choices.map((choice) => (
        <Button
          onClick={() => handleSelectChoice(choice)}
          selected={choice === playerChoice}
          disabled={disabled}
        >
          {choice}
        </Button>
      ))}
    </ChoiceContainer>
  );
};
