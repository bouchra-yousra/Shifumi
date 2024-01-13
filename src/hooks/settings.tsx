// SettingsContext.tsx
import React, { createContext, useContext, useState, ReactNode } from "react";
import { GameSettings } from "../types";

// Define the shape of the context value
interface SettingsContextProps {
  settings: GameSettings;
  updateSettings: (newSettings: GameSettings) => void;
}

// Create a context with an initial value for settings
const SettingsContext = createContext<SettingsContextProps | undefined>(
  undefined
);

// Custom hook to use the settings context
export const useSettings = () => {
  const context = useContext(SettingsContext);

  if (!context) {
    throw new Error("useSettings must be used within a SettingsProvider");
  }

  return context;
};

// Context provider component
interface SettingsProviderProps {
  children: ReactNode;
}

export const SettingsProvider: React.FC<SettingsProviderProps> = ({
  children,
}) => {
  const [settings, setSettings] = useState<GameSettings>({
    playerNamer: "",
    rounds: 3,
  });

  // Function to update settings
  const updateSettings = (newSettings: GameSettings) => {
    console.table(newSettings);
    setSettings(newSettings);
  };

  // Provide the context value to the children
  const contextValue: SettingsContextProps = {
    settings,
    updateSettings,
  };

  return (
    <SettingsContext.Provider value={contextValue}>
      {children}
    </SettingsContext.Provider>
  );
};
