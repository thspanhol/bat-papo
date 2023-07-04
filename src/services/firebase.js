import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCoP7I3UyUUMzUQX3MNgxQ1FfOG6J3hFg4",
    authDomain: "bat-papo-a2d50.firebaseapp.com",
    projectId: "bat-papo-a2d50",
    storageBucket: "bat-papo-a2d50.appspot.com",
    messagingSenderId: "464804412923",
    appId: "1:464804412923:web:5d79856186bf3b13135f5e"
  };

  const app = firebase.initializeApp(firebaseConfig);

  const db = app.firestore();
  const auth = app.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export {db, auth, provider};