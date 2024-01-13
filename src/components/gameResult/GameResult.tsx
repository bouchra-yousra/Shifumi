import { Button } from "..";
import { Score } from "../../types";
import { Result } from "../../types/Results";
import { GameFinalResultContainer } from "./GameFinalResultContainer";
import { GameResultContainer } from "./GameResultContainer";

type GameResultProps = {
  result?: Result;
  isFinalResult?: boolean;
  playerName?: string;
  finalScore: Score;
  onRestart?: () => void;
};
export const GameResult = ({
  result,
  isFinalResult,
  playerName,
  finalScore,
  onRestart,
}: GameResultProps) => {
  if (isFinalResult)
    return (
      <GameFinalResultContainer
        isWinner={finalScore?.playerScore > finalScore?.computerScore}
      >
        {finalScore?.playerScore > finalScore?.computerScore ? (
          <>
            <img src="images/trophy.png" width={60} />
            <p>Bravo {playerName} !</p>
          </>
        ) : (
          <>
            <img src="images/lose.png" width={60} />
            <p>Try next time</p>
            <Button onClick={onRestart}>
              <img src="images/restart.png" width={20} />
            </Button>
          </>
        )}
      </GameFinalResultContainer>
    );

  return <GameResultContainer result={result}> {result} </GameResultContainer>;
};
