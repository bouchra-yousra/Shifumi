import { BoardContainer } from "./BoardContainer";
import { RoundContainer } from "./RoundContainer";
import { ScoreContainer, ScoreCard } from "./ScoreCard";

import player from "../../../public/images/gamer.png";
import robot from "../../../public/images/robot.png";
import { OptionContainer } from "./OptionContainer";
import { Button } from "..";
type BoardProps = {
  playerScore: number;
  computerScore: number;
  currentRound?: number;
  rounds?: number;
  onRestart: () => void;
  onOpenOptions: () => void;
};

export const Board = ({
  playerScore = 0,
  computerScore = 0,
  rounds,
  currentRound,
  onRestart,
  onOpenOptions,
}: BoardProps) => {
  return (
    <BoardContainer>
      <RoundContainer>
        <span>Rounds</span>
        <span>
          {currentRound} / {rounds}
        </span>
      </RoundContainer>
      <ScoreContainer>
        <ScoreCard isplayer>
          <img src={player} width={50} />
          <span>{playerScore}</span>
        </ScoreCard>

        <ScoreCard>
          <span>{computerScore}</span>
          <img src={robot} width={50} />
        </ScoreCard>
      </ScoreContainer>
      <OptionContainer>
        <Button onClick={onOpenOptions} title="Options">
          <img src="images/settings.png" width={20} />
        </Button>
        <Button onClick={onRestart}>
          <img src="images/restart.png" width={20} title="Restart" />
        </Button>
      </OptionContainer>
    </BoardContainer>
  );
};
