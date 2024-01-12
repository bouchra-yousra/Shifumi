import React from "react";
import { Button } from "../components/buttons/Button";
import { GameChoice } from "../types/GameChoice";

export const Game = () => {
  const choices: GameChoice[] = [
    GameChoice.ROCK,
    GameChoice.PAPER,
    GameChoice.SCISSORS,
  ];

  return (
    <div>
      {choices.map((choice) => (
        <Button>{choice}</Button>
      ))}
    </div>
  );
};
