import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config = {
    apiKey: "AIzaSyD_D1KUU_FnDjJB9xGrKefVFDnqtc5hUps",
    authDomain: "crwn-db-c08aa.firebaseapp.com",
    projectId: "crwn-db-c08aa",
    storageBucket: "crwn-db-c08aa.appspot.com",
    messagingSenderId: "97560878539",
    appId: "1:97560878539:web:f09e55d26d3582157a2a4e",
    measurementId: "G-29BXQ475K2"
  };

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({'promt': 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;