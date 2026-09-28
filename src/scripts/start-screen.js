import { createElement, createRadioButtonsSection } from "./element-factory"

function renderStartScreen() {
  const startScreen = createElement("section", {
    className: "start-screen",
  });

  const gameOptionsForm = createElement("form", {
    className: "game-options-form",
  });

  const ancientsSelectorContainer = createRadioButtonsSection(
    "game-options-form__ancients",
    "ancient",
    "Select your ancient",
    ["first", "second", "third", "fourth"],
  );

  const levelSelectorContainer = createRadioButtonsSection(
    "game-options-form__difficulty",
    "difficulty",
    "Select game difficulty",
    ["Very easy", "Easy", "Normal", "High", "Very High"],
  );

  const startButton = createElement("button", {
    className: "start-button",
    textContent: "Start",
    type: "submit",
  });

  gameOptionsForm.append(ancientsSelectorContainer, levelSelectorContainer, startButton);
  startScreen.append(gameOptionsForm);
  return startScreen;
}


export { renderStartScreen }