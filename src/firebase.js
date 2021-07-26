import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAutp_BryoEcUbtM9hrHrjy_zEhSaNsg8k",
    authDomain: "tinder-clone-51878.firebaseapp.com",
    projectId: "tinder-clone-51878",
    storageBucket: "tinder-clone-51878.appspot.com",
    messagingSenderId: "71078865082",
    appId: "1:71078865082:web:47df81b0e31c485852ba83",
    measurementId: "G-R4ESBRKHR5"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const database = firebaseApp.firestore();

  export default database;