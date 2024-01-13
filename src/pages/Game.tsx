import { useState } from "react";
import { Score, Result, GameChoice, GameSettings } from "../types";
import { getRandomChoice, getGameResult, updateScore } from "../services";
import {
  Board,
  Choices,
  ControlContainer,
  GameResult,
  PageContainer,
  PlayGround,
} from "../components";
import { Settings } from "../components/settings/Settings";
import { useSettings } from "../hooks/settings";

export const Game = () => {
  const { settings } = useSettings();
  const [openSettings, setOpenSettings] = useState<boolean>(false);

  const [currentRound, setCurrentRound] = useState<number>(0);

  const [playerChoice, setPlayerChoice] = useState<GameChoice>();
  const [computerChoice, setComputerChoice] = useState<GameChoice>();
  const [result, setResult] = useState<Result>();
  const [score, setScore] = useState<Score>({
    playerScore: 0,
    computerScore: 0,
  });

  function handleClick(e: GameChoice): void {
    if (currentRound >= settings.rounds) return;
    const choices: GameChoice[] = [
      GameChoice.ROCK,
      GameChoice.PAPER,
      GameChoice.SCISSORS,
    ];
    const randomChoice = getRandomChoice(choices);
    const gameResult = getGameResult(e, randomChoice);
    const newScore = updateScore(gameResult, score);
    setComputerChoice(undefined);
    setPlayerChoice(e);

    setTimeout(() => {
      setCurrentRound((val: number) => val + 1);

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

  function handleOpenSettings(): void {
    setOpenSettings((val) => !val);
  }

  function onUpdateGameSettings(): void {
    setOpenSettings(false);
  }

  return (
    <PageContainer>
      <Board
        playerScore={score.playerScore}
        computerScore={score.computerScore}
        currentRound={currentRound}
        rounds={settings.rounds}
        onRestart={resetGame}
        onOpenOptions={handleOpenSettings}
      />
      <PlayGround playerChoice={playerChoice} computerChoice={computerChoice} />
      <ControlContainer>
        <Choices
          playerChoice={playerChoice}
          handleSelectChoice={handleClick}
          disabled={currentRound === settings.rounds}
        />
      </ControlContainer>
      <GameResult
        result={result}
        isFinalResult={currentRound === settings.rounds}
        playerName={settings.playerNamer}
        finalScore={score}
        onRestart={resetGame}
      />
      <Settings
        open={openSettings}
        onUpdateGameSettings={onUpdateGameSettings}
        buttonText="Submit"
      />
    </PageContainer>
  );
};
