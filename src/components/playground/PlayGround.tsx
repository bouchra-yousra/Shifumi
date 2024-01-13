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
  [GameChoice.ROCK]: (isplayer: boolean) => (
    <Rock color={isplayer ? "var(--primary-dark" : "var(--acces-dark"} />
  ),
  [GameChoice.PAPER]: (isplayer: boolean) => (
    <Paper color={isplayer ? "var(--primary-dark" : "var(--acces-dark"} />
  ),
  [GameChoice.SCISSORS]: (isplayer: boolean) => (
    <Scissor color={isplayer ? "var(--primary-dark" : "var(--acces-dark"} />
  ),
};

export const PlayGround = ({
  playerChoice,
  computerChoice,
}: PlayGroundProps) => {
  return (
    <PlayGroundContainer>
      <Section>
        <Card controler={!!playerChoice} isplayer={true}>
          {playerChoice && icons[playerChoice](true)}
        </Card>
      </Section>
      <Section>
        <Card controler={!!computerChoice} isplayer={false}>
          {computerChoice && icons[computerChoice](false)}
        </Card>
      </Section>
    </PlayGroundContainer>
  );
};
