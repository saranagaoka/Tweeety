// import firebase from "firebase";

// const firebaseConfig = {
//   apiKey: "AIzaSyAIfCqLKj_Jl7ILPEyGTiBwFaSDwDd9lqo",
//   authDomain: "tweeety-c4f7f.firebaseapp.com",
//   projectId: "tweeety-c4f7f",
//   storageBucket: "tweeety-c4f7f.appspot.com",
//   messagingSenderId: "933329282523",
//   appId: "1:933329282523:web:60c11114109c783f90b3fe",
//   measurementId: "G-PYCS1WKS1Y",
// };

// const firebaseApp = firebase.initializeApp(firebaseConfig);

// const db = firebaseApp.firestore();

// export default db;

import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import { firebaseConfig } from "../firebaseConfig";

// Use this to initialize the firebase App
const firebaseApp = firebase.initializeApp(firebaseConfig);

// Use these for db & auth
const db = firebaseApp.firestore();
// const auth = firebase.auth();

export default db;
