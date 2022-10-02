import "./style.css";
import "./node_modules/bootstrap/dist/css/bootstrap.min.css";

import { initializeApp } from "firebase/app";
import { collection, getFirestore } from "firebase/firestore";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { initAddForm } from "./add";
import { initList } from "./list";
import { firebaseConfig } from "./config";
import { initRegisterForm } from "./register";
import { initLoginForm } from "./login";

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

const tasksCollection = collection(db, "tasks");

const signOutButton = document.querySelector("#signOutButton");

if (signOutButton) {
  signOutButton.addEventListener("click", (event) => {
    event.preventDefault();

    signOut(auth).then((result) => {
      window.location.href = window.location.origin + "/login.html";
    });
  });
}

onAuthStateChanged(auth, (user) => {
  if (user) {
    initList(db, tasksCollection);
    initAddForm(tasksCollection);
  } else {
    const allowedUrls = ["/register.html", "/login.html"];

    if (!allowedUrls.includes(window.location.pathname)) {
      window.location.href = window.location.origin + "/login.html";
    }
  }
});

initRegisterForm(auth);
initLoginForm(auth);
