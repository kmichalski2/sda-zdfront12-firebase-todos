import { getDocs } from "firebase/firestore";
import { handleDeleteButtons } from "./delete";
import { handleDoneButtons } from "./done";

export const initList = (db, tasksCollection) => {
  getDocs(tasksCollection).then((snapshot) => {
    const documentsData = snapshot.docs;

    renderTasksList(documentsData);
    handleDoneButtons(db);
    handleDeleteButtons(db);
  });
};

const renderTasksList = (documentsData) => {
  const tasksList = document.getElementById("tasksList");

  documentsData.forEach((doc) => {
    const task = doc.data();
    const taskId = doc.id;

    const li = document.createElement("li");
    li.classList.add(
      "list-group-item",
      "d-flex",
      "justify-content-between",
      "align-items-center"
    );

    if (task.done) {
      li.classList.add("task-done");
    }

    const formattedDeadline = task.deadline.toDate().toLocaleDateString();

    const doneButton = `<button data-done="${taskId}" class="btn btn-primary btn-done">${
      task.done ? "Undone" : "Done"
    }</button>`;

    const deleteButton = `<button data-delete="${taskId}" class="btn btn-warning btn-delete">Delete</button>`;

    li.innerHTML = `<span><strong>${task.name}</strong> (${formattedDeadline})</span> <span class="btn-group">${doneButton}${deleteButton}</span>`;

    tasksList.appendChild(li);
  });
};
