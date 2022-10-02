export const initLoginForm = () => {
  const loginForm = document.querySelector("#loginForm");

  if (loginForm) {
    console.log("Login form has been initialized");

    loginForm.addEventListener("submit", (event) => {
      event.preventDefault();
    });
  }
};
