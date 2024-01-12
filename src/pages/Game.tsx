import { useState } from "react";
import { GameChoice } from "../types/GameChoice";
import { getRandomChoice } from "../services/getRandomChoice";
import { getGameResult } from "../services/getGameResult";
import { Result } from "../types/Results";
import { Borad, Button } from "../components";
import { GameResult } from "../components/gameResult/GameResult";
import { Score } from "../types/Score";
import { updateScore } from "../services/updateScore";

export const Game = () => {
  const choices: GameChoice[] = [
    GameChoice.ROCK,
    GameChoice.PAPER,
    GameChoice.SCISSORS,
  ];
  const settings: GameSettings = {
    rounds: 3,
  };
  const [currentRound, setCurrentRound] = useState<number>(0);

  const [playerChoice, setPlayerChoice] = useState<GameChoice>();
  const [computerChoice, setComputerChoice] = useState<GameChoice>();
  const [result, setResult] = useState<Result>();
  const [score, setScore] = useState<Score>({
    playerScore: 0,
    computerScore: 0,
  });

  const handleClick = (e: GameChoice) => {
    let randomChoice = getRandomChoice(choices);
    let gameResult = getGameResult(e, randomChoice);
    let newScore = updateScore(gameResult, score);

    setCurrentRound((val: number) => val + 1);
    setPlayerChoice(e);
    setComputerChoice(randomChoice);
    setResult(gameResult);
    setScore(newScore);
  };

  return (
    <div>
      <Borad
        playerScore={score.playerScore}
        computerScore={score.computerScore}
        currentRound={currentRound}
        rounds={settings.rounds}
      />
      {choices.map((choice) => (
        <Button
          onClick={() => handleClick(choice)}
          selected={choice === playerChoice}
          disabled={currentRound === settings.rounds}
        >
          {choice}
        </Button>
      ))}
      {result && <GameResult result={result} />}
    </div>
  );
};
