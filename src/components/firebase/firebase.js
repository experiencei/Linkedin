import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCXbI4rbGeUrFQEcuQlDZrz6npsXp3GxGY",
    authDomain: "ayelojahighbee01.firebaseapp.com",
    databaseURL: "https://ayelojahighbee01-default-rtdb.firebaseio.com",
    projectId: "ayelojahighbee01",
    storageBucket: "ayelojahighbee01.appspot.com",
    messagingSenderId: "1015820972461",
    appId: "1:1015820972461:web:a7062512d4c2d25177b124"
  };

  firebase.initializeApp(firebaseConfig);
 
export const auth = firebase.auth();
export const db = firebase.firestore();