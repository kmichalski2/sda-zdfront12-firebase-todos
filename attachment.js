export const handleAttachmentButtons = () => {
  const buttons = document.querySelectorAll(".btn-attachment");

  if (buttons.length === 0) {
    throw new Error("Nie znaleziono zadnych przycisków z załącnikami!");
  }

  buttons.forEach((button) =>
    button.addEventListener("click", (event) => {
      event.preventDefault();

      console.log(event.currentTarget);
      console.log("Download attachment");
    })
  );
};
