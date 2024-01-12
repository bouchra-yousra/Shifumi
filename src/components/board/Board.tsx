import { BoardContainer } from "./BoardContainer";
import { RoundContainer } from "./RoundContainer";
import { ScoreContainer, ScoreCard } from "./ScoreCard";

import player from "../../../public/images/gamer.png";
import robot from "../../../public/images/robot.png";
type BoardProps = {
  playerScore: number;
  computerScore: number;
  currentRound?: number;
  rounds?: number;
};

export const Board = ({
  playerScore = 0,
  computerScore = 0,
  rounds,
  currentRound,
}: BoardProps) => {
  return (
    <BoardContainer>
      <ScoreContainer>
        <ScoreCard isPlayer>
          <img src={player} width={50} />
          <span>{playerScore}</span>
        </ScoreCard>
        <ScoreCard>
          <span>{computerScore}</span>
          <img src={robot} width={50} />
        </ScoreCard>
      </ScoreContainer>
      <RoundContainer>
        Round {currentRound} of {rounds}
      </RoundContainer>
    </BoardContainer>
  );
};
