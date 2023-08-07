import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAjC3jSG4bv182pn6F7ps9OY1VVZMc29GM",
  authDomain: "monkeyrock-remeras.firebaseapp.com",
  projectId: "monkeyrock-remeras",
  storageBucket: "monkeyrock-remeras.appspot.com",
  messagingSenderId: "981855682285",
  appId: "1:981855682285:web:05b79cc3bb40832da816e4",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
