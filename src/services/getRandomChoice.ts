export const getRandomChoice = <T>(choices: T[]): T => {
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
};
