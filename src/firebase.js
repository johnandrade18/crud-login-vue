import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDqO95Tn21xJR93flSt0mHlAWEmZAwEV-4",
  authDomain: "auth-login-crud.firebaseapp.com",
  projectId: "auth-login-crud",
  storageBucket: "auth-login-crud.appspot.com",
  messagingSenderId: "552872562675",
  appId: "1:552872562675:web:6fbea103e65086a6fbcc86",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const auth = firebase.auth();

export { db, auth };
