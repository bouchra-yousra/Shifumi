import { GameSettings } from "../../types";
import { Button } from "..";
import { SettingsContainer } from "./SettingsContainer";
import { useState } from "react";
import { Input } from "../Inputs/Inputs";
import { Label } from "../Inputs/Label";

type SettingsProps = {
  updateGameSettings: (game: GameSettings) => void;
  currentSettings: GameSettings;
};

export const Settings = ({
  currentSettings,
  updateGameSettings,
}: SettingsProps) => {
  const [newSettings, setNewSettings] = useState(currentSettings);
  return (
    <SettingsContainer>
      <Label>Player name</Label>
      <Input
        placeholder={currentSettings.playerNamer}
        onChange={(e) =>
          setNewSettings({ ...currentSettings, playerNamer: e.target.value })
        }
      />
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

      <Button onClick={() => updateGameSettings(newSettings)}>Submit</Button>
    </SettingsContainer>
  );
};
