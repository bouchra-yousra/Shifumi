import { getGameResult } from "../../src/services/getGameResult";
import { GameChoice } from "../../src/types/GameChoice";
import { Result } from "../../src/types/Results";

describe("Test getting shifumi game winner", () => {
  it("should return DRAW when the choices are the same", () => {
    expect(getGameResult(GameChoice.ROCK, GameChoice.ROCK)).toBe(Result.DRAW);
    expect(getGameResult(GameChoice.PAPER, GameChoice.PAPER)).toBe(Result.DRAW);
    expect(getGameResult(GameChoice.SCISSORS, GameChoice.SCISSORS)).toBe(
      Result.DRAW
    );
  });

  it("should return WIN when the player wins", () => {
    expect(getGameResult(GameChoice.ROCK, GameChoice.SCISSORS)).toBe(
      Result.WIN
    );
    expect(getGameResult(GameChoice.PAPER, GameChoice.ROCK)).toBe(Result.WIN);
    expect(getGameResult(GameChoice.SCISSORS, GameChoice.PAPER)).toBe(
      Result.WIN
    );
  });

  it("should return LOSE when the computer wins", () => {
    expect(getGameResult(GameChoice.SCISSORS, GameChoice.ROCK)).toBe(
      Result.LOSE
    );
    expect(getGameResult(GameChoice.ROCK, GameChoice.PAPER)).toBe(Result.LOSE);
    expect(getGameResult(GameChoice.PAPER, GameChoice.SCISSORS)).toBe(
      Result.LOSE
    );
  });
});
