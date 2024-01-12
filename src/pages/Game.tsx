import { useEffect, useState } from "react";
import { Score, Result, GameChoice, GameSettings } from "../types";
import { getRandomChoice, getGameResult, updateScore } from "../services";
import {
  Borad,
  Button,
  Choices,
  ControlContainer,
  GameResult,
  PageContainer,
  PlayGround,
} from "../components";
import { Settings } from "../components/settings/Settings";

export const Game = () => {
  const [settings, setSettings] = useState<GameSettings>({
    rounds: 1112,
    playerNamer: "",
  });

  const [currentRound, setCurrentRound] = useState<number>(0);

  const [playerChoice, setPlayerChoice] = useState<GameChoice>();
  const [computerChoice, setComputerChoice] = useState<GameChoice>();
  const [result, setResult] = useState<Result>();
  const [score, setScore] = useState<Score>({
    playerScore: 0,
    computerScore: 0,
  });

  function handleClick(e: GameChoice): void {
    const choices: GameChoice[] = [
      GameChoice.ROCK,
      GameChoice.PAPER,
      GameChoice.SCISSORS,
    ];
    const randomChoice = getRandomChoice(choices);
    const gameResult = getGameResult(e, randomChoice);
    const newScore = updateScore(gameResult, score);
    setComputerChoice(undefined);

    setTimeout(() => {
      setCurrentRound((val: number) => val + 1);
      setPlayerChoice(e);
      setComputerChoice(randomChoice);
      setResult(gameResult);
      setScore(newScore);
    }, 1000);
  }

  function resetGame(): void {
    setPlayerChoice(undefined);
    setScore({ playerScore: 0, computerScore: 0 });
    setCurrentRound(0);
    setComputerChoice(undefined);
    setResult(undefined);
  }

  return (
    <PageContainer>
      <Borad
        playerScore={score.playerScore}
        computerScore={score.computerScore}
        currentRound={currentRound}
        rounds={settings.rounds}
      />
      <PlayGround playerChoice={playerChoice} computerChoice={computerChoice} />
      <ControlContainer>
        {" "}
        <Button onClick={resetGame}>Settings</Button>
        <Choices
          playerChoice={playerChoice}
          handleSelectChoice={handleClick}
          disabled={currentRound === settings.rounds}
        />
        <Button onClick={resetGame}>Restart</Button>
      </ControlContainer>
      <GameResult result={result} />
      {false && (
        <Settings currentSettings={settings} updateGameSettings={setSettings} />
      )}
    </PageContainer>
  );
};
