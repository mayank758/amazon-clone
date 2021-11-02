// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// import firebase from "firebase";
// // import  firebase from 'firebase/app';
// import 'firebase/auth';
// import 'firebase/firestore';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
const firebaseConfig = {
    apiKey: "AIzaSyBqMVGJOzAYI8LQE31cFUC8xYW6Nj5389U",
    authDomain: "fir-dc0a6.firebaseapp.com",
    projectId: "fir-dc0a6",
    storageBucket: "fir-dc0a6.appspot.com",
    messagingSenderId: "694791630732",
    appId: "1:694791630732:web:4dbee356becfc5978af0a9",
    measurementId: "G-RG12G97WLE"
  };
const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };