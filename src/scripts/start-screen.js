import { createElement, createRadioButtonsSection } from "./element-factory";
import ancients from "../data/ancients";
import difficulties from "../data/difficulties";

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
    "Выбери древнего",
    ancients,
    true,
  );

  const levelSelectorContainer = createRadioButtonsSection(
    "game-options-form__difficulty",
    "difficulty",
    "Выбери сложность",
    difficulties,
  );

  const startButton = createElement("button", {
    className: "start-button",
    textContent: "Старт",
    type: "submit",
  });

  gameOptionsForm.append(ancientsSelectorContainer, levelSelectorContainer, startButton);
  startScreen.append(gameOptionsForm);
  return startScreen;
}


export { renderStartScreen }