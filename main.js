import "./style.css";
import "./node_modules/bootstrap/dist/css/bootstrap.min.css";

import { initializeApp } from "firebase/app";
import { collection, getFirestore } from "firebase/firestore";
import { initAddForm } from "./add";
import { initList } from "./list";

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

initList(db, tasksCollection);
initAddForm(tasksCollection);
