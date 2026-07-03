const inputEl = document.querySelector("#name-input");
const spanEl = document.querySelector("#name-output");

const handleInput = (event) => {
  const inputValue = event.target.value.trim();

  if (inputValue === "") {
    spanEl.textContent = "Anonymous";
  } else {
    spanEl.textContent = inputValue;
  }
};
inputEl.addEventListener("input", handleInput);
