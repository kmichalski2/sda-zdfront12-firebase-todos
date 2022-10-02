import "./style.css";
import "./node_modules/bootstrap/dist/css/bootstrap.min.css";

import { initializeApp } from "firebase/app";
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  getFirestore,
  Timestamp,
  updateDoc,
} from "firebase/firestore";
import { initAddForm } from "./add";
import { handleDeleteButtons } from "./delete";

const firebaseConfig = {
  apiKey: "AIzaSyBLFZmEdxZhqVE5pC9IPMJbEg4kPYKOCb4",
  authDomain: "todo-list-b6da8.firebaseapp.com",
  projectId: "todo-list-b6da8",
  storageBucket: "todo-list-b6da8.appspot.com",
  messagingSenderId: "906659629150",
  appId: "1:906659629150:web:26628cbd1243eb86418ccf",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const tasksCollection = collection(db, "tasks");

const tasksList = document.getElementById("tasksList");

getDocs(tasksCollection).then((snapshot) => {
  const documentsData = snapshot.docs;

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

    console.log(task);

    const formattedDeadline = task.deadline.toDate().toLocaleDateString();

    const doneButton = `<button data-done="${taskId}" class="btn btn-primary btn-done">${
      task.done ? "Undone" : "Done"
    }</button>`;

    const deleteButton = `<button data-delete="${taskId}" class="btn btn-warning btn-delete">Delete</button>`;

    li.innerHTML = `<span><strong>${task.name}</strong> (${formattedDeadline})</span> <span class="btn-group">${doneButton}${deleteButton}</span>`;

    tasksList.appendChild(li);
  });

  // Zadanie 1 : Stwórz nowy moduł ( plik ) delete.js
  // Wyodrębnij funkcjonalność usuwania do osobnej funkcji
  // Umieść nową funkcję w module delete.js

  handleDeleteButtons(db);

  // Zadanie 2 : Stwórz nowy moduł ( plik ) done.js
  // Wyodrębnij funkcjonalność usuwania do osobnej funkcji
  // Umieść nową funkcję w module done.js

  const doneButtons = document.querySelectorAll(".btn-done");

  doneButtons.forEach((button) => {
    button.addEventListener("click", (event) => {
      const taskId = event.target.dataset.done;

      const docRef = doc(db, "tasks", taskId);

      getDoc(docRef).then((doc) => {
        const isDone = doc.data().done;

        updateDoc(docRef, {
          done: !isDone,
        }).then(() => {
          console.log("Task has been done");
        });
      });
    });
  });
});

initAddForm(tasksCollection);
