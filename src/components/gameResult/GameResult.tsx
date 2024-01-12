import { Result } from "../../types/Results";
import { GameResultContainer } from "./GameResultContainer";

type GameResultProps = {
  result?: Result;
};
export const GameResult = ({ result }: GameResultProps) => {
  return <GameResultContainer result={result}>{result}</GameResultContainer>;
};
