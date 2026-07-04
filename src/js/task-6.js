const inputElement = document.querySelector(".number-input");
const createBtnElement = document.querySelector(".create-btn");
const destroyBtnElement = document.querySelector(".destroy-btn");
const deleteInputElement = document.querySelector(".delete-input");
const deleteButtonElement = document.querySelector(".delete-btn");
const spaceDivElement = document.querySelector(".create-space-div");

const initialWidth = 20;
const colors = [
  "#e3f2fd",
  "#bbdefb",
  "#90caf9",
  "#64b5f6",
  "#42a5f5",
  "#2196f3",
  "#1e88e5",
  "#1976d2",
  "#1565c0",
  "#0d47a1",
  "#e0f7fa",
  "#b2ebf2",
  "#80deea",
  "#4dd0e1",
  "#26c6da",
  "#00bcd4",
  "#00acc1",
  "#0097a7",
  "#00838f",
  "#006064",
];

const handleCreate = (event) => {
  const value = Number(inputElement.value);
  const markupArr = [];
  const currentCount = spaceDivElement.children.length;

  if (typeof value !== "number" || value <= 0 || value > 20) {
    alert("Input a number from 1 to 20");
    return;
  }
  if (value > 20 - currentCount) {
    alert("Maximum quantity of blocks is 20");
    return;
  }

  if (spaceDivElement.children.length >= 20) {
    alert("Stack is already completed!");
    return;
  }

  for (
    let i = spaceDivElement.children.length;
    i < value + spaceDivElement.children.length;
    i++
  ) {
    const element = `
    <div
        class="square-element"
        style="width: ${initialWidth + 5 * i}px; height: ${initialWidth + 5 * i}px; background-color: ${colors[i]}"
      ></div>
      `;
    markupArr.push(element);

    inputElement.value = "";
  }

  spaceDivElement.insertAdjacentHTML("beforeend", markupArr.join(""));
};
createBtnElement.addEventListener("click", handleCreate);

const handleDestroy = (event) => {
  spaceDivElement.innerHTML = "";
};
destroyBtnElement.addEventListener("click", handleDestroy);

const handleDelete = (event) => {
  const numValue = Number(deleteInputElement.value);
  const resultMarkup = [];

  if (
    typeof numValue !== "number" ||
    numValue < 1 ||
    numValue > spaceDivElement.children.length
  ) {
    alert("Input a correct number!");
    return;
  }

  for (let i = 0; i < spaceDivElement.children.length - numValue; i++) {
    resultMarkup.push(`
    <div
      class="square-element"
      style="width: ${initialWidth + 5 * i}px; height: ${initialWidth + 5 * i}px; background-color: ${colors[i]}"
    ></div>
  `);
  }

  spaceDivElement.innerHTML = "";
  spaceDivElement.insertAdjacentHTML("beforeend", resultMarkup.join(""));

  deleteInputElement.value = "";
};
deleteButtonElement.addEventListener("click", handleDelete);
