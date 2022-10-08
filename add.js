import { Timestamp, addDoc } from "firebase/firestore";

export const initAddForm = (tasksCollection) => {
  const addForm = document.querySelector("#addForm");
  const submitAddFormButton = document.querySelector("#submitAddFormButton");
  // const addFormModal = document.querySelector("#addTaskModal");
  const addFormModal = new bootstrap.Modal("#addTaskModal");

  if (addForm && submitAddFormButton && addFormModal) {
    submitAddFormButton.addEventListener("click", (event) => {
      event.preventDefault();

      const formData = new FormData(addForm);

      const deadlineDate = new Date(formData.get("deadline"));
      const deadlineTimestamp = Timestamp.fromDate(deadlineDate);

      const newTask = {
        order: 999999,
        name: formData.get("name"),
        deadline: deadlineTimestamp,
        done: false,
        startTime: formData.get("startTime"),
      };

      addDoc(tasksCollection, newTask).then((data) => {
        console.log("Task has been added!");
        addFormModal.hide();
      });
    });
  }
};
