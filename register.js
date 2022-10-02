export const initRegisterForm = () => {
  const registerForm = document.querySelector("#registerForm");

  if (registerForm) {
    // Czy dany element zostal znaleziony w HTMlu?
    console.log("Register form has been initialized");

    registerForm.addEventListener("submit", (event) => {
      event.preventDefault();
    });
  }
};
