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

function createRadioButtons(options, classPrefix, radioName, includeImage = false) {
  const radioButtonsContainer = createElement("div", {
    className: `${classPrefix}`,
  });
  options.forEach((option, index) => {
    const ancientCard = createElement("label", {
      className: `${classPrefix}__option`,
    });

    if (includeImage) {
      const optionImage = createElement("img", {
        src: option.cardFace,
        alt: option.name,
      });
      ancientCard.append(optionImage);
    }

    const input = createElement("input", {
      className: `${classPrefix}__input`,
      type: "radio",
      value: option.id,
      name: radioName,
      id: option.id,
      checked: index === 0,
    });

    ancientCard.append(input, option.name);
    radioButtonsContainer.append(ancientCard);
  });
  return radioButtonsContainer;
}

function createRadioButtonsSection(className, radioName, title, options, includeImage = false) {
  const container = createElement("div", {
    className: className,
  });

  const titleElem = createElement("h2", {
    className: `${className}__title`,
    textContent: title,
  });
  container.append(titleElem);

  container.append(createRadioButtons(
    options,
    `${className}__options`,
    radioName,
    includeImage,
  ));
  return container;
}

export { createElement, createRadioButtonsSection }