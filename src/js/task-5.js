const bodyElement = document.querySelector("body");
const btnChangeColorElement = document.querySelector(".change-color");
const btnResetColorElement = document.querySelector(".reset-color");
const spanElement = document.querySelector(".color");

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const handleChangeColorBtnClick = (event) => {
  const randomColor = getRandomHexColor();

  bodyElement.style.backgroundColor = randomColor;
  spanElement.textContent = randomColor;
};
btnChangeColorElement.addEventListener("click", handleChangeColorBtnClick);

const handleResetColorBtnClick = (event) => {
  bodyElement.style.backgroundColor = "#ffffff";
  spanElement.textContent = "-";
};
btnResetColorElement.addEventListener("click", handleResetColorBtnClick);
