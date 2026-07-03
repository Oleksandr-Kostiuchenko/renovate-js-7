const inputElement = document.querySelector(".number-input");
const createBtnElement = document.querySelector(".create-btn");
const destroyBtnElement = document.querySelector(".destroy-btn");

const spaceDivElement = document.querySelector(".create-space-div");

const handleCreate = (event) => {
  const markupArr = [];
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

  const value = Number(inputElement.value);

  if (typeof value !== "number" || value <= 0 || value > 20) {
    alert("Input a number from 1 to 20");
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
  }

  spaceDivElement.insertAdjacentHTML("beforeend", markupArr.join(""));
  // spaceDivElement.style.gap = `${
  //   1000 -
  //   (3 * spaceDivElement.children.length) / spaceDivElement.children.length
  // }px`;
  console.log(spaceDivElement.children);
};
createBtnElement.addEventListener("click", handleCreate);

const handleDestroy = (event) => {
  spaceDivElement.innerHTML = "";
};
destroyBtnElement.addEventListener("click", handleDestroy);
