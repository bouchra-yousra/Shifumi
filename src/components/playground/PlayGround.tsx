import { GameChoice } from "../../types/GameChoice";
import { PlayGroundContainer } from "./PlayGroundContainer";
import { Section } from "./Section";
import { Rock, Paper, Scissor } from "../../Icons";
import { Card } from "./Card";

import { useEffect } from "react";

type PlayGroundProps = {
  playerChoice?: GameChoice;
  computerChoice?: GameChoice;
};

const Component = {
  [GameChoice.ROCK]: <Rock />,
  [GameChoice.PAPER]: <Paper />,
  [GameChoice.SCISSORS]: <Scissor />,
};

export const PlayGround = ({
  playerChoice,
  computerChoice,
}: PlayGroundProps) => {
  return (
    <PlayGroundContainer style={{}}>
      <Section>
        <Card controler={!!playerChoice}>
          {playerChoice && Component?.[playerChoice]}
        </Card>
      </Section>
      <Section>
        <Card controler={!!computerChoice}>
          {computerChoice && Component?.[computerChoice]}
        </Card>
      </Section>
    </PlayGroundContainer>
  );
};
