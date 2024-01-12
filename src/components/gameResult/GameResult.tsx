import React, { useEffect, useState } from "react";
import { Result } from "../../types/Results";

type GameResultProps = {
  result?: Result;
};
export const GameResult = ({ result }: GameResultProps) => {
  return <div>{result}</div>;
};
