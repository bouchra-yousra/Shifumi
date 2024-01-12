import { useState } from "react";
import { Score, Result, GameChoice, GameSettings } from "../types";
import { getRandomChoice, getGameResult, updateScore } from "../services";
import {
  Borad,
  Button,
  Choices,
  Container,
  ControlContainer,
  GameResult,
  PlayGround,
} from "../components";

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
    setPlayerChoice(undefined);
    setScore({ playerScore: 0, computerScore: 0 });
    setCurrentRound(0);
    setComputerChoice(undefined);
    setResult(undefined);
  }

  return (
    <Container>
      <Borad
        playerScore={score.playerScore}
        computerScore={score.computerScore}
        currentRound={currentRound}
        rounds={settings.rounds}
      />
      <PlayGround playerChoice={playerChoice} computerChoice={computerChoice} />
      <ControlContainer>
        <Choices
          playerChoice={playerChoice}
          handleSelectChoice={handleClick}
          disabled={currentRound === settings.rounds}
        />

        <Button onClick={resetGame}>Restart</Button>
      </ControlContainer>
      <GameResult result={result} />
    </Container>
  );
};
