import firebase from "firebase"

const firebaseConfig = {
  apiKey: "AIzaSyCP-owSD3gDCMmH-8mh7N120ygLEkKQq5s",
  authDomain: "facebook-clone-3c4a1.firebaseapp.com",
  projectId: "facebook-clone-3c4a1",
  storageBucket: "facebook-clone-3c4a1.appspot.com",
  messagingSenderId: "468046939934",
  appId: "1:468046939934:web:b5103791bd02355ce52b0f",
  measurementId: "G-5LMDRL8RWP"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider }
export default db;