import { Timestamp, addDoc } from "firebase/firestore";

export const initAddForm = (tasksCollection) => {
  const addForm = document.querySelector("#addForm");

  addForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const formData = new FormData(addForm);

    const deadlineDate = new Date(formData.get("deadline"));
    const deadlineTimestamp = Timestamp.fromDate(deadlineDate);

    const newTask = {
      name: formData.get("name"),
      deadline: deadlineTimestamp,
      done: false,
      startTime: formData.get("startTime"),
    };

    addDoc(tasksCollection, newTask).then((data) => {
      console.log("Task has been added!");
    });
  });
};
