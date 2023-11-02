// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBAXkVOp18R079RpFvdVgV8YhUXaSsYw3c",
  authDomain: "furnisell-5ba89.firebaseapp.com",
  projectId: "furnisell-5ba89",
  storageBucket: "furnisell-5ba89.appspot.com",
  messagingSenderId: "15005920115",
  appId: "1:15005920115:web:a56f2d39c6a2cfb2b7f306",
  measurementId: "G-VLY04ZS9TX"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };