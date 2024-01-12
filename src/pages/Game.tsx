import { useState } from "react";
import { GameChoice } from "../types/GameChoice";
import { getRandomChoice } from "../services/getRandomChoice";
import { getGameResult } from "../services/getGameResult";
import { Result } from "../types/Results";
import { Button } from "../components";
import { GameResult } from "../components/gameResult/GameResult";

export const Game = () => {
  const choices: GameChoice[] = [
    GameChoice.ROCK,
    GameChoice.PAPER,
    GameChoice.SCISSORS,
  ];
  const [playerChoice, setPlayerChoice] = useState<GameChoice>();
  const [computerChoice, setComputerChoice] = useState<GameChoice>();
  const [result, setResult] = useState<Result>();

  const handleClick = (e: GameChoice) => {
    let randomChoice = getRandomChoice(choices);
    let gameResult = getGameResult(e, randomChoice);

    setPlayerChoice(e);
    setComputerChoice(randomChoice);
    setResult(gameResult);
  };

  return (
    <div>
      {choices.map((choice) => (
        <Button
          onClick={() => handleClick(choice)}
          selected={choice === playerChoice}
        >
          {choice}
        </Button>
      ))}
      {result && <GameResult result={result} />}
    </div>
  );
};
