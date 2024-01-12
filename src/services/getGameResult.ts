import { GameChoice } from "../types/GameChoice";
import { Result } from "../types/Results";

export function getGameResult(
  playerChoice: GameChoice,
  computerChoice: GameChoice
): Result {
  if (playerChoice === computerChoice) return Result.DRAW;
  if (
    (playerChoice === GameChoice.PAPER && computerChoice === GameChoice.ROCK) ||
    (playerChoice === GameChoice.ROCK &&
      computerChoice === GameChoice.SCISSORS) ||
    (playerChoice === GameChoice.SCISSORS &&
      computerChoice === GameChoice.PAPER)
  )
    return Result.WIN;
  return Result.LOSE;
}
