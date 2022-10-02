import "./style.css";
import "./node_modules/bootstrap/dist/css/bootstrap.min.css";

import { initializeApp } from "firebase/app";
import { collection, getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { initAddForm } from "./add";
import { initList } from "./list";
import { firebaseConfig } from "./config";
import { initRegisterForm } from "./register";
import { initLoginForm } from "./login";

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

const tasksCollection = collection(db, "tasks");

initList(db, tasksCollection);
initAddForm(tasksCollection);

initRegisterForm(auth);
initLoginForm();
