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
  [GameChoice.ROCK]: (isPlayer: boolean) => (
    <Rock color={isPlayer ? "var(--primary-dark" : "var(--acces-dark"} />
  ),
  [GameChoice.PAPER]: (isPlayer: boolean) => (
    <Paper color={isPlayer ? "var(--primary-dark" : "var(--acces-dark"} />
  ),
  [GameChoice.SCISSORS]: (isPlayer: boolean) => (
    <Scissor color={isPlayer ? "var(--primary-dark" : "var(--acces-dark"} />
  ),
};

export const PlayGround = ({
  playerChoice,
  computerChoice,
}: PlayGroundProps) => {
  return (
    <PlayGroundContainer>
      <Section>
        <Card controler={!!playerChoice} isPlayer={true}>
          {playerChoice && icons[playerChoice](true)}
        </Card>
      </Section>
      <Section>
        <Card controler={!!computerChoice} isPlayer={false}>
          {computerChoice && icons[computerChoice](false)}
        </Card>
      </Section>
    </PlayGroundContainer>
  );
};
