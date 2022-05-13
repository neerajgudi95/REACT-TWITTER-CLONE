import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyC9G9mriT0uIHb9NCrGrl7CPe9LLEbNFWM",
  authDomain: "practice-projects-f59d5.firebaseapp.com",
  databaseURL: "https://practice-projects-f59d5.firebaseio.com",
  projectId: "practice-projects-f59d5",
  storageBucket: "practice-projects-f59d5.appspot.com",
  messagingSenderId: "520806787450",
  appId: "1:520806787450:web:ceaa5d0042863fdae28ec3",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;
