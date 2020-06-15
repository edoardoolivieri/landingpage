import firebase from "firebase/app"
import 'firebase/firestore'
import 'firebase/auth'

const config = {
    apiKey: "AIzaSyASwrXSjMjaCCOB2-063BSmzq8N83EfXkc",
    authDomain: "sneaker-landingpage.firebaseapp.com",
    databaseURL: "https://sneaker-landingpage.firebaseio.com",
    projectId: "sneaker-landingpage",
    storageBucket: "sneaker-landingpage.appspot.com",
    messagingSenderId: "109336421744",
    appId: "1:109336421744:web:31e3e3580f173816711bb5"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account' });
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase