import { BoardContainer } from "./BoardContainer";
import { RoundContainer } from "./RoundContainer";
import { ComputerScore, PlayerScore, ScoreContainer } from "./ScoreCard";

import player from "../../../public/images/gamer.png";
import robot from "../../../public/images/robot.png";
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
      <ScoreContainer>
        <PlayerScore>
          {playerScore}
          <img src={player} width={80} />
        </PlayerScore>
        <ComputerScore>
          {computerScore}
          <img src={robot} width={80} />
        </ComputerScore>
      </ScoreContainer>
      <RoundContainer>
        {currentRound} / {rounds}
      </RoundContainer>
    </BoardContainer>
  );
};
