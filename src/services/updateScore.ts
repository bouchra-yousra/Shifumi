import { Result } from "../types/Results";
import { Score } from "../types/Score";

export function updateScore(result: Result, currentScore: Score): Score {
  switch (result) {
    case Result.DRAW:
      return currentScore;
    case Result.WIN:
      return { ...currentScore, playerScore: currentScore.playerScore + 1 };
    case Result.LOSE:
      return { ...currentScore, computerScore: currentScore.computerScore + 1 };
    default:
      return currentScore;
  }
}
