import firebase from "firebase/app";
import "firebase/auth";

export const config = {
  apiKey: "AIzaSyAVRhgQx9iM2T-_M-vkMYP-WJN3_WT0UVE",
  authDomain: "depot-cf157.firebaseapp.com",
  databaseURL: "https://depot-cf157.firebaseio.com",
  projectId: "depot-cf157",
  storageBucket: "depot-cf157.appspot.com",
  messagingSenderId: "658078420232"
};
firebase.initializeApp(config);
// const databaseRef = firebase.database().ref();
// export const todosRef = databaseRef.child("todos");
