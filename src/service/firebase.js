import firebase from 'firebase';
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyA-s2OHyHOdbwCnVjDzI8vYmt-lbO6ORVU",
    authDomain: "hacknovate-e861c.firebaseapp.com",
    databaseURL: "https://hacknovate-e861c.firebaseio.com",
    projectId: "hacknovate-e861c",
    storageBucket: "hacknovate-e861c.appspot.com",
    messagingSenderId: "722872481921",
    appId: "1:722872481921:web:59341417d64a9272e8f580"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig)

  export const auth = firebase.auth()
  export const db = firebase.firestore()

  export default firebase