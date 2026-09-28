import { renderStartScreen } from "./start-screen";
import { createElement } from "./element-factory";

const header = createElement("header");
const main = createElement("main");
const footer = createElement("footer");

document.body.append(header, main, footer);

const gameTitle = createElement("h1", {
className: "game-title",
textContent: "Eldritch Horror",
});

header.append(gameTitle);

main.append(renderStartScreen());
