import Firebase from 'firebase';



const config = {

    apiKey: "AIzaSyA-s2OHyHOdbwCnVjDzI8vYmt-lbO6ORVU",
    authDomain: "hacknovate-e861c.firebaseapp.com",
    databaseURL: "https://hacknovate-e861c.firebaseio.com",
    projectId: "hacknovate-e861c",
    storageBucket: "hacknovate-e861c.appspot.com",
    messagingSenderId: "722872481921",
    appId: "1:722872481921:web:59341417d64a9272e8f580"
};
const Fire = Firebase.initializeApp(config);

export default Fire;