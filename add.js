import { Timestamp, addDoc } from "firebase/firestore";
import { ref, uploadBytes } from "firebase/storage";

export const initAddForm = (tasksCollection, userId, storage) => {
  const addForm = document.querySelector("#addForm");
  const addFormModal = new bootstrap.Modal("#addTaskModal");

  if (addForm && addFormModal) {
    addForm.addEventListener("submit", (event) => {
      event.preventDefault();

      const formData = new FormData(addForm);

      const deadlineDate = new Date(formData.get("deadline"));
      const deadlineTimestamp = Timestamp.fromDate(deadlineDate);

      const file = formData.get("attachment");

      const fileRef = ref(storage, "attachments/" + file.name);
      uploadBytes(fileRef, file)
        .then((result) => {
          console.log("Obrazek został dodany");

          const newTask = {
            order: 999999,
            name: formData.get("name"),
            deadline: deadlineTimestamp,
            done: false,
            startTime: formData.get("startTime"),
            userId: userId,
            filePath: result.metadata.fullPath,
          };

          addDoc(tasksCollection, newTask).then((data) => {
            console.log("Task has been added!");
            addFormModal.hide();
          });
        })
        .catch((error) => {
          console.log(error);
        });
    });
  }
};
