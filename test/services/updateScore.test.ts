import { updateScore } from "../../src/services/updateScore";
import { Result } from "../../src/types/Results";
import { Score } from "../../src/types/Score";

describe("updateScore", () => {
  it("should return the same score for DRAW", () => {
    const currentScore: Score = { playerScore: 3, computerScore: 2 };
    expect(updateScore(Result.DRAW, currentScore)).toEqual(currentScore);
  });

  it("should increment player score for WIN", () => {
    const currentScore: Score = { playerScore: 3, computerScore: 2 };
    const expectedScore: Score = { playerScore: 4, computerScore: 2 };
    expect(updateScore(Result.WIN, currentScore)).toEqual(expectedScore);
  });

  it("should increment computer score for LOSE", () => {
    const currentScore: Score = { playerScore: 3, computerScore: 2 };
    const expectedScore: Score = { playerScore: 3, computerScore: 3 };
    expect(updateScore(Result.LOSE, currentScore)).toEqual(expectedScore);
  });

  it("should return the same score for an unknown result", () => {
    const currentScore: Score = { playerScore: 3, computerScore: 2 };
    expect(updateScore("SomeInvalidResult" as Result, currentScore)).toEqual(
      currentScore
    );
  });

  it("should handle initial score", () => {
    const currentScore: Score = { playerScore: 0, computerScore: 0 };
    const expectedScore: Score = { playerScore: 1, computerScore: 0 };
    expect(updateScore(Result.WIN, currentScore)).toEqual(expectedScore);
  });
});
