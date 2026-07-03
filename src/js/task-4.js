const formElement = document.querySelector(".login-form");
const emailInputElement = formElement.email;
const pwdInputElement = formElement.password;

const handleFormSubmit = (event) => {
  event.preventDefault();

  const emailInputValue = emailInputElement.value.trim();
  const pwdInputValue = pwdInputElement.value.trim();

  if (emailInputValue === "" || pwdInputValue === "") {
    alert("All fields must be filled in");
    return;
  }

  console.log({
    [emailInputElement.name]: emailInputValue,
    [pwdInputElement.name]: pwdInputValue,
  });
  formElement.reset();
};
formElement.addEventListener("submit", handleFormSubmit);
