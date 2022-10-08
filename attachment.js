export const handleAttachmentButtons = () => {
  const buttons = document.querySelectorAll("[data-attachment]");

  if (buttons.length === 0) {
    throw new Error("Nie znaleziono zadnych przycisków z załącnikami!");
  }

  buttons.forEach((button) =>
    button.addEventListener("click", (event) => {
      event.preventDefault();

      const attachment = event.currentTarget.dataset.attachment;

      console.log(event.currentTarget);
      console.log(attachment);
      console.log("Download attachment");
    })
  );
};
