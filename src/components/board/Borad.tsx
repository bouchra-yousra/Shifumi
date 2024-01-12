import { BoardContainer } from "./BoardContainer";

type BordProps = {
  playerScore: number;
  computerScore: number;
  currentRound?: number;
  rounds?: number;
};

export const Borad = ({
  playerScore = 0,
  computerScore = 0,
  rounds,
  currentRound,
}: BordProps) => {
  return (
    <BoardContainer>
      <p>Your Score : {playerScore}</p>
      <p>Bot Score : {computerScore}</p>
      <p>
        {currentRound} / {rounds}
      </p>
    </BoardContainer>
  );
};
