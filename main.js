import "./style.css";
import "./node_modules/bootstrap/dist/css/bootstrap.min.css";

import { initializeApp } from "firebase/app";
import { collection, getFirestore } from "firebase/firestore";
import { initAddForm } from "./add";
import { initList } from "./list";
import { firebaseConfig } from "./config";

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const tasksCollection = collection(db, "tasks");

initList(db, tasksCollection);
initAddForm(tasksCollection);
