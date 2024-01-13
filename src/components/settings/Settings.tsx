import { useEffect, useState } from "react";
import { Button, Title } from "..";
import { SettingsContainer } from "./SettingsContainer";
import { Input } from "../Inputs/Inputs";
import { Label } from "../Inputs/Label";
import { useAnimation } from "framer-motion";
import { InputWrapper } from "../Inputs/InputWrapper";
import { useSettings } from "../../hooks/settings";

type SettingsProps = {
  onUpdateGameSettings?: () => void;
  open?: boolean;
  buttonText?: string;
  title: string;
};

export const Settings = ({
  open,
  onUpdateGameSettings,
  buttonText,
  title,
}: SettingsProps) => {
  const { settings, updateSettings } = useSettings();
  const [newSettings, setNewSettings] = useState({ ...settings });
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
      {title && <Title>{title}</Title>}
      <InputWrapper>
        <Label>Player name </Label>
        <Input
          placeholder={
            settings.playerNamer === ""
              ? "Write you name "
              : settings.playerNamer
          }
          onChange={(e) =>
            setNewSettings({ ...newSettings, playerNamer: e.target.value })
          }
        />
      </InputWrapper>
      <InputWrapper>
        <Label>Rounds number</Label>
        <Input
          type="number"
          placeholder={String(settings.rounds)}
          onChange={(e) =>
            setNewSettings({
              ...newSettings,
              rounds: Number.parseInt(e.target.value),
            })
          }
          min={1}
          max={20}
        />
      </InputWrapper>
      <Button
        onClick={() => {
          updateSettings(newSettings);
          if (!!onUpdateGameSettings) onUpdateGameSettings?.();
        }}
      >
        {buttonText}
      </Button>
    </SettingsContainer>
  );
};
