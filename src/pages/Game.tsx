import { useState } from "react";
import { Score, Result, GameChoice, GameSettings } from "../types";
import { getRandomChoice, getGameResult, updateScore } from "../services";
import { Borad, Button, GameResult, PlayGround } from "../components";

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

  function handleClick(e: GameChoice): void {
    let randomChoice = getRandomChoice(choices);
    let gameResult = getGameResult(e, randomChoice);
    let newScore = updateScore(gameResult, score);

    setCurrentRound((val: number) => val + 1);
    setPlayerChoice(e);
    setComputerChoice(randomChoice);
    setResult(gameResult);
    setScore(newScore);
  }

  function resetGame(): void {
    setScore({ playerScore: 0, computerScore: 0 });
    setCurrentRound(0);
    setPlayerChoice(undefined);
    setComputerChoice(undefined);
    setResult(undefined);
  }

  return (
    <div>
      <Borad
        playerScore={score.playerScore}
        computerScore={score.computerScore}
        currentRound={currentRound}
        rounds={settings.rounds}
      />
      <PlayGround playerChoice={playerChoice} computerChoice={computerChoice} />
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

      <Button onClick={resetGame}>Restart</Button>
    </div>
  );
};
