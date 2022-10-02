import { createUserWithEmailAndPassword } from "firebase/auth";

export const initRegisterForm = (auth) => {
  const registerForm = document.querySelector("#registerForm");

  if (registerForm) {
    // Czy dany element zostal znaleziony w HTMlu?
    console.log("Register form has been initialized");

    registerForm.addEventListener("submit", (event) => {
      event.preventDefault();

      const formData = new FormData(registerForm);

      const email = formData.get("email");
      const password = formData.get("password");

      createUserWithEmailAndPassword(auth, email, password).then((result) => {
        console.log("User has been created!");
      });
    });
  }
};
