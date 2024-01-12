import { getRandomChoice } from "../../src/services/getRandomChoice";

describe("Test getting a random value from a choice list", () => {
  let choiceList: string[] = ["Rock", "Paper", "Secissor"];

  test("returns a valid random choice", () => {
    const randomChoice = getRandomChoice(choiceList);
    expect(choiceList).toContain(randomChoice);
  });

  it("returns undefined for an empty array", () => {
    const randomChoice = getRandomChoice([]);
    expect(randomChoice).toBeUndefined();
  });
});
