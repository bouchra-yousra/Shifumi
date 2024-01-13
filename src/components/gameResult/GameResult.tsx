import { useEffect } from "react";
import { Button } from "..";
import { Score } from "../../types";
import { Result } from "../../types/Results";
import { GameFinalResultContainer } from "./GameFinalResultContainer";
import { GameResultContainer } from "./GameResultContainer";
import { useAnimation } from "framer-motion";

type GameResultProps = {
  result?: Result;
  showResult?: boolean;
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
  showResult,
}: GameResultProps) => {
  const finalAnimationControl = useAnimation();
  const animationControl = useAnimation();
  useEffect(() => {
    finalAnimationControl.start(
      {
        translateY: isFinalResult ? 0 : 1000,
      },
      {
        duration: 0.5,
      }
    );

    animationControl.start(
      {
        translateY: showResult ? 200 : 1000,
      },
      {
        duration: 0.5,
      }
    );
  }, [showResult]);

  if (isFinalResult)
    return (
      <GameFinalResultContainer
        isWinner={finalScore?.playerScore > finalScore?.computerScore}
        animate={finalAnimationControl}
        initial={{ translateY: 1000 }}
      >
        {finalScore?.playerScore > finalScore?.computerScore ? (
          <>
            <img src="images/trophy.png" width={60} />
            <p>Bravo {playerName} !</p>
            <Button
              onClick={onRestart}
              style={{ background: "var(--orange-200)" }}
            >
              <img src="images/restart.png" width={20} />
            </Button>
          </>
        ) : (
          <>
            <img src="images/lose.png" width={60} />
            <p>Try next time</p>
            <Button
              onClick={onRestart}
              style={{ background: "var(--gray-500)" }}
            >
              <img src="images/restart.png" width={20} />
            </Button>
          </>
        )}
      </GameFinalResultContainer>
    );

  return (
    <GameResultContainer
      result={result}
      initial={{ translateY: 1000 }}
      animate={animationControl}
    >
      {result}
    </GameResultContainer>
  );
};
