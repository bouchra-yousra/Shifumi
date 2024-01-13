import { useEffect, useState } from "react";
import { GameSettings } from "../../types";
import { Button } from "..";
import { SettingsContainer } from "./SettingsContainer";
import { Input } from "../Inputs/Inputs";
import { Label } from "../Inputs/Label";
import { useAnimate, useAnimation } from "framer-motion";
import { InputWrapper } from "../Inputs/InputWrapper";

type SettingsProps = {
  updateGameSettings: (game: GameSettings) => void;
  currentSettings: GameSettings;
  open?: boolean;
};

export const Settings = ({
  currentSettings,
  updateGameSettings,
  open,
}: SettingsProps) => {
  const [newSettings, setNewSettings] = useState(currentSettings);
  const animationControl = useAnimation();

  useEffect(() => {
    if (open) {
      animationControl
        .start(
          {
            display: "flex",
            opacity: 0.5,
            translateY: 0,
          },
          { duration: 0.5 }
        )
        .then(() =>
          animationControl.start(
            {
              display: "flex",
              opacity: 1,
            },
            { duration: 0.5 }
          )
        );
    } else {
      animationControl
        .start(
          {
            display: "flex",
            opacity: 1,
            translateY: 1000,
          },
          { duration: 0.5 }
        )
        .then(() =>
          animationControl.start({
            display: "none",
            opacity: 0,
          })
        );
    }
  }, [open]);

  return (
    <SettingsContainer
      initial={{
        display: "none",
        opacity: 0,
        translateY: -100,
      }}
      animate={animationControl}
    >
      <InputWrapper>
        <Label>Player name {String(open)}</Label>
        <Input
          placeholder={currentSettings.playerNamer}
          onChange={(e) =>
            setNewSettings({ ...currentSettings, playerNamer: e.target.value })
          }
        />
      </InputWrapper>
      <InputWrapper>
        <Label>Rounds number</Label>
        <Input
          type="number"
          placeholder={String(currentSettings.rounds)}
          onChange={(e) =>
            setNewSettings({
              ...currentSettings,
              rounds: Number.parseInt(e.target.value),
            })
          }
          min={1}
          max={20}
        />
      </InputWrapper>
      <Button onClick={() => updateGameSettings(newSettings)}>Submit</Button>
    </SettingsContainer>
  );
};
