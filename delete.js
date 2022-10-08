import { doc, deleteDoc } from "firebase/firestore";

export const handleDeleteButtons = (db) => {
  const deleteButtons = document.querySelectorAll(".btn-delete");

  deleteButtons.forEach((button) => {
    button.addEventListener("click", (event) => {
      const taskId = event.currentTarget.dataset.delete;

      const docRef = doc(db, "tasks", taskId);

      deleteDoc(docRef).then(() => {
        console.log("Zadanie zostało usunięte");
      });
    });
  });
};
