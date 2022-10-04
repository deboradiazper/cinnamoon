import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA3myW2UfH16APLRN05h3Gqv7ws3yioGOs",
  authDomain: "cinnamoon-newsletter.firebaseapp.com",
  projectId: "cinnamoon-newsletter",
  storageBucket: "cinnamoon-newsletter.appspot.com",
  messagingSenderId: "576734250706",
  appId: "1:576734250706:web:20b2dd80d672e8aa63cf0b",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
export default db;
