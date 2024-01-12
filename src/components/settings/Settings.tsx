import React from "react";
import { GameSettings } from "../../types";
import { Button } from "..";
import { SettingsContainer } from "./SettingsContainer";

type SettingsProps = {
  updateGameSettings: (game: GameSettings) => void;
  currentSettings: GameSettings;
};

export const Settings = ({
  currentSettings,
  updateGameSettings,
}: SettingsProps) => {
  return (
    <SettingsContainer>
      <input value={currentSettings.playerNamer} />
      <input type="number" value={currentSettings.rounds} />

      <Button onClick={() => updateGameSettings(currentSettings)}>
        Submit
      </Button>
    </SettingsContainer>
  );
};
