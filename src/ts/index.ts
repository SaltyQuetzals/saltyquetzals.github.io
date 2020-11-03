interface TextWithEmphasis {
  text: [string] | [string, string];
  emphasized?: boolean;
}

const TEXT_POOL: TextWithEmphasis[] = [
  { text: ["service design", "woo"] },
  { text: ["business models", "wa"] },
  { text: ["human-centric", "Wee"] },
  { text: ["designers", "humans"] },
  { text: ["apps", "schmapps"] },
  { text: ["singapore", "sing some more"] },
];

const elementToStorage = (element: Element): TextWithEmphasis => {
  let textWithEmphasis: TextWithEmphasis = { text: [""] };
  if (element.tagName === "SPAN") {
    textWithEmphasis.text = [element.textContent!];
  } else if (element.tagName === "DIV") {
    const tag = element.getElementsByClassName("normal-text")[0].textContent!;
    const quip = element.getElementsByClassName("quip")[0].textContent!;
    textWithEmphasis.text = [tag, quip];
  } else {
    throw new Error("Only DIVs and SPANs can be converted to storage.");
  }
  if (element.classList.contains("emphasized")) {
    textWithEmphasis.emphasized = true;
  }
  return textWithEmphasis;
};

const randomIndex = (collection: any[] | HTMLCollectionOf<Element>) =>
  Math.floor(Math.random() * collection.length);

setInterval(() => {
  const currentlyDisplayedTags = document.getElementsByClassName("tag");
  const randomCurrentlyDisplayedIndex = randomIndex(currentlyDisplayedTags);
  const randomIndexOfTagPool = randomIndex(TEXT_POOL);

  const tagToReplace = currentlyDisplayedTags[randomCurrentlyDisplayedIndex];
  const valueToStore = elementToStorage(tagToReplace);
  const newValue = TEXT_POOL.splice(randomIndexOfTagPool, 1, valueToStore)[0];
  let newTag: Element;
  if (newValue.text.length === 1) {
    const [normalText] = newValue.text;
    newTag = document.createElement("span");
    const textNode = document.createTextNode(normalText);
    newTag.appendChild(textNode);
    newTag.className = "tag";
  } else {
    const [normalText, quip] = newValue.text;
    newTag = document.createElement("div");

    const normalTextSpan = document.createElement("span");
    const normalTextNode = document.createTextNode(normalText);
    normalTextSpan.appendChild(normalTextNode);
    normalTextSpan.className = "normal-text";
    newTag.appendChild(normalTextSpan);

    const quipSpan = document.createElement("span");
    const quipTextNode = document.createTextNode(quip);
    quipSpan.appendChild(quipTextNode);
    quipSpan.className = "quip";
    newTag.appendChild(quipSpan);

    newTag.className = "tag";
    console.log(newTag.innerHTML);
  }
  if (newValue.emphasized) {
    newTag.classList.add("emphasized");
  }
  tagToReplace.parentNode?.replaceChild(newTag, tagToReplace);
}, 100000);
