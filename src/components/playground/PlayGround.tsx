import { GameChoice } from "../../types/GameChoice";
import { PlayGroundContainer } from "./PlayGroundContainer";
import { Section } from "./Section";
import { Rock, Paper, Scissor } from "../../Icons";
import { Card } from "./Card";

type PlayGroundProps = {
  playerChoice?: GameChoice;
  computerChoice?: GameChoice;
};

const icons = {
  [GameChoice.ROCK]: {
    player: <Rock color={"var(--primary-dark"} />,
    computer: <Rock color={"var(--acces-dark"} />,
  },
  [GameChoice.PAPER]: {
    player: <Paper color={"var(--primary-dark"} />,
    computer: <Paper color={"var(--acces-dark"} />,
  },
  [GameChoice.SCISSORS]: {
    player: <Scissor color={"var(--primary-dark"} />,
    computer: <Scissor color={"var(--acces-dark"} />,
  },
};

export const PlayGround = ({
  playerChoice,
  computerChoice,
}: PlayGroundProps) => {
  return (
    <PlayGroundContainer>
      <Section>
        <Card controler={!!playerChoice} isPlayer={true}>
          {playerChoice && icons?.[playerChoice]?.player}
        </Card>
      </Section>
      <Section>
        <Card controler={!!computerChoice} isPlayer={false}>
          {computerChoice && icons?.[computerChoice]?.computer}
        </Card>
      </Section>
    </PlayGroundContainer>
  );
};
