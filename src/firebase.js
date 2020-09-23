import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDH5RKfly3tCzlmEphGIkrB78Dc3dPHok8",
  authDomain: "twitter-clone-9b4dd.firebaseapp.com",
  databaseURL: "https://twitter-clone-9b4dd.firebaseio.com",
  projectId: "twitter-clone-9b4dd",
  storageBucket: "twitter-clone-9b4dd.appspot.com",
  messagingSenderId: "921701185521",
  appId: "1:921701185521:web:ba5a394ba44b31d1a0b650",
  measurementId: "G-4PHGG9YYKT",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;
