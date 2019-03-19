import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

var config = {
  apiKey: "AIzaSyBaMEM_zpBs_elceLej5bXcr-dW3wU16HA",
  authDomain: "chat-app-ad235.firebaseapp.com",
  databaseURL: "https://chat-app-ad235.firebaseio.com",
  projectId: "chat-app-ad235",
  storageBucket: "chat-app-ad235.appspot.com",
  messagingSenderId: "583053007167"
};
firebase.initializeApp(config);

const db = firebase.firestore();

export { db, firebase };
