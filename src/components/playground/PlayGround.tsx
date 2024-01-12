import { GameChoice } from "../../types/GameChoice";
import { PlayGroundContainer } from "./PlayGroundContainer";
import { Section } from "./Section";
import { Rock, Paper, Scissor } from "../../Icons";

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
      <Section>{playerChoice && Component?.[playerChoice]}</Section>
      <Section>{computerChoice && Component?.[computerChoice]}</Section>
    </PlayGroundContainer>
  );
};
