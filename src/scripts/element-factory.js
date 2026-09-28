/**
 * @template {keyof HTMLElementTagNameMap} T
 * @param {T} tagName
 * @param {Partial<HTMLElementTagNameMap[T]>} [attributes]
 * @returns {HTMLElementTagNameMap[T]}
 */
function createElement(tagName, attributes = {}) {
  const element = document.createElement(tagName);

  Object.assign(element, attributes);

  return element;
}

function createRadioButtons(options, classPrefix, radioName) {
  const radioButtons = [];
  options.forEach((option, index) => {
    const optionElem = createElement("div", {
      className: `${classPrefix}__option`,
    });

    const ancientCard = createElement("input", {
      className: `${classPrefix}__input`,
      type: "radio",
      value: option,
      name: radioName,
      id: option,
      checked: index === 0,
    });
    const ancientLabel = createElement("label", {
      className: `${classPrefix}__label`,
      textContent: option,
    });

    optionElem.append(ancientCard, ancientLabel);
    radioButtons.push(optionElem);
  });
  return radioButtons;
}

function createRadioButtonsSection(className, radioName, title, options) {
  const container = createElement("div", {
    className: className,
  });

  const titleElem = createElement("h2", {
    className: `${className}__title`,
    textContent: title,
  });
  container.append(titleElem);

  container.append(...createRadioButtons(
    options,
    `${className}__options`,
    radioName,
  ));
  return container;
}

export { createElement, createRadioButtonsSection }