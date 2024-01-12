export type GameSettings = {
  playerNamer: string;
  rounds: number;
  themeMode?: ThemeMode;
};

enum ThemeMode {
  DARK = "dark",
  LIGHT = "light",
}
